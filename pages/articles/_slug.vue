<template>
  <Container>
    <article>
      <h1>{{ article.title }}</h1>
      <nuxt-content class="body" :document="article" />
    </article>
  </Container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return {
      article,
    };
  },
  head() {
    return {
      title: `${this.$data.article.title} - nekobatoken`,
      description: this.$data.article.description,
      type: "article",
      url: `https://blog.nekobato.net/articles/${this.$data.article.slug}`,
      image: `https://blog.nekobato.net/image.png`,
      meta: [
        { hid: "description", name: "description", content: "nekobato blog" },
        { hid: "og:site_name", property: "og:site_name", content: "nekobatoken" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://blog.nekobato.net/articles/${this.$data.article.slug}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.$data.article.title} - nekobatoken`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$data.article.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://blog.nekobato.net/image.png`,
        },
      ],
    };
  },
});
</script>

<style scoped>
article {
  margin-top: 64px;
}
.body {
  margin-top: 40px;
}
</style>

<style lang="postcss"></style>
