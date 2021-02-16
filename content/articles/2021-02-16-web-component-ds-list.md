---
title: Web Componentsで作られているDesign System ライブラリ
createdAt: "2021-02-16"
---

1 から Design System を作る場合にも、色々参考にするのが手っ取り早い。

Web Components にも色々問題は依然あれど、既に先人によるオープンソースなレポジトリがあるので、代表的なものを一覧にしてみる。

## @ionic/core

https://github.com/ionic-team/ionic-framework/tree/master/core

ionic core は ionic チームが ionic frmework で使うコンポーネントを Web Component で実装した Design System。ionic は基本的に  モバイルアプリケーションを作るためのツールなのでそれ用に機能が最適化されているきらいはあるが、汎用的な部分の実装手段など参考になる部分は多い。

Stencil という Web Components 技術でコンポーネントを作るための独自フレームワークで作られており、実際便利。
Stencil は lit-element と勢力を２分する程度に栄えているライブラリです。

https://stenciljs.com/

## Adobe Spectrum

https://opensource.adobe.com/spectrum-web-components/

Adobe がヌルっと出してる Design System。 バージョニングをコンポーネントごとにしてる。共通の util 部分がアップデートされたらどうするんだろう...
説明によると Adobe プロダクトのプロトタイピングのためのもの（もしくはもっと実用的なもの）？らしいけども、内部でどのように採用されているかはどうなんでしょう。

lit-element 製。

Github: https://github.com/adobe/spectrum-web-components

## carbon

IBM 製。

https://github.com/carbon-design-system/carbon-web-components

carbon-web-components

まず Carbon という IBM による Design System があって、これはその Web Component 版 (variant)という扱い。

https://www.carbondesignsystem.com/

Carbon 自体も Vue, React, Angular に対応して更に Web Component variant もあって...とても大企業を感じる。

Storybook からサクッと各コンポーネントの振る舞いを見れる。やっぱ Design System には Storybook が最高ってことだね。

https://web-components.carbondesignsystem.com/

## Fast

https://www.fast.design/

Microsoft による Design System でもある UI Component コレクション。

Fast Component は Fast Element という独自のライブラリによって書かれている。

Fast Component 自体も一つの提供された Design System だけれども、Fast Element を使って自分のカスタムコンポーネントを新たに作り出すこともできるらしい。試したことない。

https://www.fast.design/docs/fast-element/getting-started

つまり ionic/core と Stenciljs みたいな関係ということだろうか。Web Component の構築も独自路線のようなので、詳しい試用体験の記事などあったら見たい。

## clarity

VMware 製。

https://github.com/vmware/clarity

元は Angular で作られていた Design System? 今は Web Compoennt による実装に移行しようとしているらしい。

内部では lit-element が利用されている。

## Design System Libary をまとめている Web サイト

少し情報が古いかもしれないけれども、このサイトでは Design System の情報をまとめています。
一覧の中に「Web Components が使われているか」という項目もあるのでそこから探すのも良さそう。
ただほんの一部扱っているだけでも`yes`扱いになっているようなので、Web Component を基盤技術として作られているわけではないのに注意。

上記のプロダクト群も、こちらには反映されてなかったり、情報が古かったりする。

https://adele.uxpin.com/

## まとめ

Web Component による Design System、将来の Web を見据えた場合最適解にも思えるが、現状ではガッツがある大企業が悩みながら作っているという風に見える。

ブラウザが Web Component の不便さを消してくれるのが先か、落とし穴を全て埋めたライブラリが出てくるのが先かはわからないが、軽いノリで手を出せる領域ではないですね。

他にもこれを忘れてるぜ！みたいな情報があったらこちらまで教えてほしいです。

https://twitter.com/nekobato
