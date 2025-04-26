---
layout: post
title: Getting Started with GitHub Pages
author: Your Name
excerpt: Learn how to set up your own blog using GitHub Pages with this step-by-step guide.
---

# Getting Started with GitHub Pages

GitHub Pages provides an excellent platform for hosting static websites, especially blogs. In this post, I'll walk you through setting up your own blog with GitHub Pages.

## Prerequisites

Before we begin, make sure you have:

- A GitHub account
- Basic understanding of Git
- Familiarity with Markdown (though it's easy to learn!)

## Step 1: Create a Repository

First, create a new GitHub repository. If you want your site to be available at `username.github.io`, name your repository exactly that.

## Step 2: Enable GitHub Pages

Go to your repository settings, scroll down to the GitHub Pages section, and select the branch you want to publish from.

## Step 3: Choose a Theme (Optional)

You can select a Jekyll theme directly from the GitHub Pages settings, or you can create your own layouts as shown in this blog.

## Step 4: Create Content with Markdown

Create Markdown files in your repository. For blog posts, they should be placed in the `_posts` directory with filenames in the format:

```
YYYY-MM-DD-title-of-post.md
```

Each Markdown file should begin with front matter, which is a YAML block that sets metadata for the page:

```yaml
---
layout: post
title: Your Post Title
---
```

## Step 5: Commit and Push

After creating your content, commit and push your changes to GitHub. Your site will automatically build and deploy.

## Conclusion

Setting up a blog with GitHub Pages is surprisingly simple, and the combination of Git version control with Markdown content creation makes for an excellent blogging workflow. In future posts, I'll cover more advanced GitHub Pages techniques.

Happy blogging!