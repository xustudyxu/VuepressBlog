const pluginsConf=require('./config/pluginsConf.js');
module.exports = {
    base: '/VuepressBlog/', //设置站点根路径
    title: 'xustudyxu\'s Blog',
    description: '一起学习编程!', 
    dest: 'docs/.vuepress/dist',
    port: '7777',
    plugins:pluginsConf,
    head: [
        ['link', { rel: 'icon', href: './img/02.png' }],
        ['link', { rel: 'stylesheet', href: './css/style.css' }],
        ['script', { charset: 'utf-8', href: './js/main.js' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        searchMaxSuggestoins: 10,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'xustudyxu/VuepressBlog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',

        // 以下为可选的编辑链接选项


        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: false,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }


  }
