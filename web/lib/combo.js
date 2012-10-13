/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function add_option (select_id, text) {
    var select = document.getElementById(select_id);
    select.options[select.options.length] = new Option(text);
}

function load_combo (select_id, option_array) {
    for (var i = 0; i < option_array.length; i++) {
        add_option (select_id, option_array[i]);
    }
}

