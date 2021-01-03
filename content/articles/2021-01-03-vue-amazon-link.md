---
title: はてなっぽいAmazon Linkを作る with Vue
description: "自分の Blog ではてなで表示するっぽい Amazon アソシエイト リンクを貼りたい"
---

## 概要

自分の Blog ではてなで表示するっぽい Amazon アソシエイト リンクを貼りたい。

商品リンクは[ここ](https://affiliate.amazon.co.jp/home/productlinks/search)から生成できるが、 商品検索 → リンク生成 → リンク選択と工程が必要だった。

## 実装

リンクのテキストはどっちみち自分で指定できるし、しなければいけないようなので、そこは`<slot>`に任せる。

```vue
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

const trackerId = "アドトラッカーID";

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
```

スタイルはこのブログのためのものなので、よしなに

## 画面

こんな感じになる。

![image](https://user-images.githubusercontent.com/861170/103482997-91b23b00-4e27-11eb-826d-d268466ec4ad.png)

## ブックマークレット

対象の Amazon 商品ページ上で実行すればそのまま目的のタグが得られるブックマークレットを置いておく。

```js
javascript: alert(
  `<amazon-link :asin="${document.querySelector("#ASIN").value}">${document
    .querySelector("h1")
    .textContent.trim()}</amazon-link>`
);
```
