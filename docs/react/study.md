# React
Reactはfacebookが作っているフレームワーク。
ReactDOMとReactを読みこんで使う。
jsxと呼ばれる、htmlのタグのようなものをjavascriptのコードにオブジェクトのようなものとして埋め込むことで、DOMを構築することが容易になる。

たとえば、こんなコード。

```html
<!-- ここより前に react.js react-dom.js を読み込んでおくこと。 -->
<div id="hoge"></div>
<script>
  ReactDOM.render( <h1>Hello World</h1>, document.getElementById( "hoge" ) );
</script>
```

hogeというidを持つエレメントに`<h1>Hello World</h1>`をぶっこんでくれそうである。
だけど、普通にhtmlやjsを書くと、全然動かない。
`<script>`部分は、通常、javascriptとして動作しようとするため、「知らん構文や！エラーにしたろ！」ということでエラーになる。
そこで、javascriptが知っとる構文に書き換えてあげることでjavascriptで動作するようになる。

つまり、
人間は jsx を含むコードを読み書きすることで、視覚的、感覚的にわかりやすいコードを書ける。
ブラウザは jsx を含まないコードを読むことで、エラーなく動作することができる。
ということになる。

書き換えてあげることをトランスパイルと言う。
通常、C言語などは `hoge.c` とかのコードをコンパイルすることでCPUが理解できる機械語に変換している。
こんな感じで、人間がわかりやすい jsのようなもの をブラウザでも理解できる js に変換することで、いい感じに動作させることができるようになる。

トランスパイラとして babel が有名である。
こいつは jsx にも対応していて、 jsx 構文を含むコードを渡すと、いい感じにトランスパイルしてくれる。

## 環境構築
開発は次のような流れで行われることになるだろう。

1. jsx を含むコードを書く
1. バベってトランスパイルした js を html で読み込ませる
1. ブラウザで表示する

バベる作業については、いろんな方法があるので、いろいろ試してみればよい。

今回は面倒なので、もろもろ全部無視して、トランスパイルをローカルで行わない男らしいコードを書く。

```html
<!-- ここより前に react.js react-dom.js を読み込んでおくこと。 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
<div id="hoge"></div>
<script type="text/babel">
  ReactDOM.render( <h1>Hello World</h1>, document.getElementById( "hoge" ) );
</script>
```

二つ追加した。
まず、cdnで babel-core の browser.min.js を読み込む。
そして、 jsx を含むコードの type に text/babel を指定することである。

babel-core の browser モジュールを読み込んだことにより、ブラウザは type="text/babel" というスクリプトを babel-core が実行することになる。
babelは先ほども言った通り、トランスパイルするモジュールであり、それをブラウザ上で実行するというアツいスクリプトである。
jsx を含むコードを追加することで、babel-core によりバベられ、いい感じに js に変換される。

これが一番簡単な方法である。

参考:http://postd.cc/everything-i-know-about-the-script-tag/

## knockoutとの違い
### knockout
* knockoutはhtmlとの繋がりを`data-bind=""`を使うことで示すことができた。
  * data-bindを持つエレメントはknockoutに関係ある。data-bindを持たないエレメントはknockoutに関係ない。
* 基本的なDOMのデザインはhtmlに記述できる。
* シンプル

### react
* htmlはほぼ空になる。(ような気がする)
* DOMをjs内に記載することができ、柔軟に実装できる(knockoutだと、htmlに書かれた形式にしか対応できないので。)
* Reactのコンポーネントを簡単に入れ子にできる。ß
