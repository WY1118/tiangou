module.exports = {
    devServer: {
        proxy: {
            "/api": {
                "target": "https://midway.51tiangou.com",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/api": ""
                }
            }
        }
    }
}