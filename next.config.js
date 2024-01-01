/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl|.vert|.frag/,
      type: "asset/source",
      exclude: /node_modules/,
      use: ["glslify-loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
