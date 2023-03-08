import{_ as i,W as l,X as r,Z as n,$ as s,a0 as a,a2 as p,Y as t,D as e}from"./framework-674379d2.js";const d={},u=t('<h1 id="hardhat-zksync-deploy" tabindex="-1"><a class="header-anchor" href="#hardhat-zksync-deploy" aria-hidden="true">#</a> <code>hardhat-zksync-deploy</code></h1><p>这个插件提供了在zkSync上部署智能合约的工具，这些智能合约是由<code>@matterlabs/hardhat-zksync-solc</code>或<code>@matterlabs/hardhat-zksync-vyper</code>插件构建的。</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>合同必须使用官方的<code>@matterlabs/hardhat-zksync-solc</code>或<code>@matterlabs/hardhat-zksync-vyper</code>插件进行编译。用其他编译器编译的合同将无法使用此插件部署到zkSync。</p></div><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',4),k={href:"https://www.npmjs.com/package/@matterlabs/hardhat-zksync-deploy",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>用以下命令将该插件的最新版本添加到你的项目中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# Yarn

yarn add -D @matterlabs/hardhat-zksync-deploy

# Npm

npm i -D @matterlabs/hardhat-zksync-deploy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exports" tabindex="-1"><a class="header-anchor" href="#exports" aria-hidden="true">#</a> Exports</h3><h4 id="deployer" tabindex="-1"><a class="header-anchor" href="#deployer" aria-hidden="true">#</a> <code>Deployer</code></h4><p>这个插件的主要出口是<code>Deployer</code>类。它被用来包装一个\`zksync-web3&#39;钱包实例，并提供一个方便的接口来部署智能合约和账户抽象。它的主要方法是。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Deployer</span> <span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token parameter">hre</span> Hardhat runtime environment. This object is provided to scripts by hardhat itself.
   * <span class="token keyword">@param</span> <span class="token parameter">zkWallet</span> The wallet which will be used to deploy the contracts.
   * <span class="token keyword">@param</span> <span class="token parameter">deploymentType</span> Optional deployment type that relates to the ContractDeployer system contract function to be called. Defaults to deploying regular smart contracts.
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>hre<span class="token operator">:</span> HardhatRuntimeEnvironment<span class="token punctuation">,</span> zkWallet<span class="token operator">:</span> zk<span class="token punctuation">.</span>Wallet<span class="token punctuation">,</span> deploymentType<span class="token operator">?</span><span class="token operator">:</span> zk<span class="token punctuation">.</span>types<span class="token punctuation">.</span>DeploymentType<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
   * Created a \`Deployer\` object on ethers.Wallet object.
   *
   * <span class="token keyword">@param</span> <span class="token parameter">hre</span> Hardhat runtime environment. This object is provided to scripts by hardhat itself.
   * <span class="token keyword">@param</span> <span class="token parameter">ethWallet</span> The wallet which will be used to deploy the contracts.
   * <span class="token keyword">@param</span> <span class="token parameter">deploymentType</span> Optional deployment type that relates to the ContractDeployer system contract function to be called. Defaults to deploying regular smart contracts.
   */</span>
  <span class="token keyword">static</span> <span class="token function">fromEthWallet</span><span class="token punctuation">(</span>hre<span class="token operator">:</span> HardhatRuntimeEnvironment<span class="token punctuation">,</span> ethWallet<span class="token operator">:</span> ethers<span class="token punctuation">.</span>Wallet<span class="token punctuation">,</span> deploymentType<span class="token operator">?</span><span class="token operator">:</span> zk<span class="token punctuation">.</span>types<span class="token punctuation">.</span>DeploymentType<span class="token punctuation">)</span>

  <span class="token doc-comment comment">/**
   * Loads an artifact and verifies that it was compiled by \`zksolc\\.
   *
   * <span class="token keyword">@param</span> <span class="token parameter">contractNameOrFullyQualifiedName</span> The name of the contract.
   *   It can be a bare contract name (e.g. &quot;Token&quot;) if it&#39;s
   *   unique in your project, or a fully qualified contract name
   *   (e.g. &quot;contract/token.sol:Token&quot;) otherwise.
   *
   * <span class="token keyword">@throws</span> Throws an error if a non-unique contract name is used,
   *   indicating which fully qualified names can be used instead.
   *
   * <span class="token keyword">@throws</span> Throws an error if an artifact was not compiled by \`zksolc\`.
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">loadArtifact</span><span class="token punctuation">(</span>
    contractNameOrFullyQualifiedName<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ZkSyncArtifact<span class="token operator">&gt;</span>

  <span class="token doc-comment comment">/**
   * Estimates the price of calling a deploy transaction in a certain fee token.
   *
   * <span class="token keyword">@param</span> <span class="token parameter">artifact</span> The previously loaded artifact object.
   * <span class="token keyword">@param</span> <span class="token parameter">constructorArguments</span> List of arguments to be passed to the contract constructor.
   *
   * <span class="token keyword">@returns</span> Calculated fee in ETH wei.
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">estimateDeployFee</span><span class="token punctuation">(</span>
    artifact<span class="token operator">:</span> ZkSyncArtifact<span class="token punctuation">,</span>
    constructorArguments<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ethers<span class="token punctuation">.</span>BigNumber<span class="token operator">&gt;</span>

  <span class="token doc-comment comment">/**
    * Sends a deploy transaction to the zkSync network.
    * For now it uses defaults values for the transaction parameters:
    *
    * <span class="token keyword">@param</span> <span class="token parameter">artifact</span> The previously loaded artifact object.
    * <span class="token keyword">@param</span> <span class="token parameter">constructorArguments</span> List of arguments to be passed to the contract constructor.
    * <span class="token keyword">@param</span> <span class="token parameter">overrides</span> Optional object with additional deploy transaction parameters.
    * <span class="token keyword">@param</span> <span class="token parameter">additionalFactoryDeps</span> Additional contract bytecodes to be added to the factory dependencies list.
    * The fee amount is requested automatically from the zkSync server.
    *
    * <span class="token keyword">@returns</span> A contract object.
    */</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">deploy</span><span class="token punctuation">(</span>
    artifact<span class="token operator">:</span> ZkSyncArtifact<span class="token punctuation">,</span>
    constructorArguments<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    overrides<span class="token operator">?</span><span class="token operator">:</span> Overrides<span class="token punctuation">,</span>
    additionalFactoryDeps<span class="token operator">?</span><span class="token operator">:</span> ethers<span class="token punctuation">.</span>BytesLike<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>zk<span class="token punctuation">.</span>Contract<span class="token operator">&gt;</span>

  <span class="token doc-comment comment">/**
   * Extracts factory dependencies from the artifact.
   *
   * <span class="token keyword">@param</span> <span class="token parameter">artifact</span> Artifact to extract dependencies from
   *
   * <span class="token keyword">@returns</span> Factory dependencies in the format expected by SDK.
   */</span>
  <span class="token keyword">async</span> <span class="token function">extractFactoryDeps</span><span class="token punctuation">(</span>artifact<span class="token operator">:</span> ZkSyncArtifact<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要查看如何使用Deployer来部署合同的示例脚本，请查看快速入门中的部署部分。</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><div class="hint-container warning"><p class="hint-container-title">0.6.x版的API变化</p><p>这个软件包的以前版本需要在hardhat.config.ts文件中进行不同的配置。如果你使用v0.5.x或以前的版本，网络配置必须在一个名为zkSyncDeploy的对象中注明，包括属性zkSyncNetwork和ethNetwork。我们建议用户更新到这个软件包的最新版本。</p></div><p>指定zkSync和Ethereum网络作为<code>hardhat.config.ts</code>文件的<code>networks</code>配置的一部分。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>networks<span class="token operator">:</span> <span class="token punctuation">{</span>
  goerli<span class="token operator">:</span> <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;https://goerli.infura.io/v3/&lt;API_KEY&gt;&quot;</span> <span class="token comment">// URL of the Ethereum Web3 RPC (optional)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  zkTestnet<span class="token operator">:</span> <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;https://zksync2-testnet.zksync.dev&quot;</span><span class="token punctuation">,</span> <span class="token comment">// URL of the zkSync network RPC</span>
    ethNetwork<span class="token operator">:</span> <span class="token string">&quot;goerli&quot;</span><span class="token punctuation">,</span> <span class="token comment">// URL of the Ethereum Web3 RPC, or the identifier of the network (e.g. \`mainnet\` or \`goerli\`)</span>
    zksync<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// defaultNetwork: &quot;zkTestnet&quot;, // optional (if not set, use &#39;--network zkTestnet&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>zkTestnet</code>是一个任意的zkSync网络名称。你可以使用<code>defaultNetwork</code>属性选择它作为默认网络。</li><li><code>url</code>是一个字段，如果是zkSync网络（<code>zksync</code>标志设置为<code>true</code>），则是zkSync节点的URL，或Ethereum节点的URL。这个字段对于这个插件使用的所有zkSync和Ethereum网络都是必需的。</li><li><code>ethNetwork</code>是一个包含Ethereum节点的URL的字段。你也可以提供网络名称（例如：<code>goerli</code>）作为这个字段的值。在这种情况下，插件将使用适当的以太坊网络配置的URL（来自<code>networks</code>部分），如果没有提供配置，则使用该网络的默认<code>ethers</code>提供者。本插件使用的所有zkSync网络都需要这个字段。</li><li><code>zksync</code>是一个标志，表示该网络是否代表zkSync网络配置。这个字段对所有zkSync网络需要设置为<code>true</code>。默认为 &quot;false&quot;。</li></ul><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><p><code>hardhat deploy-zksync</code> -- 运行<code>deploy</code>文件夹中的所有脚本。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>请注意，部署脚本必须放在<code>deploy</code>文件夹中!</p></div><ul><li>要运行特定的脚本，请添加<code>--脚本</code>参数，例如，<code>hardhat deploy-zksync --脚本001_deploy.ts</code>将运行脚本<code>./deploy/001_deploy.ts</code>。</li><li>要在特定的zkSync网络上运行，使用标准的hardhat<code>--network</code>参数，例如<code>--network zkTestnet</code>（名称为<code>zkTestnet</code>的网络需要在<code>hardhat.config.ts</code>文件中配置，并包含上述所有必需的字段），或者在<code>hardhat.config.ts</code>文件中指定<code>defaultNetwork</code>。</li></ul>`,16),v={class:"hint-container tip"},h=n("p",{class:"hint-container-title"},"Tips",-1),y=n("code",null,"--network",-1),b=n("code",null,"defaultNetwork",-1),f=n("code",null,"http://localhost:8545",-1),w=n("code",null,"http://localhost:3050",-1),g=n("code",null,"hardhat.config.ts",-1);function z(_,x){const o=e("ExternalLinkIcon"),c=e("RouterLink");return l(),r("div",null,[u,n("p",null,[n("a",k,[s("@matterlabs/hardhat-zksync-deploy"),a(o)])]),m,n("div",v,[h,n("p",null,[s("如果没有指定网络参数"),y,s("或"),b,s("配置，将使用"),f,s("（Ethereum RPC URL）和"),w,s("（zkSync RPC URL）的本地设置，。在这种情况下，zkSync网络不需要在"),g,s("文件中进行配置。 关于docker化本地设置的更多细节，请查看"),a(c,{to:"/api/hardhat/testing.html"},{default:p(()=>[s("本地测试")]),_:1}),s("。")])])])}const S=i(d,[["render",z],["__file","hardhat-zksync-deploy.html.vue"]]);export{S as default};
