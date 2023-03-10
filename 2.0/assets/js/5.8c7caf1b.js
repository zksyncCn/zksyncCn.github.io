(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{396:function(t,e,s){t.exports=s.p+"assets/img/block-tx.703e9f5c.png"},397:function(t,e,s){t.exports=s.p+"assets/img/block-menu.1f30e1c6.png"},398:function(t,e,s){t.exports=s.p+"assets/img/view-block.1e766702.png"},399:function(t,e,s){t.exports=s.p+"assets/img/single-block.220fef83.png"},449:function(t,e,s){"use strict";s.r(e);var o=s(32),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"browse-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#browse-blocks"}},[t._v("#")]),t._v(" Browse blocks")]),t._v(" "),o("p",[o("img",{attrs:{src:s(396),alt:"Browse blocks!",title:"View blocks on zkSync"}})]),t._v(" "),o("p",[t._v("The block explorer home screen, by default, displays the 10 most recent blocks in the chain.\nView all blocks for a more complete overview of recent blocks, or click on a specific block number for details on that block.\nThe blocks page is also accessible via the top menu.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(397),alt:"Access the block page",title:"Blocks menu"}})]),t._v(" "),o("h2",{attrs:{id:"view-all-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#view-all-blocks"}},[t._v("#")]),t._v(" View all blocks")]),t._v(" "),o("p",[t._v("You can click on a block number to see all the details of that specific block. If you want to browse more blocks, click the "),o("a",{attrs:{href:"https://explorer.zksync.io/blocks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocks"),o("OutboundLink")],1),t._v(" section of the navigation menu. Use the pagination to navigate to the next page.")]),t._v(" "),o("p",[t._v("However, if you have already left the homepage, you can always search for any block by typing in the block number.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(398),alt:"Browse all blocks",title:"Browse all blocks"}})]),t._v(" "),o("p",[t._v("There are two main sections inside a block:")]),t._v(" "),o("ol",[o("li",[t._v("The Block Header")])]),t._v(" "),o("ul",[o("li",[t._v("This shows brief information about this specific block, as well as a link to the previous block in the chain.")])]),t._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[t._v("Transactions")])]),t._v(" "),o("ul",[o("li",[t._v("Consists of lists of all the transactions that were included in this block.")])]),t._v(" "),o("p",[o("img",{attrs:{src:s(399),alt:"Single block page!",title:"View a single block"}})]),t._v(" "),o("h3",{attrs:{id:"block-headers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#block-headers"}},[t._v("#")]),t._v(" Block headers")]),t._v(" "),o("p",[t._v("The following table should help explain what you’ll see in a block.\nFor more details on blocks, see the docs on "),o("RouterLink",{attrs:{to:"/dev/developer-guides/transactions/blocks.html"}},[t._v("Blocks")]),t._v(".")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Value")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Block number")]),t._v(" "),o("td",[t._v("The unique sequential number for this block.")])]),t._v(" "),o("tr",[o("td",[t._v("Block size")]),t._v(" "),o("td",[t._v("The size of the block.")])]),t._v(" "),o("tr",[o("td",[t._v("Timestamp")]),t._v(" "),o("td",[t._v("The block generation time in seconds since the Unix epoch.")])]),t._v(" "),o("tr",[o("td",[t._v("Root hash")]),t._v(" "),o("td",[t._v("The Cryptographic hash of the block header.")])]),t._v(" "),o("tr",[o("td",[t._v("Status")]),t._v(" "),o("td",[t._v("The status of the block, could be "),o("code",[t._v("sealed")]),t._v(", "),o("code",[t._v("finalized")]),t._v(", or "),o("code",[t._v("unfinalized")]),t._v(".")])])])]),t._v(" "),o("h3",{attrs:{id:"transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),o("p",[t._v('This section lists all the transactions that are included in this block.\nTransactions are served on a first-in-first-out basis, but in the future, we will introduce a "priority heap", which will allow for sorting the transactions.')]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Value")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Block")]),t._v(" "),o("td",[t._v("The amount of transactions in a block")])]),t._v(" "),o("tr",[o("td",[t._v("Timestamp")]),t._v(" "),o("td",[t._v("The block generation time in seconds since the Unix epoch.")])]),t._v(" "),o("tr",[o("td",[t._v("Hash")]),t._v(" "),o("td",[t._v("The hash of the transaction serving as the transaction’s ID")])]),t._v(" "),o("tr",[o("td",[t._v("From")]),t._v(" "),o("td",[t._v("The account or smart contract, sending the transaction.")])]),t._v(" "),o("tr",[o("td",[t._v("To")]),t._v(" "),o("td",[t._v("The account or smart contract, the transaction targeted.")])]),t._v(" "),o("tr",[o("td",[t._v("Fee")]),t._v(" "),o("td",[t._v("The rate of fees associated with this transaction processing.")])]),t._v(" "),o("tr",[o("td",[t._v("Tokens transfered")]),t._v(" "),o("td",[t._v("Details about the tokens(both "),o("code",[t._v("to")]),t._v(" and "),o("code",[t._v("from")]),t._v(" addresses) involved in the transactions, it includes, details like the assets, balance in the wallet address, and token address.")])]),t._v(" "),o("tr",[o("td",[t._v("Contract address")]),t._v(" "),o("td",[t._v("The rate of fees collected by the network.")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);