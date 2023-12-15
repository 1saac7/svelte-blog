---
title: 📄 More info about this site
date: 2023-12-14
---

# More info about this site

Test pages:

-   [Basic test](/blog/test-basic)
-   [Long test](/blog/test-long)
-   [Code test](/blog/test-code)

Site source code license: [MIT](https://opensource.org/license/mit/)

Content license: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

CSS based on [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

Markdown parser based on [svelteland/svelte-kit-blog-demo](https://github.com/svelteland/svelte-kit-blog-demo)

Font is [Github Monaspace](https://monaspace.githubnext.com)

Project structure:

```
src
├── app.html
├── lib
│   ├── components
│   │   ├── About.svelte
│   │   ├── Footer.svelte
│   │   └── Posts.svelte
│   ├── github-markdown.css
│   └── js
│       └── parser.js
├── posts
│   └── test.md
└── routes
    ├── +error.svelte
    ├── +layout.svelte
    ├── +page.server.js
    ├── +page.svelte
    └── blog
        └── [slug]
            ├── +page.server.js
            └── +page.svelte
```

Markdown post frontmatter format:

| Key                 | Default value | Notes                                     |
| :------------------ | :-----------: | :---------------------------------------- |
| `title`             |      NA       | Necessary                                 |
| `date`              |      NA       | Necessary                                 |
| `hidden`            |    `False`    | Set to `True` to hide post from home page |
| `hide-publish-date` |    `False`    | Set to `True` to hide publish date        |

Feel free to use, modify, upgrade, and share this project. To deploy, copy the [repo](https://github.com/1saac7/svelte-blog) and follow the instruction from [SvelteKit Docs](https://kit.svelte.dev/docs/introduction).
