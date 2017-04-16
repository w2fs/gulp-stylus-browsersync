# gulp-stylus-browsersync

## 技术、框架

* ESLint - 编码规范
* Gulp - 自动化构建
* Stylus - CSS 预处理
* UglifyJS - JS 混淆压缩
* PostCSS + AutoPrefixer - CSS 预处理插件
* BrowserSync - 浏览器自动刷新工具

## 项目初始化

### 1.初始化 Node.js 项目

```bash
yarn init
# Or
npm init
```

如果是 Git 项目，配置 `.gitignore` 等工程配置。

### 2.安装所需要的依赖项，编码规范配置

```
yarn add --dev eslint
```

ESLint 配置： <http://rapilabs.github.io/eslintrc-generator/>
Stylelint 配置： <https://maximgatilin.github.io/stylelint-config/>


## 参考资料

Gulp API： <https://github.com/gulpjs/gulp/blob/master/docs/API.md>
BrowserSync API: <https://www.browsersync.io/docs/api>
Stylus: <http://stylus-lang.com/>
SASS/SCSS: <http://sass-lang.com/guide>
LESS: <http://lesscss.org/>

## 注意的细节

### 1.依赖项的安装

开发环境依赖：

```bash
yarn add --dev package
# or
npm i --save-dev package
```

产品环境依赖：

```bash
yarn add package
# or
npm i --save package
```

### 2.自动执行脚本

配置 `package.json` 中的 `scripts`

如：

```js
  "scripts": {
    "start": "browser-sync start --server",
    "dev": "gulp"
  }
```

可以用：

```bash
yarn start
yarn run dev
# or
npm start
npm run dev
```

### 3. BrowserSync+Gulp

需要在 `GulpFile` 中创建 BS 服务。
