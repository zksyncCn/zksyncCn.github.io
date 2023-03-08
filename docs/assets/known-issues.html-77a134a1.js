import{_ as d,W as c,X as s,Z as a,$ as e,a0 as t,a2 as o,a1 as h,Y as r,D as i}from"./framework-674379d2.js";const l={},p=r('<h1 id="已知的问题" tabindex="-1"><a class="header-anchor" href="#已知的问题" aria-hidden="true">#</a> 已知的问题</h1><p>zkSync Era目前处于阿尔法阶段，因此一些你习惯的东西可能无法工作。请记住，该系统仍在持续开发中。</p><h2 id="为什么metamask的原生合约互动不工作" tabindex="-1"><a class="header-anchor" href="#为什么metamask的原生合约互动不工作" aria-hidden="true">#</a> 为什么Metamask的原生合约互动不工作？</h2><p>目前不可能通过Metamask与zkSync智能合约进行EIP-1559交易的互动。</p><p>**解决方案。**明确指定<code>{类型。0 }</code>在交易覆盖中，使用Ethereum传统交易。</p><h2 id="为什么我的钱包没有资金-我的合约消失了" tabindex="-1"><a class="header-anchor" href="#为什么我的钱包没有资金-我的合约消失了" aria-hidden="true">#</a> 为什么我的钱包没有资金，我的合约消失了？</h2><p>我们被期望不断地更新我们的测试网，所以不时地需要进行重新创世。这将导致整个状态重置，所有部署的合约将不复存在。</p><p><strong>我们会在重新创世事件发生之前进行沟通！</strong>。</p><h2 id="为什么wait-会在l1-l2交易中卡住" tabindex="-1"><a class="header-anchor" href="#为什么wait-会在l1-l2交易中卡住" aria-hidden="true">#</a> 为什么<code>wait()</code>会在L1-&gt;L2交易中卡住？</h2><p>如果<code>wait()</code>花费的时间比预期的长，很可能是交易失败了。</p><h2 id="为什么会出现-非预期的json输入结束-的编译错误" tabindex="-1"><a class="header-anchor" href="#为什么会出现-非预期的json输入结束-的编译错误" aria-hidden="true">#</a> 为什么会出现`非预期的JSON输入结束&#39;的编译错误?</h2><p>这是一个通常在编译大型智能合约代码库时抛出的错误。</p><p>如果你遇到这样的错误，请做以下处理。</p>',13),u=a("li",null,[e("更新"),a("code",null,"@matterlabs/hardhat-zksync-solc"),e("库，之后尝试重新编译智能合约。")],-1),m=a("li",null,"如果同样的错误持续存在，请向我们的团队报告这个问题。我们将尽最大努力帮助你。",-1),_=r('<h2 id="为什么我不能用原始字节码使用create-create2操作码" tabindex="-1"><a class="header-anchor" href="#为什么我不能用原始字节码使用create-create2操作码" aria-hidden="true">#</a> 为什么我不能用原始字节码使用CREATE/CREATE2操作码？</h2><p>zkSync不支持用原始字节码使用CREATE/CREATE2。我们强烈建议使用<code>new</code>操作符来避免任何问题。</p><h2 id="为什么hardhat的console-log不工作" tabindex="-1"><a class="header-anchor" href="#为什么hardhat的console-log不工作" aria-hidden="true">#</a> 为什么Hardhat的<code>console.log</code>不工作？</h2><p>zkSync不支持Nomic Foundation的<code>console.log</code>合约。由于不同的地址推导规则，即使部署后，<code>console.log</code>库的地址很可能与Ethereum上的不同。</p>',4);function k(f,E){const n=i("RouterLink");return c(),s("div",null,[p,a("ul",null,[u,a("li",null,[e('如果在重新编译后，你得到了 "未找到库 "的错误，那么你应该按照'),t(n,{to:"/dev/troubleshooting/.../.../api/hardhat/compiling-libraries.html"},{default:o(()=>[e("这里")]),_:1}),e("的指示来做。")]),a("li",null,[e('如果在重新编译后，你得到了 "Library not found "的错误，那么你应该按照'),t(n,{to:"/dev/troubleshooting/.../.../api/"},{default:o(()=>[e("here")]),_:1}),e("中的说明进行。")]),m]),_,h(`-

## Metamask本机传输不工作

目前不可能在Metamask接口内转移ERC-20代币。

**解决方案。**目前，在zkSync内部的转移应该通过[zkSync Wallet](https://portal.zksync.io) dApp完成。


##用整个代币余额转账失败

如果你试图转移一个代币的全部余额，这也是你支付费用的代币，交易会失败。原因是我们在设置转账金额之前没有扣除费用。

**解决方案。**留出一小部分金额来支付费用。

## 发送交易前的错误

与上面类似，在应该从代币金额中扣除费用的情况下，如果 estimate_gas 返回一个错误，你可能会得到一个错误。

**解决方案。**如上所述，确保留出一小笔钱来支付费用。

##我的合约不能编译，由于 "循环依赖 "的错误

不幸的是，有些合约在编译我们的硬帽插件时遇到了麻烦。这是由于合约导入了外部依赖性。这发生在少数项目中。我们目前正在努力解决这个问题。

## 我的交易没有显示在区块资源管理器上

目前，区块资源管理器没有对最新产生的区块进行索引。只要一个新的区块没有在包含你的交易的区块之后产生，它就不会出现在
在区块资源管理器上。

**解决方案。**你可以进行简单的转账（或任何其他交易），使系统产生一个新的区块。然后之前的区块会出现，包括你的交易。
注意，如果你知道tx id，你可以使用我们的钱包来查看它的状态。
-`)])}const b=d(l,[["render",k],["__file","known-issues.html.vue"]]);export{b as default};
