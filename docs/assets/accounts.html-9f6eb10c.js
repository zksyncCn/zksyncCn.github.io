import{_ as n,W as t,X as a,Y as e}from"./framework-674379d2.js";const s={},o=e(`<h1 id="账户-概述" tabindex="-1"><a class="header-anchor" href="#账户-概述" aria-hidden="true">#</a> 账户：概述</h1><p>zkSync Python SDK，有一些方法来生成签名和验证信息。</p><p><code>sign_typed_data</code>：用于签署EIP712类型的zkSync交易。 <code>verify_typed_data</code>：用于验证签名的EIP712类型的zkSync事务。</p><p><strong>构建</strong></p><p>为了构建实例，它只需要<code>account</code>和<code>chain_id</code>。</p><blockquote><p>Example:</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> zksync2<span class="token punctuation">.</span>signer<span class="token punctuation">.</span>eth_signer <span class="token keyword">import</span> PrivateKeyEthSigner
<span class="token keyword">from</span> eth_account <span class="token keyword">import</span> Account
<span class="token keyword">from</span> zksync2<span class="token punctuation">.</span>module<span class="token punctuation">.</span>module_builder <span class="token keyword">import</span> ZkSyncBuilder


account <span class="token operator">=</span> Account<span class="token punctuation">.</span>from_key<span class="token punctuation">(</span><span class="token string">&quot;PRIVATE_KEY&quot;</span><span class="token punctuation">)</span>
zksync_web3 <span class="token operator">=</span> ZkSyncBuilder<span class="token punctuation">.</span>build<span class="token punctuation">(</span><span class="token string">&quot;ZKSYNC_NETWORK_URL&quot;</span><span class="token punctuation">)</span>

chain_id <span class="token operator">=</span> zksync_web3<span class="token punctuation">.</span>zksync<span class="token punctuation">.</span>chain_id
signer <span class="token operator">=</span> PrivateKeyEthSigner<span class="token punctuation">(</span>account<span class="token punctuation">,</span> chain_id<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sign-typed-data" tabindex="-1"><a class="header-anchor" href="#sign-typed-data" aria-hidden="true">#</a> sign_typed_data</h2><p>签名者用于根据你的账户（你的私钥）生成所提供交易的签名。</p><p><strong>Parameters</strong></p><table><thead><tr><th>Parameters</th><th>Return value</th><th>Description</th></tr></thead><tbody><tr><td>EIP712 Structure, optional domain</td><td>Web3 py SignedMessage</td><td>Builds <code>SignedMessage</code> based on the encoded in <code>EIP712</code> format Transaction.</td></tr></tbody></table><h2 id="verify-typed-data" tabindex="-1"><a class="header-anchor" href="#verify-typed-data" aria-hidden="true">#</a> verify_typed_data</h2><p>它被用来验证所提供的交易，其签名被添加到最终的<code>EIP712</code>交易中进行验证。</p><p><strong>Parameters</strong></p><table><thead><tr><th>Parameters</th><th>Return value</th><th>Description</th></tr></thead><tbody><tr><td>signature, EIP712 structure, optional domain</td><td>bool</td><td>Returns <strong>True</strong> if the encoded transaction is signed with provided signature.</td></tr></tbody></table><p>签名者类也有以下属性。</p><table><thead><tr><th>Attribute</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>Account address</td></tr><tr><td>domain</td><td>Domain that is used to generate signature. It&#39;s depends on <code>chain_id</code> of network.</td></tr></tbody></table>`,17),d=[o];function c(i,r){return t(),a("div",null,d)}const u=n(s,[["render",c],["__file","accounts.html.vue"]]);export{u as default};