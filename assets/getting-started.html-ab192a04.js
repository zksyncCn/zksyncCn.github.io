import{_ as i,W as c,X as l,Z as n,$ as s,a0 as a,a2 as u,Y as p,D as e}from"./framework-674379d2.js";const r={},d=n("h1",{id:"开始工作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开始工作","aria-hidden":"true"},"#"),s(" 开始工作")],-1),k=n("p",null,"在本指南中，我们将演示如何。",-1),v=n("ol",null,[n("li",null,"连接到zkSync网络。"),n("li",null,"将资产从以太坊存入zkSync。"),n("li",null,"转移和提取资金。"),n("li",null,[n("ol",{start:"4"},[n("li",null,"部署一个智能合约。")])]),n("li",null,"与任何智能合约进行互动。")],-1),m={class:"hint-container warning"},b=n("p",{class:"hint-container-title"},"Note",-1),h=n("h2",{id:"前提条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前提条件","aria-hidden":"true"},"#"),s(" 前提条件")],-1),g={href:"https://go.dev/doc/",target:"_blank",rel:"noopener noreferrer"},f=p(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>使用<code>go get</code>命令来安装SDK，请运行以下命令。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span>zksync<span class="token operator">-</span>sdk<span class="token operator">/</span>zksync2<span class="token operator">-</span><span class="token keyword">go</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instantiating-the-sdk" tabindex="-1"><a class="header-anchor" href="#instantiating-the-sdk" aria-hidden="true">#</a> Instantiating the SDK</h2><p>要开始使用SDK，你只需要传入一个提供者的配置。</p><p>使用 &quot;ZkSync Provider&quot;、&quot;Eth Provider &quot;和 &quot;wallet&quot;，你可以用ZkSync网络执行所有基本操作。</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>⚠️ 切勿将私钥提交给文件追踪历史，否则你的账户可能会被泄露。</p></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/ethereum/go-ethereum/rpc&quot;</span>
    <span class="token string">&quot;github.com/zksync-sdk/zksync2-go&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// first, init Ethereum Signer, from your mnemonic, and with the chain Id (in zkSync Era Testnet case, 280)</span>
ethereumSigner<span class="token punctuation">,</span> err <span class="token operator">:=</span> zksync2<span class="token punctuation">.</span><span class="token function">NewEthSignerFromMnemonic</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;mnemonic words&gt;&quot;</span><span class="token punctuation">,</span> <span class="token number">280</span><span class="token punctuation">)</span>

<span class="token comment">// or from raw PrivateKey bytes</span>
ethereumSigner<span class="token punctuation">,</span> err <span class="token operator">=</span> zksync2<span class="token punctuation">.</span><span class="token function">NewEthSignerFromRawPrivateKey</span><span class="token punctuation">(</span>pkBytes<span class="token punctuation">,</span> <span class="token number">280</span><span class="token punctuation">)</span>

