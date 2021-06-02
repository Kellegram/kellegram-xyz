---
layout: guide.njk
title: What I do after installing Pop!_OS
---

# My Pop!\_OS setup

## Install updates and reboot

```bash
sudo apt update -y && sudo apt full-upgrade -y
sudo reboot now
```

## Install all the apps I use with apt

```bash
sudo apt install -y ubuntu-restricted-extras gparted gnome-tweaks timeshift code vlc obs-studio cmatrix cowsay flameshot kazam neovim com.github.tkashkin.gamehub scrcpy neofetch texlive-latex-extra gamemode  <apps list incomplete>
```

## Install and initialise git LFS

```bash
sudo apt install -y git git-lfs
git-lfs install
```

## Install and compile media codecs(if needed)

```bash
sudo apt install -y libavcodec-extra libdvd-pkg; sudo dpkg-reconfigure libdvd-pkg
```

## Install all flatpaks I use

```bash
flatpak install flatseal GitKraken Discord com.github.micahflee.torbrowser-launcher com.google.AndroidStudio GreenWithEnvy com.unity.UnityHub im.riot.Riot org.gabmus.hydrapaper org.kde.kdenlive org.qbittorrent.qBittorrent org.telegram.desktop
```

## Install MangoHud
[MangoHud](https://github.com/flightlessmango/MangoHud) is a Vulkan and OpenGL overlay for monitoring FPS, temperatures, CPU/GPU load and more.
```bash
git clone --recurse-submodules https://github.com/flightlessmango/MangoHud.git
cd MangoHud
./build.sh install
```
### Usage
To enable MangoHud for a Steam game, add `mangohud %command%` in the game's launch options.
**OpenGL** games may also need dlsym hooking. Add `MANGOHUD_DLSYM=1` alongside mangohud.
Possible locations for the config file are written in the [repository](https://github.com/flightlessmango/MangoHud#hud-configuration).

## Install vkBasalt
[vkBasalt](https://github.com/DadSchoorse/vkBasalt) is a Vulkan post processing layer to enhance the visual graphics of games.
```bash
git clone https://github.com/DadSchoorse/vkBasalt.git
cd vkBasalt
meson --buildtype=release --prefix=/usr builddir
ninja -C builddir install
```
### Usage
To enable vkBasalt for a Steam game, add `ENABLE_VKBASALT=1 %command%` in the game's launch options.
Possible locations for the config file are written in the [repository](https://github.com/DadSchoorse/vkBasalt#configure).

## Using multiple Env variables
When using multiple variables that end with `%command%`, just place variables one after another, separated with space, then add `%command` at the end, for example like so:  
```bash
MANGOHUD_DLSYM=1 mangohud ENABLE_VKBASALT=1 %command%
```

## Resources

- [Pop!\_OS website](https://pop.system76.com/)
- [Pop!\_OS docs](https://support.system76.com/#pop)
- [Pop!\_OS Mattermost chat](https://chat.pop-os.org)
- [Flatpak](https://flatpak.org/)
