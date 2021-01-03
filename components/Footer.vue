<template>
  <footer></footer>
</template>

<style lang="postcss" scoped>
footer {
  width: 100%;
  height: 120px;
  margin: 64px 0 0;
  border-top: 2px solid rgba(255, 255, 255, 0.48);
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
