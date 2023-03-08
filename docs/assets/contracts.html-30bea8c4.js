import{_ as c,W as d,X as s,Z as e,$ as t,a0 as n,a2 as i,Y as a,D as r}from"./framework-674379d2.js";const h={},u=a('<h1 id="智能合约开发" tabindex="-1"><a class="header-anchor" href="#智能合约开发" aria-hidden="true">#</a> 智能合约开发</h1><p>zkSync Era允许开发者使用与在以太坊上构建的相同的编程语言和工具来构建项目。</p><h2 id="solidity支持" tabindex="-1"><a class="header-anchor" href="#solidity支持" aria-hidden="true">#</a> Solidity支持</h2><p>目前支持Solidity <code>&gt;=0.4.10</code>版本，尽管<strong>我们强烈建议使用</strong> <code>^0.8.0</code>，因为旧版本包含已知的错误。</p><p>Solidity版本<code>&gt;=0.8</code>是通过Yul编译的，而<code>&lt;=0.7</code>是通过EVM遗留汇编编译的，由于控制流和调用图的混淆，它是一个不太友好的IR。由于这个原因，zkSync 对用 Solidity <code>&lt;=0.7</code>编写的合同有一些限制。</p><ul><li>不支持合同的本地递归。</li><li>不支持内部函数指针。</li><li>对合同大小和虚拟机周期数可能有影响。</li></ul><h3 id="在-solidity-中使用库" tabindex="-1"><a class="header-anchor" href="#在-solidity-中使用库" aria-hidden="true">#</a> 在 Solidity 中使用库</h3><p>zkSync Era支持在Solidity中使用库，但要注意以下几点。</p>',8),_=e("li",null,'如果一个Solidity库可以被内联（即它只包含 "private "或 "internal "方法），它可以被使用而不需要任何额外配置。',-1),p=e("h2",{id:"vyper支持",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vyper支持","aria-hidden":"true"},"#"),t(" Vyper支持")],-1),y=e("p",null,[t("目前只支持Vyper "),e("code",null,"^0.3.3"),t("。")],-1),k=e("h2",{id:"编译器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编译器","aria-hidden":"true"},"#"),t(" 编译器")],-1),g=e("p",null,"尽管你可以用Solidity和Vyper编写智能合约，但将这些合约编译成我们的zkEVM字节码需要特殊的编译器。",-1),E={href:"https://github.com/matter-labs/zksolc-bin",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/matter-labs/zkvyper-bin",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[e("strong",null,"我们的编译器是基于LLVM的"),t("。基于LLVM的编译器已经成为行业标准，因为它们的健壮性、效率和世界各地的大型社区。它们为我们提供了一些额外的优势。")],-1),S=e("ul",null,[e("li",null,"使我们能够比原来的EVM字节码提高效率，因为通过LLVM，我们可以利用这个成熟的生态系统中的许多优化和工具。"),e("li",null,"为我们增加支持整合用其他编程语言编写的代码库与LLVM前端铺平道路。通过这样做，开发人员可以以目前不可能的方式构建dApps和使用区块链。")],-1),b=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,[t("编译器不再作为Docker镜像发布，不再推荐使用它。使用"),e("code",null,'compilerSource: "binary"'),t("在Hardhat配置文件中使用二进制文件来代替。")])],-1),z=e("p",null,[e("strong",null,"在下面的链接中了解更多关于如何安装和配置这些插件：")],-1),v=e("h2",{id:"evm兼容性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#evm兼容性","aria-hidden":"true"},"#"),t(" EVM兼容性")],-1),L=e("p",null,"几乎所有为EVM编写的智能合约都将被zkSync Era支持，并将持有所有关键的安全不变性，因此在大多数情况下不需要额外的安全重新审核。一个值得注意的例外是使用以下EVM操作码的合约。",-1),V=e("code",null,"SELFDESTRUCT",-1),x={href:"https://eips.ethereum.org/EIPS/eip-6049",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"CALLCODE",-1),M={href:"https://eips.ethereum.org/EIPS/eip-2488",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"DELEGATECALL",-1),D=a("<li><code>EXTCODECOPY</code> - 我们暂时跳过它，因为zkEVM的操作码与EVM的操作码不一样，但如果需要，可以实现它。</li><li><code>CODECOPY</code> - 在部署代码中用<code>CALLDATACOPY</code>代替。</li><li><code>PC</code> - 在Yul和Solidity <code>&gt;=0.7.0</code>中不能访问。在Solidity <code>0.6.0</code>中可以访问，尽管它产生一个运行时错误。</li>",3),P=e("p",null,[e("strong",null,"所有这些操作码在编译时产生错误"),t("。")],-1),I=e("p",null,"还有一些其他的区别，例如，气体计量将是不同的（其他L2也是如此）。EVM的一些加密预编译（特别是配对和RSA）不会在第一个版本中提供，但在推出后不久就会实现，其中配对是一个优先事项，以允许超链和Aztec/Dark Forest等协议也不需要修改就可以部署。",-1),O=e("p",null,'以太坊加密基元，如 "ecrecover"、"keccak256 "和 "sha256 "都支持预编译。你不需要采取任何行动，因为所有对预编译的调用都是由引擎盖下的编译器完成的。',-1),T=e("h3",{id:"其他注意事项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他注意事项","aria-hidden":"true"},"#"),t(" 其他注意事项")],-1),Y=e("strong",null,"tx.origin用法：",-1),N=e("code",null,"tx.origin",-1),R={href:"https://hackernoon.com/hacking-solidity-contracts-using-txorigin-for-authorization-are-vulnerable-to-phishing",target:"_blank",rel:"noopener noreferrer"};function B(H,w){const o=r("RouterLink"),l=r("ExternalLinkIcon");return d(),s("div",null,[e("ul",null,[e("li",null,[u,e("ul",null,[_,e("li",null,[t('然而，如果一个库至少包含一个 "公共 "或 "外部 "方法，它就是不可内联的，其地址需要明确传递给编译器。你可以了解更多关于'),n(o,{to:"/dev/building-on-zksync/contracts/.../.../api/hardhat/compiling-libraries.html"},{default:i(()=>[t("如何在本节文档中编译不可内联的库")]),_:1}),t("。")])]),p,y,k,g,e("ul",null,[e("li",null,[e("a",E,[t("zksolc"),n(l)]),t("。Solidity编译器。")]),e("li",null,[e("a",f,[t("zkvyper"),n(l)]),t("。Vyper编译器。")])]),m,S,e("p",null,[t("我们建议通过"),n(o,{to:"/dev/building-on-zksync/contracts/.../.../.../api/hardhat/plugins.html"},{default:i(()=>[t("其对应的Hardhat插件")]),_:1}),t("使用这些编译器（尽管它们也可以作为二进制文件使用）。这些插件应该被添加到Hardhat的配置文件中，并允许开发人员编译新项目或将现有项目迁移到zkSync Era。")]),b,z,e("ul",null,[e("li",null,[n(o,{to:"/dev/building-on-zksync/contracts/api/hardhat/hadhat-zksync-solc.html"},{default:i(()=>[t("hardhat-zksync-solc documentation")]),_:1})]),e("li",null,[n(o,{to:"/dev/building-on-zksync/contracts/api/hardhat/hardhat-zksync-vyper.html"},{default:i(()=>[t("hardhat-zksync-vyper documentation")]),_:1})])]),v,L,e("ul",null,[e("li",null,[V,t(" - 它被认为是有害的，在"),e("a",x,[t("EIP-6049"),n(l)]),t("中被废弃。")]),e("li",null,[C,t(" - 它在以太坊的"),e("a",M,[t("EIP-2488"),n(l)]),t("中被弃用，转而使用"),A,t("。")]),D]),P,I,O,T,e("ul",null,[e("li",null,[e("p",null,[Y,t(),N,t("是Solidity的一个全局变量，用于返回发送交易的账户地址。它在 zkSync Era 上被支持，但是如果一个自定义的账户与使用这个的合约互动，交易将会失败。我们也不鼓励使用它，因为它可能会对网络钓鱼攻击构成威胁，使合同的所有资金流失。阅读更多关于 "),e("a",R,[t("tx.origin 钓鱼和其他漏洞"),n(l)])])]),e("li",null,[e("p",null,[t("**ecrecover的用法：**如果你使用'ecrecover'来验证用户账户的签名，请注意，zkSync Era带有本地账户抽象支持。强烈建议不要依赖账户有ECDSA私钥附加的事实，因为他们可能被multisig统治并使用另一种签名方案。阅读更多关于 "),n(o,{to:"/dev/building-on-zksync/contracts/.../.../developer-guides/aa.html"},{default:i(()=>[t("zkSync账户抽象支持")]),_:1})])])])])])])}const X=c(h,[["render",B],["__file","contracts.html.vue"]]);export{X as default};