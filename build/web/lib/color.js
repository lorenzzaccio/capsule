/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function setHexColor(hexColor){
    //var hexColor = color_d2h_cp(newValue);
    if(itemFocused == 1){
        $(selectedItem.firstChild).attr('fill', '#'+hexColor);
        changeArrayValue(selectedRow,FILLCOLOR_HEADER,'#'+hexColor);
    }
    selArr[FILLCOLOR_HEADER] = '#'+hexColor;
}
function setColor(newValue){
    var hexColor = color_d2h_cp(newValue);
    if(itemFocused == 1){
        $(selectedItem.firstChild).attr('fill', '#'+hexColor);
        changeArrayValue(selectedRow,FILLCOLOR_HEADER,'#'+hexColor);
    }   
}

function color_d2h(value){
    var rgbString = "rgb("+value+")"; // get this in whatever way.

    var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]

    delete (parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    } 
    var hexString ='#'+parts.join('').toUpperCase(); // "#0070FF"

    return hexString;
}