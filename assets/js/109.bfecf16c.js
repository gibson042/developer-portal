(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{727:function(e,o,t){"use strict";t.r(o);var n=t(1),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"transport-authentication-and-ordering-layer-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transport-authentication-and-ordering-layer-connections"}},[e._v("#")]),e._v(" Transport, Authentication, and Ordering Layer - Connections")]),e._v(" "),t("HighlightBox",{attrs:{type:"learning"}},[t("p",[e._v("IBC in depth. Discover the IBC protocol in detail:")]),e._v(" "),t("ul",[t("li",[e._v("Learn more about connection negotiation.")]),e._v(" "),t("li",[e._v("Explore connection states.")]),e._v(" "),t("li",[e._v("How IBC repels hostile connection attempts.")])])]),e._v(" "),t("p",[e._v("Now that you covered the introduction and have a better understanding of how different Inter-Blockchain Communication Protocol (IBC) components and interchain standards (ICS) relate to each other, take a deep dive into IBC/TAO (transport, authentication, and ordering) and the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC module"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" Connections")]),e._v(" "),t("p",[e._v("If you want to connect two blockchains with IBC, you will need to establish an IBC "),t("strong",[e._v("connection")]),e._v(". Connections, established by a four-way handshake, are responsible for:")]),e._v(" "),t("ol",[t("li",[e._v("Establishing the identity of the counterparty chain.")]),e._v(" "),t("li",[e._v("Preventing a malicious entity from forging incorrect information by pretending to be the counterparty chain. IBC connections are established by on-chain ledger code and therefore do not require interaction with off-chain (trusted) third-party processes.")])]),e._v(" "),t("HighlightBox",{attrs:{type:"docs"}},[t("p",[e._v("The connection semantics are described in "),t("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-003-connection-semantics",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-3"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("In the IBC stack, connections are built on top of clients, so technically there could be multiple connections for each client if the client is interacting with multiple versions of the IBC protocol. For now, the setup should connote one connection for each client.")]),e._v(" "),t("HighlightBox",{attrs:{type:"note"}},[t("h3",{attrs:{id:"version-negotiation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-negotiation"}},[e._v("#")]),e._v(" Version negotiation")]),e._v(" "),t("p",[e._v("Note that versioning here refers to the IBC protocol spec and not the ibc-go module. A backwards incompatible update is currently not planned.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmVyc2lvbiBkZWZpbmVzIHRoZSB2ZXJzaW9uaW5nIHNjaGVtZSB1c2VkIHRvIG5lZ290aWF0ZSB0aGUgSUJDIHZlcmlzb24gaW4KLy8gdGhlIGNvbm5lY3Rpb24gaGFuZHNoYWtlLgp0eXBlIFZlcnNpb24gc3RydWN0IHsKICAgIC8vIHVuaXF1ZSB2ZXJzaW9uIGlkZW50aWZpZXIKICAgIElkZW50aWZpZXIgc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywxLG9wdCxuYW1lPWlkZW50aWZpZXIscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7aWRlbnRpZmllcixvbWl0ZW1wdHkmcXVvdDtgCiAgICAvLyBsaXN0IG9mIGZlYXR1cmVzIGNvbXBhdGlibGUgd2l0aCB0aGUgc3BlY2lmaWVkIGlkZW50aWZpZXIKICAgIEZlYXR1cmVzIFtdc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywyLHJlcCxuYW1lPWZlYXR1cmVzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2ZlYXR1cmVzLG9taXRlbXB0eSZxdW90O2AKfQo="}}),e._v(" "),t("p",[e._v("Protocol versioning is important to establish, as different protocol versions may not be compatible, for example due to proofs being stored on a different path. There are three types of protocol version negotiation:")]),e._v(" "),t("ol",[t("li",[t("em",[e._v("Default, no selection")]),e._v(": only one protocol version is supported. This is default to propose.")]),e._v(" "),t("li",[t("em",[e._v("With selection")]),e._v(": two protocol versions can be proposed, such that the chain initiating "),t("code",[e._v("OpenInit")]),e._v(" or "),t("code",[e._v("OpenTry")]),e._v(" has a choice of which version to go with.")]),e._v(" "),t("li",[t("em",[e._v("Impossible communication")]),e._v(": a backwards incompatible IBC protocol version. For example, if an IBC module changes where it stores its proofs (proof paths), errors result. There are no plans to upgrade to a backwards incompatible IBC protocol version.")])])],1),e._v(" "),t("p",[e._v("As discussed previously, the opening handshake protocol allows each chain to verify the identifier used to reference the connection on the other chain, enabling modules on each chain to reason about the reference of the other chain.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/3-ibc/images/connectionstate.png"}})],1),e._v(" "),t("p",[e._v("With regards to the connection on the other side, the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.1.0/proto/ibc/core/connection/v1/connection.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("connection protobufs"),t("OutboundLink")],1),e._v(" contains the "),t("code",[e._v("Counterparty")]),e._v(" definition:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ291bnRlcnBhcnR5IGRlZmluZXMgdGhlIGNvdW50ZXJwYXJ0eSBjaGFpbiBhc3NvY2lhdGVkIHdpdGggYSBjb25uZWN0aW9uIGVuZC4KbWVzc2FnZSBDb3VudGVycGFydHkgewogICAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICAgIC8vIGlkZW50aWZpZXMgdGhlIGNsaWVudCBvbiB0aGUgY291bnRlcnBhcnR5IGNoYWluIGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuCiAgICAvLyBjb25uZWN0aW9uLgogICAgc3RyaW5nIGNsaWVudF9pZCA9IDEgWyhnb2dvcHJvdG8ubW9yZXRhZ3MpID0gJnF1b3Q7eWFtbDpcJnF1b3Q7Y2xpZW50X2lkXCZxdW90OyZxdW90O107CiAgICAvLyBpZGVudGlmaWVzIHRoZSBjb25uZWN0aW9uIGVuZCBvbiB0aGUgY291bnRlcnBhcnR5IGNoYWluIGFzc29jaWF0ZWQgd2l0aCBhCiAgICAvLyBnaXZlbiBjb25uZWN0aW9uLgogICAgc3RyaW5nIGNvbm5lY3Rpb25faWQgPSAyIFsoZ29nb3Byb3RvLm1vcmV0YWdzKSA9ICZxdW90O3lhbWw6XCZxdW90O2Nvbm5lY3Rpb25faWRcJnF1b3Q7JnF1b3Q7XTsKICAgIC8vIGNvbW1pdG1lbnQgbWVya2xlIHByZWZpeCBvZiB0aGUgY291bnRlcnBhcnR5IGNoYWluLgogICAgaWJjLmNvcmUuY29tbWl0bWVudC52MS5NZXJrbGVQcmVmaXggcHJlZml4ID0gMyBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0K"}}),e._v(" "),t("p",[e._v("In this definition, "),t("code",[e._v("connection-id")]),e._v(" is used as a key to map and retrieve connections associated with a certain client from the store.")]),e._v(" "),t("p",[t("code",[e._v("prefix")]),e._v(" is used by the clients to construct merkle prefix paths which are then used to verify proofs.")]),e._v(" "),t("h2",{attrs:{id:"connection-handshakes-and-states"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connection-handshakes-and-states"}},[e._v("#")]),e._v(" Connection handshakes and states")]),e._v(" "),t("p",[e._v("Establishing an IBC connection (for example, between chain A and chain B) requires four handshakes:")]),e._v(" "),t("ol",[t("li",[e._v("OpenInit")]),e._v(" "),t("li",[e._v("OpenTry")]),e._v(" "),t("li",[e._v("OpenAck")]),e._v(" "),t("li",[e._v("OpenConfirm")])]),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[e._v("Colin Axnér of the Interchain Foundation gives an overview of how IBC Connections work (ICS-03), along with a code walkthrough, in the context of the Inter-Blockchain Communications Protocol (IBC).")]),e._v(" "),t("YoutubePlayer",{attrs:{videoId:"E3ZvqdY2tL8"}})],1),e._v(" "),t("p",[e._v("A high level overview of a successful four-way handshake is as follows:")]),e._v(" "),t("h3",{attrs:{id:"handshake-step-1-connopeninit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshake-step-1-connopeninit"}},[e._v("#")]),e._v(" Handshake step 1 - "),t("code",[e._v("ConnOpenInit")])]),e._v(" "),t("p",[t("code",[e._v("OpenInit")]),e._v(" initializes any connection which may occur, while still necessitating agreement from both sides. It is like an identifying announcement from the IBC module on chain A which is submitted by a relayer. The relayer should also submit a "),t("code",[e._v("MsgUpdateClient")]),e._v(" with chain A as the source chain before this handshake. "),t("code",[e._v("MsgUpdateClient")]),e._v(" updates the client on the initializing chain A with the latest consensus state of chain B.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/3-ibc/images/open_init.png"}})],1),e._v(" "),t("p",[e._v("The initiation of this handshake from chain A updates its connection state to "),t("code",[e._v("INIT")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("OpenInit")]),e._v(" proposes a protocol version to be used for the IBC connection. A relayer-submitted "),t("code",[e._v("OpenInit")]),e._v(" which contains a protocol version that is not supported by chain A will be expected to fail.")]),e._v(" "),t("p",[e._v("The reference implementation for the connection handshake is found in the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.1.0/modules/core/03-connection/keeper/handshake.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC module repository"),t("OutboundLink")],1),e._v(". Examine "),t("code",[e._v("ConnOpenInit")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIENvbm5PcGVuSW5pdCgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIGNsaWVudElEIHN0cmluZywKICAgIGNvdW50ZXJwYXJ0eSB0eXBlcy5Db3VudGVycGFydHksIC8vIGNvdW50ZXJwYXJ0eVByZWZpeCwgY291bnRlcnBhcnR5Q2xpZW50SWRlbnRpZmllcgogICAgdmVyc2lvbiAqdHlwZXMuVmVyc2lvbiwKICAgIGRlbGF5UGVyaW9kIHVpbnQ2NCwKKSAoc3RyaW5nLCBlcnJvcikgewogICAgLi4uIC8vdmVyc2lvbiBuZWdvdGlhdGlvbiBsb2dpYwoKICAgIC8vIGNvbm5lY3Rpb24gZGVmaW5lcyBjaGFpbiBBJ3MgQ29ubmVjdGlvbkVuZAogICAgY29ubmVjdGlvbklEIDo9IGsuR2VuZXJhdGVDb25uZWN0aW9uSWRlbnRpZmllcihjdHgpCiAgICBjb25uZWN0aW9uIDo9IHR5cGVzLk5ld0Nvbm5lY3Rpb25FbmQodHlwZXMuSU5JVCwgY2xpZW50SUQsIGNvdW50ZXJwYXJ0eSwgdHlwZXMuRXhwb3J0ZWRWZXJzaW9uc1RvUHJvdG8odmVyc2lvbnMpLCBkZWxheVBlcmlvZCkKICAgIGsuU2V0Q29ubmVjdGlvbihjdHgsIGNvbm5lY3Rpb25JRCwgY29ubmVjdGlvbikKCiAgICBpZiBlcnIgOj0gay5hZGRDb25uZWN0aW9uVG9DbGllbnQoY3R4LCBjbGllbnRJRCwgY29ubmVjdGlvbklEKTsgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuICZxdW90OyZxdW90OywgZXJyCiAgICB9CgogICAgay5Mb2dnZXIoY3R4KS5JbmZvKCZxdW90O2Nvbm5lY3Rpb24gc3RhdGUgdXBkYXRlZCZxdW90OywgJnF1b3Q7Y29ubmVjdGlvbi1pZCZxdW90OywgY29ubmVjdGlvbklELCAmcXVvdDtwcmV2aW91cy1zdGF0ZSZxdW90OywgJnF1b3Q7Tk9ORSZxdW90OywgJnF1b3Q7bmV3LXN0YXRlJnF1b3Q7LCAmcXVvdDtJTklUJnF1b3Q7KQoKICAgIGRlZmVyIGZ1bmMoKSB7CiAgICAgICAgdGVsZW1ldHJ5LkluY3JDb3VudGVyKDEsICZxdW90O2liYyZxdW90OywgJnF1b3Q7Y29ubmVjdGlvbiZxdW90OywgJnF1b3Q7b3Blbi1pbml0JnF1b3Q7KQogICAgICAgIH0oKQoKICAgIEVtaXRDb25uZWN0aW9uT3BlbkluaXRFdmVudChjdHgsIGNvbm5lY3Rpb25JRCwgY2xpZW50SUQsIGNvdW50ZXJwYXJ0eSkKCiAgICByZXR1cm4gY29ubmVjdGlvbklELCBuaWwKfQoK"}}),e._v(" "),t("p",[e._v("This function creates a unique "),t("code",[e._v("connectionID")]),e._v(". It adds the connection to a list of connections associated with a specific client.")]),e._v(" "),t("p",[e._v("It creates a new "),t("code",[e._v("ConnectionEnd")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly9AIGZ1bmMgKGsgS2VlcGVyKSBDb25uT3BlbkluaXQKLi4uCmNvbm5lY3Rpb24gOj0gdHlwZXMuTmV3Q29ubmVjdGlvbkVuZCh0eXBlcy5JTklULCBjbGllbnRJRCwgY291bnRlcnBhcnR5LCB0eXBlcy5FeHBvcnRlZFZlcnNpb25zVG9Qcm90byh2ZXJzaW9ucyksIGRlbGF5UGVyaW9kKQprLlNldENvbm5lY3Rpb24oY3R4LCBjb25uZWN0aW9uSUQsIGNvbm5lY3Rpb24pCi4uLgo="}}),e._v(" "),t("p",[e._v("With the following proto definition:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ci8vIENvbm5lY3Rpb25FbmQgZGVmaW5lcyBhIHN0YXRlZnVsIG9iamVjdCBvbiBhIGNoYWluIGNvbm5lY3RlZCB0byBhbm90aGVyIHNlcGFyYXRlIG9uZS4KLy8gTk9URTogdGhlcmUgbXVzdCBvbmx5IGJlIDIgZGVmaW5lZCBDb25uZWN0aW9uRW5kcyB0byBlc3RhYmxpc2gKLy8gYSBjb25uZWN0aW9uIGJldHdlZW4gdHdvIGNoYWlucywgc28gdGhlIGNvbm5lY3Rpb25zIGFyZSBtYXBwZWQgYW5kIHN0b3JlZCBhcyBgQ29ubmVjdGlvbkVuZGAgb24gdGhlIHJlc3BlY3RpdmUgY2hhaW5zLgptZXNzYWdlIENvbm5lY3Rpb25FbmQgewogICAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwogICAgLy8gY2xpZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbm5lY3Rpb24uCiAgICBzdHJpbmcgY2xpZW50X2lkID0gMSBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtjbGllbnRfaWRcJnF1b3Q7JnF1b3Q7XTsKICAgIC8vIElCQyB2ZXJzaW9uIHdoaWNoIGNhbiBiZSB1dGlsaXNlZCB0byBkZXRlcm1pbmUgZW5jb2RpbmdzIG9yIHByb3RvY29scyBmb3IKICAgIC8vIGNoYW5uZWxzIG9yIHBhY2tldHMgdXRpbGlzaW5nIHRoaXMgY29ubmVjdGlvbi4KICAgIHJlcGVhdGVkIFZlcnNpb24gdmVyc2lvbnMgPSAyOwogICAgLy8gY3VycmVudCBzdGF0ZSBvZiB0aGUgY29ubmVjdGlvbiBlbmQuCiAgICBTdGF0ZSBzdGF0ZSA9IDM7CiAgICAvLyBjb3VudGVycGFydHkgY2hhaW4gYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29ubmVjdGlvbi4KICAgIENvdW50ZXJwYXJ0eSBjb3VudGVycGFydHkgPSA0IFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKICAgIC8vIGRlbGF5IHBlcmlvZCB0aGF0IG11c3QgcGFzcyBiZWZvcmUgYSBjb25zZW5zdXMgc3RhdGUgY2FuIGJlIHVzZWQgZm9yCiAgICAvLyBwYWNrZXQtdmVyaWZpY2F0aW9uIE5PVEU6IGRlbGF5IHBlcmlvZCBsb2dpYyBpcyBvbmx5IGltcGxlbWVudGVkIGJ5IHNvbWUKICAgIC8vIGNsaWVudHMuCiAgICB1aW50NjQgZGVsYXlfcGVyaW9kID0gNSBbKGdvZ29wcm90by5tb3JldGFncykgPSAmcXVvdDt5YW1sOlwmcXVvdDtkZWxheV9wZXJpb2RcJnF1b3Q7JnF1b3Q7XTsKfQo="}}),e._v(" "),t("p",[t("code",[e._v("ConnOpenInit")]),e._v(" is triggered by the "),t("strong",[e._v("relayer")]),e._v(", which constructs the message and sends it to the SDK that uses the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.1.0/modules/core/keeper/msg_server.go",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("msg_server.go")]),t("OutboundLink")],1),e._v(" previously seen to call "),t("code",[e._v("ConnOpenInit")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29ubmVjdGlvbk9wZW5Jbml0IGRlZmluZXMgYSBycGMgaGFuZGxlciBtZXRob2QgZm9yIE1zZ0Nvbm5lY3Rpb25PcGVuSW5pdC4KZnVuYyAoayBLZWVwZXIpIENvbm5lY3Rpb25PcGVuSW5pdChnb0N0eCBjb250ZXh0LkNvbnRleHQsIG1zZyAqY29ubmVjdGlvbnR5cGVzLk1zZ0Nvbm5lY3Rpb25PcGVuSW5pdCkgKCpjb25uZWN0aW9udHlwZXMuTXNnQ29ubmVjdGlvbk9wZW5Jbml0UmVzcG9uc2UsIGVycm9yKSB7CiAgICBjdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoZ29DdHgpCgogICAgaWYgXywgZXJyIDo9IGsuQ29ubmVjdGlvbktlZXBlci5Db25uT3BlbkluaXQoY3R4LCBtc2cuQ2xpZW50SWQsIG1zZy5Db3VudGVycGFydHksIG1zZy5WZXJzaW9uLCBtc2cuRGVsYXlQZXJpb2QpOyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChlcnIsICZxdW90O2Nvbm5lY3Rpb24gaGFuZHNoYWtlIG9wZW4gaW5pdCBmYWlsZWQmcXVvdDspCiAgICB9CgogICAgcmV0dXJuICZhbXA7Y29ubmVjdGlvbnR5cGVzLk1zZ0Nvbm5lY3Rpb25PcGVuSW5pdFJlc3BvbnNle30sIG5pbAp9Cg=="}}),e._v(" "),t("h3",{attrs:{id:"handshake-step-2-connopentry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshake-step-2-connopentry"}},[e._v("#")]),e._v(" Handshake step 2 - "),t("code",[e._v("ConnOpenTry")])]),e._v(" "),t("p",[t("code",[e._v("OpenInit")]),e._v(" is followed by an "),t("code",[e._v("OpenTry")]),e._v(" response, in which chain B verifies the identity of chain A according to information that chain B has about chain A in its light client (the algorithm and the last snapshot of the consensus state containing the root hash of the latest height as well as the next validator set). It also responds to some of the information about its own identity in the "),t("code",[e._v("OpenInit")]),e._v(" announcement from chain A.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/3-ibc/images/open_try.png"}})],1),e._v(" "),t("p",[e._v("The purpose of this step of the handshake is double verification: not only for chain B to verify that chain A is the expected counterparty identity, but also to verify that the counterparty has accurate information about chain B's identity. The relayer also submits two "),t("code",[e._v("MsgUpdateClient")]),e._v("s with chain A and chain B as source chains before this handshake. These update the light clients of both chain A and chain B in order to make sure that the state verifications in this step are successful.")]),e._v(" "),t("p",[e._v("The initiation of this handshake from chain B updates its connection state to "),t("code",[e._v("TRYOPEN")]),e._v(".")]),e._v(" "),t("p",[e._v("With regards to IBC protocol versioning, "),t("code",[e._v("OpenTry")]),e._v(" either accepts the protocol version which has been proposed in "),t("code",[e._v("OpenInit")]),e._v(" or proposes another protocol version from the versions available to chain A to be used for the IBC connection. A relayer-submitted "),t("code",[e._v("OpenTry")]),e._v(" which contains an unsupported protocol version will be expected to fail.")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.1.0/modules/core/03-connection/keeper/handshake.go#L61-L147",target:"_blank",rel:"noopener noreferrer"}},[e._v("implementation of OpenTry"),t("OutboundLink")],1),e._v(" is as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29ubk9wZW5UcnkgcmVsYXlzIG5vdGljZSBvZiBhIGNvbm5lY3Rpb24gYXR0ZW1wdCBvbiBjaGFpbiBBIHRvIGNoYWluIEIgKHRoaXMKLy8gY29kZSBpcyBleGVjdXRlZCBvbiBjaGFpbiBCKS4KLy8KLy8gTk9URToKLy8gIC0gSGVyZSBjaGFpbiBBIGFjdHMgYXMgdGhlIGNvdW50ZXJwYXJ0eQovLyAgLSBJZGVudGlmaWVycyBhcmUgY2hlY2tlZCBvbiBtc2cgdmFsaWRhdGlvbgpmdW5jIChrIEtlZXBlcikgQ29ubk9wZW5UcnkoCiAgICBjdHggc2RrLkNvbnRleHQsCiAgICBjb3VudGVycGFydHkgdHlwZXMuQ291bnRlcnBhcnR5LCAvLyBjb3VudGVycGFydHlDb25uZWN0aW9uSWRlbnRpZmllciwgY291bnRlcnBhcnR5UHJlZml4IGFuZCBjb3VudGVycGFydHlDbGllbnRJZGVudGlmaWVyCiAgICBkZWxheVBlcmlvZCB1aW50NjQsCiAgICBjbGllbnRJRCBzdHJpbmcsIC8vIGNsaWVudElEIG9mIGNoYWluQQogICAgY2xpZW50U3RhdGUgZXhwb3J0ZWQuQ2xpZW50U3RhdGUsIC8vIGNsaWVudFN0YXRlIHRoYXQgY2hhaW5BIGhhcyBmb3IgY2hhaW5CCiAgICBjb3VudGVycGFydHlWZXJzaW9ucyBbXWV4cG9ydGVkLlZlcnNpb24sIC8vIHN1cHBvcnRlZCB2ZXJzaW9ucyBvZiBjaGFpbiBBCiAgICBwcm9vZkluaXQgW11ieXRlLCAvLyBwcm9vZiB0aGF0IGNoYWluQSBzdG9yZWQgY29ubmVjdGlvbkVuZCBpbiBzdGF0ZSAob24gQ29ubk9wZW5Jbml0KQogICAgcHJvb2ZDbGllbnQgW11ieXRlLCAvLyBwcm9vZiB0aGF0IGNoYWluQSBzdG9yZWQgYSBsaWdodCBjbGllbnQgb2YgY2hhaW5CCiAgICBwcm9vZkNvbnNlbnN1cyBbXWJ5dGUsIC8vIHByb29mIHRoYXQgY2hhaW5BIHN0b3JlZCBjaGFpbkIncyBjb25zZW5zdXMgc3RhdGUgYXQgY29uc2Vuc3VzIGhlaWdodAogICAgcHJvb2ZIZWlnaHQgZXhwb3J0ZWQuSGVpZ2h0LCAvLyBoZWlnaHQgYXQgd2hpY2ggcmVsYXllciBjb25zdHJ1Y3RzIHByb29mIG9mIEEgc3RvcmluZyBjb25uZWN0aW9uRW5kIGluIHN0YXRlCiAgICBjb25zZW5zdXNIZWlnaHQgZXhwb3J0ZWQuSGVpZ2h0LCAvLyBsYXRlc3QgaGVpZ2h0IG9mIGNoYWluIEIgd2hpY2ggY2hhaW4gQSBoYXMgc3RvcmVkIGluIGl0cyBjaGFpbiBCIGNsaWVudAopIC4uLgo="}}),e._v(" "),t("h2",{attrs:{id:"handshake-step-3-connopenack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshake-step-3-connopenack"}},[e._v("#")]),e._v(" Handshake step 3 - "),t("code",[e._v("ConnOpenAck")])]),e._v(" "),t("p",[t("code",[e._v("OpenAck")]),e._v(" is very similar to the functionality of "),t("code",[e._v("OpenInit")]),e._v(", except that the information verification now occurs for chain A. As in "),t("code",[e._v("OpenTry")]),e._v(", the relayer also submits two "),t("code",[e._v("MsgUpdateClient")]),e._v("s with chain A and chain B as source chains before this handshake. These update the light clients of both chain A and chain B, in order to make sure that the state verifications in this step are successful.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/3-ibc/images/open_ack.png"}})],1),e._v(" "),t("p",[e._v("The initiation of this handshake from chain A updates its connection state to "),t("code",[e._v("OPEN")]),e._v(". It is important to note that the counterparty chain "),t("em",[e._v("must")]),e._v(" have a "),t("code",[e._v("TRYOPEN")]),e._v(" connection state in order for the handshake and connection state update to be successful.")]),e._v(" "),t("p",[e._v("With regards to version negotiation, "),t("code",[e._v("OpenAck")]),e._v(" must confirm the protocol version which has been proposed in "),t("code",[e._v("OpenTry")]),e._v(". It ends the connection handshake process if the version is unwanted or unsupported.")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.1.0/modules/core/03-connection/keeper/handshake.go#L154-L247",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("OpenAck")]),e._v(" code"),t("OutboundLink")],1),e._v(" is very similar to "),t("code",[e._v("OpenTry")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIENvbm5PcGVuQWNrKAogICAgY3R4IHNkay5Db250ZXh0LAogICAgY29ubmVjdGlvbklEIHN0cmluZywKICAgIGNsaWVudFN0YXRlIGV4cG9ydGVkLkNsaWVudFN0YXRlLCAvLyBjbGllbnQgc3RhdGUgZm9yIGNoYWluIEEgb24gY2hhaW4gQgogICAgdmVyc2lvbiAqdHlwZXMuVmVyc2lvbiwgLy8gdmVyc2lvbiB0aGF0IENoYWluIEIgY2hvc2UgaW4gQ29ubk9wZW5UcnkKICAgIGNvdW50ZXJwYXJ0eUNvbm5lY3Rpb25JRCBzdHJpbmcsCiAgICBwcm9vZlRyeSBbXWJ5dGUsIC8vIHByb29mIHRoYXQgY29ubmVjdGlvbkVuZCB3YXMgYWRkZWQgdG8gQ2hhaW4gQiBzdGF0ZSBpbiBDb25uT3BlblRyeQogICAgcHJvb2ZDbGllbnQgW11ieXRlLCAvLyBwcm9vZiBvZiBjbGllbnQgc3RhdGUgb24gY2hhaW4gQiBmb3IgY2hhaW4gQQogICAgcHJvb2ZDb25zZW5zdXMgW11ieXRlLCAvLyBwcm9vZiB0aGF0IGNoYWluIEIgaGFzIHN0b3JlZCBDb25zZW5zdXNTdGF0ZSBvZiBjaGFpbiBBIG9uIGl0cyBjbGllbnQKICAgIHByb29mSGVpZ2h0IGV4cG9ydGVkLkhlaWdodCwgLy8gaGVpZ2h0IHRoYXQgcmVsYXllciBjb25zdHJ1Y3RlZCBwcm9vZlRyeQogICAgY29uc2Vuc3VzSGVpZ2h0IGV4cG9ydGVkLkhlaWdodCwgLy8gbGF0ZXN0IGhlaWdodCBvZiBjaGFpbiBBIHRoYXQgY2hhaW4gQiBoYXMgc3RvcmVkIG9uIGl0cyBjaGFpbiBBIGNsaWVudAopIC4uLgo="}}),e._v(" "),t("p",[e._v("Both functions do the same checks, except that "),t("code",[e._v("OpenTry")]),e._v(" takes "),t("code",[e._v("proofInit")]),e._v(" as a parameter, and "),t("code",[e._v("OpenAck")]),e._v(" takes "),t("code",[e._v("proofTry")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQCBmdW5jIChrIEtlZXBlcikgQ29ubk9wZW5BY2sKCi8vIFRoaXMgZnVuY3Rpb24gdmVyaWZpZXMgdGhhdCB0aGUgc25hcHNob3Qgd2UgaGF2ZSBvZiB0aGUgY291bnRlci1wYXJ0eSBjaGFpbiBsb29rcyBsaWtlIHRoZSBjb3VudGVyLXBhcnR5IGNoYWluLCB2ZXJpZmllcyB0aGUgbGlnaHQgY2xpZW50IHdlIGhhdmUgb2YgdGhlIGNvdW50ZXItcGFydHkgY2hhaW4KLy8gQ2hlY2sgdGhhdCBDaGFpbiBBIGNvbW1pdHRlZCBleHBlY3RlZENvbm5lY3Rpb25FbmQgdG8gaXRzIHN0YXRlCmlmIGVyciA6PSBrLlZlcmlmeUNvbm5lY3Rpb25TdGF0ZSgKICAgIGN0eCwgY29ubmVjdGlvbiwgcHJvb2ZIZWlnaHQsIHByb29mVHJ5LCBjb3VudGVycGFydHkuQ29ubmVjdGlvbklkLAogICAgZXhwZWN0ZWRDb25uZWN0aW9uLAopOyBlcnIgIT0gbmlsIHsKICAgIHJldHVybiAmcXVvdDsmcXVvdDssIGVycgp9CgovLyBUaGlzIGZ1bmN0aW9uIHZlcmlmaWVzIHRoYXQgdGhlIHNuYXBzaG90IHRoZSBjb3VudGVyLXBhcnR5IGNoYWluIGhhcyBvZiB1cyBsb29rcyBsaWtlIHVzLCB2ZXJpZmllcyBvdXIgbGlnaHQgY2xpZW50IG9uIHRoZSBjb3VudGVyLXBhcnR5IGNoYWluCi8vIENoZWNrIHRoYXQgQ2hhaW4gQSBzdG9yZWQgdGhlIGNsaWVudFN0YXRlIHByb3ZpZGVkIGluIHRoZSBtc2cKaWYgZXJyIDo9IGsuVmVyaWZ5Q2xpZW50U3RhdGUoY3R4LCBjb25uZWN0aW9uLCBwcm9vZkhlaWdodCwgcHJvb2ZDbGllbnQsIGNsaWVudFN0YXRlKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gJnF1b3Q7JnF1b3Q7LCBlcnIKfQoKLy8gVGhpcyBmdW5jdGlvbiB2ZXJpZmllcyB0aGF0IHRoZSBzbmFwc2hvdCB0aGUgY291bnRlci1wYXJ0eSBjaGFpbiBoYXMgb2YgdXMgbG9va3MgbGlrZSB1cywgdmVyaWZpZXMgb3VyIGxpZ2h0IGNsaWVudCBvbiB0aGUgY291bnRlci1wYXJ0eSBjaGFpbgovLyBDaGVjayB0aGF0IENoYWluIEEgc3RvcmVkIHRoZSBjb3JyZWN0IENvbnNlbnN1c1N0YXRlIG9mIGNoYWluIEIgYXQgdGhlIGdpdmVuIGNvbnNlbnN1c0hlaWdodAppZiBlcnIgOj0gay5WZXJpZnlDbGllbnRDb25zZW5zdXNTdGF0ZSgKICAgIGN0eCwgY29ubmVjdGlvbiwgcHJvb2ZIZWlnaHQsIGNvbnNlbnN1c0hlaWdodCwgcHJvb2ZDb25zZW5zdXMsIGV4cGVjdGVkQ29uc2Vuc3VzU3RhdGUsCik7IGVyciAhPSBuaWwgewogICAgcmV0dXJuICZxdW90OyZxdW90OywgZXJyCn0K"}}),e._v(" "),t("p",[e._v("Therefore, each chain verifies the "),t("code",[e._v("ConnectionState")]),e._v(", the "),t("code",[e._v("ClientState")]),e._v(", and the "),t("code",[e._v("ConsensusState")]),e._v(" of the other chain. Note that after this step the connection state on chain A updates from "),t("code",[e._v("INIT")]),e._v(" to "),t("code",[e._v("OPEN")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"handshake-step-4-connopenconfirm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handshake-step-4-connopenconfirm"}},[e._v("#")]),e._v(" Handshake step 4 - "),t("code",[e._v("ConnOpenConfirm")])]),e._v(" "),t("p",[t("code",[e._v("OpenConfirm")]),e._v(" is the final handshake, in which chain B confirms that both self-identification and counterparty identification were successful.")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/academy/3-ibc/images/open_confirm.png"}})],1),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v5.1.0/modules/core/03-connection/keeper/handshake.go#L253-L297",target:"_blank",rel:"noopener noreferrer"}},[e._v("conclusion of this handshake"),t("OutboundLink")],1),e._v(" results in the successful establishing of an IBC connection:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIENvbm5PcGVuQ29uZmlybSgKICAgIGN0eCBzZGsuQ29udGV4dCwKICAgIGNvbm5lY3Rpb25JRCBzdHJpbmcsCiAgICBwcm9vZkFjayBbXWJ5dGUsIC8vIHByb29mIHRoYXQgY29ubmVjdGlvbiBvcGVuZWQgb24gQ2hhaW4gQSBkdXJpbmcgQ29ubk9wZW5BY2sKICAgIHByb29mSGVpZ2h0IGV4cG9ydGVkLkhlaWdodCwgLy8gaGVpZ2h0IHRoYXQgcmVsYXllciBjb25zdHJ1Y3RlZCBwcm9vZkFjawopCg=="}}),e._v(" "),t("p",[e._v("The initiation of this handshake from chain B updates its connection state from "),t("code",[e._v("TRYOPEN")]),e._v(" to "),t("code",[e._v("OPEN")]),e._v(". The counterparty chain "),t("em",[e._v("must")]),e._v(" have an "),t("code",[e._v("OPEN")]),e._v(" connection state in order for the handshake and connection state update to be successful.")]),e._v(" "),t("HighlightBox",{attrs:{type:"remember"}},[t("p",[e._v("The successful four-way handshake described establishes an IBC connection between the two chains.")])]),e._v(" "),t("p",[e._v("Now consider two edge circumstances: simultaneous attempts by the chains to perform the same handshake, and attempts by an imposter to interfere.")]),e._v(" "),t("h3",{attrs:{id:"crossing-hellos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crossing-hellos"}},[e._v("#")]),e._v(" Crossing hellos")]),e._v(" "),t("p",[e._v('"Crossing hellos" refers to when both chains attempt the same handshake step at the same time.')]),e._v(" "),t("HighlightBox",{attrs:{type:"warning"}},[t("p",[e._v("While still discussed in the video earlier, crossing hellos have been removed from ibc-go v4 onward, as referenced in "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1672",target:"_blank",rel:"noopener noreferrer"}},[e._v("this PR"),t("OutboundLink")],1),e._v(". The "),t("code",[e._v("PreviousConnectionId")]),e._v(" in "),t("code",[e._v("MsgConnectionOpenTry")]),e._v(" has been deprecated.")])]),e._v(" "),t("h3",{attrs:{id:"an-imposter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-imposter"}},[e._v("#")]),e._v(" An imposter")]),e._v(" "),t("p",[e._v("What if an imposter tried to open a connection pretending to be another chain?")]),e._v(" "),t("p",[e._v("In fact this is not an issue. Any attempted "),t("code",[e._v("OpenInit")]),e._v(" from an imposter will fail on "),t("code",[e._v("OpenTry")]),e._v(", because it will not contain valid proofs of "),t("code",[e._v("Client/Connection/ConsensusState")]),e._v(".")]),e._v(" "),t("HighlightBox",{attrs:{type:"synopsis"}},[t("p",[e._v("To summarize, this section has explored:")]),e._v(" "),t("ul",[t("li",[e._v("How a connection between two blockchains with IBC is established by a four-way handshake, thereby establishing the identity of the counterparty chain and preventing any malicious entity from pretending to be the counterparty.")]),e._v(" "),t("li",[e._v("How versioning is important to establish, to ensure that only compatible protocol versions attempt to connect.")])])])],1)}),[],!1,null,null,null);o.default=a.exports}}]);