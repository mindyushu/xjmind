interface CoreWasm {
    exports:{
        multiply(a: number, b: number): number;
    }
}
declare const wasm: CoreWasm;