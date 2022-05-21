<template>
  <div class="outer">
    <h1 class="keyword">
      검색어 : {{ getKeyword }}
    </h1>
    <ul>
      <li
        v-for="movie in getSearch"
        :key="movie.imdbID"
        @click="fetchDetail(movie.imdbID)">
        <MovieItem :item="movie" />
      </li>
    </ul>
  </div>
  <PageNav :total="getTotalResults" />
  <RouterView />
</template>

<script>
import MovieItem from '../components/MovieItem.vue';
import PageNav from '../components/PageNav.vue';

export default {
  components: {
    MovieItem,
    PageNav
  },
  computed: {
    getKeyword() {
      return this.$store.state.movies.keyword;
    },
    getSearch() {
      return this.$store.state.movies.search;
    },
    getTotalResults() {
      return parseInt(this.$store.state.movies.totalResults);
    }
  },
  watch: {
    $route: {
      handler({ query }) {
        if (query.keyword) {
          this.fetchMovies({ ...this.$route.query });
        }
      },
      immediate: true
    }
  },
  methods: {
    fetchDetail(imdbID) {
      this.$store.dispatch('detail/fetchDetail', {
        imdbID
      });
    },
    fetchMovies({ keyword, page }) {
      this.$store.dispatch('movies/fetchMovies', {
        keyword,
        page
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.outer {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 1000px;
  padding: 0 20px;
  .keyword {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 220px);
    grid-auto-rows: 390px;
    gap: 25px;
    justify-content: center;
    padding: 25px 0;
    li {
      width: 100%;
      height: 100%;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
