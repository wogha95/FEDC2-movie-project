<template>
  <div class="modal">
    <div
      class="bg"
      @click="closeModal"></div>
    <div class="box">
      <div class="head">
        <div
          class="post"
          :style="`background-image: url(${getPoster})`"></div>
        <div class="details">
          <div class="title">
            {{ getDetail.Title }}
          </div>
          <div class="detail">
            <div>Director</div>{{ getDetail.Director }}
          </div>
          <div class="detail">
            <div>Actors</div>{{ getDetail.Actors }}
          </div>
          <div class="detail">
            <div>Genre</div>{{ getDetail.Genre }}
          </div>
          <div class="detail">
            <div>Released</div>{{ getDetail.Released }}
          </div>
          <div class="detail">
            <div>RunTime</div>{{ getDetail.Runtime }}
          </div>
          <div class="detail">
            <div>Type</div>{{ getDetail.Type }}
          </div>
        </div>
      </div>
      <div class="body">
        <p>{{ getDetail.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getDetail() {
      return this.$store.state.detail.detail;
    },
    getPoster() {
      return this.getDetail.Poster.replace('SX300', 'SX700');
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch('detail/goBack');
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 2;
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
    cursor: pointer;
  }
  .box {
    width: 100%;
    max-width: 980px;
    max-height: calc(100% - 100px);
    padding: 20px;
    margin: 0 20px;
    background-color: $color-white;
    position: relative;
    border-radius: 12px;
    gap: 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    .head {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $color-black1;
      padding: 20px;
      gap: 20px;
      font-size: 20px;
      .post {
        flex-shrink: 0;
        width: 200px;
        height: 300px;
        border-radius: 4px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .details {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        .detail {
          display: flex;
          div {
            color: $color-gray1;
            flex-shrink: 0;
            margin-right: 10px;
          }
        }
        .title {
          font-size: 35px;
          margin-bottom: 10px;
        }
      }
    }
    .body {
      flex-grow: 1;
      padding: 20px;
      font-size: 30px;
    }
  }
}
@media (max-width: #{$breakpoint-tablet}){
  .modal {
    .box {
      .head {
        font-size: 16px;
        .details {
          .title {
            font-size: 30px;
          }
        }
      }
      .body {
        font-size: 25px;
      }
    }
  }
}
@media (max-width: #{$breakpoint-mobile}){
  .modal {
    .box {
      min-width: 335px;
      height: auto;
      padding: 10px;
      gap: 0;
      .head {
        height: auto;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        font-size: 15px;
        .details {
          font-size: 15px;
          .title {
            font-size: 20px;
          }
        }
      }
      .body {
        font-size: 20px;
      }
    }
  }
}
</style>
