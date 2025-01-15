import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import Image from "next/image";
import { GitHubIcon, TwitterXIcon, DiscordIcon } from "@/components/icons";
import SOCIAL_MEDIA_LINKS from "@/content/socialMedia";
import LOGO_FOR_DARK from "@/public/personal/full-white-bg-trans.png";
import LOGO_FOR_LIGHT from "@/public/personal/full-black-bg-trans.png";
import Logo from "@/components/Logo";

const logo = (
  <>
    <Logo name="@farunurisonmez" initials="GV" />
  </>
);

const config: DocsThemeConfig = {
  project: {
    link: SOCIAL_MEDIA_LINKS.github.link,
    icon: <GitHubIcon />,
  },
  chat: {
    link: SOCIAL_MEDIA_LINKS.discord.link,
    icon: <DiscordIcon />,
  },
  docsRepositoryBase: SOCIAL_MEDIA_LINKS.github_docsRepositoryBase.link,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - @farunurisonmez",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title, frontMatter } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? `${SOCIAL_MEDIA_LINKS.website.link}/og.jpeg`
        : `${SOCIAL_MEDIA_LINKS.website.link}/api/og?title=${title}&description=${frontMatter.description}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Gopal Verma's devsite for sharing code, blogs and projects!"
        />
        <meta
          name="og:description"
          content={frontMatter.description ? frontMatter.description : " "}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="farunurisonmez.vercel.app" />
        <meta name="twitter:url" content="https://farunurisonmez.vercel.app" />
        <meta
          name="twitter:description"
          content={frontMatter.description ? frontMatter.description : " "}
        />
        <meta
          name="twitter:title"
          content={title ? title + " – @farunurisonmez" : "@farunurisonmez"}
        />
        <meta
          name="og:title"
          content={title ? title + " – @farunurisonmez" : "@farunurisonmez"}
        />
        <meta property="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="@farunurisonmez" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center">
        <div
          className="flex mt-5 text-xs flex-col justify-center items-center gap-2"
          
        >
          <p
            className="text-gray-900 dark:text-gray-400"
          >
            Build with by 
            <span className="font-bold">
              <a
                href="https://efsoft.works"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-400"
              >
                  &#160;efsoft.works
              </a>
            </span>
          </p>
        </div>
      </div>
    ),
  },
  search: {
    placeholder: "Search for something...",
  },
  navbar: {
    extraContent: <TwitterXIcon />,
  },
  toc: {
    backToTop: true,
    // extraContent: (
    //   <img alt="placeholder cat" src="https://placekitten.com/g/300/200" />
    // ),
  },
};

export default config;