---
layout: layout.liquid
pageTitle: My Windows 10 setup
---

# How I set-up my Windows 10 install

While I use Windows 10 less and less, I am still forced to use it in certain cases. As of right now to set it up I use a single script, which is a fork of ChrisTitusTech's script. It was already very close to what I would do anyway.

### The script is to be installed after installing and updating Windows

```powershell
powershell -nop -c "iex(New-Object Net.WebClient).DownloadString('https://git.io/JUbtQ')"
```

## If using Windows 10 N edition

To install the Media Feature Pack, navigate to Settings > Apps > Apps and Features > Optional Features > Add a Feature and find the Media Feature Pack in the list of available Optional Features. Note, you will not be prompted to restart your computer, but you must restart in order to successfully complete installation of the Media Feature Pack.

## Breakdown of the chocolatey command

I broke it down into categories in case I or someone else will find it useful:

### Here is the full command ran in the script:

```powershell
choco install jre8 firefox 7zip.install notepadplusplus.install vlc vcredist140 git.install openssh python3 malwarebytes autohotkey.portable teamviewer gimp vscode inkscape treesizefree k-litecodecpackfull winscp.install chocolateygui wireshark sumatrapdf.install irfanview microsoft-windows-terminal audacity everything qbittorrent steam tor-browser rufus cpu-z.install telegram.install etcher blender foobar2000 kitty discord handbrake sharex freefilesync obs-studio hwinfo element-desktop -y
```

## Core utils

```powershell
choco install firefox 7zip.install notepadplusplus.install vcredist140 git.install chocolateygui microsoft-windows-terminal everything -y
```

## Media

```powershell
choco install vlc k-litecodecpackfull gimp inkscape sumatrapdf.install irfanview audacity blender foobar2000 handbrake sharex obs-studio -y
```

## Development

```powershell
choco install jre8 python3 vscode -y
```

## Comms

```powershell
choco install element-desktop discord telegram.install -y
```

## Others

```powershell
choco install openssh malwarebytes autohotkey.portable teamviewer treesizefree winscp.install wireshark microsoft-windows-terminal etcher steam tor-browser rufus cpu-z.install freefilesync hwinfo -y
```

## Resources

- [My script fork](https://github.com/Kellegram/win10script)
- [Chocolatey](https://chocolatey.org/)
- Credits to [ChrisTitusTech](https://www.youtube.com/c/ChrisTitusTech) for his fork of the [script](https://github.com/ChrisTitusTech/win10script)
