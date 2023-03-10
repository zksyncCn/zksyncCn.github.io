import{_ as o,W as c,X as i,Z as a,$ as n,a0 as s,a2 as r,Y as l,D as e}from"./framework-674379d2.js";const u={},d=a("h1",{id:"hardhat-zksync-chai-matchers",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#hardhat-zksync-chai-matchers","aria-hidden":"true"},"#"),n(),a("code",null,"hardhat-zksync-chai-matchers")],-1),k={href:"https://www.chaijs.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://hardhat.org/hardhat-chai-matchers/docs/overview",target:"_blank",rel:"noopener noreferrer"},v=a("strong",null,[a("em",null,"NOTE:")],-1),m={href:"https://hardhat.org/hardhat-chai-matchers/docs/overview",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>用以下命令将该插件的最新版本添加到你的项目中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Yarn
yarn add -D @matterlabs/hardhat-zksync-chai-matchers @nomicfoundation/hardhat-chai-matchers chai @nomiclabs/hardhat-ethers ethers

# Npm (version 7 or later is recommended)
npm i -D @matterlabs/hardhat-zksync-chai-matchers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>安装后，将该插件添加到你的Hardhat配置中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-chai-matchers&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you&#39;ll be able to use the matchers in your tests.</p><h4 id="changeetherbalance" tabindex="-1"><a class="header-anchor" href="#changeetherbalance" aria-hidden="true">#</a> changeEtherBalance</h4><p>断言一个地址的余额改变了一个特定的数量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  sender<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span> receiver<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">changeEtherBalance</span><span class="token punctuation">(</span>sender<span class="token punctuation">.</span>address<span class="token punctuation">,</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token string">&quot;-2000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  sender<span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span> receiver<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">changeEtherBalance</span><span class="token punctuation">(</span>sender<span class="token punctuation">.</span>address<span class="token punctuation">,</span> <span class="token string">&quot;-1000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种匹配器包括额外的选项参数，包括收费和覆盖交易的功能。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>overrides <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxFeePerGas</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">*</span> gasPrice<span class="token punctuation">,</span>
  <span class="token literal-property property">maxPriorityFeePerGas</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">*</span> gasPrice<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  sender<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">to</span><span class="token operator">:</span> receiver<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
    overrides<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">changeEtherBalance</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">(</span>txGasFees <span class="token operator">+</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">balanceChangeOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">includeFee</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  overrides<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="changetokenbalance" tabindex="-1"><a class="header-anchor" href="#changetokenbalance" aria-hidden="true">#</a> changeTokenBalance</h4><p>断言一个地址的ERC20代币余额改变了一个特定的数额。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>sender<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">to</span><span class="token operator">:</span> receiver<span class="token punctuation">.</span>address<span class="token punctuation">,</span> <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">token</span><span class="token operator">:</span> token<span class="token punctuation">.</span>address <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">changeTokenBalance</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> sender<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>receiver<span class="token punctuation">.</span>address<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">changeTokenBalance</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> sender<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reverted" tabindex="-1"><a class="header-anchor" href="#reverted" aria-hidden="true">#</a> reverted</h4><p>断言一项交易因任何原因而恢复。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>contract<span class="token punctuation">.</span><span class="token function">setAmount</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span>reverted<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="revertedwithcustomerror" tabindex="-1"><a class="header-anchor" href="#revertedwithcustomerror" aria-hidden="true">#</a> revertedWithCustomError</h4><p>断言一个交易因一个特定的自定义错误而被恢复。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>contract<span class="token punctuation">.</span><span class="token function">setAmount</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token function">revertedWithCustomError</span><span class="token punctuation">(</span>contract<span class="token punctuation">,</span> <span class="token string">&quot;InvalidAmount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p>而你也可以使用常规的匹配器，如。</p><h4 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>contract<span class="token punctuation">.</span><span class="token function">setAmount</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>contract<span class="token punctuation">,</span> <span class="token string">&quot;AmountUpdated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="properaddress" tabindex="-1"><a class="header-anchor" href="#properaddress" aria-hidden="true">#</a> properAddress</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;0x36615Cf349d7F6344891B1e7CA7C72883F5dc049&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span>properAddress<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="comparisons-of-numbers" tabindex="-1"><a class="header-anchor" href="#comparisons-of-numbers" aria-hidden="true">#</a> Comparisons of numbers</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> contract<span class="token punctuation">.</span><span class="token function">getAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),g={href:"https://hardhat.org/hardhat-chai-matchers/docs/overview#why-would-i-want-to-use-it?",target:"_blank",rel:"noopener noreferrer"},f={href:"https://hardhat.org/hardhat-chai-matchers/docs/overview",target:"_blank",rel:"noopener noreferrer"},y={href:"https://hardhat.org/hardhat-chai-matchers/docs/reference",target:"_blank",rel:"noopener noreferrer"};function x(_,w){const t=e("ExternalLinkIcon"),p=e("RouterLink");return c(),i("div",null,[d,a("p",null,[n("这个插件为"),a("a",k,[n("Chai"),s(t)]),n("断言库增加了zkSync的特定功能，用于测试智能合约。它扩展了"),a("a",h,[n("hardhat-chai-matchers"),s(t)]),n("插件所支持的所有功能，其理念是保留相同的行为和接口。 目前，它是与"),s(p,{to:"/api/hardhat/testing.html"},{default:r(()=>[n("本地测试环境")]),_:1}),n("结合使用的。")]),a("blockquote",null,[a("p",null,[v,n(" 由于恢复的事务的响应高度依赖于RPC的实现，所有"),a("a",m,[n("hardhat"),s(t)]),n("以revert开头的chai匹配器都受到了影响（但chai匹配器接口没有任何变化）。此外，来自changeEtherBalance/changeEtherBalances的options参数已经扩展了overrides字段，以便支持带有overrides的zksync-web3传输方法。")])]),b,a("p",null,[n("查看使用chai匹配器的优势"),a("a",g,[n("这里"),s(t)]),n("。由于所有支持的chai匹配器的列表与"),a("a",f,[n("hardhat-chai-matchers"),s(t)]),n("插件相同，请查看"),a("a",y,[n("参考文档"),s(t)]),n("。")])])}const q=o(u,[["render",x],["__file","hardhat-zksync-chai-matchers.html.vue"]]);export{q as default};