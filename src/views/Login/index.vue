<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          block
          type="info"
          native-type="submit"
          color="linear-gradient(to right, powderblue, pink,skyblue)"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      // username: 'jienigui',
      username: 'itheima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('setUser', res.data.body.token)
        this.$notify({
          type: 'success',
          message: '登陆成功'
        })
        this.$router.push({ path: 'my' })
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
