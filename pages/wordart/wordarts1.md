---
title: Wordart Page 1
lastUpdated: true
prev:
    text: 'Wordart Home'
    link: '/pages/wordart'
next:
    text: 'Wordart Page 2'
    link: '/pages/wordart/wordarts2'
---
<script setup>
import MySwitchAppearance from "/.vitepress/theme/components/MySwitchAppearance.vue";

// import Npfo from "/src/wordart/npfo_blocky.svg?skipsvgo";
import MeatCoding from "/src/wordart/meatcoding_trans.svg?skipsvgo";
import MirVeln from "/src/wordart/mir_veln_trans.svg?skipsvgo";
// import TheseColors from "/src/wordart/thesecolors_trans_dwc.svg?skipsvgo";
// import OntarioLomg from "/src/wordart/ontario_lomg.svg?skipsvgo";
import OntarioRainbow from "/src/wordart/ontario_rainbow_border_badge.svg?skipsvgo";
import Luddites2 from "/src/wordart/luddites2.svg?skipsvgo";
import TransPpl from "/src/wordart/trans_people_always.svg?skipsvgo";
</script>

# {{ $frontmatter.title }}


Here's a bunch of ascii wordart I've made with various[^1] command-line tools. Most look best on dark backgrounds.

<MySwitchAppearance />

[^1]: [cfonts](https://github.com/dominikwilkowski/cfonts), [figlet](https://figlet.org), [pyfiglet](https://github.com/pwaller/pyfiglet), [blahaj](https://codeberg.org/GeopJr/BLAHAJ), [gay](https://github.com/ms-jpq/gay), [boxen](https://github.com/sindresorhus/boxen), [lolcrab](https://github.com/mazznoer/lolcrab), [terminal-svg](https://github.com/russmckendrick/terminal-svg), [ascii-banner](https://ascii-banner.com/), [neovim](https://neovim.io), and more!

<Luddites2 aria-label="The Luddites were right" />

<TransPpl  aria-label="Trans people have always existed" />

<MirVeln aria-label="Yiddish block letters: Mir veln zey iberleben" />[^2]
[^2]: Yiddish slogan that means "we will outlive them."


<MeatCoding aria-label="Better living through meatcoding" />[^3]
[^3]: Meatcoding is the opposite of vibecoding. As in, using your brainmeats and not a chatbot to write the code.


<OntarioRainbow aria-label="Her name is Lake Ontario" />[^4]
[^4]: Contrary to what a certain American president thinks, one does not simply unilaterally rename geographical features by executive order. And no one is required to obey such an order, not even Google Maps. See also: Denali and the Gulf of Mexico.

<style module>
svg {
    @apply mySvg;
    font-family: "Victor Mono" !important;
}
</style>
