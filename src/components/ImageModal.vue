<template>
  <div class="image-modal" v-if="showModal">
    <div class="modal-content">
      <div class="modal-image">
        <img :src="currentImage" alt="Image" />
      </div>
      <div class="modal-text">
        <textarea :value="text" @input="updateText" placeholder="Ajouter du texte..."></textarea>
      </div>
      <button @click="closeModal">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    currentImage: String,
    text: String
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    updateText(event) {
      this.$emit('update:text', event.target.value);
    }
  }
};
</script>

<style scoped>
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  display: flex;
  background: #fff;
  max-width: 800px;
  max-height: 80vh;
  width: 100%;
  height: 80%;
}

.modal-image {
  flex: 1;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-text {
  flex: 1;
  padding: 20px;
}

textarea {
  width: 100%;
  height: 100%;
  resize: none;
}

button {
  margin-top: 10px;
  cursor: pointer;
}
</style>
