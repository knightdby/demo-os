# OpenSpace Lab

静态官网：首屏 → Research Areas → Publications → About。

直接打开 index.html，或在此目录执行 `python3 -m http.server 8000` 后访问本地页面。无需构建。Google Fonts 需要联网，离线回退系统字体。

## 文件

- `index.html`：当前官网。
- `style.css`：统一后的页面样式。
- `navigation.js`：移动导航与滚动高亮。
- `design.md`：当前设计和验证范围。
- `research-taxonomy.md`：研究方向与成果映射。
- `assets/sources.json`：素材来源。
- `video/`：独立视频实验，当前未接入首页。

AWAM 使用 https://knightdby.github.io/awam-demo/；OpenNWM 使用 https://openspace-lab.github.io/OpenNWM/。

月球研究图为概念插画，原始 PNG 保留，页面加载较小的 WebP 副本。机构展示对应 AWAM 团队单位。Vast 首屏素材上线前须确认使用权或替换；本次未部署。

`overview.svg` 为早期构图草案，不代表当前版本；以 index.html 为准。
