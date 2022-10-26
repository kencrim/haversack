import path from "path";

module.exports = {
  devtool: "source-map",
  entry: path.join(__dirname, "src/", "module.ts"),
  output: { path: path.join(__dirname, "dist"), filename: "module.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    alias: { "@": path.resolve(__dirname, "src/") },
    modules: ["node_modules"],
    extensions: ["*", ".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
