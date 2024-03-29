import{_ as i,W as l,X as u,Z as s,$ as n,a0 as a,a2 as e,Y as p,D as c}from"./framework-674379d2.js";const r={},d=s("h1",{id:"帐户抽象自定义",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#帐户抽象自定义","aria-hidden":"true"},"#"),n(" 帐户抽象自定义")],-1),k=s("h2",{id:"前提条件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前提条件","aria-hidden":"true"},"#"),n(" 前提条件")],-1),v=p(`<h2 id="安装依赖项" tabindex="-1"><a class="header-anchor" href="#安装依赖项" aria-hidden="true">#</a> 安装依赖项</h2><p>我们将使用zkSync硬帽插件来开发这个合同。首先，我们应该为它安装所有的依赖项。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir custom-aa-tutorial
cd custom-aa-tutorial
yarn init -y
yarn add -D typescript ts-node ethers@^5.7.2 zksync-web3@^0.13.1 hardhat @matterlabs/hardhat-zksync-solc @matterlabs/hardhat-zksync-deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>当前版本的<code>zksync-web3</code>使用<code>ethers v5.7.x</code>作为同行依赖。与<code>ethers v6.x.x</code>兼容的更新将很快发布。</p></div><p>由于我们正在使用zkSync合约，我们还需要安装带有合同及其同行依赖关系的软件包。</p><div class="language-ag-0-1gr0erag-0-1gr0ereag-0-1gr0ere8l8lag-1-1gr0ere8le8ag-1-1gr0ere8llag-1-1gr0ere8l line-numbers-mode" data-ext="ag-0-1gr0erag-0-1gr0ereag-0-1gr0ere8l8lag-1-1gr0ere8le8ag-1-1gr0ere8llag-1-1gr0ere8l"><pre class="language-ag-0-1gr0erag-0-1gr0ereag-0-1gr0ere8l8lag-1-1gr0ere8le8ag-1-1gr0ere8llag-1-1gr0ere8l"><code>yarn add -D @matterlabs/zksync-contracts @openzeppelin/contracts @openzeppelin/contracts-upgradeable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),m=s("code",null,"hardhat.config.ts",-1),b=s("code",null,"contracts",-1),y=s("code",null,"deploy",-1),g=s("code",null,"isSystem: true",-1),h=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &quot;@matterlabs/hardhat-zksync-deploy&quot;;
import &quot;@matterlabs/hardhat-zksync-solc&quot;;

module.exports = {
  zksolc: {
    version: &quot;1.3.1&quot;,
    compilerSource: &quot;binary&quot;,
      settings: {
        isSystem: true,
      },
  },
  defaultNetwork: &quot;zkSyncTestnet&quot;,

  networks: {
    zkSyncTestnet: {
      url: &quot;https://zksync2-testnet.zksync.dev&quot;,
      ethNetwork: &quot;goerli&quot;, // Can also be the RPC URL of the network (e.g. \`https://goerli.infura.io/v3/&lt;API_KEY&gt;\`)
      zksync: true,
    },
  },
  solidity: {
    version: &quot;0.8.17&quot;,
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f={class:"hint-container tip"},w=s("p",{class:"hint-container-title"},"Tips",-1),_=s("h2",{id:"帐户抽象",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#帐户抽象","aria-hidden":"true"},"#"),n(" 帐户抽象")],-1),x={href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/83277ff916ac4f58fec072b8f28a252c1245c2f1/contracts/interfaces/IERC1271.sol#L12",target:"_blank",rel:"noopener noreferrer"},T=p(`<p>合约的构成如下。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>import &quot;@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IAccount.sol&quot;; import &quot;@matterlabs/zksync-contracts/l2/system-contracts/libraries/TransactionHelper.sol&quot;;</p><p>import &quot;@openzeppelin/contracts/interfaces/IERC1271.sol&quot;;</p><p>contract TwoUserMultisig is IAccount, IERC1271 { // to get transaction hash using TransactionHelper for Transaction;</p><pre><code>bytes4 constant EIP1271_SUCCESS_RETURN_VALUE = 0x1626ba7e;

modifier onlyBootloader() {
    require(
        msg.sender == BOOTLOADER_FORMAL_ADDRESS,
        &quot;Only bootloader can call this method&quot;
    );
    // Continure execution if called from the bootloader.
    _;
}


function validateTransaction(
    bytes32,
    bytes32 _suggestedSignedHash,
    Transaction calldata _transaction
) external payable override onlyBootloader returns (bytes4 magic) {
    magic = _validateTransaction(_suggestedSignedHash, _transaction);
}

function _validateTransaction(
    bytes32 _suggestedSignedHash,
    Transaction calldata _transaction
) internal returns (bytes4 magic) {
    // TO BE IMPLEMENTED
}

function executeTransaction(
    bytes32,
    bytes32,
    Transaction calldata _transaction
) external payable override onlyBootloader {
    _executeTransaction(_transaction);
}

function _executeTransaction(Transaction calldata _transaction) internal {
    // TO BE IMPLEMENTED
}

function executeTransactionFromOutside(Transaction calldata _transaction)
    external
    payable
{
    _validateTransaction(bytes32(0), _transaction);
    _executeTransaction(_transaction);
}

function isValidSignature(bytes32 _hash, bytes memory _signature)
    public
    view
    override
    returns (bytes4 magic)
{
    // TO BE IMPLEMENTED
}

function payForTransaction(
    bytes32,
    bytes32,
    Transaction calldata _transaction
) external payable override onlyBootloader {
    // TO BE IMPLEMENTED
}

function prepareForPaymaster(
    bytes32, // _txHash
    bytes32, // _suggestedSignedHash
    Transaction calldata _transaction
) external payable override onlyBootloader {
    // TO BE IMPLEMENTED
}

// This function verifies that the ECDSA signature is both in correct format and non-malleable
function checkValidECDSASignatureFormat(bytes memory _signature) internal pure returns (bool) {
    if(_signature.length != 65) {
        return false;
    }

    uint8 v;
    bytes32 r;
    bytes32 s;
    // Signature loading code
    // we jump 32 (0x20) as the first slot of bytes contains the length
    // we jump 65 (0x41) per signature
    // for v we load 32 bytes ending with v (the first 31 come from s) then apply a mask
    assembly {
        r := mload(add(_signature, 0x20))
        s := mload(add(_signature, 0x40))
        v := and(mload(add(_signature, 0x41)), 0xff)
    }
    if(v != 27 &amp;&amp; v != 28) {
        return false;
    }

    // EIP-2 still allows signature malleability for ecrecover(). Remove this possibility and make the signature
    // unique. Appendix F in the Ethereum Yellow paper (https://ethereum.github.io/yellowpaper/paper.pdf), defines
    // the valid range for s in (301): 0 &lt; s &lt; secp256k1n ÷ 2 + 1, and for v in (302): v ∈ {27, 28}. Most
    // signatures from current libraries generate a unique signature with an s-value in the lower half order.
    //
    // If your library generates malleable signatures, such as s-values in the upper range, calculate a new s-value
    // with 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 - s1 and flip v from 27 to 28 or
    // vice versa. If your library also generates signatures with 0/1 for v instead 27/28, add 27 to v to accept
    // these malleable signatures as well.
    if(uint256(s) &gt; 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0) {
        return false;
    }

    return true;
}

function extractECDSASignature(bytes memory _fullSignature) internal pure returns (bytes memory signature1, bytes memory signature2) {
    require(_fullSignature.length == 130, &quot;Invalid length&quot;);

    signature1 = new bytes(65);
    signature2 = new bytes(65);

    // Copying the first signature. Note, that we need an offset of 0x20 
    // since it is where the length of the \`_fullSignature\` is stored
    assembly {
        let r := mload(add(_fullSignature, 0x20))
        let s := mload(add(_fullSignature, 0x40))
        let v := and(mload(add(_fullSignature, 0x41)), 0xff)

        mstore(add(signature1, 0x20), r)
        mstore(add(signature1, 0x40), s)
        mstore8(add(signature1, 0x60), v)
    }

    // Copying the second signature.
    assembly {
        let r := mload(add(_fullSignature, 0x61))
        let s := mload(add(_fullSignature, 0x81))
        let v := and(mload(add(_fullSignature, 0x82)), 0xff)

        mstore(add(signature2, 0x20), r)
        mstore(add(signature2, 0x40), s)
        mstore8(add(signature2, 0x60), v)
    }
}

fallback() external {
    // fallback of default account shouldn&#39;t be called by bootloader under no circumstances
    assert(msg.sender != BOOTLOADER_FORMAL_ADDRESS);

    // If the contract is called directly, behave like an EOA
}

receive() external payable {
    // If the contract is called directly, behave like an EOA.
    // Note, that is okay if the bootloader sends funds with no calldata as it may be used for refunds/operator payments
}
</code></pre><p>}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意，只有[bootloader](.../developer-guides/system-contracts.md#bootloader)才允许调用\`validateTransaction\`/\`executeTransaction\`/\`payForTransaction\`/\`prepareForPaymaster\`方法。
这就是为什么\`onlyBootloader\`修改器被用于它们。

需要\`executeTransactionFromOutside\`来允许外部用户从这个账户发起交易。实现它的最简单方法是与\`validateTransaction\`+\`executeTransaction\`的做法一样。

此外，\`checkValidECDSASignatureFormat\`和\`extractECDSASignature\`是帮助方法，我们将在\`isValidSignature\`实现中使用。

### 签名验证

首先，我们需要实现签名验证过程。 在本教程中，我们使用OpenZeppelin的\`ECDSA\`库进行签名验证，所以我们需要导入它。

\`\`\`solidity
// Used for signature validation
import &quot;@openzeppelin/contracts/utils/cryptography/ECDSA.sol&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我们正在建立一个双账户多义词，让我们在构造函数中传递其所有者的地址并保存其状态变量。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// state variables for account owners</span>
<span class="token builtin">address</span> <span class="token keyword">public</span> owner1<span class="token punctuation">;</span>
<span class="token builtin">address</span> <span class="token keyword">public</span> owner2<span class="token punctuation">;</span>


<span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _owner1<span class="token punctuation">,</span> <span class="token builtin">address</span> _owner2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    owner1 <span class="token operator">=</span> _owner1<span class="token punctuation">;</span>
    owner2 <span class="token operator">=</span> _owner2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了验证签名，我们必须。</p><ul><li>检查收到的签名的长度是否正确。</li><li>使用辅助方法<code>extractECDSASignature</code>从收到的多重签名中提取两个签名。</li><li>使用辅助方法\`checkValidECDSASignatureFormat&#39;检查两个签名是否有效。</li><li>使用<code>ECDSA.recover</code>方法从交易哈希和每个签名中提取地址。</li><li>检查提取的地址是否与账户的所有者相符。</li><li>成功时返回<code>EIP1271_SUCCESS_RETURN_VALUE</code>值，如果验证失败则返回<code>bytes4(0)</code>。</li></ul><p>下面是<code>isValidSignature</code>方法的完整实现。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">isValidSignature</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _hash<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _signature<span class="token punctuation">)</span>
    <span class="token keyword">public</span>
    <span class="token keyword">view</span>
    override
    <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes4</span> magic<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    magic <span class="token operator">=</span> EIP1271_SUCCESS_RETURN_VALUE<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>_signature<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">130</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Signature is invalid, but we need to proceed with the signature verification as usual</span>
        <span class="token comment">// in order for the fee estimation to work correctly</span>
        _signature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span><span class="token number">130</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Making sure that the signatures look like a valid ECDSA signature and are not rejected rightaway</span>
        <span class="token comment">// while skipping the main verification process.</span>
        _signature<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">bytes1</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _signature<span class="token punctuation">[</span><span class="token number">129</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">bytes1</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> signature1<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> signature2<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">extractECDSASignature</span><span class="token punctuation">(</span>_signature<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">checkValidECDSASignatureFormat</span><span class="token punctuation">(</span>signature1<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">checkValidECDSASignatureFormat</span><span class="token punctuation">(</span>signature2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        magic <span class="token operator">=</span> <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token builtin">address</span> recoveredAddr1 <span class="token operator">=</span> ECDSA<span class="token punctuation">.</span><span class="token function">recover</span><span class="token punctuation">(</span>_hash<span class="token punctuation">,</span> signature1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">address</span> recoveredAddr2 <span class="token operator">=</span> ECDSA<span class="token punctuation">.</span><span class="token function">recover</span><span class="token punctuation">(</span>_hash<span class="token punctuation">,</span> signature2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Note, that we should abstain from using the require here in order to allow for fee estimation to work</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>recoveredAddr1 <span class="token operator">!=</span> owner1 <span class="token operator">||</span> recoveredAddr2 <span class="token operator">!=</span> owner2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        magic <span class="token operator">=</span> <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交易验证" tabindex="-1"><a class="header-anchor" href="#交易验证" aria-hidden="true">#</a> 交易验证</h3><p>让我们来实现验证过程。它负责验证交易的签名和增加nonce。注意，这个方法允许做的事情有一些限制。你可以在这里读到更多的信息（.../developer-guides/aa.md#limitations-the-verification-step）。</p><p>要增加nonce，你应该使用<code>NONCE_HOLDER_SYSTEM_CONTRACT</code>系统合约的<code>incrementNonceIfEquals</code>方法。它获取交易的nonce，并检查该nonce是否与提供的nonce相同。如果不一样，交易就会恢复。否则，nonce被增加。</p>`,17),A=s("code",null,"NONCE_HOLDER_SYSTEM_CONTRACT",-1),S=s("code",null,"NONCE_HOLDER_SYSTEM_CONTRACT",-1),E=p(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// Access zkSync system contracts, in this case for nonce validation vs NONCE_HOLDER_SYSTEM_CONTRACT</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/zksync-contracts/l2/system-contracts/Constants.sol&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F=s("code",null,"NONCE_HOLDER_SYSTEM_CONTRACT",-1),C=s("code",null,"isSystem",-1),D=s("code",null,"SystemContractsCaller",-1),R={href:"https://github.com/matter-labs/v2-testnet-contracts/blob/main/l2/system-contracts/SystemContractsCaller.sol#L77",target:"_blank",rel:"noopener noreferrer"},q=p(`<div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// to call non-view method of system contracts</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/zksync-contracts/l2/system-contracts/libraries/SystemContractsCaller.sol&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>TransactionHelper</code>库（上面已经导入了<code>using TransactionHelper for Transaction;</code>），可以用来获取应该被签名的交易的哈希值。你也可以实现你自己的签名方案，对要签名的事务使用不同的承诺，但在这个例子中，我们使用这个库提供的哈希值。</p><p>最后，如果验证成功，<code>_validateTransaction</code>方法必须返回常量<code>ACCOUNT_VALIDATION_SUCCESS_MAGIC</code>，如果失败则返回空值<code>bytes4(0)</code>。</p><p>下面是<code>_validateTransaction</code>方法的完整实现。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">_validateTransaction</span><span class="token punctuation">(</span>
    <span class="token builtin">bytes32</span> _suggestedSignedHash<span class="token punctuation">,</span>
    Transaction <span class="token keyword">calldata</span> _transaction
<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes4</span> magic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Incrementing the nonce of the account.</span>
    <span class="token comment">// Note, that reserved[0] by convention is currently equal to the nonce passed in the transaction</span>
    SystemContractsCaller<span class="token punctuation">.</span><span class="token function">systemCallWithPropagatedRevert</span><span class="token punctuation">(</span>
        <span class="token builtin">uint32</span><span class="token punctuation">(</span><span class="token function">gasleft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token builtin">address</span><span class="token punctuation">(</span>NONCE_HOLDER_SYSTEM_CONTRACT<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token number">0</span><span class="token punctuation">,</span>
        abi<span class="token punctuation">.</span><span class="token function">encodeCall</span><span class="token punctuation">(</span>INonceHolder<span class="token punctuation">.</span>incrementMinNonceIfEquals<span class="token punctuation">,</span> <span class="token punctuation">(</span>_transaction<span class="token punctuation">.</span>nonce<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token builtin">bytes32</span> txHash<span class="token punctuation">;</span>
    <span class="token comment">// While the suggested signed hash is usually provided, it is generally</span>
    <span class="token comment">// not recommended to rely on it to be present, since in the future</span>
    <span class="token comment">// there may be tx types with no suggested signed hash.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_suggestedSignedHash <span class="token operator">==</span> <span class="token builtin">bytes32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        txHash <span class="token operator">=</span> _transaction<span class="token punctuation">.</span><span class="token function">encodeHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        txHash <span class="token operator">=</span> _suggestedSignedHash<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// The fact there is are enough balance for the account</span>
    <span class="token comment">// should be checked explicitly to prevent user paying for fee for a</span>
    <span class="token comment">// transaction that wouldn&#39;t be included on Ethereum.</span>
    <span class="token builtin">uint256</span> totalRequiredBalance <span class="token operator">=</span> _transaction<span class="token punctuation">.</span><span class="token function">totalRequiredBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">require</span><span class="token punctuation">(</span>totalRequiredBalance <span class="token operator">&lt;=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">,</span> <span class="token string">&quot;Not enough balance for fee + value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValidSignature</span><span class="token punctuation">(</span>txHash<span class="token punctuation">,</span> _transaction<span class="token punctuation">.</span>signature<span class="token punctuation">)</span> <span class="token operator">==</span> EIP1271_SUCCESS_RETURN_VALUE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        magic <span class="token operator">=</span> ACCOUNT_VALIDATION_SUCCESS_MAGIC<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        magic <span class="token operator">=</span> <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为交易支付费用" tabindex="-1"><a class="header-anchor" href="#为交易支付费用" aria-hidden="true">#</a> 为交易支付费用</h3><p>我们现在应该实现<code>payForTransaction</code>方法。TransactionHelper &quot;库已经为我们提供了 &quot;payToTheBootloader &quot;方法，该方法将&quot;_transaction.maxFeePerGas * _transaction.gasLimit &quot;ETH发送给bootloader。因此，实现起来相当简单明了。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">payForTransaction</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span>
        Transaction <span class="token keyword">calldata</span> _transaction
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> override onlyBootloader <span class="token punctuation">{</span>
        <span class="token builtin">bool</span> success <span class="token operator">=</span> _transaction<span class="token punctuation">.</span><span class="token function">payToTheBootloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;Failed to pay the fee to the operator&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现对付款人的支持" tabindex="-1"><a class="header-anchor" href="#实现对付款人的支持" aria-hidden="true">#</a> 实现对付款人的支持</h3>`,9),O=p(`<p>TransactionHelper &quot;库提供了 &quot;processPaymasterInput&quot;，它正是这样做的：处理paymaster参数与EOAs中的一样。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">prepareForPaymaster</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span> <span class="token comment">// _txHash</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span> <span class="token comment">// _suggestedSignedHash</span>
        Transaction <span class="token keyword">calldata</span> _transaction
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> override onlyBootloader <span class="token punctuation">{</span>
        _transaction<span class="token punctuation">.</span><span class="token function">processPaymasterInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交易执行" tabindex="-1"><a class="header-anchor" href="#交易执行" aria-hidden="true">#</a> 交易执行</h3><p>交易执行的最基本实现是非常直接的。我们提取交易数据并执行它。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">_executeTransaction</span><span class="token punctuation">(</span>Transaction <span class="token keyword">calldata</span> _transaction<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
    <span class="token builtin">uint256</span> to <span class="token operator">=</span> _transaction<span class="token punctuation">.</span>to<span class="token punctuation">;</span>
    <span class="token comment">// By convention, the \`reserved[1]\` field is msg.value</span>
    <span class="token builtin">uint256</span> value <span class="token operator">=</span> _transaction<span class="token punctuation">.</span>reserved<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data <span class="token operator">=</span> _transaction<span class="token punctuation">.</span>data<span class="token punctuation">;</span>

    <span class="token builtin">bool</span> success<span class="token punctuation">;</span>
    <span class="token comment">// execute transaction</span>
    <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
        success <span class="token operator">:=</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token function">gas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Return value required for the transaction to be correctly processed by the server.</span>
    <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，请注意，调用ContractDeployer只有在 &quot;isSystem &quot;调用标志下才能实现。为了让你的用户能够部署合同，你应该明确地这样做。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token keyword">function</span> <span class="token function">_executeTransaction</span><span class="token punctuation">(</span>Transaction <span class="token keyword">calldata</span> _transaction<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
    <span class="token builtin">address</span> to <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token builtin">uint160</span><span class="token punctuation">(</span>_transaction<span class="token punctuation">.</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">uint128</span> value <span class="token operator">=</span> Utils<span class="token punctuation">.</span><span class="token function">safeCastToU128</span><span class="token punctuation">(</span>_transaction<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data <span class="token operator">=</span> _transaction<span class="token punctuation">.</span>data<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span>DEPLOYER_SYSTEM_CONTRACT<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">uint32</span> gas <span class="token operator">=</span> Utils<span class="token punctuation">.</span><span class="token function">safeCastToU32</span><span class="token punctuation">(</span><span class="token function">gasleft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Note, that the deployer contract can only be called</span>
        <span class="token comment">// with a &quot;systemCall&quot; flag.</span>
        SystemContractsCaller<span class="token punctuation">.</span><span class="token function">systemCallWithPropagatedRevert</span><span class="token punctuation">(</span>ag<span class="token operator">-</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">1</span>gr0ere8lgaag<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span><span class="token number">1</span>gr0ere8ls<span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token builtin">bool</span> success<span class="token punctuation">;</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            success <span class="token operator">:=</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token function">gas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，操作者是否认为交易成功，只取决于对<code>executeTransactions</code>的调用是否成功。因此，强烈建议为交易设置<code>require(success)</code>，以便用户获得最佳的用户体验。</p><h3 id="账户的全部代码" tabindex="-1"><a class="header-anchor" href="#账户的全部代码" aria-hidden="true">#</a> 账户的全部代码</h3><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IAccount.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/zksync-contracts/l2/system-contracts/libraries/TransactionHelper.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;@openzeppelin/contracts/interfaces/IERC1271.sol&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Used for signature validation</span>
<span class="token keyword">import</span> <span class="token string">&quot;@openzeppelin/contracts/utils/cryptography/ECDSA.sol&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Access zkSync system contracts, in this case for nonce validation vs NONCE_HOLDER_SYSTEM_CONTRACT</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/zksync-contracts/l2/system-contracts/Constants.sol&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// to call non-view method of system contracts</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/zksync-contracts/l2/system-contracts/libraries/SystemContractsCaller.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">TwoUserMultisig</span> <span class="token keyword">is</span> IAccount<span class="token punctuation">,</span> IERC1271 <span class="token punctuation">{</span>
    <span class="token comment">// to get transaction hash</span>
    <span class="token keyword">using</span> <span class="token class-name">TransactionHelper</span> <span class="token keyword">for</span> Transaction<span class="token punctuation">;</span>

    <span class="token comment">// state variables for account owners</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner1<span class="token punctuation">;</span>
    <span class="token builtin">address</span> <span class="token keyword">public</span> owner2<span class="token punctuation">;</span>

    <span class="token builtin">bytes4</span> <span class="token keyword">constant</span> EIP1271_SUCCESS_RETURN_VALUE <span class="token operator">=</span> <span class="token number">0x1626ba7e</span><span class="token punctuation">;</span>

    <span class="token keyword">modifier</span> <span class="token function">onlyBootloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>
            msg<span class="token punctuation">.</span>sender <span class="token operator">==</span> BOOTLOADER_FORMAL_ADDRESS<span class="token punctuation">,</span>
            <span class="token string">&quot;Only bootloader can call this method&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Continue execution if called from the bootloader.</span>
        <span class="token keyword">_</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">address</span> _owner1<span class="token punctuation">,</span> <span class="token builtin">address</span> _owner2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        owner1 <span class="token operator">=</span> _owner1<span class="token punctuation">;</span>
        owner2 <span class="token operator">=</span> _owner2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">validateTransaction</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span>
        <span class="token builtin">bytes32</span> _suggestedSignedHash<span class="token punctuation">,</span>
        Transaction <span class="token keyword">calldata</span> _transaction
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> override onlyBootloader <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes4</span> magic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">_validateTransaction</span><span class="token punctuation">(</span>_suggestedSignedHash<span class="token punctuation">,</span> _transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">_validateTransaction</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span> _suggestedSignedHash<span class="token punctuation">,</span>
        Transaction <span class="token keyword">calldata</span> _transaction
    <span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes4</span> magic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Incrementing the nonce of the account.</span>
        <span class="token comment">// Note, that reserved[0] by convention is currently equal to the nonce passed in the transaction</span>
        SystemContractsCaller<span class="token punctuation">.</span><span class="token function">systemCallWithPropagatedRevert</span><span class="token punctuation">(</span>
            <span class="token builtin">uint32</span><span class="token punctuation">(</span><span class="token function">gasleft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token builtin">address</span><span class="token punctuation">(</span>NONCE_HOLDER_SYSTEM_CONTRACT<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span>
            abi<span class="token punctuation">.</span><span class="token function">encodeCall</span><span class="token punctuation">(</span>INonceHolder<span class="token punctuation">.</span>incrementMinNonceIfEquals<span class="token punctuation">,</span> <span class="token punctuation">(</span>_transaction<span class="token punctuation">.</span>nonce<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token builtin">bytes32</span> txHash<span class="token punctuation">;</span>
        <span class="token comment">// While the suggested signed hash is usually provided, it is generally</span>
        <span class="token comment">// not recommended to rely on it to be present, since in the future</span>
        <span class="token comment">// there may be tx types with no suggested signed hash.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_suggestedSignedHash <span class="token operator">==</span> <span class="token builtin">bytes32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            txHash <span class="token operator">=</span> _transaction<span class="token punctuation">.</span><span class="token function">encodeHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            txHash <span class="token operator">=</span> _suggestedSignedHash<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// The fact there is are enough balance for the account</span>
        <span class="token comment">// should be checked explicitly to prevent user paying for fee for a</span>
        <span class="token comment">// transaction that wouldn&#39;t be included on Ethereum.</span>
        <span class="token builtin">uint256</span> totalRequiredBalance <span class="token operator">=</span> _transaction<span class="token punctuation">.</span><span class="token function">totalRequiredBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>totalRequiredBalance <span class="token operator">&lt;=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span>balance<span class="token punctuation">,</span> <span class="token string">&quot;Not enough balance for fee + value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValidSignature</span><span class="token punctuation">(</span>txHash<span class="token punctuation">,</span> _transaction<span class="token punctuation">.</span>signature<span class="token punctuation">)</span> <span class="token operator">==</span> EIP1271_SUCCESS_RETURN_VALUE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            magic <span class="token operator">=</span> ACCOUNT_VALIDATION_SUCCESS_MAGIC<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            magic <span class="token operator">=</span> <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">executeTransaction</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span>
        Transaction <span class="token keyword">calldata</span> _transaction
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> override onlyBootloader <span class="token punctuation">{</span>
        <span class="token function">_executeTransaction</span><span class="token punctuation">(</span>_transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">_executeTransaction</span><span class="token punctuation">(</span>Transaction <span class="token keyword">calldata</span> _transaction<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token punctuation">{</span>
        <span class="token builtin">address</span> to <span class="token operator">=</span> <span class="token builtin">address</span><span class="token punctuation">(</span><span class="token builtin">uint160</span><span class="token punctuation">(</span>_transaction<span class="token punctuation">.</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">uint128</span> value <span class="token operator">=</span> Utils<span class="token punctuation">.</span><span class="token function">safeCastToU128</span><span class="token punctuation">(</span>_transaction<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">bytes</span> <span class="token keyword">memory</span> data <span class="token operator">=</span> _transaction<span class="token punctuation">.</span>data<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> <span class="token builtin">address</span><span class="token punctuation">(</span>DEPLOYER_SYSTEM_CONTRACT<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">uint32</span> gas <span class="token operator">=</span> Utils<span class="token punctuation">.</span><span class="token function">safeCastToU32</span><span class="token punctuation">(</span><span class="token function">gasleft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Note, that the deployer contract can only be called</span>
            <span class="token comment">// with a &quot;systemCall&quot; flag.</span>
            SystemContractsCaller<span class="token punctuation">.</span><span class="token function">systemCallWithPropagatedRevert</span><span class="token punctuation">(</span>gas<span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token builtin">bool</span> success<span class="token punctuation">;</span>
            <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
                success <span class="token operator">:=</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token function">gas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mload</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">executeTransactionFromOutside</span><span class="token punctuation">(</span>Transaction <span class="token keyword">calldata</span> _transaction<span class="token punctuation">)</span>
        <span class="token keyword">external</span>
        <span class="token keyword">payable</span>
    <span class="token punctuation">{</span>
        <span class="token function">_validateTransaction</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> _transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">_executeTransaction</span><span class="token punctuation">(</span>_transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">isValidSignature</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _hash<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> _signature<span class="token punctuation">)</span>
        <span class="token keyword">public</span>
        <span class="token keyword">view</span>
        override
        <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes4</span> magic<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        magic <span class="token operator">=</span> EIP1271_SUCCESS_RETURN_VALUE<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>_signature<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">130</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Signature is invalid anyway, but we need to proceed with the signature verification as usual</span>
            <span class="token comment">// in order for the fee estimation to work correctly</span>
            _signature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span><span class="token number">130</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Making sure that the signatures look like a valid ECDSA signature and are not rejected rightaway</span>
            <span class="token comment">// while skipping the main verification process.</span>
            _signature<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">bytes1</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            _signature<span class="token punctuation">[</span><span class="token number">129</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">bytes1</span><span class="token punctuation">(</span><span class="token builtin">uint8</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> signature1<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> signature2<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">extractECDSASignature</span><span class="token punctuation">(</span>_signature<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">checkValidECDSASignatureFormat</span><span class="token punctuation">(</span>signature1<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">checkValidECDSASignatureFormat</span><span class="token punctuation">(</span>signature2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            magic <span class="token operator">=</span> <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">address</span> recoveredAddr1 <span class="token operator">=</span> ECDSA<span class="token punctuation">.</span><span class="token function">recover</span><span class="token punctuation">(</span>_hash<span class="token punctuation">,</span> signature1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">address</span> recoveredAddr2 <span class="token operator">=</span> ECDSA<span class="token punctuation">.</span><span class="token function">recover</span><span class="token punctuation">(</span>_hash<span class="token punctuation">,</span> signature2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Note, that we should abstain from using the require here in order to allow for fee estimation to work</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>recoveredAddr1 <span class="token operator">!=</span> owner1 <span class="token operator">||</span> recoveredAddr2 <span class="token operator">!=</span> owner2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            magic <span class="token operator">=</span> <span class="token builtin">bytes4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// This function verifies that the ECDSA signature is both in correct format and non-malleable</span>
    <span class="token keyword">function</span> <span class="token function">checkValidECDSASignatureFormat</span><span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> _signature<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>_signature<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token builtin">uint8</span> v<span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> r<span class="token punctuation">;</span>
        <span class="token builtin">bytes32</span> s<span class="token punctuation">;</span>
        <span class="token comment">// Signature loading code</span>
        <span class="token comment">// we jump 32 (0x20) as the first slot of bytes contains the length</span>
        <span class="token comment">// we jump 65 (0x41) per signature</span>
        <span class="token comment">// for v we load 32 bytes ending with v (the first 31 come from s) then apply a mask</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            r <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_signature<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            s <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_signature<span class="token punctuation">,</span> <span class="token number">0x40</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            v <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_signature<span class="token punctuation">,</span> <span class="token number">0x41</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xff</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>v <span class="token operator">!=</span> <span class="token number">27</span> <span class="token operator">&amp;&amp;</span> v <span class="token operator">!=</span> <span class="token number">28</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// EIP-2 still allows signature malleability for ecrecover(). Remove this possibility and make the signature</span>
        <span class="token comment">// unique. Appendix F in the Ethereum Yellow paper (https://ethereum.github.io/yellowpaper/paper.pdf), defines</span>
        <span class="token comment">// the valid range for s in (301): 0 &lt; s &lt; secp256k1n ÷ 2 + 1, and for v in (302): v ∈ {27, 28}. Most</span>
        <span class="token comment">// signatures from current libraries generate a unique signature with an s-value in the lower half order.</span>
        <span class="token comment">//</span>
        <span class="token comment">// If your library generates malleable signatures, such as s-values in the upper range, calculate a new s-value</span>
        <span class="token comment">// with 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 - s1 and flip v from 27 to 28 or</span>
        <span class="token comment">// vice versa. If your library also generates signatures with 0/1 for v instead 27/28, add 27 to v to accept</span>
        <span class="token comment">// these malleable signatures as well.</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token builtin">uint256</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">extractECDSASignature</span><span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> _fullSignature<span class="token punctuation">)</span> <span class="token keyword">internal</span> <span class="token keyword">pure</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">bytes</span> <span class="token keyword">memory</span> signature1<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> signature2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>_fullSignature<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token string">&quot;Invalid length&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        signature1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span><span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        signature2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bytes</span><span class="token punctuation">(</span><span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Copying the first signature. Note, that we need an offset of 0x20 </span>
        <span class="token comment">// since it is where the length of the \`_fullSignature\` is stored</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> r <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_fullSignature<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> s <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_fullSignature<span class="token punctuation">,</span> <span class="token number">0x40</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> v <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_fullSignature<span class="token punctuation">,</span> <span class="token number">0x41</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xff</span><span class="token punctuation">)</span>

            <span class="token function">mstore</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>signature1<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
            <span class="token function">mstore</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>signature1<span class="token punctuation">,</span> <span class="token number">0x40</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
            <span class="token function">mstore8</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>signature1<span class="token punctuation">,</span> <span class="token number">0x60</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Copying the second signature.</span>
        <span class="token keyword">assembly</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> r <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_fullSignature<span class="token punctuation">,</span> <span class="token number">0x61</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> s <span class="token operator">:=</span> <span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_fullSignature<span class="token punctuation">,</span> <span class="token number">0x81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> v <span class="token operator">:=</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token function">mload</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>_fullSignature<span class="token punctuation">,</span> <span class="token number">0x82</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0xff</span><span class="token punctuation">)</span>

            <span class="token function">mstore</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>signature2<span class="token punctuation">,</span> <span class="token number">0x20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
            <span class="token function">mstore</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>signature2<span class="token punctuation">,</span> <span class="token number">0x40</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
            <span class="token function">mstore8</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>signature2<span class="token punctuation">,</span> <span class="token number">0x60</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">payForTransaction</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span>
        Transaction <span class="token keyword">calldata</span> _transaction
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> override onlyBootloader <span class="token punctuation">{</span>
        <span class="token builtin">bool</span> success <span class="token operator">=</span> _transaction<span class="token punctuation">.</span><span class="token function">payToTheBootloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;Failed to pay the fee to the operator&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">prepareForPaymaster</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span> <span class="token comment">// _txHash</span>
        <span class="token builtin">bytes32</span><span class="token punctuation">,</span> <span class="token comment">// _suggestedSignedHash</span>
        Transaction <span class="token keyword">calldata</span> _transaction
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> override onlyBootloader <span class="token punctuation">{</span>
        _transaction<span class="token punctuation">.</span><span class="token function">processPaymasterInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token punctuation">{</span>
        <span class="token comment">// fallback of default account shouldn&#39;t be called by bootloader under no circumstances</span>
        <span class="token keyword">assert</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender <span class="token operator">!=</span> BOOTLOADER_FORMAL_ADDRESS<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// If the contract is called directly, behave like an EOA</span>
    <span class="token punctuation">}</span>

    <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">payable</span> <span class="token punctuation">{</span>
        <span class="token comment">// If the contract is called directly, behave like an EOA.</span>
        <span class="token comment">// Note, that is okay if the bootloader sends funds with no calldata as it may be used for refunds/operator payments</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工厂" tabindex="-1"><a class="header-anchor" href="#工厂" aria-hidden="true">#</a> 工厂</h2><p>现在，让我们建立一个可以部署这些账户的工厂。为了部署智能合约账户，我们需要直接与<code>DEPLOYER_SYSTEM_CONTRACT</code>互动。对于确定性的地址，我们将调用<code>create2Account</code>方法。</p><p>代码将看起来如下。</p><div class="language-solidity line-numbers-mode" data-ext="solidity"><pre class="language-solidity"><code><span class="token comment">// SPDX-License-Identifier: MIT</span>
<span class="token keyword">pragma</span> <span class="token keyword">solidity</span> <span class="token operator">^</span><span class="token version number">0.8.0</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/zksync-contracts/l2/system-contracts/Constants.sol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@matterlabs/zksync-contracts/l2/system-contracts/libraries/SystemContractsCaller.sol&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">contract</span> <span class="token class-name">AAFactory</span> <span class="token punctuation">{</span>
    <span class="token builtin">bytes32</span> <span class="token keyword">public</span> aaBytecodeHash<span class="token punctuation">;</span>

    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token builtin">bytes32</span> _aaBytecodeHash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aaBytecodeHash <span class="token operator">=</span> _aaBytecodeHash<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">deployAccount</span><span class="token punctuation">(</span>
        <span class="token builtin">bytes32</span> salt<span class="token punctuation">,</span>
        <span class="token builtin">address</span> owner1<span class="token punctuation">,</span>
        <span class="token builtin">address</span> owner2
    <span class="token punctuation">)</span> <span class="token keyword">external</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token builtin">address</span> accountAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token builtin">bool</span> success<span class="token punctuation">,</span> <span class="token builtin">bytes</span> <span class="token keyword">memory</span> returnData<span class="token punctuation">)</span> <span class="token operator">=</span> SystemContractsCaller
            <span class="token punctuation">.</span><span class="token function">systemCallWithReturndata</span><span class="token punctuation">(</span>
                <span class="token builtin">uint32</span><span class="token punctuation">(</span><span class="token function">gasleft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token builtin">address</span><span class="token punctuation">(</span>DEPLOYER_SYSTEM_CONTRACT<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token builtin">uint128</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                abi<span class="token punctuation">.</span><span class="token function">encodeCall</span><span class="token punctuation">(</span>
                    DEPLOYER_SYSTEM_CONTRACT<span class="token punctuation">.</span>create2Account<span class="token punctuation">,</span>
                    <span class="token punctuation">(</span>salt<span class="token punctuation">,</span> aaBytecodeHash<span class="token punctuation">,</span> abi<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>owner1<span class="token punctuation">,</span> owner2<span class="token punctuation">)</span><span class="token punctuation">,</span> IContractDeployer<span class="token punctuation">.</span>AccountAbstractionVersion<span class="token punctuation">.</span>Version1<span class="token punctuation">)</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">require</span><span class="token punctuation">(</span>success<span class="token punctuation">,</span> <span class="token string">&quot;Deployment failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">(</span>accountAddress<span class="token punctuation">)</span> <span class="token operator">=</span> abi<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>returnData<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">address</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得一提的是，在zkSync上，合约的部署不是通过字节码完成的，而是通过字节码哈希完成的。字节码本身是通过<code>factoryDeps</code>字段传递给操作者的。请注意，\`_aaBytecodeHash&#39;必须被特别形成。</p><ul><li>首先，它是用sha256散列的。</li><li>然后，前两个字节被替换为32字节的字节码的长度。</li></ul><p>你不需要担心这个问题，因为我们的SDK提供了一个内置的方法来做到这一点，解释如下。</p><h2 id="部署工厂" tabindex="-1"><a class="header-anchor" href="#部署工厂" aria-hidden="true">#</a> 部署工厂</h2><p>要部署一个工厂，我们需要创建一个部署脚本。创建<code>deploy</code>文件夹，并在其中创建一个文件。<code>deploy-factory.ts</code>。把下面的部署脚本放在那里。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utils<span class="token punctuation">,</span> Wallet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zksync-web3&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ethers <span class="token keyword">from</span> <span class="token string">&#39;ethers&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HardhatRuntimeEnvironment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hardhat/types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Deployer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@matterlabs/hardhat-zksync-deploy&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>hre<span class="token operator">:</span> HardhatRuntimeEnvironment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;WALLET_PRIVATE_KEY&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> deployer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Deployer</span><span class="token punctuation">(</span>hre<span class="token punctuation">,</span> wallet<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> factoryArtifact <span class="token operator">=</span> <span class="token keyword">await</span> deployer<span class="token punctuation">.</span><span class="token function">loadArtifact</span><span class="token punctuation">(</span><span class="token string">&#39;AAFactory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> aaArtifact <span class="token operator">=</span> <span class="token keyword">await</span> deployer<span class="token punctuation">.</span><span class="token function">loadArtifact</span><span class="token punctuation">(</span><span class="token string">&#39;TwoUserMultisig&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Deposit some funds to L2 in order to be able to perform L2 transactions.</span>
  <span class="token comment">// You can remove the depositing step if the \`wallet\` has enough funds on zkSync</span>
  <span class="token keyword">const</span> depositAmount <span class="token operator">=</span> ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">parseEther</span><span class="token punctuation">(</span><span class="token string">&#39;0.001&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> depositHandle <span class="token operator">=</span> <span class="token keyword">await</span> deployer<span class="token punctuation">.</span>zkWallet<span class="token punctuation">.</span><span class="token function">deposit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    to<span class="token operator">:</span> deployer<span class="token punctuation">.</span>zkWallet<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    token<span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token constant">ETH_ADDRESS</span><span class="token punctuation">,</span>
    amount<span class="token operator">:</span> depositAmount<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> depositHandle<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Getting the bytecodeHash of the account</span>
  <span class="token keyword">const</span> bytecodeHash <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">hashBytecode</span><span class="token punctuation">(</span>aaArtifact<span class="token punctuation">.</span>bytecode<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> factory <span class="token operator">=</span> <span class="token keyword">await</span> deployer<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span>
    factoryArtifact<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>bytecodeHash<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token comment">// Since the factory requires the code of the multisig to be available,</span>
      <span class="token comment">// we should pass it here as well.</span>
      aaArtifact<span class="token punctuation">.</span>bytecode<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">AA factory address: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>factory<span class="token punctuation">.</span>address<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了部署工厂，你应该编译合同并运行脚本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn hardhat compile
yarn hardhat deploy-zksync --script deploy-factory.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果应该大致如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AA factory address: 0x9db333Cb68Fb6D317E3E415269a5b9bE7c72627Ds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，每次运行的地址都会不同。</p><h2 id="使用账户工作" tabindex="-1"><a class="header-anchor" href="#使用账户工作" aria-hidden="true">#</a> 使用账户工作</h2><h3 id="部署一个账户" tabindex="-1"><a class="header-anchor" href="#部署一个账户" aria-hidden="true">#</a> 部署一个账户</h3><p>现在，让我们部署一个账户并用它发起一个新的交易。在这一节中，我们假设你在zkSync上已经有一个有足够资金的EOA账户。 在<code>deploy</code>中，文件夹创建了一个文件<code>deploy-multisig.ts</code>，我们将把脚本放在那里。</p><p>首先，让我们部署AA。这将是对<code>deployAccount</code>函数的一个调用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utils<span class="token punctuation">,</span> Wallet<span class="token punctuation">,</span> Provider<span class="token punctuation">,</span> EIP712Signer<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zksync-web3&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ethers <span class="token keyword">from</span> <span class="token string">&#39;ethers&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HardhatRuntimeEnvironment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hardhat/types&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Put the address of your AA factory</span>
<span class="token keyword">const</span> <span class="token constant">AA_FACTORY_ADDRESS</span> <span class="token operator">=</span> <span class="token string">&#39;&lt;FACTORY-ADDRESS&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>hre<span class="token operator">:</span> HardhatRuntimeEnvironment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> provider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Provider</span><span class="token punctuation">(</span><span class="token string">&#39;https://zksync2-testnet.zksync.dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;WALLET-PRIVATE-KEY&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> factoryArtifact <span class="token operator">=</span> <span class="token keyword">await</span> hre<span class="token punctuation">.</span>artifacts<span class="token punctuation">.</span><span class="token function">readArtifact</span><span class="token punctuation">(</span><span class="token string">&#39;AAFactory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> aaFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers</span><span class="token punctuation">.</span><span class="token function">Contract</span><span class="token punctuation">(</span>
    <span class="token constant">AA_FACTORY_ADDRESS</span><span class="token punctuation">,</span>
    factoryArtifact<span class="token punctuation">.</span>abi<span class="token punctuation">,</span>
    wallet
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// The two owners of the multisig</span>
  <span class="token keyword">const</span> owner1 <span class="token operator">=</span> Wallet<span class="token punctuation">.</span><span class="token function">createRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> owner2 <span class="token operator">=</span> Wallet<span class="token punctuation">.</span><span class="token function">createRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// For the simplicity of the tutorial, we will use zero hash as salt</span>
  <span class="token keyword">const</span> salt <span class="token operator">=</span> ethers<span class="token punctuation">.</span>constants<span class="token punctuation">.</span>HashZero<span class="token punctuation">;</span>

  <span class="token keyword">const</span> tx <span class="token operator">=</span> <span class="token keyword">await</span> aaFactory<span class="token punctuation">.</span><span class="token function">deployAccount</span><span class="token punctuation">(</span>
    salt<span class="token punctuation">,</span>
    owner1<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    owner2<span class="token punctuation">.</span>address
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> tx<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Getting the address of the deployed contract</span>
  <span class="token keyword">const</span> abiCoder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">AbiCoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> multisigAddress <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">create2Address</span><span class="token punctuation">(</span>
    <span class="token constant">AA_FACTORY_ADDRESS</span><span class="token punctuation">,</span>
    <span class="token keyword">await</span> aaFactory<span class="token punctuation">.</span><span class="token function">aaBytecodeHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    salt<span class="token punctuation">,</span>
    abiCoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>owner1<span class="token punctuation">.</span>address<span class="token punctuation">,</span> owner2<span class="token punctuation">.</span>address<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Multisig deployed on address </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>multisigAddress<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，zkSync的地址推导规则与Ethereum不同_。你应该始终使用<code>zksync-web3</code>SDK的<code>createAddress</code>和<code>create2Address</code>实用方法。</p><h3 id="从这个账户开始交易" tabindex="-1"><a class="header-anchor" href="#从这个账户开始交易" aria-hidden="true">#</a> 从这个账户开始交易</h3><p>在部署的账户可以进行任何交易之前，我们需要向其添加一些ETH，以便它可以支付交易费用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">await</span> <span class="token punctuation">(</span>
    <span class="token keyword">await</span> wallet<span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      to<span class="token operator">:</span> multisigAddress<span class="token punctuation">,</span>
      <span class="token comment">// You can increase the amount of ETH sent to the multisig</span>
      value<span class="token operator">:</span> ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">parseEther</span><span class="token punctuation">(</span><span class="token string">&#39;0.003&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，作为一个例子，让我们尝试部署一个新的multisig，但交易的发起者将是我们在前一部分部署的账户。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">let</span> aaTx <span class="token operator">=</span> <span class="token keyword">await</span> aaFactory<span class="token punctuation">.</span>populateTransaction<span class="token punctuation">.</span><span class="token function">deployAccount</span><span class="token punctuation">(</span>
    salt<span class="token punctuation">,</span>
    Wallet<span class="token punctuation">.</span><span class="token function">createRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    Wallet<span class="token punctuation">.</span><span class="token function">createRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>address
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们需要填写所有的交易字段。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> gasLimit <span class="token operator">=</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">estimateGas</span><span class="token punctuation">(</span>aaTx<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> gasPrice <span class="token operator">=</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getGasPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  aaTx <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>aaTx<span class="token punctuation">,</span>
    from<span class="token operator">:</span> multisigAddress<span class="token punctuation">,</span>
    gasLimit<span class="token operator">:</span> gasLimit<span class="token punctuation">,</span>
    gasPrice<span class="token operator">:</span> gasPrice<span class="token punctuation">,</span>
    chainId<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getNetwork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>chainId<span class="token punctuation">,</span>
    nonce<span class="token operator">:</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getTransactionCount</span><span class="token punctuation">(</span>multisigAddress<span class="token punctuation">)</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token number">113</span><span class="token punctuation">,</span>
    customData<span class="token operator">:</span> <span class="token punctuation">{</span>
      gasPerPubdata<span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token constant">DEFAULT_GAS_PER_PUBDATA_LIMIT</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token keyword">as</span> types<span class="token punctuation">.</span>Eip712Meta<span class="token punctuation">,</span>
    value<span class="token operator">:</span> ethers<span class="token punctuation">.</span>BigNumber<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">关于gasLimit的说明</p><p>目前，我们希望<code>l2gasLimit</code>能够涵盖验证和执行步骤。目前，<code>estimateGas&#39;返回的气体数量是</code>execution_gas + 20000&#39;，其中<code>20000&#39;大致等于默认AA收取费用和验证签名所需的开销。如果你的AA有一个非常昂贵的验证步骤，你应该在</code>l2gasLimit\`中加入一些常数。</p></div><p>然后，我们需要签署交易，并在交易的自定义数据中提供<code>aaParamas</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> signedTxHash <span class="token operator">=</span> EIP712Signer<span class="token punctuation">.</span><span class="token function">getSignedDigest</span><span class="token punctuation">(</span>aaTx<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> signature <span class="token operator">=</span> ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// Note, that \`signMessage\` wouldn&#39;t work here, since we don&#39;t want</span>
    <span class="token comment">// the signed hash to be prefixed with \`\\x19Ethereum Signed Message:\\n\`</span>
    ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">joinSignature</span><span class="token punctuation">(</span>owner1<span class="token punctuation">.</span><span class="token function">_signingKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">signDigest</span><span class="token punctuation">(</span>signedTxHash<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">joinSignature</span><span class="token punctuation">(</span>owner2<span class="token punctuation">.</span><span class="token function">_signingKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">signDigest</span><span class="token punctuation">(</span>signedTxHash<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  aaTx<span class="token punctuation">.</span>customData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>aaTx<span class="token punctuation">.</span>customData<span class="token punctuation">,</span>
    customSignature<span class="token operator">:</span> signature<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们准备发送交易。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The multisig&#39;s nonce before the first tx is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getTransactionCount</span><span class="token punctuation">(</span>
      multisigAddress
    <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> sentTx <span class="token operator">=</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span>aaTx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> sentTx<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Checking that the nonce for the account has increased</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The multisig&#39;s nonce after the first tx is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getTransactionCount</span><span class="token punctuation">(</span>
      multisigAddress
    <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完整的例子" tabindex="-1"><a class="header-anchor" href="#完整的例子" aria-hidden="true">#</a> 完整的例子</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utils<span class="token punctuation">,</span> Wallet<span class="token punctuation">,</span> Provider<span class="token punctuation">,</span> EIP712Signer<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;zksync-web3&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ethers <span class="token keyword">from</span> <span class="token string">&#39;ethers&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HardhatRuntimeEnvironment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hardhat/types&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Put the address of your AA factory</span>
<span class="token keyword">const</span> <span class="token constant">AA_FACTORY_ADDRESS</span> <span class="token operator">=</span> <span class="token string">&#39;&lt;FACTORY-ADDRESS&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>hre<span class="token operator">:</span> HardhatRuntimeEnvironment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> provider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Provider</span><span class="token punctuation">(</span><span class="token string">&#39;https://zksync2-testnet.zksync.dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> wallet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wallet</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;WALLET-PRIVATE-KEY&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> factoryArtifact <span class="token operator">=</span> <span class="token keyword">await</span> hre<span class="token punctuation">.</span>artifacts<span class="token punctuation">.</span><span class="token function">readArtifact</span><span class="token punctuation">(</span><span class="token string">&#39;AAFactory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> aaFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers</span><span class="token punctuation">.</span><span class="token function">Contract</span><span class="token punctuation">(</span>
    <span class="token constant">AA_FACTORY_ADDRESS</span><span class="token punctuation">,</span>
    factoryArtifact<span class="token punctuation">.</span>abi<span class="token punctuation">,</span>
    wallet
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// The two owners of the multisig</span>
  <span class="token keyword">const</span> owner1 <span class="token operator">=</span> Wallet<span class="token punctuation">.</span><span class="token function">createRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> owner2 <span class="token operator">=</span> Wallet<span class="token punctuation">.</span><span class="token function">createRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// For the simplicity of the tutorial, we will use zero hash as salt</span>
  <span class="token keyword">const</span> salt <span class="token operator">=</span> ethers<span class="token punctuation">.</span>constants<span class="token punctuation">.</span>HashZero<span class="token punctuation">;</span>

  <span class="token keyword">const</span> tx <span class="token operator">=</span> <span class="token keyword">await</span> aaFactory<span class="token punctuation">.</span><span class="token function">deployAccount</span><span class="token punctuation">(</span>
    salt<span class="token punctuation">,</span>
    owner1<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    owner2<span class="token punctuation">.</span>address
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> tx<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Getting the address of the deployed contract</span>
  <span class="token keyword">const</span> abiCoder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">AbiCoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> multisigAddress <span class="token operator">=</span> utils<span class="token punctuation">.</span><span class="token function">create2Address</span><span class="token punctuation">(</span>
    <span class="token constant">AA_FACTORY_ADDRESS</span><span class="token punctuation">,</span>
    <span class="token keyword">await</span> aaFactory<span class="token punctuation">.</span><span class="token function">aaBytecodeHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    salt<span class="token punctuation">,</span>
    abiCoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;address&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>owner1<span class="token punctuation">.</span>address<span class="token punctuation">,</span> owner2<span class="token punctuation">.</span>address<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Multisig deployed on address </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>multisigAddress<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token punctuation">(</span>
    <span class="token keyword">await</span> wallet<span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      to<span class="token operator">:</span> multisigAddress<span class="token punctuation">,</span>
      <span class="token comment">// You can increase the amount of ETH sent to the multisig</span>
      value<span class="token operator">:</span> ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">parseEther</span><span class="token punctuation">(</span><span class="token string">&#39;0.003&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> aaTx <span class="token operator">=</span> <span class="token keyword">await</span> aaFactory<span class="token punctuation">.</span>populateTransaction<span class="token punctuation">.</span><span class="token function">deployAccount</span><span class="token punctuation">(</span>
    salt<span class="token punctuation">,</span>
    Wallet<span class="token punctuation">.</span><span class="token function">createRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>address<span class="token punctuation">,</span>
    Wallet<span class="token punctuation">.</span><span class="token function">createRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>address
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> gasLimit <span class="token operator">=</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">estimateGas</span><span class="token punctuation">(</span>aaTx<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> gasPrice <span class="token operator">=</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getGasPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  aaTx <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>aaTx<span class="token punctuation">,</span>
    from<span class="token operator">:</span> multisigAddress<span class="token punctuation">,</span>
    gasLimit<span class="token operator">:</span> gasLimit<span class="token punctuation">,</span>
    gasPrice<span class="token operator">:</span> gasPrice<span class="token punctuation">,</span>
    chainId<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getNetwork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>chainId<span class="token punctuation">,</span>
    nonce<span class="token operator">:</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getTransactionCount</span><span class="token punctuation">(</span>multisigAddress<span class="token punctuation">)</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token number">113</span><span class="token punctuation">,</span>
    customData<span class="token operator">:</span> <span class="token punctuation">{</span>
      gasPerPubdata<span class="token operator">:</span> utils<span class="token punctuation">.</span><span class="token constant">DEFAULT_GAS_PER_PUBDATA_LIMIT</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token keyword">as</span> types<span class="token punctuation">.</span>Eip712Meta<span class="token punctuation">,</span>
    value<span class="token operator">:</span> ethers<span class="token punctuation">.</span>BigNumber<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> signedTxHash <span class="token operator">=</span> EIP712Signer<span class="token punctuation">.</span><span class="token function">getSignedDigest</span><span class="token punctuation">(</span>aaTx<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> signature <span class="token operator">=</span> ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// Note, that \`signMessage\` wouldn&#39;t work here, since we don&#39;t want</span>
    <span class="token comment">// the signed hash to be prefixed with \`\\x19Ethereum Signed Message:\\n\`</span>
    ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">joinSignature</span><span class="token punctuation">(</span>owner1<span class="token punctuation">.</span><span class="token function">_signingKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">signDigest</span><span class="token punctuation">(</span>signedTxHash<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    ethers<span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">joinSignature</span><span class="token punctuation">(</span>owner2<span class="token punctuation">.</span><span class="token function">_signingKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">signDigest</span><span class="token punctuation">(</span>signedTxHash<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  aaTx<span class="token punctuation">.</span>customData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>aaTx<span class="token punctuation">.</span>customData<span class="token punctuation">,</span>
    customSignature<span class="token operator">:</span> signature<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The multisig&#39;s nonce before the first tx is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getTransactionCount</span><span class="token punctuation">(</span>
      multisigAddress
    <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> sentTx <span class="token operator">=</span> <span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">sendTransaction</span><span class="token punctuation">(</span>utils<span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span>aaTx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> sentTx<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Checking that the nonce for the account has increased</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The multisig&#39;s nonce after the first tx is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">await</span> provider<span class="token punctuation">.</span><span class="token function">getTransactionCount</span><span class="token punctuation">(</span>
      multisigAddress
    <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要运行该脚本，使用以下命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn hardhat deploy-zksync --script deploy-multisig.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果应该大致如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Multisig deployed on address 0xCEBc59558938bccb43A6C94769F87bBdb770E956
The multisig&#39;s nonce before the first tx is 0
The multisig&#39;s nonce after the first tx is 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>如果你得到一个错误<code>没有足够的余额来支付费用。</code>，尝试增加发送到multisig钱包的ETH数量，以便它有足够的资金来支付交易费用。</p></div><h2 id="完整的项目" tabindex="-1"><a class="header-anchor" href="#完整的项目" aria-hidden="true">#</a> 完整的项目</h2>`,51),I={href:"https://github.com/matter-labs/custom-aa-tutorial",target:"_blank",rel:"noopener noreferrer"},H=s("h2",{id:"了解更多",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#了解更多","aria-hidden":"true"},"#"),n(" 了解更多")],-1),N=s("li",null,[n("要了解更多关于"),s("code",null,"zksync-web3"),n("SDK的信息，请查看其"),s("a",{href:"././api/js"},"文档"),n("。")],-1),L=s("li",null,[n("要了解更多关于zkSync hardhat插件的信息，请查看其"),s("a",{href:"../../api/hardhat"},"document"),n("。")],-1);function P(z,B){const t=c("RouterLink"),o=c("ExternalLinkIcon");return l(),u("div",null,[d,s("p",null,[n("现在，让我们来学习如何部署你的自定义账户，并与"),a(t,{to:"/dev/tutorials/.../developer-guides/system-contracts.html#contractdeployer"},{default:e(()=>[n("ContractDeployer")]),_:1}),n("系统合约直接互动。 在本教程中，我们建立一个工厂，部署2-of-2的自定义账户。")]),k,s("p",null,[n("在进入本教程之前，强烈建议阅读账户抽象协议的"),a(t,{to:"/dev/tutorials/.../developer-guides/aa.html"},{default:e(()=>[n("design")]),_:1}),n("。")]),s("p",null,[n("假设你已经熟悉在zkSync上部署智能合约。 如果没有，请参考"),a(t,{to:"/dev/tutorials/.../building-onzksync/hello-world.html"},{default:e(()=>[n("快速入门教程")]),_:1}),n("的第一部分。 还建议阅读系统合同的"),a(t,{to:"/dev/developer-guides/system-contracts.html"},{default:e(()=>[n("介绍")]),_:1}),n("。")]),v,s("p",null,[n("同时，创建"),m,n("配置文件、"),b,n("和"),y,n("文件夹，与"),a(t,{to:"/dev/tutorials/.../building-on-zksync/hello-world.html"},{default:e(()=>[n("快速入门教程")]),_:1}),n("类似。由于在这个项目中，我们的合约将与系统合约互动，我们需要在编译器设置中加入"),g,n("。")]),h,s("div",f,[w,s("p",null,[n("你可以使用zkSync CLI来自动构建一个项目的支架。查找"),a(t,{to:"/dev/tutorials/.../.../api/tools/zksync-cli/"},{default:e(()=>[n("关于zkSync CLI的更多信息")]),_:1})])]),_,s("p",null,[n("每个账户都需要实现"),a(t,{to:"/dev/tutorials/developer-guides/aa.html#iaccount-interface"},{default:e(()=>[n("IAccount")]),_:1}),n("接口。因为我们要建立一个有签名者的账户，所以我们也应该实现"),s("a",x,[n("EIP1271"),a(o)]),n("。")]),T,s("p",null,[n("即使上面的要求允许账户只接触他们的存储槽，在"),A,n("中访问你的nonce是一个"),a(t,{to:"/dev/tutorials/developer-guides/aa.html#extending-the-set-of-slots-that-belong-to-a-user"},{default:e(()=>[n("白名单")]),_:1}),n("的情况，因为它的行为与你的存储相同，只是刚好在另一个合同中。为了调用"),S,n("，你应该添加以下导入。")]),E,s("p",null,[n("注意，由于"),F,n("的非视图方法需要在打开"),C,n("标志的情况下调用，所以应该使用"),D,n("库的"),s("a",R,[n("systemCallWithPropagatedRevert"),a(o)]),n("方法，所以这个库也需要导入。")]),q,s("p",null,[n("虽然一般来说，账户抽象协议可以在与付款人互动时执行任意的动作，但有一些"),a(t,{to:"/dev/tutorials/.../developer-guides/aa.html#built-in-paymaster-flows"},{default:e(()=>[n("常见模式")]),_:1}),n("与EOAs的内置支持。 除非你想为你的账户实现或限制一些特定的paymaster用例，否则最好保持与EOAs一致。")]),O,s("p",null,[n("你可以下载完整的项目"),s("a",I,[n("这里"),a(o)]),n("。")]),H,s("ul",null,[s("li",null,[n("要了解更多关于zkSync上L1->L2的交互，请查看"),a(t,{to:"/dev/developer-guides/bridging/l1-l2.html"},{default:e(()=>[n("文档")]),_:1}),n("。")]),N,L])])}const U=i(r,[["render",P],["__file","custom-aa-tutorial.html.vue"]]);export{U as default};
