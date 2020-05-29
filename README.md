# hass-extendedicons

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

Use free icons from the [extendedicons](https://extendedicons.org) set in Home Assistant.

## Installation instructions

- Install using [HACS](https://hacs.xyz) (Or copy the contents of `custom_components/extendedicons/` to `<your config dir>/custom_components/extendedicons/`.)

- Restart Home Assistant

- Go to your integrations configuration and add extendedicons

## Usage

Find the icon you want in the [gallery](http://extendedicons.org/). Click on an icon. This will download the icon. You don't need that file, just it's filename.

The icon set is prefixed by: `ei`. Then comes the filename.

So,

- to get a facebook logo, use `eifacebook`
- to get a zigbee logo, use `eizigbee`
- and so on

The icons are useable anywhere in Home Assistant - not only in lovelace.

## FAQ

### Can I set this up in configure.yaml instead?

Yes.

```yaml
extendedicons:
```

## Special thanks

This work is heavily based on [hass-fontawesome](https://github.com/thomasloven/hass-fontawesome) by Thomas Loven. Thank you!
