---
title: More info about this site
date: 2023-12-14
description: A brief summary about the technical details of this Svelte based blogging site, written by Isaac Liang.
hidden: True
hide_date: True
---

This blogging site is built with SvelteKit, it supports Markdown parsing, code syntax highlighting, and LaTeX math expression. Feel free to use, modify, upgrade, and share this project. To deploy, copy the [repo](https://github.com/1saac7/svelte-blog) and follow the instruction from [SvelteKit Docs](https://kit.svelte.dev/docs/introduction).

Site source code license: [MIT](https://opensource.org/license/mit/)

Content license: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

CSS based on [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

Markdown parser based on [svelteland/svelte-kit-blog-demo](https://github.com/svelteland/svelte-kit-blog-demo)

Test pages:

-   [Basic test](/blog/test-basic)
-   [Long test](/blog/test-long)
-   [Short test](/blog/test-short)
-   [Code test](/blog/test-code)

Markdown post frontmatter format:

| Key           | Type        | Notes                                                                              |
| :------------ | :---------- | :--------------------------------------------------------------------------------- |
| `title`       | `string`    | Necessary, post title, also used as SEO (meta tag) if `description` below is empty |
| `date`        | `timestamp` | Necessary, published date                                                          |
| `description` | `string`    | Optional, description for SEO (meta tag)                                           |
| `emoji`       | `string`    | Optional, emoji displayed together with post title on home page                    |
| `hidden`      | `boolean`   | Optional, set to `True` to hide post from home page                                |
| `hide_title`  | `boolean`   | Optional, set to `True` to hide title at the beginning of a post                   |
| `hide_date`   | `boolean`   | Optional, set to `True` to hide published date at the end of a post                |

Project structure:

```
src
├── app.html
├── lib
│   ├── components
│   │   ├── About.svelte
│   │   ├── Footer.svelte
│   │   ├── Head.svelte
│   │   ├── Posts.svelte
│   │   ├── Social.svelte
│   │   └── ThemeSwitch.svelte
│   ├── js
│   │   ├── config.js
│   │   └── parser.js
│   └── styles
│       ├── color.css
│       └── main.css
├── posts
│   └── test.md
└── routes
    ├── +error.svelte
    ├── +layout.svelte
    ├── +page.server.js
    ├── +page.svelte
    ├── blog
    │   └── [slug]
    │       ├── +page.server.js
    │       └── +page.svelte
    ├── manifest.webmanifest
    │   └── +server.js
    └── photo
        └── [slug]
            ├── +page.server.js
            └── +page.svelte

```
