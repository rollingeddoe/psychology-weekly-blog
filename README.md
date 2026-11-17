# Psychology Weekly — English blog

A minimal, responsive Astro blog hosted on GitHub Pages.

Website: https://rollingeddoe.github.io/psychology-weekly-blog/

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
