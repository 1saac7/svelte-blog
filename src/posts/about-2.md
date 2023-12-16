---
title: 📄 More info about this site
date: 2023-12-14
---

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

| Key          | Type      | Notes                                                               |
| :----------- | :-------- | :------------------------------------------------------------------ |
| `title`      | `string`  | Necessary, post title                                               |
| `date`       | `boolean` | Necessary, published date                                           |
| `hidden`     | `boolean` | Optional, set to `True` to hide post from home page                 |
| `hide_title` | `boolean` | Optional, set to `True` to hide title at the beginning of a post    |
| `hide_date`  | `boolean` | Optional, set to `True` to hide published date at the end of a post |

Feel free to use, modify, upgrade, and share this project. To deploy, copy the [repo](https://github.com/1saac7/svelte-blog) and follow the instruction from [SvelteKit Docs](https://kit.svelte.dev/docs/introduction).
