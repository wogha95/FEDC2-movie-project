<template>
  <div class="bar">
    <input
      ref="searchBar"
      placeholder="영화를 검색해보세요!"
      type="text"
      @keyup.enter.exact="search" />
  </div>
</template>

<script>
export default {
  computed: {
    getKeyword() {
      return this.$store.state.movies.keyword;
    }
  },
  mounted() {
    this.$refs.searchBar.focus();
  },
  methods: {
    search(event) {
      const keyword = event.target.value.trim();
      if(keyword === this.getKeyword) return ;
      this.$refs.searchBar.value = '';
      this.$store.dispatch('movies/routeMovies', {
        keyword
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bar {
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: 1px solid $color-black1;
  background-color: $color-white;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  input {
    max-width: 800px;
    flex-grow: 1;
    flex-basis: 100px;
    margin: 25px 40px 20px;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 20px;
    border: 1px solid $color-green2;
    outline: none;
    background-color: $color-green1;
    &:focus {
      border: 1px solid $color-green3;
      background-color: $color-green2;
      transition-duration: 0.3s;
    }
  }
}
</style>
