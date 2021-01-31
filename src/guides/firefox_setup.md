---
layout: guide.njk
pageTitle: My firefox setup
---

# How I configure my Firefox

I do not agree with a lot of the default settings used in Firefox. I tweak it using various methods to customize it to my preference and machine.

## Custom user.js

I made a custom user.js file that can be found in [my repository](https://github.com/Kellegram/my-firefox-setup). It can be added to any firefox profile. Some settings may need to be tweaked depending on your machine or usage. I will outline those settings in the repository README. This user.js was made from the [arkenfox user.js](https://github.com/arkenfox/user.js). 

### Applying the user.js file

1. Download my [user.js](https://raw.githubusercontent.com/Kellegram/my-firefox-setup/master/user.js) file (Right click > Save Page As...).
2. In the URL bar type "about:profiles".
3. For the profile you want to use (or default) click "Open Folder" in the Root Directory section.
4. With the folder open, close Firefox, then paste the user.js you downloaded into the folder.

## Custom policies.json (optional)

Enterprise policies are a way of enforcing browser behaviour in an enterprise environment, but can be used by users to do the same. Unlike group policies, policies.json is cross-platform. I have made my own, just like the user.js file, this one can also be found in [my repository](https://github.com/Kellegram/my-firefox-setup).

<span style="color:red"> **WARNING:**</span> These policies are enforced and are usually not modifiable within Firefox. Make sure you go through the file and learn what it does before you use it!

### Applying the policies.json file

1. Download my [policies.json](https://raw.githubusercontent.com/Kellegram/my-firefox-setup/master/policies.json) (Right click > Save Page As...).
2. Follow instructions for your platform (this is best done if Firefox was never launched, at least on the profile you use):

- Microsoft Windows: create a directory called “distribution” where the firefox.exe file is located and place the file “policies.json” there.
- Apple macOS: create a directory called “distribution” in Firefox.app/Contents/Resources/ and place the file “policies.json” there.
- Linux: create a directory called “distribution” in the directory where Firefox is located and place the file “policies.json” there.

## DNS over HTTPS

You can enable the new DNS over HTTPS in settings, if it's not enabled by default.

1. Click the menu button (3 vertical lines in the top-right) and go to Options.
2. Scroll all the way down to Network Settings and click the "Settings..." button.
3. Scroll down and find "Enable DNS over HTTPS".
4. Click OK.

---

<span style="color:red"> **WARNING:**</span> Default DNS provider is Cloudflare, if you do not trust Cloudflare, use the following link to learn how to change the DNS provider: [Application level DNS](https://wiki.archlinux.org/index.php/Domain_name_resolution#Application-level_DNS)

<span style="color:red"> **WARNING:**</span> Using Application-level DNS methods like this one will bypass your local DNS resolver. Pi-hole and similar blockers will not work!

---

## Extensions I use

There is a set of extensions that I install everywhere, including on Firefox mobile. A very good read about what extensions are good, secure and worth using is in Arkenfox's wiki in the [Extensions](https://github.com/arkenfox/user.js/wiki/4.1-Extensions) section.

- [uBlock Origin](https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/) - The best wide spectrum blocker. Many tweakable options.
- [Bitwarden](https://addons.mozilla.org/en-GB/firefox/addon/bitwarden-password-manager/) - A secure, FOSS password manager with cloud sync. I install it on all my devices.
- [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) Strip URLs of tracking parameters.
- [xBrowserSync](https://addons.mozilla.org/en-US/firefox/addon/xbs/) - Secure syncing of bookmarks across devices. No sign up. Adds a search bar for browsing all bookmarks. Very convenient.
- [Firemonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/) - Light, open source user-script **and** user-style manager.
- [Terms of Service; Didn’t Read](https://addons.mozilla.org/en-US/firefox/addon/terms-of-service-didnt-read/) - Displays ratings for domain's terms & privacy policies, as well as any notable comments from users.
- *[HTTPS Everywhere](https://addons.mozilla.org/en-GB/firefox/addon/https-everywhere/) - A must have nowadays with "Encrypt All Sites Eligible" toggled on. There is almost no cases anymore where you would want to be on an HTTP site.

_* My user.js uses HTTPS-only mode instead now. If using my user.js do NOT get this extension!_

## Resources

- Firefox DNS over HTTPS [guide](https://support.mozilla.org/en-US/kb/firefox-dns-over-https)
- Arkenfox [user.js wiki](https://github.com/arkenfox/user.js/wiki)
