<template>
  <Container>
    <Header />
    <ul class="article-list">
      <li v-for="article in articles" :key="article.createdAt">
        <nuxt-link class="link" :to="article.path">
          <span class="title">{{ article.title }}</span>
          <span class="created">{{ toDate(article.createdAt) }}</span>
          <p class="description">{{ article.description }}</p>
        </nuxt-link>
      </li>
    </ul>
  </Container>
</template>

<script lang="ts">
import Vue from "vue";
import day from "dayjs";

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content("articles").fetch();

    return {
      articles,
    };
  },
  methods: {
    toDate(datetime: string) {
      return day(datetime).format("YYYY-MM-DD");
    },
  },
});
</script>

<style lang="postcss" scoped>
.article-list {
  margin-top: 64px;
  & > li {
    .link {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #444444;
      text-align: left;
    }
    .title {
      font-size: 24px;
      font-weight: bold;
      color: #444444;
    }
  }
}
</style>
