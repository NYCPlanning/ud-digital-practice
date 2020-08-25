## Development Workflow

Run a local development server: from the `site-src` directory, `npx gatsby develop`. If you'd like the site to be available on your LAN, add `-H 0.0.0.0` to the command.

Deploy to GitHub pages: from the `site-src` directory, run `npm run deploy`. 

## To-Do

- Check scaling/responsive behavior for slides on phones/tablets
  - for pages
  - for slides (fix scroll problem)
- Page anchors on slides for permalinks
- Worth it to use `gatsby-remark-images` or would be better to use `gatsby-remark-copy-linked-files`. Styling the former is very time-consuming, advantage is images are auto-optimized...