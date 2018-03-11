# wakarimi
## 方針
- 非エンジニアでも使えるよう、なるべく簡易な構成にする
    - 主な使用ライブラリ
        - npm
        - parcel
        - vue.js
        - p5.js

## 開発環境の準備
- リポジトリをダウンロード
    - `cd ~`
    - `git clone git@github.com:jumtech/wakarimi.git`
- 必要なライブラリをインストール
    - `cd wakarimi`
    - `npm install`
- ローカル開発環境で動作確認
    - `npm run watch`
        - JavaScriptを編集すると自動でbulidされる
    - http://localhost:1234/ をブラウザで開く
        - ブラウザ更新すると、buildの変更が反映される

## デプロイ
- production build
    - `npm run build`
- deploy
    - `npm run deploy`
        - Firebase Hostingにデプロイされる
