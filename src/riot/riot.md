


# 特徴
* reactに限りなく似ている。
* 好きなタグを定義して、タグをクラスのように見立てるところがReactと異なるところか。
* Reactはjavascriptのクラスを定義して、そのrenderメソッドでタグ構造を返すことで、見た目を定義する。
* riotはこんな感じでタグを定義できる。`<my-tag></my-tag>`でくくったところがオレオレタグクラス。超簡単。
```js
<my-tag>
  <h1>{title}</h1>
  <ul>
    <li each="{myList}">
      <in-tag key="{key}" value="{value}" parentTitle="{this.parent.title}">
    </li>
  </ul>
  // タグが生成された時にここが実行される。コンストラクタのようなもの。
  // ここが実行された後、DOMが構築される。
  // this.XXXX という形式でデータを持っておくと、いい感じにDOMの中にある{XXXX}と紐づけてくれる。
  this.title = this.opts.title;

  // 配列を持っておいて、<xx each={配列}></xx>とすると、いい感じに配列の数だけ展開してくれる。
  // 配列タグの子タグは、配列の1要素オブジェクトの子要素の名前を使うことができる。
  // 配列の親にアクセスしたい場合は、this.parentで親のオブジェクトにアクセスできる。
  this.myList = [ {
    key: "key1",
    value: "value1"
  }, {
    key: "key2",
    value: "value2"
  } ];

</my-tag>

<in-tag>
  <span>{key}</span>: <span>{value}</span>
  this.key = this.opts.key;
  this.value = this.opts.value;
  this.on( "mount", function() {
    // 自分の子タグのエレメントにアクセスするためには、mountイベントよりあとに実行する必要がある。
    // ここで自分のデータを更新した場合には、this.update(); を実行することで、画面に更新を通知できる。
    // 子エレメントには this.refs.XXXXでアクセスできる。
  } );
</in-tag>
```
