import{_ as r,W as d,X as k,Z as n,$ as e,a0 as t,a2 as o,a1 as a,Y as i,D as s}from"./framework-674379d2.js";const p="/docs/assets/connect-1-d2357a69.png",h={},y=i('<h1 id="与zksync-era互动" tabindex="-1"><a class="header-anchor" href="#与zksync-era互动" aria-hidden="true">#</a> 与zkSync Era互动</h1><p>zkSync Era目前正处于公平的阿尔法登场阶段，这涉及到向某些团队开放我们的主网，以便在主网上建立和进行交易。</p><h2 id="我需要有使用zksync-lite的经验吗" tabindex="-1"><a class="header-anchor" href="#我需要有使用zksync-lite的经验吗" aria-hidden="true">#</a> 我需要有使用zkSync Lite的经验吗？</h2><p>对zkSync Lite的一些经验将有助于理解一些核心概念，例如最终性如何工作。从所有其他方面来看，zkSync Era和zkSync Lite是非常不同的系统，在zkSync Era的基础上不需要后者的经验。</p><h2 id="我需要什么来开始构建" tabindex="-1"><a class="header-anchor" href="#我需要什么来开始构建" aria-hidden="true">#</a> 我需要什么来开始构建？</h2><p>所有现有的以太坊的SDK将开箱工作，你的用户将有与以太坊上相同的体验。如果你想启用先进的zkSync功能，如账户抽象，应该使用zkSync SDK。</p><p>其他唯一需要使用zkSync SDK的地方是在合同部署期间。这可以通过我们的硬帽插件轻松完成。</p><h3 id="快速启动zksync" tabindex="-1"><a class="header-anchor" href="#快速启动zksync" aria-hidden="true">#</a> 快速启动zkSync</h3>',8),z=i('<ul><li>如何安装zkSync硬帽插件并使用它部署智能合约。</li><li>如何使用<code>zksync-web3</code>库为你的dApp构建前端。</li></ul><h3 id="连接到metamask上的zksync-era" tabindex="-1"><a class="header-anchor" href="#连接到metamask上的zksync-era" aria-hidden="true">#</a> 连接到Metamask上的zkSync Era</h3><p>为了将zkSync Era alpha主网网络添加到您的钱包，您需要输入以下详细信息。</p><ol><li>打开Metamask的钱包，点击顶部中心的网络。</li></ol><p><img src="'+p+'" alt="img"></p><ol start="2"><li><p>点击 &quot;手动添加网络&quot;。</p></li><li><p>填写有关zkSync Era alpha主网或测试网的详细信息，然后点击 &quot;保存&quot;。</p></li></ol><p><strong>主网网络信息</strong></p><ul><li>网络名称。<code>zkSync Era Mainnet</code>.</li><li>新的RPC URL: <code>https://zksync2-mainnet.zksync.io </code></li><li>链ID: <code>324</code></li><li>货币符号: <code>ETH </code></li><li>区块资源管理器 URL: <code>https://explorer.zksync.io/</code></li><li>WebSocket URL: <code>wss://zksync2-mainnet.zksync.io/ws</code>。</li></ul><p><strong>Testnet网络信息</strong></p><ul><li>Network Name: <code>zkSync Era Testnet</code></li><li>New RPC URL: <code>https://zksync2-testnet.zksync.dev</code></li><li>Chain ID: <code>280</code></li><li>Currency Symbol: <code>ETH</code></li><li>Block Explorer URL: <code>https://goerli.explorer.zksync.io/</code></li><li>WebSocket URL: <code>wss://zksync2-testnet.zksync.dev/ws</code></li></ul><h2 id="zksync-era支持" tabindex="-1"><a class="header-anchor" href="#zksync-era支持" aria-hidden="true">#</a> zkSync Era支持</h2><p>你可以在<code>💻🧪│dev-support-beta</code>里开一张支持票，或者在<code>🖥│dev-general</code>里问任何问题。</p>',12),u=n("code",null,"#dev-support-beta",-1),m=n("code",null,"#dev-general",-1),S={href:"https://join.zksync.dev/",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"接受发送的邀请。",-1),_=n("li",null,[e("导航到"),n("code",null,"#dev-support-beta"),e("频道。")],-1),f=n("p",null,[e("另外，你现在可以通过"),n("a",{href:"mailto:support@zksync.io"},"email"),e("联系我们的支持工程师，提出你的问题和疑虑。 我们将积极监测问题，并努力尽快解决它们。")],-1);function E(b,x){const c=s("RouterLink"),l=s("ExternalLinkIcon");return d(),k("div",null,[y,n("p",null,[e("查看我们的步骤"),t(c,{to:"/dev/fundamentals/.../building-on-zksync/hello-world.html"},{default:o(()=>[e("快速入门指南")]),_:1}),e("，在那里你会学到。")]),z,n("p",null,[e("如果你需要与zkSync Era有关的任何帮助，你可以在zkSync Era discord上提出支持票，或者查看"),t(c,{to:"/dev/fundamentals/.../troubleshooting/faq.html"},{default:o(()=>[e("FAQs")]),_:1}),e("页面，查看关于zkSync Era的最常见的疑问。此外，你可以联系"),u,e("上的支持团队，或者在zkSync Era Discord服务器上的"),m,e("频道中提出任何问题。 提出支持票的说明如下。")]),n("ul",null,[n("li",null,[e("加入 zkSync Era "),n("a",S,[e("我们的 Discord"),t(l)]),e(" 服务器。")]),g,_]),f,a(" **Testnet network info**\n\n- Network Name: `zkSync alpha testnet`\n- New RPC URL: `https://zksync2-testnet.zksync.dev`\n- Chain ID: `280`\n- Currency Symbol: `ETH`\n- Block Explorer URL: `https://goerli.explorer.zksync.io/`\n- WebSocket URL: `wss://zksync2-testnet.zksync.dev/ws` "),a(` ## 使用zkSync门户网站存入和提取资金

由于测试网是在Goerli网络上运行，你需要先获得一些Goerli ETH。试试下面的任何一个龙头。

- [https://goerli-faucet.mudit.blog/](https://goerli-faucet.mudit.blog/)
- [https://faucets.chain.link/goerli](https://faucets.chain.link/goerli)
- [https://goerli-faucet.slock.it/](https://goerli-faucet.slock.it/)
- [https://goerlifaucet.com/](https://goerlifaucet.com/)

**Step 1**

前往[https://portal.zksync.io/](https://portal.zksync.io/)并连接你的钱包。你会自动被要求添加 "zkSync Era testnet Goerli "网络。

你也可以手动添加网络到你的metamask中。

- Network Name: \`zkSync mainnet\`
- New RPC URL: \`https://zksync2-mainnet.zksync.io\`
- Chain ID: \`324\` `),a(` 
**Step 2 (如果你没有Goerli ETH，请跳过。)**

我们首先进入 "桥梁"，然后 "存款"，将一些$ETH存入zkSync Era。

![image](../../assets/images/faq-1.png)

**Step 3**

接下来，我们去 "Faucet "获取一些测试网的$ETH、$LINK、$DAI、$WBTC和$USDC到我们的zkSync地址。

![image](../../assets/images/faq-2.png)

申领后在 "余额 "处查看你的余额。

![image](../../assets/images/faq-3.png)

**Step 4**

现在转到 "转移"。输入另一个钱包的地址，并转移一些代币到它。如果你没有ETH，就用DAI支付费用。

![image](../../assets/images/faq-4.png)

**Step 5**

最后我们去 "提款"，从zkSync提取一些\\$DAI回到Goerli。用ETH支付费用。


![image](../../assets/images/faq-5.png) `)])}const w=r(h,[["render",E],["__file","interacting.html.vue"]]);export{w as default};
