export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nekobatoken",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description,
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "ページタイトル",
      },
      { hid: "og:type", property: "og:type", content: "blog" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://blog.nekobato.net",
      },
      { hid: "og:title", property: "og:title", content: "nekobatoken" },
      {
        hid: "og:description",
        property: "og:description",
        content: "デフォルトのディスクリプションを設定するよ",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://サイトのUR/og.jpg",
      },
      {
        hid: "twitter:card",
        neme: "twitter:card",
        content: "summary_large_image",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/assets/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["./styles/base.pcss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxt/content"],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      // キーとしてプラグイン名を、値として引数を追加します
      // プラグインは前もって npm か yarn で dependencies としてインストールしておきます
      plugins: {
        // 値として false を渡すことによりプラグインを無効化します
        "postcss-nested": {},
        "postcss-simple-vars": {},
        "postcss-custom-media": {},
      },
      preset: {
        // postcss-preset-env 設定を変更します
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
  generate: {
    dir: "docs",
  },
};
