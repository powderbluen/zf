<template>
  <div>
    <div class="headers">
      <van-swipe class="my-swipe" :autoplay="1000">
        <van-swipe-item v-for="val in imgList" :key="val.id">
          <img :src="'http://liufusong.top:8080' + val.imgSrc" />
        </van-swipe-item>
      </van-swipe>
      <Headers></Headers>
    </div>
    <div class="housetype">
      <div class="house-item">
        <p class="house-icon">
          <van-icon
            name="wap-home-o"
            @click="$router.push({ name: '/search' })"
          />
        </p>
        <p class="text">整租</p>
      </div>
      <div class="house-item">
        <p class="house-icon">
          <van-icon
            name="friends-o"
            @click="$router.push({ name: '/search' })"
          />
        </p>
        <p class="text">合租</p>
      </div>
      <div class="house-item">
        <p class="house-icon">
          <van-icon
            name="location-o"
            @click="$router.push({ name: '/search' })"
          />
        </p>
        <p class="text">地图找房</p>
      </div>
      <div class="house-item" @click="$router.push({ name: '/add' })">
        <p class="house-icon">
          <van-icon name="balance-o" />
        </p>
        <p class="text">去出租</p>
      </div>
    </div>

    <div class="house-group">
      <span>租房小组</span>
      <span>更多</span>
    </div>

    <van-grid :gutter="10" clickable :column-num="2" direction="horizontal">
      <van-grid-item
        v-for="val in groupList"
        :key="val.id"
        icon="photo-o"
        text="文字"
      >
        <template>
          <van-image :src="'http://liufusong.top:8080' + val.imgSrc" />
        </template>
        <p>{{ val.desc }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Headers from '@/components/Headers.vue'
import { paraMenters, myGroups } from '@/api/home'
import { ararCiry } from '@/api/city'
export default {
  async created () {
    try {
      const res = await paraMenters()
      console.log(res)
      this.imgList = res.data.body
    } catch (error) {
      console.log(error)
    }

    // 租房小组
    this.getMyGroups()
  },
  data () {
    return {
      imgList: [],
      cityList: [],
      groupList: []
    }
  },
  methods: {
    async getMyGroups () {
      try {
        const res = await myGroups()
        console.log(res)
        this.groupList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    // 城市列表
    async GetararCiry () {
      try {
        const res = await ararCiry()
        console.log(res)
        this.cityList = res.data.body.value
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { Headers }
}
</script>

<style scoped lang='less'>
.headers {
  .my-swipe .van-swipe-item {
    width: 750px;
    height: 400px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
.housetype {
  display: flex;
  background-color: #ffffff;
  padding-top: 30px;
  .house-item {
    height: 200px;
    flex: 1;
    text-align: center;
    .house-icon {
      // display: block;
      height: 120px;
      width: 130px;
      line-height: 120px;
      border-radius: 50%;
      margin-left: 30px;
      background-color: #f2fbf7;
      .van-icon {
        font-size: 80px;
        color: #07b06a;
      }
    }
    .text {
      font-size: 26px;
    }
  }
}
.house-group {
  margin: 30px 20px;
  display: flex;
  span {
    flex: 1;
    // text-align: center;
    &:nth-child(1) {
      color: #333333;
      font-size: 36px;
      font-weight: 600;
      // text-align: left;
    }
    &:nth-child(2) {
      color: #787d82;
      font-size: 30px;
      text-align: right;
    }
  }
}
.van-grid {
  .van-image {
    width: 150px;
    height: 100px;
  }
  p {
    font-size: 20px;
  }
}
</style>
