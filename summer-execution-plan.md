# 暑假执行计划（2026-06-01 → 2026-08-31）

> 综合：学长（朱浩淳）PDF 实战建议 + 申请清单 20 校 + 录取概率重新校准
> 目标：Fall 2027 入学 · 主线 CMU MET (ETC) · 备线 NYU Tisch / USC IMGD / Aalto / UCSC CMPM
> 核心定位：**Interactive Narrative Design** — "To broaden the boundaries of what a story can be"

---

## 0. 一句话总结

> **你不缺作品，缺叙事容器 + 可批量产出的"小而精"创意证据。**
> 学长给的两把刀——**作品集分 section 串故事线** + **每天半小时机制×情感短提案**——比任何"再做一个大项目"或"再加一个实习"都见效快、ROI 高。
> 这个暑假最高优先级的事，就是把已有 7 个项目按学长诊断**重新包装**，并用 90 天积累 **10–15 个 Speculative Designs** 作为"创意肌肉"证据库。

---

## 1. 录取概率重新校准（参考用）

### 🔥 显著上调（叙事重构 + 短提案系列带来的提升）
| # | 项目 | 之前 | 修正后 | 提升 |
|---|---|---|---|---|
| 4 | CMU MET (ETC) | 62–75% | **66–80%** ⭐ | +4% |
| 18 | GT MS HCI | 48–58% | 53–63% | +5% |
| 17 | UW MHCI+D | 42–52% | 47–57% | +5% |
| 16 | CMU MHCI | 25–33% | 30–38% | +5% |
| 10 | GT MS DM | 62–72% | 66–76% | +4% |
| 9 | UCSC MS CM | 67–77% | **71–80%** | +4% |
| 6 | UCLA DMA MFA | 19–29% | 24–34% ⭐ | +5% |
| 3 | NYU Tisch MFA Game Design | 36–49% | **41–54%** | +5% |
| 1 | USC SCA MFA IMG | 31–43% | 36–48% | +5% |
| 2 | USC SCA MS Game | 58–67% | 62–71% | +4% |
| 11 | UT Dallas MFA Game Dev | 56–66% | 60–70% | +4% |
| 36 | CMU MTID (HCII) | 30–42% | 34–46% | +4% |

### 🔼 中度上调
| # | 项目 | 之前 | 修正后 |
|---|---|---|---|
| 22 | RPI MS GSAS | 72–80% | 74–82% |
| 23 | CityU MFACM | 83–89% | 85–90% |
| 25 | Duke GDDI | 70–82% | 72–84% |

### → 基本不变（纯 CS / 工程 / 北欧）
| # | 项目 | 修正后 | 说明 |
|---|---|---|---|
| 7 | Utah MEAE | 85–91% | 已近天花板 |
| 14 | Aalto MA Game | 77–86% | +1% |
| 15 | Aalto MS Game | 73–82% | +1% |
| 13 | REPLAY | 72–82% | +1% |
| 26 | UPenn CGGT (ED) | 56–69% | 偏纯工程 |
| 27 | Northwestern MSCS | 51–61% | 纯 CS |
| 20 | USC Viterbi MS CS | 43–53% | 纯 CS |
| 28 | 哥大 CS MS | 31–39% | 纯 CS |
| 30 | Cornell Tech | 28–36% | 偏 CS |

**至少录上一所** ≈ 接近 100%。
**至少录上一所 reach 校（含 CMU ETC）** ≈ 97%。

---

## 2. 暑假 5 个 Track（按 ROI 排序）

### 🥇 Track A · 作品集网站重构（最高优先级 · 1.5 个月集中投入）

学长核心 insight：**"作品如同民国军阀群雄割据，体现不出叙事与技术之间的关联"**——你需要的不是更多作品，而是**结构化的叙事容器**。

#### A.1 网站新增 4 个 narrative-arc Section

把扁平 7 个项目重新组织为 4 段叙事弧：

| Section | 主题 | 收录项目 | 过渡文案要点 |
|---|---|---|---|
| **§1 Technical Foundations** | 程序员起点 | Right Click to Activate Translator · Space Bar Porter | "我从写代码开始接触游戏" |
| **§2 Narrative Awakening** | 叙事转折 | The Birthday Party · Heart Keys | "ENG3101 / 戏剧训练 / 16,000 字剧本如何让我重新理解机制" |
| **§3 Experiments at the Edge** | 互动艺术实验 | GugugagaPenguin · Devil Cops Androids | "用非传统输入探索互动艺术边界" |
| **§4 Speculative Designs** | 机制×情感短提案集（Track B 产物） | 10–15 个提案 | "我每天 30 分钟在做的设计训练" |

