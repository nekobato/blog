<template>
  <a class="link" :href="href" target="_blank">
    <figure>
      <img :src="imageSource" alt="商品画像" />
    </figure>
    <span class="item-name">
      <slot></slot>
    </span>
  </a>
</template>
<script lang="ts">
import Vue from "vue";

const trackerId = "nekobato01-22";

export default Vue.extend({
  props: ["asin"],
  computed: {
    href() {
      return `https://www.amazon.co.jp/dp/${this.asin}/?tag=${trackerId}&language=ja_JP`;
    },
    imageSource() {
      return `//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${this.asin}&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=${trackerId}&language=ja_JP`;
    },
  },
});
</script>
<style lang="postcss" scoped>
.link {
  display: flex;
  align-items: center;
  margin: 16px 0 0;
  padding: 16px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  text-decoration: none;

  & > figure {
    flex-shrink: 0;
    width: 160px;
    height: 160px;
    & > img {
      object-fit: contain;
    }
  }

  .item-name {
    margin-let: 8px;
    font-size: 16px;
  }
}
</style>
