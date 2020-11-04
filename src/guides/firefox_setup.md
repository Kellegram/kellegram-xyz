---
layout: layout.liquid
pageTitle: My firefox setup
---
# How I configure my Firefox
I do not agree with a lot of the default settings used in Firefox. I tweak it using various methods to customize it to my preference and machine.

## Custom user.js
I made a custom user.js file that can be found in [my repository](https://github.com/Kellegram/my-user-js). It can be added to any firefox profile. Some settings may need to be tweaked depending on your machine or usage. I will outline those settings in the repository README.

## DNS over HTTPS
You can enable the new DNS over HTTPS in settings, if it's not enabled by default.
<span style="color:red"> *WARNING: Default DNS provider is Cloudflare, if you do not trust Cloudflare, use the following link to learn how to change the DNS provider:*</span> [Application-level DNS](https://wiki.archlinux.org/index.php/Domain_name_resolution#Application-level_DNS)

<span style="color:red"> *WARNING: Using Application-level DNS methods like this one will bypass your local DNS reolver. Pi-hole and similar blockers will not work!* </span>
---
1. Click the menu button (3 vertical lines in the top-right) and go to Options.
2. Scroll all the way down to Network Settings and click the "Settings..." button.
3. Scroll down and find "Enable DNS over HTTPS".
4. Click OK.

## Extensions I use
_Coming soon..._


## Resources
* Firefox DNS over HTTPS [guide](https://support.mozilla.org/en-US/kb/firefox-dns-over-https)
* Archlinux Wiki [Firefox Tweaks](https://wiki.archlinux.org/index.php/Firefox/Tweaks) page
* Archlinux Wiki [Firefox Privacy](https://wiki.archlinux.org/index.php/Firefox/Privacy) page
* Arkenfox [user.js wiki](https://github.com/arkenfox/user.js/wiki)