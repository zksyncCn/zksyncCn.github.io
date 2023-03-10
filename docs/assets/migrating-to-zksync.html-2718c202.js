import{_ as i,W as l,X as r,Z as s,$ as n,a0 as a,a2 as e,Y as p,D as o}from"./framework-674379d2.js";const u={},d=s("h1",{id:"迁移指南",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#迁移指南","aria-hidden":"true"},"#"),n(" 迁移指南")],-1),k=s("p",null,"你有一个Hardhat项目，你想把它部署到zkSync？在这个页面，你会发现所有的步骤，你需要做的是将现有的Hardhat项目迁移到zkSync。",-1),v=s("h2",{id:"概述",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),n(" 概述")],-1),m=p(`<div class="hint-container warning"><p class="hint-container-title">目前还不支持非默认的路径。</p><p>合约文件必须包含在<code>contracts</code>文件夹中，部署脚本必须包含在<code>deploy</code>文件夹中。</p><p>对自定义路径的支持将在未来加入。</p></div><h2 id="安装依赖项" tabindex="-1"><a class="header-anchor" href="#安装依赖项" aria-hidden="true">#</a> 安装依赖项</h2><p>尽管zkSync[与Solidity和Vyper兼容]（.../.../dev/building-onzksync/contracts/contracts.md），但部署的字节码和部署过程与Ethereum或其他EVM区块链不同。因此，第一步将是安装编译器和部署器的硬帽插件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @matterlabs/hardhat-zksync-deploy @matterlabs/hardhat-zksync-solc

<span class="token comment"># Npm</span>
<span class="token function">npm</span> i <span class="token parameter variable">-D</span> @matterlabs/hardhat-zksync-deploy @matterlabs/hardhat-zksync-solc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你使用Vyper，请将<code>@matterlabs/hardhat-zksync-solc</code>替换为<code>@matterlabs/hardhat-zksync-vyper</code>。</p><h2 id="配置变化" tabindex="-1"><a class="header-anchor" href="#配置变化" aria-hidden="true">#</a> 配置变化</h2><p>在你的<code>hardhat.config.ts</code>文件中导入已安装的依赖项。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-deploy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-solc&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zkSync上的网络需要两个不同的URL端点：一个用于第一层（Ethereum或Goerli），另一个用于第二层（zkSync）。这就是你如何在<code>hardhat.config.ts</code>中把zkSync testnet添加到你的网络列表中。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> config<span class="token operator">:</span> HardhatUserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  networks<span class="token operator">:</span> <span class="token punctuation">{</span>
    hardhat<span class="token operator">:</span> <span class="token punctuation">{</span>
      zksync<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    zkSyncTestnet<span class="token operator">:</span><span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&quot;https://zksync2-testnet.zksync.dev&quot;</span><span class="token punctuation">,</span>
      ethNetwork<span class="token operator">:</span> <span class="token string">&quot;goerli&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// or a Goerli RPC endpoint from Infura/Alchemy/Chainstack etc.</span>
      zksync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  defaultNetwork<span class="token operator">:</span> <span class="token string">&quot;zkSyncTestnet&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// configuration continues ....</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记得在任何其他网络中添加<code>zksync: false</code>。</p><p>最后，你需要在<code>zksolc</code>或<code>zkvyper</code>属性中添加编译器选项。下面是一个 Solidity 项目的最小配置。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>zksolc<span class="token operator">:</span> <span class="token punctuation">{</span>
  version<span class="token operator">:</span> <span class="token string">&quot;1.3.1&quot;</span><span class="token punctuation">,</span>
  compilerSource<span class="token operator">:</span> <span class="token string">&quot;binary&quot;</span><span class="token punctuation">,</span>
  settings<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),h=p(`<h3 id="完整的配置" tabindex="-1"><a class="header-anchor" href="#完整的配置" aria-hidden="true">#</a> 完整的配置</h3><p>下面是一个配置文件的例子。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> HardhatUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;hardhat/config&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-deploy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-solc&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> HardhatUserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  zksolc<span class="token operator">:</span> <span class="token punctuation">{</span>
    version<span class="token operator">:</span> <span class="token string">&quot;1.3.1&quot;</span><span class="token punctuation">,</span>
    compilerSource<span class="token operator">:</span> <span class="token string">&quot;binary&quot;</span><span class="token punctuation">,</span>
    settings<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  defaultNetwork<span class="token operator">:</span> <span class="token string">&quot;zkSyncTestnet&quot;</span><span class="token punctuation">,</span>
  networks<span class="token operator">:</span> <span class="token punctuation">{</span>
    hardhat<span class="token operator">:</span> <span class="token punctuation">{</span>
      zksync<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    goerli<span class="token operator">:</span><span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&#39;https://goerli.com/api/abcdef12345&#39;</span><span class="token punctuation">,</span>
      zksync<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    mainnet<span class="token operator">:</span><span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&#39;https://ethereum.mainnet.com/api/abcdef12345&#39;</span><span class="token punctuation">,</span>
      zksync<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    zkSyncTestnet<span class="token operator">:</span> <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&quot;https://zksync2-testnet.zksync.dev&quot;</span><span class="token punctuation">,</span>
      ethNetwork<span class="token operator">:</span> <span class="token string">&quot;goerli&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// or a Goerli RPC endpoint from Infura/Alchemy/Chainstack etc.</span>
      zksync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  solidity<span class="token operator">:</span> <span class="token punctuation">{</span>
    version<span class="token operator">:</span> <span class="token string">&quot;0.8.17&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// OTHER SETTINGS...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译合同" tabindex="-1"><a class="header-anchor" href="#编译合同" aria-hidden="true">#</a> 编译合同</h2><p>要为zkSync编译你的合同，请运行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Yarn
yarn hardhat compile --network zkSyncTestnet

# NPM
npx hardhat compile  --network zkSyncTestnet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过传递 --network 标志，我们确保 Hardhat 将使用 zksolc 编译器（或 zkvyper）。这个命令将编译 /contracts 文件夹中的所有合同，并创建 artifacts-zk 和 cache-zk 文件夹。</p><p>如果你的合同导入了任何非内联的库，你需要在hardhat.config.ts文件中对其进行配置。在这里可以找到更多关于编译库的信息和例子。</p><p>部署合同</p><div class="hint-container tip"><p class="hint-container-title">测试ETH</p><p>从我们的龙头获得测试ETH，或者直接使用zkSync门户桥接GöerliETH。</p></div><p>为了部署你的合约，你需要使用hardhat-zksync-deploy插件中的Deployer类。这个类负责处理在zkSync上部署合同的所有具体事宜。</p><p>下面是一个Greeter合同的基本部署脚本。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utils<span class="token punctuation">,</span> Wallet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zksync-web3&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ethers <span class="token keyword">from</span> <span class="token string">&quot;ethers&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HardhatRuntimeEnvironment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;hardhat/types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Deployer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-deploy&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// An example of a deploy script that will deploy and call a simple contract.</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>hre<span class="token operator">:</span> HardhatRuntimeEnvironment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Running deploy script</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Initialize the wallet.</span>
  <span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;WALLET-PRIVATE-KEY&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Create deployer object and load the artifact of the contract we want to deploy.</span>
  <span class="token keyword">const</span> deployer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Deployer</span><span class="token punctuation">(</span>hre<span class="token punctuation">,</span> wallet<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Load contract</span>
  <span class="token keyword">const</span> artifact <span class="token operator">=</span> <span class="token keyword">await</span> deployer<span class="token punctuation">.</span><span class="token function">loadArtifact</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Deploy this contract. The returned object will be of a \`Contract\` type, </span>
  <span class="token comment">// similar to the ones in \`ethers\`.</span>
  <span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&quot;Hi there!&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// \`greeting\` is an argument for contract constructor.</span>
  <span class="token keyword">const</span> greeterContract <span class="token operator">=</span> <span class="token keyword">await</span> deployer<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span>artifact<span class="token punctuation">,</span> <span class="token punctuation">[</span>greeting<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Show the contract info.</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>artifact<span class="token punctuation">.</span>contractName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> was deployed to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>greeterContract<span class="token punctuation">.</span>address<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>deploy</code>文件夹中包含你的部署脚本，并在运行中执行它。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Yarn
yarn hardhat deploy-zksync --script SCRIPT_FILENAME.ts --network zkSyncTestnet

# NPM
npx hardhat deploy-zksync --script SCRIPT_FILENAME.ts --network zkSyncTestnet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你不包括<code>--script</code>选项，<code>deploy</code>文件夹内的所有脚本文件将按字母顺序执行。</p><h2 id="前端集成" tabindex="-1"><a class="header-anchor" href="#前端集成" aria-hidden="true">#</a> 前端集成</h2><p>你可以使用<code>zksync-web3</code> Javascript库与你的合约进行交互。这个SDK建立在ethers之上，使用相同的类（<code>Provider</code>, <code>Contract</code>, <code>Wallet</code>），所以在很多情况下，你只需要从<code>zksync-web3</code>导入这些类，而不是<code>ethers</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//import { utils, Provider, Contract, Wallet } from &quot;ethers&quot;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> utils<span class="token punctuation">,</span> Provider<span class="token punctuation">,</span> Contract<span class="token punctuation">,</span> Wallet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zksync-web3&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你还需要使用<code>artifacts-zk</code>文件夹中的合同ABI来实例化合同。</p><p>除了以太坊提供的相同的类和方法外，zksync-web3还包括用于zksync特定功能的额外方法。你可以在[<code>zksync-web3</code>文档]（.../js/getting-started.md）中阅读更多内容。</p><h2 id="验证合同" tabindex="-1"><a class="header-anchor" href="#验证合同" aria-hidden="true">#</a> 验证合同</h2><p>要验证你的合同，你有两个选择。</p>`,23),b=s("li",null,null,-1),y={href:"https://join.zksync.dev/",target:"_blank",rel:"noopener noreferrer"};function g(f,z){const t=o("RouterLink"),c=o("ExternalLinkIcon");return l(),r("div",null,[d,k,v,s("p",null,[n("zkSync提供了"),a(t,{to:"/api/hardhat/plugins.html"},{default:e(()=>[n("多个Hardhat插件")]),_:1}),n("，具有不同的功能，但在本指南中，我们将只关注你将项目迁移到zkSync所需的功能。")]),m,s("p",null,[n("你可以在 "),a(t,{to:"/api/hardhat/hardhat-zksync-solc.html"},{default:e(()=>[n("Solidity")]),_:1}),n(" 或 "),a(t,{to:"/api/hardhat/hardhat-zksync-vyper.html"},{default:e(()=>[n("Vyper")]),_:1}),n(" 插件中找到提前设置。")]),h,s("ul",null,[s("li",null,[s("p",null,[n("探索器：在"),a(t,{to:"/api/hardhat/.../tools/block-explorer/contract-verification.html"},{default:e(()=>[n("zkSync探索器")]),_:1}),n("中手动验证你的合同")])]),s("li",null,[s("p",null,[n("插件：使用"),a(t,{to:"/api/hardhat/hardhat-zksync-verify.html"},{default:e(()=>[n("Hardhat验证插件")]),_:1}),n("以编程方式验证你的合同。")])]),b]),s("p",null,[n("如果你在迁移你的项目时有任何问题，"),s("a",y,[n("在Discord上给我们留言"),a(c)]),n("。")])])}const q=i(u,[["render",g],["__file","migrating-to-zksync.html.vue"]]);export{q as default};