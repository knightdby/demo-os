# OpenSpace Lab：太空具身智能研究分类

2026-11-23。依据现有四项工作梳理；以下是实验室的研究组织建议，不是领域统一标准。

## 分类原则

把“智能能力”与“任务场景”分开看：世界模型、推理操作、低功耗计算属于能力；行星探索、在轨服务、资源作业属于场景。同一方法可以服务多种任务。官网为保持四张入口，采用三个基础能力方向加一个重点太空应用方向，并明确其层级差异。

## 推荐官网四个入口

| 方向 | 英文标题 | 已有基础 | 面向太空的下一步 |
| --- | --- | --- | --- |
| 世界模型与自主探索 | World Models & Exploration | OpenNWM：潜在动作预训练、未来视图预测与视觉目标规划；NavAnywhere 提供跨来源导航经验 | 月面/火星地形的域迁移、不确定性感知、安全探索与长期定位 |
| 具身推理与操作 | Embodied Reasoning & Action | AWAM-0：推理、世界预测、动作执行与失败恢复 | 通信受限下的任务分解、低重力接触操作、采样与维修 |
| 低功耗具身智能 | Energy-Efficient Embodied AI | SpikeVLA：Spike-V / Spike-L / Spike-A，事件驱动视觉、跨模态推理与连续控制 | 面向星载平台的计算预算、端到端时延、实测能耗与硬件适配 |
| 太空资源机器人 | Space Resource Robotics | Mining beyond Earth：综述、六阶段任务框架、数据与仿真资源整理 | 将方法接入勘探、采样、开挖、提取及原位利用任务并验证 |

前三项是可复用技术能力，第四项是重点应用场景。网站呈现为研究入口，不暗示四项能力已经组成完整太空作业系统。

## 太空任务轴

1. 探索与勘测：遥感选址、近距离检测、地形建图、导航与目标识别。
2. 接触式作业：采样、挖掘、抓取、工具操作与运输。
3. 资源处理与利用：提取、处理、原位利用或返回运输。
4. 在轨与设施作业：检查、维修、装配与建造，属于更广泛太空具身领域，当前四项工作尚不足以代表完整覆盖。

资源作业综述的六阶段为：遥感识别 → 原位检测 → 单机器人小规模采样 → 多机器人大规模开挖 → 资源提取 → 原位利用/返回运输。它是太空采矿的框架，不能直接等同于整个太空具身智能领域的分类。

## 共性支撑与验证

- 数据与仿真：真实任务数据、地面类比环境、低重力/接触动力学模拟、仿真到现实迁移。
- 可靠性：分布外识别、不确定性、故障诊断与恢复、安全策略。
- 系统约束：算力与能源、通信延迟、质量与载荷、热控和辐射环境。
- 协作：人机任务分配、多机器人调度与通信受限协作。

这些是跨方向研究问题；目前不单列为已有独立成果。

## 成果边界

OpenNWM 与 AWAM 提供导航、世界模型及机器人执行的方法基础，不能由地面实验直接推出太空可用性。SpikeVLA 的节能设计与实验不等同于已在星载硬件上完成任务级能耗和可靠性验证。Space Mining 是综述与资源整理，不应写成已经完成的自主采矿系统。后续验证应分别报告环境、平台、能耗测量方式、通信条件和故障恢复表现。

## 来源

- SpikeVLA：https://arxiv.org/abs/2606.27807；全文：https://arxiv.org/html/2606.27807v1
- Mining beyond Earth：https://arxiv.org/abs/2608.21358；全文：https://arxiv.org/html/2608.21358v1
- Space Mining 资源库：https://github.com/OpenSpace-Lab/Space-Mining-with-Robotics-List
- OpenNWM：https://openspace-lab.github.io/OpenNWM/
- AWAM-0：https://knightdby.github.io/awam-demo/


## 官网采用的六方向映射

| 方向 | 关联工作 | 当前覆盖 |
| --- | --- | --- |
| 空间感知与世界模型 | OpenNWM、AWAM-0 | 方法基础 |
| 自主导航与探索 | OpenNWM、SpikeVLA | 导航研究 |
| 具身推理与操作 | AWAM-0、SpikeVLA | 任务推理执行与低层控制，贡献各不相同 |
| 多机器人与人机协作 | Space Mining 综述 | 综述涉及任务与挑战，暂无独立协作方法成果 |
| 低功耗与可靠具身计算 | SpikeVLA、AWAM-0 | 分别支撑低功耗与任务恢复，不表示完整航天可靠性验证 |
| 资源作业与空间建造 | Space Mining 综述 | 综述与路线图，非已完成作业系统 |

官网保留 AWAM 所属方向为第一张，其后按世界模型、导航、计算、协作与资源排列。各卡片展示关联工作与简短覆盖说明。论文附多方向标签，不将一个研究方向绑定为单篇论文。前三项基础算法及效率研究向太空场景的迁移仍需要专项验证。

## 展示名称与成果层级

官网短名称：Embodied Intelligence（具身智能）、World Models（世界模型）、Autonomous Exploration（自主探索）、Efficient Computing（高效计算）、Robot Collaboration（机器人协作）、Space Resources（太空资源）。方向是长期研究问题；卡片下层 Selected work 列代表性成果，只有综述支撑的方向用 Related review。Efficient Computing 仅关联 SpikeVLA，不把 AWAM 的任务恢复等同于高效计算成果。


## 当前采用：三大技术支柱＋应用场景

取代此前六个并列方向的官网组织。机器人系统包含本体、机构、驱动、工具与集成；具身智能包含感知导航、操作控制、规划协作与高效计算；仿真与世界模型包含物理仿真、预测模型、数据与评测。两类模拟在同一支柱下明确区分，不将学习式世界模型等同于高保真物理仿真器。

工作映射：AWAM、OpenNWM、SpikeVLA 支撑具身智能；OpenNWM、AWAM 支撑世界模型。Space Mining 综述支撑机器人系统与资源任务的研究梳理，不作为自研本体或自研仿真器的成果。机器人系统当前展示研究范围与相关综述，待真实硬件成果确认后补充。

Applications 单独呈现 Surface Exploration、Space Operations、Resources & Construction。它们是目标任务场景，不是三项现有产品或已完成在轨验证的能力。导航采用 Research Areas / Applications / Publications / About，不新增缺乏独立系统内容的 Systems 栏目。
