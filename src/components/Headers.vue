<template>
  <div>
    <div class="search">
      <div class="search-ipt">
        <van-button @click="$router.push({ path: '/city' })" block
          >北京
          <template #icon>
            <van-icon name="play" />
          </template>
        </van-button>
      </div>
      <van-field type="password" placeholder="请输入小区或地址" />
      <div class="icon-search">
        <van-icon name="search" color="gray" size="20" />
      </div>
      <div class="location">
        <van-icon name="location-o" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.search {
  position: fixed;
  top: 50px;
  left: 60px;
  width: 700px;
  height: 74px;
  // background-color: pink;
  .search-ipt {
    width: 600px;
    height: 74px;
    background-color: #ffffff;
    border-radius: 15px;
    .van-button {
      width: 2rem;
      height: 1rem;
      font-size: 20px;
      border-radius: 15px 0px 0px 15px;
      background-color: #ffffff;
    }
  }
  .van-field {
    position: fixed;
    top: 50px;
    right: 140px;
    width: 350px;
    height: 1rem;
    // background-color: pink;
  }
  .icon-search {
    position: fixed;
    top: 50px;
    left: 240px;
  }
  .location {
    position: fixed;
    top: 55px;
    right: 20px;
    .van-icon {
      font-size: 60px;
      color: #ffffff;
    }
  }
}
</style>
