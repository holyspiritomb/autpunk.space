---
order: 2
title: Libby Userscript
lastUpdated: true
prev:
    text: 'Projects'
    link: '/projects'
next: false
---
# Libby Userscript

* Repository: https://github.com/holyspiritomb/libby-userscript

Do you like knowing when a book on Goodreads or Amazon is available as an ebook or audiobook from your library? Do you use [Libby](https://libbyapp.com) to borrow ebooks and/or audiobooks from your local library? Do you use [Violentmonkey](https://violentmonkey.github.io) or Adguard[^1] to run userscripts on your computer or mobile device? Look no further!

This userscript stores a list of your Libby libraries locally[^2] in order to search for books on Libby whenever you're viewing a book page on Goodreads or Amazon. The advantage of this userscript over a browser addon is that this works on mobile browsers via Adguard's userscript functionality. This userscript is tailored around my own use, which means it's primarily geared toward people with cards at multiple Libby libraries using Vivaldi[^3] and Adguard on an Android device.

My main changes from upstream:
* Added functionality on Amazon
* Made result types more distinct with emojis 📚 🎧
* Made results' libraries more distinct

[^1]: I'm not sponsored by Adguard.
[^2]: Your library list is not transmitted to anyone. Neither the userscript's stored data nor the requests to search Libby's database include card numbers or any information about past or current borrowed items. This is true for my fork and for the upstream userscript.
[^3]: I'm not sponsored by Vivaldi.

## Future goals

* Support functionality on other bookseller sites (Kobo)
* Add graphical settings UI that works via mobile Adguard

## Prior Arts

* Upstream repository: https://github.com/Dylancyclone/goodreads-libby-userscript
