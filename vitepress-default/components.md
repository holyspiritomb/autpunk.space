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

### EasySpech

https://github.com/leaonline/easy-speech

<SpeechEasy/>

### useSpeechSynthesis from VueUse

https://vueuse.org/core/useSpeechSynthesis

<UseSpeech />

## Icons via UnoCSS

https://unocss.dev/presets/icons

### The long way

::: info Input
```vue-html
<div class="i-carbon-play-filled"></div>
<div class="i-carbon-logo-vue"></div>
```
:::

::: info Output
<div class="i-carbon-play-filled"></div>
<div class="i-carbon-logo-vue"></div>
:::

### Attributify

https://unocss.dev/presets/attributify

::: info Input

```vue-html
<div i-carbon-play-filled></div>
<div i-carbon-pause-outline-filled></div>
<div i-carbon-stop-filled></div>
<div i-carbon-stop-outline-filled></div>
<div i-carbon-logo-vue></div>
<span i-mdi-pause-circle>pause</span>
<span i-mdi-stop-circle>stop</span>
```
:::

::: info Output
<div i-carbon-play-filled></div>
<div i-carbon-pause-outline-filled></div>
<div i-carbon-stop-filled></div>
<div i-carbon-stop-outline-filled></div>
<div i-carbon-logo-vue></div>
<span i-mdi-pause-circle>pause</span>
<span i-mdi-stop-circle>stop</span>
:::

### Tagify

https://unocss.dev/presets/tagify

::: info Input
```vue-html vue
<i-mdi-play-circle /> <i-mdi-pause-circle /> <i-mdi-stop-circle />

Markdown <i-mdi-language-markdown />
```
:::

::: info Output
<i-mdi-play-circle /> <i-mdi-pause-circle /> <i-mdi-stop-circle />

Markdown <i-mdi-language-markdown />
:::


<div i-devicon-vitejs></div>
<div i-devicon-archlinux></div>
<div i-devicon-react></div>
<div i-devicon-npm></div>
<div i-devicon-vscode></div>
<div i-devicon-vuejs></div>
<div i-catppuccin-vue></div>

## Pizza

<GalaxyPizza/>
