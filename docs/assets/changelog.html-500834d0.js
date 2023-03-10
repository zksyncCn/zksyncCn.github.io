import{_ as s,W as r,X as n,Z as e,$ as o,a0 as c,a2 as t,Y as l,D as i}from"./framework-674379d2.js";const h={},u=e("h1",{id:"更改日志",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更改日志","aria-hidden":"true"},"#"),o(" 更改日志")],-1),_=e("h2",{id:"hardhat插件更新-2023年2月24日-。",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hardhat插件更新-2023年2月24日-。","aria-hidden":"true"},"#"),o(" Hardhat插件更新（2023年2月24日）。")],-1),p=e("p",null,"以下是已经发布的Hardhat插件。",-1),k=e("code",null,"hardhat-zksync-verify",-1),f=e("code",null,"0.1.2",-1),y={href:"https://era.zksync.io/docs/api/hardhat/hardhat-zksync-verify.html#verification-status-check",target:"_blank",rel:"noopener noreferrer"},b=l("<li><code>hardhat-zksync-deploy</code>版本<code>0.6.2</code>：与最新版本的<code>zksync-web3</code>集成。</li><li><code>hardhat-zksync-chai-matchers</code>版本<code>0.1.1</code>：与最新版本的<code>zksync-web3</code>集成。</li>",2),g=l('<h3 id="如何更新你的项目" tabindex="-1"><a class="header-anchor" href="#如何更新你的项目" aria-hidden="true">#</a> 如何更新你的项目</h3><p>在你项目的<code>package.json</code>文件中更新以下版本。</p><ul><li>更新<code>@matterlabs/hardhat-zksync-verify</code>至<code>0.1.2</code>。</li><li>更新<code>@matterlabs/hardhat-zksync-deploy</code>到<code>0.6.2</code>。</li><li>更新 <code>@matterlabs/hardhat-zksync-chai-matchers</code> 到 <code>0.1.1</code>。</li></ul><h2 id="编译器和本地设置更新-2023年2月20日" tabindex="-1"><a class="header-anchor" href="#编译器和本地设置更新-2023年2月20日" aria-hidden="true">#</a> 编译器和本地设置更新（2023年2月20日）</h2><p>版本<code>1.3.5</code>的<code>zksolc</code>已经发布，本地设置的zksync docker镜像已经更新。详细内容。</p><ul><li><strong>编译器：</strong><ul><li>增加了对Solidity <code>0.8.18</code>的支持。</li><li>修复了一个破损的优化标志，增加了编译合约的字节码大小。</li><li>修复了一个将ERC20<code>transfer</code>调用检测为ETH<code>transfer</code>并产生一个编译错误的错误。</li><li>检测智能合约中的<code>transfer&#39;和</code>send&#39;方法现在会返回一个警告信息（类似于<code>v1.3.1</code>）。新的警告信息提醒开发者，使用这些方法转移ETH可能会导致问题，并建议用<code>payable(address).call[value: &lt;X&gt;](&quot;&quot;)</code>取代它们。</li><li><code>transfer</code>可以用来转移其他代币（如ERC20）而没有任何问题，尽管这可能仍然被编译器强调。</li></ul></li><li><strong>本地设置docker镜像：</strong><ul><li>改进了估计气体请求时返回的zksync节点错误信息。</li></ul></li></ul><h3 id="如何更新你的项目-1" tabindex="-1"><a class="header-anchor" href="#如何更新你的项目-1" aria-hidden="true">#</a> 如何更新你的项目</h3><ul><li>将<code>hardhat.config.ts</code>文件中的编译器版本更新为<code>1.3.5</code>。</li><li>重新编译合约。</li><li>用<code>docker-compose pull</code>更新本地设置的docker镜像，并通过运行<code>./clear.sh</code>脚本重新启动其状态。</li></ul><h2 id="系统更新-2023年2月10日" tabindex="-1"><a class="header-anchor" href="#系统更新-2023年2月10日" aria-hidden="true">#</a> 系统更新(2023年2月10日)</h2><p>小规模更新，简化了收费模式以减少开销，并修复了一些错误。它要求将<code>zksync-web3</code>软件包更新到<code>v0.13.1</code>。</p><h3 id="如何更新你的项目-2" tabindex="-1"><a class="header-anchor" href="#如何更新你的项目-2" aria-hidden="true">#</a> 如何更新你的项目</h3><ul><li>更新<code>zksync-web3</code>到<code>v0.13.1</code>。</li><li>合同接口和API没有变化，所以不需要修改代码。</li><li>不使用<code>zksync-web3</code>而依靠<code>eth_signTypedData</code>来签署交易的项目，需要在交易覆盖中手动加入固定的<code>gasPerPubdataByteLimit</code>为<code>50000</code>。</li></ul><h2 id="系统更新-v1-3-feb-8th-2023" tabindex="-1"><a class="header-anchor" href="#系统更新-v1-3-feb-8th-2023" aria-hidden="true">#</a> 系统更新 v1.3 (Feb 8th 2023)</h2><p>这次更新对系统进行了一些修改，为 &quot;Fair Onboarding Alpha &quot;里程碑做准备。这些修改包括。</p>',14),m=e("li",null,[e("code",null,"ergs"),o("已被替换为"),e("code",null,"gas"),o("，以使其更容易理解（毕竟，我们都是以太坊生态系统的一部分）。")],-1),v={href:"https://explorer.zksync.io/",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,"帐户抽象和Paymaster接口中的更新。",-1),A=e("li",null,"L1和L2系统合同接口的变化。",-1),x=e("li",null,'在我们的SDK中，包含 "ergs "的方法和属性被重新命名为 "gas"，这是一个突破性的变化。',-1),I=e("li",null,"API错误信息现在遵循Geth格式（更多更新即将到来）。",-1),C=e("p",null,[e("strong",null,"这些更新是在系统再生之后进行的"),o("。")],-1),P=e("h3",{id:"如何更新你的项目-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何更新你的项目-3","aria-hidden":"true"},"#"),o(" 如何更新你的项目")],-1),T=e("p",null,"要更新你的项目，请遵循这些步骤。",-1),S=l("<li>更新你所有的项目依赖，同时继续使用<code>ethers v5.7.x</code>（因为<code>ethers v6.x</code>引入了额外的破坏性变化）。</li><li>删除 <code>artifacts-zk</code> 和 <code>cache-zk</code> 文件夹。</li><li>如果你使用本地设置来运行单元测试，用<code>docker-compose pull</code>更新docker镜像，并通过运行<code>./clear.sh</code>脚本重新启动本地设置状态。</li><li>用最新版本的二进制编译器（<code>v1.3.1</code>）重新编译你的项目。</li><li>更新<code>zksync-web3</code>到<code>0.13.x</code>。所有包含 &quot;ergs &quot;的方法都被重新命名为 &quot;gas&quot;，一些函数的签名也有变化。</li><li>如果你的项目使用zksync系统合约，请确保同时更新<code>@matterlabs/zksync-contracts</code>包。多个合同接口都有变化。</li><li>付费者。 <ul><li>交易<code>customData</code>中的<code>ergsPerPubdata: utils.DEFAULT_ERGS_PER_PUBDATA_LIMIT</code>应更新为<code>gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT</code>。</li><li>在<code>validateAndPayForPaymasterTransaction</code>方法上进行交易验证后，自定义支付系统需要返回一个魔法值。如果验证成功，这个值应该是<code>ACCOUNT_VALIDATION_SUCCESS_MAGIC</code>（可在<code>IAccount.sol</code>接口上获得），如果验证失败，则是空值<code>bytes4(0)</code>。</li></ul></li>",7),E=e("code",null,"IAccount",-1),D=l("<li><code>prePaymaster</code>方法已更名为<code>prepareForPaymaster</code>。</li><li>智能合约账户现在包括版本号，以便于未来的更新。当从AA工厂合约中调用<code>create2Account</code>时，应将其作为一个参数。</li><li>账户需要在<code>validateTransaction</code>方法的交易验证后返回一个魔法值。如果验证成功，这个值应该是<code>ACCOUNT_VALIDATION_SUCCESS_MAGIC</code>（可在<code>IAccount.sol</code>接口上找到），如果验证失败，则是空值<code>bytes4(0)</code>。</li>",3),L=l("<li>如果你的智能合约使用<code>SystemContractsCaller</code>库中的任何方法（如<code>systemCall</code>），你需要在<code>zksolc</code>文件中<code>hardhat.config.ts</code>的<code>settings</code>部分将<code>isSystem</code>标志设置为<code>true</code>来编译它们。</li>",1),q=e("code",null,"hardhat flatten",-1),w=e("li",null,"就像其他再生一样，它将删除所有的余额和合约，所以你需要再次存入资金并重新部署你的合约。",-1),N={href:"https://join.zksync.dev/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://join.zksync.dev/",target:"_blank",rel:"noopener noreferrer"};function R(B,F){const a=i("ExternalLinkIcon"),d=i("RouterLink");return r(),n("div",null,[u,_,p,e("ul",null,[e("li",null,[k,o("版本"),f,o("：现在返回一个验证ID，可用于查询智能合约的验证状态。更多信息"),e("a",y,[o("这里"),c(a)])]),b]),g,e("ul",null,[e("li",null,[o("改造收费机制。 "),e("ul",null,[m,e("li",null,[o("气体退款：交易中未使用的气体会被退还。你可以看到这些退款作为代币转移"),e("a",v,[o("在探索者"),c(a)]),o("。")])])]),z,A,x,I]),C,P,T,e("ul",null,[S,e("li",null,[o("如果你的项目使用账户抽象，请记住，"),E,o("接口已经改变。 "),e("ul",null,[e("li",null,[c(d,{to:"/dev/troubleshooting/.../tutorials/custom-aa-tutorial.html"},{default:t(()=>[o("Account abstraction multisig")]),_:1}),o(" 教程已被更新，以反映接口的变化。")]),D])]),L,e("li",null,[o("zkSync 系统合约有周期依赖，可能会导致用 "),q,o(" 平整合约的问题。使用"),c(d,{to:"/dev/troubleshooting/api/hardhat/hardhat-zksync-verify.html"},{default:t(()=>[o("hardhat验证插件")]),_:1}),o("来代替。")]),w]),e("p",null,[o("如果在做了这些改变之后，你仍然面临问题，请"),e("a",N,[o('在我们的Discord的 "dev-support-beta "频道中创建一个支持票'),c(a)]),o("。")]),e("p",null,[c(d,{to:"/dev/troubleshooting/.../.../api/js/getting-started.html"},{default:t(()=>[o("Javascript SDK文档")]),_:1}),o("、"),c(d,{to:"/dev/troubleshooting/.../building-onzksync/hello-world.html"},{default:t(()=>[o("快速入门")]),_:1}),o("和"),c(d,{to:"/dev/troubleshooting/.../tutorials/custom-aa-tutorial.html"},{default:t(()=>[o("账户抽象自定义")]),_:1}),o(" 教程已经更新，但**文档的一些其他部分还没有更新。如果你发现任何问题，请"),e("a",U,[o("联系我们"),c(a)]),o("。")])])}const G=s(h,[["render",R],["__file","changelog.html.vue"]]);export{G as default};