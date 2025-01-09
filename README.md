# Tailwind CSS Arbitrary Value Unit Misunderstanding

This repository demonstrates a common, yet easily overlooked, error in using Tailwind CSS:  the incorrect application of units within arbitrary value classes.  Specifically, the issue involves using units like `px` directly within classes such as `w-100px`.

Tailwind's arbitrary value feature allows for dynamic sizing, but it doesn't parse unit suffixes in the same way as standard CSS. This example highlights this behavior and provides a correct solution.

## Bug

The `bug.js` file (or equivalent) contains code that attempts to set the width of a div to 100 pixels using an arbitrary value.  This approach is incorrect and results in the element not having the expected width.

## Solution

The `bugSolution.js` file demonstrates the corrected approach. Instead of `w-100px`, it utilizes standard Tailwind utility classes or uses CSS variables that enable pixel specification.