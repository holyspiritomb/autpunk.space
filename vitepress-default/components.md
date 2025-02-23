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
