How to remodel the NYC 3D Model without contour elevation
The buildings in NYC’s 3D model are at elevation, meaning that their bases sit on an invisible contoured
surface. While this can be positive in some instances, many planners and designers prefer all of their
buildings to sit on a flat base.
This document provides basic instructions for how to combine multiple faces into 3d object buildings,
and align all their bases to a flat surface.
1) Copy all the faces [Building_Rooftop, Building_Footprint and Building_Facade] into a single layer.
a) In the Layers panel on the right side of the screen, create a new layer.
b) Select the layers [Building_Rooftop, Building_Footprint and Building_Facade] within the layers
panel (hold with SHIFT key to select multiple) and right-click to select ‘Select Objects in Layer’.
All the planar surfaces would be selected in the Rhino window.
c) Toggle over the new layer created in 1(a), right-click to select ‘Copy Objects to Layer’.
2) Join faces into objects.
a) JOIN faces into polysrfs.
i) This would ideally work for a small file size. However, for a large file, it is recommended to
run this command in batches.
ii) To do so, an easy way to select the buildings would be with the LASSO tool. In Top View
(toggle through tabs on bottom of viewport), use LASSO to custom select area intended
before JOIN surfaces.

3) In an ideal scenario all planar surfaces would be joined into complete 3d polysrfs. However, it is very
likely there will be a few discrepancies in the JOIN. To check and ensure a clean file:
a) Move all newly joint polysrfs to a new layer (Select new layer in right toolbar and right-click the
layer to select ‘Change Object Layer’). Name it ‘Buildings_Combined’.
b) Toggle the visibility and lock function of the other layers to turn off.
c) SELECTCLOSEDPOLYSRF to determine if there are any massings that did not get combined fully.
(This may happen especially for roof details). Scan through the model to see if the roof details
are not combined with the base massing. Uncombined walls can be ignored as they will not
affect the objective of this exercise.
d) If the command in 3c does not show uncombined roof details, skip this step to 3e. Select an
uncombined roof detail- and ZOOMSELECT to zoom to the object. Usually, the detail does not
combine when it itself is closed at the base plane. EXPLODE the object to break up the surfaces,
deselect the base plane, and JOIN the object again, removing the base plane from the joined
object. Delete the base plane, and join the object to the base building. If the object does not
join, the roof plane of the base building might not have a footprint for the detail to join to. In
this case, select the base building, SPLIT and select the detail polysrf as the object to split with.

2
Delete the footprint of the detail from the roof plane, and JOIN the detail polysrf to the base
building polysrf.
e) SELECTSRF to determine if there are any roof planes that did not combine with the building. If
the command does not show any uncombined roof planes, skip this step to 3f. Uncombined
walls can be ignored as they will not affect the objective of this exercise. Select the uncombined
roof plane and JOIN with the base building. If the JOIN was not successful, CAP the base building
and delete the uncombined roof plane.
f) Repeat steps 2 and 3 for all remaining batches, putting them into the ‘Buildings_Combined’
layer. When the file gets too heavy, HIDE the polysrfs from the completed previous batches.
4) To align all polysrf to a flat z-axis plane.
a) SHOW to reveal all polysrfs in ‘Buildings_Combined’ Layer.
b) Toggle to Top Viewport. PLANE to create a reference plane to align all the buildings to. You can
MOVE_VERTICAL to move plane to a desired point in the z-axis in the Perspective Viewport
after. Select the plane and LOCK it.
c) Right-click on the ‘Buildings_Combined’ Layer in the layer panel to select ‘Select Objects in
Layer’.
d) Toggle to Right or Front Viewport. ALIGN_BOTTOM to align buildings to the plane you have
created in 4b.
e) UNLOCKSELECTED to unlock the plane. Delete it.