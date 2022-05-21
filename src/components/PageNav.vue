<template>
  <nav>
    <div
      v-if="!firstPage"
      class="prev"
      @click="fetchPage(-1)"></div>
    <div
      v-else
      class="none"></div>
    <div class="page">
      <span>{{ getPage }} / {{ getTotalPage }}</span>
    </div>
    <div
      v-if="!lastPage"
      class="next"
      @click="fetchPage(1)"></div>
    <div
      v-else
      class="none"></div>
  </nav>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getTotalPage() {
      const quotient = Math.floor(this.total / 10);
      const remainder = this.total % 10;
      return remainder === 0 ? quotient : quotient + 1;
    },
    getPage() {
      return parseInt(this.$store.state.movies.page);
    },
    firstPage() {
      return this.getPage === 1 ? true : false;
    },
    lastPage() {
      return this.getPage === this.getTotalPage ? true : false;
    }
  },
  methods: {
    fetchPage(control) {
      this.$store.dispatch('movies/routeMovies', {
        page: this.getPage + control
      });
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  z-index: 1;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $color-black1;
  padding: 10px;
  background-color: $color-white;
  .prev, .next {
    width: 15px;
    height: 15px;
    border: 20px solid transparent;
    transition-duration: 0.3s;
  }
  .prev {
    border-right-color: $color-green3;
    &:hover {
      border-right-color: $color-green4;
      transition-duration: 0.3s;
    }
  }
  .next {
    border-left-color: $color-green3;
    &:hover {
      border-left-color: $color-green4;
      transition-duration: 0.3s;
    }
  }
  .none {
    width: 40px;
    height: 40px;
  }
  .page {
    font-size: 30px;
    display: flex;
    align-items: center;
    gap : 10px;
  }
}
</style>
