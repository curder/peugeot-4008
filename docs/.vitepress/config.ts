import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/peugeot-4008/",
    title: "experience of using Peugeot 4008",
    description: "Record some experience of using Peugeot 4008.",
    lastUpdated: true,
    head: [
        ['link', {rel: 'icon', href: '/peugeot-4008/images/favicon.ico'}],
    ],
    themeConfig: {
        logo: "/images/peugeot-old-logo.svg",
        siteTitle: "标致 4008",
        outline: {
            label: "章节导航",
            level: 'deep',
        },
        lastUpdatedText: "最后更新时间",
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/peugeot-4008/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/peugeot-4008'}
        ],
        nav: nav(),
        sidebar: {
            "/guide/basic": sidebarGuideBasic(),
            "/guide/skills": sidebarGuideSkills(),
        }
    }
});


function nav()
{
    return [
        {text: "基础", link: "/guide/basic/light-control", activeMatch: "/guide/basic/"},
        {text: "一些技巧", link: "/guide/skills/unique-design", activeMatch: "/guide/skills/"},
        {text: "费用清单", link: "/consumption-list", activeMatch: "/consumption-list"},
    ];
}

function sidebarGuideBasic() {
    return [
        {
            text: "",
            items: [
                {text: "外部灯光控制", link: "/guide/basic/light-control"},
            ]
        }
    ];
}

function sidebarGuideSkills()
{
    return [
        {
            text: "",
            items: [
                {text: "独特设计", link: "/guide/skills/unique-design"},
                {text: "多媒体静音", link: "/guide/skills/mute"},
            ]
        }
    ];
}