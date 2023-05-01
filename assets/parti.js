
import 'tableexport.jquery.plugin';
import 'bootstrap-table';
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export';

$(".filterSelect").select2({
    theme: "bootstrap-5",
});
$('.filterSelect').on('change',refreshTable)


function refreshTable(){
    $('#table').bootstrapTable('refresh')
}
window.queryParams = function (params) {
    return params;
}

window.ajaxRequest = function (params) {
    let parameters = {};
    if (params.data.limit) {
        parameters.itemsPerPage = params.data.limit;
        parameters.page = params.data.offset / params.data.limit + 1;
    }
    else {
        parameters.pagination = false;
    }
    if (params.data.sort) {
        parameters['order[' + params.data.sort + ']'] = params.data.order;
    }
    parameters['idParty.id'] = $('#partiId').val();

    var url = '/api/resultats';
    console.log(parameters);

    $.get(url + '?' + $.param(parameters)).then(function (res) {
        let result = res['hydra:member'];
        result.total = res['hydra:totalItems'];
        console.log(result.total);
        params.success(result)
    })
}