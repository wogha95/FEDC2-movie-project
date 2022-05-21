<template>
  <div
    v-if="loading"
    class="modal">
    <div class="bg"></div>
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 3;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-black2;
  }
  .spinner {
    width: 40px;
    height: 40px;
    display: inline-block;
    border: 8px solid $color-green4;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg)
  }
}
</style>
