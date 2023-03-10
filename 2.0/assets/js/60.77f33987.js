(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{473:function(t,e,a){"use strict";a.r(e);var n=a(32),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),a("p",[t._v("Transactions in Ethereum are cryptographically signed instructions by an externally owned account (an account owned by a user and not by code). These instructions are stored in the blockchain and added to a block.\nThe state of the Ethereum virtual machine (EVM) changes when a transaction is initiated. A transaction can be anything from sending ether to another account to invoking the functions of a smart contract.")]),t._v(" "),a("h2",{attrs:{id:"prerequisite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[t._v("#")]),t._v(" Prerequisite")]),t._v(" "),a("p",[t._v("We recommend you first read "),a("a",{attrs:{href:"https://ethereum.org/en/developers/docs/accounts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("accounts"),a("OutboundLink")],1),t._v(" to understand this page.")]),t._v(" "),a("h2",{attrs:{id:"how-transactions-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-transactions-work"}},[t._v("#")]),t._v(" How transactions work")]),t._v(" "),a("p",[t._v("When a user initiates a transaction on Ethereum, some specific data is created:")]),t._v(" "),a("ul",[a("li",[t._v("Receiver: The recipient is the account's address to receive the transaction. The receiver can be a contract account or an externally owned account. Each transaction is aimed toward a specific recipient.")]),t._v(" "),a("li",[t._v("Nonce: This field displays the most recent transaction based on the account's counter, which maintains track of how many transactions it does. The network uses the transaction nonce to ensure that transactions are completed in the correct sequence.")]),t._v(" "),a("li",[t._v("Gas Price: Most transactions necessitate the payment of a fee to the transaction's author. This cost is computed per unit of gas. The unit is Wei, a smaller ether unit.")]),t._v(" "),a("li",[t._v("Gas Limit: The transaction author specifies the number of gas units used for the transaction. This is the total amount of gas that could be consumed.")]),t._v(" "),a("li",[t._v("Value: The quantity of Wei or Ether that the sender account wishes to transmit to the recipient is represented by the value.")]),t._v(" "),a("li",[t._v("Data: If the transaction receiver is a smart contract, the data contains information for the contract's functions to be executed. This comprises data with varying lengths.")]),t._v(" "),a("li",[t._v("Signature: A signature indicates who sent the communication. The signature is created when an externally owned account confirms and signs the transaction with its private key.")])]),t._v(" "),a("h3",{attrs:{id:"transaction-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-types"}},[t._v("#")]),t._v(" Transaction Types")]),t._v(" "),a("ul",[a("li",[t._v("Simple or asset transfers: This refers to the regular tokens transfer in the form of ether from one account to another.")])]),t._v(" "),a("p",[t._v("To deploy a contract, a user calls the "),a("code",[t._v("create")]),t._v(" function of the ContractDeployer and provides the hash of the contract to be published, as well as the constructor arguments. The contract bytecode itself is supplied in the factory_deps field of the EIP712 transactions. If the contract is a factory (i.e. it can deploy other contracts), these contracts' bytecodes should be included in the factory_deps as well.")]),t._v(" "),a("ul",[a("li",[t._v("Contract deployment transactions: Contract deployment on zkSync is quite different from Ethereum.\n"),a("ul",[a("li",[t._v("Ethereum: Contract deployment occurs when a user sends a transaction to the zero address "),a("code",[t._v("(0x000...000)")]),t._v(" with the "),a("code",[t._v("data")]),t._v(" field of the transaction equal to the contract bytecode concatenated with the constructor parameters.")]),t._v(" "),a("li",[t._v("zkSync: To deploy a contract on zkSync, a user calls the "),a("code",[t._v("create")]),t._v(" function of the "),a("RouterLink",{attrs:{to:"/dev/developer-guides/contracts/system-contracts.html#contractdeployer"}},[t._v("ContractDeployer")]),t._v(" and provides the hash of the contract to be published, as well as the constructor arguments.\nThe contract bytecode itself is supplied in the "),a("code",[t._v("factory_deps")]),t._v(" field of the EIP712 transactions.\nIf the contract is a factory (i.e. it can deploy other contracts), these contracts' bytecodes should be included in the "),a("code",[t._v("factory_deps")]),t._v(" as well.\nRead more on "),a("RouterLink",{attrs:{to:"/dev/developer-guides/contracts/contracts.html"}},[t._v("contract deployment")]),t._v(".")],1)])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v('zkSync supports Ethereum\'s "old" (pre-EIP2718) transaction types, the EIP1559 transaction type, and its EIP712 transactions. Transactions of this type can be used to access zkSync-specific features such as account abstraction. Furthermore, smart contracts can only be deployed with this sort of transaction.')]),t._v(" "),a("p",[t._v("It is not necessary to understand the transaction format to utilize zkSync's SDK, but if you are interested, you can learn more about it "),a("RouterLink",{attrs:{to:"/api/api.html#eip712"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),a("h3",{attrs:{id:"when-is-a-transaction-considered-final"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-is-a-transaction-considered-final"}},[t._v("#")]),t._v(" When is a transaction considered final?")]),t._v(" "),a("p",[a("strong",[t._v("Transaction finality")]),t._v(" refers to the promise that transactions cannot be reversed, altered, or mutated in the context of a blockchain network.")]),t._v(" "),a("p",[t._v("Finality on Ethereum, like in Bitcoin, is probabilistic, which means that the more blocks passed after the transaction was executed, the less likely it is that this transaction will be overturned.")]),t._v(" "),a("p",[t._v("Once a block has been filled and sealed in zk rollups, its state is committed to the main Ethereum chain. The proving stage is then started, and a SNARK validity proof is constructed for each block transaction. Once completed, the SNARK is sent for verification on the L1 smart contract, and the transaction state becomes final following verification.")]),t._v(" "),a("p",[t._v("From the standpoint of zkSync, "),a("em",[t._v("finality")]),t._v(" occurs when the transaction (the SNARK verification) is executed by L1. At this point, the guarantees are the same as any other L1 transaction within the same L1 block; the more L1 blocks issued after the initial block is processed, the less likely this transaction will be overturned.")]),t._v(" "),a("p",[t._v("When a user transmits a transaction, zkSync currently waits for the entire block to be filled, which means the finality time may be longer depending on the volume of transactions sent via zkSync. The finality time will reduce as the throughput increases.")]),t._v(" "),a("h2",{attrs:{id:"what-exactly-are-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-exactly-are-operators"}},[t._v("#")]),t._v(" What exactly are operators?")]),t._v(" "),a("p",[a("strong",[t._v("Operators")]),t._v(" are the actors who carry out essential ZK rollup functions. They are responsible for producing blocks, packaging transactions, conducting calculations, and submitting data to the main Ethereum chain for verification.")])])}),[],!1,null,null,null);e.default=s.exports}}]);