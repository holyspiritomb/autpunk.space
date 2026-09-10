---
order: 2
title: Wordart
lastUpdated: true
prev:
    text: 'Home'
    link: '/index'
next: false
---
<script setup>
import NpfoRainbow from "/src/npfo_rainbow_blocky.svg?skipsvgo";
import Npfo from "/src/npfo_blocky.svg?skipsvgo";
import Fiber from "/src/fiber_caps.svg?skipsvgo";
import MeatCoding from "/src/meatcoding_trans.svg?skipsvgo";
import WeWill from "/src/we_will_outlive_them_transf.svg?skipsvgo";
import StopChatbots from "/src/stop_believing_chatbots_trans.svg?skipsvgo";
import MirVeln from "/src/mir_veln_trans.svg?skipsvgo";
import TheseColors from "/src/thesecolors_trans_dwc.svg?skipsvgo";
import Repent from "/src/repent5.svg?skipsvgo";
import OntarioLomg from "/src/ontario_lomg.svg?skipsvgo";
import OntarioRainbow from "/src/ontario_rainbow_border_badge.svg?skipsvgo";
import Luddites2 from "/src/luddites2.svg?skipsvgo";
import TransPpl from "/src/trans_people_always.svg?skipsvgo";
import MySwitchAppearance from "../../.vitepress/theme/components/MySwitchAppearance.vue";
</script>

# {{ $frontmatter.title }}


When I first used MS Office circa 1999, my favorite thing to do was make wordart. I rediscovered the joy of wordart on terminals as a means of visual stimming with Termux[^1] on my phone.

Here's a bunch of ascii wordart I've made with various[^2] command-line tools. Most look best on dark backgrounds.

<MySwitchAppearance />

[^1]: Android app for running a linux terminal emulator
[^2]: [cfonts](https://github.com/dominikwilkowski/cfonts), [figlet](https://figlet.org), [pyfiglet](https://github.com/pwaller/pyfiglet), [blahaj](https://codeberg.org/GeopJr/BLAHAJ), [gay](https://github.com/ms-jpq/gay), [boxen](https://github.com/sindresorhus/boxen), [lolcrab](https://github.com/mazznoer/lolcrab), [terminal-svg](https://github.com/russmckendrick/terminal-svg), [ascii-banner](https://ascii-banner.com/), [neovim](https://neovim.io), and more!

<Luddites2 aria-label="The Luddites were right" />

<TransPpl  aria-label="Trans people have always existed" />

<MirVeln aria-label="Yiddish block letters: Mir veln zey iberleben" />[^3]
[^3]: Yiddish slogan that means "we will outlive them."

<NpfoRainbow aria-label="Nazi punks fuck off" />

<Fiber aria-label="I desire the fibrous nutritive material" />

<MeatCoding aria-label="Better living through meatcoding" />[^4]
[^4]: Meatcoding is the opposite of vibecoding. As in, using your brainmeats and not a chatbot to write the code.

<Repent aria-label="Repent to your weather lords" />[^5]
[^5]: https://weatherishappening.com (epilepsy warning)

<StopChatbots aria-label="Stop believing chatbots" />

<WeWill aria-label="Trans flag colors text: We will outlive them" />

<OntarioRainbow aria-label="Her name is Lake Ontario" />[^6]
[^6]: Contrary to what a certain American president thinks, one does not simply unilaterally rename geographical features by executive order. And no one is required to obey such an order, not even Google Maps. See also: Denali and the Gulf of Mexico.

<style module>
svg {
    @apply mySvg;
    font-family: "Victor Mono" !important;
}
</style>
