/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function sendPhp(arrow){
    send_array(arrow);
}
            
function updatePhp(val1,val2,cond1,cond2){
    update(val1,val2,cond1,cond2);
}
function syncM2SPhp(){
    var j=0;
    var rowCount = arrec.length;
    for(j=0;j<rowCount;j++){
        var arrow = arrec[j];
        syncM2S(arrow);
    } 
}

function updateTransValues(row,arrow,index)
{
    updatePhp("plan_transx",arrow[TRANSX_HEDAER],"plan_index",index);
    updatePhp("plan_transy",arrow[TRANSY_HEDAER],"plan_index",index);
    changeArrayRow(row,arrow)
}