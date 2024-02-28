<template>
  <div class="image-carousel">
    <div class="carousel-container" ref="carousel" 
    @mousedown="startDrag"
    @mouseup="stopDrag"
    @mousemove="drag"
    @mouseleave="stopDrag" :style="{ width: containerWidth + 'px' }">
      <div class="carousel-space-left"></div>
      <div class="image-wrapper" v-for="(image, index) in images" :key="index" @click="handleImageClick(index)">
        <img :src="image" alt="Image" :style="{ height: imageHeight + 'px' }" />
      </div>
      <div class="carousel-space-right"></div>
    </div>
    <image-modal
      :show-modal="modalVisible"
      :current-image="currentImage"
      :text="currentText"
      @close="closeModal"
      @update:text="updateCurrentText"
    ></image-modal>
  </div>
</template>

<script>
import ImageModal from "./ImageModal.vue";

export default {
  components: {
    'image-modal': ImageModal
  },
  data() {
    return {
      containerWidth: 1100,
      imageHeight: 400,
      imageWidth: 150,
      currentIndex: 0,
      images: [
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/1.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/2.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/3.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/4.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/5.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/6.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/7.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/8.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/9.jpg'
        ,
          'https://raw.githubusercontent.com/supahfunk/webgl-carousel/main/public/img/10.jpg'
      ],
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      modalVisible: false,
      currentImage: '',
      currentText: '',
    };
  },
  methods: {
    handleImageClick(index) {
      // Récupérez les informations en fonction de l'index
      this.currentImage = this.images[index];
      this.currentText = ''; // Vous pouvez initialiser avec le texte associé à l'index si nécessaire
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    updateCurrentText(newText) {
      this.currentText = newText;
    },
    startDrag(event) {
      event.preventDefault();
      this.isDragging = true;
      this.startX = event.pageX - this.$refs.carousel.offsetLeft;
      this.scrollLeft = this.$refs.carousel.scrollLeft;
    },
    stopDrag() {
      this.isDragging = false;
    },
    drag(event) {
      event.preventDefault();
      if (!this.isDragging) return;
      const x = event.pageX - this.$refs.carousel.offsetLeft;
      const walk = (x - this.startX) * 1; // Vous pouvez ajuster la sensibilité du glissement ici
      this.$refs.carousel.scrollLeft = this.scrollLeft - walk;
    }

  }
};
</script>

<style scoped>
.image-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
}

.carousel-container {
  overflow: auto; /* Ajoute une barre de défilement pour le parent */
  white-space: nowrap; /* Empêche le saut à la ligne des éléments enfants */
  width: 1100px; /* Définissez la largeur du parent */
  transition: transform 0.5s ease;
}

.carousel-container::-webkit-scrollbar {
  display: none; /* Cache la barre de défilement sur les navigateurs basés sur WebKit (comme Chrome et Safari) */
}

.image-wrapper {
  display: inline-block;
  width: 150px;
  height: 400px;
  overflow: hidden;
  margin-right: 50px; /* Espacement entre les images */
  cursor: pointer;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-space-right, .carousel-space-left {
  width: 300px;
  height: 100px;
  display: inline-block;
}
</style>
