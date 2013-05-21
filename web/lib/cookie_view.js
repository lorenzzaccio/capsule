/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function updateViewCookie(){
    var tabView = [];
    tabView[0] = zoomx;
    tabView[1] = zoomy;
    tabView[2] = zoomw;
    tabView[3] = zoomh;
    tabView[4] = ratioZoom;
    setCookie("viewbox",tabView,5);
}
function readViewCookie(){
    var tabView = [];
    var tmp = getCookie("viewbox");
    if (tmp==0){
        zoomx=0;
        zoomy=0;
        zoomw=screenW;
        zoomh=screenH;
        ratioZoom=1;
        return;
    }
    tabView = tmp.split(",");
    if(!isNumber(tabView[0]) || !isNumber(tabView[1]) || !isNumber(tabView[2])|| !isNumber(tabView[3])|| !isNumber(tabView[4])){
        zoomx=0;
        zoomy=0;
        zoomw=screenW;
        zoomh=screenH;
        ratioZoom=1;
    }else{
        zoomx=tabView[0];
        zoomy=tabView[1];
        zoomw=tabView[2];
        zoomh=tabView[3];
        ratioZoom=tabView[4];
    }
                
}