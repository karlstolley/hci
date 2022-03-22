---
title: Online Store Design
due_date: &deadline 2022-04-21
preview: false
goals:
  - Conduct task analysis & apply the information to user-centered design
  - Design and build a user-centered website applying good principles of design
  - Apply color and typography in web design to optimize the interface
  - Engage in agile, iterative web design and development, supported by version control
  - Write useful, descriptive messages attached to granular commits in a version control system
  - Collaborate effectively in a team setting using Git as well as pull requests on GitHub
  - >
    Communicate effectively in a team setting using a communication portal (Basecamp, Discord,
    Slack, etc.) of your team’s choosing
  - Apply linters to your HTML, CSS, and JavaScript to ensure code quality
  - Configure and run BackstopJS for visual regression testing
  - Configure, build tests, and run NightwatchJS for basic automated UI testing
  - Use git-hooks to ensure passing tests on each commit
  - Use pull requests to ensure test coverage on all team-member contributions
requirements:
  - heading: File Requirements
    requirements:
      - >
        Include multiple (at least three) linked valid, well-formed semantic HTML files
      - >
        Include only one single valid, linted, error-free CSS file called `screen.css`. **Do not**
        create more than one CSS file for your project; all styles should be in the same file. Use
        an `id` value on `<html>` or `<body>` and leverage that in a CSS descendant selector if you
        need a special style on a specific page
      - >
        Use only directory-based URLs containing the default-served `index.html` file, so that you
        can point to, for example, `example.com/order-confirmation/`
  - heading: Source Requirements
    requirements:
      - >
        Prepare all source-code files in UTF-8/Unicode character encoding with Unix-style line
        endings (LF), entabbed with spaces (two spaces per tab)
      - >
        Indent all HTML, CSS, and JavaScript files with spaces, not tabs. Use 2 spaces per level of
        indent. Indent HTML only to show nested tag relationships; indent all CSS style rules inside
        the declaring block, and further indent all rules and blocks inside of your media queries;
        and indent inside of all JavaScript function definitions and multiline object literals
      - >
        Present source code that is hand-written and original (no WYSIWYGs or code-generators, no
        Bootstrap or other off-the-shelf HTML or CSS frameworks); no presentational classes
  - heading: WCAG Requirements
    requirements:
      - >
        Satisfy all applicable Level A success criteria from [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
      - Aim for satisfying all applicable Level AA success criteria
      - >
        Note in your Project Draft and final project memo any Level AAA
        [conformance](https://www.w3.org/TR/WCAG21/#conformance) you've achieved
      - >
        Reference both the [WCAG 2.1 specification](https://www.w3.org/TR/WCAG21/) and the [How to
        Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/) (hint: the Quick
        Reference has customizable filters to help you target the success criteria relevant to your
        Project)
  - heading: Code Quality
    requirements:
      - Make use of both the validators and linters to ensure the quality of both your HTML and CSS
      - >
        Your project repository **must** contain the ITMD 362–style
        [`.htmllintrc`](https://gist.github.com/profstolley/559aac5112928c7c24c628c6305b70b8#file-htmllintrc),
        [`.stylelintrc`](https://gist.github.com/profstolley/559aac5112928c7c24c628c6305b70b8#file-stylelintrc), and
        [`.eslintrc.json`](https://gist.github.com/profstolley/559aac5112928c7c24c628c6305b70b8#file-eslintrc-json)
        linter configuration files
      - >
        Configure and present a suite of visual regression tests using BackstopJS, anchored to the
        viewports set in your CSS media queries
      - >
        Write and present a suite of frontend tests using NightwatchJS
  - heading: HTML Requirements
    requirements:
      - Use only valid, semantic well-formed HTML
      - >
        Use only structural, semantic HTML elements and attributes. Absolutely no table markup,
        break tags, `<span>` or `<div>` tags, or any use of HTML to achieve a particular page
        layout. All layout and design should be handled via CSS.
      - Make use of ARIA attributes whenever possible and necessary
      - >
        Each input element on a form must have an accompanying `<label>` element, with a `for`
        attribute pointing to the `id` value on the input
  - heading: CSS Requirements
    requirements:
      - >
        Open your `screen.css` file with the [ITMD 362 House-Style modified, minified Eric Meyer
        reset CSS
        styles](https://gist.github.com/profstolley/b1f851e061f98fcbc0e41d39adc32847#file-reset-min-css)
        (if loading externally hosted typefaces via an `@import` statement, that must be your first
        line of CSS, before the reset styles)
      - >
        Make use of modern CSS layout modules, including flexbox and CSS grid
      - >
        Use only relative units (em, rem, vw, %) in your CSS; no px, pt, or other absolute units are
        permitted in your CSS, **including in media queries**, which should be calculated as 16px
        ems, regardless of what your actual `html` em-value is
      - Use only `min-width` media queries to enhance your mobile-first styles for larger screens
      - >
        Completely avoid `max-width` media queries, which are **not allowed** (they are not
        mobile-first)
  - heading: JavaScript Requirements
    requirements:
      - >
        The only indication that JavaScript is loaded in your project should be a single `<script>`
        element in your HTML
      - Use JavaScript event-listeners exclusively to intercept user interactions on your project
      - Engage in appropriate feature detection and error handling
      - >
        Make smart use of state classes that reference CSS, rather than embedding style values in
        your JavaScript itself
  - heading: Git Requirements
    requirements:
      - >
        Prepare an upstream team Git repository; use branch protection to ensure code only gets
        added to `main` via reviewed pull requests
      - >
        Fork the upstream Git repository to your own GitHub account, and clone it to your computer
        (see Production Problem 04); make your contributions to the project on feature branches with
        frequent commits and meaningful commit messages that accurately reflect each set of changes
        that you make. Don't forget to provide or update the tests associated with your
        contributions
      - >
        Submit small, targeted features on properly named feature branches as GitHub pull requests
        to your upstream team Git repository
      - >
        Your commit messages should be in sentence case and begin with a verb in the imperative mood
        (e.g., Add..., Update..., Remove...)
      - >
        Include a `.gitignore` file that ignores the test files from BackstopJS; you should commit
        only the reference images—not the images from each test run
      - >
        Include a setup script (e.g., a `scripts/setup` executable) that symbolically links your
        git-hooks scripts
      - >
        Your GitHub repository must contain **only** the files and commits from this project
deliverables:
  - action: >
      Email instructor with your team members and communication hub and GitHub organization
      information.
    description: >
      Organize into teams of 3–4 students for projects Two and Three. Use Basecamp and [the
      Team-Organization thread](https://3.basecamp.com/3058761/buckets/24749467/messages/4757545133)
      to group up.
    details:
      - Teams **must** be at least three students and no more than four students
      - Choose one team member to contact the instructor with the names of your team members
      - >
        In the email, share the URL for your team’s Git organization and your chosen communication
        platform (e.g., a team Basecamp, Slack, Discord, or whatever your team has opted to use)
    deadline: 2022-03-28
  - action: >
      Post your signed team contract as a `CONTRACT.md` file to your team's GitHub repository.
    description: >
      See [the contract writing guidance and
      instructions](https://3.basecamp.com/3058761/buckets/24749467/messages/4757563198) for
      creating and signing the `CONTRACT.md` file on Basecamp.
    deadline: 2022-03-31
  - action: "Post your team’s Project Two draft to the Project Two Drafts board on Basecamp."
    description: >
      Provide links to your team’s project repository and live site on GitHub Pages. Include in your
      post two or three **specific** questions you’d like feedback on.
    deadline: 2022-04-07
  - action: "Email Project Two deliverables to Stolley."
    description: "Your email should include:"
    details:
      - The https:// link to your team’s GitHub repository.
      - The https:// link to your own fork of the team’s GitHub repository.
      - The link to your deployed site, such as on GitHub pages.
      - >
        A 5–7 sentence description of how results from the first round of usability testing (Project
        Three) lead to specific improvements to your Project Two
      - A 4-5 sentence self-critique memo of your project and your progress in class to this point
      - A 2–3 sentence critique of each of your team members and their contributions to this project
    deadline: *deadline
---

You will work in teams of three and four to build a complete online store. You and your team will
begin by selecting the completed Project One of one of your team members, which will be the starter
code for this project.

You will then create a single-page online store, listing at least twelve (12) products or
services that can be added to a cart. You will also write the structures, styles, and logic for a
cart that can be modified: at the very least, you must enable users to remove items from
the cart.

Your online store must then correctly calculate the total for all items in the cart, as well as add
Illinois-state sales tax (6.25%) and any shipping fees. You will also work, as a group, to refine
the checkout process from your team member's Project One. That will include testing the entire store
and checkout system on actual users (see Project Three, which will overlap with Project Two).

All of your work should be committed alongside accurate, appropriate tests. Tests are especially
consequential for things like your cart's functionality, not to mention ensuring that your checkout
logic correctly calculates the amount of money your users will be charged.
