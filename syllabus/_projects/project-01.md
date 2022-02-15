---
title: Shipping and Payment Form
due_date: &deadline 2022-03-10
preview: false
goals:
  - Conduct task analysis & apply the information to user-centered design
  - Design and build a user-centered website applying good principles of design
  - Apply color and typography in web design to optimize the interface
  - Engage in agile, iterative web design and development, supported by version control
  - Write useful, descriptive messages attached to granular commits in a version control system
  - Apply linters to your HTML, CSS, and JavaScript to ensure code quality
  - Configure and run BackstopJS for visual regression testing
  - Configure, build tests, and run NightwatchJS for basic automated UI testing
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
        Prepare a Git repository with frequent commits and meaningful commit messages that
        accurately reflect each set of changes that you make
      - >
        Your commit messages should be in sentence case and begin with a verb in the imperative mood
        (e.g., Add..., Update..., Remove...)
      - >
        Include a `.gitignore` file that ignores the test files from BackstopJS; you should commit
        only the reference images—not the images from each test run
      - >
        Your GitHub repository must contain **only** the files and commits from this project
deliverables:
  - action: "Post your set of interface sketches to the Project One Sketches board on Basecamp."
    description: >
      Provide a link to your `_sketches/` directory in your repository. Include in your post two
      or three **specific** questions you’d like feedback on.
    deadline: 2022-02-03
  - action: "Respond with substantive comments on at least three other sets of student sketches."
    deadline: 2022-02-10
  - action: "Post your Project One draft to the Project One Drafts board on Basecamp."
    description: >
      Provide links to your project repository and live site on GitHub Pages. Include in your post
      two or three **specific** questions you’d like feedback on.
    deadline: 2022-02-24
  - action: "Respond with substantive comments on at least three other student projects."
    deadline: 2022-03-03
  - action: "Email Project One deliverables to Stolley."
    description: "Your email should include:"
    details:
      - The https:// link to your project’s GitHub repository, which should include your sketches
        in a _sketches directory.
      - The link to your deployed site, such as on GitHub pages.
      - A 4-5 sentence self-critique memo of your project and your progress in class to this point
    deadline: *deadline
---

You will create a compelling, multi-page process that walks a user through payment, billing, and
shipping options to complete the order of a pre-selected set of items in the user’s shopping cart.
The goal of this project is to experiment with patterns of interaction that make it as effortless as
possible for users to complete a purchase, which is not an easy task.

Design for straightforward, engaging entry of personal information. Include friendly, frictionless
client-side tests and alerts for malformed, missing, or incomplete information. And bring a full
suite of validators, linters, and visual regression tests to ensure code quality from your earliest
commits.
