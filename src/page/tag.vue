<template>
  <div class="tag-wrap">
    <h4>标签（{{tagList.length}}）</h4>
    <el-tag class="tag" v-for="item in tagList" :key="item._id">
      <router-link :to="`/archives/tag/${item._id}`" tag="span">{{item.name}}</router-link>
    </el-tag>
  </div>
</template>

<script>
export default {
  computed: {
    tagList: function() {
      return this.$store.state.users.tags;
    }
  }
};
</script>

<style lang="less" scoped>
.tag-wrap {
  padding: 50px 0;
  text-align: center;

  h4 {
    margin-bottom: 2rem;
  }
  .tag {
    margin-right: 2rem;
    span {
      cursor: pointer;
    }
  }
}
</style>