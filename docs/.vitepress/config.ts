import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/peugeot-4008/",
    title: "experience of using Peugeot 4008",
    description: "Record some experience of using Peugeot 4008.",
    lastUpdated: true,
    themeConfig: {
        logo: "/images/logo.svg",
        siteTitle: "Peugeot 4008",
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
            "/guide": sidebarGuide(),
        }
    }
});


function nav()
{
    return [
        //
    ];
}

function sidebarGuide()
{
    return [
        //
    ];
}