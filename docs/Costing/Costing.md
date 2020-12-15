---
id: Costing
title: Costing
---
Costing is how you may get information of consumption of materials and calculate the cost of the garment. Use the Cost api to get, update cost and so on.

To learn more about the rest of the API, please refer to <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/blob/master/BWPlugin/include/CAD/BWPluginAPI_Edge.h" target="_blank">GarmentCost</a> in the repository.

## Sample Plugin
Sample plugin for costing is available <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/tree/master/samples/python/costing" target="_blank">here</a>

## Get Surface Area of Material in Use
### Code Snippet

<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->
```python
BwApi.MaterialSurfaceAreaGet(garmentId, colorwayId, materialId, sizeId)
```
<!--C++-->
```cpp
float area;
BwApiMaterialSurfaceAreaGet( garmentId, colorwayId, materialId, sizeId, &area);
```
<!--C#-->
```csharp
float area;
BwApi.MaterialSurfaceAreaGet(garmentId, colorwayId, materialId, sizeId, out area);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

### Result
The surface area of a material. <br/>

## Get length material of Material in Use
### Code Snippet

<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->
```python
# get an existing material length and depth (works only on lines and seams)
length, depth = BwApi.MaterialLengthGet(garmentId, colorwayId, materialId, sizeId)
```
<!--C++-->
```cpp
// get an existing material length and depth (works only on lines and seams)
float length;
float depth;
BwApiMaterialLengthGet( garmentId, colorwayId, materialId, sizeId, &length, &depth);
```
<!--C#-->
```csharp
// get an existing material length and depth (works only on lines and seams)
float length;
float depth;
BwApi.MaterialLengthGet(garmentId, colorwayId, materialId, sizeId, out length, out depth);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

### Result
The length and depth of a material.
