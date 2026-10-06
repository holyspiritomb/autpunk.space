---
title: Mass Surveillance
outline: deep
lastUpdated: true
prev:
    text: 'Resources'
    link: './index'
next: false
---
# {{ $frontmatter.title }} <Badge>under construction</Badge>

<!-- ## Digital surveillance -->
<!---->
<!-- ### Basics -->
<!---->
<!-- The Electronic Frontier Foundation maintains [a very good primer on digital security](https://ssd.eff.org/module-categories/basics). It teaches: -->
<!---->
<!-- - How to create good passwords (a good password is strong *and* memorable) -->
<!-- - How full-disk encryption works on computers and phones -->
<!-- - How end-to-end message encryption works and how to decide if a program offering it is secure -->
<!-- - How to develop your personal threat model -->

## DeFlock

Website: [DeFlock.org](https://deflock.org/)

The DeFlock project is about mapping the locations of ALPRs[^1] and is named for Flock, a company that manufactures them. Flock is not the only manufacturer whose ALPRs the project maps, but it's one of the most popular in the U.S. Anyone can submit camera location data to DeFlock to add to their map.

[^1]: Automatic License Plate Readers.

Per DeFlock:

::: details What Are ALPRs?
Automated License Plate Readers (ALPRs or LPRs) are AI-powered cameras that capture and analyze images of **all passing vehicles**, storing details like your car's **location, date, and time**. They also capture your car's **make, model, color**, and **identifying features** such as dents, roof racks, and bumper stickers, often turning these into **searchable data points**.

These cameras collect data on millions of vehicles **regardless of whether the driver is suspected of a crime**. These systems are marketed as indispensable tools to fight crime, but they ignore the powerful tools police already have to track criminals, such as cell phone location data, **creating a loophole that doesn't require a warrant**. [^2]
:::

[^2]: DeFlock homepage, accessed 3 October 2026.

What makes ALPRs substantially different from, say, a decade-old speed-limit-enforcing camera on I-95 in Virginia[^3]? The speed cameras in Virginia use high-speed photography to measure a vehicle's speed and don't store images of vehicles that aren't exceeding the limit. The speed cameras exist solely to photograph vehicles that are actually going Too Fast and to send speeding tickets to the vehicle owners by mail. ALPRs are live-feed video and keep data on every vehicle they record, without limit to retention. Virginia has to destroy all speed-camera data older than 21 days:

[^3]: This is not to say that speed-limit cameras aren't problematic. They make travel through Virginia on I-95 annoying, and constantly having to glance at the speedometer to ensure you're not going above 55 MPH is probably not great for keeping focus on the road. I can't drive because of :sparkles: anxiety :sparkles: so I'm conjecturing based on my experiences as a passenger. But I don't think speed cameras like Virginia's are evil.

::: details Text from Virginia Code
Information collected under this section pertaining to a specific violation shall be purged and not retained 21 days after the date of its capture in such a manner that such data is destroyed and not recoverable by either a private vendor or the law-enforcement agency, except that when a summons is issued for a violation, such information may be retained until the collection of any civil penalties or the final disposition of any civil matter related to the information. [^4]
:::

[^4]: [Code of Virginia, § 46.2-882.1](https://law.lis.virginia.gov/vacode/title46.2/chapter8/section46.2-882.1/), subsection I. Accessed 2026-10-03.

Virginia doesn't want to make it a secret that the speed cameras are there either:

::: details Text from Virginia Code
> (Effective until July 1, 2027) A conspicuous sign shall be placed within 1,000 feet of any school crossing zone, highway work zone, high-risk intersection segment, safety red zone, or National Park highway at which a photo speed monitoring device is used, indicating the use of the device. [...] At least two conspicuous signs shall be placed from any direction within 1,000 feet of any school crossing zone, highway work zone, high-risk intersection segment, safety red zone, or National Park highway at which a photo speed monitoring device is used, indicating the use of the device. [^5]
:::

[^5]: [Code of Virginia, § 46.2-882.1](https://law.lis.virginia.gov/vacode/title46.2/chapter8/section46.2-882.1/), subsection J. Accessed 3 October 2026.

Virginia wants you to know you're being recorded! Because knowing a speed camera is there does actually make people slow down! ALPR operators, by contrast, generally don't want you to know the cameras are there. Though he's since retracted the statement, Flock Safety's CEO Garrett Langley once described the DeFlock project as "terroristic"[^6] for wanting the public to know where his company's cameras are. As far as I can tell, he didn't retract his derogatory comparison of DeFlock to "Antifa"[^7], but anyone who says "antifa" like it's a bad thing has some suspect politics. What a weird little guy.

[^6]: [Flock CEO Apologizes For Calling Activists ‘Terrorists’](https://www.forbes.com/sites/thomasbrewster/2026/07/17/flock-ceo-sorry-for-labelling-activists-terrorists/) 2026-07-17, [AI Startup Flock Thinks It Can Eliminate All Crime In America](https://www.forbes.com/sites/thomasbrewster/2025/09/03/ai-startup-flock-thinks-it-can-eliminate-all-crime-in-america/) 2025-09-05, both accessed 3 October 2026.

[^7]: The idea that antifa is an official organization with official leadership and governance is also ridiculous. Antifa isn't a corporation or a secret club or an HOA. It's an idea.

Also fun facts: ALPRs might misidentify license plate characters regularly, so you could be arrested for your lawfully operated vehicle being misidentified as one involved in a crime[^8]. Cops have also used ALPRs for stalking[^9] and abortion surveillance[^10]. And the data we have on ALPRs doesn't show that they're actually helpful at solving crimes[^11]. Speed-limit enforcement via less-creepy high-speed cameras that are made obvious to drivers, though? Those seem to be pretty good at making drivers slow down[^12], even if it's only to avoid getting a speeding ticket.

[^8]: ["Flock misread license plates in 71% of the alerts it sent to police in one California town"](https://www.businessinsider.com/flock-camera-misread-license-plate-reader-california-roseville-police-2026-7). Business Insider. 2026-07-31, Accessed 3 October 2026.

[^9]: Koebler, Jason (June 10, 2026). ["Cops Keep Getting Arrested for Using Flock to Stalk People"](https://web.archive.org/web/20260610134308/https://www.404media.co/cops-keep-getting-arrested-for-using-flock-to-stalk-people/). 404 Media. Accessed 3 October 2026.

[^10]: Maass, Dave; Alajaji, Rindala (October 7, 2025). ["Flock Safety and Texas Sheriff Claimed License Plate Search Was for a Missing Person. It Was an Abortion Investigation"](https://www.eff.org/deeplinks/2025/10/flock-safety-and-texas-sheriff-claimed-license-plate-search-was-missing-person-it). Electronic Frontier Foundation. Accessed 3 October 2026.

[^11]: Reilly, Steve; Schecter, Anna (September 30, 2026). [Flock's CEO claims its tech "solved" 1 million crimes last year. The company's own methodology undercuts that claim](https://www.cbsnews.com/news/flocks-ceo-claims-its-tech-solved-1-million-crimes-data-shows-otherwise/). CBS News. Accessed 3 October 2026.

[^12]: Eduardo Cesar Amancio, Tatiana Maria Cecy Gadda, Matheus David Inocente Domingos, Jorge Tiago Bastos, Gabriela da Costa Bonetti, Sara Maria Pinho Ferreira, Anelise Schmitz, Oscar Oviedo-Trespalacios. Effectiveness of speed cameras in reducing speed: a systematic review. Accident Analysis & Prevention, Volume 231, 2026, 108488. ISSN 0001-4575, [https://doi.org/10.1016/j.aap.2026.108488](https://www.sciencedirect.com/science/article/pii/S0001457526000977).

### What You Can Do

1. Contribute to the DeFlock database <Badge>difficulty: low</Badge>
- [DeFlock Android app](https://play.google.com/store/apps/details?id=me.deflock.deflockapp)
- [DeFlock iOS app](https://apps.apple.com/us/app/deflock-me/id6752760780)
- [Colonel Panic](https://colonelpanic.tech) sells some neat gadgets that can help

2. Talk to friends and neighbors about why ALPRs are bad <Badge>difficulty: medium</Badge>

3. Attend local town council and board of education meetings <Badge>difficulty: medium to hard</Badge>
