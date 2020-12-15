---
id: Create-Edge
title: Create Edge
---

Edges is the outline of the shape. Use the Edge API to create, delete edges, set edge properties and so on.

For more information about the feature, please visit <a href="https://support.browzwear.com/VStitcher/Basic/line-actions.htm" target="_blank">here</a>.

To learn more about the rest of the API, please refer to <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/blob/master/BWPlugin/include/CAD/BWPluginAPI_Edge.h" target="_blank">Edge</a> in the repository.

## Sample Plugin
Sample plugin for garment creation is available <a href="https://gitlab.com/browzwear/share/open-platform/client-api/-/tree/api-v3.6/samples/python/SamplePluginPython" target="_blank">here</a>.

## Code Snippet
The code snippet below shows how to add an edge to an existing shape.

<!--DOCUSAURUS_CODE_TABS-->

<!--Python-->

```python
# edge starting point
pointStart = BwApi.Point()
pointStart.x = 0
pointStart.y = 0
# sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
pointStart.type = BwApi.BW_API_POINT_TYPE_SHARP
# not graded
pointStart.gradeId = -1

# edge ending point
pointEnd = BwApi.Point()
pointEnd.x = 10
pointEnd.y = 0
# sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
pointEnd.type = BwApi.BW_API_POINT_TYPE_SHARP
# not graded
pointEnd.gradeId = -1  

# create list with all edge points
edgePoints = []
edgePoints.append(pointStart)
edgePoints.append(pointEnd)

# create a new edge, we are passing -1 to the beforeEdgeId param to insert the edge at the end.
edgeId = BwApi.EdgeCreate(garmentId, shapeId, -1, edgePoints)
```
<!--C++-->
```cpp
BwIntVector edgePoints;
// edge starting point
// define non graded (-1) sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
edgePoints.add({0, 0, BwApi.BW_API_POINT_TYPE_SHARP, -1});
// edge ending point
// define non graded (-1) sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
edgePoints.add({10, 0, BwApi.BW_API_POINT_TYPE_SHARP, -1});

// create a new edge, we are passing -1 to the beforeEdgeId param to insert the edge at the end.
int edgeId = 0;
BwApi.EdgeCreate(garmentId, shapeId, -1, edgePoints, &edgeId);
```
<!--C#-->
```csharp
// edge starting point
pointStart = new Point();
pointStart.x = 0;
pointStart.y = 0;
// sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
pointStart.type = PointType.BW_API_POINT_TYPE_SHARP;
// not graded
pointStart.gradeId = -1;

// edge ending point
pointEnd = new Point();
pointEnd.x = 10;
pointEnd.y = 0;
// sharp point, see BwApiPointType (BWPluginAPI_Types.h) for further information
pointEnd.type = PointType.BW_API_POINT_TYPE_SHARP;
// not graded
pointEnd.gradeId = -1;

// create list with all edge points
BwApiVectorPoint edgePoints = new BwApiVectorPoint();
edgePoints.Add(pointStart)
edgePoints.Add(pointEnd)

// create a new edge, we are passing -1 to the beforeEdgeId param to insert the edge at the end.
BwApi.EdgeCreate(garmentId, shapeId, -1, edgePoints, out edgeId)
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Result
You will be able to see the shape in the UI only after creating all edges, and closing the shape.
