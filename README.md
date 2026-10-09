# 标致 4008 用车笔记

记录标致 4008（21 款 1.6T 科技版）的日常用车经验：灯光、巡航、雨刮等操作方法，以及养车费用与常见问题。

在线访问：<https://curder.github.io/peugeot-4008/>

## 内容

| 章节 | 说明 |
| --- | --- |
| [外部灯光控制](docs/guide/basic/light-control.md) | 近光灯、远光灯、位置灯、雾灯、转向灯、危险警示灯 |
| [巡航系统](docs/guide/basic/cruise-system.md) | 定速巡航与自适应巡航（ACC）操作方式 |
| [雨刮器](docs/guide/basic/wiper.md) | 前/后雨刮档位、自动雨刮与雨刮维护位置 |
| [最佳实践](docs/guide/basic/best-practices.md) | 上车前检查、行驶与停车锁车的通用用车建议 |
| [常见问题](docs/guide/others/faqs.md) | 远光灯、雾灯、音乐切换、后视镜、玻璃水 |
| [多媒体静音](docs/guide/others/mute.md) | 方向盘按键静音操作 |
| [养车费用](docs/guide/others/consumption-list/index.md) | 购车、燃油、用品、停车、保养、保险费用记录 |

## 本地开发

```bash
yarn install          # 安装依赖
yarn docs:dev         # 启动本地开发服务
yarn docs:build       # 构建静态站点到 docs/.vitepress/dist
yarn docs:preview     # 预览构建结果
yarn lint             # markdownlint + 类型检查
yarn fix              # 自动修复 markdown 格式问题
```

运行时版本以 `.nvmrc` 为准（Node 22）。

## 费用数据

`docs/guide/others/consumption-list/` 下的金额全部由数据派生，页面中的分类合计与总费用不再手写。
目录按「记录 / 派生 / 展示」三层拆分，依赖方向固定为 `components → costs → data`：

```text
consumption-list/
├── data/             # 只有记录，零逻辑
│   ├── fuel.ts         # 加油记录（含可选 kilometers 仪表里程）
│   ├── accessories.ts  # 汽车用品
│   ├── parking.ts      # 停车费
│   ├── maintenance.ts  # 保养记录与费用明细
│   ├── insurance.ts    # 保险记录
│   └── purchase.ts     # 购车
├── costs/            # 只做派生计算
│   ├── fuel.ts         # 油耗、油费合计、区间油耗
│   ├── maintenance.ts  # 明细差额、保养周期对比
│   ├── summary.ts      # 分类合计、总计、每公里成本
│   └── yearly.ts       # 按年份汇总
└── components/       # 只做展示（表格列定义在组件内）
```

新增一条记录：在对应的 `data/*.ts` 末尾追加一行即可（按时间正序书写，展示排序由 `costs` 层处理），
合计、每公里成本与按年汇总会自动更新。给两条及以上的加油记录补上 `kilometers`（本次加油时的仪表盘里程）后，
页面会自动出现「区间油耗」表格。

## 部署

推送到 `master` 分支后由 GitHub Actions（`.github/workflows/deploy.yml`）构建并发布到 GitHub Pages；
`ci.yml` 在 PR 上执行 markdown 校验、类型检查与构建。
