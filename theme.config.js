const siteConfig = require('./site.config')

module.exports = {
    base: {
        permalink: '/post/:slug'
    },
    header: {
        title: siteConfig.title,
        navbar: {
            inner: [{
                name: '更新',
                path: '/'
            }, {
                name: '技术',
                path: '/category/technology/'
            }, {
                name: '设计',
                path: '/category/design/'
            }, {
                name: '产品',
                path: '/category/product/'
            }],
            outer: [{
                name: '海澜之家',
                path: '//github.com/atsvvx/'
            }]
        }
    },
    wallpaper: {
        title: '哈缺氧',
        subtitle: '!距离面试 3 个月, 最近一定要出几个项目!',
        backgroudImg: ''
    },
    footer: {
        copyright: {
            startFullYear: 2018,
            name: '哈缺氧'
        },
        custom: `
                <div class="busuanzi">
                    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
                    <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
                </div>`,
    }
}