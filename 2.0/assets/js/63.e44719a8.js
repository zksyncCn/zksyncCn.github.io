(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{478:function(v,_,t){"use strict";t.r(_);var l=t(32),r=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"zksync-基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zksync-基础知识"}},[v._v("#")]),v._v(" zkSync 基础知识")]),v._v(" "),t("h2",{attrs:{id:"前提条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[v._v("#")]),v._v(" 前提条件")]),v._v(" "),t("p",[v._v("如果您不熟悉 rollups，那么在学习 zkSync 之前，您应该学习 "),t("RouterLink",{attrs:{to:"/dev/fundamentals/rollups.html"}},[v._v("rollups 基础知识")]),v._v("并阅读关于 ZK rollups 和 Optimistic rollups 的相关内容。")],1),v._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),t("p",[t("strong",[v._v("zkSync")]),v._v(" 是一个 "),t("RouterLink",{attrs:{to:"/dev/fundamentals/rollups.html#what-are-zk-rollups"}},[v._v("ZK rollup")]),v._v("，一种使用加密有效性证明的无信任协议，在以太坊上提供可扩容和低成本交易。\n在 zkSync 中，计算是在链下执行的，大多数数据也存储在链下。由于所有交易都在以太坊主链上进行证明，因此用户享有与以太坊相同的安全级别。")],1),v._v(" "),t("p",[v._v("zkSync 2.0 看起来和感觉上都像以太坊，但费用更低。就像在以太坊上一样，智能合约是用 Solidity/Vyper 编写的，并且可以使用与其他 EVM 兼容链相同的客户端进行调用。")]),v._v(" "),t("p",[v._v("您无需在使用前单独注册一个私钥；zkSync 支持现有的以太坊钱包。\n目前，zkSync 仅由 zkSync 团队的服务器运营，因此是中心化的。但是，它很快将过渡到一个去中心化的系统。")]),v._v(" "),t("h2",{attrs:{id:"zksync-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zksync-概述"}},[v._v("#")]),v._v(" zkSync 概述")]),v._v(" "),t("p",[v._v("一般的 rollup 工作流程如下：")]),v._v(" "),t("ul",[t("li",[v._v("用户可以相互接收、存入和转移资产。")]),v._v(" "),t("li",[v._v("用户可以将自己控制的资产提取到 L1 地址。")])]),v._v(" "),t("p",[v._v("Rollup 操作需要运营者的协助，运营者将交易打包到一起，计算正确状态转换的零知识证明，并通过与 rollup 合约交互来影响状态转换。\n要理解这种设计，我们需要研究 zkSync rollup 的交易是如何工作的。")]),v._v(" "),t("p",[v._v("zkSync 操作分为 rollup 交易（由 rollup 账户在 rollup 内部发起）和优先级操作（由以太坊账户在主链上发起）。")]),v._v(" "),t("p",[v._v("zkSync rollup 生命周期如下：")]),v._v(" "),t("ul",[t("li",[v._v("用户创建交易或优先级操作。")]),v._v(" "),t("li",[v._v("处理完这个请求后，运营者创建一个打包操作并将其添加到区块中。")]),v._v(" "),t("li",[v._v("一旦区块结束，运营者会将其作为区块承诺提交给 zkSync 智能合约。智能合约会检查一些打包操作的部分逻辑。")]),v._v(" "),t("li",[v._v("区块证明提交给 zkSync 智能合约作为区块验证。如果验证成功，则新状态被视为最终状态。")])]),v._v(" "),t("p",[v._v("此外，在 zkSync 上，每个 L2 区块都将经过以下四个阶段，直到最终完成。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Pending")]),v._v(": 该交易已被运营者接收，但尚未被处理。")]),v._v(" "),t("li",[t("code",[v._v("Processed")]),v._v(": 该交易由运营者处理，并被确认包含在下一个区块中。")]),v._v(" "),t("li",[t("code",[v._v("Committed")]),v._v(": 表示该区块的交易数据已经发布到以太坊上。它并不能证明它已经以有效的方式执行，但它确保了区块数据的可用性。")]),v._v(" "),t("li",[t("code",[v._v("Finalized")]),v._v(": 这表明交易的 SNARK 有效性证明已被提交并由智能合约验证。在这一步之后，该交易被认为是最终交易。")])]),v._v(" "),t("p",[v._v("目前，交易从 "),t("code",[v._v("Processed")]),v._v(" 到 "),t("code",[v._v("Finalized")]),v._v(" 的典型时间是几个小时。\n请注意，为了方便开发者，我们通常将 "),t("code",[v._v("Processed")]),v._v(" 和 "),t("code",[v._v("Committed")]),v._v(" 状态作为一个单独的阶段，统称为 "),t("code",[v._v("Committed")]),v._v("，因为从 UX/DexEx 的角度来看，它们没有任何区别。")]),v._v(" "),t("h3",{attrs:{id:"zksync-的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zksync-的状态"}},[v._v("#")]),v._v(" zkSync 的状态")]),v._v(" "),t("p",[v._v("zkSync 2.0 的当前版本解决了以太坊上大多数应用程序的需求，并且计划很快发布更多的功能，zkSync 2.0 将为开发人员提供一个设计空间，来试验以太坊上目前不可能实现的应用程序。在这个版本中，我们支持以下特性:")]),v._v(" "),t("ul",[t("li",[v._v("原生支持 ECDSA 签名：与第一版 zkSync 和大部分 ZK rollup 不同，注册用户私钥不需要特殊操作。任何账户都可以在 L2 中使用与 L1 相同的私钥进行管理。")]),v._v(" "),t("li",[v._v("支持 Solidity 0.8.x：几乎不需要任何更改即可部署您现有的代码库。")]),v._v(" "),t("li",[v._v("除了少数例外，我们的 Web3 API 与以太坊完全兼容。这将允许与现有索引器、浏览器等进行无缝集成。")]),v._v(" "),t("li",[v._v("支持以太坊密码学原语: zkSync 通过预编译原生支持 "),t("code",[v._v("keccak256")]),v._v("、"),t("code",[v._v("sha256")]),v._v(" 以及 "),t("code",[v._v("ecrecover")]),v._v("。")]),v._v(" "),t("li",[v._v("Hardhat 插件：可以在 zkSync 上轻松测试和开发智能合约。")]),v._v(" "),t("li",[v._v("L1 → L2 智能合约消息传递：允许开发者将数据从以太坊传递给 zkSync 的智能合约，提供运行各种智能合约所需的信息。")])]),v._v(" "),t("p",[v._v("我们希望在未来的升级中发布的当前测试网中没有包括一些功能:")]),v._v(" "),t("ul",[t("li",[v._v("zkPorter: 作为最大和最重要的功能之一，zkPorter 将允许用户选择 zkRollup 或者 zkPorter 账户。zkRollup 特点是最高的安全性和与以太坊相比减少 20 倍的费用， zkPorter 特点是在不同的安全模式（比侧链高得多）下，交易费用稳定，只有几分钱。zkPorter 和 zkRollup 账户都可以在内部无缝交互。")])]),v._v(" "),t("h2",{attrs:{id:"zksync-与其他-l2-相比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zksync-与其他-l2-相比"}},[v._v("#")]),v._v(" zkSync 与其他 L2 相比")]),v._v(" "),t("p",[v._v("在现有的 L2 扩容解决方案中，zkSync 在安全性和可用性方面"),t("a",{attrs:{href:"https://blog.matter-labs.io/evaluating-ethereum-l2-scaling-solutions-a-comparison-framework-b6b2f410f955",target:"_blank",rel:"noopener noreferrer"}},[v._v("脱颖而出"),t("OutboundLink")],1),v._v(" 。由于结合了尖端密码学和链上数据可用性，ZK rollups（zkSync 的核心网络）是唯一不需要任何操作活动来保证资金安全的 L2 扩容解决方案。例如，用户可以脱机后重连，在没有 ZK rollup 验证者的情况下仍然能够安全地提取资产。")]),v._v(" "),t("h2",{attrs:{id:"zksync-的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zksync-的特点"}},[v._v("#")]),v._v(" zkSync 的特点")]),v._v(" "),t("ul",[t("li",[v._v("ETH 和 ERC20 的代币转移，即时确认，并在 L1 上快速完成。")]),v._v(" "),t("li",[v._v("交易费用对于 ERC20 代币和 ETH 转账的主网成本来说是极低的。")]),v._v(" "),t("li",[v._v("可以方便地用正在转移的代币向现有以太坊地址(包括智能合约)支付。")])]),v._v(" "),t("h2",{attrs:{id:"zksync-2-0-的亮点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zksync-2-0-的亮点"}},[v._v("#")]),v._v(" zkSync 2.0 的亮点")]),v._v(" "),t("ul",[t("li",[v._v("类似于主网的安全性，对第三方没有任何依赖。")]),v._v(" "),t("li",[v._v("无需许可的 EVM 兼容智能合约。")]),v._v(" "),t("li",[v._v("标准 Web3 API。")]),v._v(" "),t("li",[v._v("保留关键的 EVM 特性，例如智能合约可组合性。")]),v._v(" "),t("li",[v._v("引入新的特性，例如账户抽象。")])]),v._v(" "),t("h2",{attrs:{id:"如何开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何开始"}},[v._v("#")]),v._v(" 如何开始？")]),v._v(" "),t("ul",[t("li",[v._v("首先在"),t("RouterLink",{attrs:{to:"/dev/developer-guides/hello-world.html"}},[v._v("快速入门")]),v._v("构建一个 dApp。")],1),v._v(" "),t("li",[v._v("在"),t("RouterLink",{attrs:{to:"/dev/troubleshooting/important-links.html"}},[v._v("重要链接")]),v._v("页面上查看有关 RPC 节点、钱包和区块浏览器的信息。")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);