<span class="token comment">// also, init ZkSync Provider, specify ZkSync2 RPC URL (e.g. testnet)</span>
zkSyncProvider<span class="token punctuation">,</span> err <span class="token operator">:=</span> zksync2<span class="token punctuation">.</span><span class="token function">NewDefaultProvider</span><span class="token punctuation">(</span><span class="token string">&quot;https://zksync2-testnet.zksync.dev&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// then init Wallet, passing just created Ethereum Signer and ZkSync Provider</span>
wallet<span class="token punctuation">,</span> err <span class="token operator">:=</span> zksync2<span class="token punctuation">.</span><span class="token function">NewWallet</span><span class="token punctuation">(</span>ethereumSigner<span class="token punctuation">,</span> zkSyncProvider<span class="token punctuation">)</span>

<span class="token comment">// init default RPC client to Ethereum node (Goerli network in case of ZkSync2 Era Testnet)</span>
ethRpc<span class="token punctuation">,</span> err <span class="token operator">:=</span> rpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;https://goerli.infura.io/v3/&lt;your_infura_node_id&gt;&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// and use it to create Ethereum Provider by Wallet</span>
ethereumProvider<span class="token punctuation">,</span> err <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">CreateEthereumProvider</span><span class="token punctuation">(</span>ethRpc<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deposit-funds" tabindex="-1"><a class="header-anchor" href="#deposit-funds" aria-hidden="true">#</a> Deposit funds</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/ethereum/go-ethereum/rpc&quot;</span>
    <span class="token string">&quot;github.com/zksync-sdk/zksync2-go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    tx<span class="token punctuation">,</span> err <span class="token operator">:=</span> ep<span class="token punctuation">.</span><span class="token function">Deposit</span><span class="token punctuation">(</span>
        zksync2<span class="token punctuation">.</span><span class="token function">CreateETH</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        big<span class="token punctuation">.</span><span class="token function">NewInt</span><span class="token punctuation">(</span><span class="token number">1000000000000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        common<span class="token punctuation">.</span><span class="token function">HexToAddress</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;target_L2_address&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Tx hash&quot;</span><span class="token punctuation">,</span> tx<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transfer" tabindex="-1"><a class="header-anchor" href="#transfer" aria-hidden="true">#</a> Transfer</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/ethereum/go-ethereum/rpc&quot;</span>
    <span class="token string">&quot;github.com/zksync-sdk/zksync2-go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    hash<span class="token punctuation">,</span> err <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Transfer</span><span class="token punctuation">(</span>
        common<span class="token punctuation">.</span><span class="token function">HexToAddress</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;target_L2_address&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        big<span class="token punctuation">.</span><span class="token function">NewInt</span><span class="token punctuation">(</span><span class="token number">1000000000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Tx hash&quot;</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="withdraw" tabindex="-1"><a class="header-anchor" href="#withdraw" aria-hidden="true">#</a> Withdraw</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/ethereum/go-ethereum/rpc&quot;</span>
    <span class="token string">&quot;github.com/zksync-sdk/zksync2-go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    hash<span class="token punctuation">,</span> err <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Withdraw</span><span class="token punctuation">(</span>
        common<span class="token punctuation">.</span><span class="token function">HexToAddress</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;target_L1_address&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        big<span class="token punctuation">.</span><span class="token function">NewInt</span><span class="token punctuation">(</span><span class="token number">1000000000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Tx hash&quot;</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deploy-a-smart-contract" tabindex="-1"><a class="header-anchor" href="#deploy-a-smart-contract" aria-hidden="true">#</a> Deploy a smart contract</h2><p>你可以通过以下方式访问合约部署界面。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
    <span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/ethereum/go-ethereum/rpc&quot;</span>
    <span class="token string">&quot;github.com/zksync-sdk/zksync2-go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    hash<span class="token punctuation">,</span> err <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Deploy</span><span class="token punctuation">(</span>bytecode<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Tx hash&quot;</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span>

    <span class="token comment">// use helper to get (compute) address of deployed SC</span>
    address<span class="token punctuation">,</span> err <span class="token operator">:=</span> zksync2<span class="token punctuation">.</span><span class="token function">ComputeL2Create2Address</span><span class="token punctuation">(</span>
        common<span class="token punctuation">.</span><span class="token function">HexToAddress</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;deployer_L2_address&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        bytecode<span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Deployed address&quot;</span><span class="token punctuation">,</span> address<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interact-with-smart-contracts" tabindex="-1"><a class="header-anchor" href="#interact-with-smart-contracts" aria-hidden="true">#</a> Interact with smart contracts</h2>`,18),y={href:"https://github.com/ethereum/go-ethereum/accounts/abi",target:"_blank",rel:"noopener noreferrer"},q=p(`<p>编码calldata的例子。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/ethereum/go-ethereum/rpc&quot;</span>
    <span class="token string">&quot;github.com/zksync-sdk/zksync2-go&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    calldata <span class="token operator">:=</span> crypto<span class="token punctuation">.</span><span class="token function">Keccak256</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;get()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
    hash<span class="token punctuation">,</span> err <span class="token operator">:=</span> w<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>
        common<span class="token punctuation">.</span><span class="token function">HexToAddress</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;contract_address&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        calldata<span class="token punctuation">,</span>
        <span class="token boolean">nil</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Tx hash&quot;</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function w(_,x){const o=e("RouterLink"),t=e("ExternalLinkIcon");return c(),l("div",null,[d,k,v,n("div",m,[b,n("p",null,[s("本节文档正在审查中，以反映对系统合约所做的修改（"),a(o,{to:"/api/go/dev/troubleshooting/changelog.html"},{default:u(()=>[s("见changelog")]),_:1}),s("）。修订后的版本很快就会推出。")])]),h,n("p",null,[s("本指南假定你熟悉"),n("a",g,[s("Go"),a(t)]),s("编程语言。 Go的版本应该>=1.17，并且需要Go模块。")]),f,n("p",null,[s("为了与智能合约互动，SDK需要知道合约的地址，以及它的ABI。为此，你需要使用ABI.Pack() "),n("a",y,[s("方法"),a(t)]),s("来加载你的合约的ABI，或者对执行函数及其参数的calldata进行编码。")]),q])}const S=i(r,[["render",w],["__file","getting-started.html.vue"]]);export{S as default};
