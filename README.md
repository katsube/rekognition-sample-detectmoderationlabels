# Amazon Rekognition Sample - Determine if an image is inappropriate

Rekognitionにローカルの画像ファイルを送信し、「けしからん」画像判定するNode.jsのサンプルです。

## 解説ページ
* [[AWS] Rekognitionで”けしからん”画像か判定する](https://blog.katsubemakito.net/aws/rekognition-moderationlabel)

## 利用方法
### 準備
このリポジトリをCloneします。
```shellsession
$ git clone https://github.com/katsube/rekognition-sample-detectmoderationlabels.git
```

[Node.js](https://nodejs.org/ja/)が入っている状態で、`npm install`を行い必要なモジュールを取得します。
```shellsession
$ cd rekognition-sample-detectmoderationlabels
$ npm install
```

`.env`という名前のファイルを作成しAWSのIAMのアクセスキーとシークレットを記述します。
```ini
AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=YYYYYYYYYYYYYYYYYYYYYYYYYYYY
AWS_REGION=ap-northeast-1
```

またimageフォルダに解析したい画像を保存してください。

### 実行
nodeコマンドでindex.jsを実行するだけです。imageフォルダに解析結果が保存されます。
```shellsession
$ node index.js
```

解析したい画像ファイルを変更したい場合は、index.jsの冒頭部分を編集します。
```javascript
// ファイルリスト
const FILES = [
  {origin:'image/sample1.png', json:'image/sample1.json'}
]

// 解析するファイル
const FILE = FILES[0]
```
