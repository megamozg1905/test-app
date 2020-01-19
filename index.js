require("@babel/register")({
    presets: ["@babel/preset-env"],
    plugins: [
        [
            "css-modules-transform",
            {
                camelCase: false,
                extensions: [".css", ".scss"],
            },
        ],
        "dynamic-import-node",
    ],
});
require("./src/server");