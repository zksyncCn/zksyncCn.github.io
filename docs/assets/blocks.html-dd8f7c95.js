import{_ as d,W as r,X as i,Z as a,$ as e,a0 as o,a2 as n,Y as c,D as l}from"./framework-674379d2.js";const s={},h=c('<h1 id="区块" tabindex="-1"><a class="header-anchor" href="#区块" aria-hidden="true">#</a> 区块</h1><p>一个区块是一个有序的交易列表。每个区块（除了创世区块）都指向它所延伸的前一个区块，从而形成一个区块链。</p><h2 id="zksync-era的区块" tabindex="-1"><a class="header-anchor" href="#zksync-era的区块" aria-hidden="true">#</a> zkSync era的区块</h2><p>在zkSync中，有两个 &quot;区块 &quot;的概念：一个是L2区块，一个是L1滚动区块。</p><p>L2区块，或只是 &quot;区块&quot;，只是在L2上创建的区块，即在zkSync网络上。它们不包括在以太坊链上。一个L1滚动区块，我们称之为 &quot;批&quot;，是一组 连续的（L2）区块，它包含了所有的交易，并以相同的顺序，从该批的第一个区块到最后一个区块的 批次。</p><p>L1批次，顾名思义，是提交给以太坊的。有这些不同概念的主要原因是，一个区块可以 而在一个批次中，我们希望包括许多交易，以使与L1互动的成本分散在许多交易中。</p><h2 id="区块编号" tabindex="-1"><a class="header-anchor" href="#区块编号" aria-hidden="true">#</a> 区块编号</h2><p>在zkSync API中访问区块号码类似于你在以太坊上的做法。例如，<code>eth_blockNumber</code>返回最新的L2区块的号码 而<code>eth_getBlockByNumber</code>，给定一个区块号码，返回所请求的区块的信息。</p><p>对于L1，要检索最新的区块号，使用zkSync API方法<code>zks_L1BatchNumber</code>。 此外，通过对一个区块的查询，你可以看到包括该区块的批号。 在交易收据中，字段<code>l1BatchNumber</code>是包括该交易的批号。 字段<code>l1BatchTxIndex</code>返回所有批次交易中的交易位置。</p><h2 id="区块处理时间" tabindex="-1"><a class="header-anchor" href="#区块处理时间" aria-hidden="true">#</a> 区块处理时间</h2><p>交易由操作员立即处理，并添加到块中，然后立即生成。一旦zkSync成为 完全去中心化，区块时间将需要几秒钟，因为相关实体需要达成共识。</p><p>批量时间，一般来说，取决于系统的活动 - 系统的活动越多，我们封存一个批次的速度越快。 封存一个批次有几个标准，我们在这里不做详细解释，因为系统还在测试中，这些标准可能会改变。 这些可能会改变。 一般来说，一个批次在以下情况下会被封存。</p><ol><li>达到批次的 &quot;容量&quot;。容量包括已使用的L1气体、已消耗的L2气体和其他一些参数。</li><li>批次超时已过。</li></ol>',13),u=c('<h3 id="空的区块" tabindex="-1"><a class="header-anchor" href="#空的区块" aria-hidden="true">#</a> 空的区块</h3><div class="hint-container warning"><p class="hint-container-title">Note</p><p>我们目前有空块被显示在我们的区块资源管理器上，请注意这不是区块资源管理器的问题，但这是由设计发生的。</p><p>尽管这可能是一个短期的现实，但考虑这个设计背后的原理是很重要的。</p></div><p>每个L1批处理（包括几个L2块）都在一个虚拟机实例中执行。该虚拟机逐一执行交易，然后执行一些与最后一笔交易无关的代码，而是与整个批次有关。目前，从费用中收集的ETH从引导器的正式地址转移到区块矿工地址。问题是这种转移会发出一个事件（像其他转移一样），因此，我们把这个事件包含在一个L2区块中，以便通过API访问。</p><p>我们可以把它添加到L1批中最新的L2区块中，但是想象一下下面的情况：如果一个L2区块被关闭了，但是它的L1批没有被关闭，而且节点有一段时间没有收到任何新的交易，那么L1批必须在超时前关闭。如果我们将事件添加到最近关闭的区块中，它将修改区块，导致某种重新组织。  为了避免这种情况，所以我们建立了一个纯粹虚构的区块，只包含事件。</p><h3 id="哈希值" tabindex="-1"><a class="header-anchor" href="#哈希值" aria-hidden="true">#</a> 哈希值</h3><p>zkSync中的区块哈希值是确定的，由以下公式得出。&quot;keccak256(l2_block_number)&quot;。 之所以有一个确定的区块哈希值，是因为这些哈希值是不可证明的（记住，L2区块不提交给L1）。 我们建议项目不要使用L2区块哈希值作为随机性的来源。</p><h3 id="区块属性" tabindex="-1"><a class="header-anchor" href="#区块属性" aria-hidden="true">#</a> 区块属性</h3>',7),p=a("li",null,"时间戳。当前区块的创建时间，以秒为单位，返回L1批次的时间戳。",-1),_=a("li",null,"区块编号。该区块的唯一序列号。",-1),L=a("li",null,[e("Gas limit: 当前区块的Gas limit，总是返回"),a("code",null,"2^32-1"),e("。")],-1),k=a("li",null,[e("难度。当前区块的难度，返回"),a("code",null,"2500000000000000"),e("（zkSync没有工作证明的共识）。")],-1);function b(m,f){const t=l("RouterLink");return r(),i("div",null,[h,a("p",null,[e("在提交交易后，用户可以检查他们的交易在进程中的位置，正如"),o(t,{to:"/dev/developer-guides/transactions/.../.../fundamentals/zkSync.html#zksync-overview"},{default:n(()=>[e("这里")]),_:1}),e("所解释的那样。")]),u,a("ul",null,[p,_,L,a("li",null,[e("Coinbase。当前区块矿工的地址，返回"),o(t,{to:"/dev/developer-guides/system-contracts.html#bootloader"},{default:n(()=>[e("bootloader")]),_:1}),e("地址。")]),k])])}const y=d(s,[["render",b],["__file","blocks.html.vue"]]);export{y as default};
