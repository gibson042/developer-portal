(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{778:function(e,o,g){"use strict";g.r(o);var t=g(1),a=Object(t.a)({},(function(){var e=this,o=e.$createElement,g=e._self._c||o;return g("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[g("h1",{attrs:{id:"concurrency-in-go"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#concurrency-in-go"}},[e._v("#")]),e._v(" Concurrency in Go")]),e._v(" "),g("p",[e._v("Go has built-in concurrency. Concurrency and parallel execution are different things: you need concurrency ("),g("em",[e._v("program structure")]),e._v(") to enable parallel execution; actual parallelism during execution depends on the hardware.")]),e._v(" "),g("p",[e._v("For concurrency, Go offers so-called "),g("em",[e._v("Goroutines")]),e._v(" and "),g("em",[e._v("Channels")]),e._v(".")]),e._v(" "),g("h2",{attrs:{id:"goroutines"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#goroutines"}},[e._v("#")]),e._v(" Goroutines")]),e._v(" "),g("p",[e._v("A "),g("em",[e._v("Gouroutine")]),e._v(" is a concurrent thread managed by the Go runtime.")]),e._v(" "),g("p",[e._v("To call a goroutine use the following:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAogICAgJnF1b3Q7Zm10JnF1b3Q7CiAgICAmcXVvdDt0aW1lJnF1b3Q7CikKCmZ1bmMgZG9Tb21ldGhpbmcoc2l6ZSBpbnQpIHsKICAgIGZvciBpIDo9IDA7IGkgJmx0OyBzaXplOyBpKysgewogICAgICAgIGZtdC5QcmludGxuKGkpCiAgICAgICAgdGltZS5TbGVlcCh0aW1lLlNlY29uZCkKICAgIH0KfQoKZnVuYyBtYWluKCkgewogICAgZ28gZG9Tb21ldGhpbmcoMTApIC8vIGdvIHN0YXRlbWVudCBiZWZvcmUgYSBmdW5jdGlvbiBjcmVhdGVzIGEgZ29yb3V0aW5lCiAgICBnbyBkb1NvbWV0aGluZygxMCkKICAgIHRpbWUuU2xlZXAoMTAqdGltZS5TZWNvbmQpCn0KCg=="}}),e._v(" "),g("HighlightBox",{attrs:{type:"tip"}},[g("p",[g("a",{attrs:{href:"https://go.dev/play/p/6c1vJ2Xz9WB",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),g("OutboundLink")],1),e._v(".")])]),e._v(" "),g("p",[e._v("If you run this program, you will see that both "),g("code",[e._v("doSomething(10)")]),e._v(" functions work concurrently. You can wait with "),g("code",[e._v("time.Sleep(10*time.Second)")]),e._v(" to see this in action.")]),e._v(" "),g("h2",{attrs:{id:"channels"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[e._v("#")]),e._v(" Channels")]),e._v(" "),g("p",[e._v("Go offers "),g("em",[e._v("channels")]),e._v(" for communication between goroutines. Channels may be buffered or unbuffered. You can create an "),g("em",[e._v("unbuffered")]),e._v(" channel with the following:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Y2g6PSBtYWtlKGNoYW4gdHlwZSkK"}}),e._v(" "),g("p",[e._v("You can use this channel to send and receive messages with the "),g("code",[e._v("<-")]),e._v(" operator.")]),e._v(" "),g("p",[g("strong",[e._v("Send to")]),e._v(" channel "),g("code",[e._v("ch")]),e._v(" as follows:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Y2ggJmx0Oy0gdgo="}}),e._v(" "),g("p",[g("strong",[e._v("Read from")]),e._v(" channel "),g("code",[e._v("ch")]),e._v(" as follows:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"diA6PSAmbHQ7LWNoCg=="}}),e._v(" "),g("p",[e._v("Now write an example using channels:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAogICAgJnF1b3Q7Zm10JnF1b3Q7CiAgICAmcXVvdDt0aW1lJnF1b3Q7CikKCmZ1bmMgZG9Tb21ldGhpbmcoc2l6ZSBpbnQsIGMgY2hhbiBpbnQpIHsKICAgIGZvciBpIDo9IDA7IGkgJmx0OyBzaXplOyBpKysgewogICAgICAgIHRpbWUuU2xlZXAoMTAwICogdGltZS5NaWxsaXNlY29uZCkKICAgIH0KICAgIGMgJmx0Oy0gc2l6ZQp9CgpmdW5jIG1haW4oKSB7CiAgICBjIDo9IG1ha2UoY2hhbiBpbnQpCiAgICBnbyBkb1NvbWV0aGluZygxMCwgYykKICAgIGdvIGRvU29tZXRoaW5nKDIwLCBjKQogICAgZ28gZG9Tb21ldGhpbmcoMzAsIGMpCiAgICAKICAgIHgsIHksIHogOj0gJmx0Oy1jLCAmbHQ7LWMsICZsdDstYwogICAgZm10LlByaW50bG4oeCwgeSwgeikKfQo="}}),e._v(" "),g("HighlightBox",{attrs:{type:"tip"}},[g("p",[g("a",{attrs:{href:"https://go.dev/play/p/MYdZRhyG36y",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),g("OutboundLink")],1)])]),e._v(" "),g("p",[e._v("Run this program. What happened?")]),e._v(" "),g("p",[e._v("In this case, you do not need to use "),g("code",[e._v("time.Sleep")]),e._v(" anymore, because sends and receives are blocked until the other side is ready.")]),e._v(" "),g("p",[e._v("To avoid blocking, you can create "),g("em",[e._v("buffered")]),e._v(" channels:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Yzo9IG1ha2UoY2hhbiBpbnQsIDEwMCkK"}}),e._v(" "),g("p",[e._v("When a buffered channel is full, sends to it are blocked. When one is empty, receives from it are blocked.")]),e._v(" "),g("p",[e._v("You can iterate over the values of a channel if it is closed:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAogICAgJnF1b3Q7Zm10JnF1b3Q7CiAgICAmcXVvdDt0aW1lJnF1b3Q7CikKCmZ1bmMgZG9Tb21ldGhpbmcoc2l6ZSBpbnQsIGMgY2hhbiBpbnQpIHsKICAgIGZvciBpIDo9IDA7IGkgJmx0OyBzaXplOyBpKysgewogICAgICAgIHRpbWUuU2xlZXAoMTAwICogdGltZS5NaWxsaXNlY29uZCkKICAgIH0KICAgIGMgJmx0Oy0gc2l6ZQp9CgpmdW5jIGRvQWxsKGMgY2hhbiBpbnQpIHsKICAgIGQ6PSBtYWtlKGNoYW4gaW50KQogICAgZ28gZG9Tb21ldGhpbmcoMTAsIGQpCiAgICBnbyBkb1NvbWV0aGluZygyMCwgZCkKICAgIGdvIGRvU29tZXRoaW5nKDMwLCBkKQogICAgYyAmbHQ7LSAoJmx0Oy1kKQogICAgYyAmbHQ7LSAoJmx0Oy1kKQogICAgYyAmbHQ7LSAoJmx0Oy1kKQogICAgY2xvc2UoYykKfQoKZnVuYyBtYWluKCkgewogICAgYyA6PSBtYWtlKGNoYW4gaW50KQogICAgCiAgICBnbyBkb0FsbChjKQogICAgZm9yIGkgOj0gcmFuZ2UgYyB7CiAgICAgICAgZm10LlByaW50bG4oaSkKICAgIH0KfQo="}}),e._v(" "),g("HighlightBox",{attrs:{type:"tip"}},[g("p",[g("a",{attrs:{href:"https://go.dev/play/p/uYYXtXOO-72",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),g("OutboundLink")],1),e._v(".")])]),e._v(" "),g("p",[e._v("Always close the channel (c) before you iterate over it. If you want to wait for multiple communication operations, Go offers "),g("code",[e._v("select")]),e._v(". This works similar to "),g("code",[e._v("switch")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAogICAgJnF1b3Q7Zm10JnF1b3Q7CiAgICAmcXVvdDt0aW1lJnF1b3Q7CikKCmZ1bmMgZG9Tb21ldGhpbmcoc2l6ZSBpbnQsIGMgY2hhbiBpbnQpIHsKICAgIGZvciBpIDo9IDA7IGkgJmx0OyBzaXplOyBpKysgewogICAgICAgIHRpbWUuU2xlZXAoMTAwICogdGltZS5NaWxsaXNlY29uZCkKICAgIH0KICAgIGMgJmx0Oy0gc2l6ZQp9CgpmdW5jIG1haW4oKSB7CiAgICBjLCBxIDo9IG1ha2UoY2hhbiBpbnQpLCBtYWtlKGNoYW4gaW50KQogICAgam9icyA6PSA1CgogICAgZ28gZnVuYygpIHsKICAgICAgICBmb3IgaSA6PSAxOyBpICZsdDs9IGpvYnM7IGkrKyB7CiAgICAgICAgICAgIGRvU29tZXRoaW5nKGkqMTAsIGMpCiAgICAgICAgfQogICAgICAgIHEgJmx0Oy0gMCAvLyBkb25lCiAgICB9KCkKCiAgICBmb3IgewogICAgICAgIHNlbGVjdCB7CiAgICAgICAgY2FzZSB4IDo9ICZsdDstYzogLy8gaWYgd2UgaGF2ZSBhIHJlc3VsdAogICAgICAgICAgICBmbXQuUHJpbnRsbih4KQogICAgICAgIGNhc2UgJmx0Oy1xOiAvLyBpZiB3ZSBhcmUgZG9uZQogICAgICAgICAgICBmbXQuUHJpbnRsbigmcXVvdDtGaW5pc2hlZCZxdW90OykKICAgICAgICAgICAgcmV0dXJuCiAgICAgICAgZGVmYXVsdDogLy8gaWYgd2UgYXJlIHdhaXRpbmcKICAgICAgICAgICAgZm10LlByaW50KCZxdW90Oy4uLiZxdW90OykKICAgICAgICAgICAgdGltZS5TbGVlcCh0aW1lLlNlY29uZCkKICAgICAgICB9CiAgICB9Cn0K"}}),e._v(" "),g("HighlightBox",{attrs:{type:"tip"}},[g("p",[g("a",{attrs:{href:"https://go.dev/play/p/BExHhvrWp5Z",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),g("OutboundLink")],1),e._v(".")])]),e._v(" "),g("p",[e._v("The default case will run if no other channel is ready.")]),e._v(" "),g("HighlightBox",{attrs:{type:"reading"}},[g("p",[g("strong",[e._v("Further readings:")])]),e._v(" "),g("p",[e._v("Look into Mutexes, which we did not talk about here. This can be important for managing concurrency:")]),e._v(" "),g("ul",[g("li",[g("a",{attrs:{href:"https://hackernoon.com/dancing-with-go-s-mutexes-92407ae927bf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dancing with Go's Mutexes"),g("OutboundLink")],1)]),e._v(" "),g("li",[g("a",{attrs:{href:"https://gobyexample.com/mutexes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go by example"),g("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);o.default=a.exports}}]);