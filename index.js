const fs = require("fs");

// JSONファイルを読み込む関数
const loadJson = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

// `list.json` を読み込む
const data = loadJson("list.json");

// 生成されたURLを格納する配列
const generatedUrls = [];

// 各オブジェクト（環境ごと）でURLを生成
data.forEach((env) => {
  const { name, path, val } = env;

  path.forEach((baseUrl) => {
    val.forEach((varValue) => {
      // `$[name]` を変数の値で置き換える
      const replacedUrl = baseUrl.replace(`$[${name}]`, varValue);
      generatedUrls.push(replacedUrl);
    });
  });
});

// 結果を `output.txt` に保存
fs.writeFileSync("output.txt", generatedUrls.join("\n"), "utf-8");

console.log("✅ 生成されたURLを output.txt に保存しました！");
console.log(generatedUrls);
