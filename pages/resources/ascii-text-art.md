---
title: ASCII Text Art
lastUpdated: true
prev:
    text: 'Resources'
    link: './index'
next: false
---
# {{ $frontmatter.title }}

This page describes various tools I use for making ASCII art.

## Monospace fonts

In order to make ASCII art you will generally^[There are exceptions to this guideline.] need a monospaced font.

[Programming Fonts](https://www.programmingfonts.org) is a page where you can test-drive a bunch of monospace fonts. If you select "ASCII art" as the sample text, you can see if the font has box-drawing glyphs, which are necessary for correctly displaying a lot of ASCII art.

## ASCII Text Art Tools

[figlet](https://www.figlet.org/) is the original text art generator on Unix-like systems. It is broadly available in basically every Linux distro's repositories.

[pyfiglet](https://pypi.org/project/pyfiglet/) is a Python port of `figlet`, usable as both a library and CLI.

[figlet.js](https://www.npmjs.com/package/figlet) is a Node/JS/TS port of `figlet` and it powers [the figlet generator](/pages/funstuff/figlet) I host.

[figlet-cli](https://www.npmjs.com/package/figlet-cli) is a CLI of `figlet.js`.

The developer of `figlet.js` hosts a [Figlet Font Editor](https://patorjk.com/figlet-editor/) that I've found helpful in testing my edits to figlet fonts.

## Borders

[boxen](https://www.npmjs.com/package/boxen) is a Node/JS library for drawing boxes around text input.

[boxen-cli](https://www.npmjs.com/package/boxen-cli) is a CLI for `boxen` that I use extensively when making wordart.

## Colorizing

[chalk](https://www.npmjs.com/package/chalk) is a Node/JS library for colorizing terminal output. [chalk-cli](https://www.npmjs.com/package/chalk-cli) is its CLI.

[gay](https://pypi.org/project/gay/) is a nice Python CLI to pipe into for applying various pride gradients to the input.

[lolcat (rust rewrite)](https://crates.io/crates/lolcat) is a CLI that applies a rainbow gradient to any input piped into it. It's a Rust rewrite of [the original `lolcat`](https://github.com/busyloop/lolcat), which was written in Ruby.

[lolcrab](https://crates.io/crates/lolcrab) is like `lolcat` but with noise and more gradient presets available.

[blåhaj](https://codeberg.org/GeopJr/BLAHAJ) is a CLI for applying pride flag stripes to input. The default flag is the trans flag, and many presets are available.

## Exporting from terminal

[terminal-svg](https://terminal-svg.dev/) is what I pipe my wordart into in order to generate an SVG.

[terminal-size](https://www.npmjs.com/package/terminal-size) is a Node/JS library for reporting the size of the terminal in columns.

[terminal-size-cli](https://www.npmjs.com/package/terminal-size-cli) is `terminal-size`'s CLI and I use it frequently.

## Editing

For editing text files and SVG, I generally use [neovim](https://neovim.io) with a plugin to colorize HTML and CSS colors.

*[CLI]: command line interface
*[SVG]: scalable vector graphic
