import{_ as n,W as s,X as a,Y as t}from"./framework-674379d2.js";const p={},e=t(`<h1 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h1><p>所有在SDK中使用的类型都在这里被引用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> dataclasses <span class="token keyword">import</span> dataclass
<span class="token keyword">from</span> decimal <span class="token keyword">import</span> Decimal
<span class="token keyword">from</span> eth_typing <span class="token keyword">import</span> HexStr<span class="token punctuation">,</span> Hash32
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Union<span class="token punctuation">,</span> NewType<span class="token punctuation">,</span> Dict<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Any
<span class="token keyword">from</span> hexbytes <span class="token keyword">import</span> HexBytes
<span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum

ADDRESS_DEFAULT <span class="token operator">=</span> HexStr<span class="token punctuation">(</span><span class="token string">&quot;0x&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;0&quot;</span> <span class="token operator">*</span> <span class="token number">40</span><span class="token punctuation">)</span>

TokenAddress <span class="token operator">=</span> NewType<span class="token punctuation">(</span><span class="token string">&#39;token_address&#39;</span><span class="token punctuation">,</span> HexStr<span class="token punctuation">)</span>
TransactionHash <span class="token operator">=</span> Union<span class="token punctuation">[</span>Hash32<span class="token punctuation">,</span> HexBytes<span class="token punctuation">,</span> HexStr<span class="token punctuation">]</span>
L2WithdrawTxHash <span class="token operator">=</span> Union<span class="token punctuation">[</span>Hash32<span class="token punctuation">,</span> HexBytes<span class="token punctuation">,</span> HexStr<span class="token punctuation">]</span>
From <span class="token operator">=</span> NewType<span class="token punctuation">(</span><span class="token string">&quot;from&quot;</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
Limit <span class="token operator">=</span> NewType<span class="token punctuation">(</span><span class="token string">&#39;limit&#39;</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">ZkBlockParams</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    COMMITTED <span class="token operator">=</span> <span class="token string">&quot;committed&quot;</span>
    FINALIZED <span class="token operator">=</span> <span class="token string">&quot;finalized&quot;</span>


<span class="token keyword">class</span> <span class="token class-name">EthBlockParams</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    PENDING <span class="token operator">=</span> <span class="token string">&quot;pending&quot;</span>
    LATEST <span class="token operator">=</span> <span class="token string">&quot;latest&quot;</span>


<span class="token decorator annotation punctuation">@dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">Token</span><span class="token punctuation">:</span>
    l1_address<span class="token punctuation">:</span> HexStr
    l2_address<span class="token punctuation">:</span> HexStr
    symbol<span class="token punctuation">:</span> <span class="token builtin">str</span>
    decimals<span class="token punctuation">:</span> <span class="token builtin">int</span>

    <span class="token keyword">def</span> <span class="token function">format_token</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> amount<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>Decimal<span class="token punctuation">(</span>amount<span class="token punctuation">)</span> <span class="token operator">/</span> Decimal<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">**</span> self<span class="token punctuation">.</span>decimals<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">is_eth</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>l1_address <span class="token operator">==</span> ADDRESS_DEFAULT <span class="token keyword">and</span> self<span class="token punctuation">.</span>symbol <span class="token operator">==</span> <span class="token string">&quot;ETH&quot;</span>

    <span class="token keyword">def</span> <span class="token function">into_decimal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> amount<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Decimal<span class="token punctuation">:</span>
        <span class="token keyword">return</span> Decimal<span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">.</span>scaleb<span class="token punctuation">(</span>self<span class="token punctuation">.</span>decimals<span class="token punctuation">)</span> <span class="token operator">//</span> Decimal<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">**</span> self<span class="token punctuation">.</span>decimals

    <span class="token keyword">def</span> <span class="token function">to_int</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> amount<span class="token punctuation">:</span> Union<span class="token punctuation">[</span>Decimal<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>amount<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            amount <span class="token operator">=</span> Decimal<span class="token punctuation">(</span>amount<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>amount <span class="token operator">*</span> <span class="token punctuation">(</span>Decimal<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">**</span> self<span class="token punctuation">.</span>decimals<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">create_eth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token string">&#39;Token&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> Token<span class="token punctuation">(</span>ADDRESS_DEFAULT<span class="token punctuation">,</span> ADDRESS_DEFAULT<span class="token punctuation">,</span> <span class="token string">&quot;ETH&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">Fee</span><span class="token punctuation">:</span>
    gas_limit<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    max_fee_per_erg<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    max_priority_fee_per_erg <span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    gas_per_pub_data_limit<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>


<span class="token decorator annotation punctuation">@dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">BridgeAddresses</span><span class="token punctuation">:</span>
    l1_eth_default_bridge<span class="token punctuation">:</span> HexStr
    l2_eth_default_bridge<span class="token punctuation">:</span> HexStr
    l1_erc20_default_bridge<span class="token punctuation">:</span> HexStr
    l2_erc20_default_bridge<span class="token punctuation">:</span> HexStr


<span class="token decorator annotation punctuation">@dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">PaymasterParams</span><span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    paymaster<span class="token punctuation">:</span> HexStr
    paymaster_input<span class="token punctuation">:</span> <span class="token builtin">bytes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","types.html.vue"]]);export{r as default};
