---
id: Create-Shape
title: Create Shape
---
Shapes is what you combine together to create a garment. Use the Shape API to create, delete shapes and so on.

For more information about the feature, please visit <a href="https://support.browzwear.com/VStitcher/Basic/creating-pieces-vs.htm" target="_blank">here</a>.

To learn more about the rest of the API, please refer to <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/blob/master/BWPlugin/include/CAD/BWPluginAPI_Shape.h" target="_blank">Shape</a> in the repository.

## Sample Plugin
Sample plugin for garment creation is available <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/tree/api-v3.6/samples/python/SamplePluginPython" target="_blank">here</a>

## Create Shape
The code snippet below shows how to create a new shape. <br/>
After the shape creation, there will be no representation of this shape in the system until you add edges to this shape. For more information, refer to [Create Edge](Create-Edge.md).
### Code Snippet
<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->

```python
shapeId = BwApi.ShapeCreate(garmentId)
```
<!--C++-->
```cpp
int shapeId = 0;
BwApiShapeCreate(garmentId, &shapeId);
```
<!--C#-->
```csharp
int shapeId = 0;
BwApi.ShapeCreate(garmentId, out shapeId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Delete Shape
The code snippet below shows how to delete an existing shape. 

### Code Snippet
Note: deleting a shape deletes all the edges associated with the shape.

<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->
```py
BwApi.ShapeDelete(garmentId, shapeId)
```
<!--C++-->
```cpp
BwApiShapeDelest(garmentId, shapeId);
```
<!--C#-->
```csharp
BwApi.ShapeDelete(garmentId, shapeId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>