---
slug: /collaborate/github-details
title: About Issues on GitHub
---

The DPI team uses GitHub to track and manage project development. This page gives a basic overview of how non-developers can participate more directly in that process.

## Git versus GitHub

[Git](https://en.wikipedia.org/wiki/Git) is a version-control software used by programmers to track and coordinate code changes. Git*Hub* is a cloud-based hosting platform for git-managed code bases. Besides storing a central instance of the code base, GitHub provides project management tools which integrate directly with the Git change management model. What makes this powerful is that it allows non-programmers to make requests and participate in higher-level project discussions without needing to interact directly with the code.

Again, if you're not making changes to the code base yourself, you won't need to learn Git to participate, but ["Learn Enough Git To Be Dangerous"](https://www.learnenough.com/git-tutorial) is a good tutorial if you're curious.

## About Issues

On GitHub, project management revolves around the concept of **issues**. If you're familiar with how a restaurant kitchen works, an issue is similar to a ticket. When someone on the waitstaff takes a new order from a customer, they write it down on a little piece of paper, which then gets taken to the kitchen where each order is prepared, usually in the order they're received. If a customer orders more food or drinks over the course of a meal, the same ticket gets used to handle these requests as well. In some cases, the ticket ends up being brought back to the customer as a receipt. In any case, tickets and issues are similar in that they 1) document specific work to be done and 2) provide information to different kinds of stakeholders over the course of completing the work.

## Organizing Issues

While food usually gets ordered, cooked, eaten and paid for in a linear sequence, software doesn't always work this way. Because of this, issues carry some additional information that provides opportunity for discussion and allows them to be sorted and rearranged in different views as the project progresses. These are:

- **Comments** - Team members can add comments and edit their own comments within each issue. Use this feature to provide information about the issue itself and discuss/document potential resolutions. Other issues can be referenced by their issue number (if you type #45 in your issue, GitHub will automatically create a link to issue #45). Typing words after a # character will open a drop-down menu where you can see matching issues to link (by clicking). Comments can be plain text or use [markdown](https://en.wikipedia.org/wiki/Markdown) for formatting.
- **Labels** - Any issue can be tagged with Labels. In our project, we have labels for common issue types (bugs, data-related, features) and priority (high, medium, low). Multiple labels are OK. These are mostly used to sort and filter issues in a list view.
- **Projects** - Issues can also be assigned to specific projects. These will then appear in project-specific views and can be arranged by priority there.
- **Milestones** provide a way to assign a temporal goal to sets of issues. We'll be creating a milestone for each two-week development sprint as well as any other major deliverables or deadlines to organize progress toward those goals.
- **Assignees** - last but not least, each issue should be assigned a single github user who's responsible for it. Although you can assign multiple people to the same issue, it's good practice to designate a single source of responsibility for each issue, just like in conventional project managment.

When creating a new issue, provide as much detail as possible and use all applicable means of tagging each one. Planning Labs has a great writeup on Medium outlining how to [write a proper issue](https://medium.com/nyc-planning-digital/writing-a-proper-github-issue-97427d62a20f).

## Closing Issues & Pull Requests

When non-software issues are complete, they should be closed manually with the Close button at the bottom of the issue. Provide a comment indicating what actions resolved the issue for later reference.

If an issue relates directly to a software bug or feature, **Pull Requests** (PRs) provide a mechanism to link issues with a set of code changes, and will be managed by team members working directly on the code base. If you're unsure whether you should close an issue manually or whether it will become part of a PR, ask another member of the team.
