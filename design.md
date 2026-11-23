# OpenSpace Lab 官网设计说明

更新：2026-11-23。本文描述当前实现，替代此前累积的迭代说明。

## 页面结构

1. 首屏：Building next-generation / space intelligence.，沿用 Vast 场景图与居中排版。
2. Research Areas：机器人系统、具身智能、仿真与世界模型。大图文板块左右交替，移动端先图后文。
3. Publications：按年份展示三篇论文，紧凑横向条目；使用对应原论文的白底架构/框架图。
4. About：简短研究定位与当前工作说明，下方展示 AWAM 研究团队的关联机构徽标。
5. 页尾：品牌与 GitHub。

导航仅包含 Research Areas / Publications / About。首屏 Explore the lab 进入研究区；不再跳过正文直接进入 About。没有独立 Applications 或 Systems 页面。

## 内容与成果边界

- Robotic Systems：本体、机构、驱动、工具与集成。当前没有已确认的自研硬件成果，因此不强行列代表工作。
- Embodied Intelligence：导航、操作、任务推理和高效计算。链接 AWAM-0、OpenNWM、SpikeVLA。
- Simulation & World Models：物理仿真与学习式预测两个互补方向；现有模型工作链接 OpenNWM、AWAM，不把它们等同于完整太空仿真器。
- Publications：OpenNWM、Mining beyond Earth、SpikeVLA。AWAM 暂无有效公开报告链接，不创建虚构论文记录。
- 月面插画为 AI 概念示意，保留说明；不代表实际设备或在轨验证成果。
- 机构徽标来自 AWAM 作者单位列表，不表述为客户、合作背书或产品使用方。

完整研究分类与映射见 research-taxonomy.md。

## 视觉系统

深空蓝 #0A0F18，正文银白 #EDF2F7，冰蓝强调 #91CAEE。品牌 OpenSpace 为冰蓝、Lab 为银白。Research Areas、Publications、About 使用同一背景和标题体系。

使用 DeepMind 官网采用的 Google Sans Flex，通过 Google Fonts 加载；离线或网络不可达时回退 Arial/系统中文字体。内容最大宽度 1280px，移动端左右 24px 留白。研究标题 32–44px，区块标题 38–64px。正文保持 17–18px，论文元信息采用紧凑字号。

研究图以 3:2 等比完整显示，不拉伸、不裁切、不做悬停放大。交付 WebP 副本，原始 PNG 保留。三张交付图共约 1.77MiB，原图约 10.37MiB。

## 响应式与交互

760px 以下研究区单列、导航可展开；菜单支持 Escape 关闭、点击外部关闭和跳转后聚焦正文。无 JavaScript 时导航直接展开。导航高亮随页面滚动更新。

论文桌面缩略图列宽 210px，1000px 以下为 180px，600px 以下隐藏缩略图以保留正文空间；架构图 contain 显示且保留原比例。所有论文与项目链接可直接访问。

徽标保持原色，按统一视觉高度展示；横向原图使用徽标视口，TUM 保持完整字标，UCAS 使用专门的校徽 SVG。未加入星空、流星、程序月球或视频自动播放。

## 实现与素材

index.html 为语义化静态页面，style.css 为重建后的单一当前样式，navigation.js 为原生导航脚本，无构建步骤和第三方脚本依赖。旧视频实验与图片保留，不被首页加载。

素材来源见 assets/sources.json 与 assets/images/institutions/sources.json；生成图提示词见 image-prompts-v2.md、image-prompts-v3.md。Vast 图片的公开发布权利尚未核实，来源记录保留。本次未部署。

## 本轮验证

已检查：唯一 ID、所有页内锚点、本地资源路径、单一 h1、三研究区与三论文条目、十个机构、图片完整性及真实宽高、无嵌套链接、无已弃用 UI 引用。

当前浏览器/电脑控制未具备可用权限，未完成桌面截图、移动端实机和键盘交互的渲染验收；静态检查不替代视觉实测。

机构展示标题统一为 Research Affiliations；单位素材暂沿用 AWAM 作者单位列表，来源说明仅保留在文档中。

About 两段文字居中。机器人系统研究图替换为最新 3 秒结构特写视频，源文件位于 prevideo。网页使用 720p H.264 压缩副本，保留原片；默认显示原图封面，用户控制播放、暂停，不自动播放。

当前机器人系统视频直接使用 assets/prevideo/robotic-systems/robotic-systems-9s.mp4 原始文件，不使用压缩版。启用 autoplay、muted、loop、playsinline，保留播放控制；About 两段文字居中。当前阶段不做加载优化。

当前暂时移除机构标题与完整徽标展示区；About 仅保留居中的介绍文字，素材文件保留。
