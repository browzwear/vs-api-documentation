---
id: Understanding-The-API
title: Understanding the API
---

## API functions
The API is based on C functions and is ported automatically to Python and C#.
The API for all programming languages mentioned above is the same with a slight difference:  while C/C++ API contains a BwApi prefix to the function name, Python and C# treats this as a namespace. 
For example the function for creating a garment looks as follows for each language:

C++:
```
BwApiGarmentCreate("Garment Name", ...);
```
Python:
```
BwApi.GarmentCreate('Garment Name', ...)
```
C#:
```
BwApi.GarmentCreate("Garment Name", ...);
```

For C/C++ only, in order to avoid having different STL versions, there is a built-in support for data types like string and vectors that you should use in order to retrieve or push data to the API.
For example:
<!--DOCUSAURUS_CODE_TABS-->

<!--C++-->
```cpp
// for C++ we provide a wrapper class that can be used
BwString garmentId; // allocate on c'tor and deallocate on d'tor
BwApiGarmentId(garmentId);
```
<!--C-->
```cpp
// Allocat string
BwApiString* garmentId = BwApiStringCreate();
// Get the garment id from Browzwear's API
BwApiGarmentId(garmentId);
// Release the allocaetd string
BwApiStringRelease(garmentId);
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Folder structure

```c
sample-plugin
│   plugin.json    
└─── src
    |   __init__.py
    |   main.py
```

## Plugin.json file

Create a file named plugin.json in the plugin folder with the following <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/blob/master/BWPlugin/schema/api/plugin_manifest.json" target="_blank">schema</a>

### Properties
#### identifier
Unique plugin identifier. <br>
We recommend using format like: com.companyname.pluginname. <br>
Identifier will always be saved in lower case. <br>
 
#### name
Your plugin name. <br>
In case a menu item will be added, the name of the plugin will be used as the top level menu.

#### type
Your programming language - CPP/Python/C#

#### version
Your plugin version

#### main
source code (Python package folder name/dll name)
    
#### dependencies
npm semver compatible string representing range of versions the plugin is compatible with. 
For more information see https://www.npmjs.com/package/semver.

#### white_list
Add every remote URL that you are using to the whitelist.

#### htmlroot
Root to your html resources.

### Example
```
{
	"identifier": "com.browzwear.boilerplate.sample-plugin",
    "dependencies": {
    	"bw-api": "3.*"
    },
	"name": "sample plugin",
	"type": "python",
	"main": "src",
	"version": "1.0.1",
	"white_list" : ["browzwear.com"],
	"htmlroot" : "HtmlRoot"
}
```


