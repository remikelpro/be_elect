
import 'tableexport.jquery.plugin';
import 'bootstrap-table/dist/bootstrap-table.min.css';
import 'bootstrap-table';
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export';

$("select").select2({
    theme: "bootstrap-5",
});
$('#selectParti').select2({
    placeholder: "Select a parti",
    ajax: {
        url: '/api/partis',
        delay: 1000,
        data: function (params) {
            var query = {
                itemsPerPage: 30,
                page: params.page || 1,
                name: params.term
            }
            return query;
        },
        processResults: function (data) {
            let results = data["hydra:member"].map((item) => {
                return {
                    "id": item.id,
                    "text": item.name
                }
            })
            return {
                results,
                pagination: {
                    more: data["hydra:view"]["hydra:last"] !== undefined
                }
            };
        }
    }
});
$('#selectParti').on('change',(e)=>{
    $('#table').bootstrapTable('refresh')
})

window.queryParams = function (params) {
    console.log('queryParams', params)
    return params;
}

window.ajaxRequest = function (params) {
    console.log('ajax', params);
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
    if ($($('#selectParti')[0]).val().length > 0){
        parameters['idParty.id'] = $($('#selectParti')[0]).val();
    }

    var url = '/api/resultats';
    console.log(parameters, $.param(parameters));
    $.get(url + '?' + $.param(parameters)).then(function (res) {
        let result = res['hydra:member'];
        result.total = res['hydra:totalItems'];
        params.success(result)
    })
}