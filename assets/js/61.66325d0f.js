(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{643:function(t,e,o){"use strict";o.r(e);var a=o(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"what-are-multi-chain-contracts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-multi-chain-contracts"}},[t._v("#")]),t._v(" What are Multi-Chain Contracts?")]),t._v(" "),o("p",[t._v("CosmWasm is designed and built from the ground-up to be a multi-chain solution for smart contracts.\nAs it comes from the Cosmos ecosystem, it is no surprise that this is designed for networks\nof blockchains, rather than the traditional blockchain silos. But what exactly do we mean by multi-chain?")]),t._v(" "),o("h2",{attrs:{id:"different-chain-same-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#different-chain-same-contract"}},[t._v("#")]),t._v(" Different Chain, Same Contract")]),t._v(" "),o("p",[t._v("Since we make little requirements of the host application, it is easy for any Cosmos SDK app\nto embed the "),o("code",[t._v("wasm")]),t._v(" module and customize the permissioning or fees as they wish. All code\nis designed to be agnostic to the details of the underlying chain, so just by writing a\nCosmWasm contract, you will soon be able to run on many different chains on the Cosmos ecosystem.")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://regen.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Regen Network"),o("OutboundLink")],1),t._v(" plans to include CosmWasm support, when they launch. And a number of other chains are looking into adding this support.")]),t._v(" "),o("h2",{attrs:{id:"inter-blockchain-contracts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inter-blockchain-contracts"}},[t._v("#")]),t._v(" Inter Blockchain Contracts")]),t._v(" "),o("p",[t._v("If you have heard anything about Cosmos, it is most likely about "),o("a",{attrs:{href:"https://cosmos.network/ibc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inter-Blockchain Communication"),o("OutboundLink")],1),t._v(". The power of "),o("a",{attrs:{href:"https://tendermint.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint BFT consensus"),o("OutboundLink")],1),t._v(" and their "),o("a",{attrs:{href:"https://blog.cosmos.network/what-does-the-launch-of-cosmos-mean-for-the-blockchain-ecosystem-952e14f67d0d",target:"_blank",rel:"noopener noreferrer"}},[t._v("novel bonded proof of stake algorithm"),o("OutboundLink")],1),t._v(" are just the foundation on which they enable a revolutionary protocol to allow trustless message passing semantics between blockchains. No middleman, no timing issue, full security.")]),t._v(" "),o("p",[t._v("The potential means code on one chain can execute a transaction on another chain. But the code must be designed around such a message-passing idiom. CosmWasm fully embraces the "),o("a",{attrs:{href:"./actor"}},[t._v("actor model")]),t._v(" and as such naturally lends itself to such IBC. Fire and forget messages, rather than awaiting a promise and worrying about race conditions and reentrancy attacks. As IBC stabilizes, we will be adding first class support for IBC primitives into the "),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm"),o("OutboundLink")],1),t._v(" libraries, as well as the "),o("a",{attrs:{href:"https://github.com/CosmWasm/wasmd/tree/master/x/wasm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos SDK module"),o("OutboundLink")],1),t._v(" that hosts it.")]),t._v(" "),o("h2",{attrs:{id:"easy-to-integrate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#easy-to-integrate"}},[t._v("#")]),t._v(" Easy to Integrate")]),t._v(" "),o("p",[t._v("Another design goal of CosmWasm was to be more of a library than a framework. This means it has a small surface area of required APIs and you can opt-in to most of the code. It is there to make life easy for you, but you can easily build it your own way as well. This has two big benefits:")]),t._v(" "),o("p",[t._v("The first is that it makes it easier to add support for multiple languages to write contracts in. So we can add support for say, "),o("a",{attrs:{href:"https://docs.assemblyscript.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AssemblyScript"),o("OutboundLink")],1),t._v(" or "),o("a",{attrs:{href:"https://github.com/tinygo-org/tinygo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go"),o("OutboundLink")],1),t._v(", for those who prefer not to write in Rust.")]),t._v(" "),o("p",[t._v("The second benefit is that since it makes limited demands of the host system, it can be embedded in other frameworks, not just the Cosmos SDK. The core runtime logic "),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/tree/master/lib/vm",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("cosmwasm-vm")]),o("OutboundLink")],1),t._v(" is in Rust, and "),o("a",{attrs:{href:"https://github.com/CosmWasm/go-cosmwasm",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("go-cosmwasm")]),o("OutboundLink")],1),t._v(" provides a generic Go binding to it. As Go and Rust are two of the most popular languages to write blockchains, this opens the door for many integrations. Of course, unless your chain is running on top of "),o("a",{attrs:{href:"https://tendermint.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint"),o("OutboundLink")],1),t._v(" or potentially another BFT Instant Finality Consensus algorithm like "),o("a",{attrs:{href:"https://babble.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babble"),o("OutboundLink")],1),t._v(", the contracts will not be able to participate with IBC.")]),t._v(" "),o("h2",{attrs:{id:"platform-to-build-on"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#platform-to-build-on"}},[t._v("#")]),t._v(" Platform to Build On")]),t._v(" "),o("p",[t._v("CosmWasm doesn't want to lock you to one blockchain, or even one programming language. It is designed to be adaptable to many environments, and "),o("em",[t._v("connect")]),t._v(" blockchains. This makes it a solid platform to build on. Even if one chain doesn't pan out well, all your smart contracts and dApps can quickly be transferred to another chain. Or if your app grows quickly, you can launch your own chain to deploy the next version of the contracts, and transfer all existing tokens to your new chain via IBC. The possibilities are only limited by your imagination.")])])}),[],!1,null,null,null);e.default=n.exports}}]);