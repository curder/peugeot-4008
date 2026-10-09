import {defineConfig} from 'vitepress'

/** GitHub 仓库地址 */
const GITHUB_REPOSITORY = 'https://github.com/curder/peugeot-4008'

/** 站点部署地址：GitHub Pages 项目站点，base 需带上仓库名 */
const SITE_BASE = '/peugeot-4008/'
const SITE_URL = `https://curder.github.io${SITE_BASE}`
const SITE_TITLE = '标致 4008 用车笔记'
const SITE_DESCRIPTION = '记录标致 4008 的日常用车经验：灯光、巡航、雨刮等操作方法，以及养车费用与常见问题。'

/**
 * 本地搜索分词函数。
 *
 * 中文没有空格，MiniSearch 默认分词会把整句当成一个词，导致中文检索不到内容：
 * 这里把中文拆成单字 + 相邻两字（「后视镜」会拆出 后 / 后视 / 视 / 视镜 / 镜），
 * 英文、数字按连续字符保留。
 *
 * 不使用 Intl.Segmenter：构建时索引在 Node 中生成、查询时分词在浏览器中执行，
 * 而 ICU 分词结果会随环境不同而不同，会导致索引与查询的词不一致而检索不到。
 *
 * 注意：该函数会被序列化后注入客户端，函数体内不能引用外部变量。
 */
const tokenize = (text: string): string[] => {
    const tokens: string[] = []

    for (const chunk of text.toLowerCase().match(/[\p{Script=Han}]+|[\p{L}\p{N}]+/gu) ?? []) {
        if (/^[\p{Script=Han}]+$/u.test(chunk)) {
            for (let index = 0; index < chunk.length; index++) {
                tokens.push(chunk[index])

                if (index + 1 < chunk.length) {
                    tokens.push(chunk.slice(index, index + 2))
                }
            }
        } else {
            tokens.push(chunk)
        }
    }

    return tokens
}

export default defineConfig({
    lang: 'zh-CN',
    base: SITE_BASE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    cleanUrls: true,
    lastUpdated: true,
    srcExclude: ['**/_partials/**'],
    sitemap: {
        hostname: SITE_URL,
        transformItems(items) {
            // 404 页面不需要被搜索引擎收录（此处的 url 是相对 srcDir 的路径，如 "404"）
            return items.filter((item) => !/(^|\/)404$/.test(item.url))
        },
    },
    head: [
        ['link', {rel: 'icon', href: `${SITE_BASE}images/favicon.ico`}],
    ],
    transformHead({pageData}) {
        const title = pageData.title ? `${pageData.title} | ${SITE_TITLE}` : SITE_TITLE
        const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
        const url = `${SITE_URL}${path}`

        return [
            ['meta', {property: 'og:type', content: 'article'}],
            ['meta', {property: 'og:site_name', content: SITE_TITLE}],
            ['meta', {property: 'og:title', content: title}],
            ['meta', {property: 'og:description', content: pageData.description || SITE_DESCRIPTION}],
            ['meta', {property: 'og:url', content: url}],
            ['meta', {name: 'twitter:card', content: 'summary'}],
            ['link', {rel: 'canonical', href: url}],
        ]
    },
    themeConfig: {
        logo: '/images/peugeot-old-logo.svg',
        siteTitle: '标致 4008',
        // 访问不存在的地址时，VitePress 回退到内置 NotFound 组件，
        // 它只读取这里的配置（docs/404.md 仅对 /404 路由本身生效）
        notFound: {
            code: '404',
            title: '页面不存在',
            quote: '抱歉，你访问的页面不存在或已被移动。可以回到首页重新查找，或者使用左上角的搜索。',
            linkText: '返回首页',
            linkLabel: '返回首页',
        },
        outline: {
            label: '章节导航',
            level: 'deep',
        },
        lastUpdated: {
            text: '最后更新时间',
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        editLink: {
            pattern: `${GITHUB_REPOSITORY}/edit/master/docs/:path`,
            text: '编辑它',
        },
        socialLinks: [
            {icon: 'github', link: GITHUB_REPOSITORY},
        ],
        footer: {
            message: '记录标致 4008 的日常用车经验',
            copyright: 'Copyright © curder',
        },
        search: {
            provider: 'local',
            options: {
                miniSearch: {
                    options: {
                        tokenize,
                    },
                    searchOptions: {
                        fuzzy: 0.2,
                        prefix: true,
                        boost: {title: 4, text: 2, titles: 1},
                    },
                },
            },
        },
        nav: nav(),
        sidebar: {
            '/guide/basic': sidebarGuideBasic(),
            '/guide/others': sidebarGuideOthers(),
        },
    },
});

function nav() {
    return [
        {text: '基础', link: '/guide/basic/light-control', activeMatch: '/guide/basic/'},
        {text: '其它', link: '/guide/others/faqs', activeMatch: '/guide/others/'},
        // {text: '养车费用', link: '/guide/others/consumption-list/', activeMatch: '/guide/others/consumption-list/',},
    ];
}

function sidebarGuideBasic() {
    return [
        {
            text: '基础操作',
            items: [
                {text: '外部灯光控制', link: '/guide/basic/light-control'},
                {text: '巡航系统', link: '/guide/basic/cruise-system'},
                {text: '雨刮器', link: '/guide/basic/wiper'},
                {text: '最佳实践', link: '/guide/basic/best-practices'},
            ]
        }
    ];
}

function sidebarGuideOthers() {
    return [
        {
            text: '其它',
            items: [
                {text: '常见问题', link: '/guide/others/faqs'},
                {text: '多媒体静音', link: '/guide/others/mute'},
                {text: '养车费用', link: '/guide/others/consumption-list/'},
            ]
        }
    ];
}
