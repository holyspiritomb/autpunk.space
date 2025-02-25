---
title: Components
lastUpdated: true
prev:
    link: ./index
    text: VP Resources
next: false
---

# Components and elements <Badge>demo</Badge>

## Badges <Badge type="warning">one badge</Badge> <Badge>two badge</Badge> <Badge type="danger">red badge</Badge> <Badge type="info">blue badge</Badge>

Included in Vitepress by default.

Input:
```vue-html
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
<button>A regular button</button>
<button class="btn">A button by unocss</button>
```

Output:

<VPButton theme="brand" text="brand button" />
<VPButton theme="alt" text="alt button" />

<button>A regular button</button>

## Inputs

```vue-html
<TextInput placeholder="Placeholder text" label="Label"/>
```

<TextInput placeholder="Placeholder text" label="Label"/>

## Speech

<SpeechEasy/>

## Icons via UnoCSS

<div i-carbon-play-filled></div>
<div i-carbon-pause-outline-filled></div>
<div i-carbon-stop-filled></div>
<div i-carbon-stop-outline-filled></div>
<div i-carbon-logo-vue></div>
<div i-mdi-play-circle></div>
<div i-mdi-pause-circle></div>
<div i-mdi-stop-circle></div>
<div i-mdi-language-markdown></div>
<div i-devicon-vitejs></div>
<div i-devicon-archlinux></div>
<div i-devicon-react></div>
<div i-devicon-npm></div>
<div i-devicon-vscode></div>
<div i-devicon-vuejs></div>
<div i-catppuccin-vue></div>
