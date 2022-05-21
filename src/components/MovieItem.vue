<template>
  <div class="item">
    <div
      class="post"
      :style="`background-image: url(${item.Poster})`"></div>
    <div class="title">
      {{ item.Title }}
    </div>
    <div class="tags">
      <span class="year">
        {{ item.Year }}
      </span>
      <span :class="item.Type">
        {{ item.Type }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px;
  gap: 5px;
  box-shadow: 0 5px 18px -7px $color-black3;
  transition-duration: 0.1s;
  cursor: pointer;
  &:hover {
    z-index: 0;
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
  .post {
    flex-shrink: 0;
    width: 100%;
    height: 300px;
    border-radius: 4px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .title {
    width: 100%;
    flex-grow: 1;
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .tags {
    font-size: 14px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    span {
      padding: 4px;
      background-color: $color-gray2;
      border-radius: 8px;
    }
    .year {
      background-color: $color-orange;
    }
    .movie {
      background-color: $color-royalblue;
    }
    .series {
      background-color: $color-green5;
    }
    .episode {
      background-color: $color-purple;
    }
  }
}
</style>
