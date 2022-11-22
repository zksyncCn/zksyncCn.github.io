(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{469:function(t,v,_){"use strict";_.r(v);var a=_(32),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"区块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区块"}},[t._v("#")]),t._v(" 区块")]),t._v(" "),_("p",[t._v("一个区块是一个有序的交易列表。每个块（创世块除外）都指向它扩展的前一个区块，从而创建一个区块链。")]),t._v(" "),_("h2",{attrs:{id:"zksync-2-0-中的区块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zksync-2-0-中的区块"}},[t._v("#")]),t._v(" zkSync 2.0 中的区块")]),t._v(" "),_("p",[t._v("在 zkSync 中有两个“区块”的概念：L2 区块和 L1 rollup 区块。")]),t._v(" "),_("p",[t._v("L2 区块，或简称为“区块”，只是在 zkSync 网络上创建的区块。它们不包含在以太坊链中。一个 L1 rollup 区块，我们称之为“批次（batch）”，是一组连续的（L2）区块，它包含了所有的交易，而且顺序相同，从该批次的第一个区块到该批次的最后一个区块。")]),t._v(" "),_("p",[t._v("L1 批次，顾名思义，是被提交到以太坊的交易。有这些不同概念的主要原因是，在一个批次中我们希望包含许多交易并将其打包，以最小的数量提交到以太坊，以使与 L1 交互的成本分摊到许多交易中。")]),t._v(" "),_("h2",{attrs:{id:"区块编号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区块编号"}},[t._v("#")]),t._v(" 区块编号")]),t._v(" "),_("p",[t._v("在 zkSync API 中访问区块编号类似于在以太坊上的做法。例如，"),_("code",[t._v("eth_blockNumber")]),t._v(" 返回最新的 L2 区块的编号。而 "),_("code",[t._v("eth_getBlockByNumber")]),t._v("，会给定一个区块编号，返回所请求的区块的信息。")]),t._v(" "),_("p",[t._v("对于 L1 批次，要获取最新的批次号，请使用 "),_("code",[t._v("zks_L1BatchNumber")]),t._v(" zkSync API method 模块。此外，通过查询一个区块，您可以看到包含该区块的批次的批号。在交易凭证中，"),_("code",[t._v("l1BatchNumber")]),t._v(" 是包含交易的批次编号。"),_("code",[t._v("l1BatchTxIndex")]),t._v(" 返回所有批量交易的位置。")]),t._v(" "),_("h2",{attrs:{id:"区块处理时间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区块处理时间"}},[t._v("#")]),t._v(" 区块处理时间")]),t._v(" "),_("p",[t._v("交易由运营商及时处理并添加到区块中，然后立即生成区块。一旦 zkSync 完全去中心化，出块时间将花费几秒钟，因为涉及的对象需要达成共识。")]),t._v(" "),_("p",[t._v("一般来说，批处理时间取决于系统的活跃度--系统越活跃，我们 "),_("em",[t._v("压缩(seal)")]),t._v(" 批处理交易的速度就越快。\n压缩一个批次有几个标准，我们在此不作详细解释，因为系统仍在测试中，这些标准可能会改变。\n通常，在以下情况下，批次将被压缩：")]),t._v(" "),_("ol",[_("li",[t._v('批次 "容量 "达到上限了。容量包括所使用的 L1 的 gas、L2 ergs 的消耗和其他一些参数。')]),t._v(" "),_("li",[t._v("已超时。")])]),t._v(" "),_("p",[t._v("提交交易后，用户可以按照"),_("RouterLink",{attrs:{to:"/dev/fundamentals/zkSync.html#zksync-overview"}},[t._v("这里")]),t._v("的说明检查他们的交易在进程中的位置。")],1),t._v(" "),_("h3",{attrs:{id:"空的区块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#空的区块"}},[t._v("#")]),t._v(" 空的区块")]),t._v(" "),_("p",[t._v("::: 警告")]),t._v(" "),_("p",[t._v("目前，我们的区块浏览器上显示了空区块，请注意，这不是区块浏览器的问题，而是设计使然。\n尽管这可能是一个短期的现实，但考虑这个设计背后的基本原理是很重要的。")]),t._v(" "),_("p",[t._v(":::")]),t._v(" "),_("p",[t._v("每个 L1 批次（包括几个 L2 区块）都在一个虚拟机（VM）中执行。虚拟机一个一个地执行交易，然后执行一些与最后一笔交易无关的代码，这些代码与整个批次交易有关。目前，从费用中收取的 $ETH 从 bootloader 的正式地址转移到区块矿工地址。问题是这种转移会触发一个事件（就像其他的转移一样），因此，我们把这个事件包含在一个 L2 区块中，以便通过 API 访问它。")]),t._v(" "),_("p",[t._v("我们可以将它添加到 L1 批次的最新 L2 区块中，但想象一下以下场景：如果某个 L2 区块已关闭，但其 L1 批次未关闭，并且该节点在一段时间内没有收到任何新交易，那么 L1 批次必须在超时前关闭。如果我们将事件添加到最近关闭的区块中，它将修改区块，从而导致某种重组。\n为避免这种情况，我们构建了一个包含唯一事件的虚构区块。")]),t._v(" "),_("h3",{attrs:{id:"哈希值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哈希值"}},[t._v("#")]),t._v(" 哈希值")]),t._v(" "),_("p",[t._v('zkSync 中的区块哈希值是不可逆的，由以下公式得出："keccak256(l2_block_number)"。\n之所以有一个确定的区块哈希值，是因为这些哈希值是不可证明的（记住，L2 区块没有提交给 L1）。\n我们建议项目不要使用 L2 区块哈希值作为随机性的来源。')]),t._v(" "),_("h3",{attrs:{id:"区块属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区块属性"}},[t._v("#")]),t._v(" 区块属性")]),t._v(" "),_("ul",[_("li",[t._v("Timestamp（时间戳）：当前区块的创建时间，以秒为单位，返回 L1 批次的时间戳。")]),t._v(" "),_("li",[t._v("Block number（区块编号）：该区块的唯一序列号。")]),t._v(" "),_("li",[t._v("Gas limit（Gas 限制）：当前区块的 gas 限制，返回值为 "),_("code",[t._v("2^32-1")]),t._v("。")]),t._v(" "),_("li",[t._v("Coinbase：当前区块矿工地址，返回 "),_("RouterLink",{attrs:{to:"/dev/developer-guides/contracts/system-contracts.html#bootloader"}},[t._v("bootloader")]),t._v(" 地址。")],1),t._v(" "),_("li",[t._v("Difficulty（区块难度）：当前区块难度，返回值为 "),_("code",[t._v("2500000000000000")]),t._v("（zkSync 不使用工作量证明共识）。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);