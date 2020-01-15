//GLOBALS
var app, TextFrame, ConvertShapeOptions;

var page, pageIndex, item, itemIndex, options;

for (pageIndex = 0; pageIndex < app.activeDocument.pages.length; pageIndex += 1) {
    page = app.activeDocument.pages[pageIndex];

    for (itemIndex = 0; itemIndex < page.allPageItems.length; itemIndex += 1) {
        item = page.allPageItems[itemIndex];
        if (item instanceof TextFrame) {
            options = ConvertShapeOptions;
            item.createOutlines();
        }
    }
}
