import{_ as p,W as o,X as c,Z as s,$ as n,a0 as t,a2 as e,Y as i,D as l}from"./framework-674379d2.js";const r={},u=s("h1",{id:"账户。l1-l2交易",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#账户。l1-l2交易","aria-hidden":"true"},"#"),n(" 账户。L1->L2交易")],-1),d=i(`<p>##支持的类</p><p>以下账户类别支持从L1向L2发送交易。</p><ul><li><code>Wallet</code> (如果连接到L1提供者)</li><li><code>L1Signer</code></li></ul><h2 id="批准代币的存款" tabindex="-1"><a class="header-anchor" href="#批准代币的存款" aria-hidden="true">#</a> 批准代币的存款</h2><p>从以太坊桥接ERC20代币需要批准代币到zkSync以太坊智能合约。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token function">approveERC20</span><span class="token punctuation">(</span>
    token<span class="token operator">:</span> Address<span class="token punctuation">,</span>
    amount<span class="token operator">:</span> BigNumberish<span class="token punctuation">,</span>
    overrides<span class="token operator">?</span><span class="token operator">:</span> ethers<span class="token punctuation">.</span>Overrides <span class="token operator">&amp;</span> <span class="token punctuation">{</span> bridgeAddress<span class="token operator">?</span><span class="token operator">:</span> Address <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ethers<span class="token punctuation">.</span>providers<span class="token punctuation">.</span>TransactionResponse<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入和输出" tabindex="-1"><a class="header-anchor" href="#输入和输出" aria-hidden="true">#</a> 输入和输出</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>token</td><td>代币的Ethereum地址。</td></tr><tr><td>amount</td><td>待批准的代币金额。</td></tr><tr><td>overrides?</td><td><strong>以太坊</strong>交易覆盖物。可用于传递<code>gasLimit</code>、<code>gasPrice</code>等。你也可以提供一个要使用的L1桥的自定义地址（默认使用<code>Matter Labs</code>团队提供的桥）。</td></tr><tr><td>return</td><td><code>ethers.providers.TransactionResponse</code>对象。</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> zksync <span class="token keyword">from</span> <span class="token string">&quot;zksync-web3&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ethers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ethers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">PRIVATE_KEY</span> <span class="token operator">=</span> <span class="token string">&quot;0xc8acb475bb76a4b8ee36ea4d0e516a755a17fad2e84427d5559b37b544d9ba5a&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> zkSyncProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zksync</span><span class="token punctuation">.</span><span class="token function">Provider</span><span class="token punctuation">(</span><span class="token string">&quot;https://zksync2-testnet.zksync.dev/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ethereumProvider <span class="token operator">=</span> ethers<span class="token punctuation">.</span><span class="token function">getDefaultProvider</span><span class="token punctuation">(</span><span class="token string">&quot;goerli&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zksync</span><span class="token punctuation">.</span><span class="token function">Wallet</span><span class="token punctuation">(</span><span class="token constant">PRIVATE_KEY</span><span class="token punctuation">,</span> zkSyncProvider<span class="token punctuation">,</span> ethereumProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">USDC_ADDRESS</span> <span class="token operator">=</span> <span class="token string">&quot;0xd35cceead182dcee0f148ebac9447da2c4d449c4&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> txHandle <span class="token operator">=</span> <span class="token keyword">await</span> wallet<span class="token punctuation">.</span><span class="token function">approveERC20</span><span class="token punctuation">(</span>
  <span class="token constant">USDC_ADDRESS</span><span class="token punctuation">,</span>
  <span class="token string">&quot;10000000&quot;</span> <span class="token comment">// 10.0 USDC</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> txHandle<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="向zksync存入代币" tabindex="-1"><a class="header-anchor" href="#向zksync存入代币" aria-hidden="true">#</a> 向zkSync存入代币</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token function">deposit</span><span class="token punctuation">(</span>transaction<span class="token operator">:</span> <span class="token punctuation">{</span>
  token<span class="token operator">:</span> Address<span class="token punctuation">;</span>
  amount<span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
  to<span class="token operator">?</span><span class="token operator">:</span> Address<span class="token punctuation">;</span>
  operatorTip<span class="token operator">?</span><span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
  bridgeAddress<span class="token operator">?</span><span class="token operator">:</span> Address<span class="token punctuation">;</span>
  approveERC20<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  overrides<span class="token operator">?</span><span class="token operator">:</span> ethers<span class="token punctuation">.</span>PayableOverrides<span class="token punctuation">;</span>
  approveOverrides<span class="token operator">?</span><span class="token operator">:</span> ethers<span class="token punctuation">.</span>Overrides<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PriorityOpResponse<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="输入和输出-1" tabindex="-1"><a class="header-anchor" href="#输入和输出-1" aria-hidden="true">#</a> 输入和输出</h4><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>transaction.token</td><td>要存入代币的地址。</td></tr><tr><td>transaction.amount</td><td>要存入的代币的金额。</td></tr><tr><td>Transaction.to?</td><td>将在L2上接收存入的代币的地址。</td></tr><tr><td>transaction.operatorTip?</td><td>(<em>目前不使用</em>) 如果交易中传递的ETH值在重写中没有明确说明，这个字段将等于操作员在交易的基本费用之外将收到的小费。</td></tr><tr><td>transaction.bridgeAddress?</td><td>要使用的桥接合同的地址。默认为默认的zkSync网桥（<code>L1EthBridge</code>或<code>L1Erc20Bridge</code>）。</td></tr><tr><td>transaction.approveERC20?</td><td>是否应该在引擎盖下进行代币审批。如果你桥接了ERC20令牌，并且没有事先调用 &quot;approveERC20 &quot;函数，将此标志设置为 &quot;true&quot;。</td></tr><tr><td>transaction.overrides?</td><td><strong>以太坊</strong>交易覆盖物。可用于传递<code>gasLimit</code>，<code>gasPrice</code>等。</td></tr><tr><td>transaction.approvedOverrides?</td><td><strong>以太坊</strong>交易的批准交易的重写。可用于传递<code>gasLimit&#39;, </code>gasPrice&#39;等。</td></tr><tr><td>return</td><td>返回 <code>PriorityOpResponse</code>对象。</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> zksync <span class="token keyword">from</span> <span class="token string">&quot;zksync-web3&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ethers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ethers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">PRIVATE_KEY</span> <span class="token operator">=</span> <span class="token string">&quot;0xc8acb475bb76a4b8ee36ea4d0e516a755a17fad2e84427d5559b37b544d9ba5a&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> zkSyncProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zksync</span><span class="token punctuation">.</span><span class="token function">Provider</span><span class="token punctuation">(</span><span class="token string">&quot;https://zksync2-testnet.zksync.dev/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ethereumProvider <span class="token operator">=</span> ethers<span class="token punctuation">.</span><span class="token function">getDefaultProvider</span><span class="token punctuation">(</span><span class="token string">&quot;goerli&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zksync</span><span class="token punctuation">.</span><span class="token function">Wallet</span><span class="token punctuation">(</span><span class="token constant">PRIVATE_KEY</span><span class="token punctuation">,</span> zkSyncProvider<span class="token punctuation">,</span> ethereumProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">USDC_ADDRESS</span> <span class="token operator">=</span> <span class="token string">&quot;0xd35cceead182dcee0f148ebac9447da2c4d449c4&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> usdcDepositHandle <span class="token operator">=</span> <span class="token keyword">await</span> wallet<span class="token punctuation">.</span><span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  token<span class="token operator">:</span> <span class="token constant">USDC_ADDRESS</span><span class="token punctuation">,</span>
  amount<span class="token operator">:</span> <span class="token string">&quot;10000000&quot;</span><span class="token punctuation">,</span>
  approveERC20<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Note that we wait not only for the L1 transaction to complete but also for it to be</span>
<span class="token comment">// processed by zkSync. If we want to wait only for the transaction to be processed on L1,</span>
<span class="token comment">// we can use \`await usdcDepositHandle.waitL1Commit()\`</span>
<span class="token keyword">await</span> usdcDepositHandle<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ethDepositHandle <span class="token operator">=</span> <span class="token keyword">await</span> wallet<span class="token punctuation">.</span><span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  token<span class="token operator">:</span> zksync<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token constant">ETH_ADDRESS</span><span class="token punctuation">,</span>
  amount<span class="token operator">:</span> <span class="token string">&quot;10000000&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Note that we wait not only for the L1 transaction to complete but also for it to be</span>
<span class="token comment">// processed by zkSync. If we want to wait only for the transaction to be processed on L1,</span>
<span class="token comment">// we can use \`await ethDepositHandle.waitL1Commit()\`</span>
<span class="token keyword">await</span> ethDepositHandle<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="向zksync添加本地令牌" tabindex="-1"><a class="header-anchor" href="#向zksync添加本地令牌" aria-hidden="true">#</a> 向zkSync添加本地令牌</h2><p>新的代币在第一次存入时就会自动添加。</p><h2 id="最终确定提款" tabindex="-1"><a class="header-anchor" href="#最终确定提款" aria-hidden="true">#</a> 最终确定提款</h2><p>提款分两步执行--在L2启动，在L1完成。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token function">finalizeWithdrawal</span><span class="token punctuation">(</span>withdrawalHash<span class="token operator">:</span> BytesLike<span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ethers<span class="token punctuation">.</span>TransactionResponse<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="inputs-and-outputs" tabindex="-1"><a class="header-anchor" href="#inputs-and-outputs" aria-hidden="true">#</a> Inputs and outputs</h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>withdrawalHash</td><td>启动提款的L2交易的哈希值。</td></tr><tr><td>index?</td><td>如果一个交易中有多个提款，你可以传递一个你想最终确定的提款的索引（默认为0）。</td></tr></tbody></table><h2 id="在l2上强制执行交易" tabindex="-1"><a class="header-anchor" href="#在l2上强制执行交易" aria-hidden="true">#</a> 在L2上强制执行交易</h2><h3 id="获取l2交易的基本成本" tabindex="-1"><a class="header-anchor" href="#获取l2交易的基本成本" aria-hidden="true">#</a> 获取L2交易的基本成本</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token function">getBaseCost</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token punctuation">{</span>
    gasLimit<span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
    gasPerPubdataByte<span class="token operator">?</span><span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
    gasPrice<span class="token operator">?</span><span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>BigNumber<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="inputs-and-outputs-1" tabindex="-1"><a class="header-anchor" href="#inputs-and-outputs-1" aria-hidden="true">#</a> Inputs and outputs</h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>params.gasLimit</td><td>The <code>gasLimit</code> for the the L2 contract call.</td></tr><tr><td>params.gasPerPubdataByte</td><td>The L2 gas price for each published L1 calldata byte.</td></tr><tr><td>params.gasPrice?</td><td>The L1 gas price of the L1 transaction that will send the request for an execute call</td></tr><tr><td>returns</td><td>The base cost in ETH for requesting the L2 contract call.</td></tr></tbody></table><h2 id="申领失败的存款" tabindex="-1"><a class="header-anchor" href="#申领失败的存款" aria-hidden="true">#</a> 申领失败的存款</h2><p><code>claimFailedDeposit</code>方法从发起的存款中提取资金，该存款在L2上最终确定时失败。 如果存款的L2交易失败，它将发送一个L1交易，调用L1桥的<code>claimFailedDeposit</code>方法，结果是将L1令牌返回给存款人，否则就会抛出错误。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token function">claimFailedDeposit</span><span class="token punctuation">(</span>depositHash<span class="token operator">:</span> BytesLike<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ethers<span class="token punctuation">.</span>ContractTransaction<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="输入参数" tabindex="-1"><a class="header-anchor" href="#输入参数" aria-hidden="true">#</a> 输入参数</h3><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>depositHash</td><td><code>bytes32</code></td><td>失败存款的二级交易哈希值。</td></tr></tbody></table><h3 id="requesting-transaction-execution" tabindex="-1"><a class="header-anchor" href="#requesting-transaction-execution" aria-hidden="true">#</a> Requesting transaction execution</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token function">requestExecute</span><span class="token punctuation">(</span>transaction<span class="token operator">:</span> <span class="token punctuation">{</span>
    contractAddress<span class="token operator">:</span> Address<span class="token punctuation">;</span>
    calldata<span class="token operator">:</span> BytesLike<span class="token punctuation">;</span>
    l2GasLimit<span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
    l2Value<span class="token operator">?</span><span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
    factoryDeps<span class="token operator">?</span><span class="token operator">:</span> ethers<span class="token punctuation">.</span>BytesLike<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    operatorTip<span class="token operator">?</span><span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
    gasPerPubdataByte<span class="token operator">?</span><span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
    refundRecipient<span class="token operator">?</span><span class="token operator">:</span> Address<span class="token punctuation">;</span>
    overrides<span class="token operator">?</span><span class="token operator">:</span> ethers<span class="token punctuation">.</span>PayableOverrides<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>PriorityOpResponse<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="输入和输出-2" tabindex="-1"><a class="header-anchor" href="#输入和输出-2" aria-hidden="true">#</a> 输入和输出</h4><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>transaction.contractAddress</td><td>要调用的二级合同。</td></tr><tr><td>transaction.calldata</td><td>二级交易的输入。</td></tr><tr><td>transaction.l2GasLimit</td><td>交易在L2上执行时可消耗的最大L2气体量。</td></tr><tr><td>transaction.l2Value?</td><td>L2事务的<code>msg.value</code>。</td></tr><tr><td>transaction.factoryDeps?</td><td>L2字节码的数组，这些字节码将被标记为L2上的已知代码。</td></tr><tr><td>transaction.operatorTip?</td><td>(<em>目前不使用</em>) 如果交易中传递的ETH值在重写中没有明确说明，这个字段将等于操作员在交易的基本成本之外将收到的小费。</td></tr><tr><td>transaction.gasPerPubdataByte?</td><td>每个公布的L1 calldata字节的二级气体价格。</td></tr><tr><td>transaction.refundRecipient?</td><td>L2上将收到交易退款的地址。如果交易失败，它也将是接收<code>l2Value</code>的地址。</td></tr><tr><td>transaction.overrides</td><td><strong>以太坊</strong>交易覆盖。可用于传递<code>gasLimit</code>、<code>gasPrice</code>、<code>value</code>等。</td></tr><tr><td>returns</td><td>返回 <code>PriorityOpResponse</code>对象。</td></tr></tbody></table><blockquote><p>Example</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> zksync <span class="token keyword">from</span> <span class="token string">&quot;zksync-web3&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BigNumber<span class="token punctuation">,</span> ethers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ethers&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">PRIVATE_KEY</span> <span class="token operator">=</span> <span class="token string">&quot;0xc8acb475bb76a4b8ee36ea4d0e516a755a17fad2e84427d5559b37b544d9ba5a&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> zkSyncProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zksync</span><span class="token punctuation">.</span><span class="token function">Provider</span><span class="token punctuation">(</span><span class="token string">&quot;https://zksync2-testnet.zksync.dev/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ethereumProvider <span class="token operator">=</span> ethers<span class="token punctuation">.</span><span class="token function">getDefaultProvider</span><span class="token punctuation">(</span><span class="token string">&quot;goerli&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zksync</span><span class="token punctuation">.</span><span class="token function">Wallet</span><span class="token punctuation">(</span><span class="token constant">PRIVATE_KEY</span><span class="token punctuation">,</span> zkSyncProvider<span class="token punctuation">,</span> ethereumProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> gasPrice <span class="token operator">=</span> <span class="token keyword">await</span> wallet<span class="token punctuation">.</span>providerL1<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">getGasPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// The calldata can be encoded the same way as for Ethereum.</span>
<span class="token comment">// Here is an example on how to get the calldata from an ABI:</span>
<span class="token keyword">const</span> abi <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    inputs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;increment&quot;</span><span class="token punctuation">,</span>
    outputs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    stateMutability<span class="token operator">:</span> <span class="token string">&quot;nonpayable&quot;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> contractInterface <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span>abi<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> calldata <span class="token operator">=</span> contractInterface<span class="token punctuation">.</span><span class="token function">encodeFunctionData</span><span class="token punctuation">(</span><span class="token string">&quot;increment&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> l2GasLimit <span class="token operator">=</span> BigNumber<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> txCostPrice <span class="token operator">=</span> <span class="token keyword">await</span> wallet<span class="token punctuation">.</span><span class="token function">getBaseCost</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  gasPrice<span class="token punctuation">,</span>
  calldataLength<span class="token operator">:</span> ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">arrayify</span><span class="token punctuation">(</span>calldata<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
  l2GasLimit<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Executing the transaction will cost </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">formatEther</span><span class="token punctuation">(</span>txCostPrice<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ETH</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> executeTx <span class="token operator">=</span> <span class="token keyword">await</span> wallet<span class="token punctuation">.</span><span class="token function">requestExecute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  contractAddress<span class="token operator">:</span> <span class="token string">&quot;0x19a5bfcbe15f98aa073b9f81b58466521479df8d&quot;</span><span class="token punctuation">,</span>
  calldata<span class="token punctuation">,</span>
  l2Value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  l2GasLimit<span class="token punctuation">,</span>
  overrides<span class="token operator">:</span> <span class="token punctuation">{</span>
    gasPrice<span class="token punctuation">,</span>
    value<span class="token operator">:</span> txCostPrice<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> executeTx<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39);function k(v,m){const a=l("RouterLink");return o(),c("div",null,[u,s("p",null,[n("本节探讨了允许"),t(a,{to:"/api/js/accounts.html"},{default:e(()=>[n("account")]),_:1}),n("类从L1向L2发送交易的方法。")]),s("p",null,[n("如果你想了解一些关于L1->L2交互在zkSync上如何工作的背景，请查阅"),t(a,{to:"/api/js/dev/developer-guides/bridging/l1-l2-interop.html"},{default:e(()=>[n("introduction")]),_:1}),n("和"),t(a,{to:"/api/js/dev/developer-guides/bridging/l1-l2.html"},{default:e(()=>[n("guide")]),_:1}),n(" 。")]),d])}const h=p(r,[["render",k],["__file","accounts-l1-l2.html.vue"]]);export{h as default};
