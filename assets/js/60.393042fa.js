(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{471:function(t,e,a){"use strict";a.r(e);var v=a(32),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"交易"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交易"}},[t._v("#")]),t._v(" 交易")]),t._v(" "),a("p",[t._v("以太坊的交易是由外部拥有的账户（由用户而非代码拥有的账户）加密签署的指令。这些指令被存储在区块链中，并添加到一个区块中。\n当一个交易启动时，以太坊虚拟机（EVM）的状态会发生变化。一个交易可以是任何东西，如发送以太币到另一个账户或者调用智能合约的功能。")]),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("p",[t._v("我们建议您先阅读 "),a("a",{attrs:{href:"https://ethereum.org/en/developers/docs/accounts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("accounts"),a("OutboundLink")],1),t._v(" 以理解本页内容。")]),t._v(" "),a("h2",{attrs:{id:"交易是如何进行的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交易是如何进行的"}},[t._v("#")]),t._v(" 交易是如何进行的")]),t._v(" "),a("p",[t._v("当用户在以太坊上发起交易时，会创建一些特定的数据:")]),t._v(" "),a("ul",[a("li",[t._v("Receiver（接收者）：收件人是账户接收交易的地址。接收方可以是合约账户，也可以是外部拥有的账户。每笔交易都针对特定的收件人。")]),t._v(" "),a("li",[t._v("Nonce（随机数）: 根据账户的计数器显示最近的交易，它保持着对交易数量的跟踪。区块链交易使用 transaction nonce 来确保交易以正确的顺序完成。")]),t._v(" "),a("li",[t._v("Gas Price（Gas 价格）：大多数交易都需要向交易方支付一定的费用。这笔费用是按每单位 gas 计算的。这个单位是 Wei，一个非常小的以太币单位。")]),t._v(" "),a("li",[t._v("Gas Limit（Gas 限制）： 交易者指定交易中使用的 gas 单位数量。这是可消耗的 gas 总量。")]),t._v(" "),a("li",[t._v("Value（价值）: 发送方账户希望发送给接收方的 wei 或以太币的数量由 value 表示。")]),t._v(" "),a("li",[t._v("Data（数据）: 如果交易接收者是一个智能合约，数据包含了合约功能的执行信息。这包括不同长度的数据。")]),t._v(" "),a("li",[t._v("Signature（签名）: 签名表明谁发送了通信。当一个外部拥有的账户用其私钥确认并签署交易时，签名就产生了。")])]),t._v(" "),a("h3",{attrs:{id:"交易类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交易类型"}},[t._v("#")]),t._v(" 交易类型")]),t._v(" "),a("ul",[a("li",[t._v("简单转账或资产转账:这是指以以太币形式从一个账户到另一个账户的常规代币转账。")])]),t._v(" "),a("p",[t._v("要部署合约，用户需调用ContractDeployer的"),a("code",[t._v("create")]),t._v("函数，并提供要发布的合约的哈希值以及构造函数参数。合约字节码本身在 EIP712 交易的 factory_deps 字段中提供。如果该合约是一个工厂（即它可以部署其他合约），那么这些合约的字节码也应该包括在 factory_deps 中。")]),t._v(" "),a("ul",[a("li",[t._v("合约部署交易：zkSync 上的合约部署与以太坊有很大不同。\n"),a("ul",[a("li",[t._v("以太坊：当用户向零地址"),a("code",[t._v("(0x000...000)")]),t._v("发送交易时，交易的 "),a("code",[t._v("data")]),t._v(" 字段等于连接构造函数参数的合约字节码，就会触发合约部署。")]),t._v(" "),a("li",[t._v("zkSync: 要在 zkSync 上部署一个合约，用户需调用 "),a("RouterLink",{attrs:{to:"/dev/developer-guides/contracts/system-contracts.html#contractdeployer"}},[t._v("ContractDeployer")]),t._v(" 的 "),a("code",[t._v("create")]),t._v(" 函数，并提供要发布的合约的哈希值，以及构造函数参数。\n合约的字节码本身是在 EIP712 交易的 "),a("code",[t._v("factory_deps")]),t._v(" 字段中提供的。\n如果该合约是一个工厂（即它可以部署其他合约），那么这些合约的字节码也应该包括在 factory_deps 中。\n阅读更多关于"),a("RouterLink",{attrs:{to:"/dev/developer-guides/contracts/contracts.html"}},[t._v("合约部署")]),t._v("的信息。")],1)])])]),t._v(" "),a("p",[t._v("::: 小提示")]),t._v(" "),a("p",[t._v("zkSync 支持 以太坊的 EIP2718 之前的交易、EIP1559 以及 EIP712 交易。这些类型的交易可用于访问 zkSync 的特定功能，如账户抽象。此外，智能合约只能用这种交易来部署。\n使用 zkSync 的 SDK 不需要了解交易格式，但如果您有兴趣，可以在"),a("RouterLink",{attrs:{to:"/api/api.html#eip712"}},[t._v("此处")]),t._v("了解更多信息。")],1),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h3",{attrs:{id:"什么时候交易被视为最终交易"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么时候交易被视为最终交易"}},[t._v("#")]),t._v(" 什么时候交易被视为最终交易？")]),t._v(" "),a("p",[a("strong",[t._v("交易最终性")]),t._v("是指在区块链网络背景下，交易不能被逆转、改变或变异的承诺。")]),t._v(" "),a("p",[t._v("在以太坊上的最终结果，就像在比特币中一样，是概率性的，这意味着交易执行后通过的区块越多，这个交易被推翻的可能性就越小。")]),t._v(" "),a("p",[t._v("一旦一个区块在 zkRollup 中被填写和压缩，其状态就会被提交到以太坊主链上。然后开始证明阶段，为每个区块交易构建一个 SNARK 有效性证明。一旦完成，SNARK 被发送到 L1 智能合约上进行验证，交易状态在验证后成为最终状态。")]),t._v(" "),a("p",[t._v("从 zkSync 的角度来看，当交易（SNARK 验证）被 L1 执行时，"),a("em",[t._v("finality")]),t._v(" 被触发。在这一点上，保证与同一 L1 区块内的任何其他 L1 交易相同；在初始区块被处理后，发出的 L1 区块越多，这个交易被推翻的可能性就越小。")]),t._v(" "),a("p",[t._v("当用户发送一个交易时，zkSync 会等待整个区块被填满，这意味着完成时间可能更长，这取决于通过 zkSync 发送的交易的数量。最终时间将随着吞吐量的增加而减少。")]),t._v(" "),a("h2",{attrs:{id:"什么是运营者-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是运营者-operator"}},[t._v("#")]),t._v(" 什么是运营者（Operator）？")]),t._v(" "),a("p",[a("strong",[t._v("运营者")]),t._v("是执行 ZKrollup 基本功能的参与者。他们负责生产区块，打包交易，进行计算，并将数据提交给以太坊主链进行验证。")])])}),[],!1,null,null,null);e.default=_.exports}}]);