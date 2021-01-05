<template>
  <header>
    <nav>
      <a class="link" href="https://nekobato.net">About me</a>
      <picture class="image">
        <img class="source" src="~/assets/images/logo.png" alt="ロゴ" />
      </picture>
      <a class="link" href="/">LOG</a>
    </nav>
    <div class="title-group">
      <h1>nekobatoken</h1>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  width: 640px;
  margin: 0 auto;
  padding: 32px 0 0;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .link {
    display: inline;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    color: #444444;

    &:hover {
      text-decoration: underline;
      color: #555555;
    }
  }
  .image {
    display: inline-flex;
    width: 72px;
    height: 72px;
    border: 1px solid #efefef;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.24);
  }
  .source {
    width: 100%;
    height: 100%;
  }
}
.title-group {
  margin-top: 40px;
  display: flex;
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #444444;
  }
}
</style>
