---
title: DRM
outline: deep
lastUpdated: true
prev:
    text: 'Resources'
    link: './index'
next: false
---
# {{ $frontmatter.title }} <Badge type="warning">under construction</Badge>

DRM is the reason why digital and some physical media is intentionally made difficult to copy. Publishers deliberately encrypt content to restrict the ways the media can be accessed: for ebooks and audiobooks, to require the user to use the publisher's apps, and for physical media to make it harder to pirate. But the fact remains that *I already bought the thing*. I find it deeply insulting that I can't easily back up or copy DVDs and blu-ray discs that I own for lawful use *in my home*, and that I can't just read ebooks I've purchased on any device I own.

:::info
I am required to say for legal reasons that everything on this page is for Educational Purposes Only, and that You Should Not Actually Do It because it violates ebook vendors' terms of service or may be illegal. If you Choose to do any of these things, I am not responsible for that choice, because I Told You Not To.
:::

## Ebook DRM

The easiest way to avoid DRM for ebooks is to purchase ebooks directly from authors that sell DRM-free ebooks.

### Amazon

Before Amazon stopped letting users download files from its website for offline USB transfer to Kindles, it was possible to strip the DRM from the book file via a one-liner on a command line, using a tiny program called `libmobi`[^1] and the serial number of a Kindle like so:

[^1]: [libmobi is on github](https://github.com/bfabiszewski/libmobi) and in several Linux repositories

::: code-group
```bash [azw3 file]
mobidrm -d -s $KINDLE_SERIAL_NUMBER book.azw3
```

```bash [azw file]
mobidrm -d -s $KINDLE_SERIAL_NUMBER book.azw
```
:::

But then Amazon announced they would stop letting users download DRM'ed ebook files via the website for adding to Kindles offline.

BDE Amazon's "Download & Transfer via USB" option. May its memory be for a blessing. 🪦

There do exist tools for decrypting Amazon's `KFX` format, but they require having downloaded the book to your Kindle (my Kindle was very unreliable at quickly downloading books) and for me, they would require running specific versions of old Windows-only binaries on Linux using specific versions of `wine`[^2], which is more work than I'm willing to do.

[^2]: [Wine](https://www.winehq.org/) is a complex compatibility layer for running Windows binaries on Linux. I choose do all my Windows-only stuff on a Windows device because I have access to one.

Migrating from a Kindle Paperwhite to a Kobo Clara Colour was not a decision I made lightly. Before my Paperwhite, I'd had a Kindle Keyboard. So I had a lot of ebooks to go through and either migrate them or say goodbye to them.

For those high-spirited people willing to embark on an Entirely Educational journey with Amazon's labyrinthine DRM, here's a link to peruse: [Dealing with Kindle ebooks in calibre](https://www.mobileread.com/forums/showthread.php?t=361503). Kindles now have firmware that prevents getting the encrypted ebook files off the device at all without jailbreaking it. It most certainly violates Amazon's terms of service in multiple ways to attempt, so I'm sharing this link for Educational Purposes Only.


### Kobo

Kobo's DRM scheme, in the hypothetical event of someone who is not you or me choosing to strip DRM from their purchased Kobo books in order to keep backups, is easier to work with.

Tools one would use:
1. [Calibre ebook library manager](https://calibre-ebook.com/)[^3]
2. [Obok calibre plugin](https://github.com/Satsuoni/DeDRM_tools/releases)
3. Your Kobo eInk device

[^3]: A very good ebook library manager for ebooks without DRM.

#### Installing the tools

::::details How to install Calibre

::: code-group
```bash [linux ~devicon:linux~]
# installs to default location
sudo -v && wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin
```

```bash [linux /opt ~devicon:linux~]
# installs to /opt
sudo -v && wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin install_dir=/opt
```
:::

:::warning

Feel free to examine the shell script file before executing it with sudo. As a matter of safety and security, you really shouldn't trust some random person on the internet telling you to run a shell script with `sudo` if you haven't read the script yourself.

:::

On Windows and macOS, [installers and binaries are provided on Calibre's website](https://calibre-ebook.com/download). If you're using BSD or some esoteric kernel I haven't mentioned, you probably know what you need to do to install a piece of open-source software from examining that page.

::::

::::details How one would install the Obok plugin

:::warning
This is for Educational Purposes Only.
:::

First, hypothetically, one must download [`DeDRM_tools.zip` from Github's releases](https://github.com/Satsuoni/DeDRM_tools/releases) (under the "Assets" area) and unzip it somewhere.

Here's how to extract the contents of a zip archive in a terminal with [`unzip`](https://repology.org/project/unzip/versions), for no particular reason:

```bash
unzip DeDRM_tools.zip -d dedrm
# This will unzip the contents to a folder named 'dedrm'
```

And then:

> Open calibre's Preferences dialog.  Click on the "Plugins" button.  Next, click on the button, "Load plugin from file".  Navigate to the unzipped DeDRM_tools folder, find the file "Obok_plugin.zip".  Click to select the file and select "Open".  Click "Yes" in the "Are you sure?" dialog box. Click the "OK" button in the "Success" dialog box.[^4]

Restarting Calibre will be necessary to complete the install.
::::

[^4]: From [the plugin's Readme](https://github.com/Satsuoni/DeDRM_tools/blob/090ea4dc401aae3d89892ada985f1850330b3b68/obok_plugin_ReadMe.txt)

#### Using the tools

::::details How one would hypothetically use this tool

:::danger
This is the part where I remind you that stripping DRM from ebooks you purchased generally violates the terms of service of their licenses.

DRM is implemented specifically to make accessing your ebook harder, because it makes the money sad if readers aren't locked into the vendor's software and devices.
:::

:::details I promise I'm only reading this for Educational Purposes

1. Open Calibre on your computer.
2. Using a USB cable, connect your Kobo device to your computer running Calibre.
3. When your Kobo asks if you'd like to connect it to a computer, select "Connect."
4. Wait for Calibre to detect your Kobo.
5. Once yoir Kobo has loaded in Calibre, click the "Obok DeDRM" button where you added it to the toolbar.
6. A list of books on the device will pop up. Highlight the books you hypothetically want to decrypt.
7. If you click "OK", the selected books will be decrypted and added to Calibre.



:::

::::


## DVDs

<Badge type="info">Coming soon</Badge>

## Blu-rays

<Badge type="info">Coming soon</Badge>

*[DRM]: Digital Rights Management
*[BDE]: baruch dayan ha'emes
