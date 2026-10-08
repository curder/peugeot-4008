# 标致 4008 用车笔记

记录标致 4008（21 款 1.6T 科技版）的日常用车经验：灯光、巡航、雨刮等操作方法，以及养车费用与常见问题。

在线访问：<https://curder.github.io/peugeot-4008/>

## 内容

| 章节 | 说明 |
| --- | --- |
| [外部灯光控制](docs/guide/basic/light-control.md) | 近光灯、远光灯、位置灯、雾灯、转向灯、危险警示灯 |
| [巡航系统](docs/guide/basic/cruise-system.md) | 定速巡航与自适应巡航（ACC）操作方式 |
| [雨刮器](docs/guide/basic/wiper.md) | 前/后雨刮档位、自动雨刮与雨刮维护位置 |
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

`docs/guide/others/consumption-list/` 下的金额全部由 `components/*.ts` 数据模块派生，
页面中的分类合计与总费用不再手写，新增记录后合计会自动更新：

```text
components/
├── fuel-costs.ts        # 加油记录
├── auto-accessories.ts  # 汽车用品
├── parking.ts           # 停车费
├── maintenance.ts       # 保养记录（含费用明细、保养周期对比）
├── insurance.ts         # 保险记录
├── purchase.ts          # 购车
├── summary.ts           # 汇总（分类合计、总计与每公里成本）
└── yearly.ts            # 按年份汇总
```

## 部署

推送到 `master` 分支后由 GitHub Actions（`.github/workflows/deploy.yml`）构建并发布到 GitHub Pages；
`ci.yml` 在 PR 上执行 markdown 校验、类型检查与构建。
