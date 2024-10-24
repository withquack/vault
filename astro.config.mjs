import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  site: "https://vault.quack.host",
  integrations: [
    starlight({
      title: "QuackVault",
      favicon: "/quackhost.ico",
      description:
        "Welcome to the QuackHost knowledge vault, your go-to resource for all things Minecraft. Whether you're a seasoned server administrator, an avid player, or simply curious about the game, QuackVault has something for everyone.",
      logo: {
        light: "./src/assets/mascot-light-quackvault.webp",
        dark: "./src/assets/mascot-dark-quackvault.webp",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/quack-source/quack-vault",
      },
      pagination: false,
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
    markdoc(),
  ],
});
