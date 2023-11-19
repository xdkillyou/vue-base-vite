# vue-base-vite

建立一個Vue基本架構與基礎設定，提供快速建置專案

## 使用到的套件

1. Vue3
2. Vite
3. TypeScript
4. Vue-Router
5. Pinia
6. Vue-I18n
7. Eslint(Airbnb)
8. Prettier
9. Vueuse
10. Unplugin-auto-import

## 紀錄過程上遇到的問題

### Git push出現身份認證錯誤

1. 查看git config設定是否有誤

   ##### 查看git config設定

   ```sh
   git config --list
   ```

   ##### 確定Mail與github(或其他平台)的一致

   ```sh
   git config --global user.name "Your Name"
   git config --global user.email mail@example.com
   ```

   [參考１](https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-%E5%88%9D%E6%AC%A1%E8%A8%AD%E5%AE%9A-Git)

2. Github規範修改 => 需要設定Personal Access Token

   ##### Personal Access Token

   Follow以下參考至github -> settings -> developer settings -> Personal Access Token -> Token(Classic) -> 選擇權限(未深入研究) -> Generate token

   ```sh
   git config --global user.password "Token"
   ```

   [參考１](https://shengyu7697.github.io/github-personal-access-token/)

### Unplugin-auto-import TS Error

1.  按照官方網站提示設定

    Follow 官網的設定教學後，當我刪掉Import { ref } from 'vue'後，Ts提示錯誤

    [官網下載教學](https://github.com/unplugin/unplugin-auto-import/tree/main)

    ```ts
    // vite.config.ts

    import AutoImport from 'unplugin-auto-import/vite';

    export default defineConfig({
      plugins: [
        AutoImport({
          /* options */
        }),
      ],
    });
    ```

2.  針對AutoImport({ option })設定

    [參考１](https://github.com/unplugin/unplugin-auto-import/tree/main#typescript)、[參考２](https://blog.csdn.net/Web_chicken/article/details/130943350)

    要特別注意的是，要執行(npm run dev)才會build出文件

### Git tag

1. 新增git tag卻發現remote沒有tag
   [參考１](https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E6%A8%99%E7%B1%A4)

### normalize.css & reset.css

#### normalize.css：保留部分基礎樣式，並將不同瀏覽的的基礎樣式統一

#### reset.css：極端的重置全部所有的樣式，適合高度客製化的畫面來使用
