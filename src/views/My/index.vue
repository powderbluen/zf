<template>
  <div class="my-container">
    <!-- 已登陆 -->
    <div v-if="token">
      <div class="header user-info"></div>
      <div class="personal">
        <div class="base-info">
          <van-image
            class="user-img"
            fit="cover"
            round
            :src="'http://liufusong.top:8080' + userinfoList.avatar"
          />
          <span class="user-span">{{ userinfoList.nickname }}</span>
          <van-button
            class="log-btn"
            round
            type="primary"
            size="mini"
            @click="logOut"
            >退出</van-button
          >
          <div class="personal-data">
            <span>编辑个人资料</span>
            <van-icon name="play" />
          </div>
        </div>
      </div>
    </div>

    <!-- 未登录 -->
    <div v-else>
      <div class="header not-login"></div>
      <div class="personal">
        <div class="base-info tourist">
          <van-image
            class="user-img tourist-img"
            fit="cover"
            round
            :src="require('@/assets/yy.jpg')"
          />
          <span class="user-span tourist-span" style="margin-left: 135px"
            >游客</span
          >
          <van-button
            @click="$router.push('/login')"
            class="log-btn login"
            size="mini"
            round
            type="primary"
            >去登陆</van-button
          >
        </div>
      </div>
    </div>

    <!-- 宫格 -->
    <van-grid clickable :column-num="3">
      <van-grid-item text="我的收藏">
        <template #icon>
          <van-icon name="like-o" />
        </template>
      </van-grid-item>
      <van-grid-item text="我的出租" @click="$router.push({ name: '/rent' })">
        <template #icon>
          <van-icon name="wap-home-o" />
        </template>
      </van-grid-item>
      <van-grid-item text="看房记录">
        <template #icon>
          <van-icon name="underway-o" />
        </template>
      </van-grid-item>
      <van-grid-item text="成为房主">
        <template #icon>
          <van-icon name="manager-o" />
        </template>
      </van-grid-item>
      <van-grid-item text="个人资料">
        <template #icon>
          <van-icon name="contact" />
        </template>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <template #icon>
          <van-icon name="phone-o" />
        </template>
      </van-grid-item>
    </van-grid>

    <div class="haoke"></div>
  </div>
</template>

<script>
import { userInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  created () {
    this.getUserInfo()
  },
  data () {
    return {
      userinfoList: []
    }
  },
  methods: {
    logOut () {
      try {
        this.$dialog.confirm({
          message: '确定退出吗'
        })
          .then(() => {
            this.$notify({ type: 'success', message: '退出成功' })
            this.$store.commit('setUser', null)
          })
          .catch(() => {
            // on cancel
          })
      } catch (error) {
        console.log(error)
      }
    },
    async getUserInfo () {
      try {
        const res = await userInfo()
        console.log(res)
        this.userinfoList = res.data.body
        console.log(this.userinfoList)
        if (this.$store.state.token) {
          this.$toast({
            type: 'success',
            message: '获取数据成功',
            position: 'top'
          })
        }
      } catch (error) {
        console.log(error)
        this.$toast({
          message: '获取数据失败',
          position: 'top'
        })
      }
    }
  },
  computed: {
    ...mapState(['token'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-container {
  .header {
    height: 500px;
    background: url("~@/assets/xh.jpg");
    background-size: cover;
  }
  .personal {
    width: 600px;
    height: 350px;
    background-color: #ffffff;
    margin-top: -200px;
    margin-left: 75px;
    margin-bottom: 50px;
    box-shadow: 0px 15px 15px 5px #f1f1f1;
    .base-info {
      display: flex;
      flex-direction: column;
      .user-img {
        width: 130px;
        height: 130px;
        margin-left: 230px;
        margin-top: -70px;
        border: 5px solid #ffffff;
        box-shadow: 0px 0px 10px 5px gray;
      }
      .user-span {
        font-size: 30px;
        display: block;
        margin-left: 230px;
        padding-top: 30px;
        // padding-bottom: 50px;
      }
      .log-btn {
        width: 150px;
        height: 50px;
        margin-left: 230px;
        margin-top: 30px;
        margin-bottom: 30px;
        color: black;
      }
      .personal-data {
        color: gray;
        font-size: 20px;
        text-align: center;
      }
    }
  }
  .haoke {
    margin-top: 40px;
    margin-left: 35px;
    width: 680px;
    height: 400px;
    background: url("~@/assets/haoke.jpg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
