# OpenSpace Lab

独立静态网站，无需构建。直接打开 index.html，或在本目录执行 `python3 -m http.server 8000`。

- index.html：首页，含40秒背景视频与Research。
- publications.html：论文页。
- lunar-simulation.html：月面仿真视频页。
- style.css、navigation.js：共享样式与导航。
- assets/videos/：全部在用视频，已本地化。
- assets/fonts/：本地Google Sans Flex，不依赖Google Fonts在线加载。
- assets/projects/：页面使用的封面与论文图。
- assets/sources.json：主要素材来源。

本目录可独立复制使用，不依赖demo-awam或工作区其他目录。外部项目、论文、GitHub链接为正常跳转，不属于页面运行依赖。

AWAM-0 使用主页3大画面（TA3、TA2、TA1）＋5任务画面的拼接总览视频，非单条任务视频。

旧素材、视频制作过程、脚本和设计记录已移至工作区 `demo-os-archive/2026-11-24-cleanup/`，保留以便恢复。本次未发布。

Publications 收录 reports 中四篇（含已存在的 OpenNWM）及太空采矿综述；本地论文位于 assets/papers。Research 的 AWAM/OpenNWM 卡片使用动态首页缩略布局，project-previews.js 同步 OpenNWM 视频时间。AWAM 尚无有效模型/代码链接的入口显示为不可用，不伪造跳转。
