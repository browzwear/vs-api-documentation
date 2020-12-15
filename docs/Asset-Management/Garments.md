---
id: Garments
title: Garments
---

Garments is what you create in Browzwear applications. Use the Garment Creation API to create a garment, open a garment, dress a garment, and so on.

For more information about the feature, please visit <a href="https://support.browzwear.com/VStitcher/basic.htm" target="_blank">here</a>.

To learn more about the rest of the API, please refer to <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/blob/master/BWPlugin/include/CAD/BWPluginAPI_Garment.h" target="_blank">Garment</a> in the repository.

## Sample Plugin
Sample plugin for the Garment creation is available <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/tree/master/samples/python/SamplePluginPython" target="_blank">here</a>

## Open a Garment

### Code Snippet
The code snippet below shows how to open a garment from file (.vsp, .vsgx, .bw or .dxf)
<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->
```python
full_path = '<full path to the garment file>'
garment = BwApi.GarmentOpen(full_path)
```
<!--C++-->
```cpp
garment = BwApiGarmentOpen("full path to the garment file")
```
<!--C#-->
```csharp
garment = BwApi.GarmentOpen("full path to the garment file");
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Dress a Garment
You can learn how to dress a garment [here.](../Garment-Creation/Dress-a-Garment.md)

## Save a Garment

### Code Snippet

The code snippet below shows how to save garment to file (.bw)

<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->

```python
full_path = '<full path to the garment file to save>'
BwApi.GarmentSaveAs(garmentId)
```
<!--C++-->

```cpp
BwApiGarmentSaveAs(garmentId,"full path to the garment file to save");
```
<!--C#-->

```csharp
BwApi.GarmentSaveAs(garmentId,"full path to the garment file to save");
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Result
A new garment id. <br>
Note: saving garment to file will re-load the new garment automatically, this will generate a new garment id.

