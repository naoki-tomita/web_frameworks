# 環境構築
* angular2(angularも?)依存関係が多い。
  * `npm install angular2`だけではダメで、それ以外に色々なものが必要になった。(というか、そういうのをよろしくやってくれるのがnpmなんじゃないのか？)
  * 以下のようなエラーが出たので、WARNのメッセージにしたがって、それぞれ必要なモジュールをバージョン指定でインストールした。

```
web_frameworks@1.0.0 /......./web_frameworks
├── angular2@2.0.0-beta.17
├── UNMET PEER DEPENDENCY es6-shim@^0.35.0
├── UNMET PEER DEPENDENCY reflect-metadata@0.1.2
├── UNMET PEER DEPENDENCY rxjs@5.0.0-beta.6
└── UNMET PEER DEPENDENCY zone.js@^0.6.12

npm WARN angular2@2.0.0-beta.17 requires a peer of es6-shim@^0.35.0 but none was installed.
npm WARN angular2@2.0.0-beta.17 requires a peer of reflect-metadata@0.1.2 but none was installed.
npm WARN angular2@2.0.0-beta.17 requires a peer of rxjs@5.0.0-beta.6 but none was installed.
npm WARN angular2@2.0.0-beta.17 requires a peer of zone.js@^0.6.12 but none was installed.
```

* typescriptで実装するらしい
  * Atom(エディタ)で`atom-typescript`というプラグインを入れているので、自動でビルドされるようになっているが、多分、普通の環境だとgulpとかに仕込んでやる必要がありそうだ。
* また、ビルドした後browserifyする必要があるっぽい。
  * requireとか inport/exportという構文で別のスクリプトを呼び出すような書き方をするのだけど、ブラウザだと結局最終的に一つのスクリプトにまとめてしまうことが多いので、そこらへんの順序をよろしくやってくれるやつ。
* あと、babelも使ってES5とかの構文も使えるようにする。
* ここら辺は`gulp`でビルド + watchできるようにした。

# 構文
* いまのとこ、雰囲気でしか理解できてないけど。。。

## Hello world サンプル
* app.ts

``` javascript
// なんか必要らしい
import "reflect-metadata";
import "zone.js";
import "rxjs/Rx";

// 最低限これがあれば表示できる
import { Component } from 'angular2/core';
import { bootstrap } from "angular2/platform/browser";

@Component( {
  selector: "hello-world",
  template: `<h1>hello world</h1>`
} )
class HelloWorld {};

@Component( {
  selector: "my-app",
  template: `<hello-world></hello-world>`,
  directives: [ HelloWorld ]
} )
class MyApp {};

bootstrap( MyApp );
```

* index.html

``` html
<my-app></my-app>
```

### 解説
* htmlに書いた内容はbootstrapに渡したものがtemplateで展開される。

``` html
<my-app>
  <hello-world>
    <h1>hello world</h1>
  </hello-world>
</my-app>
```

* `<my-app></my-app>`とかの部分は結局、表示に関係ないので、`<h1>hello world</h1>`だけが表示されることになる。

# 双方向バインディング
* templateで`[(ngModel)]="変数名"`とすることで双方向バインディングすることができる。

``` javascript
@Component( {
  selector: "my-app",
  template: `<input type="text" [(ngModel)]="input">`
  directives: []
} )
class Input();
```
