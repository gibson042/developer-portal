(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{701:function(e,t,n){"use strict";n.r(t);var i=n(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"blockchain-technology-and-the-interchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-technology-and-the-interchain"}},[e._v("#")]),e._v(" Blockchain Technology and the Interchain")]),e._v(" "),n("HighlightBox",{attrs:{type:"learning"}},[n("p",[e._v("Begin your journey with this brief review of blockchain technology, how the Interchain came into being, and what it brings to the world of blockchain technology:")]),e._v(" "),n("ul",[n("li",[e._v("An internet of blockchains")]),e._v(" "),n("li",[e._v("A better decentralized application (dApp) user experience")]),e._v(" "),n("li",[e._v("A simplified, specialized dApp development experience")]),e._v(" "),n("li",[e._v("Facilitated scalability")]),e._v(" "),n("li",[e._v("Increased sovereignty")]),e._v(" "),n("li",[e._v("Speed and fast finality")])])]),e._v(" "),n("ExpansionPanel",{attrs:{title:"What is a Blockchain?"}},[n("p",[e._v("Blockchain protocols define programs that hold a state and describe how to modify the state according to the received inputs. The inputs are called transactions.\n"),n("br"),n("br"),e._v("\nThe consensus mechanism ensures that a blockchain has a canonical transaction history. Blockchain transactions must be deterministic, meaning there is only one correct interpretation. The blockchain state is also deterministic. If you begin with the same genesis state and replicate all changes, you always achieve the same state.\n"),n("br"),n("br"),e._v("\nA blockchain architecture can be "),n("strong",[e._v("split into three layers")]),e._v(":")]),e._v(" "),n("ul",[n("li",[e._v("The network layer: tasked with discovering nodes and propagating transactions and consensus-related messages between single nodes.")]),e._v(" "),n("li",[e._v("The consensus layer: runs the consensus protocol between the single nodes of a peer-to-peer (P2P) network.")]),e._v(" "),n("li",[e._v("The application layer: running a state machine that defines the application's state and updates it with the processing of transactions implementing the network's consensus.")])]),e._v(" "),n("p",[e._v("This layered model can be applied to blockchains generally.")])]),e._v(" "),n("h2",{attrs:{id:"the-world-of-blockchains-from-public-general-purpose-chains-to-application-specific-chains"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-world-of-blockchains-from-public-general-purpose-chains-to-application-specific-chains"}},[e._v("#")]),e._v(" The world of blockchains — From public general-purpose chains to application-specific chains")]),e._v(" "),n("p",[e._v("You can find the building blocks of blockchain technology in the 1980s and 1990s, when breakthroughs in computer science and cryptography laid the necessary groundwork.")]),e._v(" "),n("p",[e._v("The necessary breakthroughs included append-only, provably correct transaction logs using built-in error checking; strong authentication and encryption using public keys; mature theories of fault-tolerant systems; a widespread understanding of peer-to-peer (P2P) systems; the advent of the internet and ubiquitous connectivity; and powerful client-side computers.")]),e._v(" "),n("p",[e._v("On October 31, 2008, an individual or group calling itself Satoshi Nakamoto proposed a "),n("strong",[e._v("P2P network for a digital currency")]),e._v(", calling it "),n("strong",[e._v("Bitcoin")]),e._v(". Bitcoin introduced a novel consensus mechanism, now referred to as Nakamoto Consensus, that uses Proof-of-Work (PoW) to enable nodes to reach agreement in a decentralized network. It became possible to send online payments directly between parties "),n("strong",[e._v("independent of financial institutions and trusted third parties")]),e._v(". Bitcoin became the first public, decentralized payment application.")]),e._v(" "),n("HighlightBox",{attrs:{type:"docs"}},[n("p",[e._v("Want to look closer at the initial proposition of Bitcoin? See the original "),n("a",{attrs:{href:"https://bitcoin.org/bitcoin.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitcoin Whitepaper"),n("OutboundLink")],1)])]),e._v(" "),n("ExpansionPanel",{attrs:{title:"More on PoW"}},[n("p",[e._v('Bitcoin uses PoW to achieve Byzantine Fault-Tolerance (BFT) which enables decentralized, trustless networks to function even with malfunctioning or malicious nodes present. It is best described as a cryptographic puzzle solved by a network node called a "miner". The puzzle is a task of pre-defined, arbitrary difficulty. At the current scale of the networks using PoW, the outcome is akin to a lottery with a single winning ticket, the successful miner node.\n'),n("br"),n("br"),e._v('\nIn most PoW systems, the task consists of a search for an unknown random number - a "nonce". To be a winning nonce, when it is combined with ordered transactions in a block, the result is a hash value matching pre-defined criteria. Finding the nonce is evidence of considerable effort or work invested in the search. Each node uses its computing power in a race to solve the puzzle first and win the right to author the latest block.\n'),n("br"),n("br"),e._v("\nFinancial incentives are in play: the node that first announces a solution receives a reward. Through these rewards the network's native currency is issued and nodes are encouraged to invest computing power into solving the task. Network security scales with computing power; more investment leads to a more secure PoW network.")])]),e._v(" "),n("p",[e._v("The development of decentralized applications built on blockchain networks began shortly after Bitcoin's debut. In the early days, developing dApps could be done only by forking or building on the Bitcoin codebase. However, Bitcoin's monolithic codebase and limited scripting language made dApp development a tedious and complex process for developers.")]),e._v(" "),n("p",[e._v('After the introduction of Bitcoin, several so-called "public chains" came into being, the first of which was Ethereum in 2013. These general-purpose blockchains aim to provide a decentralized network that allows the implementation of a variety of use cases.')]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/1-what-is-cosmos/images/timeline.png"}})],1),e._v(" "),n("p",[e._v("Ethereum is a public blockchain with smart contract functionality that enables applications based on self-executing, self-enforcing, and self-verifying account holding objects. It can be seen as a response to the difficulties of developing applications on Bitcoin.")]),e._v(" "),n("p",[e._v("With Ethereum, the application layer of the chain took the form of a virtual machine called the "),n("strong",[e._v("Ethereum Virtual Machine (EVM)")]),e._v(". The EVM runs smart contracts, providing a single chain on which to deploy all sorts of programs. Despite its many benefits, the EVM is a sandbox that delineates the range of implementable use cases. Simplistic (and sometimes complex) use cases can be implemented with it but are nonetheless "),n("strong",[e._v("limited regarding design and efficiency by the limitations of the sandbox")]),e._v(". Additionally, developers are limited to programming languages that are tailored to the EVM.")]),e._v(" "),n("p",[e._v("Even though the launch of Ethereum with its EVM was a big step forward, "),n("strong",[e._v("some issues of public, general-purpose blockchains remained")]),e._v(": low flexibility for developers, and difficulties with speed, throughput, scalability, state finality, and sovereignty.")]),e._v(" "),n("p",[e._v('In the world of blockchains, "speed" means '),n("strong",[e._v("transaction speed")]),e._v(". You can understand transaction speed as the time it takes to confirm a transaction. Speed is naturally impacted by the target delay between blocks, which is 10 minutes in Bitcoin and 15 seconds in Ethereum. Speed is also impacted by the backlog of equally worthy pending transactions all competing to be included in new blocks.")]),e._v(" "),n("p",[n("strong",[e._v("Throughput")]),e._v(" describes how many transactions the network can handle per unit of time. Throughput can be limited for reasons of physical network bandwidth, computer resources, or even by decisions embedded in the protocol. Not all dApps have the same throughput requirements, but they all have to make do with the "),n("em",[e._v("average")]),e._v(" resulting throughput of the platform itself if they are implemented on a general-purpose blockchain. This impacts the "),n("strong",[e._v("scalability")]),e._v(" of dApps.")]),e._v(" "),n("p",[n("strong",[e._v("State finality")]),e._v(" is an additional concern. Finality describes whether and when committed blocks with transactions can no longer be reverted/revoked. It is important to differentiate between "),n("em",[e._v("probabilistic")]),e._v(" and "),n("em",[e._v("absolute finality")]),e._v(".")]),e._v(" "),n("Accordion",{attrs:{items:[{title:"Probabilistic finality",description:"**Probabilistic finality** describes the finality of a transaction dependent on how probable reverting a block is, i.e. the probability of removing a transaction. The more blocks that come after the block containing a specific transaction, the less probable it is that a transaction may be reverted, as *longest* or *heaviest chain rules* apply in the case of forks."},{title:"Absolute finality",description:"**Absolute finality** is a trait of protocols based on Proof-of-Stake (PoS). Finality comes as soon as a transaction and block are verified. There are no scenarios in which a transaction can be revoked after it has been finalized."}]}}),e._v(" "),n("ExpansionPanel",{attrs:{title:"Finality in PoW and PoS networks"}},[n("p",[e._v("Proof-of-Stake (PoS) networks can have absolute finality because the total staked amount is known at all times. It takes a "),n("em",[e._v("public")]),e._v(' transaction to stake, and another to unstake. If some majority of the stakers agree on a block, then the block can be considered "final" because there is no process that could overturn the consensus.\n'),n("br"),n("br"),e._v("\nThis is different from PoW networks, where the total hashing capacity is unknown; it can only be estimated by a combination of the puzzle's difficulty and the speed at which new blocks are issued. Hashing capacity can be added or removed simply by turning machines on or off. When hashing capacity is removed too abruptly it results in a drop in the network transaction throughput, as blocks suddenly fail to be issued around the target interval.")])]),e._v(" "),n("p",[e._v("When developing on Ethereum, the developer needs to contend with "),n("strong",[e._v("two layers of governance")]),e._v(": The chain's governance and the application's governance. Independently of the dApp's governance needs, developers must come to terms with the underlying chain's governance.")]),e._v(" "),n("p",[e._v("Given the features of existing public blockchain projects and the requirements for privacy in certain industries, a push towards "),n("strong",[e._v("private, or managed, chains")]),e._v(" followed. Private distributed ledgers are blockchains with access barriers and sophisticated permission management. Examples include platforms for permissioned networks, such as R3's "),n("em",[e._v("Corda")]),e._v(" and the Hyperledger Project's "),n("em",[e._v("Hyperledger Fabric")]),e._v(" from the Linux Foundation.")]),e._v(" "),n("p",[e._v("The eventual development of more complex applications required a more flexible environment. This led to the launch of multiple "),n("strong",[e._v("purpose-built/application-specific blockchains")]),e._v(", each providing a platform tailored to the necessities of use cases and applications. Each of these blockchains acted as self-contained environments limited by the use cases they were envisioned for.")]),e._v(" "),n("p",[n("strong",[e._v("General-purpose chains are limited to simplistic use case applications, while application-specific chains only fit certain use cases.")]),e._v(" This provokes the question, "),n("em",[e._v("Is it possible to build a platform for all use cases that does away with the limitations of general-purpose chains?")])]),e._v(" "),n("h2",{attrs:{id:"how-does-the-interchain-fit-into-the-general-development-of-blockchain-technology"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-does-the-interchain-fit-into-the-general-development-of-blockchain-technology"}},[e._v("#")]),e._v(" How does the Interchain fit into the general development of blockchain technology?")]),e._v(" "),n("p",[e._v("In 2016, Jae Kwon and Ethan Buchman founded the Interchain network with its consensus algorithm, "),n("a",{attrs:{href:"https://tendermint.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("HighlightBox",{attrs:{type:"docs"}},[n("p",[e._v("See the 2016 "),n("a",{attrs:{href:"https://v1.cosmos.network/resources/whitepaper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Whitepaper"),n("OutboundLink")],1),e._v(" to find out more about the origins of the Interchain.")])]),e._v(" "),n("p",[e._v("Kwon invented the original Tendermint mechanism in 2014. Buchman and Kwon began working together in 2015, and jointly founded Tendermint Inc by the end of the year.")]),e._v(" "),n("ExpansionPanel",{attrs:{title:"Tendermint: what you need to know"}},[n("p",[e._v("Tendermint is a consensus algorithm with Byzantine Fault-Tolerance (BFT) and a consensus engine. It enables applications to be replicated in sync on many machines. Blockchain networks require BFT to ensure proper function even with malfunctioning or malicious nodes present. The result is known as a "),n("em",[e._v("Replicated State Machine with Byzantine Fault Tolerance")]),e._v(". It guarantees BFT properties for distributed systems and their applications.\n"),n("br"),n("br"),e._v("\nIt does this:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Securely")]),e._v(" - Tendermint continues working even if up to 1/3rd of machines fail or misbehave.")]),e._v(" "),n("li",[n("strong",[e._v("Consistently")]),e._v(" - every machine computes the same state and accesses the same transaction log.")])]),e._v(" "),n("p",[e._v("Tendermint is widely used across the industry and is the most mature BFT consensus engine for Proof-of-Stake (PoS) blockchains.")]),e._v(" "),n("HighlightBox",{attrs:{type:"tip"}},[n("p",[e._v("For more on Tendermint, see this helpful "),n("a",{attrs:{href:"https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("introduction"),n("OutboundLink")],1),e._v(".")])])],1),e._v(" "),n("p",[e._v("Initially, the Interchain was an open-source community project built by the Tendermint team. Since then, the "),n("strong",[e._v("Interchain Foundation (ICF)")]),e._v(" has assisted with the development and launch of the network. The ICF is a Swiss non-profit that raised funds in 2017 to finance the development of open-source projects building on the the Interchain network.")]),e._v(" "),n("p",[e._v("The founding "),n("strong",[e._v("vision")]),e._v(" of the Interchain is that of an easy development environment for blockchain technology. The Interchain wants to address the main issues of previous blockchain projects and provide interoperability between chains to foster an "),n("strong",[e._v("internet of blockchains")]),e._v(".")]),e._v(" "),n("p",[n("em",[e._v("How is the Interchain an internet of blockchains?")]),e._v(" The Interchain is a "),n("strong",[e._v("network of interoperable blockchains")]),e._v(', each implemented with different properties suitable for their individual use cases. The Interchain lets developers create blockchains that maintain sovereignty free from any "main chain" governance, have fast transaction processing, and are interoperable. With the Interchain, a multitude of use cases becomes feasible.')]),e._v(" "),n("p",[e._v("To achieve this vision and type of network, the ecosystem relies on an "),n("strong",[e._v("open-source toolkit")]),e._v(", including the "),n("a",{attrs:{href:"https://ibcprotocol.dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Inter-Blockchain Communication Protocol (IBC)"),n("OutboundLink")],1),e._v(", its implementation in the "),n("a",{attrs:{href:"https://v1.cosmos.network/sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),n("OutboundLink")],1),e._v(", and "),n("a",{attrs:{href:"https://tendermint.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint"),n("OutboundLink")],1),e._v(" as the base layer providing distributed state finality. A set of modular, adaptable, and interchangeable tools helps not only to quickly create a blockchain but also facilitates the customization of secure and scalable chains.")]),e._v(" "),n("p",[e._v("The interoperable application blockchains on the Interchain are built with the Cosmos SDK. The Cosmos SDK includes the prerequisites that make it possible for created blockchains to participate in inter-chain communications using the Inter-Blockchain Communication Protocol (IBC). Chains built with the Cosmos SDK use the Tendermint consensus. Each of these topics is explored in more detail in the sections that follow.")]),e._v(" "),n("h3",{attrs:{id:"how-does-the-interchain-solve-the-scalability-issue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-does-the-interchain-solve-the-scalability-issue"}},[e._v("#")]),e._v(" How does the Interchain solve the scalability issue?")]),e._v(" "),n("p",[e._v("Scalability is a core challenge of blockchain technology. The Interchain allows applications to scale to millions of users. This degree of scalability is possible as the Interchain addresses "),n("strong",[e._v("two types of scalability")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Horizontal scalability:")]),e._v(' scaling by adding similar machines to the network. When "scaling '),n("em",[e._v("out")]),e._v('", the network can accept more nodes to participate in the state replication, consensus observation, and any activity that queries the state.')]),e._v(" "),n("li",[n("strong",[e._v("Vertical scalability:")]),e._v(" scaling by improving the network's components to increase its computational power. When \"scaling "),n("em",[e._v("up")]),e._v('", the network can accept more transactions and any activity that modifies the state.')])]),e._v(" "),n("p",[e._v("In a blockchain context, vertical scalability is typically achieved through the optimization of the consensus mechanism and applications running on the chain. On the consensus side, the Interchain achieves vertical scalability with the help of the Tendermint BFT. The Cosmos Hub currently conducts transactions in seven seconds. The only remaining bottleneck is then the application.")]),e._v(" "),n("p",[e._v("The consensus mechanism and application optimization of your blockchain can only take you so far. To overcome the limits of vertical scalability, the multi-chain architecture of the Interchain allows for "),n("strong",[e._v("one application to run in parallel")]),e._v(" on different but IBC-coordinated chains, whether operated by the same validator set or not. This inter-chain, horizontal scalability theoretically allows for infinite vertical-like scalability, minus the coordination overhead.")]),e._v(" "),n("HighlightBox",{attrs:{type:"info"}},[n("p",[e._v("In blockchain, a "),n("strong",[e._v("validator")]),e._v(" is one or more cooperating computers that participate in the consensus by, among other things, creating blocks.")])]),e._v(" "),n("h3",{attrs:{id:"how-does-the-interchain-promote-sovereignty"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-does-the-interchain-promote-sovereignty"}},[e._v("#")]),e._v(" How does the Interchain promote sovereignty?")]),e._v(" "),n("p",[e._v("Applications deployed on general-purpose blockchains all share the same underlying environment. When a change in an application needs to be made, it not only depends on the governance structures of the application but also on that of the environment. The feasibility of implementing changes depends on the governance mechanisms set by the protocol on which the application builds. The chain's governance limits the application's sovereignty. For this reason it is often called "),n("strong",[e._v("two-layer governance")]),e._v(".")]),e._v(" "),n("p",[e._v("For example, an application on a typical blockchain has its governance structure, but it exists atop the blockchain governance, and chain upgrades can potentially break applications. Application sovereignty is therefore diminished in two-layer governance environments.")]),e._v(" "),n("p",[e._v("The Interchain resolves this issue, as developers can build a blockchain tailored to the application. There are no limits to the application's governance when every chain is maintained by its own set of validators. The Interchain follows a "),n("strong",[e._v("one-layer governance design")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"how-does-the-interchain-improve-user-experience"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-does-the-interchain-improve-user-experience"}},[e._v("#")]),e._v(" How does the Interchain improve user experience?")]),e._v(" "),n("p",[e._v("In the world of traditional general-purpose blockchains, application design and efficiency are limited for blockchain developers. In the Interchain universe, the standardization of architecture components is combined with customization opportunities to offer the possibility of an unconstrained, seamless, and intuitive user experience.")]),e._v(" "),n("p",[e._v("It becomes easier for users to navigate between different blockchains and applications, as the same ground rules apply because of the standardization of components. The Interchain makes the world easier for developers while making dApps more user-friendly. The Interchain enables sovereignty with interoperability!")]),e._v(" "),n("HighlightBox",{attrs:{type:"synopsis"}},[n("p",[e._v("To summarize, this section has explored:")]),e._v(" "),n("ul",[n("li",[e._v("A brief history of blockchain technology, leading to the appearance of purpose-built or application-specific blockchains limited by legacy platform characteristics which the Interchain is designed to overcome.")]),e._v(" "),n("li",[e._v("How the Interchain provides blockchain interoperability for a better decentralized application (dApp) user experience, and an open-source toolkit of modular resources for a simplified, specialized dApp development experience.")]),e._v(" "),n("li",[e._v("How the Interchain responds to issues of scalability, using the horizontal scalability of its multi-chain architecture to deliver theoretically infinite capacity for vertical scalability.")]),e._v(" "),n("li",[e._v("How the Interchain increases sovereignty by providing a one-layer governance design in which each chain is maintained by its own set of validators, and improves both developer and user experience through the use of modular, interoperable systems.")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);