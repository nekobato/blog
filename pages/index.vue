<template>
  <Container>
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

  head() {
    return {
      title: `${this.$data.article.title} - nekobatoken`,
      description: this.$data.article.description,
      type: "article",
      url: `https://blog.nekobato.net/`,
      image: `https://blog.nekobato.net/image.png`,
      meta: [{ hid: "description", name: "description", content: "nekobato blog" }],
    };
  },
});
</script>

<style lang="postcss" scoped>
.article-list {
  margin-top: 64px;
  min-height: 100vh;
  & > li {
    .link {
      display: block;
      margin-top: 40px;
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
