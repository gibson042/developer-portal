(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{751:function(e,t,s){"use strict";s.r(t);var o=s(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"integration-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-tests"}},[e._v("#")]),e._v(" Integration Tests")]),e._v(" "),s("HighlightBox",{attrs:{type:"prerequisite"}},[s("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),s("ul",[s("li",[e._v("You understand the concepts of "),s("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/5-modules.html"}},[e._v("modules")]),e._v(", "),s("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/7-multistore-keepers.html"}},[e._v("keepers")]),e._v(", and "),s("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/12-testing.html"}},[e._v("testing")]),e._v(".")],1),e._v(" "),s("li",[e._v("Go is installed.")]),e._v(" "),s("li",[e._v("You have the checkers blockchain codebase up to the wager payments. If not, follow the "),s("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/6-payment-winning.html"}},[e._v("previous steps")]),e._v(" or check out "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/payment-winning",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),s("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),s("HighlightBox",{attrs:{type:"learning"}},[s("p",[e._v("In this section, you will:")]),e._v(" "),s("ul",[s("li",[e._v("Add integration tests.")])])]),e._v(" "),s("p",[e._v("In the "),s("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/6-payment-winning.html"}},[e._v("previous section")]),e._v(", you handled wager payments and added unit tests that pass. You added mocks of the bank keeper. Mocks are useful to embody your expectations of the bank keeper's behavior and then quickly confirm that your code does what you expect. By interacting via the CLI, you also confirmed that the bank keeper behaved as you expected.")],1),e._v(" "),s("p",[e._v("Now, it would be better to automatically check that your expectations of the bank keeper's behavior are correct. This is done with integration tests, and is the focus of this section.")]),e._v(" "),s("h2",{attrs:{id:"what-is-to-be-done"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-to-be-done"}},[e._v("#")]),e._v(" What is to be done")]),e._v(" "),s("p",[e._v("In order, you will:")]),e._v(" "),s("ul",[s("li",[e._v("Prepare your code to accept integration tests.")]),e._v(" "),s("li",[e._v("Create helper functions that will make your integration tests more succinct.")]),e._v(" "),s("li",[e._v("Add integration tests that create a full app and test proper token bank balances.")])]),e._v(" "),s("HighlightBox",{attrs:{type:"remember"}},[s("p",[e._v("As a reminder:")]),e._v(" "),s("ul",[s("li",[e._v("At version 0.45.4 of the Cosmos SDK, an integration test creates a full app.")]),e._v(" "),s("li",[e._v("At version 0.47 of the SDK, an integration test creates a minimal app, and a test that creates a full app is called an end-to-end test (E2E).")])])]),e._v(" "),s("p",[e._v("Fortunately, you do not have to do this from scratch: taking inspiration from "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/x/bank/keeper/keeper_test.go#L66-L110",target:"_blank",rel:"noopener noreferrer"}},[e._v("tests on the bank module"),s("OutboundLink")],1),e._v(", prepare your code so as to accommodate and create a full app that will contain a bank keeper, and add new tests.")]),e._v(" "),s("p",[e._v("For unit tests, each function takes a "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/x/checkers/keeper/end_block_server_game_test.go#L12",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("t *testing.T")]),s("OutboundLink")],1),e._v(" object. For integration tests, each function will be a method on a test suite that inherits from "),s("a",{attrs:{href:"https://pkg.go.dev/github.com/stretchr/testify/suite",target:"_blank",rel:"noopener noreferrer"}},[e._v("testify's suite"),s("OutboundLink")],1),e._v(". This has the advantage that your test suite can have as many fields as is necessary or useful. The objects that you have used and would welcome in the suite are:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"a2VlcGVyICAgIGtlZXBlci5LZWVwZXIKbXNnU2VydmVyIHR5cGVzLk1zZ1NlcnZlcgpjdHggICAgICAgc2RrLkNvbnRleHQK"}}),e._v(" "),s("p",[e._v("You can spread the suite's methods to different files, so as to keep consistent naming for your test files.")]),e._v(" "),s("p",[e._v("When testing, "),s("code",[e._v("go test")]),e._v(" will find the suite because you add a "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/x/bank/keeper/keeper_test.go#L1233-L1235",target:"_blank",rel:"noopener noreferrer"}},[s("em",[e._v("regular")]),e._v(" test"),s("OutboundLink")],1),e._v(" that initializes the suite and runs it. The test suite is then automatically initialized with its "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/x/bank/keeper/keeper_test.go#L96",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("SetupTest")]),s("OutboundLink")],1),e._v(" function via its parent "),s("code",[e._v("suite")]),e._v(" class. After that, all the methods of the test suite are run.")]),e._v(" "),s("h2",{attrs:{id:"accommodate-your-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accommodate-your-code"}},[e._v("#")]),e._v(" Accommodate your code")]),e._v(" "),s("p",[e._v("Copy and adjust from the Cosmos SDK.")]),e._v(" "),s("PanelList",[s("PanelListItem",{attrs:{number:"1"}},[s("p",[e._v("Ignite CLI created a default constructor for your App with a "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/app/app.go#L245-L256",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("cosmoscmd.App")]),s("OutboundLink")],1),e._v(" return type, but this is not convenient. Instead of risking breaking other dependencies, add a new constructor with "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/app/app.go#L257-L281",target:"_blank",rel:"noopener noreferrer"}},[e._v("your "),s("code",[e._v("App")]),s("OutboundLink")],1),e._v(" as the return type.")])]),e._v(" "),s("PanelListItem",{attrs:{number:"2"}},[s("p",[e._v("Use "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/app/encoding.go",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("encoding.go")]),s("OutboundLink")],1),e._v(" taken from "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/simapp/encoding.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(", where you:")]),e._v(" "),s("ul",[s("li",[e._v("Import "),s("code",[e._v('"github.com/ignite-hq/cli/ignite/pkg/cosmoscmd"')]),e._v(".")]),e._v(" "),s("li",[e._v("Replace "),s("code",[e._v("simappparams.EncodingConfig")]),e._v(" with "),s("code",[e._v("cosmoscmd.EncodingConfig")]),e._v(".")]),e._v(" "),s("li",[e._v("Replace "),s("code",[e._v("simappparams.MakeTestEncodingConfig")]),e._v(" with "),s("code",[e._v("appparams.MakeTestEncodingConfig")]),e._v(".")])])]),e._v(" "),s("PanelListItem",{attrs:{number:"3"}},[s("p",[e._v("Use "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/app/params/proto.go",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("proto.go")]),s("OutboundLink")],1),e._v(" taken from "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/simapp/params/proto.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(", where you:")]),e._v(" "),s("ul",[s("li",[e._v("Import "),s("code",[e._v('"github.com/ignite-hq/cli/ignite/pkg/cosmoscmd"')]),e._v(".")]),e._v(" "),s("li",[e._v("Replace "),s("code",[e._v("EncodingConfig")]),e._v(" with "),s("code",[e._v("cosmoscmd.EncodingConfig")]),e._v(".")])])]),e._v(" "),s("PanelListItem",{attrs:{number:"4"}},[s("p",[e._v("Use "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/app/test_helpers.go",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("test_helpers.go")]),s("OutboundLink")],1),e._v(" taken from "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/simapp/test_helpers.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(", in which you:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Adjust from "),s("code",[e._v("SimApp")]),e._v(" to "),s("code",[e._v("App")])])]),e._v(" "),s("li",[s("p",[e._v("Adjust from "),s("code",[e._v("New()")]),e._v(" to "),s("code",[e._v("NewApp()")])])]),e._v(" "),s("li",[s("p",[e._v("Initialize your checkers genesis:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y2hlY2tlcnNHZW5lc2lzIDo9IHR5cGVzLkRlZmF1bHRHZW5lc2lzKCkKZ2VuZXNpc1N0YXRlW3R5cGVzLk1vZHVsZU5hbWVdID0gYXBwLkFwcENvZGVjKCkuTXVzdE1hcnNoYWxKU09OKGNoZWNrZXJzR2VuZXNpcykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/app/test_helpers.go#L146-L147"}})],1)])]),e._v(" "),s("PanelListItem",{attrs:{number:"5"}},[s("p",[e._v("Define your test suite in a new "),s("code",[e._v("keeper_integration_suite_test.go")]),e._v(" file in a dedicated folder "),s("code",[e._v("tests/integration/checkers/keeper")]),e._v(":")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJbnRlZ3JhdGlvblRlc3RTdWl0ZSBzdHJ1Y3QgewogICAgc3VpdGUuU3VpdGUKCiAgICBhcHAgICAgICAgICAqY2hlY2tlcnNhcHAuQXBwCiAgICBtc2dTZXJ2ZXIgICB0eXBlcy5Nc2dTZXJ2ZXIKICAgIGN0eCAgICAgICAgIHNkay5Db250ZXh0CiAgICBxdWVyeUNsaWVudCB0eXBlcy5RdWVyeUNsaWVudAp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L30-L37"}})],1),e._v(" "),s("PanelListItem",{attrs:{number:"6"}},[s("p",[e._v("Direct "),s("code",[e._v("go test")]),e._v(" to it:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0Q2hlY2tlcnNLZWVwZXJUZXN0U3VpdGUodCAqdGVzdGluZy5UKSB7CiAgICBzdWl0ZS5SdW4odCwgbmV3KEludGVncmF0aW9uVGVzdFN1aXRlKSkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L43-L45"}})],1),e._v(" "),s("PanelListItem",{attrs:{number:"7",last:!0}},[s("p",[e._v("Create the "),s("code",[e._v("suite.SetupTest")]),e._v(" function, taking inspiration from the "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9e1ec7b/x/bank/keeper/keeper_test.go#L96-L110",target:"_blank",rel:"noopener noreferrer"}},[e._v("bank tests"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBTZXR1cFRlc3QoKSB7CiAgICBhcHAgOj0gY2hlY2tlcnNhcHAuU2V0dXAoZmFsc2UpCiAgICBjdHggOj0gYXBwLkJhc2VBcHAuTmV3Q29udGV4dChmYWxzZSwgdG1wcm90by5IZWFkZXJ7VGltZTogdGltZS5Ob3coKX0pCgogICAgYXBwLkFjY291bnRLZWVwZXIuU2V0UGFyYW1zKGN0eCwgYXV0aHR5cGVzLkRlZmF1bHRQYXJhbXMoKSkKICAgIGFwcC5CYW5rS2VlcGVyLlNldFBhcmFtcyhjdHgsIGJhbmt0eXBlcy5EZWZhdWx0UGFyYW1zKCkpCiAgICBjaGVja2Vyc01vZHVsZUFkZHJlc3MgPSBhcHAuQWNjb3VudEtlZXBlci5HZXRNb2R1bGVBZGRyZXNzKHR5cGVzLk1vZHVsZU5hbWUpLlN0cmluZygpCgogICAgcXVlcnlIZWxwZXIgOj0gYmFzZWFwcC5OZXdRdWVyeVNlcnZlclRlc3RIZWxwZXIoY3R4LCBhcHAuSW50ZXJmYWNlUmVnaXN0cnkoKSkKICAgIHR5cGVzLlJlZ2lzdGVyUXVlcnlTZXJ2ZXIocXVlcnlIZWxwZXIsIGFwcC5DaGVja2Vyc0tlZXBlcikKICAgIHF1ZXJ5Q2xpZW50IDo9IHR5cGVzLk5ld1F1ZXJ5Q2xpZW50KHF1ZXJ5SGVscGVyKQoKICAgIHN1aXRlLmFwcCA9IGFwcAogICAgc3VpdGUubXNnU2VydmVyID0ga2VlcGVyLk5ld01zZ1NlcnZlckltcGwoYXBwLkNoZWNrZXJzS2VlcGVyKQogICAgc3VpdGUuY3R4ID0gY3R4CiAgICBzdWl0ZS5xdWVyeUNsaWVudCA9IHF1ZXJ5Q2xpZW50Cn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L47-L63"}}),e._v(" "),s("p",[e._v("This "),s("a",{attrs:{href:"https://github.com/stretchr/testify/blob/v1.7.0/suite/interfaces.go#L18-L22",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("SetupTest")]),e._v(" function"),s("OutboundLink")],1),e._v(" is like a "),s("code",[e._v("beforeEach")]),e._v(" as found in other test libraries. With it, you always get a new "),s("code",[e._v("app")]),e._v(" in each test, without interference between them. Do not "),s("a",{attrs:{href:"https://github.com/stretchr/testify/blob/v1.7.0/suite/suite.go#L147",target:"_blank",rel:"noopener noreferrer"}},[e._v("omit it"),s("OutboundLink")],1),e._v(" unless you have specific reasons to do so.")]),e._v(" "),s("HighlightBox",{attrs:{type:"note"}},[s("p",[e._v("It collects your "),s("code",[e._v("checkersModuleAddress")]),e._v(" for later use in tests that check events and balances:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyICgKICAgIGNoZWNrZXJzTW9kdWxlQWRkcmVzcyBzdHJpbmcKKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L39-L41"}})],1)],1)],1),e._v(" "),s("h2",{attrs:{id:"test-the-test-suite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-the-test-suite"}},[e._v("#")]),e._v(" Test the test suite")]),e._v(" "),s("p",[e._v("You can now confirm you did all this correctly by running these new keeper integration tests, although the suite has no tests. Note how the path to call has changed:")]),e._v(" "),s("CodeGroup",[s("CodeGroupItem",{attrs:{title:"Local",active:""}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMvdGVzdHMvaW50ZWdyYXRpb24vY2hlY2tlcnMva2VlcGVyCg=="}})],1),e._v(" "),s("CodeGroupItem",{attrs:{title:"Docker"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIC12ICQocHdkKTovY2hlY2tlcnMgXAogICAgLXcgL2NoZWNrZXJzIFwKICAgIGNoZWNrZXJzX2kgXAogICAgZ28gdGVzdCBnaXRodWIuY29tL2FsaWNlL2NoZWNrZXJzL3Rlc3RzL2ludGVncmF0aW9uL2NoZWNrZXJzL2tlZXBlcgo="}})],1)],1),e._v(" "),s("h2",{attrs:{id:"helpers-for-money-checking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helpers-for-money-checking"}},[e._v("#")]),e._v(" Helpers for money checking")]),e._v(" "),s("p",[e._v("Your upcoming integration tests will include checks on wagers being paid, lost, and won, so your tests need to initialize some bank balances for your players. This is made easier with a few helpers, including a helper to confirm a bank balance.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Make a bank genesis "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9e1ec7b6/x/bank/types/genesis.pb.go#L105-L110",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("Balance")]),s("OutboundLink")],1),e._v(" type from primitives:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBtYWtlQmFsYW5jZShhZGRyZXNzIHN0cmluZywgYmFsYW5jZSBpbnQ2NCkgYmFua3R5cGVzLkJhbGFuY2UgewogICAgcmV0dXJuIGJhbmt0eXBlcy5CYWxhbmNlewogICAgICAgIEFkZHJlc3M6IGFkZHJlc3MsCiAgICAgICAgQ29pbnM6IHNkay5Db2luc3sKICAgICAgICAgICAgc2RrLkNvaW57CiAgICAgICAgICAgICAgICBEZW5vbTogIHNkay5EZWZhdWx0Qm9uZERlbm9tLAogICAgICAgICAgICAgICAgQW1vdW50OiBzZGsuTmV3SW50KGJhbGFuY2UpLAogICAgICAgICAgICB9LAogICAgICAgIH0sCiAgICB9Cn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L65-L75"}})],1),e._v(" "),s("li",[s("p",[e._v("Declare default accounts and balances that will be useful for you:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2dpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy90ZXN0dXRpbCZxdW90OwopCgpjb25zdCAoCiAgICBhbGljZSA9IHRlc3R1dGlsLkFsaWNlCiAgICBib2IgICA9IHRlc3R1dGlsLkJvYgogICAgY2Fyb2wgPSB0ZXN0dXRpbC5DYXJvbAopCmNvbnN0ICgKICAgIGJhbEFsaWNlID0gNTAwMDAwMDAKICAgIGJhbEJvYiAgID0gMjAwMDAwMDAKICAgIGJhbENhcm9sID0gMTAwMDAwMDAKKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L19-L28"}})],1),e._v(" "),s("li",[s("p",[e._v("Make your preferred bank genesis state:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBnZXRCYW5rR2VuZXNpcygpICpiYW5rdHlwZXMuR2VuZXNpc1N0YXRlIHsKICAgIGNvaW5zIDo9IFtdYmFua3R5cGVzLkJhbGFuY2V7CiAgICAgICAgbWFrZUJhbGFuY2UoYWxpY2UsIGJhbEFsaWNlKSwKICAgICAgICBtYWtlQmFsYW5jZShib2IsIGJhbEJvYiksCiAgICAgICAgbWFrZUJhbGFuY2UoY2Fyb2wsIGJhbENhcm9sKSwKICAgIH0KICAgIHN1cHBseSA6PSBiYW5rdHlwZXMuU3VwcGx5ewogICAgICAgIFRvdGFsOiBjb2luc1swXS5Db2lucy5BZGQoY29pbnNbMV0uQ29pbnMuLi4pLkFkZChjb2luc1syXS5Db2lucy4uLikKICAgIH0KCiAgICBzdGF0ZSA6PSBiYW5rdHlwZXMuTmV3R2VuZXNpc1N0YXRlKAogICAgICAgIGJhbmt0eXBlcy5EZWZhdWx0UGFyYW1zKCksCiAgICAgICAgY29pbnMsCiAgICAgICAgc3VwcGx5LlRvdGFsLAogICAgICAgIFtdYmFua3R5cGVzLk1ldGFkYXRhe30pCgogICAgcmV0dXJuIHN0YXRlCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L77-L94"}})],1),e._v(" "),s("li",[s("p",[e._v("Add a simple function to prepare your suite with your desired balances:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBzZXR1cFN1aXRlV2l0aEJhbGFuY2VzKCkgewogICAgc3VpdGUuYXBwLkJhbmtLZWVwZXIuSW5pdEdlbmVzaXMoc3VpdGUuY3R4LCBnZXRCYW5rR2VuZXNpcygpKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L96-L98"}})],1),e._v(" "),s("li",[s("p",[e._v("Add a function to check balances from primitives:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBSZXF1aXJlQmFua0JhbGFuY2UoZXhwZWN0ZWQgaW50LCBhdEFkZHJlc3Mgc3RyaW5nKSB7CiAgICBzZGtBZGQsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoYXRBZGRyZXNzKQogICAgc3VpdGUuUmVxdWlyZSgpLk5pbChlcnIsICZxdW90O0ZhaWxlZCB0byBwYXJzZSBhZGRyZXNzOiAlcyZxdW90OywgYXRBZGRyZXNzKQogICAgc3VpdGUuUmVxdWlyZSgpLkVxdWFsKAogICAgICAgIGludDY0KGV4cGVjdGVkKSwKICAgICAgICBzdWl0ZS5hcHAuQmFua0tlZXBlci5HZXRCYWxhbmNlKHN1aXRlLmN0eCwgc2RrQWRkLCBzZGsuRGVmYXVsdEJvbmREZW5vbSkuQW1vdW50LkludDY0KCkpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/keeper_integration_suite_test.go#L100-L106"}})],1)]),e._v(" "),s("p",[e._v("With the preparation done, what does an integration test method look like?")]),e._v(" "),s("h2",{attrs:{id:"anatomy-of-an-integration-suite-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-an-integration-suite-test"}},[e._v("#")]),e._v(" Anatomy of an integration suite test")]),e._v(" "),s("p",[e._v("Now you must add integration tests for your keeper in new files. What does an integration test look like? Take the example of a "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/x/checkers/keeper/msg_server_create_game_test.go#L35-L66",target:"_blank",rel:"noopener noreferrer"}},[e._v("simple unit test"),s("OutboundLink")],1),e._v(" ported to the integration test suite:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("The method has a declaration:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBUZXN0Q3JlYXRlMUdhbWVIYXNTYXZlZCgpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_create_game_test.go#L8"}}),e._v(" "),s("p",[e._v("It is declared as a member of your test suite, and is prefixed with "),s("a",{attrs:{href:"https://github.com/stretchr/testify/blob/v1.7.0/suite/suite.go#L181-L182",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("Test")]),s("OutboundLink")],1),e._v(".")])],1),e._v(" "),s("li",[s("p",[e._v("The "),s("strong",[e._v("setup")]),e._v(" can be done as you prefer, but just like for unit tests you ought to create a helper and use it. Here one exists already:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3VpdGUuc2V0dXBTdWl0ZVdpdGhCYWxhbmNlcygpCmdvQ3R4IDo9IHNkay5XcmFwU0RLQ29udGV4dChzdWl0ZS5jdHgpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_create_game_test.go#L9-L10"}})],1),e._v(" "),s("li",[s("p",[e._v("The "),s("strong",[e._v("action")]),e._v(" is no different from a unit test's action, other than that you get the "),s("code",[e._v("keeper")]),e._v(" or "),s("code",[e._v("msgServer")]),e._v(" from the suite's fields:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3VpdGUubXNnU2VydmVyLkNyZWF0ZUdhbWUoZ29DdHgsICZhbXA7dHlwZXMuTXNnQ3JlYXRlR2FtZXsKICAgIENyZWF0b3I6IGFsaWNlLAogICAgUmVkOiAgICAgYm9iLAogICAgQmxhY2s6ICAgY2Fyb2wsCiAgICBXYWdlcjogICA0NSwKfSkKa2VlcGVyIDo9IHN1aXRlLmFwcC5DaGVja2Vyc0tlZXBlcgo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_create_game_test.go#L11-L17"}})],1),e._v(" "),s("li",[s("p",[e._v("The "),s("strong",[e._v("verification")]),e._v(" is done with "),s("code",[e._v("suite.Require().X")]),e._v(", but otherwise looks similar to the shorter "),s("code",[e._v("require.X")]),e._v(" of unit tests:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3lzdGVtSW5mbywgZm91bmQgOj0ga2VlcGVyLkdldFN5c3RlbUluZm8oc3VpdGUuY3R4KQpzdWl0ZS5SZXF1aXJlKCkuVHJ1ZShmb3VuZCkKc3VpdGUuUmVxdWlyZSgpLkVxdWFsVmFsdWVzKHR5cGVzLlN5c3RlbUluZm97CiAgICBOZXh0SWQ6ICAgICAgICAyLAogICAgRmlmb0hlYWRJbmRleDogJnF1b3Q7MSZxdW90OywKICAgIEZpZm9UYWlsSW5kZXg6ICZxdW90OzEmcXVvdDssCn0sIHN5c3RlbUluZm8pCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_create_game_test.go#L18-L24"}}),e._v(" "),s("p",[e._v("In fact, it is exactly the "),s("a",{attrs:{href:"https://github.com/stretchr/testify/blob/v1.7.0/suite/suite.go#L24",target:"_blank",rel:"noopener noreferrer"}},[e._v("same "),s("code",[e._v("require")]),s("OutboundLink")],1),e._v(" object.")])],1)]),e._v(" "),s("p",[e._v("You have added an integration test that copies an existing unit test. It demonstrates the concept but is of limited additional utility.")]),e._v(" "),s("h2",{attrs:{id:"extra-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extra-tests"}},[e._v("#")]),e._v(" Extra tests")]),e._v(" "),s("p",[e._v("It is time to add extra tests that check money handling by the bank. Before jumping in, as you did in "),s("em",[e._v("play")]),e._v(" unit tests you can add a method that prepares your suite's keeper with a game ready to be played on:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3VpdGUgKkludGVncmF0aW9uVGVzdFN1aXRlKSBzZXR1cFN1aXRlV2l0aE9uZUdhbWVGb3JQbGF5TW92ZSgpIHsKICAgIHN1aXRlLnNldHVwU3VpdGVXaXRoQmFsYW5jZXMoKQogICAgZ29DdHggOj0gc2RrLldyYXBTREtDb250ZXh0KHN1aXRlLmN0eCkKICAgIHN1aXRlLm1zZ1NlcnZlci5DcmVhdGVHYW1lKGdvQ3R4LCAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWV7CiAgICAgICAgQ3JlYXRvcjogYWxpY2UsCiAgICAgICAgUmVkOiAgICAgYm9iLAogICAgICAgIEJsYWNrOiAgIGNhcm9sLAogICAgICAgIFdhZ2VyOiAgIDQ1LAogICAgfSkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L9-L18"}}),e._v(" "),s("p",[e._v("You will call this function from the relevant tests.")]),e._v(" "),s("p",[e._v("For the tests proper, before an action that you expect to transfer money (or not), you can verify the initial position:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKGJhbEFsaWNlLCBhbGljZSkKc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKGJhbEJvYiwgYm9iKQpzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2UoYmFsQ2Fyb2wsIGNhcm9sKQpzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2UoMCwgY2hlY2tlcnNNb2R1bGVBZGRyZXNzKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L59-L62"}}),e._v(" "),s("p",[e._v("After the action you can test the new balances, for instance:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKGJhbEFsaWNlLCBhbGljZSkKc3VpdGUuUmVxdWlyZUJhbmtCYWxhbmNlKGJhbEJvYi00NSwgYm9iKQpzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2UoYmFsQ2Fyb2wsIGNhcm9sKQpzdWl0ZS5SZXF1aXJlQmFua0JhbGFuY2UoNDUsIGNoZWNrZXJzTW9kdWxlQWRkcmVzcykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L71-L74"}}),e._v(" "),s("p",[e._v("How you subdivide your tests and where you insert these balance checks is up to you. You can find examples here for:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_create_game_test.go#L42-L59",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a game"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L56-L75",target:"_blank",rel:"noopener noreferrer"}},[e._v("Playing the first move"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L209-L236",target:"_blank",rel:"noopener noreferrer"}},[e._v("the second move"),s("OutboundLink")],1),e._v(", including "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L308-L315",target:"_blank",rel:"noopener noreferrer"}},[e._v("up to a resolution"),s("OutboundLink")],1),e._v(". You can also "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L129-L164",target:"_blank",rel:"noopener noreferrer"}},[e._v("check the events"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Failing to play a game because of a failure to pay the wager on the "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L104-L127",target:"_blank",rel:"noopener noreferrer"}},[e._v("first move"),s("OutboundLink")],1),e._v(" and the "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/msg_server_play_move_test.go#L238-L269",target:"_blank",rel:"noopener noreferrer"}},[e._v("second move"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/end_block_server_game_test.go#L10-L30",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forfeiting a game"),s("OutboundLink")],1),e._v(", including when "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/end_block_server_game_test.go#L32-L60",target:"_blank",rel:"noopener noreferrer"}},[e._v("there has been one move played"),s("OutboundLink")],1),e._v(" or "),s("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/end_block_server_game_test.go#L185-L222",target:"_blank",rel:"noopener noreferrer"}},[e._v("two"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"what-happened-to-the-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-happened-to-the-events"}},[e._v("#")]),e._v(" What happened to the events?")]),e._v(" "),s("p",[e._v("With the new tests, you may think that the events are compromised. For instance, the event type "),s("code",[e._v('"transfer"')]),e._v(" normally comes with three attributes, but when the bank has made two transfers the "),s("code",[e._v('"transfer"')]),e._v(" event ends up with 6 attributes. This is just the way events are organized: per type, with the attributes piled in.")]),e._v(" "),s("p",[e._v("When checking emitted events, you need to skip over the attributes you are not checking. You can easily achieve that with "),s("RouterLink",{attrs:{to:"/tutorials/4-golang-intro/5-arrays.html"}},[e._v("Go slices")]),e._v(".")],1),e._v(" "),s("p",[e._v("For instance, here "),s("code",[e._v("transferEvent.Attributes[6:]")]),e._v(" discards the first six attributes:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHJhbnNmZXJFdmVudCA6PSBldmVudHNbNl0Kc3VpdGUuUmVxdWlyZSgpLkVxdWFsKHRyYW5zZmVyRXZlbnQuVHlwZSwgJnF1b3Q7dHJhbnNmZXImcXVvdDspCnN1aXRlLlJlcXVpcmUoKS5FcXVhbFZhbHVlcyhbXXNkay5BdHRyaWJ1dGV7CiAgICB7S2V5OiAmcXVvdDtyZWNpcGllbnQmcXVvdDssIFZhbHVlOiBjYXJvbH0sCiAgICB7S2V5OiAmcXVvdDtzZW5kZXImcXVvdDssIFZhbHVlOiBjaGVja2Vyc01vZHVsZUFkZHJlc3N9LAogICAge0tleTogJnF1b3Q7YW1vdW50JnF1b3Q7LCBWYWx1ZTogJnF1b3Q7OTBzdGFrZSZxdW90O30sCn0sIHRyYW5zZmVyRXZlbnQuQXR0cmlidXRlc1s2Ol0pCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/integration-tests/tests/integration/checkers/keeper/end_block_server_game_test.go#L264-L270"}}),e._v(" "),s("h2",{attrs:{id:"debug-your-suite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-your-suite"}},[e._v("#")]),e._v(" Debug your suite")]),e._v(" "),s("p",[e._v("You learned in a "),s("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/3-stored-game.html"}},[e._v("previous section")]),e._v(" how to launch a test in debug mode. It is still possible to do so when using a suite. Depending on the versions of your Go installation and your Visual Studio Code, you can launch it in two ways:")],1),e._v(" "),s("ol",[s("li",[s("p",[e._v("Right-click on the arrow to the left of the suite's runner "),s("code",[e._v("func TestCheckersKeeperTestSuite")]),e._v(":")]),e._v(" "),s("p",[s("tm-image",{attrs:{src:"/hands-on-exercise/2-ignite-cli-adv/images/go_test_debug_suite.png"}})],1),e._v(" "),s("HighlightBox",{attrs:{type:"note"}},[s("p",[e._v("In this case, you can only launch debug for "),s("strong",[e._v("all")]),e._v(" of the suite's test methods and not just a single one (as is possible with a simple test).")])])],1),e._v(" "),s("li",[s("p",[e._v("Right-click on the arrow to the left of the separate test of the suite:")]),e._v(" "),s("p",[s("tm-image",{attrs:{src:"/hands-on-exercise/2-ignite-cli-adv/images/go_test_debug_suite_test.png"}})],1),e._v(" "),s("HighlightBox",{attrs:{type:"note"}},[s("p",[e._v("This option may not be available. If being able to debug only a few tests at a time is important to you, a solution is to create more granular suites, for example using one or more test suites per file and falling back on the first option.")])])],1)]),e._v(" "),s("p",[e._v("With this you have tested your wager payments in a way more realistic that unit tests and mocks.")]),e._v(" "),s("HighlightBox",{attrs:{type:"synopsis"}},[s("p",[e._v("To summarize, this section has explored:")]),e._v(" "),s("ul",[s("li",[e._v("How to prepare your code so as to accommodate integration tests.")]),e._v(" "),s("li",[e._v("How an integration test is built, and what is a test suite.")]),e._v(" "),s("li",[e._v("How to add simple integration tests and helpers.")]),e._v(" "),s("li",[e._v("How to add meaningful integration tests and account for how the events are emitted.")]),e._v(" "),s("li",[e._v("How to debug your integration tests.")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);