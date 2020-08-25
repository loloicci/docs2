(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{650:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("This is a simple tutorial showing you how to use of powerful node REPL to interact with\na CW20 token contract (fungible tokens, like ERC20) on "),o("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/coralnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("coralnet"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("I will walk you through uploading contract code and creating a concrete instance (the same "),o("code",[e._v("cw20-base")]),e._v("\nwasm code can be reused to create dozens of token contracts with different symbols and distributions).\nThen I will show you how to easily interact with this contract. As JSON manipulation and local variables\nare not so much fun in BASH, we use the "),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmjs/tree/master/packages/cli",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("@cosmjs/cli")]),o("OutboundLink")],1),e._v("\ntool instead of the "),o("code",[e._v("coral")]),e._v(" CLI tool.")]),e._v(" "),o("p",[e._v("But, before we get into the fun part of playing with the smart contracts, I want to make sure\nyou know how to use your tools and not loose your private keys.")]),e._v(" "),o("p",[e._v("You must have Node 10+ installed locally to run it. It has been tested on Ubuntu, and may not\nwork properly on Windows (we assume a HOME environmental variable). PRs welcome.")]),e._v(" "),o("h2",{attrs:{id:"connecting-to-the-chain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-chain"}},[e._v("#")]),e._v(" Connecting to the chain")]),e._v(" "),o("p",[e._v("The first step before doing anything is ensuring we can create an account and connect to the chain.\nYou will always use the following command to start up the "),o("code",[e._v("@cosmjs/cli")]),e._v(" with some cw20-specific helpers preloaded\n(in addition to all the general helpers it has).")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bnB4IEBjb3NtanMvY2xpIC0taW5pdCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ29zbVdhc20vY29zbXdhc20tcGx1cy9tYXN0ZXIvY29udHJhY3RzL2N3MjAtYmFzZS9oZWxwZXJzLnRzCg=="}}),e._v(" "),o("p",[e._v("Once this downloads the source and starts up, you should see a bunch of yellow text (explaining what code is preloaded),\nfollowed by a familiar node prompt: "),o("code",[e._v(">>")]),e._v(". Please note this is a super-charged REPL, it allows the use of "),o("code",[e._v("await")]),e._v("\nto easily work with "),o("code",[e._v("Promises")]),e._v(", and also does type-checks before executing code. You don't need to define types,\nbut if you type "),o("code",[e._v("client.getCodez()")]),e._v(", you will get the helpful message:\n"),o("code",[e._v("Property 'getCodez' does not exist on type 'SigningCosmWasmClient'. Did you mean 'getCodes'?")]),e._v(",\nmuch better than the typical "),o("code",[e._v("TypeError: client.getCodez is not a function")]),e._v("\nor worse "),o("code",[e._v("cannot call undefined")]),e._v(".")]),e._v(" "),o("p",[e._v("Without further ado, let's get to use it, and please do read the error messages:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnNldHVwKFlPVVJfUEFTU1dPUkRfSEVSRSk7CmNsaWVudC5nZXRBY2NvdW50KCk7Cg=="}}),e._v(" "),o("p",[e._v("This will take a few seconds as we hit the faucet the first time to ensure you have\nsome tokens in your account to pay fees. When it returns, you should see something like this:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"eyBhZGRyZXNzOiAnY29yYWwxaHpsbG5hZjl0ZXp2NTc4cDN5c21tbDZqMDB5c2RhYzR4d2x5OXcnLAogIGJhbGFuY2U6IFsgeyBkZW5vbTogJ3VzaGVsbCcsIGFtb3VudDogJzEwMDAwMDAnIH0gXSwKICBwdWJrZXk6IHVuZGVmaW5lZCwKICBhY2NvdW50TnVtYmVyOiAzMSwKICBzZXF1ZW5jZTogMCB9Cg=="}}),e._v(" "),o("h2",{attrs:{id:"reloading-your-wallet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reloading-your-wallet"}},[e._v("#")]),e._v(" Reloading your Wallet")]),e._v(" "),o("p",[e._v("You can keep typing in the shell, or close it and run some sections later.\nAlways start off with:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgY2xpZW50ID0gYXdhaXQgdXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnNldHVwKFlPVVJfUEFTU1dPUkRfSEVSRSk7Cg=="}}),e._v(" "),o("p",[e._v("to set up your client. "),o("code",[e._v("useOptions")]),e._v(" takes the coralnet configuration from everything from\nURLs to tokens to bech32prefix. When you call "),o("code",[e._v("setup")]),e._v(" with a password, it checks for\n"),o("code",[e._v("~/.coral.key")]),e._v(" and creates a new key if it is not there, otherwise it loads the key from the file.\nYour private key (actually mnemonic) is stored encrypted, and you need the same password to use it again.\nTry "),o("code",[e._v("cat ~/.coral.key")]),e._v(" to prove to yourself that it is indeed encrypted, or try reloading with a different\npassword.")]),e._v(" "),o("p",[e._v("If you want the mnemonic, you can recover it at anytime, as long as you still have the file and the password.\nYou could use this later to recover, or use the same mnemonic to import the key into the "),o("code",[e._v("coral")]),e._v(" cli tool.")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"dXNlT3B0aW9ucyhjb3JhbG5ldE9wdGlvbnMpLnJlY292ZXJNbmVtb25pYyhZT1VSX1BBU1NXT1JEX0hFUkUpCg=="}}),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[e._v("This command saves the key to "),o("code",[e._v("~/.coral.key")]),e._v(" encrypted. If you forget the password, either delete it or pass a\n"),o("code",[e._v("filename")]),e._v(" along with a password to create a new key.")])]),e._v(" "),o("p",[e._v("Also, try this with a invalid password and see how it fails.")]),e._v(" "),o("p",[e._v("Now that you feel a bit more secure about your keys (and ability to load them later), let's get into working with\nsome contracts.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);