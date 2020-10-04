---
layout: layout.liquid
pageTitle: What I do after installing Pop!_OS
---

# My Pop!_OS setup

## The basics

### Install updates and reboot

```bash
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
sudo apt autoremove
sudo apt autoclean
sudo reboot now
```

### Install all the apps I use with apt

```bash
sudo apt install -y ubuntu-restricted-extras gparted gnome-tweaks timeshift code vlc obs-studio cmatrix cowsay flameshot kazam neovim com.github.tkashkin.gamehub scrcpy    <apps list incomplete>
```

### Install and initialise git LFS
```bash
sudo apt install -y git git-lfs
git-lfs install
```
### Install and compile media codecs(if needed)
```bash
sudo apt install -y libavcodec-extra libdvd-pkg; sudo dpkg-reconfigure libdvd-pkg
```



### Install all flatpaks I use

```bash
flatpak install flatseal GitKraken Discord com.github.micahflee.torbrowser-launcher com.google.AndroidStudio GreenWithEnvy com.unity.UnityHub im.riot.Riot org.gabmus.hydrapaper org.kde.kdenlive org.qbittorrent.qBittorrent
```


