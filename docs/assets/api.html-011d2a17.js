import{_ as c,W as i,X as u,Z as e,$ as n,a0 as t,a2 as s,a1 as o,Y as r,D as d}from"./framework-674379d2.js";const l={},h=e("h1",{id:"web3-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web3-api","aria-hidden":"true"},"#"),n(" Web3 API")],-1),m={href:"https://ethereum.org/en/developers/docs/apis/json-rpc/",target:"_blank",rel:"noopener noreferrer"},k=r(`<p>只要代码不涉及部署新的智能合约（它们只能使用EIP712交易部署，[下文]（#eip712）），_就不需要改变代码库。</p><p>可以继续使用目前正在使用的SDK。用户将继续以ETH支付费用，并且用户体验将与以太坊上的用户体验相同。</p><p>然而，zkSync Era有其特殊性，本节介绍。</p><h2 id="eip712" tabindex="-1"><a class="header-anchor" href="#eip712" aria-hidden="true">#</a> EIP712</h2><p>为了指定额外的字段，如自定义账户的自定义签名或选择支付方，应使用EIP712交易。这些交易具有与标准Ethereum交易相同的字段，但它们也有包含额外的L2特定数据的字段（\`paymaster&#39;，等等）。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;gasPerPubdata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1212&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;customSignature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x...&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;paymasterParams&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;paymaster&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x...&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;paymasterInput&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x...&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;factoryDeps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0x...&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>gasPerPubdata&quot;: 是一个字段，描述用户愿意为一个字节的pubdata支付的最大气体量。</li><li><code>customSignature</code>是一个带有自定义签名的字段，以防签名者的账户不是EOA。</li><li><code>paymasterParams</code>是一个包含参数的字段，用于配置交易的自定义付款人。支付系统的地址和调用它的编码输入在支付系统参数中。</li><li><code>factory_deps</code>是一个字段，应该是一个非空的\`字节&#39;数组。对于部署交易，它应该包含被部署合约的字节码。如果被部署的合约是一个工厂合约，即它可以部署其他合约，该数组还应该包含可以被它部署的合约的字节码。</li></ul><p>为了让服务器识别EIP712交易，<code>transaction_type</code>字段等于<code>113</code>（不幸的是，数字<code>712</code>不能被用作<code>transaction_type</code>，因为类型必须是一个字节长）。</p><p>用户不签署RLP编码的交易，而是签署以下类型的EIP712结构。</p><table><thead><tr><th>Field name</th><th>Type</th></tr></thead><tbody><tr><td>txType</td><td><code>uint256</code></td></tr><tr><td>from</td><td><code>uint256</code></td></tr><tr><td>to</td><td><code>uint256</code></td></tr><tr><td>gasLimit</td><td><code>uint256</code></td></tr><tr><td>gasPerPubdataByteLimit</td><td><code>uint256</code></td></tr><tr><td>maxFeePerGas</td><td><code>uint256 </code></td></tr><tr><td>maxPriorityFeePerGas</td><td><code>uint256</code></td></tr><tr><td>paymaster</td><td><code>uint256</code></td></tr><tr><td>nonce</td><td><code>uint256</code></td></tr><tr><td>value</td><td><code>uint256</code></td></tr><tr><td>data</td><td><code>bytes</code></td></tr><tr><td>factoryDeps</td><td><code>bytes32[]</code></td></tr><tr><td>paymasterInput</td><td><code>bytes</code></td></tr></tbody></table>`,10),b=e("h2",{id:"zksync特定的json-rpc方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zksync特定的json-rpc方法","aria-hidden":"true"},"#"),n(" zkSync特定的JSON-RPC方法")],-1),f=e("p",null,[n("所有zkSync特定的方法都位于"),e("code",null,"zks_"),n("命名空间中。API也可以提供这里提供的方法之外的其他方法。这些方法将由团队内部使用，并且非常不稳定。")],-1),g=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,[n("请注意，Metamask不支持zks_命名空间的方法，我们正在努力在未来支持它，另外，你可以使用testnet RPC的"),e("code",null,"Provider"),n("类，而不是依赖Metamask的注入提供者。")])],-1),v=r(`<h3 id="zks-getmaincontract" tabindex="-1"><a class="header-anchor" href="#zks-getmaincontract" aria-hidden="true">#</a> <code>zks_getMainContract</code></h3><p>返回zkSync Era合约的地址。</p><h3 id="input-parameters" tabindex="-1"><a class="header-anchor" href="#input-parameters" aria-hidden="true">#</a> Input parameters</h3><p>None.</p><h3 id="output-format" tabindex="-1"><a class="header-anchor" href="#output-format" aria-hidden="true">#</a> Output format</h3><p><code>&quot;0xaBEA9132b05A70803a4E85094fD0e1800777fBEF&quot;</code></p><h3 id="zks-l1chainid" tabindex="-1"><a class="header-anchor" href="#zks-l1chainid" aria-hidden="true">#</a> <code>zks_L1ChainId</code></h3><p>返回底层L1的链ID。</p><h3 id="input-parameters-1" tabindex="-1"><a class="header-anchor" href="#input-parameters-1" aria-hidden="true">#</a> Input parameters</h3><p>None.</p><h3 id="output-format-1" tabindex="-1"><a class="header-anchor" href="#output-format-1" aria-hidden="true">#</a> Output format</h3><p><code>12</code></p><h3 id="zks-getconfirmedtokens" tabindex="-1"><a class="header-anchor" href="#zks-getconfirmedtokens" aria-hidden="true">#</a> <code>zks_getConfirmedTokens</code></h3><p>给定<code>from</code>和<code>limit</code>，返回ID在<code>[from...from+limit-1]</code>区间内的确认令牌的信息。&quot;确认 &quot;在这里是个错误的词，因为确认的令牌已经通过默认的zkSync Era桥接了。</p><p>代币是按照符号的字母顺序返回的，所以一个代币的id只是它在一个按照符号排序的代币数组中的位置。</p><h3 id="input-parameters-2" tabindex="-1"><a class="header-anchor" href="#input-parameters-2" aria-hidden="true">#</a> Input parameters</h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>from</td><td><code>uint32</code></td><td>The token id from which to start returning the information about the tokens.</td></tr><tr><td>limit</td><td><code>uint8</code></td><td>The number of tokens to be returned from the API.</td></tr></tbody></table><h3 id="output-format-2" tabindex="-1"><a class="header-anchor" href="#output-format-2" aria-hidden="true">#</a> Output format</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;decimals&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ETH&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;symbol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ETH&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xd2255612f9b045e9c81244bb874abb413ca139a3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;decimals&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TrueUSD&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;symbol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TUSD&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xd35cceead182dcee0f148ebac9447da2c4d449c4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;decimals&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USD Coin (goerli)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;symbol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USDC&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zks-getl2tol1logproof" tabindex="-1"><a class="header-anchor" href="#zks-getl2tol1logproof" aria-hidden="true">#</a> <code>zks_getL2ToL1LogProof</code></h3><p>给定一个交易哈希值，以及在该交易中产生的L2到L1日志的索引，它返回相应的L2到L1日志的证明。</p><p>可以从交易收据中获得的日志索引（它包括交易产生的每个日志的列表）。</p><h3 id="input-parameters-3" tabindex="-1"><a class="header-anchor" href="#input-parameters-3" aria-hidden="true">#</a> Input parameters</h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>tx_hash</td><td><code>bytes32</code></td><td>Hash of the L2 transaction the L2 to L1 log was produced within.</td></tr><tr><td>l2_to_l1_log_index</td><td><code>undefined</code> | <code>number</code></td><td>The Index of the L2 to L1 log in the transaction.</td></tr></tbody></table><h3 id="output-format-3" tabindex="-1"><a class="header-anchor" href="#output-format-3" aria-hidden="true">#</a> Output format</h3><p>如果没有这样的消息，返回值为<code>null</code>。</p><p>否则，将返回以下格式的对象。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proof&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;0x66687aadf862bd776c8fc18b8e9f8e20089714856ee233b3902a591d0d5f2925&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;0x2eeb74a6177f588d80c0c752b99556902ddf9682d0b906f5aa2adbaf8466a4e9&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;0x1223349a40d2ee10bd1bebb5889ef8018c8bc13359ed94b387810af96c6e4268&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;0x5b82b695a7ac2668e188b75f7d4fa79faa504117d1fdfcbe8a46915c1a8a5191&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x6a420705824f0a3a7e541994bc15e14e6a8991cd4e4b2d35c66f6e7647760d97&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>id</code>是该区块在L2-&gt;L1消息的Merkle树中的叶子的位置。<code>proof</code>是该信息的Merkle证明，而<code>root</code>是L2-&gt;L1信息的Merkle树的根。请注意，Merkle树使用_sha256_的树。</p><p>你不需要关心本征，因为返回的<code>id</code>和<code>proof</code>可以立即用于与zkSync Era智能合约的交互。</p><p>通过我们的SDK使用这个端点的一个很好的例子可以找到[这里]（.../dev/developer-guides/bridging/l2-l1.md）。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>事务产生的L2到L1的日志列表，包含在收据中，是由L1Messenger合约或其他系统合约/bootloader产生的日志的组合。</p><p>有一个由bootloader为每个L1起源的交易产生的日志，显示交易是否成功。</p></div><h3 id="zks-getl2tol1msgproof" tabindex="-1"><a class="header-anchor" href="#zks-getl2tol1msgproof" aria-hidden="true">#</a> <code>zks_getL2ToL1MsgProof</code></h3><p>给定一个区块、一个发件人、一个消息和一个包含L1-&gt;L2消息的区块中的可选消息日志索引，它返回通过L1Messenger系统合同发送的消息的证明。</p><h3 id="input-parameters-4" tabindex="-1"><a class="header-anchor" href="#input-parameters-4" aria-hidden="true">#</a> Input parameters</h3>`,35),q=e("thead",null,[e("tr",null,[e("th",null,"Parameter"),e("th",null,"Type"),e("th",null,"Description")])],-1),_=e("tr",null,[e("td",null,"block"),e("td",null,[e("code",null,"uint32")]),e("td",null,"The number of the block where the message was emitted.")],-1),y=e("tr",null,[e("td",null,"sender"),e("td",null,[e("code",null,"address")]),e("td",null,"The sender of the message (i.e. the account that called the L1Messenger system contract).")],-1),x=e("tr",null,[e("td",null,"msg"),e("td",null,[e("code",null,"bytes32")]),e("td",null,"The keccak256 hash of the sent message.")],-1),z=e("td",null,"l2_log_position",-1),T=e("td",null,[e("code",null,"uint256"),n(" | "),e("code",null,"null")],-1),L=r(`<h3 id="output-format-4" tabindex="-1"><a class="header-anchor" href="#output-format-4" aria-hidden="true">#</a> Output format</h3><p>与<a href="#zks-getl2tol1logproof">zks_getL2ToL1LogProof</a>中相同。</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p><code>zks_getL2ToL1MsgProof</code>端点将被废弃，因为L2到L1消息的证明也可以从<code>zks_getL2ToL1LogProof</code>获取。</p></div><h3 id="zks-getbridgecontracts" tabindex="-1"><a class="header-anchor" href="#zks-getbridgecontracts" aria-hidden="true">#</a> <code>zks_getBridgeContracts</code></h3><p>返回默认网桥的L1/L2地址。</p><h3 id="input-parameters-5" tabindex="-1"><a class="header-anchor" href="#input-parameters-5" aria-hidden="true">#</a> Input parameters</h3><p>None.</p><h3 id="output-format-5" tabindex="-1"><a class="header-anchor" href="#output-format-5" aria-hidden="true">#</a> Output format</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;l1Erc20DefaultBridge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x7786255495348c08f82c09c82352019fade3bf29&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;l1EthDefaultBridge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xcbebcd41ceabbc85da9bb67527f58d69ad4dfff5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;l2Erc20DefaultBridge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x92131f10c54f9b251a5deaf3c05815f7659bbe02&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;l2EthDefaultBridge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x2c5d8a991f399089f728f1ae40bd0b11acd0fb62&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zks-gettestnetpaymaster" tabindex="-1"><a class="header-anchor" href="#zks-gettestnetpaymaster" aria-hidden="true">#</a> <code>zks_getTestnetPaymaster</code></h3>`,10),P=r(`<h3 id="input-parameters-6" tabindex="-1"><a class="header-anchor" href="#input-parameters-6" aria-hidden="true">#</a> Input parameters</h3><p>None.</p><h3 id="output-format-6" tabindex="-1"><a class="header-anchor" href="#output-format-6" aria-hidden="true">#</a> Output format</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token string">&quot;0x7786255495348c08f82c09c82352019fade3bf29&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="zks-getblockdetails" tabindex="-1"><a class="header-anchor" href="#zks-getblockdetails" aria-hidden="true">#</a> <code>zks_getBlockDetails</code></h3><p>返回关于L2块的其他ZkSync特定信息。</p><h3 id="input-parameters-7" tabindex="-1"><a class="header-anchor" href="#input-parameters-7" aria-hidden="true">#</a> Input parameters</h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>block</td><td><code>uint32</code></td><td>The number of the block.</td></tr></tbody></table><h3 id="output-format-7" tabindex="-1"><a class="header-anchor" href="#output-format-7" aria-hidden="true">#</a> Output format</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;commitTxHash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x2c8f18312c6b6c2e72df56dd5684e3c65fcdf5f6141763eafdcbbfc02c3a39b5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;committedAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-12-12T08:41:50.774441Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;executeTxHash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xa12f3a9689101758acad280dd21a00cfc2644c125702ea301f46a33799cde9b9&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;executedAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-12-12T08:41:57.233941Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;l1TxCount&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;l2TxCount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proveTxHash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x0fed6d8a7b02a26b5513edea10d8849342b56a13c0e48317556c78b34aeacd26&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;provenAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-12-12T08:41:57.219584Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rootHash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x51f81bcdfc324a0dff2b5bec9d92e21cbebc4d5e29d3a3d30de3e03fbeab8d7f&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;verified&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1670834504</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),I=e("h2",{id:"pubsub-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pubsub-api","aria-hidden":"true"},"#"),n(" PubSub API")],-1),D={href:"https://geth.ethereum.org/docs/interacting-with-geth/rpc/pubsub",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"同步",-1),E=e("p",null,[n("WebSocket URL是"),e("code",null,"wss://zksync2-testnet.zksync.dev/ws"),n("。")],-1),w={class:"hint-container tip"},C=e("p",{class:"hint-container-title"},"Tips",-1),j=e("p",null,":::合约",-1);function B(A,O){const p=d("ExternalLinkIcon"),a=d("RouterLink");return i(),u("div",null,[h,e("p",null,[n("zkSync Era完全支持标准的"),e("a",m,[n("Ethereum JSON-RPC API"),t(p)]),n("，并增加了一些L2特有的功能。")]),k,e("p",null,[n("这些字段由我们的"),t(a,{to:"/api/js/features.html"},{default:s(()=>[n("SDK")]),_:1}),n("方便地处理。")]),b,f,g,o(` ### \`zks_estimateFee\`。

返回交易的费用。计算费用的令牌是根据提供的交易中的\`fee_token'返回的。

#### Input parameters

| Parameter | Type          | Description                                                  |
| --------- | ------------- | ------------------------------------------------------------ |
| req       | \`CallRequest\` | The zkSync transaction for which the fee should be estimated |

#### Output format

\`\`\`json
{
  "gas_limit": 100000000,
  "max_fee_per_gas": 10000,
  "max_priority_fee_per_gas": 100,
  "gas_per_pubdata_limit": 10
}
\`\`\` `),v,e("table",null,[q,e("tbody",null,[_,y,x,e("tr",null,[z,T,e("td",null,[n("The index in the block of the event that was emitted by the "),t(a,{to:"/dev/developer-guides/system-contracts.html#l1messenger"},{default:s(()=>[n("L1Messenger")]),_:1}),n(" when submitting this message. If it is omitted, the proof for the first message with such content will be returned.")])])])]),L,e("p",null,[n("返回"),t(a,{to:"/api/.../dev/developer-guides/aa.html#testnet-paymaster"},{default:s(()=>[n("testnet paymaster")]),_:1}),n("的地址：在testnets上可用的paymaster，可以用ERC-20兼容代币支付费用。")]),P,o(" TODO: uncomment once fixed -"),o(` ### \`zks_getTokenPrice\`

给定一个代币地址，返回它的价格（美元）。请注意，这是zkSync团队使用的价格，可能与当前的市场价格有一些不同。在测试网络上，代币价格可能与实际市场价格有很大差异。

### Input parameters

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| address   | \`address\` | The address of the token. |

### Output format

\`3500.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\` `),o(`

#[rpc(name = "zks_getConfirmedTokens", returns = "Vec<Token>")]
fn get_confirmed_tokens(&self, from: u32, limit: u8) -> BoxFutureResult<Vec<Token>>;

#[rpc(name = "zks_isTokenLiquid", returns = "bool")]
fn is_token_liquid(&self, token_address: Address) -> BoxFutureResult<bool>;

#[rpc(name = "zks_getTokenPrice", returns = "BigDecimal")]
fn get_token_price(&self, token_address: Address) -> BoxFutureResult<BigDecimal>;

#[rpc(name = "zks_setContractDebugInfo", returns = "bool")]
fn set_contract_debug_info(
    &self,
    contract_address: Address,
    info: ContractSourceDebugInfo,
) -> BoxFutureResult<bool>;

#[rpc(name = "zks_getContractDebugInfo", returns = "ContractSourceDebugInfo")]
fn get_contract_debug_info(
    &self,
    contract_address: Address,
) -> BoxFutureResult<Option<ContractSourceDebugInfo>>;

#[rpc(name = "zks_getTransactionTrace", returns = "Option<VmDebugTrace>")]
fn get_transaction_trace(&self, hash: H256) -> BoxFutureResult<Option<VmDebugTrace>>;





Documented:
#[rpc(name = "zks_estimateFee", returns = "Fee")]
fn estimate_fee(&self, req: CallRequest) -> BoxFutureResult<Fee>;

#[rpc(name = "zks_getMainContract", returns = "Address")]
fn get_main_contract(&self) -> BoxFutureResult<Address>;

#[rpc(name = "zks_L1ChainId", returns = "U64")]
fn l1_chain_id(&self) -> Result<U64>;

#[rpc(name = "zks_getL1WithdrawalTx", returns = "Option<H256>")]
fn get_eth_withdrawal_tx(&self, withdrawal_hash: H256) -> BoxFutureResult<Option<H256>>;



不想记录（至少现在是这样）:

### \`zks_getAccountTransactions\`

### Input parameters

| Parameter | Type      | Description                                           |
| --------- | --------- | ----------------------------------------------------- |
| address   | \`Address\` | The address of the account                            |
| before    | \`u32\`     | The offset from which to start returning transactions |
| limit     | \`u8\`      | The maximum number of transactions to be returned     |





`),I,e("p",null,[n("zkSync与"),e("a",D,[n("Geth的pubsub API"),t(p)]),n("完全兼容，除了"),S,n("的订阅。这是因为zkSync网络上的节点在技术上总是同步的。")]),E,e("div",w,[C,e("p",null,[n("你可以使用websocket端点来处理智能合约事件，如"),t(a,{to:"/api/.../dev/building-on-zksync/events.html"},{default:s(()=>[n("本节文档")]),_:1}),n("所详述。")]),j])])}const F=c(l,[["render",B],["__file","api.html.vue"]]);export{F as default};
