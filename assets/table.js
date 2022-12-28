
import 'tableexport.jquery.plugin';
import 'bootstrap-table/dist/bootstrap-table.min.css';
import 'bootstrap-table';
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export';


window.queryParams = function(params) {
    console.log('queryParams', params)
    return params;
}

window.ajaxRequest = function(params) {
    console.log('ajax', params);
    let parameters = {};
    if (params.data.limit){
        parameters.itemsPerPage = params.data.limit;
        parameters.page = params.data.offset / params.data.limit + 1;    
    }
    else {
        parameters.pagination = false;
    }
    if (params.data.sort){
        parameters['order[' + params.data.sort + ']'] = params.data.order;
    }
    var url = 'http://localhost:8000/api/resultats';
    console.log(parameters, $.param(parameters));
    $.get(url+ '?' + $.param(parameters)).then(function (res) {
        let result = res['hydra:member'];
        result.total = res['hydra:totalItems'];
        params.success(result)
    })
}