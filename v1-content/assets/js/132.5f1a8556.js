(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{747:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hermes-relayer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hermes-relayer"}},[e._v("#")]),e._v(" Hermes Relayer")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Before you dive into Go relayers, make sure to:")]),e._v(" "),a("ul",[a("li",[e._v("Install Go.")]),e._v(" "),a("li",[e._v("Install Docker.")]),e._v(" "),a("li",[e._v("Install Rust.")])]),e._v(" "),a("p",[e._v("For all installations, please see the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/setup.html"}},[e._v("setup page")]),e._v(".")],1)]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will learn:")]),e._v(" "),a("ul",[a("li",[e._v("How to get started with the Hermes relayer")]),e._v(" "),a("li",[e._v("Basic Hermes relayer commands")])])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://hermes.informal.systems/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hermes"),a("OutboundLink")],1),e._v(" is a an open-source Rust implementation of a relayer for the Inter-Blockchain Communication Protocol (IBC). Hermes is most widely used in production by relayer operators. It offers great logging and debugging options, but compared to the Go relayer may require some more detailed knowledge of IBC to use it properly.")]),e._v(" "),a("HighlightBox",{attrs:{type:"docs"}},[a("p",[e._v("Installation instructions can be found "),a("a",{attrs:{href:"https://hermes.informal.systems/installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the Hermes documentation from Informal Systems"),a("OutboundLink")],1),e._v(". Check the CLI commands with "),a("code",[e._v("hermes -h")]),e._v(". Alternatively, check out the "),a("a",{attrs:{href:"https://hermes.informal.systems/commands/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("commands reference"),a("OutboundLink")],1),e._v(" on the Hermes website.")])]),e._v(" "),a("p",[e._v("If you type:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgaGVscAo="}}),e._v(" "),a("p",[e._v("You get:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"aGVybWVzIDAuMTQuMCs0NjBlYjBjCkluZm9ybWFsIFN5c3RlbXMgJmx0O2hlbGxvQGluZm9ybWFsLnN5c3RlbXMmZ3Q7CiAgSGVybWVzIGlzIGFuIElCQyBSZWxheWVyIHdyaXR0ZW4gaW4gUnVzdAoKVVNBR0U6CiAgICBoZXJtZXMgW09QVElPTlNdIFtTVUJDT01NQU5EXQoKT1BUSU9OUzoKICAgIC1jLCAtLWNvbmZpZyAmbHQ7Q09ORklHJmd0OyAgICBwYXRoIHRvIGNvbmZpZ3VyYXRpb24gZmlsZQogICAgLWgsIC0taGVscCAgICAgICAgICAgICAgIFByaW50IGhlbHAgaW5mb3JtYXRpb24KICAgIC1qLCAtLWpzb24gICAgICAgICAgICAgICBlbmFibGUgSlNPTiBvdXRwdXQKICAgIC1WLCAtLXZlcnNpb24gICAgICAgICAgICBQcmludCB2ZXJzaW9uIGluZm9ybWF0aW9uCgpTVUJDT01NQU5EUzoKICAgIGNsZWFyICAgICAgICAgICBDbGVhciBvYmplY3RzLCBzdWNoIGFzIG91dHN0YW5kaW5nIHBhY2tldHMgb24gYSBjaGFubmVsCiAgICBjb25maWcgICAgICAgICAgVmFsaWRhdGUgSGVybWVzIGNvbmZpZ3VyYXRpb24gZmlsZQogICAgY3JlYXRlICAgICAgICAgIENyZWF0ZSBvYmplY3RzIChjbGllbnQsIGNvbm5lY3Rpb24sIG9yIGNoYW5uZWwpIG9uIGNoYWlucwogICAgaGVhbHRoLWNoZWNrICAgIFBlcmZvcm1zIGEgaGVhbHRoIGNoZWNrIG9mIGFsbCBjaGFpbnMgaW4gdGhlIHRoZSBjb25maWcKICAgIGhlbHAgICAgICAgICAgICBQcmludCB0aGlzIG1lc3NhZ2Ugb3IgdGhlIGhlbHAgb2YgdGhlIGdpdmVuIHN1YmNvbW1hbmQocykKICAgIGtleXMgICAgICAgICAgICBNYW5hZ2Uga2V5cyBpbiB0aGUgcmVsYXllciBmb3IgZWFjaCBjaGFpbgogICAgbGlzdGVuICAgICAgICAgIExpc3RlbiB0byBhbmQgZGlzcGxheSBJQkMgZXZlbnRzIGVtaXR0ZWQgYnkgYSBjaGFpbgogICAgbWlzYmVoYXZpb3VyICAgIExpc3RlbiB0byBjbGllbnQgdXBkYXRlIElCQyBldmVudHMgYW5kIGhhbmRsZXMgbWlzYmVoYXZpb3VyCiAgICBxdWVyeSAgICAgICAgICAgUXVlcnkgb2JqZWN0cyBmcm9tIHRoZSBjaGFpbgogICAgc3RhcnQgICAgICAgICAgIFN0YXJ0IHRoZSByZWxheWVyIGluIG11bHRpLWNoYWluIG1vZGUKICAgIHR4ICAgICAgICAgICAgICBDcmVhdGUgYW5kIHNlbmQgSUJDIHRyYW5zYWN0aW9ucwogICAgdXBkYXRlICAgICAgICAgIFVwZGF0ZSBvYmplY3RzIChjbGllbnRzKSBvbiBjaGFpbnMKICAgIHVwZ3JhZGUgICAgICAgICBVcGdyYWRlIG9iamVjdHMgKGNsaWVudHMpIGFmdGVyIGNoYWluIHVwZ3JhZGUKICAgIGNvbXBsZXRpb25zICAgICBHZW5lcmF0ZSBhdXRvLWNvbXBsZXRlIHNjcmlwdHMgZm9yIGRpZmZlcmVudCBzaGVsbHMK"}}),e._v(" "),a("p",[e._v("When comparing the list of commands with the requirements from the introduction, recognize the ability to query and submit a transaction (tx), keys management, and a config command. However, no immediate commands are available to add chains and path information. The Hermes relayer does not support fetching data from the "),a("a",{attrs:{href:"https://github.com/cosmos/chain-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("chain-registry"),a("OutboundLink")],1),e._v(" automatically yet, but this is on the roadmap.")]),e._v(" "),a("p",[e._v("For now, you need to manually add the data to the config file "),a("code",[e._v("config.toml")]),e._v(", which is by default stored at "),a("code",[e._v("$HOME/.hermes/config.toml")]),e._v(".")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("The config is not added automatically. The first time you run Hermes, you will have to copy a template and paste it in the aforementioned folder.")])]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"https://hermes.informal.systems/config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("config info"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://hermes.informal.systems/example-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("a sample configuration"),a("OutboundLink")],1),e._v(" for a detailed explanation on all aspects of the config. We will take a closer look at the "),a("code",[e._v("[[chains]]")]),e._v(" section:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W1tjaGFpbnNdXQppZCA9ICdpYmMtMScKcnBjX2FkZHIgPSAnaHR0cDovLzEyNy4wLjAuMToyNjU1NycKZ3JwY19hZGRyID0gJ2h0dHA6Ly8xMjcuMC4wLjE6OTA5MScKd2Vic29ja2V0X2FkZHIgPSAnd3M6Ly8xMjcuMC4wLjE6MjY1NTcvd2Vic29ja2V0JwpycGNfdGltZW91dCA9ICcxMHMnCmFjY291bnRfcHJlZml4ID0gJ2Nvc21vcycKa2V5X25hbWUgPSAndGVzdGtleScKc3RvcmVfcHJlZml4ID0gJ2liYycKZGVmYXVsdF9nYXMgPSAxMDAwMDAKbWF4X2dhcyA9IDQwMDAwMApnYXNfcHJpY2UgPSB7IHByaWNlID0gMC4wMDEsIGRlbm9tID0gJ3N0YWtlJyB9Cmdhc19hZGp1c3RtZW50ID0gMC4xCm1heF9tc2dfbnVtID0gMzAKbWF4X3R4X3NpemUgPSAyMDk3MTUyCmNsb2NrX2RyaWZ0ID0gJzVzJwptYXhfYmxvY2tfdGltZSA9ICczMHMnCnRydXN0aW5nX3BlcmlvZCA9ICcxNGRheXMnCnRydXN0X3RocmVzaG9sZCA9IHsgbnVtZXJhdG9yID0gJzEnLCBkZW5vbWluYXRvciA9ICczJyB9CmFkZHJlc3NfdHlwZSA9IHsgZGVyaXZhdGlvbiA9ICdjb3Ntb3MnIH0K"}}),e._v(" "),a("p",[e._v("Pay particular attention to the "),a("code",[e._v("RPC")]),e._v(", "),a("code",[e._v("gRPC")]),e._v(", and "),a("code",[e._v("websocket")]),e._v(" endpoints and make sure they correspond with the node you are running. Remember that it is recommended to run your own full node instead of using publicly available endpoints when relaying outside of testing purposes. Also make sure the "),a("code",[e._v("key_name")]),e._v(" corresponds to the funded address from which you intend to pay relayer fees. The other parameters can be found in the "),a("a",{attrs:{href:"https://github.com/cosmos/chain-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("chain-registry"),a("OutboundLink")],1),e._v(" for deployed chains, or set by yourself when creating a new chain (either in production or for testing).")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("Hermes does not require path information in the config. By default it will relay over all possible paths over all channels that are active on the configured chains. However, it is possible to change this by filtering. Add the following to the chain config:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W2NoYWlucy5wYWNrZXRfZmlsdGVyXQpwb2xpY3kgPSAnYWxsb3cnCmxpc3QgPSBbCiAgIFsndHJhbnNmZXInLCAnY2hhbm5lbC0xNDEnXSwgIyBvc21vc2lzLTEKXQo="}}),e._v(" "),a("p",[e._v("This filters only the "),a("code",[e._v("transfer")]),e._v(" channel for the Hub to Osmosis in this example.")])],1),e._v(" "),a("h3",{attrs:{id:"hermes-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hermes-start"}},[e._v("#")]),e._v(" Hermes Start")]),e._v(" "),a("p",[e._v("When the chains have been configured, you can start the relayer with the start command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgc3RhcnQK"}}),e._v(" "),a("p",[e._v("This powerful command bundles a lot of functionality where Hermes will be listening or events signaling IBC packet send requests, submitting "),a("code",[e._v("ReceivePacket")]),e._v(" and "),a("code",[e._v("AcknowledgePacket")]),e._v(" messages, and periodically checking if the clients on serviced chains need updating. However, during the tutorials it makes sense to look at the commands in a more granular way to understand what is going on.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("When starting the Hermes relayer, it will assume that the channels you wish to relay over are set up. This will be the case if you want to start relaying on an existing "),a("em",[e._v("canonical")]),e._v(" channel, meaning the offical and agreed-upon channel (for example, used for fungible token transfers).\n"),a("br"),a("br"),e._v("\nThis is perfectly possible and the right approach, given that creating a new channel would make assets relayed over it non-fungible with assets relayed over the canonical channel. Most tutorials will create new channels (and possibly clients and connections) as this provides more insight into the software. However, it is "),a("strong",[e._v("important to note that you only need to create new channels if no canonical channel is present")]),e._v(" (for example, for a newly deployed chain).")])]),e._v(" "),a("h2",{attrs:{id:"e2e-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#e2e-testing"}},[e._v("#")]),e._v(" E2E Testing")]),e._v(" "),a("p",[e._v("The Hermes documentation provides a "),a("a",{attrs:{href:"https://hermes.informal.systems/tutorials/local-chains/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("guided tutorial"),a("OutboundLink")],1),e._v(" to start relaying between two local "),a("code",[e._v("gaia")]),e._v(" chains. Furthermore, demos are available that spin up a Hermes relayer between two "),a("a",{attrs:{href:"https://docs.ignite.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ignite CLI"),a("OutboundLink")],1),e._v(" chains, like "),a("a",{attrs:{href:"https://github.com/informalsystems/hermes-hackatom-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("this one"),a("OutboundLink")],1),e._v(". Be sure to check those out.")]),e._v(" "),a("p",[e._v("Here you will take a somewhat different approach, and set up a flow for end-to-end (E2E) testing where you set up Docker containers for 2 chain instances and a relayer instance. You will refer to the automated testing file and also do some manual testing on the Docker images.")]),e._v(" "),a("h3",{attrs:{id:"installation-building-docker-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-building-docker-images"}},[e._v("#")]),e._v(" Installation & Building Docker Images")]),e._v(" "),a("p",[e._v("Clone the "),a("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hermes repository"),a("OutboundLink")],1),e._v(" in a new folder. It contains a folder for "),a("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs/tree/master/ci",target:"_blank",rel:"noopener noreferrer"}},[e._v("end-to-end (E2E) testing"),a("OutboundLink")],1),e._v(". This helps you deploy two chains and test the relayer. It also contains a Docker Compose file, which spins up two blockchain nodes and a relayer.")]),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("Make sure that you have installed "),a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Compose"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(" before continuing.")])]),e._v(" "),a("p",[e._v("The test needs you to build the Docker images from the Docker files. The Docker images run a Linux on "),a("strong",[e._v("x86_64")]),e._v(". You can build Hermes with "),a("a",{attrs:{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cargo"),a("OutboundLink")],1),e._v(" from the repository for the target "),a("code",[e._v("x86_64-unknown-linux-gnu")]),e._v(", or you can "),a("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("download"),a("OutboundLink")],1),e._v(" a release version into the repository folder (make sure the binary is present in the repository folder).")]),e._v(" "),a("p",[e._v("After you clone the repository and download a release version of Hermes for "),a("strong",[e._v("x86_64")]),e._v(", go into the folder and run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXItY29tcG9zZSAtZiBjaS9kb2NrZXItY29tcG9zZS1nYWlhLWN1cnJlbnQueW1sIGJ1aWxkIHJlbGF5ZXIK"}}),e._v(" "),a("p",[e._v("This builds the relayer docker image. Start the Docker Compose network with two chains and a relayer:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXItY29tcG9zZSAtZiBjaS9kb2NrZXItY29tcG9zZS1nYWlhLWN1cnJlbnQueW1sIHVwIC1kIGliYy0wIGliYy0xIHJlbGF5ZXIK"}}),e._v(" "),a("p",[e._v("Check that everything is working as expected:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyByZWxheWVyIC9iaW4vc2ggLWMgL3JlbGF5ZXIvZTJlLnNoCg=="}}),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs/blob/master/ci/e2e.sh",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("e2e.sh")]),a("OutboundLink")],1),e._v(" uses "),a("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs/blob/master/e2e/run.py",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("run.py")]),a("OutboundLink")],1),e._v(" to automatically run a couple of tests.")]),e._v(" "),a("h3",{attrs:{id:"hermes-cli-manual-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hermes-cli-manual-testing"}},[e._v("#")]),e._v(" Hermes CLI Manual Testing")]),e._v(" "),a("p",[e._v("Go into the relayer container and run a bash:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgcmVsYXllciBiYXNoCg=="}}),e._v(" "),a("p",[e._v("First, check the Hermes version with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgdmVyc2lvbgo="}}),e._v(" "),a("p",[e._v("Which returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"aGVybWVzIDAuMTQuMCs0NjBlYjBjCg=="}}),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("In this section you have to run commands both inside the Docker container and on your local terminal. By default, coding examples will indicate the Docker terminal; a comment will inform you when you have to use the local terminal.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"remember"}},[a("p",[e._v("You can check the CLI commands with "),a("code",[e._v("hermes -h")]),e._v(". The Hermes CLI offers help for each CLI command you can use when trying "),a("code",[e._v("hermes <command> -h")]),e._v(".")])]),e._v(" "),a("p",[e._v("Check the default configuration:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjYXQgc2ltcGxlX2NvbmZpZy50b21sCg=="}}),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("[[chains]]")]),e._v(" section of the "),a("code",[e._v("simple_config.toml")]),e._v(", you can find the configuration for two chains, "),a("strong",[e._v("ibc-0")]),e._v(" and "),a("strong",[e._v("ibc-1")]),e._v(". In it, the chain IDs need to be specified, as well as the RPC, GRPC, and WebSocket addresses.")]),e._v(" "),a("p",[e._v("Do a validation check on the configuration file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIGNvbmZpZyB2YWxpZGF0ZQo="}}),e._v(" "),a("p",[e._v("Next do a health check:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIGhlYWx0aC1jaGVjawo="}}),e._v(" "),a("p",[e._v("You should see that both chains are healthy. The E2E test will create clients, connections, and a channel.")]),e._v(" "),a("p",[e._v("To query the clients for the chain "),a("strong",[e._v("ibc-0")]),e._v(", run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHF1ZXJ5IGNsaWVudHMgaWJjLTAK"}}),e._v(" "),a("p",[e._v("There should be one Tendermint client for the chain "),a("strong",[e._v("ibc-1")]),e._v(".")]),e._v(" "),a("p",[e._v("Query the connections for "),a("strong",[e._v("ibc-0")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHF1ZXJ5IGNvbm5lY3Rpb25zIGliYy0wCg=="}}),e._v(" "),a("p",[e._v("There should be two connections, both established between "),a("strong",[e._v("ibc-0")]),e._v(" and "),a("strong",[e._v("ibc-1")]),e._v(".")]),e._v(" "),a("p",[e._v("Query the channels for "),a("strong",[e._v("ibc-0")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHF1ZXJ5IGNoYW5uZWxzIGliYy0wCg=="}}),e._v(" "),a("p",[e._v("You should see two channels and the port binding transfer. All this is part of the E2E testing. You can redo some steps to better understand the CLI.")]),e._v(" "),a("p",[e._v("Create another connection for the both chains:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIGNyZWF0ZSBjb25uZWN0aW9uIGliYy0wIGliYy0xCg=="}}),e._v(" "),a("p",[e._v("In the output of this command you receive the "),a("code",[e._v("connection_id")]),e._v("s for both chains. Use the "),a("code",[e._v("connection_id")]),e._v(" for the "),a("strong",[e._v("ibc-0")]),e._v(" chain and create a channel:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIGNyZWF0ZSBjaGFubmVsIC0tcG9ydC1hIHRyYW5zZmVyIC0tcG9ydC1iIHRyYW5zZmVyIGliYy0wIGNvbm5lY3Rpb24tMgo="}}),e._v(" "),a("p",[e._v("This repeats the port binding "),a("code",[e._v("transfer")]),e._v(". Check that the channel is created again with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHF1ZXJ5IGNoYW5uZWxzIGliYy0wCg=="}}),e._v(" "),a("p",[e._v("The E2E testing already created some accounts (via "),a("code",[e._v("keys add testkey --output json")]),e._v(") for the tests and added them to the Hermes relayer via:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMga2V5cyBhZGQgaWJjLTAgLWYgdXNlcl9zZWVkX2liYy0wLmpzb24KJCBoZXJtZXMga2V5cyBhZGQgaWJjLTEgLWYgdXNlcl9zZWVkX2liYy0xLmpzb24KJCBoZXJtZXMga2V5cyBhZGQgaWJjLTAgLWYgdXNlcjJfc2VlZF9pYmMtMC5qc29uCiQgaGVybWVzIGtleXMgYWRkIGliYy0xIC1mIHVzZXIyX3NlZWRfaWJjLTEuanNvbgo="}}),e._v(" "),a("p",[e._v("Get the user addresses for the "),a("strong",[e._v("ibc-0")]),e._v(" chain:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIGtleXMgbGlzdCBpYmMtMAo="}}),e._v(" "),a("p",[e._v("Now get the user addresses for the "),a("strong",[e._v("ibc-1")]),e._v(" chain:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIGtleXMgbGlzdCBpYmMtMQo="}}),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("simple_confing.toml")]),e._v(" the default user key is set to "),a("code",[e._v("testkey")]),e._v(", so you do not need to specify a user if you want to sign a transaction with "),a("code",[e._v("testkey")]),e._v(".")]),e._v(" "),a("p",[e._v("Now check the balance of those accounts on the chain "),a("strong",[e._v("ibc-0")]),e._v(". Replace the "),a("code",[e._v("$testkey")]),e._v(" with the addresses you get in your test:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyB1c2UgeW91ciBsb2NhbCB0ZXJtaW5hbAokIGRvY2tlciBleGVjIGliYy0wIGdhaWFkIHF1ZXJ5IGJhbmsgYmFsYW5jZXMgJHRlc3RrZXkK"}}),e._v(" "),a("p",[e._v("Repeat this check for "),a("strong",[e._v("ibc-1")]),e._v(" with the corresponding address.")]),e._v(" "),a("p",[e._v("These accounts keep some "),a("strong",[e._v("samoleans")]),e._v(". You will also see another denom because of the E2E test.")]),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("Please see the "),a("RouterLink",{attrs:{to:"/academy/4-ibc/token-transfer.html"}},[e._v("fungible token transfers")]),e._v(" section for more information on the IBC denom.")],1)]),e._v(" "),a("p",[e._v("Do a transfer and use the channel that was created:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHR4IHJhdyBmdC10cmFuc2ZlciBpYmMtMSBpYmMtMCB0cmFuc2ZlciBjaGFubmVsLTIgMTAwIC0tdGltZW91dC1oZWlnaHQtb2Zmc2V0IDEwMDAK"}}),e._v(" "),a("p",[e._v("In case you do not want to test with the default user, you can specify the sender with a "),a("code",[e._v("-k")]),e._v(" flag and the receiver on the other chain with a "),a("code",[e._v("-r")]),e._v(" flag.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("Usually the Hermes relayer automatically relays packets between the chains if it runs via:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHN0YXJ0Cg=="}}),e._v(" "),a("p",[e._v("In this case, we want to relay the transfer transaction by hand.")])],1),e._v(" "),a("p",[e._v("First, query packet commitments on "),a("strong",[e._v("ibc-0")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHF1ZXJ5IHBhY2tldCBjb21taXRtZW50cyBpYmMtMCB0cmFuc2ZlciBjaGFubmVsLTIK"}}),e._v(" "),a("p",[e._v("You can see that there is one packet.")]),e._v(" "),a("p",[e._v("You can also query for unreceived packets:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHF1ZXJ5IHBhY2tldCB1bnJlY2VpdmVkLXBhY2tldHMgaWJjLTEgdHJhbnNmZXIgY2hhbm5lbC01Cg=="}}),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("You can get the "),a("code",[e._v("connection_id")]),e._v(" and "),a("code",[e._v("channel_id")]),e._v(" for "),a("strong",[e._v("ibc-1")]),e._v(" in the output of the "),a("code",[e._v("hermes create connection")]),e._v(" and "),a("code",[e._v("hermes create channel")]),e._v(" commands.")])]),e._v(" "),a("p",[e._v("If you check the balances again, you should only see a change for "),a("strong",[e._v("ibc-0")]),e._v(". You should see no change in the balance of "),a("code",[e._v("testkey")]),e._v(" on "),a("strong",[e._v("ibc-1")]),e._v(" because the transfer is initiated but it is not relayed yet.")]),e._v(" "),a("p",[e._v("Now submit the "),a("code",[e._v("RecvPacket")]),e._v(" message to "),a("strong",[e._v("ibc-1")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHR4IHJhdyBwYWNrZXQtcmVjdiBpYmMtMSBpYmMtMCB0cmFuc2ZlciBjaGFubmVsLTIK"}}),e._v(" "),a("p",[e._v("Send an acknowledgement to "),a("strong",[e._v("ibc-0")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBoZXJtZXMgLWMgc2ltcGxlX2NvbmZpZy50b21sIHR4IHJhdyBwYWNrZXQtYWNrIGliYy0wIGliYy0xIHRyYW5zZmVyIGNoYW5uZWwtNQo="}}),e._v(" "),a("p",[e._v("Check the balances again. A new denom should appear because of our recent channel. As an exercise, transfer the tokens back to ibc-0.")]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("With this introduction to the Hermes relayer, you are all set for relaying. In the "),a("RouterLink",{attrs:{to:"/academy/4-ibc/ibc-tooling.html"}},[e._v("next section")]),e._v(", you can find an overview of helpful tools for IBC.")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);