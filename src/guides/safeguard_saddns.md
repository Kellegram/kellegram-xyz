---
layout: guide.njk
pageTitle: How to safeguard your network against Sad DNS
---

# Explaining some terms

---

In this post I will use certain terms that you might be unfamiliar with, therefore I will first provide a brief explanation with sources.

## What is DNS?

[DNS](https://en.wikipedia.org/wiki/Domain_Name_System) stands for Domain Name System and it's an internet protocol used for translating the human readable URLs (for example www.kellegram.xyz) into computer recognizable IP addresses, that are needed for your devices to find and connect to servers worldwide.

## DNS as an area for exploits

There are many ways to attack user's computers over the web and targeting DNS resolvers is one of them. One such exploit, called [DNS spoofing](https://en.wikipedia.org/wiki/DNS_spoofing), also known as DNS cache poisoning was used many years ago, but eventually the known methods were patched. Unfortunately many DNS resolves, especially the ones used by Internet Service Providers did not take all necessary steps to secure their networks and in turn yours.

## How is DNS poisoning performed?

The attack is performed by corrupting the DNS data in the [DNS resolver's](https://en.wikipedia.org/wiki/Domain_Name_System#DNS_resolvers) cache, which in turn causes the name server to return wrong information, for example a diff than expected IP address. This can be used to direct your traffic to a diff destination, for example an attacker's server.

## So what is the Sad DNS attack?

SAD DNS (**S**ide channel **A**ttacke**D** **DNS**) attack is the first weaponizable network side channel attack and it allows the attacker to inject malicious DNS records into a DNS cache. These network side channels are part of all modern operating systems, including Linux, Windows and MacOS. This means that both desktop systems as well as servers using a DNS resolved can be affected.

# Addressing SAD DNS

---

## Am I vulnerable?

Probably. A website was created to test whether the DNS provider that you use is vulnerable, [here](https://789498207.www.saddns.net/). It also contains a lot of relevant information, including a Q&A which I recommend reading to learn more about this exploit.

As stated on the website:

> [...] as long as you are using a vulnerable DNS service (e.g., 8.8.8.8 or 1.1.1.1). Most public resolvers have been checked to be vulnerable. If you are using private DNS services (i.e., those provided by your ISP or your organization), we do not have sufficient data but there is a good chance that it is vulnerable as well.

## Can I do something as a user?

Yes. Some of these you really should be doing regardless, but with this attack making a comeback in a new form it becomes even more important to be careful.

- Do **NOT** go on HTTP sites. This is best practice regardless of whether SAD DNS existed or not.
  - Always make sure that you are only using websites that are secured via HTTP over TLS/SSL (it's where a website URL starts with HTTPS instead of HTTP).
  - You can make this easier by installing the [HTTPS Everywhere](https://www.eff.org/https-everywhere) and setting it to [Encrypt All Sites Eligible](https://i.imgur.com/E09Ejvq.png)
- Switch to a DNS provider that has the vulnerabilities patched. I will provide a list of vulnerable as well as safe providers when such list is made.
  - Change it network-wide (This is will depend on your router's firmware, therefore you will have to find out how it's done on your particular model if you don't yet know)
  - Guides on changing your DNS provider per device can be found here:
    - [Windows](https://www.windowscentral.com/how-change-your-pcs-dns-settings-windows-10)
    - Linux - Depends on your distribution and setup. Search for instructions.
    - [Mac](https://www.support.com/how-to/how-to-change-dns-settings-on-a-mac-10189)
    - [Android](https://www.androidpolice.com/2020/03/26/make-android-use-dns-server-choice/)
    - [iOS](https://gadgets.ndtv.com/mobiles/features/how-to-change-dns-server-on-iphone-ipad-or-ipod-touch-1671813)

### Tested DNS resolvers

<span style="color:red"> **VULNERABLE!**</span> - Do NOT use!

| DNS resolver   | Address(IPV4)  | Fallback address |
| -------------- | -------------- | ---------------- |
| Cloudflare     | 1.1.1.1        | 1.0.0.1          |
| Cisco Open DNS | 208.67.222.222 | 208.67.220.220   |
| SkyDNS RU      | 193.58.251.251 | none             |
| Comss.ru DNS   | 92.38.152.163  | 93.115.24.204    |

<span style="color:green"> **SAFE**</span> - These _should_ be safe to use

| DNS resolver           | Address(IPV4) | Fallback address |
| ---------------------- | ------------- | ---------------- |
| AdGuard DNS Default    | 94.140.14.14  | 94.140.15.15     |
| Adguard DNS Unfiltered | 94.140.14.140 | 94.140.14.141    |
| Quad9 DNS              | 9.9.9.9       | 149.112.112.112  |
| Google DNS             | 8.8.8.8       | 8.8.4.4          |
| Yandex DNS             | 77.88.8.8     | 77.88.8.1        |
| CleanBrowsing DNS      | 185.228.168.9 | 185.228.169.9    |
| Comodo DNS             | 8.26.56.26    | 8.20.247.20      |
| Neustar                | 156.154.70.1  | 156.154.71.1     |
| Verisign DNS           | 64.6.64.6     | 64.6.65.6        |
| Dyn DNS                | 216.146.35.35 | 216.146.36.36    |
| DNS.WATCH              | 84.200.69.80  | 84.200.70.40     |

---

This list is by no means exhaustive. If you are using a DNS provided by your ISP you should change this, ISP DNS servers are almost always sub-par and and might be used to log your queries or might simply be slower than some of the servers listed.

[>> Remember to check your DNS by clicking me <<](https://789498207.www.saddns.net/)

## Can I do something if I have a private DNS?

Yes. I will keep all known methods of addressing this issue updated here.

- Rid the side channel
  - Disable outgoing ICMP traffic
  - Randomize ICMP global rate limit (This was patched into linux kernel 5.10 and is being backported to older **stable** versions)
- Add more secrets to DNS messages
  - DNSSEC
  - 0x20 encoding
  - DNS cookie
- Reduce the attack window
  - Reduce the timeout for outstanding queries

# Resources

---

- [ZDNET article](https://www.zdnet.com/article/dns-cache-poisoning-poised-for-a-comeback-sad-dns/)
- [SAD DNS webpage](https://789498207.www.saddns.net/)