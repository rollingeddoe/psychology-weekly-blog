# Psychology Weekly — English blog

A minimal, responsive Astro blog hosted on GitHub Pages.

Website: https://rollingeddoe.github.io/psychology-weekly-blog/

## 用浏览器编辑

1. 打开 [Pages CMS](https://app.pagescms.org/)，用 GitHub 登录。首次连接时安装 Pages CMS 的 GitHub App，在 **Only select repositories** 中选择 `rollingeddoe/psychology-weekly-blog`。进入该仓库的 `main` 分支。
2. 打开 **Site settings**，在 **Site title** 和 **Homepage introduction** 中修改英文站名和首页简介。
3. 打开 **Articles**，点选一篇文章或新建一篇。正文可以直接设置小标题、斜体、链接和插图。**Article title** 是文章标题，**Short introduction** 是文章简介。新建时可修改文件名，文件名决定文章网址。
4. 保存会直接更新公开仓库。英文稿先在私有编辑区校对，通过后再放进后台。新文章默认开启 **Hide from website**，关掉并保存后，已到发布日期的文章会随下一次 GitHub Pages 部署上线。已上线文章和站点设置的修改也会在保存后重新部署。

编辑器显示正文格式。要检查整页效果和手机端排版，可在本地预览。操作说明见 [Pages CMS 官方入门](https://pagescms.org/docs/quick-start/)。

## 本地使用

使用 Node.js 24：

```sh
npm ci
npm run dev
```

构建：`npm run build`。静态文件输出到 `dist/`。

## 每周更新

1. 在私有的 psychology-weekly 编辑工作区完成英文稿并由用户校对。
2. 参考 `templates/weekly-digest.md`，把获批正文保存为 `src/content/posts/YYYY-MM-DD.md`。
3. 填写标题、简介、日期、分类、标签和期数；批准发布后设 `draft: false`。
4. 本地预览并构建，提交到 main 后由 GitHub Actions 更新 Pages。

不要把未审研究稿放进公开仓库。`draft: true` 只阻止网页生成，不会使 GitHub 中的文件保密。模板在 templates 中不会生成网页。

首页、归档、文章、RSS 和 sitemap 自动读取已发布文章；未来日期的文章在下次构建且日期到达后才显示，不会按时自动重建。

## 修改外观和信息

- 全站样式：`src/styles/global.css`
- 导航与页脚：`src/layouts/Base.astro`
- 首页：`src/pages/index.astro`
- 关于页面：`src/pages/about.astro`
- 站点地址：`astro.config.mjs` 的 site 和 base

当前不迁移原 Google Sites，不编造个人简介或联系方式。待提供个人主页地址、署名和简介后再补充。

## GitHub Pages

仓库 Settings → Pages → Source 选择 GitHub Actions。工作流见 `.github/workflows/deploy.yml`。

免费方案使用独立公开博客仓库；原有选题库仍保留在私有仓库。网站默认使用 GitHub 地址，自定义域名可以之后配置。

站点有文章搜索、分类筛选、RSS、sitemap、独立404页面和可复用的周报模板。未配置邮件订阅或统计追踪。
