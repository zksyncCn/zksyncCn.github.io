(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{444:function(t,s,a){"use strict";a.r(s);var e=a(32),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"utilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utilities"}},[t._v("#")]),t._v(" Utilities")]),t._v(" "),a("p",[a("code",[t._v("zksync-web3")]),t._v(" provides some useful utilities for zkSync builders. They can be imported the following way:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zksync-web3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Most of the utilities are used internally by the zkSync team. So this document will describe only those which should be helpful for you.")]),t._v(" "),a("h2",{attrs:{id:"the-address-of-ether"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-address-of-ether"}},[t._v("#")]),t._v(' The "address" of ether')]),t._v(" "),a("p",[t._v("While formally ether is a token with address "),a("code",[t._v("0x000000000000000000000000000000000000800a")]),t._v(' on zkSync, we use the "zero address" as a more user-friendly alias:')]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ETH_ADDRESS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x0000000000000000000000000000000000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"abi-of-zksync-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abi-of-zksync-smart-contract"}},[t._v("#")]),t._v(" ABI of zkSync smart contract")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ZKSYNC_MAIN_ABI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("utils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../abi/ZkSync.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"ierc20-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ierc20-interface"}},[t._v("#")]),t._v(" IERC20 interface")]),t._v(" "),a("p",[t._v("Convenient when interacting with native tokens on zkSync.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IERC20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("utils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../abi/IERC20.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"encoding-paymaster-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encoding-paymaster-params"}},[t._v("#")]),t._v(" Encoding paymaster params")]),t._v(" "),a("p",[t._v("Utility method that returns the correctly formed "),a("code",[t._v("paymasterParams")]),t._v(" object for the common "),a("RouterLink",{attrs:{to:"/dev/developer-guides/aa.html#built-in-paymaster-flows"}},[t._v("paymaster flows")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPaymasterParams")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("paymasterAddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" paymasterInput"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PaymasterInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PaymasterParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The definition of the "),a("code",[t._v("PaymasterInput")]),t._v(" can be found "),a("RouterLink",{attrs:{to:"/api/js/types.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"default-pubdata-price-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-pubdata-price-limit"}},[t._v("#")]),t._v(" Default pubdata price limit")]),t._v(" "),a("p",[t._v("Currently, there is no method to accurately estimate the required "),a("code",[t._v("ergsPerPubdataLimit")]),t._v(". That's why for now, it is highly recommended to provide the "),a("code",[t._v("DEFAULT_ERGS_PER_PUBDATA_LIMIT")]),t._v(". Users are not charged more by providing it.\nLater on it will be possible to query the current recommended limit.")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GAS_PER_PUBDATA_BYTE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_ERGS_PER_PUBDATA_LIMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GAS_PER_PUBDATA_BYTE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10_000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);