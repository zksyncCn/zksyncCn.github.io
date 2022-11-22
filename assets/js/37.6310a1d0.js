(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{446:function(t,s,a){"use strict";a.r(s);var e=a(32),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"实用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实用程序"}},[t._v("#")]),t._v(" 实用程序")]),t._v(" "),a("p",[a("code",[t._v("zksync-web3")]),t._v(" 为 zkSync 构建器提供了一些有用的实用程序。 它们可以通过以下方式导入：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zksync-web3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("大多数实用程序由 zkSync 团队在内部使用。 因此，本文档将仅描述那些对您有帮助的内容。")]),t._v(" "),a("h2",{attrs:{id:"以太的-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以太的-地址"}},[t._v("#")]),t._v(" 以太的“地址”")]),t._v(" "),a("p",[t._v("虽然正式的以太币是 zkSync 上地址为"),a("code",[t._v("0x00000000000000000000000000000000000800a")]),t._v("的代币，但我们使用“零地址”作为对用户更友好的别名：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ETH_ADDRESS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x0000000000000000000000000000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"zksync-智能合约的-abi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zksync-智能合约的-abi"}},[t._v("#")]),t._v(" zkSync 智能合约的 ABI")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ZKSYNC_MAIN_ABI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("utils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../abi/ZkSync.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"ierc20-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ierc20-接口"}},[t._v("#")]),t._v(" IERC20 接口")]),t._v(" "),a("p",[t._v("在 zkSync 上与原生代币交互时很方便。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IERC20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("utils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../abi/IERC20.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"编码-paymaster-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码-paymaster-参数"}},[t._v("#")]),t._v(" 编码 paymaster 参数")]),t._v(" "),a("p",[t._v("为常见的 "),a("RouterLink",{attrs:{to:"/dev/developer-guides/aa.html#built-in-paymaster-flows"}},[t._v("paymaster 流程")]),t._v(" 返回正确格式 "),a("code",[t._v("paymasterParams")]),t._v("对象的实用方法。")],1),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPaymasterParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paymasterAddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" paymasterInput"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PaymasterInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PaymasterParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("PaymasterInput")]),t._v(" 的定义可以在 "),a("RouterLink",{attrs:{to:"/api/js/types.html"}},[t._v("这里")]),t._v(" 找到。")],1),t._v(" "),a("h2",{attrs:{id:"默认-pubdata-价格限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认-pubdata-价格限制"}},[t._v("#")]),t._v(" 默认 pubdata 价格限制")]),t._v(" "),a("p",[t._v("目前，没有方法可以准确估计所需的 ergsPerPubdataLimit。 这就是为什么现在强烈建议提供 "),a("code",[t._v("DEFAULT_ERGS_PER_PUBDATA_LIMIT")]),t._v("。 提供它不会向用户收取更多费用。\n稍后可以查询当前推荐的限制。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GAS_PER_PUBDATA_BYTE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_ERGS_PER_PUBDATA_LIMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GAS_PER_PUBDATA_BYTE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10_000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);