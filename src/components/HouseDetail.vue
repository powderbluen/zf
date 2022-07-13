<template>
  <!-- <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="danger">标签</van-tag>
    </template>
  </van-card> -->
  <div>
    <van-card
      v-for="(item, i) in houseList"
      :key="i"
      @click="$router.push({ name: 'detail', params: { id: item.houseCode } })"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
      :price="item.price"
    >
      <template #tags>
        <van-button size="mini">{{ item.tags[0] }}</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  props: {
    houseList: {
      type: Array,
      required: true
    }
  },
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
