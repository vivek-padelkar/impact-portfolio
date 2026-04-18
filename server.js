import("./dist/server/index.js").then((mod) => {
    const port = process.env.PORT || 10000;

    if (mod.default && typeof mod.default.listen === "function") {
        mod.default.listen(port, () => {
            console.log("Server running on port", port);
        });
    } else {
        console.error("Server export not found");
    }
});