<template>
  <div>
    <van-nav-bar left-arrow @click-left="$router.go(-1)" title="城市列表" />

    <!-- 热门城市 -->
    <van-index-bar>
      <van-index-anchor>热门城市</van-index-anchor>
      <van-cell v-for="(val, i) in hotCiryList" :key="i" :title="val.label" />
    </van-index-bar>

    <van-index-bar>
      <div v-for="(item, index) in cityList" :key="index">
        <van-index-anchor :index="index" />

        <van-cell
          v-for="(item, index) in item"
          :key="index"
          :title="item.label"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { ararCiry, hotCiry } from '@/api/city'

const formatCityData = (list) => {
  const cityList = {}

  // 1 遍历数组
  list.forEach(item => {
    // 2 获取每个城市的首字母
    const first = item.short.substr(0, 1).toUpperCase()
    // 3 判断citylist中是否有该分类
    if (cityList[first]) {
      // 4 如果有直接往分类里push数据
      // cityList[first] => [{},{}]
      cityList[first].push(item)
    } else {
      // 5 如果没有就先创建一个数组 然后 把当前城市信息添加进数组中
      cityList[first] = [item]
    }
  })

  // 2 获取索引数据
  const cityIndex = Object.keys(cityList).sort()

  // 获取城市名
  // const cityNameList = []
  // for (const p in cityList) {
  //   cityNameList.push(cityList[p].name)
  // }

  // console.log(cityNameList)

  return {
    cityList, cityIndex

  }
}

export default {
  created () {
    // for (let i = 65; i <= 90; i++) {
    //   const c = String.fromCharCode(i)
    //   if (this.codeList[c]) {
    //     console.log(c, this.codeList[c])
    //   }
    // }
    // console.log(this.codeList)
    this.getArarCiry()
    // 热门城市
    this.getHotCiry()
  },
  data () {
    return {
      cityList: [],
      cityIndex: [],
      codeList: [],
      // 热门城市
      hotCiryList: []
    }
  },
  methods: {
    async getArarCiry () {
      try {
        const res = await ararCiry()
        const { cityList, cityIndex } = formatCityData(res.data.body)
        this.codeList = res.data.body
        console.log(this.codeList)

        this.cityList = cityList
        this.cityIndex = cityIndex
      } catch (err) {
        console.log(err)
      }
    },
    // 热门城市
    async getHotCiry () {
      try {
        const res = await hotCiry()
        console.log(res)
        this.hotCiryList = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  },

  computed: {},
  watch: {},
  filters: {},
  components: {}

}

</script>

<style scoped lang='less'>
</style>
