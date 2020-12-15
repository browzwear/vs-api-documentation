---
id: Deployment
title: Deployment
---

## Deploy your plugins with external library

VStitcher / Lotta installation already come with Python 3.7.8

1. Install the packages in the plugin folder:```<Browzwear installation folder>/python/bin/python -m pip install <package name> -t <plugin folder>```
(-t stands for target.)

2. Within the plugin update the sys.path to include this additional folder before importing the library.

Once this is working on your dev machine and your are sure that the additional libraries loaded from the new target, you are ready to deploy to clients.
Send the whole plugin folder to client and then ask the client to [add this plugin](Development) add this plugin to VS / Lotta from the preferences dialog.

## example
For example, this is the plugin folder structure:
```py
  | [lib]
    |- [requests]
  | [src]
    |- main.py
  | plugin.json
```
Within the plugin (main.py) add 'lib' location to sys.path and only then import 'requests'.