import router from '@/routes';

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

      const res = await fetch('/.netlify/functions/detail', {
          body: JSON.stringify({
            imdbID
          })
        }).then((res) => res.json());
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
