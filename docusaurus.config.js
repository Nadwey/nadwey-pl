// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

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
                    {
                        type: "doc",
                        position: "left",
                        docId: "my-projects",
                        label: "My projects",
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
