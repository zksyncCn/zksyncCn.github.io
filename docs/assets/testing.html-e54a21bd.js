import{_ as i,W as l,X as u,Z as s,$ as n,a0 as a,a2 as o,Y as t,D as c}from"./framework-674379d2.js";const r={},d=s("h1",{id:"本地测试",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#本地测试","aria-hidden":"true"},"#"),n(" 本地测试")],-1),k=s("p",null,"有时，由于网络延迟或费用的原因，需要在本地环境下测试合同。",-1),v=s("p",null,"zkSync团队为这个目的提供了一个docker化的本地设置。",-1),h=s("h2",{id:"先决条件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#先决条件","aria-hidden":"true"},"#"),n(" 先决条件")],-1),m=s("code",null,"Docker",-1),b=s("code",null,"docker-compose",-1),g={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},y=t(`<h2 id="安装测试环境" tabindex="-1"><a class="header-anchor" href="#安装测试环境" aria-hidden="true">#</a> 安装测试环境</h2><p>用以下命令下载docker化项目。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/matter-labs/local-setup.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动本地节点" tabindex="-1"><a class="header-anchor" href="#启动本地节点" aria-hidden="true">#</a> 启动本地节点</h2><p>要在本地运行zkSync，运行<code>start.sh</code>脚本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd local-setup
./start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令将启动三个docker容器。</p><ul><li>Postgres（用作zkSync的数据库）。</li><li>本地Geth节点（用作zkSync的L1）。</li><li>zkSync节点本身。</li></ul><p>默认情况下，HTTP JSON-RPC API将运行在端口<code>3050</code>，而WS API将运行在端口<code>3051</code>。</p><p>::警告</p><p>注意，重要的是第一次<code>start.sh</code>脚本的调用要不间断地进行。如果你在启动过程意外停止后面临任何问题，你应该<a href="#reset-thezksync-state">reset</a>本地zkSync状态并再次尝试。</p><p>:::</p><p>##将钱包连接到本地节点</p><p>你可以使用以下细节将你的钱包连接到L1和L2节点。</p><p><strong>本地L1网络</strong></p><ul><li>网络名称。<code>L1本地</code>。</li><li>新的RPC URL: <code>http://localhost:8545/ </code></li><li>链ID: \`9</li><li>货币符号: <code>ETH </code></li></ul><p><strong>本地zkSync网络</strong></p><ul><li>网络名称: <code>L2本地zkSync</code>.</li><li>新的RPC网址。<code>http://localhost:3050/ </code></li><li>链ID: \`270</li><li>货币符号: <code>ETH </code></li></ul><h2 id="重置zksync的状态" tabindex="-1"><a class="header-anchor" href="#重置zksync的状态" aria-hidden="true">#</a> 重置zkSync的状态</h2><p>要重置zkSync的状态，请运行<code>./clear.sh</code>脚本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./clear.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，当运行这个命令时，你可能会收到 &quot;权限被拒绝 &quot;的错误。在这种情况下，你应该以root权限运行它。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ./clear.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="丰富的钱包" tabindex="-1"><a class="header-anchor" href="#丰富的钱包" aria-hidden="true">#</a> 丰富的钱包</h2><p>本地zkSync设置带有一些 &quot;丰富 &quot;的钱包，在L1和L2上都有大量的ETH。</p><p>这些账户的地址与相应的私钥的完整列表可以在[这里]（https://github.com/matter-labs/local-setup/blob/main/rich-wallets.json）找到。</p><p>警告ERC20代币</p><p>富有的钱包只有ETH。**如果你需要用ERC20代币进行测试，你应该自己部署它们。</p>`,28),f={href:"https://join.zksync.dev/",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>:::</p><h2 id="使用自定义数据库或以太坊节点" tabindex="-1"><a class="header-anchor" href="#使用自定义数据库或以太坊节点" aria-hidden="true">#</a> 使用自定义数据库或以太坊节点</h2><p>要使用自定义的Postgres数据库或第1层节点，你应该改变docker-compose文件中的环境参数。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> DATABASE_URL=postgres<span class="token punctuation">:</span>//postgres@postgres/zksync_local
  <span class="token punctuation">-</span> ETH_CLIENT_WEB3_URL=http<span class="token punctuation">:</span>//geth<span class="token punctuation">:</span><span class="token number">8545</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>DATABASE_URL</code> is the URL to the Postgres database.</li><li><code>ETH_CLIENT_WEB3_URL</code> is the URL to the HTTP JSON-RPC interface of the L1 node.</li></ul><h2 id="使用mocha-chai进行测试" tabindex="-1"><a class="header-anchor" href="#使用mocha-chai进行测试" aria-hidden="true">#</a> 使用<code>mocha</code>+<code>chai</code>进行测试</h2><p>由于zkSync节点的URL是在<code>hardhat.config.ts</code>中提供的，使用不同的URL进行部署和本地测试的最好方法是使用环境变量。标准的方法是在调用测试前设置<code>NODE_ENV=test</code>环境变量。</p><h3 id="项目设置" tabindex="-1"><a class="header-anchor" href="#项目设置" aria-hidden="true">#</a> 项目设置</h3>`,8),q=s("li",null,"要安装测试库，运行以下命令。",-1),w=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add -D mocha chai @types/mocha @types/chai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在根目录下的<code>package.json</code>中添加以下几行。</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NODE_ENV=test hardhat test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将使在Hardhat环境中运行测试，并将<code>NODE_ENV</code>环境变量设置为<code>test</code>。</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><ol start="4"><li>修改 <code>hardhat.config.ts</code> 以使用本地节点进行测试。</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-deploy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-solc&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// dynamically changes endpoints for local tests</span>
<span class="token keyword">const</span> zkSyncTestnet <span class="token operator">=</span>
  process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">==</span> <span class="token string">&quot;test&quot;</span>
    <span class="token operator">?</span> <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&quot;http://localhost:3050&quot;</span><span class="token punctuation">,</span>
        ethNetwork<span class="token operator">:</span> <span class="token string">&quot;http://localhost:8545&quot;</span><span class="token punctuation">,</span>
        zksync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token operator">:</span> <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&quot;https://zksync2-testnet.zksync.dev&quot;</span><span class="token punctuation">,</span>
        ethNetwork<span class="token operator">:</span> <span class="token string">&quot;goerli&quot;</span><span class="token punctuation">,</span>
        zksync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  zksolc<span class="token operator">:</span> <span class="token punctuation">{</span>
    version<span class="token operator">:</span> <span class="token string">&quot;1.3.1&quot;</span><span class="token punctuation">,</span>
    compilerSource<span class="token operator">:</span> <span class="token string">&quot;binary&quot;</span><span class="token punctuation">,</span>
    settings<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// defaults to zkSync network</span>
  defaultNetwork<span class="token operator">:</span> <span class="token string">&quot;zkSyncTestnet&quot;</span><span class="token punctuation">,</span>

  networks<span class="token operator">:</span> <span class="token punctuation">{</span>
    hardhat<span class="token operator">:</span> <span class="token punctuation">{</span>
      zksync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// load test network details</span>
    zkSyncTestnet<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  solidity<span class="token operator">:</span> <span class="token punctuation">{</span>
    version<span class="token operator">:</span> <span class="token string">&quot;0.8.16&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个\`test&#39;文件夹，测试将存放在那里。</p><h3 id="编写测试文件" tabindex="-1"><a class="header-anchor" href="#编写测试文件" aria-hidden="true">#</a> 编写测试文件</h3><ol start="5"><li>现在你可以写你的第一个测试了! 创建一个<code>test/main.test.ts</code>文件，代码如下。</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;chai&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Wallet<span class="token punctuation">,</span> Provider<span class="token punctuation">,</span> Contract <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zksync-web3&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> hre <span class="token keyword">from</span> <span class="token string">&quot;hardhat&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Deployer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@matterlabs/hardhat-zksync-deploy&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">RICH_WALLET_PK</span> <span class="token operator">=</span> <span class="token string">&quot;0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">deployGreeter</span><span class="token punctuation">(</span>deployer<span class="token operator">:</span> Deployer<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Contract<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> artifact <span class="token operator">=</span> <span class="token keyword">await</span> deployer<span class="token punctuation">.</span><span class="token function">loadArtifact</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> deployer<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span>artifact<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;Greeter&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;Should return the new greeting once it&#39;s changed&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> provider <span class="token operator">=</span> Provider<span class="token punctuation">.</span><span class="token function">getDefaultProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span><span class="token constant">RICH_WALLET_PK</span><span class="token punctuation">,</span> provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> deployer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Deployer</span><span class="token punctuation">(</span>hre<span class="token punctuation">,</span> wallet<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> greeter <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">deployGreeter</span><span class="token punctuation">(</span>deployer<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> greeter<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> setGreetingTx <span class="token operator">=</span> <span class="token keyword">await</span> greeter<span class="token punctuation">.</span><span class="token function">setGreeting</span><span class="token punctuation">(</span><span class="token string">&quot;Hola, mundo!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// wait until the transaction is mined</span>
    <span class="token keyword">await</span> setGreetingTx<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> greeter<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string">&quot;Hola, mundo!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),x=s("code",null,"Greeter",-1),z=s("code",null,"greet()",-1),S=s("code",null,"setGreeting()",-1),L=t(`<p>现在你可以用下面的命令运行这个测试文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>恭喜你! 你已经在本地使用zkSync进行了第一次测试 🎉</strong>*。</p><h2 id="完整的例子" tabindex="-1"><a class="header-anchor" href="#完整的例子" aria-hidden="true">#</a> 完整的例子</h2><p>完整的测试例子可以在[这里]找到(https://github.com/matter-labs/tutorial-examples/tree/main/local-setup-testing)</p><h2 id="chai匹配器" tabindex="-1"><a class="header-anchor" href="#chai匹配器" aria-hidden="true">#</a> chai匹配器</h2><p>zkSync团队提供了<a href="./hardhat-zksync-chai-matchers">hardhat-zksync-chai-matchers</a>插件，除了提供本地测试环境外，还让你更容易为项目编写和维护测试。这个插件包括一组专门为zkSync设计的Chai匹配器，它可以帮助你为你的合同编写更全面和更容易理解的测试。通过使用这些匹配器，你可以确保你的合同按预期工作，并减少在开发过程中遇到错误或其他问题的可能性。</p>`,7);function E(T,N){const p=c("ExternalLinkIcon"),e=c("RouterLink");return l(),u("div",null,[d,k,v,h,s("p",null,[n("要求你的电脑上安装有"),m,n("和"),b,n("。在这里找到"),s("a",g,[n("安装指南"),a(p)])]),s("p",null,[n("本指南假定你已经熟悉了zkSync Hardhat插件。如果你是在zkSync上新开发的Hardhat，请查看"),a(e,{to:"/api/hardhat/getting-started.html"},{default:o(()=>[n("getting started section here")]),_:1}),n("。")]),y,s("p",null,[n("如果你希望本地节点再次带有预先部署的代币，请在我们的"),s("a",f,[n("Discord"),a(p)]),n("上告诉我们，这样我们就可以相应地安排优先次序。")]),_,s("ol",null,[s("li",null,[n("按照"),a(e,{to:"/api/hardhat/getting-started.html"},{default:o(()=>[n("入门指南")]),_:1}),n("创建一个新的Hardhat项目作为参考。")]),q]),w,s("p",null,[n("这个脚本部署了在"),a(e,{to:"/api/hardhat/getting-started.html#write-and-deploy-a-contract"},{default:o(()=>[n("入门指南")]),_:1}),n("中创建的"),x,n("合同，并测试它在调用"),z,n("方法时返回一个正确的消息，并且该消息可以用"),S,n("方法更新。")]),L])}const H=i(r,[["render",E],["__file","testing.html.vue"]]);export{H as default};