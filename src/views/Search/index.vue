<template>
  <div>
    <Headers class="headers"></Headers>
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block @click="confirm"
                >确定</van-button
              >
            </van-col>
          </van-row>
        </van-dropdown-item>

        <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>

        <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>

        <van-dropdown-item
          title="筛选"
          @open="isFilterShow = true"
        ></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>

    <!-- 弹出层 -->
    <van-popup
      position="right"
      style="height: 100%; width: 70%"
      v-model="isFilterShow"
    >
    </van-popup>

    <!-- 房子 -->
    <!-- <van-card
      v-for="(item, i) in houseList"
      :key="i"
      @click="$router.push({ name: 'detail', params: { id: item.houseCode } })"
      :desc="item.desc"
      :title="item.price"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
      :price="item.price"
    >
      <template #tags>
        <van-button size="mini">{{ item.tags }}</van-button>
      </template>
    </van-card> -->
    <HouseDetail :houseList="houseList"></HouseDetail>
  </div>
</template>

<script>
import HouseDetail from '@/components/HouseDetail.vue'
import { houseCondition, house } from '@/api/house'
import Headers from '@/components/Headers.vue'
export default {
  created () {
    this.getHouse()
    this.confirm()
  },
  data () {
    return {
      id: 'AREA%7C88cff55c-aaa4-e2e0',
      columns: [],
      columns1: [],
      columns2: [],
      isFilterShow: false,
      // 房子
      houseList: []

    }
  },
  methods: {
    async getHouse () {
      const res = await houseCondition()
      console.log(res)
      res.data.body.area.children[0].children = [{ label: '' }]
      res.data.body.subway.children[0].children = [{ label: '' }]
      this.columns = [res.data.body.area, res.data.body.subway]
      this.columns1 = res.data.body.rentType
      this.columns2 = res.data.body.price
    },
    async confirm () {
      try {
        const res = await house({ cityId: this.id })
        console.log(res)
        this.houseList = res.data.body.list
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { Headers, HouseDetail }
}
</script>

<style scoped lang='less'>
.headers {
  margin-bottom: 140px;
}
</style>
