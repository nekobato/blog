---
title: Web ComponentsでInputを使う方法
createdAt: "2021-01-04"
---

## 問題

Custom Elements(Web Components)の中で`input`を使うと色々問題がある

### `button`を押しても submit が動かない

例えばこのような form があった時、この`button`を押しても form の submit は発火しない。

```html
<form>
  ...
  <button-component>
  #shadow-dom
    <button type="submit">Submit</button>
</form>
```

submit の動作は別 DOM Tree、この場合 Shadow DOM から見て Light DOM の Tree にある form に到達しない。

###  外部の`input`と連携してくれない

これが特に問題になるのは主に`autocomplete`を使用したい時で、他の input と`autocomplete`の挙動を連携してくれなくなってしまう。

https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/autocomplete

`autocomplete`は例えばこのような input を作った場合、１つ目に名前を入力する（しようとする）と２つ目にも入力候補が出現する。

```html
<form>
  <input autocomplete="given-name" />
  <input autocomplete="family-name" />
</form>
```

住所も然り。

Custom Elements で input の wrapper component を作ると、それぞれ別の DOM Tree であるからか、 入力候補は連携してくれない。

```html
<form>
  <text-field-Component>
  #shadow-dom
    <input autocomplete="given-name">
  <text-field-Component>
  #shadow-dom
    <input autocomplete="family-name">
</form>
```

### `form`の submit では Shadow DOM 内の input value を拾ってくれない

上述のものと同じく、別 Tree の input value は検出してくれない。

## 解決策

以上の問題点。全てはそれぞれ連携ができるはずの Element が Light DOM と Shadow DOM に分かれたことで、これを解決すればなんとかなりそう。

解決法は主に 3 つある。もっとあったらおしえてください。

### Shadown DOM ではなく Light DOM に表示する

Custom Element の中身を Light DOM に表示するようにすることで、単純に他の Element から影響を受けられるようにする。
もちろん Shadow DOM ではないので隠蔽はされず、他からの改変が容易になる。

例えば Lit Element だと`createRenderRoot`内で`this`を返すことで Light DOM への表示に切り替わります。

```js
class LightDom extends LitElement {
  render() {
    return html` <p>This template renders without shadow DOM.</p> `;
  }
  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }
}
```

https://lit-element.polymer-project.org/guide/templates#renderroot

注意点としては、Light DOM での表示を指定すると`<slot>`が使えなくなる。それ以上の柔軟な変更は attribute を使うしかないということになる。

### input はコンポーネントにしない

このように

```js
return html`
  <div class="input-decorator">
    <slot></slot>
  </div>
`;
```

スタイルなどは Custom Element が受け持つが、実際の input Element は Light DOM に置く。
この方法だとスタイリングなどは可能だが、input の値をバキバキに改変する機能などを実装するのは大変面倒になる。というかあまり現実的ではないと思う。
その上、input は外部から簡単にアクセス可能な場所に置くことになるため、Custom Element としてコンポーネントに縛りを持たせるのは難しい。

### autocomplete 連携を諦めて、挙動を自前で作る

もしくは、どうせフレームワーク使うでしょという方針でネイティブ挙動は何もサポートしない。

これは便利な機能が一つ減るわけなのであまりおすすめできませんが、submit や button の挙動は自前でなんとかなります。

Spectrum はこの点について考慮漏れかもしくは同じく諦めてるっぽい？

https://opensource.adobe.com/spectrum-web-components/components/textfield

自前実装の方法は`button`をクリックしたら周辺の form を探して submit を発火させたりとか地道にネイティブ挙動を再実装する必要がありそう。アクセシビリティも忘れずに。

`formData`は polyfill を使えば Safari も使えそう。

https://developer.mozilla.org/ja/docs/Web/API/FormData
https://github.com/jimmywarting/FormData
