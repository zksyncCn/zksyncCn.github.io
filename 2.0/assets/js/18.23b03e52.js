(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{426:function(e,t,r){"use strict";r.r(t);var n=r(32),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"l1-contracts-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#l1-contracts-interface"}},[e._v("#")]),e._v(" L1 contracts interface")]),e._v(" "),r("p",[e._v("To interact with zkSync from L1, you need the interface of its canonical bridge. There are two main ways to import it to your codebase:")]),e._v(" "),r("ul",[r("li",[e._v("By importing it from the "),r("code",[e._v("@matterlabs/zksync-contracts")]),e._v(" npm package. (preferred)")]),e._v(" "),r("li",[e._v("By downloading the contracts from the "),r("a",{attrs:{href:"https://github.com/matter-labs/v2-testnet-contracts",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("The guide on interacting with the zkSync canonical bridge with examples in both Solidity and "),r("code",[e._v("zksync-web3")]),e._v(" SDK can be found "),r("RouterLink",{attrs:{to:"/dev/developer-guides/bridging/l1-l2.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("p",[e._v("This page will primarily serve as a quick reference for the interfaces and types you may require, as well as how to import them.")]),e._v(" "),r("h2",{attrs:{id:"matterlabs-zksync-contracts-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#matterlabs-zksync-contracts-reference"}},[e._v("#")]),e._v(" "),r("code",[e._v("@matterlabs/zksync-contracts")]),e._v(" reference")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("@matterlabs/zksync-contracts/contracts/interfaces/IZkSync.sol")]),e._v(" is the file where the zkSync L1 contract interface "),r("code",[e._v("IZkSync")]),e._v(" is located. Particular interest is in the "),r("code",[e._v("IBridge")]),e._v(" functionality. Its implementation can be found "),r("a",{attrs:{href:"https://github.com/matter-labs/v2-testnet-contracts/blob/main/l1/contracts/zksync/interfaces/IZkSync.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),e._v(" - `@matterlabs/zksync-contracts/libraries/Operations.sol` is the file where the `Operations` library with all the user types in the bridge is stored. Its implementation can be found [here](https://github.com/matter-labs/v2-testnet-contracts/blob/main/libraries/Operations.sol).\n"),r("p",[e._v("--\x3e")]),e._v(" "),r("p",[e._v("The code in the repository may contain some of the configuration constants. These are placeholder values taken from the development environment. You should use the library only for the interfaces and types it provides.")])])}),[],!1,null,null,null);t.default=a.exports}}]);