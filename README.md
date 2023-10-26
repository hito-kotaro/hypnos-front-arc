## 開発環境構築

### clone

```bash
$ git clone -b git@github.com:hito-kotaro/hypnos-front.git
```
### 環境変数設定
以下の内容で`.env.local`ファイルを作成
```.env.local
NEXT_PUBLIC_RAKUTEN_API_BASE=https://app.rakuten.co.jp/services/api/IchibaItem/Search
NEXT_PUBLIC_RAKUTEN_API_VERSION=20220601
NEXT_PUBLIC_RAKUTEN_API_AFF_ID=<MY_RAKUTEN_AFFILIATE_ID>
NEXT_PUBLIC_RAKUTEN_API_APP_ID=<MY_RAKUTEN_APP_ID>
NEXT_PUBLIC_BACKEND_API_BASE=<MY_BACKEND_API_URL>
```

### ライブラリのインストール

```bash
$ npm install
```

### 起動
```bash
# コンテナが起動します
$ make up

# コンテナに接続
$ docker exec -it hypnos-front /bin/bash 

# コンテナ内で開発サーバを起動
root@host:/app# npm run dev
```
[http://localhost:3000](http://localhost:3000)にアクセスして画面が表示されればOK


### 終了
```bash
$ make down
```

## json-serverの設定 
package.jsonには含めず、別のコンテナでjson-serverを起動している。 
(`docker/docker-compose.ymlのmockを参照`)  
DBの定義は、`docker/json-api/db.json`で設定しているので、必要があれば適宜書き換える。  
詳しくは[json-serverのREADME](https://github.com/typicode/json-server)を参照。
