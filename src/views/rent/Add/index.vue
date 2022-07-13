<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.go(-1)" />
    <van-form @submit="onSubmit">
      <van-cell title="房源信息" class="houseinfo" />
      <van-cell title="小区名称" is-link value="请输入小区名称" />
      <!-- 租金 -->
      <van-field
        v-model.number="price"
        label="租金"
        type="number"
        placeholder="请输入租金/月"
      >
        <template slot="extra"> ￥/月</template></van-field
      >
      <!-- 建筑面积 -->
      <van-field
        v-model.number="construction"
        label="建筑面积"
        type="number"
        placeholder="请输入租金/月"
      >
        <template slot="extra">m²</template></van-field
      >

      <!-- 户型 -->
      <van-cell
        @click="isHousetypeShow = true"
        title="户型"
        is-link
        value="请选择"
      />
      <van-popup
        v-model="isHousetypeShow"
        position="bottom"
        :style="{ height: '45%' }"
      >
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </van-popup>

      <!-- 所在楼层 -->
      <van-cell
        @click="isFloorShow = true"
        title="所在楼层"
        is-link
        value="请选择"
      />
      <van-popup
        v-model="isFloorShow"
        position="bottom"
        :style="{ height: '45%' }"
      >
        <van-picker
          show-toolbar
          :columns="columns2"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </van-popup>

      <!-- 朝向 -->
      <van-cell
        @click="isOrientationShow = true"
        title="所在楼层"
        is-link
        value="请选择"
      />
      <van-popup
        v-model="isOrientationShow"
        position="bottom"
        :style="{ height: '45%' }"
      >
        <van-picker
          show-toolbar
          :columns="columns3"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </van-popup>
      <van-cell title="房屋标题" />
      <van-field
        v-model="houseTitle"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
      />
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
    </van-form>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      price: '',
      construction: '', // 建筑面积
      columns: ['一室', '两室', '三室', '四室', '四室+'],
      columns2: ['高楼层', '中楼层', '低楼层'],
      columns3: ['东', '西', '南', '北', '东南', '东北', '西南', '西北'],
      isHousetypeShow: false, // 户型
      isFloorShow: false, // 所在楼层
      isOrientationShow: false, // 朝向
      houseTitle: '', // 房屋标题
      uploader: []
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    onConfirm () { },
    onCancel () { },
    onChange () { }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.houseinfo {
  color: #21b97a;
}
</style>
