---
layout: layout.liquid
pageTitle: My firefox setup
---
# How I configure my Firefox
I do not agree with a lot of the default settings used in Firefox. I tweak it using various methods to customize it to my preference and machine.

## Custom user.js
I made a custom user.js file that can be found in [my repository](https://github.com/Kellegram/my-user-js). It can be added to any firefox profile. Some settings may need to be tweaked depending on your machine or usage. I will outline those settings in the repository README.

### Applying the user.js file
1. Download my [user.js](https://raw.githubusercontent.com/Kellegram/my-user-js/master/user.js) file (Right click > Save Page As...).
2. In the URL bar type "about:profiles".
3. For the profile you want to use (or default) click "Open Folder" in the Root Directory section.
4. With the folder open, close Firefox, then paste the user.js you downloaded into the folder.

## DNS over HTTPS
You can enable the new DNS over HTTPS in settings, if it's not enabled by default.

1. Click the menu button (3 vertical lines in the top-right) and go to Options.
2. Scroll all the way down to Network Settings and click the "Settings..." button.
3. Scroll down and find "Enable DNS over HTTPS".
4. Click OK.

***
<span style="color:red"> *WARNING:*</span> Default DNS provider is Cloudflare, if you do not trust Cloudflare, use the following link to learn how to change the DNS provider: [Application level DNS](https://wiki.archlinux.org/index.php/Domain_name_resolution#Application-level_DNS)

<span style="color:red"> *WARNING:*</span> Using Application-level DNS methods like this one will bypass your local DNS resolver. Pi-hole and similar blockers will not work!
***

## Extensions I use
_Coming soon..._


## Resources
* Firefox DNS over HTTPS [guide](https://support.mozilla.org/en-US/kb/firefox-dns-over-https)
* Archlinux Wiki [Firefox Tweaks](https://wiki.archlinux.org/index.php/Firefox/Tweaks) page
* Archlinux Wiki [Firefox Privacy](https://wiki.archlinux.org/index.php/Firefox/Privacy) page
* Arkenfox [user.js wiki](https://github.com/arkenfox/user.js/wiki)