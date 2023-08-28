(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{783:function(e,t,r){"use strict";r.r(t);var n=r(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"standard-packages-in-go"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#standard-packages-in-go"}},[e._v("#")]),e._v(" Standard Packages in Go")]),e._v(" "),r("p",[e._v("Like other languages, Go offers a lot of useful standard packages. You will look at:")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("fmt")])]),e._v(" "),r("li",[r("em",[e._v("strconv")])]),e._v(" "),r("li",[r("em",[e._v("errors")])])]),e._v(" "),r("h2",{attrs:{id:"fmt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fmt"}},[e._v("#")]),e._v(" fmt")]),e._v(" "),r("p",[r("em",[e._v("fmt")]),e._v(" (format) implements are formatted I/O - you covered a good number of its "),r("em",[e._v("verbs")]),e._v(" in module 1. Now you will see a range of additional useful verbs:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("%%")]),e._v("  for the percent sign")]),e._v(" "),r("li",[r("code",[e._v("%#v")]),e._v(" for the Go-syntax representation")]),e._v(" "),r("li",[r("code",[e._v("%t")]),e._v("  for a boolean; it formats a value as "),r("code",[e._v("true")]),e._v(" or "),r("code",[e._v("false")])]),e._v(" "),r("li",[r("code",[e._v("%b")]),e._v("  for an integer; it formats the integer to its binary representation")]),e._v(" "),r("li",[r("code",[e._v("%c")]),e._v("  for an integer; it formats the integer to its corresponding Unicode character")])]),e._v(" "),r("p",[e._v("If you use an invalid verb, you will get a string beginning with "),r("code",[e._v('"%!"')]),e._v(" and a description.")]),e._v(" "),r("p",[e._v("To write to "),r("code",[e._v("stdout")]),e._v(":")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("func Print(a ...interface{}) (n int, err error)")]),e._v(" formats with default formats.")]),e._v(" "),r("li",[r("code",[e._v("func Println(a ...interface{}) (n int, err error)")]),e._v(" formats with default formats and appends a newline.")]),e._v(" "),r("li",[r("code",[e._v("func Printf(format string, a ...interface{}) (n int, err error)")]),e._v(" formats with given format.")])]),e._v(" "),r("p",[e._v("These three functions return the number of bytes written and any applicable error.")]),e._v(" "),r("p",[e._v("To read from "),r("code",[e._v("stdin")]),e._v(":")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("func Scan(a ...interface{}) (n int, err error)")]),e._v(" parses using default formats. Values are space-separated. Newlines count as spaces.")]),e._v(" "),r("li",[r("code",[e._v("func Scanln(a ...interface{}) (n int, err error)")]),e._v(" parses using default formats and stops at a newline.")]),e._v(" "),r("li",[r("code",[e._v("func Scanf(format string, a ...interface{}) (n int, err error)")]),e._v(" parses using the given format. The verb "),r("code",[e._v("%c")]),e._v(" matches every rune (space, tab, newline, etc.).")])]),e._v(" "),r("p",[e._v("These three functions return the number of items scanned and an error if the count of items parsed is smaller than the count of arguments.")]),e._v(" "),r("p",[e._v("Perhaps you noticed a kind of function declaration we did not speak about: the "),r("em",[e._v("variadic function")]),e._v(" can be called with any number of arguments. You can iterate over the arguments as follows:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyB2YXJpYWRpY0Z1bmN0aW9uKGEgLi4uaW50ZXJmYWNle30pIHsKICAgIGZvciBfLHM6PSByYW5nZSBhIHsKICAgICAgICAvLyBkbyBzb21ldGhpbmcKICAgIH0KfQo="}}),e._v(" "),r("p",[e._v("There are formatting functions on "),r("em",[e._v("io.Writer")]),e._v(" and "),r("em",[e._v("io.Reader")]),e._v(", so we also have:")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("func Fprint(w io.Writer, a...interface{}) (n int, err error)")]),e._v(": same as "),r("code",[e._v("Print")]),e._v(" but writes to "),r("code",[e._v("w")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("func Fprintln(w io.Writer, a...interface{}) (n int, err error)")]),e._v(": same as "),r("code",[e._v("Println")]),e._v(" but writes to "),r("code",[e._v("w")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("func Fprintf(w io.Writer, a...interface{}) (n int, err error)")]),e._v(": same as "),r("code",[e._v("Printf")]),e._v(" but writes to "),r("code",[e._v("w")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("func Fscan(r io.Reader, a...interface{}) (n int, err error)")]),e._v(": same as "),r("code",[e._v("Fscan")]),e._v(" but scans from "),r("code",[e._v("r")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("func Fscanln(r io.Reader, a...interface{}) (n int, err error)")]),e._v(": same as "),r("code",[e._v("Fscanln")]),e._v(" but scans from "),r("code",[e._v("r")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("func Fscanf(r io.Reader, a...interface{}) (n int, err error)")]),e._v(": same as "),r("code",[e._v("Fscanf")]),e._v(" but scans from "),r("code",[e._v("r")]),e._v(".")])]),e._v(" "),r("p",[r("code",[e._v("io.Writer")]),e._v(" is the interface that declares the "),r("code",[e._v("Write")]),e._v(" method. "),r("code",[e._v("io.Reader")]),e._v(" is also an interface and it declares the "),r("code",[e._v("Read")]),e._v(" method.")]),e._v(" "),r("p",[e._v("The functions "),r("code",[e._v("Sprint")]),e._v(", "),r("code",[e._v("Sprintln")]),e._v(", and "),r("code",[e._v("Sprintf")]),e._v(" are similar to "),r("code",[e._v("Print")]),e._v(", "),r("code",[e._v("Println")]),e._v(", and "),r("code",[e._v("Printf")]),e._v(", with the difference that they return a "),r("code",[e._v("string")]),e._v(" instead of writing to "),r("code",[e._v("stdout")]),e._v(".")]),e._v(" "),r("p",[e._v("The functions "),r("code",[e._v("Sscan")]),e._v(", "),r("code",[e._v("Scanln")]),e._v(", and "),r("code",[e._v("Sscanf")]),e._v(" are similar to "),r("code",[e._v("Fscan")]),e._v(", "),r("code",[e._v("Fscanln")]),e._v(", and "),r("code",[e._v("Fscanf")]),e._v(" with the difference that they scan from a "),r("code",[e._v("string")]),e._v(" given as an argument.")]),e._v(" "),r("p",[e._v("The function "),r("code",[e._v("Errorf")]),e._v(" formats according to a format and returns it as an error.")]),e._v(" "),r("HighlightBox",{attrs:{type:"reading"}},[r("p",[r("strong",[e._v("Further readings")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://gobyexample.com/string-formatting",target:"_blank",rel:"noopener noreferrer"}},[e._v("String formatting example"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/go-walkthrough/go-walkthrough-fmt-55a14bbbfc53",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go walkthrough fmt"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://gobyexample.com/regular-expressions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regular expressions example"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://gobyexample.com/json",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON example"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/@as27/a-simple-beginners-tutorial-to-io-writer-in-golang-2a13bfefea02",target:"_blank",rel:"noopener noreferrer"}},[e._v("Io writer interface"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"strconv"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#strconv"}},[e._v("#")]),e._v(" strconv")]),e._v(" "),r("p",[e._v("The package "),r("em",[e._v("strconv")]),e._v(" offers conversions to and from strings of basic data types.")]),e._v(" "),r("h3",{attrs:{id:"convert-from-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#convert-from-string"}},[e._v("#")]),e._v(" Convert from string")]),e._v(" "),r("p",[e._v("Start with an example for using "),r("a",{attrs:{href:"https://golang.org/pkg/strconv",target:"_blank",rel:"noopener noreferrer"}},[e._v("strconv"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCmltcG9ydCAoCiAgICAmcXVvdDtmbXQmcXVvdDsKICAgICZxdW90O3N0cmNvbnYmcXVvdDsKKQpmdW5jIG1haW4oKSB7CiAgICB2MzIgOj0gJnF1b3Q7LTM1NDYzNDM4MiZxdW90OwogICAgaWYgcywgZXJyIDo9IHN0cmNvbnYuUGFyc2VJbnQodjMyLCAxMCwgMzIpOyBlcnIgPT0gbmlsIHsKICAgICAgICBmbXQuUHJpbnRmKCZxdW90OyVULCAldlxuJnF1b3Q7LCBzLCBzKQogICAgfQogICAgaWYgcywgZXJyIDo9IHN0cmNvbnYuUGFyc2VJbnQodjMyLCAxNiwgMzIpOyBlcnIgPT0gbmlsIHsKICAgICAgICBmbXQuUHJpbnRmKCZxdW90OyVULCAldlxuJnF1b3Q7LCBzLCBzKQogICAgfQogICAgdjY0IDo9ICZxdW90Oy0zNTQ2MzQzODI2NzI0MzA1ODMyJnF1b3Q7CiAgICBpZiBzLCBlcnIgOj0gc3RyY29udi5QYXJzZUludCh2NjQsIDEwLCA2NCk7IGVyciA9PSBuaWwgewogICAgICAgIGZtdC5QcmludGYoJnF1b3Q7JVQsICV2XG4mcXVvdDssIHMsIHMpCiAgICB9CiAgICBpZiBzLCBlcnIgOj0gc3RyY29udi5QYXJzZUludCh2NjQsIDE2LCA2NCk7IGVyciA9PSBuaWwgewogICAgICAgIGZtdC5QcmludGYoJnF1b3Q7JVQsICV2XG4mcXVvdDssIHMsIHMpCiAgICB9Cn0K"}}),e._v(" "),r("HighlightBox",{attrs:{type:"tip"}},[r("p",[r("a",{attrs:{href:"https://go.dev/play/p/GXstxF-6XVO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("ul",[r("li",[e._v("The function "),r("code",[e._v("ParseInt(s string, base int, bitSize int) (i int64, err error)")]),e._v(" interprets "),r("code",[e._v("s")]),e._v(" as an integer in base "),r("code",[e._v("base")]),e._v(", from "),r("code",[e._v("2")]),e._v(" to "),r("code",[e._v("36")]),e._v("; and with type "),r("code",[e._v("bitSize")]),e._v(", whereby "),r("code",[e._v("0")]),e._v(" means "),r("code",[e._v("int")]),e._v(", "),r("code",[e._v("8")]),e._v(" means "),r("code",[e._v("int8")]),e._v(", "),r("code",[e._v("16")]),e._v(" means "),r("code",[e._v("int16")]),e._v(", "),r("code",[e._v("32")]),e._v(" means "),r("code",[e._v("int32")]),e._v(", and "),r("code",[e._v("64")]),e._v(" means "),r("code",[e._v("int64")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("ParseUint")]),e._v(" is similar, with the difference that it returns an unsigned integer.")]),e._v(" "),r("li",[e._v("The "),r("code",[e._v("func Atoi(s string) (int, error)")]),e._v(" returns "),r("code",[e._v("ParseInt(s, 10, 0)")]),e._v(" as type "),r("code",[e._v("int")]),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"convert-to-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#convert-to-string"}},[e._v("#")]),e._v(" Convert to string")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("func FormatBool(b bool) string")]),e._v(" returns "),r("code",[e._v('"true"')]),e._v(" or "),r("code",[e._v('"false"')]),e._v(" according to "),r("code",[e._v("b")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("func FormatFloat(f float64, fmt vyte, prec, bitSize int) string")]),e._v(" returns a string representation of "),r("code",[e._v("f")]),e._v(" with format "),r("code",[e._v("fmt")]),e._v(" and with precision "),r("code",[e._v("prec")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("func FormatInt(i int64, base int) string")]),e._v(" returns the string representation of "),r("code",[e._v("i")]),e._v(" in base "),r("code",[e._v("base")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("func FormatUint(i uint, base int) string")]),e._v(" is the same as "),r("code",[e._v("FormatInt")]),e._v(", but it takes a unsigned integer.")]),e._v(" "),r("li",[r("code",[e._v("func Itoa(i int) string")]),e._v(" is shorthand for "),r("code",[e._v("FormatInt(int64(i), 10)")]),e._v(", so it gives a decimal representation of "),r("code",[e._v("i")]),e._v(" as a string.")])]),e._v(" "),r("HighlightBox",{attrs:{type:"reading"}},[r("p",[r("strong",[e._v("Further reading:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://gobyexample.com/string-formatting",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go walkthrough - includes also string operations"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),r("p",[e._v("In Go, errors are values. The convention is that the last return value of a function is the error. This is the entire code of errors package:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29weXJpZ2h0IDIwMTEgVGhlIEdvIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuCiAgLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUKICAvLyBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuCgogLy8gUGFja2FnZSBlcnJvcnMgaW1wbGVtZW50cyBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBlcnJvcnMuCiAgcGFja2FnZSBlcnJvcnMKCiAvLyBOZXcgcmV0dXJucyBhbiBlcnJvciB0aGF0IGZvcm1hdHMgYXMgdGhlIGdpdmVuIHRleHQuCiAgZnVuYyBOZXcodGV4dCBzdHJpbmcpIGVycm9yIHsKICAgICAgcmV0dXJuICZhbXA7ZXJyb3JTdHJpbmd7dGV4dH0KICB9CgogLy8gZXJyb3JTdHJpbmcgaXMgYSB0cml2aWFsIGltcGxlbWVudGF0aW9uIG9mIGVycm9yLgogIHR5cGUgZXJyb3JTdHJpbmcgc3RydWN0IHsKICAgICAgcyBzdHJpbmcKICB9CgogZnVuYyAoZSAqZXJyb3JTdHJpbmcpIEVycm9yKCkgc3RyaW5nIHsKICAgICAgcmV0dXJuIGUucwogIH0K"}}),e._v(" "),r("p",[e._v("You use "),r("code",[e._v("func New(text string) error")]),e._v(" to create an error. An example is as follows:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCmltcG9ydCAoCiAgICAmcXVvdDtlcnJvcnMmcXVvdDsKICAgICZxdW90O2ZtdCZxdW90OwopCmZ1bmMgZGl2KGEsIGIgZmxvYXQ2NCkgKGZsb2F0NjQsIGVycm9yKSB7CiAgICBpZiBiID09IDAgewogICAgICAgIHJldHVybiAtMSwgZXJyb3JzLk5ldygmcXVvdDtjYW4ndCBwZXJmb3JtIGRpdmlzaW9uIGJ5IHplcm8mcXVvdDspCiAgICB9CiAgICByZXR1cm4gYSAvIGIsIG5pbAp9CmZ1bmMgbWFpbigpIHsKICAgIGZvciBpIDo9IDIuOyBpICZndDs9IC0yOyBpID0gaSAtIDAuNSB7CiAgICAgICAgaWYgeCwgZXJyIDo9IGRpdigzLCBpKTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgIGZtdC5QcmludGxuKGVycikKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBmbXQuUHJpbnRmKCZxdW90OzMvJXY9JXZcbiZxdW90OywgaSwgeCkKICAgICAgICB9CiAgICB9Cn0K"}}),e._v(" "),r("HighlightBox",{attrs:{type:"tip"}},[r("p",[r("a",{attrs:{href:"https://go.dev/play/p/k9U_6uCkL1r",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("In this case, "),r("code",[e._v("nil")]),e._v(" means no error. For best practice, you should always check for errors. However, take the time to review the following list, because Go error handling differs from other languages.")]),e._v(" "),r("HighlightBox",{attrs:{type:"reading"}},[r("p",[r("strong",[e._v("Further reading:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://tour.golang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A tour of Go"),r("OutboundLink")],1)])])]),e._v(" "),r("HighlightBox",{attrs:{type:"synopsis"}},[r("p",[e._v("To summarize, this section has explored:")]),e._v(" "),r("ul",[r("li",[e._v("The "),r("strong",[r("em",[e._v("fmt")]),e._v(" (format)")]),e._v(" standard package in increased detail, including a range of useful verbs and function declarations.")]),e._v(" "),r("li",[e._v("The "),r("strong",[r("em",[e._v("strconv")])]),e._v(" package, which offers conversions to and from strings of basic data types.")]),e._v(" "),r("li",[r("strong",[e._v("Error")]),e._v(" values, which by convention are the last return value of a function.")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);