---
title: Components
lastUpdated: true
prev:
    link: ./index
    text: VP Resources
next: false
---

# Components <Badge>demo</Badge>

## Badges <Badge type="warning">one badge</Badge> <Badge>two badge</Badge> <Badge type="danger">red badge</Badge> <Badge type="info">blue badge</Badge>

Included in Vitepress by default.

Input:
```vue
Text <Badge>a badge with no type set</Badge>

Text <Badge type="warning">a warning badge</Badge>

Text <Badge type="tip">a tip badge</Badge>

Text <Badge type="info">an info badge</Badge>

Text <Badge type="danger">a danger badge</Badge>

```

Output:

Text <Badge>a badge with no type set</Badge>

Text <Badge type="warning">a warning badge</Badge>

Text <Badge type="tip">a tip badge</Badge>

Text <Badge type="info">an info badge</Badge>

Text <Badge type="danger">a danger badge</Badge>

## Buttons

Input:
```vue template
<VPButton theme="brand" text="brand button" />
<VPButton theme="alt" text="alt button" />
```

Output:

<VPButton theme="brand" text="brand button" />
<VPButton theme="alt" text="alt button" />


## Labels

Provided by `@sirenia/markdown-it-label`. This isn't a vue component but I'm including it here for visual comparison with badges.


Input:
```md
#[important](#ff0000)
```

Output:

#[important](#ff0000)

:::details Under the hood: {open}

```html
<span class="mdi-label mdi-label-text-light" style="background-color: rgb(255, 0, 0)">
    important
</span>
```
:::


::::details Why hex colors only?

Color names don't get interpreted correctly by the vitepress build process, because `#[hi](pink)` just produces:

:::raw
#[hi](pink)
:::

```html
#<a href="./pink.html">hi</a>
```

So hex colors it is.
::::


### I altered these four colors with CSS though

To fit with themes better.

Input:

```md
#[yellow](#ffff00) #[green](#00ff00) #[cyan](#00ffff) #[magenta](#ff00ff)
```

Output:

#[yellow](#ffff00) #[green](#00ff00) #[cyan](#00ffff) #[magenta](#ff00ff)

:::details
```scss[.vitepress/theme/custom.scss]
@use 'pkg:@rose-pine/palette/dist/css/rose-pine.css' as *;
@use 'pkg:@catppuccin/palette/css/catppuccin.css' as *;

/* other stuff */

.mdi-label[style="background-color:rgb(255, 255, 0);"]{
  background-color: var(--rp-gold) !important;
}
.mdi-label[style="background-color:rgb(255, 0, 255);"]{
  background-color: var(--rp-moon-love) !important;
}
.mdi-label[style="background-color:rgb(0, 255, 255);"]{
  background-color: var(--ctp-mocha-sky) !important;
}
.mdi-label[style="background-color:rgb(0, 255, 0);"]{
  background-color: var(--ctp-mocha-green) !important;
}
```
:::
