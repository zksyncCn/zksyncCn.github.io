import{_ as l,W as c,X as n,Z as e,$ as t,a0 as d,a2 as i,Y as o,D as r}from"./framework-674379d2.js";const h="/docs/assets/block-tx-b667afe6.png",p="/docs/assets/block-menu-3b16d2fc.png",b="/docs/assets/view-block-ac4efb97.png",u="/docs/assets/single-block-6ee03462.png",k={},_=o('<h1 id="浏览区块" tabindex="-1"><a class="header-anchor" href="#浏览区块" aria-hidden="true">#</a> 浏览区块</h1><p><img src="'+h+'" alt="Browse blocks!" title="View blocks on zkSync"></p><p>区块资源管理器的主屏幕，默认显示链上的10个最近的区块。 查看所有区块，可以更全面地了解最近的区块，或者点击特定的区块编号，了解该区块的详细信息。 区块页面也可以通过顶部菜单访问。</p><p><img src="'+p+'" alt="Access the block page" title="Blocks menu"></p><h2 id="查看所有区块" tabindex="-1"><a class="header-anchor" href="#查看所有区块" aria-hidden="true">#</a> 查看所有区块</h2>',5),m={href:"https://explorer.zksync.io/blocks/",target:"_blank",rel:"noopener noreferrer"},f=o('<p>然而，如果你已经离开了主页，你可以随时通过输入区块编号来搜索任何区块。</p><p><img src="'+b+'" alt="Browse all blocks" title="Browse all blocks"></p><p>一个区块内有两个主要部分。</p><ol><li>区块标题</li></ol><ul><li>这显示了关于这个特定区块的简要信息，以及与链中前一个区块的链接。</li></ul><ol start="2"><li>交易</li></ol><ul><li>由包含在该区块中的所有交易的列表组成。</li></ul><p><img src="'+u+'" alt="Single block page!" title="View a single block"></p><h3 id="区块标题" tabindex="-1"><a class="header-anchor" href="#区块标题" aria-hidden="true">#</a> 区块标题</h3>',9),g=o('<table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>Block number</td><td>The unique sequential number for this block.</td></tr><tr><td>Block size</td><td>The size of the block.</td></tr><tr><td>Timestamp</td><td>The block generation time in seconds since the Unix epoch.</td></tr><tr><td>Root hash</td><td>The Cryptographic hash of the block header.</td></tr><tr><td>Status</td><td>The status of the block, could be <code>sealed</code>, <code>finalized</code>, or <code>unfinalized</code>.</td></tr></tbody></table><h3 id="交易" tabindex="-1"><a class="header-anchor" href="#交易" aria-hidden="true">#</a> 交易</h3><p>这一部分列出了包含在这个区块中的所有交易。 交易是以先入先出的方式进行的，但在未来，我们将引入一个 &quot;优先级堆&quot;，这将允许对交易进行排序。</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>Block</td><td>一个区块中的交易量</td></tr><tr><td>Timestamp</td><td>从Unix epoch开始的区块生成时间，单位是秒。</td></tr><tr><td>Hash</td><td>交易的哈希值，作为交易的ID。</td></tr><tr><td>From</td><td>账户或智能合约，发送交易。</td></tr><tr><td>To</td><td>账户或智能合约，交易对象。</td></tr><tr><td>Fee</td><td>与此交易处理相关的费用率。</td></tr><tr><td>Tokens transferred</td><td>关于交易中涉及的代币（包括 &quot;to &quot;和 &quot;from &quot;地址）的详细信息，它包括资产、钱包地址的余额和代币地址等细节。</td></tr><tr><td>Contract address</td><td>网络收取的费用比率。</td></tr></tbody></table>',4);function x(B,T){const a=r("ExternalLinkIcon"),s=r("RouterLink");return c(),n("div",null,[_,e("p",null,[t("你可以点击某个区块的编号，查看该特定区块的所有细节。如果你想浏览更多的区块，请点击导航菜单上的"),e("a",m,[t("区块"),d(a)]),t("部分。使用分页法导航到下一页。")]),f,e("p",null,[t("下表应该有助于解释你在区块中会看到什么。 关于区块的更多细节，请参见"),d(s,{to:"/api/tools/block-explorer/.../.../dev/developer-guides/transactions/blocks.html"},{default:i(()=>[t("区块")]),_:1}),t("的文档。")]),g])}const V=l(k,[["render",x],["__file","block-view.html.vue"]]);export{V as default};