每个 section 间用 **1–2 段过渡文字**串联——就是学长 Aalto 面试用的那种叙事策略。

#### A.2 按学长建议重排每个作品（直接改 `src/content/projects/*.md` 的 frontmatter）

| 项目 (slug) | order | depth | hidden | 重点改动 |
|---|---|---|---|---|
| `the-birthday-party` | 1 | deep | false | summary 强调 "16,000 字分支剧本 + AI 主题"；吹 ECE3200 表现 |
| `heart-keys` | 2 | deep | false | cover 必设；summary 改写"特定情感体验如何被设计"；强调 19/1083 + 32 ratings + 1.1.2 patch |
| `right-click-to-activate-translator` | 3 | deep | false | award 字段必写 "Best Puzzle Game, China University Student Game Award 2024" |
| `devil-cops-androids` | 4 | deep | false | 找社长要展出当天屏幕照作 cover；summary 加 "Selected Project, 公开展出, 上百人次试玩" |
| `gugugaga-penguin` | 5 | light | false | 包装成"教育向互动艺术：让孩子用身体扮演企鹅" |
| `hashmon` | 6 | light | false | 区块链不被青睐，往后放 |
| `space-bar-porter` | 7 | light | false | 保留 Ludum Dare 144/1597 + Humor 111/1597 |
| `落语少女` (如存在) | — | — | **true** | 学长建议隐藏 |

#### A.3 Demo Reel（60–90 秒视频）

CMU ETC / NYU / Berkeley 必备。素材**全部从现有项目里剪**，不需新拍：

- 7 个项目各 5–10 秒精华切片
- 试玩反馈玩家表情
- 戏剧/剧本片段（打字机字幕动画 + 剧本镜头）
- 10 人项目 Producer 视角（白板 / Discord / 团队合照）

---

### 🥇 Track B · "机制 × 情感"短提案系列（学长最强建议 · 每天 30 分钟）

学长亲口验证：**这是他唯一后悔没早做的事。**

#### B.1 执行规则

- **每天 30 分钟**，6/1 → 8/31，约 90 天
- 每天选 **一个 2000 年前的经典游戏 + 一种情感**
- 写一份**一页提案**（Basic Settings / Narrative / Emotion / Key Mechanic）
- 配 **一张 AI concept art**（学长亲身验证有效）
- **不需要真的做出来**——这是 ideation 训练

#### B.2 90 天目标

- 写 **30–60 个**提案
- 选 **10–15 个最优**做精装版（双语 + AI 图 + 统一排版）
- 放进网站 **§4 Speculative Designs**
- 使用学长 Tetris & Remorse 的统一模板

#### B.3 启发配对清单（不限于此）

| 经典游戏 | 不寻常情感 | 候选方向 |
|---|---|---|
| 俄罗斯方块 | 悔恨 | ⚠️ 学长已示范，不要重复 |
| 贪吃蛇 | 孤独 | 越长越长，回头看不到尾巴 |
| 扫雷 | 信任 | 每次点击都是对未知世界的赌博 |
| 推箱子 | 责任 | 箱子是别人留下的，你必须替他收拾 |
| 五子棋 | 共谋 | 你和对手其实在合作组成某个图案 |
| Pong | 衰老 | 球拍随时间变短 |
| 打砖块 | 怀念 | 每块砖是段记忆，打掉就消失 |
| 太空侵略者 | 同情 | 外星人在用自己语言哭喊 |
| 吃豆人 | 偏执 | 鬼并没有追你，是你在脑补 |
| 数独 | 强迫症 | 每填错一格盘面会变形 |

⭐ **加倍策略**：把 The Birthday Party 的 16,000 字剧本里的情感片段，反向拆解成机制提案。比如"AI 觉醒时的尴尬" + 吃豆人机制 = AI 们正在玩你以为是它们的游戏。

#### B.4 这个 Section 在不同申请里的作用

| 项目类型 | §4 的作用 |
|---|---|
| CMU MET (ETC) | "writer-coder-producer 三脑"的核心证据 |
| USC SCA MFA IMG | "ability to ideate" 比 portfolio 完成度更重要 |
| NYU Tisch MFA | NYU 要求 "critical analysis of a game"——这就是 15 次实战 |
| Aalto MA / MS | 学长亲测有效 |
| CMU MIIPS | "cross-disciplinary ideation" 直接对口 |

---

### 🥈 Track C · 1–2 个轻量级新动作（约 3 周总投入）

#### C.1 包装"咕咕嘎嘎企鹅"为教育互动作品

