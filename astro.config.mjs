import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://vault.quack.host",
  integrations: [
    starlight({
      title: "QuackVault",
      favicon: "/favicon.svg",
      description:
        "Welcome to the QuackHost knowledge vault, your go-to resource for all things Minecraft. Whether you're a seasoned server administrator, an avid player, or simply curious about the game, QuackVault has something for everyone.",
      logo: {
        light: "./src/assets/mascot-light-quackvault.webp",
        dark: "./src/assets/mascot-dark-quackvault.webp",
        replacesTitle: true,
      },
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/ibm-plex-sans/400.css",
        "@fontsource/ibm-plex-sans/600.css",
      ],
      social: {
        github: "https://github.com/withquack/vault",
      },
      pagination: false,
      head: [
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://cloud.umami.is/script.js",
            "data-website-id": "62ae3417-a60d-4d17-af3e-7187e2c9d8b0",
          },
        },
      ],
      sidebar: [
        {
          label: "Client Portal",
          autogenerate: { directory: "client-portal" },
        },
        {
          label: "Minecraft (Bedrock Edition)",
          autogenerate: { directory: "minecraft/bedrock-edition" },
        },
        {
          label: "Minecraft (Java Edition)",
          autogenerate: { directory: "minecraft/java-edition" },
        },
      ],
    }),
  ],
});
