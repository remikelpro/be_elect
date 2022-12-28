
import 'tableexport.jquery.plugin';
import 'bootstrap-table/dist/bootstrap-table.min.css';
import 'bootstrap-table';
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export';


window.queryParams = function(params) {
    console.log(params);
    return params
}

window.ajaxRequest = function(params) {
    console.log('ajax', params);
    var url = 'http://localhost:8000/api/resultats'
    $.get(url).then(function (res) {
        console.log(res);
        params.success(res['hydra:member'])
    })
}