- **不重做游戏本体**
- 写一份 **4–6 页 Pedagogical Brief**：从教育心理学视角解释为什么"身体扮演 + 笨拙输入"对儿童共情培养有效
- 引用 1–2 篇真实教育游戏论文（让 MIT Media Lab 血统的推荐人 E 过目）
- 放进 §3，配旧 demo 截图

**ROI**：把"完成度不高的实验作品"升级为"有理论支撑的设计研究"，几乎零成本。

#### C.2 跨界戏剧合作

利用现有戏剧教授资源：

- 请戏剧教授引荐 1–2 个戏剧表演 / 写作专业的学弟学妹
- 一周内做完：把英文 15 分钟剧本录成 **audio drama / 互动音频体验**（Twine + 配音 + 音效）
- 作为 §2 末尾的"跨学科协作"项目

**副产品**：戏剧教授推荐信里能多写一句"Arno 不只是学生，他能与戏剧专业同学协作"——黄金信号。

---

### 🥈 Track D · 推荐人与外部资源（贯穿暑假 · 碎片时间）

#### D.1 戏剧学院教授（推荐人 A）—— **6 月内必做**

当面或长邮件，问 3 件事：
1. 是否愿意为多个项目写推荐信？
2. 是否有 CMU ETC / 戏剧学院的现役 connection 可以 informal endorsement？
3. 是否愿意推荐 1–2 个戏剧专业学生与你合作 C.2？

附上：重构后的网站 URL + The Birthday Party 剧本 PDF。

#### D.2 ETC 校友 Informational Interview—— **7 月内**

LinkedIn 联系 2–3 位中国/亚洲背景的现役/在职 ETC 校友，每人 ≤30 分钟，3 个问题：
1. BVW 课程录的是什么样的人？
2. ETC 招生组的隐形信号是什么？
3. 你的网站（提前发链接）有什么改进空间？

#### D.3 清华深圳 AgentLand 实验室 RA（学长亲推）

学长原话："常年缺人，混个 RA 名头大概不难，清华的名头还是响亮的。"

⚠️ **决策树**：
- 还能腾出 2–3 个月 8–10 小时/周 → 申，名头本身就是签证/申请加分
- 会挤压 Track A/B → **放弃**，作品集 ROI 更高
- AI + 游戏方向在面试中越来越常问到，挂个 RA 名头能堵一类问题

#### D.4 学长资源延伸

- 浩淳 CV + PS 已经在 PDF 附录里——**深度研究他的 SOP 结构**（叙事钩子 + 项目串联 + 课程具体到代码）
- 等涵哲回国后**主动跟进聚一次**——比任何 LLM 分析都有价值
- 龙大 CPDO 老师 "可能帮不上什么忙"——**不要在 CPDO 上浪费时间**

---

### 🥉 Track E · 可选加分项（有余力再做）

| 任务 | ROI | 时间 |
|---|---|---|
| Process Article 发表（Medium / itch.io devlog 关于"和戏剧教授学剧本"复盘） | 中 | 1 周 |
| 桌游 / 卡牌原型（Track B 之外还有精力） | 中 | 1–2 周 |
| GMTK Game Jam 7 月场 Producer 带队 | 高（如时间允许） | 周末 |
| Pinterest / Pixiv 美术经营（学长建议） | 低（除非有美术资产） | — |

---

## 3. 月度执行表

### 📅 2026-06（地基月：网站重构 + 启动短提案）

| 周 | Track A 网站 | Track B 短提案 | Track C/D 其他 |
|---|---|---|---|
| W1 (6/1–6/7) | 改 schema：加 section 字段；写 4 段过渡文案 | 启动，目标 5 个提案 | 给戏剧教授发长邮件 (D.1) |
| W2 (6/8–6/14) | 重排 7 个 `.md` order / depth / hidden；隐藏落语少女 | 累计 10 个 | 列 ETC 校友 LinkedIn 名单 |
| W3 (6/15–6/21) | 改写 The Birthday Party / Heart Keys 的 summary 与 case study | 累计 15 个 | 决定是否申 AgentLand RA |
| W4 (6/22–6/30) | 改写 RCTAT / Devil Cops 的 case study；找社长要展出照 | 累计 20 个；**选第一批 5 个做精装版** | C.1 起草 Pedagogical Brief 大纲 |

✅ **月末交付**：网站 4 段叙事弧上线 + §4 有 5 个精装提案 + 推荐人 A 确认

---

### 📅 2026-07（叠加月：跨界协作 + Demo Reel + SOP 起草）

