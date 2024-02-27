<template>
  <group
    ref="root"
    @click="handleClick"
    @pointerenter="handlePointerEnter"
    @pointerleave="handlePointerLeave"
  >
    <Plane
      :width="width"
      :height="height"
      :texture="item.image"
      :active="isActive"
    />

    <mesh v-if="isCloseActive" position="[0, 0, 0.01]" @click="handleClose">
      <planeGeometry :args="[viewport.width, viewport.height]" />
      <meshBasicMaterial transparent="true" :opacity="0" :color="red" />
    </mesh>
  </group>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import gsap from 'gsap'
import Plane from './Plane'

export default {
  props: {
    index: Number,
    width: Number,
    height: Number,
    setActivePlane: Function,
    activePlane: Number,
    item: Object
  },
  setup(props) {
    const root = ref(null)
    const hover = ref(false)
    const isActive = ref(false)
    const isCloseActive = ref(false)
    const timeoutID = ref(null)
    const { viewport } = useThree()

    const handlePointerEnter = () => {
      hover.value = true
    }

    const handlePointerLeave = () => {
      hover.value = false
    }

    const handleClick = () => {
      props.setActivePlane(props.index)
    }

    const handleClose = (e) => {
      e.stopPropagation()
      if (!isActive.value) return
      props.setActivePlane(null)
      hover.value = false
      clearTimeout(timeoutID.value)
      timeoutID.value = setTimeout(() => {
        isCloseActive.value = false
      }, 1500)
    }

    onMounted(() => {
      // Initial effect
      if (props.activePlane === props.index) {
        isActive.value = true
        isCloseActive.value = true
      }
    })

    watch(() => props.activePlane, () => {
      if (props.activePlane === props.index) {
        isActive.value = true
        isCloseActive.value = true
      } else {
        isActive.value = false
      }
    })

    watch(hover, (newValue) => {
      const hoverScale = newValue && !isActive.value ? 1.1 : 1
      gsap.to(root.value.scale, {
        x: hoverScale,
        y: hoverScale,
        duration: 0.5,
        ease: 'power3.out'
      })
    })

    watch(isActive, (newValue) => {
      gsap.killTweensOf(root.value.position)
      gsap.to(root.value.position, {
        z: newValue ? 0 : -0.01,
        duration: 0.2,
        ease: 'power3.out',
        delay: newValue ? 0 : 2
      })
    })

    return {
      root,
      viewport,
      hover,
      isActive,
      isCloseActive,
      handlePointerEnter,
      handlePointerLeave,
      handleClick,
      handleClose
    }
  },
  components: {
    Plane
  }
}
</script>
