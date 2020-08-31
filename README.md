# Swagger UI
## OTA反映手順
* プロジェクトチェックアウト
     ``` 
     git clone git@github.com:bravesoft-sinh/bsswagger.git
     ```
* チェクアウトしたフォルダに遷移して、ライブラリーをインストールする
    ``` 
    npm install
    ```

* API仕様書（yamlファイル）をsrcフォルダーの直下にコピーする
* `src/index.js`ファイルの4行目のyamlファイルを更新する
ぎt
* プロジェクトビルド
    ```
    npm run build
    ```
* ビルドした`dist`フォルダをプロジェクトのOTAへコピーする