import{_ as d,W as s,X as l,Z as e,$ as o,a0 as t,a2 as i,Y as n,D as c}from"./framework-674379d2.js";const h={},p=n('<h1 id="系统合同" tabindex="-1"><a class="header-anchor" href="#系统合同" aria-hidden="true">#</a> 系统合同</h1><p>为了使零知识电路尽可能的简单，并能进行简单的扩展，zkSync的一大块逻辑被移到了所谓的 &quot;系统合同 &quot;中--一组具有特殊权限和特殊目的的合同，例如，合同的部署，确保用户只为发布合同的calldata支付一次，等等。</p><p>系统合同的代码在经过彻底测试之前不会公开。本节将只为你提供在zkSync基础上构建的知识。</p><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><p>系统合同的地址和接口可以在[这里]（https://github.com/matter-labs/v2-testnet-contracts/blob/main/l2/system-contracts/Constants.sol）找到。</p><p>本节将描述一些最流行的系统合约的语义。</p><h2 id="contractdeployer" tabindex="-1"><a class="header-anchor" href="#contractdeployer" aria-hidden="true">#</a> ContractDeployer</h2>',7),_={href:"https://github.com/matter-labs/v2-testnet-contracts/blob/main/l2/system-contracts/interfaces/IContractDeployer.sol#L5",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,'这个合约是用来部署新的智能合约的。它的工作是确保每个部署的合约的字节码是已知的。这个合约还定义了衍生的 地址。每当一个合约被部署，它就会发出 "ContractDeployed "事件。',-1),L=e("p",null,"在未来，我们将添加一个关于如何直接与该合约互动的描述。",-1),m=e("h2",{id:"l1messenger",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#l1messenger","aria-hidden":"true"},"#"),o(" L1Messenger")],-1),f={href:"https://github.com/matter-labs/v2-testnet-contracts/blob/main/l2/system-contracts/interfaces/IL1Messenger.sol#L5",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,'该合约用于从zkSync向Ethereum发送消息。每发送一条消息，就会发出 "L1MessageSent "事件。',-1),b=e("h2",{id:"nonceholder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nonceholder","aria-hidden":"true"},"#"),o(" NonceHolder")],-1),k={href:"https://github.com/matter-labs/v2-testnet-contracts/blob/main/l2/system-contracts/interfaces/INonceHolder.sol#L13",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"引导器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#引导器","aria-hidden":"true"},"#"),o(" 引导器")],-1),x={href:"https://github.com/matter-labs/v2-testnet-contracts/blob/main/l2/system-contracts/Constants.sol#L26",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"msg.sender",-1),D=e("p",null,"现在，你不需要知道关于它的任何细节，但是当你使用账户抽象功能开发时，知道它的存在是很重要的。你总是可以假设引导者不是恶意的，它是协议的一部分。在未来，引导器的代码将被公开，对它的任何改变也意味着对协议的升级。",-1),S=e("h2",{id:"对一些系统合同的保护性访问",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#对一些系统合同的保护性访问","aria-hidden":"true"},"#"),o(" 对一些系统合同的保护性访问")],-1),v=e("p",null,[o("一些系统合约对账户的影响，在以太坊上可能是意料之外的。例如，在以太坊上，EOA唯一可以增加其nonce的方式是发送交易。而且，发送交易一次只能增加1个nonce。在zkSync上，nonce是通过"),e("a",{href:"#nonceholder"},"NonceHolder"),o("系统合约实现的，如果天真地实施，用户可以通过调用这个合约来增加他们的nonce。这就是为什么对nonce holder的大部分非视图方法的调用被限制为只能用一个特殊的`isSystem'标志来调用，以便与重要的系统合约的交互可以被账户的开发者有意识地管理。")],-1),T=e("a",{href:"#contractdeployer"},"ContractDeployer",-1),C={href:"https://github.com/matter-labs/v2-testnet-contracts/blob/main/l2/system-contracts/DefaultAccount.sol#L126",target:"_blank",rel:"noopener noreferrer"},A=n('<h2 id="l1智能合约" tabindex="-1"><a class="header-anchor" href="#l1智能合约" aria-hidden="true">#</a> L1智能合约</h2><h3 id="钻石" tabindex="-1"><a class="header-anchor" href="#钻石" aria-hidden="true">#</a> 钻石</h3><p>从技术上讲，这个L1智能合约充当了Ethereum（L1）和zkSync（L2）之间的连接器。 这个合约检查有效性证明和数据可用性，处理L2 &lt;-&gt; L1通信，最终完成L2状态转换，等等。</p><p>还有一些部署在L2上的重要合约，也可以执行称为_系统合约的逻辑。 使用L2 &lt;-&gt; L1通信可以同时影响L1和L2。</p><h3 id="diamondproxy" tabindex="-1"><a class="header-anchor" href="#diamondproxy" aria-hidden="true">#</a> DiamondProxy</h3>',5),z={href:"https://eips.ethereum.org/EIPS/eip-2535",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/mudgen/Diamond",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"因此，即使是升级系统也是一个独立的面，可以被替换。",-1),O=e("p",null,"与参考实现的区别之一是能够冻结对切面的访问。",-1),B=e("p",null,"每个面都有一个相关的参数，表明是否有可能冻结对该面的访问。",-1),M=e("p",null,'有权限的角色可以冻结**钻石（而不是特定的切面！），所有带有 "isFreezable "标记的切面都是不可访问的，直到治理者解冻钻石。',-1),R=e("h3",{id:"diamondinit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#diamondinit","aria-hidden":"true"},"#"),o(" DiamondInit")],-1),F=e("p",null,"这是一个单函数契约，实现了初始化钻石代理的逻辑。 它只在钻石构造器上被调用一次，并不作为一个面保存在钻石中。",-1),H={href:"https://eips.ethereum.org/EIPS/eip-1271",target:"_blank",rel:"noopener noreferrer"},P=n('<h3 id="diamondcutfacet" tabindex="-1"><a class="header-anchor" href="#diamondcutfacet" aria-hidden="true">#</a> DiamondCutFacet</h3><p>这些智能合约管理钻石代理的冻结/解冻和升级。 也就是说，该合约决不能被冻结。</p><p>目前，冻结和解冻被实现为访问控制功能。它完全由治理者控制，但以后可以改变。 治理者可以调用<code>emergencyFreezeDiamond</code>来冻结钻石，<code>unfreezeDiamond</code>来恢复它。</p><p><code>DiamondCutFacet</code>的另一个目的是升级切面。升级分为2-3个阶段。</p><ul><li><code>proposeDiamondCut</code> - 由总督提议升级。</li><li><code>approveEmergencyDiamondCutAsSecurityCouncilMember</code> - 由安全委员会批准升级。</li><li>`执行钻石切割提案&#39;--最终完成升级。</li></ul><p>升级本身由三个变量描述。</p><ul><li><code>facetCuts</code> - 一组对面的改变（增加新的面，移除面，和替换面）。</li><li>对 <code>(address _initAddress, bytes _calldata)</code>用于初始化升级，通过对<code>_initAddress</code>的委托调用和<code>_calldata</code>的输入。</li></ul><p>注意：<code>proposeDiamondCut</code> - 提交与升级相关的数据，但不执行。 当升级与<code>facetCuts</code>和<code>(地址_initAddress, 字节_calldata)</code>关联时，升级将被提交到 <code>facetCuts</code>和<code>_initAddress</code>。这样做的目的是给治理者留下一些自由，以便在提出和执行升级之间改变calldata。 在提出和执行升级之间改变calldata。</p><h3 id="gettersfacet" tabindex="-1"><a class="header-anchor" href="#gettersfacet" aria-hidden="true">#</a> GettersFacet</h3>',9),V=e("code",null,"view",-1),G=e("code",null,"pure",-1),q={href:"https://eips.ethereum.org/EIPS/eip-2535#diamond-loupe",target:"_blank",rel:"noopener noreferrer"},w=n('<h3 id="governancefacet" tabindex="-1"><a class="header-anchor" href="#governancefacet" aria-hidden="true">#</a> GovernanceFacet</h3><p>控制改变特权地址，如治理者和验证者或系统参数之一(L2 bootloader bytecode hash, verifier address, verifier parameters, etc)。</p><h3 id="信箱面" tabindex="-1"><a class="header-anchor" href="#信箱面" aria-hidden="true">#</a> 信箱面</h3><p>处理L2 &lt;-&gt; L1通信的面，其概述可以在[L1 / L2 Interoperability guide]（.../developer-guides/bridging/L1-l2-interop.md）中找到。</p><p>邮箱只关心从L2到L1的信息传输和其他方式，但不持有或转移任何资产（ETH、ERC20代币或NFT）。</p><p>L1-&gt;L2通信被实现为在L1上请求一个L2交易，并在L2上执行。这意味着用户可以调用L1合约上的函数，将有关交易的数据保存在一些队列中。后来，验证者可以在L2上处理这些交易，并在L1的优先级队列上将其标记为已处理。</p><p>目前，它只用于从L1向L2发送信息或实现多层协议，但计划将优先队列用于抗审查机制。L1-&gt;L2通信的相关函数：<code>requestL2Transaction</code>/<code>l2TransactionBaseCost</code>/<code>serializeL2Transaction</code>。</p><p><strong>注意</strong>。对于每个执行的事务L1-&gt;L2，系统程序必然会发送一个L2-&gt;L1的日志。</p><p>这种L2 -&gt; L1日志的语义总是。</p><ul><li>sender = BOOTLOADER_ADDRESS.</li><li>key = hash(L1ToL2Transaction)。</li><li>value = 处理事务的状态（1-成功&amp;0为失败）。</li><li>isService = true（只是一个常规值）。</li><li>l2ShardId = 0（意味着L1-&gt;L2交易是在一个卷积分片中处理的，其他分片还不能使用 反正其他分片还不可用）。</li><li>txNumberInBlock = 该区块中的交易数量。</li></ul><p>L2-&gt;L1通信，与L1-&gt;L2通信相反，只基于信息的传输，而不是在L1上的交易执行。</p><p>从L2端来看，有一个特殊的zkEVM操作码，在L2块中保存了<code>l2ToL1Log</code>。当发送L2块到L1时，验证器将发送所有<code>l2ToL1Logs</code>（见<code>ExecutorFacet</code>）。以后，用户既可以在L1上阅读他们的<code>l2ToL1logs</code>，又可以_证明他们发送了它。</p><p>从L1方面来看，对于每个L2块，都会计算出一个Merkle根，其叶子里有这样的日志。因此，用户可以为每个<code>l2ToL1Logs</code>提供Merkle证明。</p><p><em>NOTE</em>: <code>l2ToL1Log</code>结构由固定大小的字段组成! 正因为如此，从L2发送大量数据并证明它们是在L1上发送的，只用<code>l2ToL1log</code>就很不方便。为了发送一个可变长度的信息，我们使用这个技巧。</p><ul><li>其中一个系统合约接受一个任意长度的信息，并发送一个固定长度的信息，参数为<code>senderAddress == this</code>，<code>marker == true</code>，<code>key == msg.sender</code>，<code>value == keccak256(message)</code>。</li><li>L1上的合约接受所有发送的消息，如果消息来自于这个系统合约，它要求 `value&#39;的预象被提供。</li></ul><h3 id="executorfacet" tabindex="-1"><a class="header-anchor" href="#executorfacet" aria-hidden="true">#</a> ExecutorFacet</h3><p>一个接受L2块的合约，强制执行数据的可用性并检查zk-proof的有效性。</p><p>状态转换分为三个阶段。</p><ul><li><code>commitBlocks</code> - 检查L2块的时间戳，处理L2日志，为一个块保存数据，并为zk-proof准备数据。</li><li><code>proveBlocks</code> - 验证zk-proof。</li><li><code>executeBlocks</code> - 最终确定状态，标记L1 -&gt; L2通信处理，并保存Merkle树与L2日志。</li></ul><p>当一个块被提交时，我们处理L2 -&gt; L1日志。下面是预计在那里的不变量。</p><ul><li>只有一个来自<code>L2_SYSTEM_CONTEXT_ADDRESS</code>的L2 -&gt; L1日志，<code>key == l2BlockTimestamp</code>和<code>value == l2BlockHash</code>。</li><li>几个（或没有）来自<code>L2_KNOWN_CODE_STORAGE_ADDRESS</code>的日志，<code>key == bytecodeHash</code>，其中bytecode被标记为已知工厂依赖。</li><li>几个（或没有）来自<code>L2_BOOTLOADER_ADDRESS</code>的日志，<code>key == canonicalTxHash</code>，其中<code>canonicalTxHash</code>是已处理的L1-&gt;L2事务的哈希。</li><li>几个（或没有）来自<code>L2_TO_L1_MESSENGER</code>的日志，<code>key == hashedMessage</code>，其中<code>hashedMessage</code>是一个从L2发送的任意长度的信息的哈希。</li><li>几个（或没有）来自其他地址的任意参数的日志。</li></ul>',21);function W(X,Y){const a=c("ExternalLinkIcon"),r=c("RouterLink");return s(),l("div",null,[p,e("p",null,[e("a",_,[o("接口"),t(a)])]),u,L,m,e("p",null,[e("a",f,[o("接口"),t(a)])]),g,b,e("p",null,[e("a",k,[o("接口"),t(a)])]),e("p",null,[o("该合约存储账户非对称性。为了提高效率（"),t(r,{to:"/dev/developer-guides/.../building-on-zksync/contracts/contract-deployment.html#differences-in-create-behaviour"},{default:i(()=>[o("tx nonce和deployment nonce")]),_:1}),o("被存储在一个地方），也是为了方便操作者。")]),y,e("p",null,[o("为了提高可扩展性和降低开销，协议的某些部分（例如账户抽象规则）被转移到一个叫做_bootloader_的短暂合约中。我们称其为短暂的，因为从形式上看，它从未被部署，也不能被调用，但它有一个正式的"),e("a",x,[o("地址"),t(a)]),o("，当它调用其他合约时，在"),E,o("上使用。")]),D,S,v,e("p",null,[o("这同样适用于"),T,o("系统合约。这意味着，例如，你需要明确地允许你的用户部署合约，就像在DefaultAccount的"),e("a",C,[o("实现"),t(a)]),o("中那样。")]),A,e("p",null,[o("该合同使用"),e("a",z,[o("EIP-2535"),t(a)]),o("的钻石代理模式。 它是一个内部实现，受到"),e("a",I,[o("mudgen reference implementation"),t(a)]),o("的启发。 它没有外部函数，只有委托调用其中一个面（目标/实现契约）的回退。")]),N,O,B,M,R,F,e("p",null,[o("实现细节--函数返回一个魔法值，就像它在"),e("a",H,[o("EIP-1271"),t(a)]),o("中设计的那样，但魔法值的大小是32字节。")]),P,e("p",null,[o("独立的面，其唯一的功能是提供"),V,o("和"),G,o("方法。它还实现了"),e("a",q,[o("Diamond loupe"),t(a)]),o("，使管理分面更容易。")]),w])}const Z=d(h,[["render",W],["__file","system-contracts.html.vue"]]);export{Z as default};
