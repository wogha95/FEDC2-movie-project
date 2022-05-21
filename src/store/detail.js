import router from '@/routes';

const API_ENDPOINT = 'https://www.omdbapi.com';
const API_KEY = '7035c60c';

export default {
  namespaced: true,
  store() {
    return {
      detail: {}
    };
  },
  mutations: {
    setDetail(state, newDetail) {
      state.detail = newDetail;
    }
  },
  actions: {
    async fetchDetail({ commit }, payload = {}) {
      const { imdbID } = payload;
      if (imdbID === '' || imdbID === undefined ) {
        router.push({
          name: 'Home'
        });
        return ;
      }

      const res = await fetch(`${API_ENDPOINT}?apikey=${API_KEY}&i=${imdbID}`).then((res) => res.json());
      // const res = await fetch('/.netlify/functions/detail', {
      //     body: JSON.stringify({
      //       imdbID
      //     })
      //   }).then((res) => res.json());
      if (res.Response === 'True') {
        commit('setDetail', res);
        router.push({
          name: 'Detail',
          params: {
            id: imdbID
          }
        });
      } else {
        router.push({
          name: 'NotFound'
        });
      }
    },
    goBack() {
      router.back();
    }
  }
};
