import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "AI stack",
    description: "AI related topics",
    copyright: " This website is copyright 2023 Tomasz Muraszko",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [`gatsby-plugin-typescript`, `gatsby-plugin-sass`],
};

export default config;
