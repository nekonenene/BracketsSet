define(["require", "exports"], function (require, exports) {
    function setExtensions(set) {
        // XML
        set('xml', (_a = {},
            _a[0 /* ColorLight */] = '#ff6600',
            _a[1 /* IconIon */] = 'ion-code',
            _a[2 /* IconDev */] = 'devicons devicons-code',
            _a
        ));
        set(['html', 'htm'], (_b = {},
            _b[0 /* ColorLight */] = '#e34c26',
            _b[1 /* IconIon */] = 'ion-code',
            _b[2 /* IconDev */] = 'devicons devicons-html5',
            _b
        ));
        set('haml', (_c = {},
            _c[0 /* ColorLight */] = '#0270b9',
            _c[1 /* IconIon */] = 'ion-code',
            _c[2 /* IconDev */] = 'devicons devicons-code',
            _c
        ));
        set('hbs', (_d = {},
            _d[0 /* ColorLight */] = '#f38709',
            _d[1 /* IconIon */] = 'ion-code',
            _d[2 /* IconDev */] = 'devicons devicons-code',
            _d
        ));
        // Stylesheets
        set('css', (_e = {},
            _e[0 /* ColorLight */] = '#0270b9',
            _e[1 /* IconIon */] = ['ion-pound', 12],
            _e[2 /* IconDev */] = 'devicons devicons-css3_full',
            _e
        ));
        set(['scss', 'sass'], (_f = {},
            _f[0 /* ColorLight */] = '#cb6899',
            _f[1 /* IconIon */] = ['ion-pound', 12],
            _f[2 /* IconDev */] = 'devicons devicons-sass',
            _f
        ));
        set('less', (_g = {},
            _g[0 /* ColorLight */] = '#2b5086',
            _g[1 /* IconIon */] = ['ion-pound', 12],
            _g[2 /* IconDev */] = 'devicons devicons-less',
            _g
        ));
        set('styl', (_h = {},
            _h[0 /* ColorLight */] = '#b3d107',
            _h[1 /* IconIon */] = ['ion-pound', 12],
            _h[2 /* IconDev */] = 'devicons devicons-stylus',
            _h
        ));
        // JavaScript
        set('js', (_j = {},
            _j[0 /* ColorLight */] = '#e5a228',
            _j[1 /* IconIon */] = ['file-icon-c', 13],
            _j[2 /* IconDev */] = 'devicons devicons-javascript',
            _j
        ));
        set('es6', (_k = {},
            _k[0 /* ColorLight */] = '#4321a9',
            _k[1 /* IconIon */] = ['file-icon-c', 13],
            _k[2 /* IconDev */] = 'devicons devicons-javascript',
            _k
        ));
        set('babel.js', (_l = {},
            _l[0 /* ColorLight */] = '#f5da55',
            _l[1 /* IconIon */] = ['file-icon-c', 13],
            _l[2 /* IconDev */] = 'devicons devicons-javascript',
            _l
        ));
        set('ts', (_m = {},
            _m[0 /* ColorLight */] = '#0074c1',
            _m[1 /* IconIon */] = ['file-icon-c', 13],
            _m[2 /* IconDev */] = 'devicons devicons-javascript',
            _m
        ));
        set('d.ts', (_o = {},
            _o[0 /* ColorLight */] = '#0b8f9e',
            _o[1 /* IconIon */] = ['file-icon-c', 13],
            _o[2 /* IconDev */] = 'devicons devicons-javascript',
            _o
        ));
        set('coffee', (_p = {},
            _p[0 /* ColorLight */] = '#425d99',
            _p[1 /* IconIon */] = 'ion-coffee',
            _p[2 /* IconDev */] = 'devicons devicons-coffeescript',
            _p
        ));
        set('json', (_q = {},
            _q[0 /* ColorLight */] = '#e5a228',
            _q[1 /* IconIon */] = 'ion-ios-gear',
            _q[2 /* IconDev */] = 'devicons devicons-aptana',
            _q
        ));
        set('ls', (_r = {},
            _r[0 /* ColorLight */] = '#369bd7',
            _r[1 /* IconIon */] = 'ion-beaker',
            _r[2 /* IconDev */] = 'devicons devicons-javascript',
            _r
        ));
        // Server side
        set('php', (_s = {},
            _s[0 /* ColorLight */] = '#6976c3',
            _s[1 /* IconIon */] = 'ion-code-working',
            _s[2 /* IconDev */] = 'devicons devicons-php',
            _s
        ));
        set('ctp', (_t = {},
            _t[0 /* ColorLight */] = '#417282',
            _t[1 /* IconIon */] = 'ion-code-working',
            _t[2 /* IconDev */] = 'devicons devicons-php',
            _t
        ));
        set('sql', (_u = {},
            _u[0 /* ColorLight */] = '#c67f07',
            _u[1 /* IconIon */] = 'ion-soup-can-outline',
            _u[2 /* IconDev */] = 'devicons devicons-database',
            _u
        ));
        // Java
        set(['java', 'class'], (_v = {},
            _v[0 /* ColorLight */] = '#5382a1',
            _v[1 /* IconIon */] = 'ion-coffee',
            _v[2 /* IconDev */] = 'devicons devicons-java',
            _v
        ));
        set('scala', (_w = {},
            _w[0 /* ColorLight */] = '#72d0eb',
            _w[1 /* IconIon */] = 'ion-navicon-round file-icon-rotated',
            _w[2 /* IconDev */] = 'devicons devicons-scala',
            _w
        ));
        set('groovy', (_x = {},
            _x[0 /* ColorLight */] = '#4298b8',
            _x[1 /* IconIon */] = 'ion-ios-star',
            _x[2 /* IconDev */] = ['devicons devicons-groovy', 18],
            _x
        ));
        set('mf', (_y = {},
            _y[0 /* ColorLight */] = '#2f5796',
            _y[1 /* IconIon */] = 'ion-ios-gear',
            _y[2 /* IconDev */] = 'devicons devicons-aptana',
            _y
        ));
        // Lua
        set('lua', (_z = {},
            _z[0 /* ColorLight */] = '#00207d',
            _z[1 /* IconIon */] = ['ion-record', 14],
            _z
        ));
        // Clojure
        set('clj', (_0 = {},
            _0[0 /* ColorLight */] = '#63b132',
            _0[1 /* IconIon */] = 'ion-aperture',
            _0[2 /* IconDev */] = 'devicons devicons-clojure',
            _0
        ));
        // Visual Basic
        set('vb', (_1 = {},
            _1[0 /* ColorLight */] = '#486dae',
            _1[1 /* IconIon */] = 'ion-ios-infinite',
            _1[2 /* IconDev */] = 'devicons devicons-visualstudio',
            _1
        ));
        set('vbs', (_2 = {},
            _2[0 /* ColorLight */] = '#3d047e',
            _2[1 /* IconIon */] = 'ion-ios-infinite',
            _2[2 /* IconDev */] = 'devicons devicons-visualstudio',
            _2
        ));
        // C-family
        set('hx', (_3 = {},
            _3[0 /* ColorLight */] = '#ea8220',
            _3[1 /* IconIon */] = ['file-icon-c', 13],
            _3
        ));
        set('pl', (_4 = {},
            _4[0 /* ColorLight */] = '#a4c5eb',
            _4[1 /* IconIon */] = ['file-icon-c', 13],
            _4
        ));
        set('c', (_5 = {},
            _5[0 /* ColorLight */] = '#a8b9cc',
            _5[1 /* IconIon */] = ['file-icon-c', 13],
            _5
        ));
        set('cpp', (_6 = {},
            _6[0 /* ColorLight */] = '#ffd232',
            _6[1 /* IconIon */] = ['file-icon-c', 13],
            _6
        ));
        set('cs', (_7 = {},
            _7[0 /* ColorLight */] = '#5bb552',
            _7[1 /* IconIon */] = ['file-icon-c', 13],
            _7[2 /* IconDev */] = 'devicons devicons-visualstudio',
            _7
        ));
        set('swift', (_8 = {},
            _8[0 /* ColorLight */] = '#f16830',
            _8[1 /* IconIon */] = ['file-icon-c', 13],
            _8[2 /* IconDev */] = 'devicons devicons-swift',
            _8
        ));
        set('dart', (_9 = {},
            _9[0 /* ColorLight */] = '#36bfb6',
            _9[1 /* IconIon */] = ['file-icon-c', 13],
            _9[2 /* IconDev */] = 'devicons devicons-dart',
            _9
        ));
        // Ruby
        set(['rb', 'erb', 'rdoc'], (_10 = {},
            _10[0 /* ColorLight */] = '#9b111e',
            _10[1 /* IconIon */] = 'ion-heart',
            _10[2 /* IconDev */] = ['devicons devicons-ruby', 14],
            _10
        ));
        set('feature', (_11 = {},
            _11[0 /* ColorLight */] = '#4e8b39',
            _11[1 /* IconIon */] = 'ion-chatbox-working',
            _11[2 /* IconDev */] = ['devicons devicons-ruby', 14],
            _11
        ));
        // Python
        set(['py', 'pyw'], (_12 = {},
            _12[0 /* ColorLight */] = '#f8c63d',
            _12[1 /* IconIon */] = 'ion-social-python',
            _12[2 /* IconDev */] = 'devicons devicons-python',
            _12
        ));
        // Qt Quick
        set('qml', (_13 = {},
            _13[0 /* ColorLight */] = '#42ed0e',
            _13[1 /* IconIon */] = 'ion-code',
            _13[2 /* IconDev */] = 'devicons devicons-code',
            _13
        ));
        // Shell and friends
        set('sh', (_14 = {},
            _14[0 /* ColorLight */] = '#008d00',
            _14[1 /* IconIon */] = 'ion-android-list',
            _14[2 /* IconDev */] = 'devicons devicons-terminal',
            _14
        ));
        set('bat', (_15 = {},
            _15[0 /* ColorLight */] = '#60c910',
            _15[1 /* IconIon */] = 'ion-android-list',
            _15[2 /* IconDev */] = 'devicons devicons-terminal',
            _15
        ));
        // Applications
        set('exe', (_16 = {},
            _16[0 /* ColorLight */] = '#57a084',
            _16[1 /* IconIon */] = 'ion-social-windows',
            _16[2 /* IconDev */] = 'devicons devicons-windows',
            _16
        ));
        set('dll', (_17 = {},
            _17[0 /* ColorLight */] = '#709ead',
            _17[1 /* IconIon */] = 'ion-social-windows',
            _17[2 /* IconDev */] = 'devicons devicons-windows',
            _17
        ));
        // Templating
        set('jade', (_18 = {},
            _18[0 /* ColorLight */] = '#00a57a',
            _18[1 /* IconIon */] = 'ion-egg',
            _18
        ));
        // Images
        set('png', (_19 = {},
            _19[0 /* ColorLight */] = '#dbb1a9',
            _19[1 /* IconIon */] = 'ion-image',
            _19[2 /* IconDev */] = 'devicons devicons-html5_multimedia',
            _19
        ));
        set(['jpeg', 'jpg'], (_20 = {},
            _20[0 /* ColorLight */] = '#dedfa3',
            _20[1 /* IconIon */] = 'ion-image',
            _20[2 /* IconDev */] = 'devicons devicons-html5_multimedia',
            _20
        ));
        set('tiff', (_21 = {},
            _21[0 /* ColorLight */] = '#ff4000',
            _21[1 /* IconIon */] = 'ion-image',
            _21[2 /* IconDev */] = 'devicons devicons-html5_multimedia',
            _21
        ));
        set('ico', (_22 = {},
            _22[0 /* ColorLight */] = '#b6d2d1',
            _22[1 /* IconIon */] = 'ion-image',
            _22[2 /* IconDev */] = 'devicons devicons-html5_multimedia',
            _22
        ));
        set('svg', (_23 = {},
            _23[0 /* ColorLight */] = '#c0c5eb',
            _23[1 /* IconIon */] = 'ion-image',
            _23[2 /* IconDev */] = 'devicons devicons-html5_multimedia',
            _23
        ));
        set('gif', (_24 = {},
            _24[0 /* ColorLight */] = '#aaecc0',
            _24[1 /* IconIon */] = 'ion-images',
            _24[2 /* IconDev */] = 'devicons devicons-html5_multimedia',
            _24
        ));
        // Videos
        set(['mp4', 'webm', 'ogg'], (_25 = {},
            _25[0 /* ColorLight */] = '#008d00',
            _25[1 /* IconIon */] = 'ion-ios-videocam',
            _25[2 /* IconDev */] = 'devicons devicons-html5_multimedia',
            _25
        ));
        // Audio
        set(['mp3', 'wav'], (_26 = {},
            _26[0 /* ColorLight */] = '#921100',
            _26[1 /* IconIon */] = 'ion-volume-medium',
            _26[2 /* IconDev */] = 'devicons devicons-html5_multimedia',
            _26
        ));
        // Fonts
        set('ttf', (_27 = {},
            _27[0 /* ColorLight */] = '#b42950',
            _27[1 /* IconIon */] = 'ion-social-tumblr',
            _27
        ));
        set('eot', (_28 = {},
            _28[0 /* ColorLight */] = '#b36908',
            _28[1 /* IconIon */] = 'ion-social-tumblr',
            _28
        ));
        set(['woff', 'woff2'], (_29 = {},
            _29[0 /* ColorLight */] = '#7f4bb2',
            _29[1 /* IconIon */] = 'ion-social-tumblr',
            _29
        ));
        set('otf', (_30 = {},
            _30[0 /* ColorLight */] = '#7f4bb2',
            _30[1 /* IconIon */] = 'ion-social-tumblr',
            _30
        ));
        // Readme
        set(['md', 'markdown'], (_31 = {},
            _31[0 /* ColorLight */] = '#b94700',
            _31[1 /* IconIon */] = ['ion-social-markdown', 12],
            _31[2 /* IconDev */] = 'devicons devicons-markdown',
            _31
        ));
        // Git
        set('gitignore', (_32 = {},
            _32[0 /* ColorLight */] = '#cd5439',
            _32[1 /* IconIon */] = ['ion-minus-circled', 14],
            _32[2 /* IconDev */] = 'devicons devicons-git_commit',
            _32
        ));
        set('gitmodules', (_33 = {},
            _33[0 /* ColorLight */] = '#f64d27',
            _33[1 /* IconIon */] = ['ion-fork-repo', 17],
            _33[2 /* IconDev */] = 'devicons devicons-git_branch',
            _33
        ));
        // Webservers
        set('htaccess', (_34 = {},
            _34[0 /* ColorLight */] = '#93a8be',
            _34[1 /* IconIon */] = ['ion-ios-unlocked', 18],
            _34
        ));
        set('htpasswd', (_35 = {},
            _35[0 /* ColorLight */] = '#6c369c',
            _35[1 /* IconIon */] = ['ion-ios-locked', 18],
            _35
        ));
        set('conf', (_36 = {},
            _36[0 /* ColorLight */] = '#009900',
            _36[1 /* IconIon */] = 'ion-ios-gear',
            _36[2 /* IconDev */] = 'devicons devicons-aptana',
            _36
        ));
        // Archive
        set('zip', (_37 = {},
            _37[0 /* ColorLight */] = '#008858',
            _37[1 /* IconIon */] = 'ion-briefcase',
            _37[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _37
        ));
        set('rar', (_38 = {},
            _38[0 /* ColorLight */] = '#005888',
            _38[1 /* IconIon */] = 'ion-briefcase',
            _38[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _38
        ));
        set('7z', (_39 = {},
            _39[0 /* ColorLight */] = '#880058',
            _39[1 /* IconIon */] = 'ion-briefcase',
            _39[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _39
        ));
        set('tgz', (_40 = {},
            _40[0 /* ColorLight */] = '#7900bc',
            _40[1 /* IconIon */] = 'ion-briefcase',
            _40[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _40
        ));
        set('tar', (_41 = {},
            _41[0 /* ColorLight */] = '#885800',
            _41[1 /* IconIon */] = 'ion-briefcase',
            _41[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _41
        ));
        set('gz', (_42 = {},
            _42[0 /* ColorLight */] = '#588800',
            _42[1 /* IconIon */] = 'ion-briefcase',
            _42[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _42
        ));
        set('bzip', (_43 = {},
            _43[0 /* ColorLight */] = '#884300',
            _43[1 /* IconIon */] = 'ion-briefcase',
            _43[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _43
        ));
        set('msi', (_44 = {},
            _44[0 /* ColorLight */] = '#6f8696',
            _44[1 /* IconIon */] = 'ion-briefcase',
            _44[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _44
        ));
        set('dmg', (_45 = {},
            _45[0 /* ColorLight */] = '#6f8696',
            _45[1 /* IconIon */] = 'ion-briefcase',
            _45[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _45
        ));
        set('xpi', (_46 = {},
            _46[0 /* ColorLight */] = '#5bac0d',
            _46[1 /* IconIon */] = 'ion-briefcase',
            _46[2 /* IconDev */] = ['devicons devicons-netbeans', 17],
            _46
        ));
        // Settings
        set([
            'project',
            'jscsrc',
            'jshintrc',
            'csslintrc',
            'htmlhintrc',
            'xmlhintrc',
            'todo',
            'classpath',
            'properties',
            'bowerrc',
            'gruntrc',
            'jsrc',
            'pro',
            'editorconfig',
            'iml'
        ], (_47 = {},
            _47[0 /* ColorLight */] = '#777777',
            _47[1 /* IconIon */] = 'ion-ios-gear',
            _47[2 /* IconDev */] = 'devicons devicons-aptana',
            _47
        ));
        set('csproj', (_48 = {},
            _48[0 /* ColorLight */] = '#5bb552',
            _48[1 /* IconIon */] = ['ion-ios-paper-outline', 18],
            _48[2 /* IconDev */] = 'devicons devicons-aptana',
            _48
        ));
        set('vbproj', (_49 = {},
            _49[0 /* ColorLight */] = '#486dae',
            _49[1 /* IconIon */] = ['ion-ios-paper-outline', 18],
            _49[2 /* IconDev */] = 'devicons devicons-aptana',
            _49
        ));
        set('sln', (_50 = {},
            _50[0 /* ColorLight */] = '#87c5de',
            _50[1 /* IconIon */] = ['ion-ios-paper-outline', 18],
            _50[2 /* IconDev */] = 'devicons devicons-aptana',
            _50
        ));
        // Other text files
        set('txt', (_51 = {},
            _51[0 /* ColorLight */] = '#4192c1',
            _51[1 /* IconIon */] = 'ion-document-text',
            _51
        ));
        set('log', (_52 = {},
            _52[0 /* ColorLight */] = '#225dc9',
            _52[1 /* IconIon */] = 'ion-clipboard',
            _52
        ));
        set('npmignore', (_53 = {},
            _53[0 /* ColorLight */] = '#cb3837',
            _53[1 /* IconIon */] = ['ion-minus-circled', 14],
            _53[2 /* IconDev */] = 'devicons devicons-npm',
            _53
        ));
        set('slugignore', (_54 = {},
            _54[0 /* ColorLight */] = '#0da064',
            _54[1 /* IconIon */] = ['ion-minus-circled', 14],
            _54
        ));
        set('dockerignore', (_55 = {},
            _55[0 /* ColorLight */] = '#0296C9',
            _55[1 /* IconIon */] = ['ion-minus-circled', 14],
            _55
        ));
        set('jpmignore', (_56 = {},
            _56[0 /* ColorLight */] = '#5bac0d',
            _56[1 /* IconIon */] = ['ion-minus-circled', 14],
            _56
        ));
        set(['yml', 'yaml'], (_57 = {},
            _57[0 /* ColorLight */] = '#008000',
            _57[1 /* IconIon */] = ['ion-navicon', 14],
            _57
        ));
        set('sqf', (_58 = {},
            _58[0 /* ColorLight */] = '#b9e11f',
            _58[1 /* IconIon */] = 'ion-wand',
            _58
        ));
        // LaTeX
        set(['tex', 'bib', 'sty'], (_59 = {},
            _59[0 /* ColorLight */] = '#262686',
            _59[1 /* IconIon */] = 'ion-document-text',
            _59
        ));
        //Singular Types
        set('applescript', (_60 = {},
            _60[0 /* ColorLight */] = '#afafaf',
            _60[1 /* IconIon */] = 'ion-social-apple',
            _60[2 /* IconDev */] = 'devicons devicons-apple',
            _60
        ));
        set('textile', (_61 = {},
            _61[0 /* ColorLight */] = '#6f8696',
            _61[1 /* IconIon */] = 'ion-quote',
            _61
        ));
        set('matlab', (_62 = {},
            _62[0 /* ColorLight */] = '#014495',
            _62[1 /* IconIon */] = 'ion-clipboard',
            _62
        ));
        set('lisp', (_63 = {},
            _63[0 /* ColorLight */] = '#f8c63d',
            _63[1 /* IconIon */] = 'ion-ios-paperplane',
            _63
        ));
        set('xsl', (_64 = {},
            _64[0 /* ColorLight */] = '#68217a',
            _64[1 /* IconIon */] = 'ion-code',
            _64[2 /* IconDev */] = 'devicons devicons-code',
            _64
        ));
        set('tcl', (_65 = {},
            _65[0 /* ColorLight */] = '#c3b15f',
            _65[1 /* IconIon */] = 'ion-code',
            _65[2 /* IconDev */] = 'devicons devicons-code',
            _65
        ));
        set('rst', (_66 = {},
            _66[0 /* ColorLight */] = '#6f8696',
            _66[1 /* IconIon */] = 'ion-ios-paper',
            _66[2 /* IconDev */] = ['devicons devicons-rust', 18],
            _66
        ));
        set('d', (_67 = {},
            _67[0 /* ColorLight */] = '#960000',
            _67[1 /* IconIon */] = 'ion-contrast',
            _67
        ));
        set('r', (_68 = {},
            _68[0 /* ColorLight */] = '#8495C0',
            _68[1 /* IconIon */] = 'ion-ios-analytics',
            _68
        ));
        set('map', (_69 = {},
            _69[0 /* ColorLight */] = '#e0591f',
            _69[1 /* IconIon */] = 'ion-ios-photos-outline',
            _69
        ));
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69;
    }
    exports.setExtensions = setExtensions;
    function setPrefixes(set) {
        set(['spec', 'test'], (_a = {},
            _a[0 /* ColorLight */] = '#146ae3',
            _a[1 /* IconIon */] = 'ion-android-radio-button-on',
            _a
        ));
        set('min', (_b = {},
            _b[0 /* ColorLight */] = '#f28b1d',
            _b[1 /* IconIon */] = ['ion-minus-circled', 14],
            _b
        ));
        var _a, _b;
    }
    exports.setPrefixes = setPrefixes;
    function setFullFileNames(set) {
        set('Dockerfile', (_a = {},
            _a[0 /* ColorLight */] = '#0296C9',
            _a[1 /* IconIon */] = ['ion-navicon', 14],
            _a[2 /* IconDev */] = ['devicons devicons-docker', 18],
            _a
        ));
        var _a;
    }
    exports.setFullFileNames = setFullFileNames;
    function setFileNames(set) {
        set('package', ['json'], (_a = {},
            _a[0 /* ColorLight */] = '#cb3837',
            _a[1 /* IconIon */] = 'ion-briefcase',
            _a[2 /* IconDev */] = 'devicons devicons-npm',
            _a
        ));
        set(['.brackets', 'brackets'], ['json'], (_b = {},
            _b[0 /* ColorLight */] = '#0083e8',
            _b[2 /* IconDev */] = 'devicons devicons-brackets',
            _b
        ));
        set('gulpfile', ['js', 'ts', 'coffee', 'babel.js'], (_c = {},
            _c[0 /* ColorLight */] = '#eb4a4b',
            _c[1 /* IconIon */] = 'ion-hammer',
            _c[2 /* IconDev */] = 'devicons devicons-gulp',
            _c
        ));
        set('gruntfile', ['js', 'coffee'], (_d = {},
            _d[0 /* ColorLight */] = '#fba919',
            _d[1 /* IconIon */] = 'ion-hammer',
            _d[2 /* IconDev */] = 'devicons devicons-grunt',
            _d
        ));
        var _a, _b, _c, _d;
    }
    exports.setFileNames = setFileNames;
    function getDefault() {
        return (_a = {},
            _a[1 /* IconIon */] = 'ion-document',
            _a[2 /* IconDev */] = 'devicons devicons-code_badge',
            _a
        );
        var _a;
    }
    exports.getDefault = getDefault;
});
