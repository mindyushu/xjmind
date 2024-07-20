//go:build js && wasm

package main

import (
	"core"
	"syscall/js"
)

func main() {
	c := make(chan struct{}, 0)
	js.Global().Set("add", js.FuncOf(func(this js.Value, p []js.Value) any {
		sum := core.Add(p[0].Int(), p[1].Int())
		return js.ValueOf(sum)
	}))
	<-c
}
