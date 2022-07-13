<template>
  <div>
    <router-view />

    <van-tabbar route active-color="pink">
      <van-tabbar-item replace to="/home"
        >首页
        <template #icon>
          <van-icon name="home-o" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/search"
        >找房
        <template #icon>
          <van-icon name="search" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/answer"
        >资讯
        <template #icon>
          <van-icon name="other-pay" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my"
        >我的
        <template #icon>
          <van-icon name="user-circle-o" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
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
</style>
