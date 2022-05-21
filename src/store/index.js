import { createStore } from 'vuex';
import movies from './movies';
import detail from './detail';

export default createStore({
  modules: {
    movies,
    detail
  }
});
