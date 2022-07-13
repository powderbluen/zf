<template>
  <div class="container">
    <van-nav-bar
      :title="list.community"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-swipe class="my-swipe" :autoplay="1000">
      <van-swipe-item>
        <img class="img" :src="'http://liufusong.top:8080' + list.houseImg" />
      </van-swipe-item>
    </van-swipe>
    <p class="p-title">{{ list.title }}</p>
    <van-tag type="primary">{{ list.tags[0] }}</van-tag>
    <div class="content">
      <div>
        <p>{{ list.price }}/月</p>
        <span>租金</span>
      </div>
      <div>
        <p>{{ list.roomType }}</p>
        <span>房型</span>
      </div>
      <div>
        <p>{{ list.size }}平米</p>
        <span>面积</span>
      </div>
    </div>
    <div class="content2">
      <div>
        <span>装修：精装</span>
        <span>楼层：{{ list.floor }}</span>
      </div>
      <div>
        <span>朝向：{{ list.oriented[0] }}</span>
        <span>类型：普通住宅</span>
      </div>
    </div>
    <van-cell title="房源概括" />
    <hr />
    <div class="content3">
      <div class="content3son">
        <div>
          <van-image
            round
            width="1rem"
            height="1rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div>
          <p>王女士</p>
          <p>已认证房主</p>
        </div>
        <div class="btn">
          <van-button plain type="primary">发消息</van-button>
        </div>
      </div>
    </div>
    <div style="font-size: 14px">
      1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
      2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
      3.人车分流，环境优美。
      4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
    </div>
    <van-cell title="猜你喜欢" />
    <van-card
      num="2"
      price="4500"
      desc="72.32㎡/南 北/低楼层"
      title="安贞西里 3室1厅"
      thumb="@/assets/fangyuan1.jpg"
    >
      <template #tags>
        <van-button size="mini">{{ list.tags[0] }}</van-button>
      </template>
    </van-card>
    <van-card
      num="2"
      price="4500"
      desc="72.32㎡/南 北/低楼层"
      title="安贞西里 3室1厅"
      thumb="@/assets/fangyuan1.jpg"
    >
      <template #tags>
        <van-button size="mini">{{ list.tags[0] }}</van-button>
      </template>
    </van-card>
    <van-card
      num="2"
      price="4500"
      desc="72.32㎡/南 北/低楼层"
      title="安贞西里 3室1厅"
      thumb="@/assets/fangyuan1.jpg"
    >
      <template #tags>
        <van-button size="mini">{{ list.tags[0] }}</van-button>
      </template>
    </van-card>
    <div class="bottom">
      <van-button
        :icon="isShow ? 'like' : 'like-o'"
        @click="shouc"
        type="default"
        >收藏
        <template slot=""> </template>
      </van-button>
      <van-button type="default">在线咨询</van-button>
      <van-button type="primary">电话预约</van-button>
    </div>
  </div>
</template>

<script>
import { houseDetail, favorites, deleteFavorites } from '@/api/house'
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  async created () {
    this.getHouseDetail()
  },
  data () {
    return {
      list: [],
      isShow: false
    }
  },
  methods: {
    async getHouseDetail () {
      const res = await houseDetail(this.id)
      console.log(res)
      this.list = res.data.body
    },
    async shouc () {
      try {
        if (this.isShow) {
          const res = await deleteFavorites(this.list.houseCode)
          console.log(res)
          this.$toast('取消收藏')
          this.isShow = false
        } else if (this.isShow === false) {
          const res = await favorites(this.list.houseCode)
          console.log(res)
          this.$toast.success('收藏成功')
          this.isShow = true
        }
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
.container {
  background-color: #ffffff;
  .img {
    height: 400px;
  }
  .p-title {
    padding: 30px 0 0 30px;
    font-size: 26px;
  }
  /deep/.van-tag {
    margin: 30px 0 0 30px;
  }
  .content {
    display: flex;
    width: 650px;
    height: 200px;
    margin-left: 50px;
    align-content: center;
    border-bottom: 2px solid #dadada;
    border-top: 2px solid #dadada;
    margin-top: 30px;
    div {
      flex: 1;
      justify-content: center;
      align-items: center;
      p {
        font-size: 30px;
      }
      span {
        font-size: 30px;
      }
    }
  }
  .content2 {
    flex: 1;
    justify-content: space-around;
    span {
      font-size: 24px;
      padding-left: 100px;
    }
  }
  .content3 {
    display: flex;

    div {
      flex: 1;
      float: left;
      font-size: 20px;
      margin-left: 10px;
    }
    .btn {
      margin-left: 300px;

      /deep/.van-button {
        width: 150px;
        height: 80px;
      }
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    /deep/.van-button {
      width: 250px;
    }
  }
}
</style>
