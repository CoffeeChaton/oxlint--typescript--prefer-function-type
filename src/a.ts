export class CC {
    public foo() {
        //
    }
}

export function FN<T extends CC>(resultClass: { new(): T }): T {
    //                                        ^^^^^^^^^^^^
    //   8:49  error  Type literal only has a call signature, you should use a function type instead  @typescript-eslint/prefer-function-type

    // eslint is match   // https://typescript-eslint.io/rules/prefer-function-type/
    // oxlint not match // https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-function-type.html#typescript-prefer-function-type
    return new resultClass();
}
