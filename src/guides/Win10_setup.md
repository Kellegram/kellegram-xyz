---
layout: layout.njk
title: My Windows 10 setup
---

# How I set-up my Windows 10 install

I have removed the links to scripts as I am figuring out a new setup and will not maintain the old ones for a moment.

## If using Windows 10 N edition

To install the Media Feature Pack, navigate to Settings > Apps > Apps and Features > Optional Features > Add a Feature and find the Media Feature Pack in the list of available Optional Features. Note, you will not be prompted to restart your computer, but you must restart in order to successfully complete installation of the Media Feature Pack.


## Here is the full command I used to run in the script:


```powershell
choco install jre8 firefox 7zip.install notepadplusplus.install vlc vcredist140 git.install openssh python3 malwarebytes autohotkey.portable teamviewer gimp vscode inkscape treesizefree k-litecodecpackfull winscp.install chocolateygui wireshark sumatrapdf.install irfanview microsoft-windows-terminal audacity everything qbittorrent steam tor-browser rufus cpu-z.install telegram.install etcher blender foobar2000 kitty teracopy discord handbrake sharex freefilesync obs-studio hwinfo element-desktop -y
```

## Resources

- [Chocolatey](https://chocolatey.org/)
