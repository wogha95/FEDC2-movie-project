import router from '@/routes';

export default {
  namespaced: true,
  state() {
    return {
      keyword : '',
      search: [],
      totalResults: 0,
      page: 1
    };
  },
  mutations: {
    setKeyword(state, newKeyword) {
      state.keyword = newKeyword;
    },
    setSearch(state, newSearch) {
      state.search = newSearch;
    },
    setTotalResults(state, newTotalResults) {
      state.totalResults = newTotalResults;
    },
    setPage(state, newPage) {
      state.page = parseInt(newPage);
    }
  },
  actions: {
    async fetchMovies({ state, commit }, payload = {}) {
      const { keyword = state.keyword, page = 1 } = payload;
      commit('setKeyword', keyword);
      if (keyword === '') {
        router.push({
          name: 'Home'
        });
        return ;
      }
      
      const { Response, Search, totalResults } = await fetch('/.netlify/functions/movies', {
          body: JSON.stringify({
            keyword,
            page
          })
        }).then((res) => res.json());
      if (Response === 'True') {
        commit('setSearch', Search);
        commit('setTotalResults', totalResults);
        commit('setPage', page);
      } else {
        router.push({
          name: 'NotFound'
        });
      }
    },
    routeMovies({ state }, payload = {}) {
      const { keyword = state.keyword, page = 1 } = payload;
      router.push({
        name: 'Movies',
        query: {
          keyword,
          page
        }
      });
    }
  }
};
