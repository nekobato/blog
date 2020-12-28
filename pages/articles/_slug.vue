<template>
  <Container>
    <Header />
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

<style lang="postcss">
.nuxt-content-container {
  margin-top: 64px;
}
article {
  font-size: 14px;
  color: #444444;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  h4 {
    font-size: 14px;
  }
  h5 {
    font-size: 14px;
  }
  h6 {
    font-size: 14px;
  }
  ul {
    margin-top: 16px;
    padding-left: 16px;
    li > ul {
      margin-top: 4px;
    }
  }
  p {
    margin: 16px 0;
  }
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
