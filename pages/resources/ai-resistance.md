---
title: AI Resistance
description: Resources for opposing generative AI.
outline: deep
lastUpdated: true
prev:
    text: 'Resources'
    link: './index'
next: false
---
# {{ $frontmatter.title }} <Badge>under construction</Badge>

This is in the form of a linkspam until I have enough brainpower to write something more polished, like the [mass surveillance](./mass-surveillance) and [medical procedures](./medical-procedures) pages.

For the purposes of these resources, "AI" refers specifically to LLMs, LLM-powered chatbots and generative AI that outputs images, text or code. I am aware that this is not the whole of AI. The fact remains that "AI" in popular usage refers to these specific uses, and it is the fault of genAI advocates (*not* neoluddites) that "AI" is now synonymous with "plagiarism machine." Legitimate forms of artificial intelligence technology (e.g. machine learning, neural network development, markov chaining) have suffered reputation damage as a result of genAI advocates' propaganda.

## Why?
:::details Why I am against AI
- [These Are the Worst ChatGPT Flyers You've Sent Us](https://www.404media.co/these-are-the-worst-chatgpt-flyers-youve-sent-us/): AI generated flyers are obvious and make your business or event look like you put zero effort into it.
- [How AI Chatbots Are 'Deskilling' Human Empathy](https://www.404media.co/sherry-turkle-artificial-intimacy-podcast/): AI chatbot use can cause your empathy skills^[Empathy is a learned and learnable skill, contrary to what neurotypical autism researchers might tell you.] to atrophy.
- [‘Doom Loop’: OpenAI and Microsoft Admits LLMs Are Destroying the Web and Built on Theft](https://www.404media.co/doom-loop-openai-and-microsoft-admits-llms-are-destroying-the-web-and-built-on-theft/): AI model training is plagiarizing writers and artists, and churning out slop that makes the internet worse.
- [Why AI Music on Spotify Matters](https://sloptracker.org/why): AI generated music is flooding Spotify and it's siphoning money and streams away from human artists.
- [Massive disconnect of power roils largest US electric grid](https://www.reuters.com/business/energy/massive-disconnect-power-roiled-largest-us-electric-grid-2026-07-22/): AI-training data centers are not worth the power consumption they require.
- [AI Companion Mortality Database](https://aimortality.org): A tally of cases of AI use where the chatbot's sycophantic responses contributed to vulnerable users' deaths by suicide.
- [The AI Doomsday Future Is Not Inevitable](https://theintercept.com/2026/09/14/surveillance-tech-ai-military-flock/): Rocco's basilisk isn't real and can't hurt you.
:::

## For webmasters

- [Bot-proofing your website](https://baccyflap.com/res/robots/) is a guide to preventing bots from using your website as training data, as much as is possible. Relies on bots being programmed to honestly identify themselves to hosts they crawl and honor robots.txt directives, which currently is true of the biggest AI bots.

### Badges for your website

- [Not by AI](https://notbyai.fyi/)

### For webmasters who are chaotic: honeypots and tarpits

- [Iocaine](https://iocaine.madhouse-project.org/) poisons crawlers by serving them garbage, preventing scraping of your actual content. Intended to be light on a server's CPU. Written in Rust, can be scripted in Lua, Fennel and Roto.
- [Miasma](https://austin-weeks.github.io/miasma/) poisons AI scrapers' training data by trapping AI crawlers in a slop loop. Written in Rust, Docker image available.
- [Nepenthes](https://zadzmo.org/code/nepenthes/) is a honeypot for AI scrapers that traps them endlessly in markov-chain-generated text that links back to itself. Developer warns of significant CPU load with use, and that any site it's deployed on is likely to disappear from search indices^[Which may be desirable, if you don't want search engines to find your content.]. Written in Lua. Docker image available.

## Operating systems

- [Remove Windows 11 AI](https://github.com/zoicware/RemoveWindowsAI) forces removal of Copilot, Recall and other AI features Microsoft forced you to install on Windows 11 via updates.

## Tips and Tricks

- [Anti-AI Google Search Tips](https://github.com/laylavish/TipsTricksGoogleSearch)

## Browser extensions

- [Slop Evader](https://tegabrain.com/Slop-Evader): Browser extension for date-restricting search results on Google, Reddit, etc to before the release of ChatGPT (November 30, 2022).
- [Slow LLM](https://slowllm.lav.io/): A browser extension that makes LLMs appear to run much more slowly. Useful to install if you want to break your own or a loved one's reliance on AI.

### Blocklists for adblockers

- [Stevo's AI Blocklist](https://github.com/Stevoisiak/Stevos-AI-Blocklist) is "a filter list that hides website features which use Generative AI & content labeled as AI Generated." Works with uBlock Origin and Adguard.
- [just_a_husk's image-search AI Blocklist](https://codeberg.org/just_a_husk/uBlockOrigin-AI-Blocklist): remove AI generated images from image search results. Includes uBlock Origin syntax files (which are supported in Adguard iirc?) and hosts files.

## Detecting AI use

- [SlopTracker](https://sloptracker.org/): A tool to test Spotify tracks.


## Further Reading

- [You Look Like a Thing and I Love You: How Artificial Intelligence Works and Why It’s Making the World a Weirder Place](https://www.janelleshane.com/book-you-look-like-a-thing): a book published in 2019 by AI researcher Janelle Shane about the silly things neural networks produce, and how they work. Good background reading for how generative AI works (and doesn't). Published in a time before LLM chatbots were being forced into everything.
- [Who's Afraid Of The AI Apocalypse?](https://aylataylor.itch.io/whos-afraid-of-the-ai-apocalypse): a zine about AI doomerism and how it functions as marketing for AI.
- [Feed](https://mtanderson.com/books/feed): 2002 cyberpunk YA novel by M.T. Anderson that I first read in the aughts and think about a lot. In the near-future capitalist hellscape world of the novel, everyone receives an internet brain implant called a feed that can't be turned off, through which all manner of news reports, social posts and advertisements are pushed.
- [The A.I. Con: How to Fight Big Tech’s Hype and Create the Future We Want](https://thecon.ai/): a 2026 book about resisting AI hype. I haven't finished reading it yet but I enjoy the authors' podcast [Mystery AI Hype Theater 3000](https://dair-institute.org/maiht3k/).
- Ed Zitron's [AI Hater's Manifesto](https://www.wheresyoured.at/the-ai-haters-manifesto/) is a long essay that details many of the problems with AI, including the way it has caused harm to open-source software communities by coding agents rewriting open-source libraries (with no meaningful changes, only enough not to be detected as plagiarism) without credit instead of importing them.
