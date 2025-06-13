// oxlint-disable no-default-export
// oxlint-disable no-anonymous-default-export
// @ts-check
import eslint from "@eslint/js";
// import oxlint from "eslint-plugin-oxlint";
import tseslint from "typescript-eslint";

const ts_XXXX = tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        ignores: [
            "node_modules",
        ],
        rules: {},
    },
);

export default [
    ...ts_XXXX, // other plugins
    // ...oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
];
