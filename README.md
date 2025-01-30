# URL 生成ツール

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

または

node index_multi.js
```

### 4️⃣ 生成された URL を確認

output.txt または output_multi.txt に生成された URL リストが保存されます。

```sh
cat output.txt

または

cat output_multi.txt
```

または Windows の場合：

```sh
type output.txt

または

type output_multi.txt
```

### 5️⃣ 新しい変数や URL を追加したい場合

list.json または list_multi.json を編集し、新しい環境・変数を追加
再度スクリプトを実行して output.txt を更新

```sh
node index.js

または

node index_multi.js
```

## JSON ファイル(変数１つまたは複数)

- それぞれの説明と構造。以下、オブジェクトに当てはめて追加することで生成可能

  - name：変数名
  - path：変数置換したい URL
  - val：変数に置換したい値

```sh
/** list.json */
  {
    "name": "SAMPLE",
    "path": [
      "https://www.test/sample/$[SAMPLE].json"
    ],
    "val": ["a", "b", "c", "d"]
  }

/** list_multi.json */
  {
    "name": "ENV_MULTI",
    "path": ["https://www.test/test/$[X]/$[Z]/$[Y].json"],
    "val": {
      "X": ["1", "2", "3"],
      "Z": ["21", "22", "23"],
      "Y": ["100", "101", "102"]
    }
  }
```
