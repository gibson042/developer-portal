(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{804:function(e,o,t){"use strict";t.r(o);var a=t(1),r=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"prepare-and-do-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-and-do-migrations"}},[e._v("#")]),e._v(" Prepare and Do Migrations")]),e._v(" "),t("p",[e._v("Your software is now running, which is good, but perhaps over time, a software upgrade vote proposal is passed. You now need to upgrade your node to the next version. The state may need to migrate too. When the state needs to migrate, it is also said that there are "),t("em",[e._v("breaking changes")]),e._v(". This state migration is the upgrade step that takes most of the time.")]),e._v(" "),t("p",[e._v("You can do this whole process somewhat manually, or use a tool to assist you to do it smoothly and fast. This is not an unreasonable concern, since when you perform an upgrade all nodes are simultaneously down.")]),e._v(" "),t("p",[e._v("The main tool is "),t("a",{attrs:{href:"https://docs.cosmos.network/main/tooling/cosmovisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor"),t("OutboundLink")],1),e._v(". This is a wrapper executable that in turn launches your node as a subprocess. It watches out for when the node stops and drops upgrade information.")]),e._v(" "),t("p",[e._v("Before you upgrade your mainnet, it is good practice to upgrade your testnet(s). You can also use your mainnet state in a temporary testnet to test the computation needs of your state upgrade.")]),e._v(" "),t("h2",{attrs:{id:"set-up-cosmovisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-cosmovisor"}},[e._v("#")]),e._v(" Set up Cosmovisor")]),e._v(" "),t("p",[e._v("Cosmovisor is a piece of software that you need to "),t("a",{attrs:{href:"https://docs.cosmos.network/main/tooling/cosmovisor.html#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("install"),t("OutboundLink")],1),e._v(" on your node computer. Its configuration is done via:")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://docs.cosmos.network/main/tooling/cosmovisor.html#command-line-arguments-and-environment-variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("Environment variables"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.cosmos.network/main/tooling/cosmovisor.html#folder-layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration files and folders"),t("OutboundLink")],1),e._v(" that are polled at intervals and which you prepare by hand or via "),t("a",{attrs:{href:"https://docs.cosmos.network/main/tooling/cosmovisor.html#cosmovisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("a command"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("When starting you can pass Cosmovisor command-line arguments that it will pass on to the wrapped Cosmos chain executable. Typically, you use "),t("code",[e._v("cosmovisor run start")]),e._v(", where "),t("code",[e._v("start")]),e._v(" is the same as in "),t("code",[e._v("myprojectd start")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"the-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-process"}},[e._v("#")]),e._v(" The process")]),e._v(" "),t("p",[e._v("When it launches, Cosmovisor does the following:")]),e._v(" "),t("ol",[t("li",[e._v("Starts and launches your node executable, for, example "),t("code",[e._v("myprojectd")]),e._v(".")]),e._v(" "),t("li",[e._v("Polls regularly for potential upgrade information, for instance in "),t("code",[e._v(".myprojectd/data/upgrade-info.json")]),e._v(".")])]),e._v(" "),t("HighlightBox",{attrs:{type:"note"}},[t("p",[e._v("Note how this file is in the "),t("code",[e._v("data")]),e._v(" folder and created by the "),t("a",{attrs:{href:"https://docs.cosmos.network/main/building-modules/upgrade.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("x/upgrade")]),e._v(" module"),t("OutboundLink")],1),e._v(" when appropriate.")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("When "),t("code",[e._v("upgrade-info.json")]),e._v(" is available, waits for the executable to stop on its own, in effect after it has committed all states at the given block height.")]),e._v(" "),t("li",[e._v("If instructed to by the configuration, downloads the new executable as described in "),t("code",[e._v("upgrade-info.json")]),e._v(". Otherwise looks for it in the configuration folder, for instance "),t("code",[e._v(".myprojectd/cosmovisor/upgrades/<name>/bin")]),e._v(". In this case "),t("code",[e._v("<name>")]),e._v(" is picked from "),t("code",[e._v("upgrade-info.json")]),e._v(" too.")]),e._v(" "),t("li",[e._v("Exchanges the symbolic link to the "),t("code",[e._v("current")]),e._v(" executable for the new one.")]),e._v(" "),t("li",[e._v("Restarts the node.")])]),e._v(" "),t("p",[e._v("When restarting, the node launches its "),t("a",{attrs:{href:"https://docs.cosmos.network/main/core/upgrade.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("in-place migration"),t("OutboundLink")],1),e._v(" process for all modules that have a "),t("a",{attrs:{href:"https://docs.cosmos.network/main/core/upgrade.html#tracking-module-versions",target:"_blank",rel:"noopener noreferrer"}},[e._v("new version"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Downloading an executable is a potential security risk, so although you have the "),t("a",{attrs:{href:"https://docs.cosmos.network/main/tooling/cosmovisor.html#auto-download",target:"_blank",rel:"noopener noreferrer"}},[e._v("choice of doing it"),t("OutboundLink")],1),e._v(" automatically, this is not the default behavior.")]),e._v(" "),t("p",[e._v("Previously, you may have set up your node executable as a service. If you use Cosmovisor, you can in fact replace your node executable in the declaration of your node service. Update its "),t("code",[e._v("/etc/systemd/system/myprojectd.service")]),e._v(" service declaration as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"ini",base64:"W1VuaXRdCkRlc2NyaXB0aW9uPU15IFByb2plY3QgQ2hhaW4gRGFlbW9uCkFmdGVyPW5ldHdvcmstb25saW5lLnRhcmdldAoKW1NlcnZpY2VdClVzZXI9Y2hhaW51c2VyCkV4ZWNTdGFydD0kKHdoaWNoIGNvc21vdmlzb3IpIHJ1biBzdGFydApSZXN0YXJ0PWFsd2F5cwpSZXN0YXJ0U2VjPTMKTGltaXROT0ZJTEU9NDA5NgoKRW52aXJvbm1lbnQ9JnF1b3Q7REFFTU9OX0hPTUU9JEhPTUUvLm15cHJvamVjdGQmcXVvdDsKRW52aXJvbm1lbnQ9JnF1b3Q7REFFTU9OX05BTUU9bXlwcm9qZWN0ZCZxdW90OwpFbnZpcm9ubWVudD0mcXVvdDtEQUVNT05fQUxMT1dfRE9XTkxPQURfQklOQVJJRVM9ZmFsc2UmcXVvdDsKRW52aXJvbm1lbnQ9JnF1b3Q7REFFTU9OX1JFU1RBUlRfQUZURVJfVVBHUkFERT10cnVlJnF1b3Q7CgpbSW5zdGFsbF0KV2FudGVkQnk9bXVsdGktdXNlci50YXJnZXQK"}}),e._v(" "),t("p",[e._v("After which, you can relaunch your node with:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzdWRvIHN5c3RlbWN0bCByZXN0YXJ0IG15cHJvamVjdGQK"}}),e._v(" "),t("h2",{attrs:{id:"upgrade-manually"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-manually"}},[e._v("#")]),e._v(" Upgrade manually")]),e._v(" "),t("p",[e._v("Cosmovisor is here to help you migrate fast. You can still do it "),t("a",{attrs:{href:"https://hub.cosmos.network/main/hub-tutorials/upgrade-node.html#manual-software-upgrade",target:"_blank",rel:"noopener noreferrer"}},[e._v("by hand"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("HighlightBox",{attrs:{type:"tip"}},[t("p",[e._v("If you would like to see how to apply what you've learned, you can go straight to the exercise in "),t("RouterLink",{attrs:{to:"/hands-on-exercise/4-run-in-prod/5-migration-prod.html"}},[e._v("Simulate a migration in production in Docker")]),e._v(".")],1),e._v(" "),t("p",[e._v("More specifically, you can jump to:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/hands-on-exercise/4-run-in-prod/5-migration-prod.html#prepare-checkers-executables"}},[e._v("Prepare checkers executables")]),e._v(", to see how to prepare the before- and after-migration executables.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/hands-on-exercise/4-run-in-prod/5-migration-prod.html#prepare-cosmovisor-executable"}},[e._v("Prepare Cosmovisor executable")]),e._v(", to see how to find the version and compile the executable of Cosmovisor that will work best with your blockchain executable.")],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/hands-on-exercise/4-run-in-prod/5-migration-prod.html#make-an-upgrade-proposal"}},[e._v("Make an upgrade proposal")]),e._v(", to see the migration take place with an upgrade proposal.")],1)])]),e._v(" "),t("HighlightBox",{attrs:{type:"synopsis"}},[t("p",[e._v("To summarize, this section has explored:")]),e._v(" "),t("ul",[t("li",[e._v("The implications of an eventual need to upgrade or migrate a running network, with the attendant necessity of all its nodes being simultaneously down.")]),e._v(" "),t("li",[e._v("How to install and set up "),t("strong",[e._v("Cosmovisor")]),e._v(', a tool used to reduce downtime and improve the smoothness of an upgrade or migration (by comparison with a "manual" process).')]),e._v(" "),t("li",[e._v("How to practice using Cosmovisor by upgrading your testnet(s) before you attempt to upgrade your mainnet.")])])])],1)}),[],!1,null,null,null);o.default=r.exports}}]);