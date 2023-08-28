(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{790:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"create-custom-cosmjs-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-custom-cosmjs-interfaces"}},[e._v("#")]),e._v(" Create Custom CosmJS Interfaces")]),e._v(" "),o("HighlightBox",{attrs:{type:"learning"}},[o("p",[e._v("In this section, you will:")]),e._v(" "),o("ul",[o("li",[e._v("Create custom CosmJS interfaces to connect to custom Cosmos SDK modules.")]),e._v(" "),o("li",[e._v("Define custom interfaces with Protobuf.")]),e._v(" "),o("li",[e._v("Define custom types and messages.")]),e._v(" "),o("li",[e._v("Integrate with Ignite - previously known as Starport.")])])]),e._v(" "),o("p",[e._v("CosmJS comes out of the box with interfaces that connect with the standard Cosmos SDK modules such as "),o("code",[e._v("bank")]),e._v(" and "),o("code",[e._v("gov")]),e._v(" and understand the way their messages are serialized. Since your own blockchain's modules are unique, they need custom CosmJS interfaces. That process consists of several steps:")]),e._v(" "),o("ol",[o("li",[e._v("Creating the Protobuf objects and clients in TypeScript.")]),e._v(" "),o("li",[e._v("Creating extensions that facilitate the use of the above clients.")]),e._v(" "),o("li",[e._v("Any further level of abstraction that you deem useful for integration.")])]),e._v(" "),o("p",[e._v("This section assumes that you have a working Cosmos blockchain with its own modules. It is based on CosmJS version "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/tree/v0.28.3",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("v0.28.3")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"compiling-the-protobuf-objects-and-clients"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-protobuf-objects-and-clients"}},[e._v("#")]),e._v(" Compiling the Protobuf objects and clients")]),e._v(" "),o("p",[e._v("You can choose which library you use to compile your Protobuf objects into TypeScript or JavaScript. Reproducing "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/main/packages/stargate/CUSTOM_PROTOBUF_CODECS.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("what Stargate"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://github.com/confio/cosmjs-types/blob/main/scripts/codegen.js",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cosmjs-types")]),o("OutboundLink")],1),e._v(" do is a good choice.")]),e._v(" "),o("h3",{attrs:{id:"preparation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),o("p",[e._v("This exercise assumes that:")]),e._v(" "),o("ol",[o("li",[e._v("Your Protobuf definition files are in "),o("code",[e._v("./proto/myChain")]),e._v(".")]),e._v(" "),o("li",[e._v("You want to compile them into TypeScript in "),o("code",[e._v("./client/src/types/generated")]),e._v(".")])]),e._v(" "),o("p",[e._v("Install "),o("code",[e._v("protoc")]),e._v(" on your computer and its Typescript plugin in your project, possibly with the help of a Dockerfile:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBta2RpciAtcCAvdXNyL2xpYi9wcm90b2MKJCBjZCAvdXNyL2xpYi9wcm90b2MKJCBjdXJsIC1MIGh0dHBzOi8vZ2l0aHViLmNvbS9wcm90b2NvbGJ1ZmZlcnMvcHJvdG9idWYvcmVsZWFzZXMvZG93bmxvYWQvdjIxLjcvcHJvdG9jLTIxLjctbGludXgteDg2XzY0LnppcCAtbyBwcm90b2MuemlwCiQgdW56aXAgLW8gcHJvdG9jLnppcAokIHJtIHByb3RvYy56aXAKJCBsbiAtcyAvdXNyL2xpYi9wcm90b2MvYmluL3Byb3RvYyAvdXNyL2xvY2FsL2Jpbi9wcm90b2MKJCBucG0gaW5zdGFsbCB0cy1wcm90b0AxLjEyMS42IC0tc2F2ZS1kZXYK"}}),e._v(" "),o("p",[e._v("Adjust to your preferred version, operating system, and CPU platform. For instance, on an Apple M1 you would use "),o("code",[e._v("protoc-21.7-osx-aarch_64.zip")]),e._v(".")])],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Dockerfile"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"ockerfile",base64:"RlJPTSAtLXBsYXRmb3JtPWxpbnV4IG5vZGU6bHRzLXNsaW0gYXMgYmFzZQpBUkcgQlVJTERBUkNICgpFTlYgUFJPVE9DX1ZFUlNJT049MjEuNwpFTlYgVFNfUFJPVE9fVkVSU0lPTj0xLjEyMS42CgpGUk9NIGJhc2UgQVMgcGxhdGZvcm0tYW1kNjQKRU5WIFBST1RPQ19QTEFURk9STT14ODZfNjQKCkZST00gYmFzZSBBUyBwbGF0Zm9ybS1hcm02NApFTlYgUFJPVE9DX1BMQVRGT1JNPWFhcmNoXzY0CgpGUk9NIHBsYXRmb3JtLSR7QlVJTERBUkNIfQoKUlVOIGFwdC1nZXQgdXBkYXRlClJVTiBhcHQtZ2V0IGluc3RhbGwgY3VybCB1bnppcCAtLXllcwoKIyBJbnN0YWxsIFByb3RvQwpSVU4gbWtkaXIgLXAgL3Vzci9saWIvcHJvdG9jCldPUktESVIgL3Vzci9saWIvcHJvdG9jClJVTiBjdXJsIC1MIGh0dHBzOi8vZ2l0aHViLmNvbS9wcm90b2NvbGJ1ZmZlcnMvcHJvdG9idWYvcmVsZWFzZXMvZG93bmxvYWQvdiR7UFJPVE9DX1ZFUlNJT059L3Byb3RvYy0ke1BST1RPQ19WRVJTSU9OfS1saW51eC0ke1BST1RPQ19QTEFURk9STX0uemlwIC1vIHByb3RvYy56aXAKUlVOIHVuemlwIC1vIHByb3RvYy56aXAKUlVOIHJtIHByb3RvYy56aXAKUlVOIGxuIC1zIC91c3IvbGliL3Byb3RvYy9iaW4vcHJvdG9jIC91c3IvbG9jYWwvYmluL3Byb3RvYwoKIyBJbnN0YWxsIHRzLXByb3RvClJVTiBucG0gaW5zdGFsbCAtLWdsb2JhbCB0cy1wcm90b0Ake1RTX1BST1RPX1ZFUlNJT059IC0tc2F2ZS1leGFjdAoKV09SS0RJUiAvCgpFTlRSWVBPSU5UIFsgJnF1b3Q7cHJvdG9jJnF1b3Q7IF0K"}}),e._v(" "),o("p",[e._v("Then build the image:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgYnVpbGQgLiAtdCB0cy1wcm90b2MK"}})],1)],1),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("You can confirm the version you received. The executable is located in "),o("code",[e._v("./node_modules/protoc/protoc/bin/protoc")]),e._v(":")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBwcm90b2MgLS12ZXJzaW9uCg=="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIHRzLXByb3RvYyAtLXZlcnNpb24K"}})],1)],1),e._v(" "),o("p",[e._v("This returns something like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"bGlicHJvdG9jIDMuMjEuNwo="}}),e._v(" "),o("p",[e._v("The compiler tools are ready. Time to use them.")]),e._v(" "),o("p",[e._v("Create the target folder if it does not exist yet:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBta2RpciAtcCBjbGllbnQvc3JjL3R5cGVzL2dlbmVyYXRlZAo="}}),e._v(" "),o("h3",{attrs:{id:"getting-third-party-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-third-party-files"}},[e._v("#")]),e._v(" Getting third party files")]),e._v(" "),o("p",[e._v("You need to get the imports that appear in your "),o("code",[e._v(".proto")]),e._v(" files. Usually you can find the following in "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/d98503b/proto/cosmos/bank/v1beta1/query.proto#L4-L6",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("query.proto")]),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"aW1wb3J0ICZxdW90O2Nvc21vcy9iYXNlL3F1ZXJ5L3YxYmV0YTEvcGFnaW5hdGlvbi5wcm90byZxdW90OzsKaW1wb3J0ICZxdW90O2dvZ29wcm90by9nb2dvLnByb3RvJnF1b3Q7OwppbXBvcnQgJnF1b3Q7Z29vZ2xlL2FwaS9hbm5vdGF0aW9ucy5wcm90byZxdW90OzsK"}}),e._v(" "),o("p",[e._v("You need local copies of the right file versions in the right locations. Pay particular attention to Cosmos SDK's version of your project. You can check by running:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBncmVwIGNvc21vcy1zZGsgZ28ubW9kCg=="}}),e._v(" "),o("p",[e._v("This returns something like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkayB2MC40NS40Cg=="}}),e._v(" "),o("p",[e._v("Use this version as a tag on Github. One way to retrieve the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/proto/cosmos/base/query/v1beta1/pagination.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("pagination file"),o("OutboundLink")],1),e._v(" is:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBta2RpciAtcCAuL3Byb3RvL2Nvc21vcy9iYXNlL3F1ZXJ5L3YxYmV0YTEvCiQgY3VybCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY29zbW9zL2Nvc21vcy1zZGsvdjAuNDUuNC9wcm90by9jb3Ntb3MvYmFzZS9xdWVyeS92MWJldGExL3BhZ2luYXRpb24ucHJvdG8gLW8gLi9wcm90by9jb3Ntb3MvYmFzZS9xdWVyeS92MWJldGExL3BhZ2luYXRpb24ucHJvdG8K"}}),e._v(" "),o("p",[e._v("You can do the same for the others, found in the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.4/third_party/proto",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("third_party")]),e._v(" folder"),o("OutboundLink")],1),e._v(" under the same version:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBta2RpciAtcCAuL3Byb3RvL2dvb2dsZS9hcGkKJCBjdXJsIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jb3Ntb3MvY29zbW9zLXNkay92MC40NS40L3RoaXJkX3BhcnR5L3Byb3RvL2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucHJvdG8gLW8gLi9wcm90by9nb29nbGUvYXBpL2Fubm90YXRpb25zLnByb3RvCiQgY3VybCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY29zbW9zL2Nvc21vcy1zZGsvdjAuNDUuNC90aGlyZF9wYXJ0eS9wcm90by9nb29nbGUvYXBpL2h0dHAucHJvdG8gLW8gLi9wcm90by9nb29nbGUvYXBpL2h0dHAucHJvdG8KJCBta2RpciAtcCAuL3Byb3RvL2dvZ29wcm90bwokIGN1cmwgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3YwLjQ1LjQvdGhpcmRfcGFydHkvcHJvdG8vZ29nb3Byb3RvL2dvZ28ucHJvdG8gLW8gLi9wcm90by9nb2dvcHJvdG8vZ29nby5wcm90bwo="}}),e._v(" "),o("h3",{attrs:{id:"compilation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compilation"}},[e._v("#")]),e._v(" Compilation")]),e._v(" "),o("p",[e._v("You can now compile the Protobuf files. To avoid adding all the "),o("code",[e._v(".proto")]),e._v(" files manually to the command, use "),o("code",[e._v("xargs")]),e._v(":")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBscyAuL3Byb3RvL215Q2hhaW4gfCB4YXJncyAtSSB7fSBwcm90b2MgXAogIC0tcGx1Z2luPSZxdW90Oy4vbm9kZV9tb2R1bGVzL3RzLXByb3RvL3Byb3RvYy1nZW4tdHNfcHJvdG8mcXVvdDsgXAogIC0tdHNfcHJvdG9fb3V0PSZxdW90Oy4vY2xpZW50L3NyYy90eXBlcy9nZW5lcmF0ZWQmcXVvdDsgXAogIC0tcHJvdG9fcGF0aD0mcXVvdDsuL3Byb3RvJnF1b3Q7IFwKICAtLXRzX3Byb3RvX29wdD0mcXVvdDtlc01vZHVsZUludGVyb3A9dHJ1ZSxmb3JjZUxvbmc9bG9uZyx1c2VPcHRpb25hbHM9bWVzc2FnZXMmcXVvdDsgXAogIG15Q2hhaW4ve30K"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBscyAuL3Byb3RvL215Q2hhaW4gfCB4YXJncyAtSSB7fSBcCiAgICBkb2NrZXIgcnVuIC0tcm0gLWkgXAogICAgLXYgJChwd2QpOi9wcm9qZWN0IC13IC9wcm9qZWN0IFwKICAgIHRzLXByb3RvYyBcCiAgICAtLXBsdWdpbj0mcXVvdDsvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvdHMtcHJvdG8vcHJvdG9jLWdlbi10c19wcm90byZxdW90OyBcCiAgICAtLXRzX3Byb3RvX291dD0mcXVvdDsuL2NsaWVudC9zcmMvdHlwZXMvZ2VuZXJhdGVkJnF1b3Q7IFwKICAgIC0tcHJvdG9fcGF0aD0mcXVvdDsuL3Byb3RvJnF1b3Q7IFwKICAgIC0tdHNfcHJvdG9fb3B0PSZxdW90O2VzTW9kdWxlSW50ZXJvcD10cnVlLGZvcmNlTG9uZz1sb25nLHVzZU9wdGlvbmFscz1tZXNzYWdlcyZxdW90OyBcCiAgICBteUNoYWluL3t9Cg=="}}),e._v(" "),o("p",[e._v("Where "),o("code",[e._v("/usr/local/lib/node_modules")]),e._v(" is the result of the query:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIC0tZW50cnlwb2ludCBucG0gXAogICAgdHMtcHJvdG9jIFwKICAgIHJvb3QgLS1nbG9iYWwK"}}),e._v(" "),o("p",[e._v("This shows where "),o("code",[e._v("ts-proto")]),e._v(" was installed globally.")])],1)],1),e._v(" "),o("hr"),e._v(" "),o("p",[o("code",[e._v("--proto_path")]),e._v(" is only "),o("code",[e._v("./proto")]),e._v(" so that your imports (such as "),o("code",[e._v('import "cosmos/base...')]),e._v(") can be found.")]),e._v(" "),o("p",[e._v("You should now see your files compiled into TypeScript. They have been correctly filed under their respective folders and contain both types and services definitions. It also created the compiled versions of your third party imports.")]),e._v(" "),o("h3",{attrs:{id:"a-note-about-the-result"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-note-about-the-result"}},[e._v("#")]),e._v(" A note about the result")]),e._v(" "),o("p",[e._v("Your "),o("code",[e._v("tx.proto")]),e._v(" file may have contained the following:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"c2VydmljZSBNc2cgewogICAgICBycGMgU2VuZChNc2dTZW5kKSByZXR1cm5zIChNc2dTZW5kUmVzcG9uc2UpOwogICAgICAvLy4uLgp9Cg==",url:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/proto/cosmos/bank/v1beta1/tx.proto#L11-L17"}}),e._v(" "),o("p",[e._v("If so, you find its service declaration in the compiled "),o("code",[e._v("tx.ts")]),e._v(" file:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGludGVyZmFjZSBNc2cgewogICAgU2VuZChyZXF1ZXN0OiBNc2dTZW5kKTogUHJvbWlzZSZsdDtNc2dTZW5kUmVzcG9uc2UmZ3Q7OwogICAgLy8uLi4KfQo=",url:"https://github.com/confio/cosmjs-types/blob/v0.4.1/src/cosmos/bank/v1beta1/tx.ts#L243-L248"}}),e._v(" "),o("p",[e._v("It also appears in the default implementation:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGNsYXNzIE1zZ0NsaWVudEltcGwgaW1wbGVtZW50cyBNc2cgewogICAgcHJpdmF0ZSByZWFkb25seSBycGM6IFJwYzsKICAgIGNvbnN0cnVjdG9yKHJwYzogUnBjKSB7CiAgICAgICAgdGhpcy5ycGMgPSBycGM7CiAgICAgICAgdGhpcy5TZW5kID0gdGhpcy5TZW5kLmJpbmQodGhpcyk7CiAgICAgICAgLy8uLi4KICAgIH0KICAgIFNlbmQocmVxdWVzdDogTXNnU2VuZCk6IFByb21pc2UmbHQ7TXNnU2VuZFJlc3BvbnNlJmd0OyB7CiAgICAgICAgY29uc3QgZGF0YSA9IE1zZ1NlbmQuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpOwogICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KCZxdW90O2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnJnF1b3Q7LCAmcXVvdDtTZW5kJnF1b3Q7LCBkYXRhKTsKICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9Jmd0OyBNc2dTZW5kUmVzcG9uc2UuZGVjb2RlKG5ldyBfbTAuUmVhZGVyKGRhdGEpKSk7CiAgICB9CiAgICAvLy4uLgp9Cg==",url:"https://github.com/confio/cosmjs-types/blob/v0.4.1/src/cosmos/bank/v1beta1/tx.ts#L250-L268"}}),e._v(" "),o("p",[e._v("The important points to remember from this are:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("rpc: RPC")]),e._v(" is an instance of a Protobuf RPC client that is given to you by CosmJS. Although the interface appears to be "),o("a",{attrs:{href:"https://github.com/confio/cosmjs-types/blob/v0.4.1/src/cosmos/bank/v1beta1/tx.ts#L270-L272",target:"_blank",rel:"noopener noreferrer"}},[e._v("declared locally"),o("OutboundLink")],1),e._v(", this is the same interface found "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/queryclient/utils.ts#L35-L37",target:"_blank",rel:"noopener noreferrer"}},[e._v("throughout CosmJS"),o("OutboundLink")],1),e._v(". It is given to you "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/queryclient/queryclient.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("on construction"),o("OutboundLink")],1),e._v(". At this point you do not need an implementation for it.")]),e._v(" "),o("li",[e._v("You can see "),o("code",[e._v("encode")]),e._v(" and "),o("code",[e._v("decode")]),e._v(" in action. Notice the "),o("code",[e._v(".finish()")]),e._v(" that flushes the Protobuf writer buffer.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("rpc.request")]),e._v(" makes calls that are correctly understood by the Protobuf compiled server on the other side.")])]),e._v(" "),o("p",[e._v("You can find the same structure in "),o("a",{attrs:{href:"https://github.com/confio/cosmjs-types/blob/v0.4.1/src/cosmos/bank/v1beta1/query.ts",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("query.ts")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"proper-saving"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proper-saving"}},[e._v("#")]),e._v(" Proper saving")]),e._v(" "),o("p",[e._v("Commit the extra "),o("code",[e._v(".proto")]),e._v(" files as well as the compiled ones to your repository so you do not need to recreate them.")]),e._v(" "),o("p",[e._v("Take inspiration from "),o("code",[e._v("cosmjs-types")]),e._v(" "),o("a",{attrs:{href:"https://github.com/confio/cosmjs-types/tree/main/scripts",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("codegen.sh")]),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("ol",[o("li",[e._v("Create a script file named "),o("code",[e._v("ts-proto.sh")]),e._v(" with the previous command, or create a "),o("code",[e._v("Makefile")]),e._v(" target.")]),e._v(" "),o("li",[e._v("Add an "),o("a",{attrs:{href:"https://github.com/confio/cosmjs-types/blob/c64759a/package.json#L31",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm run target"),o("OutboundLink")],1),e._v(" with it, to keep track of how this was done and easily reproduce it in the future when you update a Protobuf file.")])]),e._v(" "),o("h2",{attrs:{id:"add-convenience-with-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-convenience-with-types"}},[e._v("#")]),e._v(" Add convenience with types")]),e._v(" "),o("p",[e._v("CosmJS provides an interface to which all the created types conform, "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/proto-signing/src/registry.ts#L12-L18",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("TsProtoGeneratedType")]),o("OutboundLink")],1),e._v(", which is itself a sub-type of "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/proto-signing/src/registry.ts#L32",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("GeneratedType")]),o("OutboundLink")],1),e._v(". In the same file, note the definition:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGludGVyZmFjZSBFbmNvZGVPYmplY3QgewogICAgcmVhZG9ubHkgdHlwZVVybDogc3RyaW5nOwogICAgcmVhZG9ubHkgdmFsdWU6IGFueTsKfQo=",url:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/proto-signing/src/registry.ts#L54-L57"}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("typeUrl")]),e._v(" is the identifier by which Protobuf identifies the type of the data to serialize or deserialize. It is composed of the type's package and its name. For instance (and see also "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/3a1027c/proto/cosmos/bank/v1beta1/tx.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v("):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"cGFja2FnZSBjb3Ntb3MuYmFuay52MWJldGExOwovLy4uLgptZXNzYWdlIE1zZ1NlbmQgewogICAgLy8uLi4KfQo="}}),e._v(" "),o("p",[e._v("In this case, the "),o("code",[e._v("MsgSend")]),e._v("'s type URL is "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/modules/bank/messages.ts#L6",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v('"/cosmos.bank.v1beta1.MsgSend"')]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Each of your types is associated like this. You can declare each string as a constant value, such as:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGNvbnN0IG1zZ1NlbmRUeXBlVXJsID0gJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OzsK"}}),e._v(" "),o("p",[e._v("Save those along with "),o("code",[e._v("generated")]),e._v(" in "),o("code",[e._v("./client/src/types/modules")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"for-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#for-messages"}},[e._v("#")]),e._v(" For messages")]),e._v(" "),o("p",[e._v("Messages, sub-types of "),o("code",[e._v("Msg")]),e._v(", are assembled into transactions that are then sent to CometBFT. CosmJS types already include types for "),o("a",{attrs:{href:"https://github.com/confio/cosmjs-types/blob/v0.4.1/src/cosmos/tx/v1beta1/tx.ts#L12-L26",target:"_blank",rel:"noopener noreferrer"}},[e._v("transactions"),o("OutboundLink")],1),e._v(". These are assembled, signed, and sent by the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/signingstargateclient.ts#L280-L298",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("SigningStargateClient")]),o("OutboundLink")],1),e._v(" of CosmJS.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Msg")]),e._v(" kind also needs to be added to a registry. To facilitate that, you should prepare them in a nested array:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGNvbnN0IGJhbmtUeXBlczogUmVhZG9ubHlBcnJheSZsdDtbc3RyaW5nLCBHZW5lcmF0ZWRUeXBlXSZndDsgPSBbCiAgICBbJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnTXVsdGlTZW5kJnF1b3Q7LCBNc2dNdWx0aVNlbmRdLAogICAgWyZxdW90Oy9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1NlbmQmcXVvdDssIE1zZ1NlbmRdLApdOwo=",url:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/modules/bank/messages.ts#L4-L7"}}),e._v(" "),o("p",[e._v("Add child types to "),o("code",[e._v("EncodeObject")]),e._v(" to direct Typescript:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGludGVyZmFjZSBNc2dTZW5kRW5jb2RlT2JqZWN0IGV4dGVuZHMgRW5jb2RlT2JqZWN0IHsKICAgIHJlYWRvbmx5IHR5cGVVcmw6ICZxdW90Oy9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1NlbmQmcXVvdDs7CiAgICByZWFkb25seSB2YWx1ZTogUGFydGlhbCZsdDtNc2dTZW5kJmd0OzsKfQo=",url:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/modules/bank/messages.ts#L9-L12"}}),e._v(" "),o("p",[e._v("In the previous code, you cannot reuse your "),o("code",[e._v("msgSendTypeUrl")]),e._v(" because it is a value not a type. You can add a type helper, which is useful in an "),o("code",[e._v("if else")]),e._v(" situation:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGZ1bmN0aW9uIGlzTXNnU2VuZEVuY29kZU9iamVjdChlbmNvZGVPYmplY3Q6IEVuY29kZU9iamVjdCk6IGVuY29kZU9iamVjdCBpcyBNc2dTZW5kRW5jb2RlT2JqZWN0IHsKICAgIHJldHVybiAoZW5jb2RlT2JqZWN0IGFzIE1zZ1NlbmRFbmNvZGVPYmplY3QpLnR5cGVVcmwgPT09ICZxdW90Oy9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1NlbmQmcXVvdDs7Cn0K",url:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/modules/bank/messages.ts#L14-L16"}}),e._v(" "),o("h3",{attrs:{id:"for-queries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#for-queries"}},[e._v("#")]),e._v(" For queries")]),e._v(" "),o("p",[e._v("Queries have very different types of calls. It makes sense to organize them in one place, called an extension. For example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGludGVyZmFjZSBCYW5rRXh0ZW5zaW9uIHsKICAgIHJlYWRvbmx5IGJhbms6IHsKICAgICAgICByZWFkb25seSBiYWxhbmNlOiAoYWRkcmVzczogc3RyaW5nLCBkZW5vbTogc3RyaW5nKSA9Jmd0OyBQcm9taXNlJmx0O0NvaW4mZ3Q7OwogICAgICAgIHJlYWRvbmx5IGFsbEJhbGFuY2VzOiAoYWRkcmVzczogc3RyaW5nKSA9Jmd0OyBQcm9taXNlJmx0O0NvaW5bXSZndDs7CiAgICAgICAgLy8uLi4KICAgIH07Cn0K",url:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/modules/bank/queries.ts#L9-L18"}}),e._v(" "),o("p",[e._v("Note that there is a "),o("strong",[e._v("key")]),e._v(" "),o("code",[e._v("bank:")]),e._v(" inside it. This becomes important later on when you "),o("em",[e._v("add")]),e._v(" it to Stargate.")]),e._v(" "),o("ol",[o("li",[e._v("Create an extension interface for your module using function names and parameters that satisfy your needs.")]),e._v(" "),o("li",[e._v("It is recommended to make sure that the key is unique and does not overlap with any other modules of your application.")]),e._v(" "),o("li",[e._v("Create a factory for its implementation copying the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/modules/bank/queries.ts#L20-L59",target:"_blank",rel:"noopener noreferrer"}},[e._v("model here"),o("OutboundLink")],1),e._v(". Remember that the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/modules/bank/queries.ts#L4",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("QueryClientImpl")]),o("OutboundLink")],1),e._v(" implementation must come from your own compiled Protobuf query service.")])]),e._v(" "),o("h2",{attrs:{id:"integration-with-stargate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integration-with-stargate"}},[e._v("#")]),e._v(" Integration with Stargate")]),e._v(" "),o("p",[o("code",[e._v("StargateClient")]),e._v(" and "),o("code",[e._v("SigningStargateClient")]),e._v(" are typically the ultimate abstractions that facilitate the querying and sending of transactions. You are now ready to add your own elements to them. The easiest way is to inherit from them and expose the extra functions you require.")]),e._v(" "),o("p",[e._v("If your extra functions map one-for-one with those of your own extension, then you can publicly expose the extension itself to minimize duplication in "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/stargateclient.ts#L143",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("StargateClient")]),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/signingstargateclient.ts#L109",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("SigningStargateClient")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("For example, if you have your "),o("code",[e._v("interface MyExtension")]),e._v(" with a "),o("code",[e._v("myKey")]),e._v(" key and you are creating "),o("code",[e._v("MyStargateClient")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGNsYXNzIE15U3RhcmdhdGVDbGllbnQgZXh0ZW5kcyBTdGFyZ2F0ZUNsaWVudCB7CiAgICBwdWJsaWMgcmVhZG9ubHkgbXlRdWVyeUNsaWVudDogTXlFeHRlbnNpb24gfCB1bmRlZmluZWQKCiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNvbm5lY3QoCiAgICAgIGVuZHBvaW50OiBzdHJpbmcsCiAgICAgIG9wdGlvbnM6IFN0YXJnYXRlQ2xpZW50T3B0aW9ucyA9IHt9LAogICk6IFByb21pc2UmbHQ7TXlTdGFyZ2F0ZUNsaWVudCZndDsgewogICAgICAgIGNvbnN0IHRtQ2xpZW50ID0gYXdhaXQgVGVuZGVybWludDM0Q2xpZW50LmNvbm5lY3QoZW5kcG9pbnQpCiAgICAgICAgcmV0dXJuIG5ldyBNeVN0YXJnYXRlQ2xpZW50KHRtQ2xpZW50LCBvcHRpb25zKQogICAgfQoKICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih0bUNsaWVudDogVGVuZGVybWludDM0Q2xpZW50IHwgdW5kZWZpbmVkLCBvcHRpb25zOiBTdGFyZ2F0ZUNsaWVudE9wdGlvbnMpIHsKICAgICAgICBzdXBlcih0bUNsaWVudCwgb3B0aW9ucykKICAgICAgICBpZiAodG1DbGllbnQpIHsKICAgICAgICAgICAgdGhpcy5teVF1ZXJ5Q2xpZW50ID0gUXVlcnlDbGllbnQud2l0aEV4dGVuc2lvbnModG1DbGllbnQsIHNldHVwTXlFeHRlbnNpb24pCiAgICAgICAgfQogICAgfQp9Cg=="}}),e._v(" "),o("p",[e._v("You can extend "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/stargateclient.ts#L139-L141",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("StargateClientOptions")]),o("OutboundLink")],1),e._v(" if your own client can receive further options.")]),e._v(" "),o("p",[e._v("You also need to inform "),o("code",[e._v("MySigningStargateClient")]),e._v(" about the extra encodable types it should be able to handle. The list is defined in a registry that you can "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/signingstargateclient.ts#L139",target:"_blank",rel:"noopener noreferrer"}},[e._v("pass as options"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Take inspiration from the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/signingstargateclient.ts#L76-L80",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("SigningStargateClient")]),e._v(" source code"),o("OutboundLink")],1),e._v(" itself. Collect your new types into an array:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"aW1wb3J0IHsgZGVmYXVsdFJlZ2lzdHJ5VHlwZXMgfSBmcm9tICZxdW90O0Bjb3NtanMvc3RhcmdhdGUmcXVvdDsKCmV4cG9ydCBjb25zdCBteURlZmF1bHRSZWdpc3RyeVR5cGVzOiBSZWFkb25seUFycmF5Jmx0O1tzdHJpbmcsIEdlbmVyYXRlZFR5cGVdJmd0OyA9IFsKICAgIC4uLmRlZmF1bHRSZWdpc3RyeVR5cGVzLAogICAgLi4ubXlUeXBlcywgLy8gQXMgeW91IGRlZmluZWQgYmFua1R5cGVzIGVhcmxpZXIKXQo="}}),e._v(" "),o("p",[e._v("Taking inspiration from "),o("a",{attrs:{href:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/signingstargateclient.ts#L118-L120",target:"_blank",rel:"noopener noreferrer"}},[e._v("the same place"),o("OutboundLink")],1),e._v(", add the registry creator:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFJlZ2lzdHJ5KCk6IFJlZ2lzdHJ5IHsKICAgIHJldHVybiBuZXcgUmVnaXN0cnkobXlEZWZhdWx0UmVnaXN0cnlUeXBlcykKfQo="}}),e._v(" "),o("p",[e._v("Now you are ready to combine this into your own "),o("code",[e._v("MySigningStargateClient")]),e._v(". It still takes an optional registry, but if that is missing it adds your newly defined default one:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"ZXhwb3J0IGNsYXNzIE15U2lnbmluZ1N0YXJnYXRlQ2xpZW50IGV4dGVuZHMgU2lnbmluZ1N0YXJnYXRlQ2xpZW50IHsKICAgIHB1YmxpYyByZWFkb25seSBteVF1ZXJ5Q2xpZW50OiBNeUV4dGVuc2lvbiB8IHVuZGVmaW5lZAoKICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29ubmVjdFdpdGhTaWduZXIoCiAgICAgICAgZW5kcG9pbnQ6IHN0cmluZywKICAgICAgICBzaWduZXI6IE9mZmxpbmVTaWduZXIsCiAgICAgICAgb3B0aW9uczogU2lnbmluZ1N0YXJnYXRlQ2xpZW50T3B0aW9ucyA9IHt9CiAgICApOiBQcm9taXNlJmx0O015U2lnbmluZ1N0YXJnYXRlQ2xpZW50Jmd0OyB7CiAgICAgICAgY29uc3QgdG1DbGllbnQgPSBhd2FpdCBUZW5kZXJtaW50MzRDbGllbnQuY29ubmVjdChlbmRwb2ludCkKICAgICAgICByZXR1cm4gbmV3IE15U2lnbmluZ1N0YXJnYXRlQ2xpZW50KHRtQ2xpZW50LCBzaWduZXIsIHsKICAgICAgICAgICAgcmVnaXN0cnk6IGNyZWF0ZURlZmF1bHRSZWdpc3RyeSgpLAogICAgICAgICAgICAuLi5vcHRpb25zLAogICAgICAgIH0pCiAgICB9CgogICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHRtQ2xpZW50OiBUZW5kZXJtaW50MzRDbGllbnQgfCB1bmRlZmluZWQsIHNpZ25lcjogT2ZmbGluZVNpZ25lciwgb3B0aW9uczogU2lnbmluZ1N0YXJnYXRlQ2xpZW50T3B0aW9ucykgewogICAgICAgIHN1cGVyKHRtQ2xpZW50LCBzaWduZXIsIG9wdGlvbnMpCiAgICAgICAgaWYgKHRtQ2xpZW50KSB7CiAgICAgICAgICAgIHRoaXMubXlRdWVyeUNsaWVudCA9IFF1ZXJ5Q2xpZW50LndpdGhFeHRlbnNpb25zKHRtQ2xpZW50LCBzZXR1cE15RXh0ZW5zaW9uKQogICAgICAgIH0KICAgIH0KfQo="}}),e._v(" "),o("p",[e._v("You can optionally add dedicated functions that use your own types, modeled on:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"cHVibGljIGFzeW5jIHNlbmRUb2tlbnMoCiAgICBzZW5kZXJBZGRyZXNzOiBzdHJpbmcsCiAgICByZWNpcGllbnRBZGRyZXNzOiBzdHJpbmcsCiAgICBhbW91bnQ6IHJlYWRvbmx5IENvaW5bXSwKICAgIGZlZTogU3RkRmVlIHwgJnF1b3Q7YXV0byZxdW90OyB8IG51bWJlciwKICAgIG1lbW8gPSAmcXVvdDsmcXVvdDssCik6IFByb21pc2UmbHQ7RGVsaXZlclR4UmVzcG9uc2UmZ3Q7IHsKICAgIGNvbnN0IHNlbmRNc2c6IE1zZ1NlbmRFbmNvZGVPYmplY3QgPSB7CiAgICAgICAgdHlwZVVybDogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICB2YWx1ZTogewogICAgICAgICAgICBmcm9tQWRkcmVzczogc2VuZGVyQWRkcmVzcywKICAgICAgICAgICAgdG9BZGRyZXNzOiByZWNpcGllbnRBZGRyZXNzLAogICAgICAgICAgICBhbW91bnQ6IFsuLi5hbW91bnRdLAogICAgICAgIH0sCiAgICB9OwogICAgcmV0dXJuIHRoaXMuc2lnbkFuZEJyb2FkY2FzdChzZW5kZXJBZGRyZXNzLCBbc2VuZE1zZ10sIGZlZSwgbWVtbyk7Cn0K",url:"https://github.com/cosmos/cosmjs/blob/v0.28.3/packages/stargate/src/signingstargateclient.ts#L180-L196"}}),e._v(" "),o("p",[e._v("Think of your functions as examples of proper use, that other developers can reuse when assembling more complex transactions.")]),e._v(" "),o("p",[e._v("You are ready to import and use this in a server script or a GUI.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("If you would like to get started on building your own CosmJS elements on your own checkers game, you can go straight to the exercise in "),o("RouterLink",{attrs:{to:"/hands-on-exercise/3-cosmjs-adv/"}},[e._v("CosmJS for Your Chain")]),e._v(" to start from scratch.")],1),e._v(" "),o("p",[e._v("More specifically, you can jump to:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/hands-on-exercise/3-cosmjs-adv/1-cosmjs-objects.html"}},[e._v("Create Custom Objects")]),e._v(", to see how to compile the Protobuf objects.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/hands-on-exercise/3-cosmjs-adv/2-cosmjs-messages.html"}},[e._v("Create Custom Messages")]),e._v(", to see how to create messages relevant for checkers.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/hands-on-exercise/3-cosmjs-adv/5-server-side.html"}},[e._v("Backend Script for Game Indexing")]),e._v(", to see how this can be used also to listen to events coming from the blockchain.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/hands-on-exercise/3-cosmjs-adv/4-cosmjs-gui.html"}},[e._v("Integrate CosmJS and Keplr")]),e._v(", to see how to use and integrate what you prepared into a preexisting Checkers GUI.")],1)])]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("How CosmJS's out-of-the-box interfaces understand how messages of standard Cosmos SDK modules are serialized, meaning that your unique modules will require custom CosmJS interfaces of their own.")]),e._v(" "),o("li",[e._v("How to create the necessary Protobuf objects and clients in Typescript, the extensions that facilitate the use of these clients, and any further level of abstraction that you deem useful for integration.")]),e._v(" "),o("li",[e._v("How to integrate CosmJS with Ignite's client and signing client, which are typically the ultimate abstractions that facilitate the querying and sending of transactions.")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);