<template>
  <group>
    <!-- Render Plane Events -->
    <mesh position="[0, 0, -0.01]" @wheel="handleWheel" @pointerdown="handleDown" @pointerup="handleUp"
      @pointermove="handleMove" @pointerleave="handleUp" @pointercancel="handleUp">
      <planeGeometry :args="[viewport.width, viewport.height]" />
      <meshBasicMaterial transparent="true" :opacity="0" />
    </mesh>

    <!-- Render Slider -->
    <group ref="root">
      <CarouselItem v-for="(item, i) in images" :key="item.image" :width="planeSettings.width"
        :height="planeSettings.height" :setActivePlane="setActivePlane" :activePlane="activePlane" :item="item"
        :index="i" />
    </group>
  </group>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import gsap from 'gsap'
import CarouselItem from './CarouselItem'
import images from '../../../public/images'

export default {
  setup() {
    const root = ref(null)
    const activePlane = ref(null)
    const progress = ref(0)
    const startX = ref(0)
    const isDown = ref(false)
    const speedWheel = 0.02
    const speedDrag = -0.3
    const viewport = reactive(useThree().viewport)

    const planeSettings = {
      width: 1,
      height: 2.5,
      gap: 0.1
    }

    gsap.defaults({
      duration: 2.5,
      ease: 'power3.out'
    })

    const handleWheel = (e) => {
      if (activePlane.value !== null) return
      const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX)
      const wheelProgress = isVerticalScroll ? e.deltaY : e.deltaX
      progress.value += wheelProgress * speedWheel
    }

    const handleDown = (e) => {
      if (activePlane.value !== null) return
      isDown.value = true
      startX.value = e.clientX || (e.touches && e.touches[0].clientX) || 0
    }

    const handleUp = () => {
      isDown.value = false
    }

    const handleMove = (e) => {
      if (activePlane.value !== null || !isDown.value) return
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
      const mouseProgress = (x - startX.value) * speedDrag
      progress.value += mouseProgress
      startX.value = x
    }

    const setActivePlane = (index) => {
      activePlane.value = index
    }

    const displayItems = (item, index, active) => {
      gsap.to(item.position, {
        x: (index - active) * (planeSettings.width + planeSettings.gap),
        y: 0
      })
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    const handleResize = () => {
      viewport.width = window.innerWidth
      viewport.height = window.innerHeight
    }

    const items = computed(() => root.value ? root.value.children : [])

    const renderSlider = () => {
      return (
        <group ref={root}>
          {images.map((item, i) => (
            <CarouselItem
              width={planeSettings.width}
              height={planeSettings.height}
              setActivePlane={setActivePlane}
              activePlane={activePlane.value}
              key={item.image}
              item={item}
              index={i}
            />
          ))}
        </group>
      )
    }

    return {
      activePlane,
      progress,
      handleWheel,
      handleDown,
      handleUp,
      handleMove,
      renderSlider,
      items,
      viewport
    }
  }
}
</script>
