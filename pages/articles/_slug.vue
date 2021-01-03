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
      title: this.$data.article.title,
      meta: [],
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
