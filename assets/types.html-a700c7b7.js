import{_ as s,W as a,X as e,a1 as p,Z as n,$ as t,Y as o}from"./framework-674379d2.js";const l={},i=n("h1",{id:"类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#类型","aria-hidden":"true"},"#"),t(" 类型")],-1),c=n("p",null,"这里引用了SDK中使用的所有类型。",-1),r=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BytesLike<span class="token punctuation">,</span> BigNumberish<span class="token punctuation">,</span> providers<span class="token punctuation">,</span> BigNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ethers&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockWithTransactions <span class="token keyword">as</span> EthersBlockWithTransactions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ethersproject/abstract-provider&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 0x-prefixed, hex encoded, ethereum account address</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Address</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token comment">// 0x-prefixed, hex encoded, ECDSA signature.</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Signature</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token comment">// Ethereum network</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> Network <span class="token punctuation">{</span>
    Mainnet <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Ropsten <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
    Rinkeby <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>
    Goerli <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
    Localhost <span class="token operator">=</span> <span class="token number">9</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> TransactionStatus <span class="token punctuation">{</span>
    NotFound <span class="token operator">=</span> <span class="token string">&#39;not-found&#39;</span><span class="token punctuation">,</span>
    Processing <span class="token operator">=</span> <span class="token string">&#39;processing&#39;</span><span class="token punctuation">,</span>
    Committed <span class="token operator">=</span> <span class="token string">&#39;committed&#39;</span><span class="token punctuation">,</span>
    Finalized <span class="token operator">=</span> <span class="token string">&#39;finalized&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">PaymasterParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    paymaster<span class="token operator">:</span> Address<span class="token punctuation">;</span>
    paymasterInput<span class="token operator">:</span> BytesLike<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Eip712Meta</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    gasPerPubdata<span class="token operator">?</span><span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
    factoryDeps<span class="token operator">?</span><span class="token operator">:</span> BytesLike<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    customSignature<span class="token operator">?</span><span class="token operator">:</span> BytesLike<span class="token punctuation">;</span>
    paymasterParams<span class="token operator">?</span><span class="token operator">:</span> PaymasterParams<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">BlockTag</span> <span class="token operator">=</span>
    <span class="token operator">|</span> <span class="token builtin">number</span>
    <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token comment">// hex number</span>
    <span class="token operator">|</span> <span class="token string">&#39;committed&#39;</span>
    <span class="token operator">|</span> <span class="token string">&#39;finalized&#39;</span>
    <span class="token operator">|</span> <span class="token string">&#39;latest&#39;</span>
    <span class="token operator">|</span> <span class="token string">&#39;earliest&#39;</span>
    <span class="token operator">|</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">DeploymentType</span> <span class="token operator">=</span> <span class="token string">&#39;create&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;createAccount&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Token</span> <span class="token punctuation">{</span>
    l1Address<span class="token operator">:</span> Address<span class="token punctuation">;</span>
    l2Address<span class="token operator">:</span> Address<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@deprecated</span> This field is here for backward compatibility - please use l2Address field instead */</span>
    address<span class="token operator">:</span> Address<span class="token punctuation">;</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    decimals<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MessageProof</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    proof<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    root<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">EventFilter</span> <span class="token punctuation">{</span>
    topics<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    address<span class="token operator">?</span><span class="token operator">:</span> Address <span class="token operator">|</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Address<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    fromBlock<span class="token operator">?</span><span class="token operator">:</span> BlockTag<span class="token punctuation">;</span>
    toBlock<span class="token operator">?</span><span class="token operator">:</span> BlockTag<span class="token punctuation">;</span>
    blockHash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionResponse</span> <span class="token keyword">extends</span> <span class="token class-name">providers</span><span class="token punctuation">.</span>TransactionResponse <span class="token punctuation">{</span>
    l1BatchNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    l1BatchTxIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function">waitFinalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>TransactionReceipt<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionReceipt</span> <span class="token keyword">extends</span> <span class="token class-name">providers</span><span class="token punctuation">.</span>TransactionReceipt <span class="token punctuation">{</span>
    l1BatchNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    l1BatchTxIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    logs<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Log<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    l2ToL1Logs<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>L2ToL1Log<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Block</span> <span class="token keyword">extends</span> <span class="token class-name">providers</span><span class="token punctuation">.</span>Block <span class="token punctuation">{</span>
    l1BatchNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    l1BatchTimestamp<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BlockWithTransactions</span> <span class="token keyword">extends</span> <span class="token class-name">EthersBlockWithTransactions</span> <span class="token punctuation">{</span>
    l1BatchNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    l1BatchTimestamp<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    transactions<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>TransactionResponse<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Log</span> <span class="token keyword">extends</span> <span class="token class-name">providers</span><span class="token punctuation">.</span>Log <span class="token punctuation">{</span>
    l1BatchNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">L2ToL1Log</span> <span class="token punctuation">{</span>
    blockNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    blockHash<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    l1BatchNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    transactionIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    shardId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    isService<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    sender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    transactionHash<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    logIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">TransactionRequest</span> <span class="token operator">=</span> providers<span class="token punctuation">.</span>TransactionRequest <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    customData<span class="token operator">?</span><span class="token operator">:</span> Eip712Meta<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PriorityOpResponse</span> <span class="token keyword">extends</span> <span class="token class-name">TransactionResponse</span> <span class="token punctuation">{</span>
    <span class="token function">waitL1Commit</span><span class="token punctuation">(</span>confirmation<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>providers<span class="token punctuation">.</span>TransactionReceipt<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">BalancesMap</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> BigNumber <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DeploymentInfo</span> <span class="token punctuation">{</span>
    sender<span class="token operator">:</span> Address<span class="token punctuation">;</span>
    bytecodeHash<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    deployedAddress<span class="token operator">:</span> Address<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ApprovalBasedPaymasterInput</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;ApprovalBased&#39;</span><span class="token punctuation">;</span>
    token<span class="token operator">:</span> Address<span class="token punctuation">;</span>
    minimalAllowance<span class="token operator">:</span> BigNumber<span class="token punctuation">;</span>
    innerInput<span class="token operator">:</span> BytesLike<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GeneralPaymasterInput</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;General&#39;</span><span class="token punctuation">;</span>
    innerInput<span class="token operator">:</span> BytesLike<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">EthereumSignature</span> <span class="token punctuation">{</span>
    v<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    r<span class="token operator">:</span> BytesLike<span class="token punctuation">;</span>
    s<span class="token operator">:</span> BytesLike<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">PaymasterInput</span> <span class="token operator">=</span> ApprovalBasedPaymasterInput <span class="token operator">|</span> GeneralPaymasterInput<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> AccountAbstractionVersion <span class="token punctuation">{</span>
    None <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    Version1 <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> AccountNonceOrdering <span class="token punctuation">{</span>
    Sequential <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    Arbitrary <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ContractAccountInfo</span> <span class="token punctuation">{</span>
    supportedAAVersion<span class="token operator">:</span> AccountAbstractionVersion<span class="token punctuation">;</span>
    nonceOrdering<span class="token operator">:</span> AccountNonceOrdering<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">BlockDetails</span> <span class="token punctuation">{</span>
    <span class="token builtin">number</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    timestamp<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    l1TxCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    l2TxCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    rootHash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    commitTxHash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    committedAt<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
    proveTxHash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    provenAt<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
    executeTxHash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    executedAt<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionDetails</span> <span class="token punctuation">{</span>
    isL1Originated<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    fee<span class="token operator">:</span> BigNumberish<span class="token punctuation">;</span>
    initiatorAddress<span class="token operator">:</span> Address<span class="token punctuation">;</span>
    receivedAt<span class="token operator">:</span> Date<span class="token punctuation">;</span>
    ethCommitTxHash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    ethProveTxHash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    ethExecuteTxHash<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function u(k,d){return a(),e("div",null,[i,c,p(" TODO SMA-1725: 为SDK类型准备高质量的文档，并提供适当的描述和解释 "),r])}const m=s(l,[["render",u],["__file","types.html.vue"]]);export{m as default};
