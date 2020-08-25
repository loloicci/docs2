(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{666:function(e,t,o){"use strict";o.r(t);var r=o(0),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("In "),o("RouterLink",{attrs:{to:"/getting-started/intro.html"}},[e._v("getting started section")]),e._v(" we demonstrated the essential procedure that is required to use CosmWasm smart contracts: setup, compilation, development, and interacting. We will take it once step further and edit the escrow contract in a way that enables a thief to hijack the funds saved in the contract. Before starting, make sure you read and followed the steps in "),o("RouterLink",{attrs:{to:"/getting-started/intro.html"}},[e._v("getting started")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"setting-up-your-ide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-ide"}},[e._v("#")]),e._v(" Setting up your IDE")]),e._v(" "),o("p",[e._v("Now that you can compile and test the code, it is time to edit it. But before that, we will need a good editor to make those changes. I highly recommend plugins that help you learn syntax, especially when just starting rust. There are two free editor environments I can recommend, choose the one that is more familiar to you.")]),e._v(" "),o("p",[e._v("If you use VSCode ("),o("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download link"),o("OutboundLink")],1),e._v(") you just need to add the rust plugin. This is the best supported environment for RLS (Rust Language Server) and uses the rust compiler to type-check all your code on save. This gives the same error messages as the actual compiler would and highlights along the line of the code, but it can be a bit slow to respond sometime (as it runs the compiler). It is quite good, and if you are used to VSCode, I highly recommend it:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust",target:"_blank",rel:"noopener noreferrer"}},[e._v("RLS for VSCode"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("The other option I can recommend it Intellij IDEA Community Edition ("),o("a",{attrs:{href:"https://www.jetbrains.com/idea/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download link"),o("OutboundLink")],1),e._v("), along with the Rust Plugin. This has very nice and quick support for many language features directly inline. In particular, it shows the inferred types along variables, which can be very helpful, especially when working with (nested) generics. It catches most syntax errors very quickly, but not all of them. Which means sometimes you have to look at the compile failures to find the errors. If you are coming from another Intellij product (eg. Goland), I recommend this approach:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://intellij-rust.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RUST for Intellij"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("There are many more editors out there and some have varying degrees of rust support, at least syntax highlighting, but I would recommend trying one of the two above, especially if you are new to rust. Once you are confident in the language, you can always use another editor and customize it to your liking.")]),e._v(" "),o("h3",{attrs:{id:"setting-root-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-root-directory"}},[e._v("#")]),e._v(" Setting Root Directory")]),e._v(" "),o("p",[e._v("Both of the above extensions look for a Cargo.toml file in the root directory of your workspace, and only parse rust code referenced by this Cargo.toml file (listed as a workspace, or imported by "),o("code",[e._v("src/lib.rs")]),e._v("). The "),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cosmwasm-examples")]),o("OutboundLink")],1),e._v(" repo does not have a "),o("code",[e._v("Cargo.toml")]),e._v(" file, but rather one in each example sub-directory. To ensure proper IDE support when working on this example, you should open only the "),o("code",[e._v("escrow")]),e._v(" directory. And in general, have one window open for one rust projects, rooted in the same directory as it's "),o("code",[e._v("Cargo.toml")]),e._v(" file.")])])}),[],!1,null,null,null);t.default=n.exports}}]);