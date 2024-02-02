// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Nadwey",
    tagline: "Nadwey's website",
    url: "https://nadwey.pl",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Nadwey", // Usually your GitHub org/user name.
    projectName: "nadwey.pl", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                blog: {
                    showReadingTime: true,
                    postsPerPage: 1,
                },
                docs: false,
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "nadwey.pl",
                logo: {
                    src: "img/nadwey.png",
                },
                items: [
                    { to: "/blog", label: "Blog", position: "left" },
                    // {
                    //     type: "doc",
                    //     position: "left",
                    //     docId: "my-projects",
                    //     label: "My projects",
                    // },
                ],
            },
            prism: {
                theme: prismThemes.vsLight,
                darkTheme: prismThemes.vsDark,
            },
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
                respectPrefersColorScheme: false,    
            },
        }),

    markdown: {
        format: "detect",
    },
};

module.exports = config;
