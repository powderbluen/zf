<template>
  <div>
    <van-nav-bar title="房屋管理" left-arrow @click-left="$router.go(-1)" />
    <HouseDetail :houseList="houseList"></HouseDetail>
  </div>
</template>

<script>
import { release } from '@/api/house'
import HouseDetail from '@/components/HouseDetail.vue'
export default {
  async created () {
    const res = await release()
    console.log(res)
    this.houseList = res.data.body
  },
  data () {
    return {
      houseList: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: { HouseDetail }
}
</script>

<style scoped lang='less'>
</style>
