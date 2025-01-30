# URL生成ツール

## URL Generator のセットアップ & 実行手順 🚀

### 1️⃣ リポジトリをクローン
```sh
git clone https://github.com/あなたのユーザー名/url-generator.git
cd url-generator
```

### 2️⃣ 必要なパッケージをインストール
```sh
npm install
```

### 3️⃣ URL を生成
```sh
node index.js
```

### 4️⃣ 生成された URL を確認
output.txt に生成された URL リストが保存されます。

```sh
cat output.txt
```

または Windows の場合：

```sh
type output.txt
```
### 5️⃣ 新しい変数や URL を追加したい場合
list.json を編集し、新しい環境・変数を追加
再度スクリプトを実行して output.txt を更新
```sh
node index.js
```



## JSONファイル
- それぞれの説明と構造。以下、オブジェクトに当てはめて追加することで生成可能

    - name：変数名
    - path：変数置換したいURL
    - val：変数に置換したい値

```sh
  {
    "name": "SAMPLE",
    "path": [
      "https://www.test/sample/$[SAMPLE].json",
    ],
    "val": ["a", "b", "c", "d"]
  }
```