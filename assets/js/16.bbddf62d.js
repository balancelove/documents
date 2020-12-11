(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{459:function(s,t,a){"use strict";a.r(t);var e=a(29),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),a("p",[s._v("创建一台虚拟机为私有仓库，本机向虚拟机的仓库发起上传和下载。")]),s._v(" "),a("h2",{attrs:{id:"搭建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建仓库"}},[s._v("#")]),s._v(" 搭建仓库")]),s._v(" "),a("p",[s._v("在虚拟机上创建仓库，并指定镜像文件存放在本地的默认路径，为其设置 docker 重启后跟随重启。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -d --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --name registry -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 -v /opt/data/registry:/var/lib/registry registry\n")])])]),a("p",[s._v("后续的 "),a("code",[s._v("registry")]),s._v(" 配置可见 "),a("code",[s._v("/etc/docker/registry/config.yml")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"主机测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主机测试"}},[s._v("#")]),s._v(" 主机测试")]),s._v(" "),a("p",[s._v("Docker 新的版本对安全性要求较高，要求仓库支持 SSL/TLS 证书，可以在本地信任该仓库。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 JSON 中追加内容，对应的 IP 地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.107:5000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n")])])]),a("p",[s._v("主机上传镜像到虚拟机仓库验证。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker pull ubuntu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打 tag")]),s._v("\ndocker tag ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.107:5000/tubuntu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# push")]),s._v("\ndocker push "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.107:5000/tubuntu\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://192.168.0.107:5000/v2/_catalog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# {"repositories":["tubuntu"]} # 成功')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还可以直接打开上面链接进行查看")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者在虚拟机上查看 ll /opt/data/registry/docker/registry/v2/repositories")]),s._v("\n")])])]),a("p",[s._v("下载验证。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先删除本地的镜像")]),s._v("\ndocker rmi "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.107:5000/tubuntu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\ndocker images\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取")]),s._v("\ndocker pull "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.107:5000/tubuntu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\ndocker images\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);