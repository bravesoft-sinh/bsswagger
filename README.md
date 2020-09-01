# Swagger UI
## OTA反映手順
* API仕様書を炉カールにチェックアウトする
     ``` 
     git clone git@github.com:bravesoft-sinh/swagger-sample.git
     ```

* チェックアウトしたプロジェクトに移動して、サブのジュールとして`swagger ui`テンプレートをチェックアウトする
   ```
   git submodule add git@github.com:bravesoft-sinh/bsswagger.git 
   ``` 

* サブモジュールの`bsswagger`フォルダにに遷移して、ライブラリーをインストールする
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