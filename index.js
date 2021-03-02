/**
 * Amazon Rekognition Sample
 *   画像の内容にラベルを付ける
 *
 */
//-----------------------------------------------
// モジュール
//-----------------------------------------------
const AWS = require('aws-sdk')
const fs = require('fs')

// .envを環境変数に
require('dotenv').config()

//-----------------------------------------------
// 画像解析
//-----------------------------------------------
// IAM設定
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

// Rekognitionに渡す値を準備
const client = new AWS.Rekognition();
const params = {
  Image: {
    Bytes: getFile(FILE.origin)
  },
  MaxLabels: 10
}

// Rekognitionで解析
client.detectLabels(params, (err, response) =>{
  if (err) {
    console.log(err, err.stack)
  }
  else {
    console.log(response)
  }
})
