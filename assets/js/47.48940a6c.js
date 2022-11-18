(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{460:function(e,t,o){"use strict";o.r(t);var s=o(32),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"l1-l2-interoperability"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#l1-l2-interoperability"}},[e._v("#")]),e._v(" L1 / L2 Interoperability")]),e._v(" "),o("p",[e._v("While most of the execution will happen on L2, some use cases require interoperability with the L1 chain. The main use cases are building complex bridges, maintaining governance smart contracts on one chain that govern contracts on other chains, etc.")]),e._v(" "),o("p",[e._v("In addition, the L2 censorship resistance is derived from the underlying chain, so the ability to send messages from Ethereum to zkSync is an important part of the censorship-resistance mechanism called the "),o("a",{attrs:{href:"#priority-queue"}},[e._v("priority queue")]),e._v(".")]),e._v(" "),o("p",[e._v("Sending transactions from Ethereum to zkSync is done via the zkSync smart contract. It allows the sender to request transactions directly from L1. Thereby allowing the permissionless passing of any data from Ethereum into zkSync.\n"),o("RouterLink",{attrs:{to:"/dev/developer-guides/bridging/l1-l2.html"}},[e._v("Read more")]),e._v(" about messaging from L1 to L2.")],1),e._v(" "),o("h2",{attrs:{id:"priority-queue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#priority-queue"}},[e._v("#")]),e._v(" Priority queue")]),e._v(" "),o("p",[e._v("The goal of the priority queue is to provide a censorship-resistant way to interact with zkSync in case the operator becomes malicious or unavailable.\nThe way the priority queue works in zkSync 2.0 is very close to how it worked in the previous version of zkSync.\nFor the full picture, we first present how the priority queue works on zkSync 1.x.\nThis gives the rationale for the new design of the priority queue for zkSync 2.0.")]),e._v(" "),o("h3",{attrs:{id:"how-it-works-in-zksync-1-x"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works-in-zksync-1-x"}},[e._v("#")]),e._v(" How it works in zkSync 1.x")]),e._v(" "),o("p",[e._v("In the previous version of zkSync, we only had two operations that could be sent to zkSync from L1:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Deposit")]),e._v(" to bridge funds from Ethereum to zkSync.")]),e._v(" "),o("li",[o("code",[e._v("FullExit")]),e._v(" to bridges the funds back from Ethereum (this is essentially the same as "),o("code",[e._v("Withdraw")]),e._v(" in zkSync 2.0).")])]),e._v(" "),o("p",[e._v("If users wanted to deposit funds to or withdraw funds from zkSync, they would have to send a transaction request to the smart contract which will then get appended to the queue of priority transactions. The queue has the following rules:")]),e._v(" "),o("ul",[o("li",[e._v("All transactions are processed sequentially.")]),e._v(" "),o("li",[e._v("Each priority operation must be processed by the operator within "),o("code",[e._v("X")]),e._v(" days since it was submitted to the contract.")])]),e._v(" "),o("p",[e._v("The first rule is strictly enforced by the smart contract. The second rule may be violated if the operator becomes malicious or unavailable. In case that happens, the system enters 'exodus mode', where no new blocks can be processed and users can withdraw their funds without cooperation from the operator.")]),e._v(" "),o("h3",{attrs:{id:"what-changes-are-needed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-changes-are-needed"}},[e._v("#")]),e._v(" What changes are needed?")]),e._v(" "),o("p",[e._v("The process described above works well for a system with a small set of relatively light supported operations. zkSync 2.0 supports general smart contract computation, and thus some principles had to be changed in order to preserve the stability of the network.")]),e._v(" "),o("p",[e._v("Firstly, all transactions need to be supported by the priority queue. Users may have their funds locked on an L2 smart contract, and not on their own L2 account. Therefore before moving their funds to L1, they need to send an "),o("code",[e._v("Execute")]),e._v(" transaction to the zkSync network to release the funds from that smart contract first.")]),e._v(" "),o("p",[e._v("Secondly, the priority queue needs to stay censorship-resistant. But imagine what will happen if users start sending a lot of transactions that take the entirety of the block ergs limit? There needs to be a way to prevent spam attacks on the system.\nThat's why submitting transactions to the priority queue is no longer free.\nUsers need to pay a certain fee to the operator for processing their transactions. It is really hard to calculate the accurate fee in a permissionless way.\nThus, the fee for a transaction is equal to "),o("code",[e._v("txBaseCost * gasPrice")]),e._v(". The "),o("code",[e._v("gasPrice")]),e._v(" is the gas price of the users' transaction, while "),o("code",[e._v("txBaseCost")]),e._v(" is the base cost for the transaction, which depends on its parameters (e.g. "),o("code",[e._v("ergs_limit")]),e._v(" for "),o("code",[e._v("Execute")]),e._v(" transaction).")]),e._v(" "),o("p",[e._v("Thirdly, the operator can not commit to processing each and every transaction within "),o("code",[e._v("X")]),e._v(" days. Again, this is needed to prevent spam attacks on the priority queue. We changed this rule to the following one:")]),e._v(" "),o("ul",[o("li",[e._v("The operator must do at least "),o("code",[e._v("X")]),e._v(" amount of work (see below) on the priority queue or the priority queue should be empty.")])]),e._v(" "),o("p",[e._v('In other words, we require the operator to do its best instead of requiring a strict deadline. The measure of "the work" is still to be developed. Most likely it will be the number of '),o("code",[e._v("ergs")]),e._v(" the priority operations used.")]),e._v(" "),o("p",[e._v('In the future, we will also add the ability to "prioritize" L1->L2 transactions, allowing users to speed up the inclusion of their transactions in exchange for paying a higher fee to the operator.')]),e._v(" "),o("h2",{attrs:{id:"priority-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#priority-mode"}},[e._v("#")]),e._v(" Priority mode")]),e._v(" "),o("p",[e._v("If the operator fails to process the needed L1 transactions, the system enters in 'Priority mode'. In this mode, everyone can become an operator by staking tokens. The exact details of the priority mode are still under development and will be described in more detail closer to the mainnet launch.")]),e._v(" "),o("p",[e._v("To reduce risks, the alpha mainnet will start with a mechanism to instantly stop and upgrade the network, which contradicts the purpose of the priority mode. Priority mode will be gradually introduced in the following releases.")]),e._v(" "),o("h2",{attrs:{id:"l2-l1-messaging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#l2-l1-messaging"}},[e._v("#")]),e._v(" L2 -> L1 messaging")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/dev/developer-guides/bridging/l2-l1.html"}},[e._v("L2 -> L1 communication")]),e._v(", in contrast to L1 -> L2 communication, is based only on transferring the information, and not on the transaction execution on L1. It is a built-in feature, which is made up of two parts: sending a message from L2 and reading it on L1. The first is implemented as a call to an L2 system smart contract. And the second is implemented on the zkSync L1 smart contract as a getter function.")],1),e._v(" "),o("h3",{attrs:{id:"sending-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sending-messages"}},[e._v("#")]),e._v(" Sending messages")]),e._v(" "),o("p",[e._v("Each message sent from L2 to L1 contains the sender's address and the message itself. The length of the message can be arbitrarily large, but the longer the message, the more expensive it will be to send. The operator must include all messages for the corresponding merkle root (see next paragraph). Hence, all the messages are publicly available, and one does not have to rely on the operator to reveal them.")]),e._v(" "),o("h3",{attrs:{id:"reading-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reading-messages"}},[e._v("#")]),e._v(" Reading messages")]),e._v(" "),o("p",[e._v("Every message sent can be read on-chain. Moreover, it is possible to prove that a message has been sent in a specific L2 block. To make such proof as cheap as possible for both the user and the operator, we store all messages, for each L2 block, in a merkle tree. Accordingly, any L1 smart contract can consume the message sent by providing proof of inclusion in some L2 block. Proof can be generated based only on the data that the operator sent to the zkSync L1 smart contract. The proof can also be obtained via "),o("RouterLink",{attrs:{to:"/api/api.html#zksgetl2tol1msgproof"}},[e._v("the API")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"summary-on-l2-l1-messaging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary-on-l2-l1-messaging"}},[e._v("#")]),e._v(" Summary on L2->L1 messaging")]),e._v(" "),o("ul",[o("li",[e._v("L2 -> L1 communication requires one transaction on L2 and one on L1.")]),e._v(" "),o("li",[e._v("Messages can be of arbitrary length.")]),e._v(" "),o("li",[e._v("All the data needed for proving message inclusion in an L2 block can always be restored from Ethereum. However, the easiest way is to request proof from the operator via API.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);