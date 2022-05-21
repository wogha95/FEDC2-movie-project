<template>
  <div class="app__inner">
    <SearchBar />
    <main class="app__container">
      <RouterView />
    </main>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';

export default {
  components: {
    SearchBar
  }
};
</script>

<style lang="scss" scoped>
.app__inner {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100vh;
  font-size: 44px;
  line-height: 1.4;
  .app__container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    margin-top: 111px;
    padding-bottom: 73px;
  }
}
</style>
