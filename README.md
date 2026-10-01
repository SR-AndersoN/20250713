# 汪有引力 WOOF — 狗粮广告网页

纯静态中文广告页，包含原创狗狗主视觉、品牌故事、包装规格选择、购买渠道弹窗和常见问题。适配手机与电脑，无需 npm、构建工具或服务器；解压后双击 `index.html` 即可本地查看。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `woof-dog-food`。公开仓库可使用 GitHub Free 的 Pages。
2. 解压下载的 ZIP。把其中的 `index.html`、`style.css`、`script.js`、`config.js`、`assets` 文件夹等内容上传到仓库根目录。不要只上传 ZIP，也不要在根目录外再套一层文件夹。若网页上传界面没有包含隐藏的 `.nojekyll` 文件，可以在仓库中手动创建同名空文件。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
5. 选择 **main** 分支、**/(root)** 文件夹，点击 **Save**。如果仓库使用其他默认分支，选择实际分支。
6. 等待发布完成，在 Pages 设置页点击网站链接。普通项目仓库网址通常为 `https://你的用户名.github.io/仓库名/`。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 接入真实购买链接

编辑 `config.js`：

```js
window.WOOF_CONFIG = {
  purchaseUrl: "https://你的真实商品网址",
  comingSoonMessage: "购买渠道即将上线，敬请期待。"
};
```

填好真实 HTTP(S) 商品网址后，按钮会变成“前往官方购买”，点击后打开商品页。留空时显示购买渠道尚未上线的弹窗，不创建订单、不收款、不收集用户资料。页面上的规格选择只用于展示；实际购买规格在目标商店选择。

## 修改内容

- 品牌名、主标题、正文和规格：编辑 `index.html`。如变更规格，还需同步 `script.js` 中对应的说明。
- 色彩、字体、间距和手机布局：编辑 `style.css`。
- 主视觉：替换 `assets/dog-hero.jpg`，并更新图片替代文本。
- 所有资源使用相对路径，适配 GitHub Pages 的仓库子路径；无外部字体、CDN 或运行依赖。

## 发布前替换示例商品信息

“汪有引力 / WOOF”、包装视觉及 1 kg、2.5 kg、6 kg 规格均为本次设计的示例。主视觉为 AI 生成的创意广告图，不是真实产品摄影。请将品牌、实际规格及购买链接替换为你的商品信息；本页没有虚构成分、营养数据、认证、评价、销量或功效承诺。

## 已完成检查

JavaScript 语法、本地资源路径、页内锚点和 HTML ID 已检查。规格切换、购买弹窗以及有效/无效商品链接分支已做脚本级检查。当前环境未进行真实浏览器视觉验收，发布前建议在你的手机和电脑浏览器中打开页面查看。
