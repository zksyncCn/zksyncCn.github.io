import{_ as e,W as p,X as o,Z as n,$ as s,a0 as c,Y as a,D as i}from"./framework-674379d2.js";const l={},u=n("h1",{id:"提供者",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#提供者","aria-hidden":"true"},"#"),s(" 提供者")],-1),r=n("code",null,"web3",-1),d={href:"https://openbase.com/swift/web3swift/documentation",target:"_blank",rel:"noopener noreferrer"},k=a("<p>zkSync完全支持Ethereum Web3 API，所以你可以使用web3swift的提供者对象。然而，zkSync API提供了一些额外的JSON-RPC方法，这些方法允许。</p><ul><li>轻松地跟踪L1&lt;-&gt;L2交易。</li><li>交易的不同阶段的最终结果。默认情况下，我们的RPC会返回服务器处理的最后一个状态的信息，但有些用例可能只需要跟踪 &quot;最终完成 &quot;的交易。</li></ul><p>zkSync swift SDK导出了<code>EthereumProvider</code>提供者。</p><ul><li><code>EthereumProvider</code>继承自<code>web3swift``JsonRpcProvider</code>提供对所有zkSync JSON-RPC端点的访问。</li></ul>",4),v=a(`<h2 id="ethereumprovider" tabindex="-1"><a class="header-anchor" href="#ethereumprovider" aria-hidden="true">#</a> EthereumProvider</h2><p>这提供了与<code>web3swift.providers.JsonRpcProvider</code>相同的功能，但用zkSync特定的方法对其进行了扩展。</p><h3 id="创建提供者" tabindex="-1"><a class="header-anchor" href="#创建提供者" aria-hidden="true">#</a> 创建提供者</h3><p>它接受操作员节点的<code>URL</code>和<code>网络</code>名称以及<code>keystoreManager</code>。</p><h4 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h4><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>url (optional)</td><td>URL of the zkSync operator node.</td></tr><tr><td>network (optional)</td><td>The description of the network.</td></tr><tr><td>keystoreManager (optional)</td><td>The public key certificates.</td></tr><tr><td>returns</td><td><code>Provider</code> object.</td></tr></tbody></table><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code>
 <span class="token keyword">public</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> httpProviderURL<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">,</span> network net<span class="token punctuation">:</span> <span class="token class-name">Networks</span><span class="token operator">?</span><span class="token punctuation">,</span> keystoreManager manager<span class="token punctuation">:</span> <span class="token class-name">KeystoreManager</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-gas-price" tabindex="-1"><a class="header-anchor" href="#get-gas-price" aria-hidden="true">#</a> Get gas price</h2><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">gasPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">BigUInt</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">try</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">getGasPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="approve-deposits" tabindex="-1"><a class="header-anchor" href="#approve-deposits" aria-hidden="true">#</a> Approve deposits</h2><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code>
<span class="token keyword">func</span> <span class="token function-definition function">approveDeposits</span><span class="token punctuation">(</span>with token<span class="token punctuation">:</span> <span class="token class-name">Token</span><span class="token punctuation">,</span>
                         limit<span class="token punctuation">:</span> <span class="token class-name">BigUInt</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token class-name">TransactionSendingResult</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> tokenAddress <span class="token operator">=</span> <span class="token class-name">EthereumAddress</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>l1Address<span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token keyword">let</span> spenderAddress <span class="token operator">=</span> <span class="token class-name">EthereumAddress</span><span class="token punctuation">(</span>l1ERC20BridgeAddress<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token class-name">EthereumProviderError</span><span class="token punctuation">.</span>invalidToken
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> tokenContract <span class="token operator">=</span> <span class="token function">ERC20</span><span class="token punctuation">(</span>web3<span class="token punctuation">:</span> web3<span class="token punctuation">,</span>
                                  provider<span class="token punctuation">:</span> web3<span class="token punctuation">.</span>provider<span class="token punctuation">,</span>
                                  address<span class="token punctuation">:</span> tokenAddress<span class="token punctuation">)</span>

        <span class="token keyword">let</span> maxApproveAmount <span class="token operator">=</span> <span class="token class-name">BigUInt</span><span class="token punctuation">.</span>two<span class="token punctuation">.</span><span class="token function">power</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">let</span> amount <span class="token operator">=</span> limit<span class="token operator">?</span><span class="token punctuation">.</span>description <span class="token operator">??</span> maxApproveAmount<span class="token punctuation">.</span>description

        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> transaction <span class="token operator">=</span> <span class="token keyword">try</span> tokenContract<span class="token punctuation">.</span><span class="token function">approve</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> spenderAddress<span class="token punctuation">,</span>
                                                        spender<span class="token punctuation">:</span> spenderAddress<span class="token punctuation">,</span>
                                                        amount<span class="token punctuation">:</span> amount<span class="token punctuation">)</span>
            <span class="token keyword">return</span> transaction<span class="token punctuation">.</span><span class="token function">sendPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>error<span class="token punctuation">:</span> error<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transfer" tabindex="-1"><a class="header-anchor" href="#transfer" aria-hidden="true">#</a> Transfer</h2><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">transfer</span><span class="token punctuation">(</span>with token<span class="token punctuation">:</span> <span class="token class-name">Token</span><span class="token punctuation">,</span>
                  amount<span class="token punctuation">:</span> <span class="token class-name">BigUInt</span><span class="token punctuation">,</span>
                  to address<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token class-name">TransactionSendingResult</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> transaction<span class="token punctuation">:</span> <span class="token class-name">WriteTransaction</span>
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> token<span class="token punctuation">.</span>isETH <span class="token punctuation">{</span>
                transaction <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token function">transferEth</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> amount<span class="token punctuation">,</span>
                                              to<span class="token punctuation">:</span> address<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                transaction <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token function">transferERC20</span><span class="token punctuation">(</span>token<span class="token punctuation">:</span> token<span class="token punctuation">,</span>
                                                amount<span class="token punctuation">:</span> amount<span class="token punctuation">,</span>
                                                to<span class="token punctuation">:</span> address<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> transaction<span class="token punctuation">.</span><span class="token function">sendPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>error<span class="token punctuation">:</span> error<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transfer-eth" tabindex="-1"><a class="header-anchor" href="#transfer-eth" aria-hidden="true">#</a> Transfer ETH</h2><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">transferEth</span><span class="token punctuation">(</span>amount<span class="token punctuation">:</span> <span class="token class-name">BigUInt</span><span class="token punctuation">,</span>
                     to address<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">WriteTransaction</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> fromAddress <span class="token operator">=</span> <span class="token class-name">EthereumAddress</span><span class="token punctuation">(</span>l1ERC20BridgeAddress<span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token keyword">let</span> toAddress <span class="token operator">=</span> <span class="token class-name">EthereumAddress</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token class-name">EthereumProviderError</span><span class="token punctuation">.</span>invalidAddress
        <span class="token punctuation">}</span>

        <span class="token keyword">guard</span> <span class="token keyword">let</span> transaction <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">sendETH</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> fromAddress<span class="token punctuation">,</span>
                                                 to<span class="token punctuation">:</span> toAddress<span class="token punctuation">,</span>
                                                 amount<span class="token punctuation">:</span> amount<span class="token punctuation">.</span>description<span class="token punctuation">,</span>
                                                 units<span class="token punctuation">:</span> <span class="token punctuation">.</span>wei<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token class-name">EthereumProviderError</span><span class="token punctuation">.</span>internalError
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> transaction
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transfer-erc20-tokens" tabindex="-1"><a class="header-anchor" href="#transfer-erc20-tokens" aria-hidden="true">#</a> Transfer ERC20 tokens</h2><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code>
<span class="token keyword">func</span> <span class="token function-definition function">transferERC20</span><span class="token punctuation">(</span>token<span class="token punctuation">:</span> <span class="token class-name">Token</span><span class="token punctuation">,</span>
                       amount<span class="token punctuation">:</span> <span class="token class-name">BigUInt</span><span class="token punctuation">,</span>
                       to address<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">WriteTransaction</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> fromAddress <span class="token operator">=</span> <span class="token class-name">EthereumAddress</span><span class="token punctuation">(</span>l1ERC20BridgeAddress<span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token keyword">let</span> toAddress <span class="token operator">=</span> <span class="token class-name">EthereumAddress</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token keyword">let</span> erc20ContractAddress <span class="token operator">=</span> <span class="token class-name">EthereumAddress</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>l1Address<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token class-name">EthereumProviderError</span><span class="token punctuation">.</span>invalidToken
        <span class="token punctuation">}</span>

        <span class="token keyword">guard</span> <span class="token keyword">let</span> transaction <span class="token operator">=</span> web3<span class="token punctuation">.</span>eth<span class="token punctuation">.</span><span class="token function">sendERC20tokensWithKnownDecimals</span><span class="token punctuation">(</span>tokenAddress<span class="token punctuation">:</span> erc20ContractAddress<span class="token punctuation">,</span>
                                                                          from<span class="token punctuation">:</span> fromAddress<span class="token punctuation">,</span>
                                                                          to<span class="token punctuation">:</span> toAddress<span class="token punctuation">,</span>
                                                                          amount<span class="token punctuation">:</span> amount<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token class-name">EthereumProviderError</span><span class="token punctuation">.</span>internalError
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> transaction
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deposits" tabindex="-1"><a class="header-anchor" href="#deposits" aria-hidden="true">#</a> Deposits</h2><div class="language-swift line-numbers-mode" data-ext="swift"><pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">deposit</span><span class="token punctuation">(</span>with token<span class="token punctuation">:</span> <span class="token class-name">Token</span><span class="token punctuation">,</span>
                 amount<span class="token punctuation">:</span> <span class="token class-name">BigUInt</span><span class="token punctuation">,</span>
                 to userAddress<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token class-name">TransactionSendingResult</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> userAddress <span class="token operator">=</span> <span class="token class-name">EthereumAddress</span><span class="token punctuation">(</span>userAddress<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>error<span class="token punctuation">:</span> <span class="token class-name">EthereumProviderError</span><span class="token punctuation">.</span>invalidAddress<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> token<span class="token punctuation">.</span>isETH <span class="token punctuation">{</span>
            <span class="token keyword">let</span> depositInputs <span class="token operator">=</span> <span class="token punctuation">[</span>
                <span class="token constant">ABI</span><span class="token punctuation">.</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token class-name">InOut</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;_l2Receiver&quot;</span></span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token constant">ABI</span><span class="token punctuation">.</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token class-name">InOut</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;_l1Token&quot;</span></span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token constant">ABI</span><span class="token punctuation">.</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token class-name">InOut</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;_amount&quot;</span></span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">uint</span><span class="token punctuation">(</span>bits<span class="token punctuation">:</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span>

            <span class="token keyword">let</span> depositFunction<span class="token punctuation">:</span> <span class="token constant">ABI</span><span class="token punctuation">.</span><span class="token class-name">Element</span> <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token function">function</span><span class="token punctuation">(</span><span class="token constant">ABI</span><span class="token punctuation">.</span><span class="token class-name">Element</span><span class="token punctuation">.</span><span class="token class-name">Function</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;deposit&quot;</span></span><span class="token punctuation">,</span>
                                                                              inputs<span class="token punctuation">:</span> depositInputs<span class="token punctuation">,</span>
                                                                              outputs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                                              constant<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                                                                              payable<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

            <span class="token keyword">let</span> depositParameters<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">AnyObject</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
                userAddress<span class="token punctuation">,</span>
                <span class="token class-name">EthereumAddress</span><span class="token punctuation">.</span><span class="token class-name">Default</span><span class="token punctuation">,</span>
                amount
            <span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token punctuation">[</span><span class="token class-name">AnyObject</span><span class="token punctuation">]</span>

            <span class="token keyword">guard</span> <span class="token keyword">let</span> encodedFunction <span class="token operator">=</span> depositFunction<span class="token punctuation">.</span><span class="token function">encodeParameters</span><span class="token punctuation">(</span>depositParameters<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Encoded deposit function should be valid&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function m(b,w){const t=i("ExternalLinkIcon");return p(),o("div",null,[u,n("ul",null,[n("li",null,[n("p",null,[s("提供者是包裹与zkSync节点的交互的对象。如果你对"),r,s("中的提供者的概念感到陌生，你应该看看他们的文档"),n("a",d,[s("这里"),c(t)]),s("。")]),k])]),v])}const f=e(l,[["render",m],["__file","providers.html.vue"]]);export{f as default};
