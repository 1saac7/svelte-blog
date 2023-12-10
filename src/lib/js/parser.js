import fs from 'fs'
import unified from 'unified'
import yaml from 'js-yaml'
import dayjs from 'dayjs'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remark2rehype from 'remark-rehype'
import remarkMath from 'remark-math'
import frontmatter from 'remark-frontmatter'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import rehypeMathjax from 'rehype-mathjax'

let parser = unified()
    .use(parse)
    .use(gfm)
    .use(remarkMath)
    .use(frontmatter, ['yaml'])

let runner = unified()
    .use(remark2rehype)
    .use(rehypeMathjax)
    .use(rehypeStringify)
    .use(rehypeHighlight, { subset: false })

export function process(filename) {
    let metadata = null

    if (!fs.existsSync(filename)) {
        metadata = {
            title: 'Error',
            error: '404',
        }
        return { metadata }
    }

    let tree = parser.parse(fs.readFileSync(filename))
    if (tree.children.length > 0 && tree.children[0].type == 'yaml') {
        metadata = yaml.load(tree.children[0].value)
        tree.children = tree.children.slice(1, tree.children.length)
        if ('date' in metadata) {
            metadata.date = dayjs(metadata.date).format('MM/DD/YY')
            metadata.date2 = dayjs(metadata.date).format('MMM D, YYYY')
        }
    }
    let content = runner.stringify(runner.runSync(tree))
    if (!metadata || !('date' in metadata)) {
        metadata = {
            title: 'Missing Frontmatter! Expected at least a title and a date!',
            date: '?',
        }
        content = 'Missing Frontmatter! Expected at least a title and a date!'
    }
    return { metadata, content }
}
