(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{641:function(e,a,t){"use strict";t.r(a);var n=t(0),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"names-and-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#names-and-addresses"}},[e._v("#")]),e._v(" Names and Addresses")]),e._v(" "),t("p",[e._v('Blockchains (almost?) all use addresses to identify external actors via a hash of a public key, and many newer ones extended this to identify on-chain "smart contracts" with unique addresses as well. On chain, addresses are represented by a use a concise, immutable binary format, typically 20 or 32 bytes long, often derived from a hashing function. However, there are many human-readable representations of these binary addresses, which are shown to clients. For example, '),t("a",{attrs:{href:"https://en.bitcoin.it/wiki/Bech32",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bech32"),t("OutboundLink")],1),e._v(" "),t("code",[e._v("bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9")]),e._v(", hex "),t("code",[e._v("0x8617E340B3D01FA5F11F306F4090FD50E238070D")]),e._v(" or "),t("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("checksumned hex"),t("OutboundLink")],1),e._v(" "),t("code",[e._v("0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed")]),e._v(", and even "),t("a",{attrs:{href:"https://research.kudelskisecurity.com/2018/01/16/blockchains-how-to-steal-millions-in-264-operations/",target:"_blank",rel:"noopener noreferrer"}},[e._v("large integers"),t("OutboundLink")],1),e._v(" "),t("code",[e._v("3040783849904107057L")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"human-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#human-addresses"}},[e._v("#")]),e._v(" Human Addresses")]),e._v(" "),t("p",[t("em",[e._v("Human Addresses")]),e._v(" are great for the UI. They are always a subset of ascii text, and often contain security checks - such as chain-prefix in Bech32, and checksums in Bech32 and checksummed hex (EIP55). Since we designed the "),t("a",{attrs:{href:"./serialization"}},[e._v("serialization format")]),e._v(" with Developer UX as a main concern, we expose the human readable addresses to the clients. Messages coming in and queries coming out should use the (current) human encoding of the address.")]),e._v(" "),t("p",[e._v("However, there is an issue with using this representation everywhere. Some blockchains have changed their human representation without altering the internal representation, for example Bitcoin "),t("a",{attrs:{href:"https://en.bitcoin.it/wiki/BIP_0173",target:"_blank",rel:"noopener noreferrer"}},[e._v("moved from Base58 to Bech32"),t("OutboundLink")],1),e._v(" encoding along with SegWit, and Rise is also "),t("a",{attrs:{href:"https://medium.com/rise-vision/introducing-rise-v2-521a58e1e9de#41d5",target:"_blank",rel:"noopener noreferrer"}},[e._v("moving from Lisk format to Bech32"),t("OutboundLink")],1),e._v(" in the v2 upgrade")]),e._v(" "),t("p",[e._v("This means that if "),t("code",[e._v("message.signer")]),e._v(" is always the human address that signed the transaction and I use it to look up your account balance, if this encoding ever changed, then you lose access to your account. We clearly need a stable identifier to work with internally.")]),e._v(" "),t("h2",{attrs:{id:"canonical-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canonical-addresses"}},[e._v("#")]),e._v(" Canonical Addresses")]),e._v(" "),t("p",[e._v("This is where we define a "),t("em",[e._v("Canonical Address")]),e._v(". This is defined to be stable and unique. That is, for one given account, there is only ever one canonical address (for the life of the blockchain). We define a "),t("em",[e._v("canonical address")]),e._v(" format that potentially multiple human addresses can be converted to. It can be transformed back and forth without any changes:")]),e._v(" "),t("p",[t("code",[e._v("canonicalize(humanize(canonical_addr)) == canonical_addr")])]),e._v(" "),t("p",[e._v("Note that there may be multiple valid human addresses at one time (during a transition), so the following may or may not be equal:")]),e._v(" "),t("p",[t("code",[e._v("humanize(canonicalize(human_addr)) ?== human_addr")])]),e._v(" "),t("p",[e._v("We define the "),t("em",[e._v("Canonical Address")]),e._v(" as the binary representation used internally in the blockchain. This is what the native tokens are indexed by and therefore must never change for the life of an account. This is the representation that should be used for all "),t("strong",[e._v("storage lookups")]),e._v(" (if you use part of an address as the key in the storage). Furthermore, you very likely want to store the canonical address in your contracts, so if a payout happens long after the contract was created, the stored beneficiary is still a valid string.")]),e._v(" "),t("h2",{attrs:{id:"naming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#naming"}},[e._v("#")]),e._v(" Naming")]),e._v(" "),t("p",[e._v("Once we accept that multiple "),t("em",[e._v("Human Addresses")]),e._v(" can be resolved to one "),t("em",[e._v("Canonical Address")]),e._v(", we can take a step back from mathematical encoding formats and look at other ways we want to represent an account. More and more, "),t("a",{attrs:{href:"https://app.ens.domains/about",target:"_blank",rel:"noopener noreferrer"}},[e._v("human"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://docs.blockstack.org/core/naming/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("readable"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://iov.one",target:"_blank",rel:"noopener noreferrer"}},[e._v("names"),t("OutboundLink")],1),e._v(" are increasingly important in blockchains "),t("a",{attrs:{href:"https://hackernoon.com/everything-you-didnt-know-about-the-handshake-naming-system-how-this-blockchain-project-will-483464309f33",target:"_blank",rel:"noopener noreferrer"}},[e._v("and beyond"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("At one point, we considered making names a first-class citizen of CosmWasm and using them everywhere in messages. Until we realized that accounts can have no name until initialized, and we need a permanently stable "),t("em",[e._v("Canonical Address")]),e._v(". However, we would still like names to be as central to the blockchain as possible. To this end, we can consider names as just another form of "),t("em",[e._v("Human Address")]),e._v(" albeit one that requires a contract query (with storage access) to resolve, not just a call to a pure function.")]),e._v(" "),t("p",[e._v("This actual format and interfaces are still under discussion, and we are still working on a "),t("a",{attrs:{href:"../name-service/intro"}},[e._v("tutorial version of a name service")]),e._v(". However, for sake of argument, imagine we agree every "),t("em",[e._v("Human Address")]),e._v(" that begins with "),t("code",[e._v(":")]),e._v(" is a name to lookup with the name service, and other ones can be resolved directly with the built-in blockchain resolution function. So when creating a transaction for an escrow, you could use either "),t("code",[e._v('{"arbiter": "cosmos1qqp837a4kvtgplm6uqhdge0zzu6efqgujllfst"}')]),e._v(" or "),t("code",[e._v('{"arbiter": ":alice"}')]),e._v(", performing the resolution inside the contract rather than only in the client. Of course we would need a standard query format for name service, and the calling contract would need to somehow know the address of the canonical name service contract to resolve with, which is why this feature is still under discussion.")]),e._v(" "),t("h3",{attrs:{id:"dids"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dids"}},[e._v("#")]),e._v(" DIDs")]),e._v(" "),t("p",[t("em",[e._v("Note: it will likely be quite some time before this is fully implemented. It serves as design inspiration")])]),e._v(" "),t("p",[e._v("Let's keep imagining what is possible with "),t("em",[e._v("Human Names")]),e._v(', once we develop a solution to the name service issue. We could not just use a reference to resolve a user address, but resolve a contract as well. Maybe we could dispatch a message to an "ERC20" token contract not by its name, but by its '),t("em",[e._v("uniquely registered token ticker")]),e._v(". We would soon need to use some way to distinguish the scope or context of a name. This is where "),t("a",{attrs:{href:"https://www.w3.org/TR/did-core/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Decentralized Identifiers (DIDs)"),t("OutboundLink")],1),e._v(' could come in. Imagine the following message format, that could be used either by a end-client or by a smart contract "actor":')]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7ZGVzdGluYXRpb24mcXVvdDs6ICZxdW90O2RpZDp0b2tlbjpYUk4mcXVvdDssCiAgICAmcXVvdDttc2cmcXVvdDs6IHsKICAgICAgICAmcXVvdDt0cmFuc2ZlciZxdW90OzogewogICAgICAgICAgICAmcXVvdDtmcm9tJnF1b3Q7OiAmcXVvdDtkaWQ6YWNjb3VudDphbGljZSZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dG8mcXVvdDs6ICZxdW90O2RpZDphY2NvdW50OmJvYiZxdW90OywKICAgICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMy41NiZxdW90OwogICAgICAgIH0KICAgIH0KfQo="}}),e._v(" "),t("p",[e._v("This would not be some spec to be resolved client-side, but the actual interchange format used on the blockchain. So one smart contract could also dispatch such a message in the course of execution. Do you like this idea? Comments? "),t("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm/issues/80",target:"_blank",rel:"noopener noreferrer"}},[e._v("Please add your thoughts on github"),t("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);a.default=s.exports}}]);