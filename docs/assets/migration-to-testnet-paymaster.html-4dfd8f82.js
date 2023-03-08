import{_ as p,W as o,X as c,Z as s,$ as a,a0 as t,a2 as e,Y as i,D as l}from"./framework-674379d2.js";const r={},u=s("h1",{id:"迁移到测试网的支付系统",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#迁移到测试网的支付系统","aria-hidden":"true"},"#"),a(" 迁移到测试网的支付系统")],-1),d=s("h2",{id:"前提条件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前提条件","aria-hidden":"true"},"#"),a(" 前提条件")],-1),k=i(`<p>为了支持生态系统，zkSync不打算在主网上部署任何支付系统。然而，考虑到更好的DevEx，我们已经在testnet上部署了一个。testnet paymaster可以用ERC-20兼容的代币以1：1的汇率支付费用。你可以阅读文档[这里]（.../developer-guides/aa.md#testnet-paymaster）。在本节中，我们展示了一个关于从使用ERC20代币支付费用的旧方式迁移到新方式的简要例子。</p><p>本文件仅涉及testnet paymaster_only。当你在主网上部署你的项目时，你将需要部署你的支付系统或找到第三方的支付系统并阅读其文档。</p><h2 id="以前的界面" tabindex="-1"><a class="header-anchor" href="#以前的界面" aria-hidden="true">#</a> 以前的界面</h2><p>在以前的testnet版本中，你在交易的重写中提供了\`feeToken&#39;，所以一个以USDC支付费用的智能合约调用，比如说，看起来大致是这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> tx <span class="token operator">=</span> <span class="token keyword">await</span> contract<span class="token punctuation">.</span><span class="token function">callMethod</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">customData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">feeToken</span><span class="token operator">:</span> <span class="token constant">USDC_ADDRESS</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用testnet-paymaster" tabindex="-1"><a class="header-anchor" href="#使用testnet-paymaster" aria-hidden="true">#</a> 使用testnet paymaster</h2><p>使用testnet paymaster的工作包括三个步骤。</p><ol><li>检索testnet paymaster的地址。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> testnetPaymaster <span class="token operator">=</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getTestnetPaymasterAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：不建议缓存付款人的地址，因为它可能在没有警告的情况下改变。</p><ol start="2"><li>对交易中使用的付款人参数进行编码。为此，你可以使用<code>utils.getPaymasterParams</code>方法。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utils <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zksync-web3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> paymasterParams <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">getPaymasterParams</span><span class="token punctuation">(</span>testnetPaymaster<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;ApprovalBased&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token constant">USDC_ADDRESS</span><span class="token punctuation">,</span>
  <span class="token comment">// Note, that the allowance for the testnet paymaster must be</span>
  <span class="token comment">// at least maxFeePerErg * gasLimit, where maxFeePerErg and gasLimit</span>
  <span class="token comment">// are parameters used in the transaction.</span>
  <span class="token literal-property property">minimalAllowance</span><span class="token operator">:</span> maxFeePerErg<span class="token punctuation">.</span><span class="token function">mul</span><span class="token punctuation">(</span>gasLimit<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">innerInput</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>用所提供的paymaster参数发送交易。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> tx <span class="token operator">=</span> <span class="token keyword">await</span> contract<span class="token punctuation">.</span><span class="token function">callMethod</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">customData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    paymasterParams<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(v,y){const n=l("RouterLink");return o(),c("div",null,[u,d,s("p",null,[a("在进入本节之前，请确保你已经阅读了关于 "),t(n,{to:"/dev/testnet/developer-guides/aa.html#paymasters"},{default:e(()=>[a("paymasters")]),_:1}),a("。")]),s("p",null,[a("虽然zkSync Era Testnet之前的迭代原生支持以不同的代币支付费用，但它引起了一些与以太坊生态系统的兼容性问题。随着"),t(n,{to:"/dev/testnet/.../developer-guides/aa.html#paymasters"},{default:e(()=>[a("paymasters")]),_:1}),a("的出现，这个功能已经变得多余了，因为现在任何人都可以部署他们的paymaster智能合约，将ERC-20代币换成ETH。你可以阅读关于部署自定义paymasters的教程[这里]（.../tutorials/custom-paymaster-tutorial.md）。")]),k])}const b=p(r,[["render",m],["__file","migration-to-testnet-paymaster.html.vue"]]);export{b as default};