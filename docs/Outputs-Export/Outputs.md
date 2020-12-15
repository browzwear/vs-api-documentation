---
id: Outputs
title: Outputs
---
Outputs is the different file formats you export the garment to. Use the Render API to export images, turntables, obj, fbx, glTF and so on. 

For more information about the feature, please visit <a href="https://support.browzwear.com/VStitcher/Rendering/render.htm" target="_blank">here</a>.

To learn more about the rest of the API, please refer to <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/blob/master/BWPlugin/include/General/BWPluginAPI_Render.h" target="_blank">Render</a> in the repository.



## Sample Plugin
Sample plugin for export output is available <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/tree/master/samples/python/render" target="_blank">here</a>
 
## Rendering an Image

### Code Snippet
The code snippet below shows how to render the current garment as an image. The render image function receives a JSON file (as a string) that contains all the render image information. <br>
For more information, refer to the <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/blob/master/BWPlugin/schema/api/v3.4/render/render.json" target="_blank">schema</a>. 
<br/>
<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->
```python
garment_id = BwApi.GarmentId()
# assuming renderJson contains the above export render image settings
BwApi.RenderImage(garment_id, renderJson)
```
<!--C++-->
```cpp
BwString garmentId;
BwApiGarmentId(garmentId);
// assuming renderJson contains the above export 3d
BwApiRenderImage(garmentId, renderJson);
```
<!--C#-->
```csharp
string garmentId;
BwApi.GarmentId(out garmentId);
// assuming renderJson contains the above export 3d
BwApi.RenderImage(garmentId, renderJson);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Exporting a 3D Object

### Code Snippet
The code snippet below shows how to export the current garment as a 3D object . The export 3D object function receives a JSON file (as a string) that contains all the exported information. <br>
For more information, refer to the <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/blob/master/BWPlugin/schema/api/v3.3/render/export_3d_object.json" target="_blank">schema</a>. 
<br/>
<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->
```python
garment_id = BwApi.GarmentId()
# assuming export3dObjectJson contains the above export 3d object settings
BwApi.RenderExport3DObject(garment_id, export3dObjectJson)
```
<!--C++-->
```cpp
BwString garmentId;
BwApiGarmentId(garmentId);
// assuming export3dObjectJson contains the above export 3d
BwApiRenderExport3DObject(garmentId, export3dObjectJson);
```
<!--C#-->
```csharp
string garmentId;
BwApi.GarmentId(out garmentId);
// assuming export3dObjectJson contains the above export 3d
BwApi.RenderExport3DObject(garmentId, export3dObjectJson);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>
