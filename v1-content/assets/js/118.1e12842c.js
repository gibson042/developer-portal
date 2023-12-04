(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{738:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gas-incentivize-players"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-incentivize-players"}},[e._v("#")]),e._v(" Gas - Incentivize Players")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concept of gas.")]),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase with the game wager and its handling. If not, follow the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/game-wager.html"}},[e._v("previous steps")]),e._v(" or check out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/v1-game-wager",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Add transaction fees.")]),e._v(" "),a("li",[e._v("Set fees and add metering.")]),e._v(" "),a("li",[e._v("Do integration tests.")])])]),e._v(" "),a("p",[e._v("Players can start playing checkers with your Cosmos blockchain. Transaction fees are paid by the players themselves, at least the fee related to transporting the serialized bytes and the other gas-metered parts like "),a("code",[e._v("bank")]),e._v(".")]),e._v(" "),a("p",[e._v("Your blockchain is taking shape, but you need to take care of peripheral concerns. For instance, how do you make sure that participants pay their fair share of the costs they impose on the network?")]),e._v(" "),a("p",[e._v("Next, you should add your own gas metering to reflect the costs that different transactions impose, or you can add costs to discourage spam.")]),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("To continue developing your checkers blockchain:")]),e._v(" "),a("ul",[a("li",[e._v("At what junctures can you charge gas?")]),e._v(" "),a("li",[e._v("At what junctures can you "),a("strong",[e._v("not")]),e._v(" charge gas, and what do you do about it?")]),e._v(" "),a("li",[e._v("Are there new errors to report back?")]),e._v(" "),a("li",[e._v("What event should you emit?")])]),e._v(" "),a("h2",{attrs:{id:"code-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),a("p",[e._v("Before diving into the specifics, ask yourself:")]),e._v(" "),a("ul",[a("li",[e._v("What Ignite CLI commands, if any, will assist you?")]),e._v(" "),a("li",[e._v("How do you adjust what Ignite CLI created for you?")]),e._v(" "),a("li",[e._v("Where do you make your changes?")]),e._v(" "),a("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),a("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),a("h2",{attrs:{id:"new-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-data"}},[e._v("#")]),e._v(" New data")]),e._v(" "),a("p",[e._v("These values provide examples but you can, and should, set your own. Save them as new constants:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgQ3JlYXRlR2FtZUdhcyA9IDEwCiAgICBQbGF5TW92ZUdhcyAgID0gMTAKICAgIFJlamVjdEdhbWVHYXMgPSAwCikK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/63370efe/x/checkers/types/keys.go#L43-L45"}}),e._v(" "),a("h2",{attrs:{id:"add-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-handling"}},[e._v("#")]),e._v(" Add handling")]),e._v(" "),a("p",[e._v("Add a line that consumes the designated amount of gas in each relevant handler:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("When handling a game creation:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyh0eXBlcy5DcmVhdGVHYW1lR2FzLCAmcXVvdDtDcmVhdGUgZ2FtZSZxdW90OykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/63370efe/x/checkers/keeper/msg_server_create_game.go#L45"}})],1),e._v(" "),a("li",[a("p",[e._v("When handling a move:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyh0eXBlcy5QbGF5TW92ZUdhcywgJnF1b3Q7UGxheSBhIG1vdmUmcXVvdDspCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/63370efe/x/checkers/keeper/msg_server_play_move.go#L94"}})],1),e._v(" "),a("li",[a("p",[e._v("When handling a game rejection:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyh0eXBlcy5SZWplY3RHYW1lR2FzLCAmcXVvdDtSZWplY3QgZ2FtZSZxdW90OykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/63370efe/x/checkers/keeper/msg_server_reject_game.go#L52"}})],1)]),e._v(" "),a("p",[e._v("You do not meter gas in your "),a("code",[e._v("EndBlock")]),e._v(" handler because it is "),a("strong",[e._v("not")]),e._v(" called by a player sending a transaction. Instead, it is a service rendered by the network. If you want to account for the gas cost of a game expiration, you have to devise a way to pre-collect it from players as part of the other messages.")]),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("As part of your code optimization, avoid calling "),a("code",[e._v("ConsumeGas")]),e._v(" with a fixed gas cost (for instance "),a("code",[e._v("k")]),e._v(") from within a loop. Each pass of the loop uses computation resources ("),a("code",[e._v("c")]),e._v(") on each node. If you know the number of times your code loops ("),a("code",[e._v("n")]),e._v("), you know running the full loop will use "),a("code",[e._v("n*c")]),e._v(" computation resources.\n"),a("br"),a("br"),e._v("\nNow consider the case of a user who sent a transaction without enough gas. The transaction will fail anyway, but at what point will it fail?")]),e._v(" "),a("ol",[a("li",[e._v("If you call "),a("code",[e._v("ConsumeGas(k)")]),e._v(" "),a("em",[e._v("within")]),e._v(" the loop, the transaction will fail during one of the passes (the "),a("code",[e._v("m")]),e._v("th pass). This means that the node has already used "),a("code",[e._v("m*c")]),e._v(" computation resources.")]),e._v(" "),a("li",[e._v("If you call "),a("code",[e._v("ConsumeGas(n*k)")]),e._v(" once "),a("em",[e._v("before")]),e._v(" the loop, the transaction will fail immediately, and the node will have used "),a("code",[e._v("0")]),e._v(" computation resources.")])]),e._v(" "),a("p",[e._v("Choosing option 2 improves the effectiveness of your blockchain, and potentially protects it from spam and denial-of-service attacks.")]),e._v(" "),a("p",[e._v("Additionally, making only a single call to "),a("code",[e._v("ConsumeGas")]),e._v(" slightly saves computation resources of the node.")])]),e._v(" "),a("h2",{attrs:{id:"integration-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration-tests"}},[e._v("#")]),e._v(" Integration tests")]),e._v(" "),a("p",[e._v("Now you must add tests that confirm the gas consumption. However, it is not possible to differentiate the gas cost that BaseApp is incurring on your messages from the gas cost your module imposes on top of it. Also, you cannot distinguish via the descriptor "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.42.6/store/types/gas.go#L90-L101",target:"_blank",rel:"noopener noreferrer"}},[e._v("unless it panics"),a("OutboundLink")],1),e._v(". Nevertheless, you can add a lame test:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBUZXN0Q3JlYXRlMUdhbWVDb25zdW1lZEdhcygpIHsKICAgIHN1aXRlLnNldHVwU3VpdGVXaXRoQmFsYW5jZXMoKQogICAgZ29DdHggOj0gc2RrLldyYXBTREtDb250ZXh0KHN1aXRlLmN0eCkKICAgIGdhc0JlZm9yZSA6PSBzdWl0ZS5jdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpCiAgICBzdWl0ZS5tc2dTZXJ2ZXIuQ3JlYXRlR2FtZShnb0N0eCwgJmFtcDt0eXBlcy5Nc2dDcmVhdGVHYW1lewogICAgICAgIENyZWF0b3I6IGFsaWNlLAogICAgICAgIFJlZDogICAgIGJvYiwKICAgICAgICBCbGFjazogICBjYXJvbCwKICAgICAgICBXYWdlcjogICAxNSwKICAgIH0pCiAgICBnYXNBZnRlciA6PSBzdWl0ZS5jdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpCiAgICBzdWl0ZS5SZXF1aXJlKCkuRXF1YWwodWludDY0KDEzXzE5MCsxMCksIGdhc0FmdGVyLWdhc0JlZm9yZSkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/63370efe/x/checkers/keeper/msg_server_create_game_test.go#L132-L144"}}),e._v(" "),a("p",[e._v("Now add tests for a "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/63370efe/x/checkers/keeper/msg_server_play_move_test.go#L86-L100",target:"_blank",rel:"noopener noreferrer"}},[e._v("play"),a("OutboundLink")],1),e._v(" and a "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/63370efe/x/checkers/keeper/msg_server_reject_game_test.go#L93-L103",target:"_blank",rel:"noopener noreferrer"}},[e._v("reject"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("Here, you want to confirm that gas is consumed by different actions. The difficulty is that Alice's and Bob's balances in "),a("code",[e._v("stake")]),e._v(" tokens change not only because of the gas used but also depending on the gas price. An easy measurement is to use "),a("code",[e._v("--dry-run")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC0tZHJ5LXJ1bgo="}}),e._v(" "),a("p",[e._v("Let's say this returns "),a("code",[e._v("54322")]),e._v(", which is the estimated gas used. Now comment out the "),a("code",[e._v(".ConsumeGas")]),e._v(" line in "),a("code",[e._v("msg_server_create_game.go")]),e._v(", save it, wait a few minutes for Ignite CLI to rebuild, and try again:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC0tZHJ5LXJ1bgo="}}),e._v(" "),a("p",[e._v("Say, this time you get "),a("code",[e._v("54312")]),e._v(". This is good: the "),a("code",[e._v("10")]),e._v(" gas is no longer part of the estimation, as expected. Uncomment the "),a("code",[e._v(".ConsumeGas")]),e._v(" line. You can try "),a("code",[e._v("--dry-run")]),e._v(" on play and reject too.")]),e._v(" "),a("p",[e._v("Note how a difference of "),a("code",[e._v("10")]),e._v(" "),a("strong",[e._v("is insignificant")]),e._v(" compared to the "),a("code",[e._v("54312")]),e._v(" of the other gas costs. This is where you have to decide how to adjust your gas costs so that they are meaningful concerning the costs they impose on the network.")]),e._v(" "),a("p",[e._v("Estimating with "),a("code",[e._v("--dry-run")]),e._v(" is a good start. Now have Alice create a game and check the gas used in the transaction:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlCg=="}}),e._v(" "),a("p",[e._v("This mentions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCmdhc191c2VkOiAmcXVvdDs1Mjc1NSZxdW90OwouLi4K"}}),e._v(" "),a("p",[e._v("You could impose a "),a("code",[e._v("--gas-prices")]),e._v(" and then check balances, but this would obfuscate the gas consumption which is what you want to confirm.")]),e._v(" "),a("p",[e._v("As before, comment the "),a("code",[e._v(".ConsumeGas")]),e._v(" line "),a("code",[e._v("msg_server_create_game.go")]),e._v(" and wait for Ignite CLI to rebuild. Then try again:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlCg=="}}),e._v(" "),a("p",[e._v("This mentions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Li4uCmdhc191c2VkOiAmcXVvdDs1Mjc1MSZxdW90OwouLi4K"}}),e._v(" "),a("p",[e._v("There is only a difference of "),a("code",[e._v("4")]),e._v(". The rest of the system likely had some under-the-hood initializations, such as Merkle tree creations, which may "),a("em",[e._v("falsify")]),e._v(" the early results. Create 10 more games without "),a("code",[e._v(".Consume")]),e._v("ing gas and only look at the "),a("code",[e._v("gas_used")]),e._v(". It should stabilize at a certain value:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC15IHwgZ3JlcCBnYXNfdXNlZAo="}}),e._v(" "),a("p",[e._v("This mentions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Z2FzX3VzZWQ6ICZxdW90OzY1MDU3JnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("Put back the "),a("code",[e._v(".ConsumeGas")]),e._v(" line and rebuild. Then try again:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC15IHwgZ3JlcCBnYXNfdXNlZAo="}}),e._v(" "),a("p",[e._v("This mentions a difference of "),a("code",[e._v("10")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"Z2FzX3VzZWQ6ICZxdW90OzY1MDY3JnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("That is sufficient confirmation.")]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("Make your checkers blockchain more user-friendly by helping players avoid bad transactions via a query that tests a move. Just follow the exercise in the "),a("RouterLink",{attrs:{to:"/academy/3-my-own-chain/can-play.html"}},[e._v("next section")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);