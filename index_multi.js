const fs = require("fs");

// JSONファイルを読み込む関数
const loadJson = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

// `list_multi.json` を読み込む
const data = loadJson("list_multi.json");

// 生成されたURLを格納する配列
const generatedUrls = [];

// **複数変数を持つ URL を生成**
const generateMultiVariableUrls = (path, val) => {
  const variableNames = Object.keys(val); // 変数名リストを取得
  const lengths = variableNames.map((key) => val[key].length); // 各配列の長さ
  const minLength = Math.min(...lengths); // 最短の配列長を取得

  path.forEach((baseUrl) => {
    for (let i = 0; i < minLength; i++) {
      let replacedUrl = baseUrl;
      variableNames.forEach((key) => {
        replacedUrl = replacedUrl.replace(`$[${key}]`, val[key][i]);
      });
      generatedUrls.push(replacedUrl);
    }
  });
};

// **すべての ENV_MULTI オブジェクトを処理**
data.forEach((env) => {
  generateMultiVariableUrls(env.path, env.val);
});

// **結果を `output_multi.txt` に保存**
fs.writeFileSync("output_multi.txt", generatedUrls.join("\n"), "utf-8");

console.log("✅ 生成されたURLを output_multi.txt に保存しました！");
console.log(generatedUrls);
