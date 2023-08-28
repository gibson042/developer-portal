(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{807:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"how-to-use-ipfs-for-governance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-ipfs-for-governance"}},[e._v("#")]),e._v(" How to use IPFS for governance")]),e._v(" "),o("h2",{attrs:{id:"what-is-ipfs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-ipfs"}},[e._v("#")]),e._v(" What is IPFS")]),e._v(" "),o("p",[e._v("In Web 2.0, a web application consists of a backend and a frontend. The backend is the server where the database and the application logic run. The frontend consists of the user interface, what the user sees, and communicates with the backend via API calls. Usually, these are stored by the developer of the application in centralized servers.")]),e._v(" "),o("p",[e._v("In the decentralized world, we can consider Cosmos SDK chains as a backend of our decentralized applications (Dapps). The blockchain lets us store and retrieve data. Dapps usually have a frontend as well, and that frontend can be stored in a centralized entity (AWS, GitHub Pages) or, in order to be 100% decentralized, use a protocol like IPFS.")]),e._v(" "),o("blockquote",[o("p",[e._v("IPFS is a distributed system for storing and accessing files, websites, applications, and data.")])]),e._v(" "),o("p",[e._v("This means that IPFS allows you to store your frontend in a decentralized manner.")]),e._v(" "),o("p",[e._v("You can find more information about how IPFS works in their "),o("a",{attrs:{href:"https://docs.ipfs.tech/concepts/what-is-ipfs",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("In this tutorial, you will learn how to store files and websites on IPFS.")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("First download and install IPFS, find the instructions for your OS "),o("a",{attrs:{href:"https://docs.ipfs.io/install/command-line/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Verify you have a working installation by running the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpcGZzIC0tdmVyc2lvbgo="}}),e._v(" "),o("p",[e._v("Which for instance returns:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"aXBmcyB2ZXJzaW9uIDAuMTUuMAo="}}),e._v(" "),o("h2",{attrs:{id:"submit-a-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submit-a-file"}},[e._v("#")]),e._v(" Submit a file")]),e._v(" "),o("p",[e._v("To make a file available on IPFS, you need to make it available to an IPFS node. This can be a local IPFS node or a remote one. In this tutorial, you will use a remote node.")]),e._v(" "),o("p",[e._v("For Cosmos chain governance, you want to store the metadata on IPFS nodes.")]),e._v(" "),o("p",[e._v("Create a file called "),o("code",[e._v("metadata.json")]),e._v(" with the following content:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtGdW5kcyBhbHVtbmkgcHJvZ3JhbSZxdW90OywKICAmcXVvdDthdXRob3JzJnF1b3Q7OiAmcXVvdDtJREEgQWx1bW5pJnF1b3Q7LAogICZxdW90O3N1bW1hcnkmcXVvdDs6ICZxdW90O0xvcmVtIGlwc2V1bSBkb2xvciBzaXQgYW1ldCZxdW90OywKICAmcXVvdDtkZXRhaWxzJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgJnF1b3Q7cHJvcG9zYWxGb3J1bVVSTCZxdW90OzogJnF1b3Q7aHR0cHM6Ly9mb3J1bS5jb3Ntb3MubmV0d29yay90L2ZvbyZxdW90OywKICAmcXVvdDt2b3RlT3B0aW9uQ29udGV4dCZxdW90OzogJnF1b3Q7JnF1b3Q7LAp9Cg=="}}),e._v(" "),o("p",[e._v("Add the file to your IPFS node:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpcGZzIGFkZCBtZXRhZGF0YS5qc29uCg=="}}),e._v(" "),o("p",[e._v("Which for instance returns:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"YWRkZWQgUW1iY3Q1Y3YxU3hNcEVZQ3BORXZablE1VGtOMXJrN0t5VG1WOTVuYnNyYkxpUiBtZXRhZGF0YS5qc29uCg=="}}),e._v(" "),o("p",[e._v("By running "),o("code",[e._v("add")]),e._v(" you have "),o("a",{attrs:{href:"https://docs.ipfs.tech/how-to/pin-files/#three-kinds-of-pins",target:"_blank",rel:"noopener noreferrer"}},[e._v("pinned the file"),o("OutboundLink")],1),e._v(" to the node, stopping it from being eventually pruned.")]),e._v(" "),o("p",[e._v("The content identifier (CID) of the file is "),o("code",[e._v("Qmbct5cv1SxMpEYCpNEvZnQ5TkN1rk7KyTmV95nbsrbLiR")]),e._v(". This is the CID that you will use to retrieve the file from IPFS.")]),e._v(" "),o("p",[e._v("Verify the content of the file by running:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpcGZzIGNhdCBRbWJjdDVjdjFTeE1wRVlDcE5FdlpuUTVUa04xcms3S3lUbVY5NW5ic3JiTGlSCg=="}}),e._v(" "),o("p",[e._v("At this point, you can start your local IPFS node:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpcGZzIGRlYW1vbgo="}}),e._v(" "),o("p",[e._v("The file becomes available on IPFS. You can easily access it via "),o("code",[e._v("https://ipfs.io/ipfs/<cid>")]),e._v(", in your case "),o("code",[e._v("https://ipfs.io/ipfs/Qmbct5cv1SxMpEYCpNEvZnQ5TkN1rk7KyTmV95nbsrbLiR")]),e._v(".")]),e._v(" "),o("p",[e._v("Note that as soon as you stop the node, it is possible that after a while, the file will not be accessible on the network. This is because only your node has pinned the file, other nodes may delete the file depending of their retention policy.")]),e._v(" "),o("p",[e._v("As you want to store the metadata permanently, without running your IPFS own node (for the scope of this tutorial), you want to pin it to a remote node, using a "),o("a",{attrs:{href:"https://docs.ipfs.tech/how-to/pin-files/#three-kinds-of-pins",target:"_blank",rel:"noopener noreferrer"}},[e._v("pinning service"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"pinning-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pinning-services"}},[e._v("#")]),e._v(" Pinning services")]),e._v(" "),o("p",[e._v("Pinning services are services that pin files on their nodes, making them available on the network, without having to run your own node.")]),e._v(" "),o("p",[e._v("For this tutorial, you will use "),o("a",{attrs:{href:"https://web3.storage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web3.storage"),o("OutboundLink")],1),e._v(", a pinning service provided by "),o("strong",[e._v("Protocol Labs")]),e._v(", the main developers of IPFS. Feel free to use any other pinning service you prefer, such as "),o("a",{attrs:{href:"https://pinata.cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pinata"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://infura.io/product/ipfs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infura"),o("OutboundLink")],1),e._v(", etc. ")]),e._v(" "),o("p",[e._v("First, create an account on "),o("a",{attrs:{href:"https://web3.storage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web3.storage"),o("OutboundLink")],1),e._v(" and get an "),o("a",{attrs:{href:"https://web3.storage/tokens/?create=true",target:"_blank",rel:"noopener noreferrer"}},[e._v("API token"),o("OutboundLink")],1),e._v(". With Web3.storage, you need to request access to the pinning API, or you can upload the file directly from the interface.")]),e._v(" "),o("p",[e._v("Next, add "),o("code",[e._v("web3.storage")]),e._v(" as a remote service:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpcGZzIHBpbiByZW1vdGUgc2VydmljZSBhZGQgd2ViMy5zdG9yYWdlIGh0dHBzOi8vYXBpLndlYjMuc3RvcmFnZS8gJmx0O1lPVVJfQVVUSF9LRVlfSldUJmd0Owo="}}),e._v(" "),o("p",[e._v("Make sure your node can serve the file when the Web3.storage server looks for it:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpcGZzIGRhZW1vbiAmYW1wOwo="}}),e._v(" "),o("p",[e._v("Now you can pin the file to the remote node:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpcGZzIHBpbiByZW1vdGUgYWRkIC0tc2VydmljZT13ZWIzLnN0b3JhZ2UgLS1uYW1lPSZxdW90O3Byb3Bvc2FsLTEtbWV0YWRhdGEuanNvbiZxdW90OyBRbWJjdDVjdjFTeE1wRVlDcE5FdlpuUTVUa04xcms3S3lUbVY5NW5ic3JiTGlSCg=="}}),e._v(" "),o("p",[e._v("Your file is now pinned to the remote node.")]),e._v(" "),o("h2",{attrs:{id:"🎉-congratulations-🎉"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#🎉-congratulations-🎉"}},[e._v("#")]),e._v(" 🎉 Congratulations 🎉")]),e._v(" "),o("p",[e._v("By completing this tutorial, you have learned how to use IPFS for storing files, notably for proposal metadata.")]),e._v(" "),o("p",[e._v("To learn more about IPFS in general, you can check their "),o("a",{attrs:{href:"https://docs.ipfs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),o("OutboundLink")],1),e._v(".\nAdditionally, you can learn more about how to use the "),o("code",[e._v("CID")]),e._v(" in the "),o("RouterLink",{attrs:{to:"/tutorials/8-understand-sdk-modules/3-group.html"}},[e._v("group")]),e._v(" module tutorial.")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);