| 周 | Track A | Track B | Track C/D | SOP |
|---|---|---|---|---|
| W1 (7/1–7/7) | 包装 GugugagaPenguin（C.1 接入 §3） | 累计 25 | C.2 启动：找戏剧学生 | 写 SOP master draft v0 |
| W2 (7/8–7/14) | 开始剪 Demo Reel 素材 | 累计 30；**精装版到 10 个** | ETC 校友访谈 ×1 | SOP v0 → v1 |
| W3 (7/15–7/21) | Demo Reel 第一版 | 累计 35 | ETC 校友访谈 ×2 | NYU Critical Analysis 起草 |
| W4 (7/22–7/31) | Demo Reel 上传到网站首屏 | 累计 40；**精装版到 12 个** | C.2 audio drama 收尾 | USC Project Question 起草 |

✅ **月末交付**：Demo Reel 60–90 秒上线 + Audio Drama 上线 §2 + SOP v1 + NYU/USC 副材料初稿

---

### 📅 2026-08（收尾月：Portfolio PDF + REPLAY/Aalto 模板 + 推荐人收口）

| 周 | Track A | Track B | Track D | 申请材料 |
|---|---|---|---|---|
| W1 (8/1–8/7) | 通用 20 页 Portfolio PDF v1 | 累计 45 | 推荐信草稿发推荐人 A/B | SOP 按校做 30% 改写（前 5 校） |
| W2 (8/8–8/14) | REPLAY/Aalto 7 页精简版 | 累计 50 | 推荐信草稿发推荐人 C | 改写到前 10 校 |
| W3 (8/15–8/21) | Portfolio PDF v2（含 §4 精选 15 个提案缩略） | 累计 55；**精装版定档 15 个** | 推荐人全部确认 | 改写到前 15 校 |
| W4 (8/22–8/31) | 全网站终审 + 性能优化 + SEO | 累计 60 ✅ | 8/31 Utah MEAE 申请通道开 → **首投** | 改写到 20 校全覆盖 |

✅ **月末交付**：网站 v1.0 锁定 + Portfolio PDF 两版 + 15 个精装提案 + SOP 全 20 校覆盖 + 推荐人就位 + Utah 已投

---

## 4. 不要做的事

| ⛔ 不要 | 原因 |
|---|---|
| 再做一个大型独立游戏 | 学长明说"作品数量已经很充分"，缺的是叙事 |
| 给"特殊群体"做严肃游戏 | 已否定，与叙事重心偏离 |
| 把所有 7 个作品都精装放上去 | "详略得当 > 事无巨细"，落语少女应隐藏 |
| 刷算法 / 准备技术面试 | ETC / MFA 不看，CGGT 看的是图形学项目而非 LeetCode |
| 找另一个普通实习 | 边际收益低于 Track B 的 30 天 |
| 大改 GPA / 重考 GRE / 重考 TOEFL | 已够用，边际为零 |
| 在 CPDO 上花时间 | 学长亲证"帮不上忙" |
| 找作品集机构 | 精致 ≠ 录取优势；同质化反而负分 |

---

## 5. 焦虑止血备注

> 写在这里，下次焦虑发作时直接打开。

1. **CMU ETC 60–80%（修正后 66–80%）已经是申请池前 5–10% 的水平。** ETC 历史录取率 10–15%，能被估到这个区间，意味着你的背景客观上偏强。
2. **20 校组合下"至少录一所"≈ 100%**。真正的风险不是"全聚德"，是"录的不是 CMU ETC"——这是**选择遗憾**，不是失败。
3. **机构作品集的"精致"是风险管理产品，不是录取优势产品**。它解决"零基础不能交白卷"，不解决"在 200 份里脱颖而出"。
4. **你的 `hiddenblade.net` 本身就是元作品集**——从零搭 Astro 5 + Tailwind v4 + React 19 + 7 个 case study，机构生做不出来。
5. **你已经有 ACM MM'25 一作 + Tencent 实习 + 7 个 shipped 项目 + Steam/Itch.io/LDJam 外部验证**——学长原话："你的实习和科研经历已经吊打我和涵哲了。"
6. **暑假执行清单存在的目的，是让你停止"我还不够"的循环**。把今天该做的那 30 分钟做完，就是当天的够。

---

## 6. 关键链接 / 资源

- 学长作品集参考：https://i.kutinana.com/
- 学长 PDF 全文：见 `几个小问题_autoCV (5)_merged.pdf` / `泛论申请.pdf`
- 申请清单详表：`grad-application-requirements.md`
- 两份岗位简历（已锁 v1.0）：
  - `resume-riot-strategic-partnership.tex`
  - `resume-sunborn-level-design.tex`
- AgentLand 实验室（清华深圳）：自行 LinkedIn / 官网检索

---

*最后更新：2026-05-25 · 下次复审：2026-06-30（月末交付检查）*
