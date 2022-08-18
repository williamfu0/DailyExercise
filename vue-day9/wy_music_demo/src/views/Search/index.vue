<template>
  <div>
    <van-search
      v-model="keyWord"
      shape="round"
      placeholder="请输入搜索关键词"
    ></van-search>

    <p class="hot_title">热搜歌曲</p>
    <div class="hot_name_wrap" v-if="!songslist.length">
      <span
        class="hot_item"
        v-for="(item, index) in keylist"
        :key="index"
        @click="keyWord = item.first"
      >
        {{ item.first }}
      </span>
    </div>

    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-cell
        center
        v-for="item in songslist"
        :key="item.id"
        :title="item.name"
        :label="item.ar[0].name"
      >
        <!-- 具名插槽 -->
        <template #right-icon>
          <van-icon name="play-circle-o" size="0.6rem" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { hotwords, searchsong } from "@/api/search";
export default {
  name: "SearchPage",

  data() {
    return {
      keylist: [],
      keyWord: " ",
      songslist: [],
    };
  },
  watch: {
    keyWord(v) {
      this.SearchSong(v);
    },
  },
  created() {
    this.hotwords();
  },

  methods: {
    async hotwords() {
      const {
        data: {
          result: { hots },
        },
      } = await hotwords();
      this.keylist = hots;
    },
    async SearchSong(keywords) {
      const {
        data: {
          result: { songs },
        },
      } = await searchsong({ keywords, limit: 12 });
      this.songslist = songs;
      console.log(this.songslist);
    },
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>