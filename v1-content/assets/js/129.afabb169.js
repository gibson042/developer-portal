(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{749:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"transport-authentication-and-ordering-layer-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transport-authentication-and-ordering-layer-clients"}},[e._v("#")]),e._v(" Transport, Authentication, and Ordering Layer - Clients")]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will learn:")]),e._v(" "),a("ul",[a("li",[e._v("How a client is created.")]),e._v(" "),a("li",[e._v("How client state and consensus can be verified.")]),e._v(" "),a("li",[e._v("How packets are verified.")])])]),e._v(" "),a("p",[a("tm-image",{attrs:{src:"/academy/4-ibc/images/lightclient.png"}})],1),e._v(" "),a("p",[e._v("As previously shown, IBC is structured as several layers of abstraction. At the top, applications such as "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Standard (ICS) 20 token transfers"),a("OutboundLink")],1),e._v(" implement the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-026-routing-module/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-26 IBC standard"),a("OutboundLink")],1),e._v(", which describe the routing and callback functionality used to connect the application layer to the transport layer. Underneath the application are channels, which are unique for each application (for example, a channel that allows a transfer application on chain A to speak to a transfer application on chain B). "),a("RouterLink",{attrs:{to:"/academy/4-ibc/connections.html"}},[e._v("Connections")]),e._v(", which may have many channels, are used to connect two clients (for example, to allow the entire IBC stack of chain A to connect to the IBC stack of chain B). These clients, which may have many connections, comprise the foundational layer of IBC.")],1),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("IBC application developers will primarily interact with "),a("RouterLink",{attrs:{to:"/academy/4-ibc/channels.html"}},[e._v("IBC channels")]),e._v(". This layer is comprised of the handshakes and packet callbacks.")],1)]),e._v(" "),a("p",[e._v("In the IBC setup, each chain will have a "),a("strong",[e._v("client")]),e._v(" of the other chain in its own IBC stack. IBC clients track the consensus states of other blockchains, and the proof specs of those blockchains that are required to properly verify proofs against the client's consensus state. The packets, acknowledgements, and timeouts that off-chain relayers send back and forth can be verified by proving that the packet commitments exist inside of these clients on each chain.")]),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("Although relayers do not perform any verification of the packets, and therefore do not need to be trusted, relayers have a particularly important role in IBC setup in addition to IBC network liveness through submission of packets. They are responsible for submitting the initial messages to create a new client, as well as keeping the client states updated on each chain, so that proof verification on a submitted packet is successful. Relayers are also responsible for sending the connection and channel handshakes to establish connections and channels between chains. Furthermore, relayers can submit evidence of misbehaviour if a chain on the other end of a connection tries to fork or attempts other types of malicious behaviour.")])]),e._v(" "),a("h2",{attrs:{id:"creating-a-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-client"}},[e._v("#")]),e._v(" Creating a client")]),e._v(" "),a("p",[e._v("Start with "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/keeper/msg_server.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("msg_serve.go")]),a("OutboundLink")],1),e._v(", which is where the messages come in. This is the first appearance of the "),a("code",[e._v("CreateClient")]),e._v(" function, which will be submitted by a relayer through the relaying software to create an IBC client on the chain that the message is submitted to:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlQ2xpZW50IGRlZmluZXMgYSBycGMgaGFuZGxlciBtZXRob2QgZm9yIE1zZ0NyZWF0ZUNsaWVudC4KZnVuYyAoayBLZWVwZXIpIENyZWF0ZUNsaWVudChnb0N0eCBjb250ZXh0LkNvbnRleHQsIG1zZyAqY2xpZW50dHlwZXMuTXNnQ3JlYXRlQ2xpZW50KSAoKmNsaWVudHR5cGVzLk1zZ0NyZWF0ZUNsaWVudFJlc3BvbnNlLCBlcnJvcikgewogICAgY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQoKICAgIGNsaWVudFN0YXRlLCBlcnIgOj0gY2xpZW50dHlwZXMuVW5wYWNrQ2xpZW50U3RhdGUobXNnLkNsaWVudFN0YXRlKQogICAgLi4uCgogICAgY29uc2Vuc3VzU3RhdGUsIGVyciA6PSBjbGllbnR0eXBlcy5VbnBhY2tDb25zZW5zdXNTdGF0ZShtc2cuQ29uc2Vuc3VzU3RhdGUpCgogICAgLi4uCgogICAgLi4uID0gay5DbGllbnRLZWVwZXIuQ3JlYXRlQ2xpZW50KGN0eCwgY2xpZW50U3RhdGUsIGNvbnNlbnN1c1N0YXRlKTsKCiAgICAuLi4KfQo="}}),e._v(" "),a("p",[e._v("It creates a client by calling "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client/keeper/client.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ClientKeeper.CreateClient")]),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ3JlYXRlQ2xpZW50IGNyZWF0ZXMgYSBuZXcgY2xpZW50IHN0YXRlIGFuZCBwb3B1bGF0ZXMgaXQgd2l0aCBhIGdpdmVuIGNvbnNlbnN1cwovLyBzdGF0ZSBhcyBkZWZpbmVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvaWJjL3RyZWUvbWFzdGVyL3NwZWMvY29yZS9pY3MtMDAyLWNsaWVudC1zZW1hbnRpY3MjY3JlYXRlCmZ1bmMgKGsgS2VlcGVyKSBDcmVhdGVDbGllbnQoCiAgICBjdHggc2RrLkNvbnRleHQsIGNsaWVudFN0YXRlIGV4cG9ydGVkLkNsaWVudFN0YXRlLCBjb25zZW5zdXNTdGF0ZSBleHBvcnRlZC5Db25zZW5zdXNTdGF0ZSwKKQogICAgLi4uCgogICAgY2xpZW50SUQgOj0gay5HZW5lcmF0ZUNsaWVudElkZW50aWZpZXIoY3R4LCBjbGllbnRTdGF0ZS5DbGllbnRUeXBlKCkpCgogICAgLi4uCgogICAgay5TZXRDbGllbnRTdGF0ZShjdHgsIGNsaWVudElELCBjbGllbnRTdGF0ZSkKCiAgICAuLi4KCiAgICAvLyB2ZXJpZmllcyBpbml0aWFsIGNvbnNlbnN1cyBzdGF0ZSBhZ2FpbnN0IGNsaWVudCBzdGF0ZSBhbmQgaW5pdGlhbGl6ZXMgY2xpZW50IHN0b3JlIHdpdGggYW55IGNsaWVudC1zcGVjaWZpYyBtZXRhZGF0YQogICAgLy8gZS5nLiBzZXQgUHJvY2Vzc2VkVGltZSBpbiBUZW5kZXJtaW50IGNsaWVudHMKICAgIC4uLiA6PSBjbGllbnRTdGF0ZS5Jbml0aWFsaXplKGN0eCwgay5jZGMsIGsuQ2xpZW50U3RvcmUoY3R4LCBjbGllbnRJRCksIGNvbnNlbnN1c1N0YXRlKTsKCiAgICAuLi4KCiAgICBFbWl0Q3JlYXRlQ2xpZW50RXZlbnQoY3R4LCBjbGllbnRJRCwgY2xpZW50U3RhdGUpCgogICAgcmV0dXJuIGNsaWVudElELCBuaWwKfQo="}}),e._v(" "),a("p",[e._v("A local, unique identifier "),a("code",[e._v("clientID")]),e._v(" is generated for each client on the chain. This is not related to the "),a("code",[e._v("chainID")]),e._v(", as IBC does not actually use the "),a("code",[e._v("chainID")]),e._v(" as an identifier.")]),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("The IBC security model is based on clients and not specific chains. This means that the IBC protocol does not need to know who the chains are on either side of a connection, provided that the IBC clients are kept in sync with valid updates, and these updates or other types of messages (i.e. ICS-20 token transfers) can be verified as a Merkle proof against an initial consensus state (root of trust). This is analogous to IP addresses and DNS, where IP addresses would be the corollary to IBC "),a("code",[e._v("clientIDs")]),e._v(", and DNS the "),a("code",[e._v("chainIDs")]),e._v(".\n"),a("br"),a("br"),e._v("\nBecause of this separation of concerns, IBC clients can be created for any number of machine types, from fully-fledged blockchains to keypair-based solo machines, and upgrades to chains which increment the chainID do not break the underlying IBC client and connections.")])]),e._v(" "),a("p",[e._v("In addition, you can see that the function expects a "),a("code",[e._v("ClientState")]),e._v(". This "),a("code",[e._v("ClientState")]),e._v(" will look different depending on which type of client is to be created for IBC. In the case of Cosmos-SDK chains and the corresponding implementation of ibc-go, the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/client_state.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint client"),a("OutboundLink")],1),e._v(" is offered out of the box:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3Q2xpZW50U3RhdGUgY3JlYXRlcyBhIG5ldyBDbGllbnRTdGF0ZSBpbnN0YW5jZQpmdW5jIE5ld0NsaWVudFN0YXRlKAogICAgY2hhaW5JRCBzdHJpbmcsIHRydXN0TGV2ZWwgRnJhY3Rpb24sCiAgICB0cnVzdGluZ1BlcmlvZCwgdWJkUGVyaW9kLCBtYXhDbG9ja0RyaWZ0IHRpbWUuRHVyYXRpb24sCiAgICBsYXRlc3RIZWlnaHQgY2xpZW50dHlwZXMuSGVpZ2h0LCBzcGVjcyBbXSppY3MyMy5Qcm9vZlNwZWMsCiAgICB1cGdyYWRlUGF0aCBbXXN0cmluZywgYWxsb3dVcGRhdGVBZnRlckV4cGlyeSwgYWxsb3dVcGRhdGVBZnRlck1pc2JlaGF2aW91ciBib29sLAopICpDbGllbnRTdGF0ZSB7CiAgICByZXR1cm4gJmFtcDtDbGllbnRTdGF0ZXsKICAgICAgICBDaGFpbklkOiAgICAgICAgICAgICAgICAgICAgICBjaGFpbklELAogICAgICAgIFRydXN0TGV2ZWw6ICAgICAgICAgICAgICAgICAgIHRydXN0TGV2ZWwsCiAgICAgICAgVHJ1c3RpbmdQZXJpb2Q6ICAgICAgICAgICAgICAgdHJ1c3RpbmdQZXJpb2QsCiAgICAgICAgVW5ib25kaW5nUGVyaW9kOiAgICAgICAgICAgICAgdWJkUGVyaW9kLAogICAgICAgIE1heENsb2NrRHJpZnQ6ICAgICAgICAgICAgICAgIG1heENsb2NrRHJpZnQsCiAgICAgICAgTGF0ZXN0SGVpZ2h0OiAgICAgICAgICAgICAgICAgbGF0ZXN0SGVpZ2h0LAogICAgICAgIEZyb3plbkhlaWdodDogICAgICAgICAgICAgICAgIGNsaWVudHR5cGVzLlplcm9IZWlnaHQoKSwKICAgICAgICBQcm9vZlNwZWNzOiAgICAgICAgICAgICAgICAgICBzcGVjcywKICAgICAgICBVcGdyYWRlUGF0aDogICAgICAgICAgICAgICAgICB1cGdyYWRlUGF0aCwKICAgICAgICBBbGxvd1VwZGF0ZUFmdGVyRXhwaXJ5OiAgICAgICBhbGxvd1VwZGF0ZUFmdGVyRXhwaXJ5LAogICAgICAgIEFsbG93VXBkYXRlQWZ0ZXJNaXNiZWhhdmlvdXI6IGFsbG93VXBkYXRlQWZ0ZXJNaXNiZWhhdmlvdXIsCiAgICB9Cn0K"}}),e._v(" "),a("p",[e._v("The Tendermint "),a("code",[e._v("ClientState")]),e._v(" contains all the information needed to verify a header. This includes properties which are applicable for all Tendermint clients, such as the corresponding chainID, the unbonding period of the chain, the latest height of the client, etc.")]),e._v(" "),a("p",[a("code",[e._v("TrustingPeriod")]),e._v(" determines the duration of the period since the latest timestamp during which the submitted headers are valid for upgrade. If a client is not updated within the "),a("code",[e._v("TrustingPeriod")]),e._v(", the client will expire. This does not mean the client is irrecoverable. However, recovery of an expired Tendermint client will require a "),a("a",{attrs:{href:"https://ibc.cosmos.network/main/ibc/proposals.html#preconditions",target:"_blank",rel:"noopener noreferrer"}},[e._v("governance proposal"),a("OutboundLink")],1),e._v(" for each client which has expired. If both clients on either side of a connection have expired, then a governance proposal will be required on each chain in order to revive each client.")]),e._v(" "),a("p",[a("code",[e._v("TrustLevel")]),e._v(" determines the portion of the validator set you want to have signing a header for it to be considered as valid. Tendermint defines this as 2/3, and the IBC Tendermint client inherits this property from Tendermint.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("Properties such as "),a("code",[e._v("TrustLevel")]),e._v(" and "),a("code",[e._v("TrustingPeriod")]),e._v(" can be customised, such that different clients on the same chain can have different security guarantees with different tradeoffs for efficiency of processing updates.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("It is important to highlight that certain parameters of an IBC client cannot be updated after the client has been created, in order to preserve the security guarantees of each client and prevent a situation where a relayer unilaterally updates those security guarantees. These parameters are: "),a("code",[e._v("MaxClockDrift")]),e._v(", "),a("code",[e._v("TrustingPeriod")]),e._v(", and "),a("code",[e._v("TrustLevel")]),e._v(".\n"),a("br"),a("br"),e._v("\nAs stated before, "),a("code",[e._v("TrustLevel")]),e._v(" is inherited from Tendermint and will be 2/3 for all Tendermint clients. However, this could change for other client types.\n"),a("br"),a("br"),e._v("\nIt is recommended that "),a("code",[e._v("TrustingPeriod")]),e._v(" should be set as 2/3 of the UnbondingPeriod.\n"),a("br"),a("br"),e._v("\nIt is also recommended that "),a("code",[e._v("MaxClockDrift")]),e._v(" should be set to at least 5sec and up to 15sec, depending on expected block size differences between the chains in the connection. The Hermes (Rust) relayer will compute this value for you if you do not manually set it.")])]),e._v(" "),a("p",[a("code",[e._v("CreateClient")]),e._v(" additionally expects a "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/consensus_state.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ConsensusState")]),a("OutboundLink")],1),e._v(". In the case of a Tendermint client, the initial root of trust (or consensus state) looks like this:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3Q29uc2Vuc3VzU3RhdGUgY3JlYXRlcyBhIG5ldyBDb25zZW5zdXNTdGF0ZSBpbnN0YW5jZS4KZnVuYyBOZXdDb25zZW5zdXNTdGF0ZSgKICAgIHRpbWVzdGFtcCB0aW1lLlRpbWUsIHJvb3QgY29tbWl0bWVudHR5cGVzLk1lcmtsZVJvb3QsIG5leHRWYWxzSGFzaCB0bWJ5dGVzLkhleEJ5dGVzLAopICpDb25zZW5zdXNTdGF0ZSB7CiAgICByZXR1cm4gJmFtcDtDb25zZW5zdXNTdGF0ZXsKICAgICAgICBUaW1lc3RhbXA6ICAgICAgICAgIHRpbWVzdGFtcCwKICAgICAgICBSb290OiAgICAgICAgICAgICAgIHJvb3QsCiAgICAgICAgTmV4dFZhbGlkYXRvcnNIYXNoOiBuZXh0VmFsc0hhc2gsCiAgICB9Cn0K"}}),e._v(" "),a("p",[e._v("The Tendermint client "),a("code",[e._v("ConsensusState")]),e._v(" tracks the timestamp of the block being created, the hash of the validator set for the next block of the counterparty blockchain, and the root of the counterparty blockchain. The initial "),a("code",[e._v("ConsensusState")]),e._v(" does not need to start with the genesis block of a counterparty chain.")]),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("The next validator set is used for verifying subsequent submitted headers or updates to the counterparty "),a("code",[e._v("ConsensusState")]),e._v(". See the following part on "),a("a",{attrs:{href:"https://interchainacademy.cosmos.network/academy/ibc/clients.html#updating-a-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Updating clients"),a("OutboundLink")],1),e._v(" for more information about what happens when a validator set changes between blocks.")])]),e._v(" "),a("p",[e._v("The root is the "),a("strong",[e._v("AppHash")]),e._v(", or the hash of the application state of the counterparty blockchain that this client is representing. This root hash is particularly important because it is the root hash used on a receiving chain when verifying "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Merkle_tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("Merkle"),a("OutboundLink")],1),e._v(" proofs associated with a packet coming over IBC, to determine whether or not the relevant transaction has been actually been executed on the sending chain. If the Merkle proof associated with a packet commitment delivered by a relayer successfully hashes up to this "),a("code",[e._v("ConsensusState")]),e._v(" root hash, it is certain that the transaction was actually executed on the sending chain and included in the state of the sending blockchain.")]),e._v(" "),a("p",[e._v("The following is an example of how the Tendermint client handles this Merkle "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/23-commitment/types/merkle.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("proof verification"),a("OutboundLink")],1),e._v(". The "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-023-vector-commitments",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-23 spec"),a("OutboundLink")],1),e._v(" addresses how to construct membership proofs, and the "),a("a",{attrs:{href:"https://github.com/confio/ics23",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-23 implementation"),a("OutboundLink")],1),e._v(" currently supports Tendermint IAVL and simple Merkle proofs out of the box. Note that non-Tendermint client types may choose to handle proof verification differently:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmVyaWZ5TWVtYmVyc2hpcCB2ZXJpZmllcyB0aGUgbWVtYmVyc2hpcCBvZiBhIG1lcmtsZSBwcm9vZiBhZ2FpbnN0IHRoZSBnaXZlbiByb290LCBwYXRoLCBhbmQgdmFsdWUuCmZ1bmMgKHByb29mIE1lcmtsZVByb29mKSBWZXJpZnlNZW1iZXJzaGlwKHNwZWNzIFtdKmljczIzLlByb29mU3BlYywgcm9vdCBleHBvcnRlZC5Sb290LCBwYXRoIGV4cG9ydGVkLlBhdGgsIHZhbHVlIFtdYnl0ZSkgZXJyb3IgewogICAgaWYgZXJyIDo9IHByb29mLnZhbGlkYXRlVmVyaWZpY2F0aW9uQXJncyhzcGVjcywgcm9vdCk7IGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICAvLyBWZXJpZnlNZW1iZXJzaGlwIHNwZWNpZmljIGFyZ3VtZW50IHZhbGlkYXRpb24KICAgIG1wYXRoLCBvayA6PSBwYXRoLihNZXJrbGVQYXRoKQogICAgaWYgIW9rIHsKICAgICAgICByZXR1cm4gc2RrZXJyb3JzLldyYXBmKEVyckludmFsaWRQcm9vZiwgJnF1b3Q7cGF0aCAldiBpcyBub3Qgb2YgdHlwZSBNZXJrbGVQYXRoJnF1b3Q7LCBwYXRoKQogICAgfQogICAgaWYgbGVuKG1wYXRoLktleVBhdGgpICE9IGxlbihzcGVjcykgewogICAgICAgIHJldHVybiBzZGtlcnJvcnMuV3JhcGYoRXJySW52YWxpZFByb29mLCAmcXVvdDtwYXRoIGxlbmd0aCAlZCBub3Qgc2FtZSBhcyBwcm9vZiAlZCZxdW90OywKICAgICAgICAgICAgbGVuKG1wYXRoLktleVBhdGgpLCBsZW4oc3BlY3MpKQogICAgfQogICAgaWYgbGVuKHZhbHVlKSA9PSAwIHsKICAgICAgICByZXR1cm4gc2RrZXJyb3JzLldyYXAoRXJySW52YWxpZFByb29mLCAmcXVvdDtlbXB0eSB2YWx1ZSBpbiBtZW1iZXJzaGlwIHByb29mJnF1b3Q7KQogICAgfQoKICAgIC8vIFNpbmNlIGV2ZXJ5IHByb29mIGluIGNoYWluIGlzIGEgbWVtYmVyc2hpcCBwcm9vZiB3ZSBjYW4gdXNlIHZlcmlmeUNoYWluZWRNZW1iZXJzaGlwUHJvb2YgZnJvbSBpbmRleCAwCiAgICAvLyB0byB2YWxpZGF0ZSBlbnRpcmUgcHJvb2YKICAgIGlmIGVyciA6PSB2ZXJpZnlDaGFpbmVkTWVtYmVyc2hpcFByb29mKHJvb3QuR2V0SGFzaCgpLCBzcGVjcywgcHJvb2YuUHJvb2ZzLCBtcGF0aCwgdmFsdWUsIDApOyBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CiAgICByZXR1cm4gbmlsCn0K"}}),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("IBC on-chain clients can also be referred to as "),a("strong",[e._v("light clients")]),e._v('. In contrast to the full nodes, which track the entire state of blockchain and contain every single tx/block, these on-chain IBC "light clients" track only the few pieces of information about counterparty chains previously mentioned (timestamp, root hash, next validator set hash). This saves space and increases the efficiency of processing consensus state updates.\n'),a("br"),a("br"),e._v("\nThe objective is to avoid a situation where it is necessary to have a copy of chain B on chain A in order to create a trustless IBC connection. However, full nodes which track the entire state of a blockchain are useful for IBC relayer operators as an endpoint to query for the proofs needed to verify IBC packet commitments. This entire process maintains the trustless, permissionless, and highly secure design of IBC. As proof verification still happens in the IBC client itself, no trust in the relayer operator is needed and anyone can permissionlessly spin up a relaying operation, provided that they have access to a full node endpoint.")])]),e._v(" "),a("h2",{attrs:{id:"updating-a-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-client"}},[e._v("#")]),e._v(" Updating a client")]),e._v(" "),a("p",[e._v("Assume that the initial ConsensusState was created at block 50, but you want to submit a proof of a transaction which happened in block 100. In this case, you need to first update the ConsensusState to reflect all the changes that have happened between block 50 and block 100.")]),e._v(" "),a("p",[e._v("To update the "),a("code",[e._v("ConsensusState")]),e._v(" of the counterparty on the client, an "),a("code",[e._v("UpdateClient")]),e._v(" message containing a "),a("code",[e._v("Header")]),e._v(" of the chain to be updated must be submitted by a relayer. For all IBC client types, Tendermint or otherwise, this "),a("code",[e._v("Header")]),e._v(" contains the information necessary to update the "),a("code",[e._v("ConsensusState")]),e._v(". However, IBC does not dictate what the "),a("code",[e._v("Header")]),e._v(" must contain beyond the basic methods for returning "),a("code",[e._v("ClientType")]),e._v(" and "),a("code",[e._v("GetClientID")]),e._v(". The specifics of what each client expects as important information to perform a "),a("code",[e._v("ConsensusState")]),e._v(" update will be found in each client implementation.")]),e._v(" "),a("p",[e._v("For example, the Tendermint client "),a("code",[e._v("Header")]),e._v(" looks like "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/tendermint.pb.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIZWFkZXIgc3RydWN0IHsKICAgICp0eXBlczIuU2lnbmVkSGVhZGVyIGBwcm90b2J1ZjomcXVvdDtieXRlcywxLG9wdCxuYW1lPXNpZ25lZF9oZWFkZXIsanNvbj1zaWduZWRIZWFkZXIscHJvdG8zLGVtYmVkZGVkPXNpZ25lZF9oZWFkZXImcXVvdDsganNvbjomcXVvdDtzaWduZWRfaGVhZGVyLG9taXRlbXB0eSZxdW90OyB5YW1sOiZxdW90O3NpZ25lZF9oZWFkZXImcXVvdDtgCiAgICBWYWxpZGF0b3JTZXQgICAgICAgICAqdHlwZXMyLlZhbGlkYXRvclNldCBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMixvcHQsbmFtZT12YWxpZGF0b3Jfc2V0LGpzb249dmFsaWRhdG9yU2V0LHByb3RvMyZxdW90OyBqc29uOiZxdW90O3ZhbGlkYXRvcl9zZXQsb21pdGVtcHR5JnF1b3Q7IHlhbWw6JnF1b3Q7dmFsaWRhdG9yX3NldCZxdW90O2AKICAgIFRydXN0ZWRIZWlnaHQgICAgICAgIHR5cGVzLkhlaWdodCAgICAgICAgIGBwcm90b2J1ZjomcXVvdDtieXRlcywzLG9wdCxuYW1lPXRydXN0ZWRfaGVpZ2h0LGpzb249dHJ1c3RlZEhlaWdodCxwcm90bzMmcXVvdDsganNvbjomcXVvdDt0cnVzdGVkX2hlaWdodCZxdW90OyB5YW1sOiZxdW90O3RydXN0ZWRfaGVpZ2h0JnF1b3Q7YAogICAgVHJ1c3RlZFZhbGlkYXRvcnMgICAgKnR5cGVzMi5WYWxpZGF0b3JTZXQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDQsb3B0LG5hbWU9dHJ1c3RlZF92YWxpZGF0b3JzLGpzb249dHJ1c3RlZFZhbGlkYXRvcnMscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dHJ1c3RlZF92YWxpZGF0b3JzLG9taXRlbXB0eSZxdW90OyB5YW1sOiZxdW90O3RydXN0ZWRfdmFsaWRhdG9ycyZxdW90O2AKfQo="}}),e._v(" "),a("p",[e._v("The Tendermint "),a("code",[e._v("SignedHeader")]),e._v(" is a header and commit that the counterparty chain has created. In the "),a("code",[e._v("UpdateClient")]),e._v(" example, this would be the header of block 100 which will contain the timestamp of the block, the hash of the next validator set, and the root hash needed to update the "),a("code",[e._v("ConensusState")]),e._v(" on record for the counterparty chain. The commit will be a signature of at least 2/3 of the validator set over that header, which is guaranteed as part of Tendermint's BFT consensus model.")]),e._v(" "),a("p",[a("code",[e._v("ValidatorSet")]),e._v(" will be the actual validator set, as opposed to the hash of the next validator set stored on the "),a("code",[e._v("ConsensusState")]),e._v(". This is important for the Tendermint "),a("code",[e._v("UpdateClient")]),e._v(" because, in order to preserve the Tendermint security model, it is necessary to be able to prove that at least 2/3 of the validators who signed the initial header at block 50 have signed the header to update the "),a("code",[e._v("ConsensusState")]),e._v(" to block 100. This "),a("code",[e._v("ValidatorSet")]),e._v(" will be submitted by the relayer as part of the "),a("code",[e._v("UpdateClient")]),e._v(" message, as the relayer has access to full nodes from which this information can be extracted.")]),e._v(" "),a("p",[a("code",[e._v("TrustedValidators")]),e._v(" are the validators associated with that height. Note that "),a("code",[e._v("TrustedValidators")]),e._v(" must hash to the "),a("code",[e._v("ConsensusState")]),e._v(" "),a("code",[e._v("NextValidatorsHash")]),e._v(" since that is the last trusted validator set at the "),a("code",[e._v("TrustedHeight")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TrustedHeight")]),e._v(" is the height of a stored "),a("code",[e._v("ConsensusState")]),e._v(" on the client that will be used to verify the new untrusted header. You can see the code that takes the "),a("code",[e._v("ConsensusState")]),e._v(" at the "),a("code",[e._v("TrustedHeight")]),e._v(" and uses it to verify the new header "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/update.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". This code proves that the submitted header is valid and creates a verified "),a("code",[e._v("ConsensusState")]),e._v(" for the submitted header, as well as updating the client state to reflect the new latest height of the submitted header. This verified "),a("code",[e._v("ConsensusState")]),e._v(" will be added to the client as part of the set of "),a("code",[e._v("ClientConsensusStates")]),e._v(", and can subsequently be used as a trusted state at its corresponding height.")]),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("If you want to see where "),a("code",[e._v("ConsensusState")]),e._v(" is stored, see the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Standard (ICS) 24"),a("OutboundLink")],1),e._v(", which also describes the paths for other keys to be stored and used by IBC.")])]),e._v(" "),a("h2",{attrs:{id:"verifying-packet-commitments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifying-packet-commitments"}},[e._v("#")]),e._v(" Verifying packet commitments")]),e._v(" "),a("p",[e._v("As shown in the deep dive on "),a("RouterLink",{attrs:{to:"/academy/4-ibc/channels.html"}},[e._v("channels")]),e._v(", a relayer will first submit an "),a("code",[e._v("UpdateClient")]),e._v(" to update the sending chain client on the destination chain, before relaying packets containing other message types, such as ICS-20 token transfers. The destination chain can be sure that the packet will be contained in its ConsensusState root hash, and successfully verify this packet and packet commitment proof against the state contained in its (updated) IBC light client.")],1),e._v(" "),a("p",[e._v("The code snippet which illustrates how a client "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/types/client_state.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("verifies an incoming packet"),a("OutboundLink")],1),e._v(" is as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmVyaWZ5UGFja2V0Q29tbWl0bWVudCB2ZXJpZmllcyBhIHByb29mIG9mIGFuIG91dGdvaW5nIHBhY2tldCBjb21taXRtZW50IGF0Ci8vIHRoZSBzcGVjaWZpZWQgcG9ydCwgc3BlY2lmaWVkIGNoYW5uZWwsIGFuZCBzcGVjaWZpZWQgc2VxdWVuY2UuCmZ1bmMgKGNzIENsaWVudFN0YXRlKSBWZXJpZnlQYWNrZXRDb21taXRtZW50KAogICAgY3R4IHNkay5Db250ZXh0LAogICAgc3RvcmUgc2RrLktWU3RvcmUsCiAgICBjZGMgY29kZWMuQmluYXJ5Q29kZWMsCiAgICBoZWlnaHQgZXhwb3J0ZWQuSGVpZ2h0LAogICAgZGVsYXlUaW1lUGVyaW9kIHVpbnQ2NCwKICAgIGRlbGF5QmxvY2tQZXJpb2QgdWludDY0LAogICAgcHJlZml4IGV4cG9ydGVkLlByZWZpeCwKICAgIHByb29mIFtdYnl0ZSwKICAgIHBvcnRJRCwKICAgIGNoYW5uZWxJRCBzdHJpbmcsCiAgICBzZXF1ZW5jZSB1aW50NjQsCiAgICBjb21taXRtZW50Qnl0ZXMgW11ieXRlLAopIGVycm9yIHsKICAgIG1lcmtsZVByb29mLCBjb25zZW5zdXNTdGF0ZSwgZXJyIDo9IHByb2R1Y2VWZXJpZmljYXRpb25BcmdzKHN0b3JlLCBjZGMsIGNzLCBoZWlnaHQsIHByZWZpeCwgcHJvb2YpCiAgICAuLi4KCiAgICAvLyBjaGVjayBkZWxheSBwZXJpb2QgaGFzIHBhc3NlZAogICAgaWYgZXJyIDo9IHZlcmlmeURlbGF5UGVyaW9kUGFzc2VkKGN0eCwgc3RvcmUsIGhlaWdodCwgZGVsYXlUaW1lUGVyaW9kLCBkZWxheUJsb2NrUGVyaW9kKTsKICAgIC4uLgoKICAgIGNvbW1pdG1lbnRQYXRoIDo9IGNvbW1pdG1lbnR0eXBlcy5OZXdNZXJrbGVQYXRoKGhvc3QuUGFja2V0Q29tbWl0bWVudFBhdGgocG9ydElELCBjaGFubmVsSUQsIHNlcXVlbmNlKSkKICAgIHBhdGgsIGVyciA6PSBjb21taXRtZW50dHlwZXMuQXBwbHlQcmVmaXgocHJlZml4LCBjb21taXRtZW50UGF0aCkKICAgIC4uLgoKICAgIGlmIGVyciA6PSBtZXJrbGVQcm9vZi5WZXJpZnlNZW1iZXJzaGlwKGNzLlByb29mU3BlY3MsIGNvbnNlbnN1c1N0YXRlLkdldFJvb3QoKSwgcGF0aCwgY29tbWl0bWVudEJ5dGVzKTsKICAgIC4uLgoKICAgIHJldHVybiBuaWwKfQo="}}),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("Now that you explored connections, channels, and clients of the transport, authentication, and ordering layer, the "),a("RouterLink",{attrs:{to:"/academy/4-ibc/token-transfer.html"}},[e._v("next section")]),e._v(" takes a closer look at cross-chain fungible token transfers.")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);