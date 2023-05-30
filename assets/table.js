
import 'tableexport.jquery.plugin';
import 'bootstrap-table/dist/bootstrap-table.min.css';
import 'bootstrap-table';
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export';

$(".filterSelect").select2({
    theme: "bootstrap-5",
});
$('.filterSelect').on('change',refreshTable)

let apiCall = {
    ajax: {
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
                    "text": item.name ?? item.acronym
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
}

let apiParti = apiCall;
apiParti.ajax.url = '/api/partis';
apiParti.placeholder = $('#placeholderSelectParti').html() ?? "Select a parti";
$('#selectParti').select2(apiParti);

let apiRegion = apiCall;
apiRegion.ajax.url = '/api/regions';
apiRegion.placeholder = "Select a region";
$('#selectRegion').select2(apiRegion);

let apiProvince = apiCall;
apiProvince.ajax.url = '/api/provinces';
apiProvince.placeholder = "Select a province";
$('#selectProvince').select2(apiProvince);

let apiArrondissement = apiCall;
apiArrondissement.ajax.url = '/api/arrondissements';
apiArrondissement.placeholder = "Select a arrondissement";
$('#selectArrondissement').select2(apiArrondissement);

let apiCanton = apiCall;
apiCanton.ajax.url = '/api/cantons';
apiCanton.placeholder = "Select a canton";
$('#selectCanton').select2(apiCanton);

let apiCommune = apiCall;
apiCommune.ajax.url = '/api/communes';
apiCommune.placeholder = "Select a commune";
$('#selectCommune').select2(apiCommune);

let apiElection = apiCall;
apiElection.ajax.url = '/api/elections';
apiElection.placeholder = "Select a election";
$('#selectElection').select2(apiElection);

function refreshTable(){
    $('#table').bootstrapTable('refresh')
}
window.queryParams = function (params) {
    console.log('queryParams', params)
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
    if ($($('#selectParti')[0]).val().length > 0){
        parameters['parti.id'] = $($('#selectParti')[0]).val();
    }
    if ($($('#selectRegion')[0]).val().length > 0){
        parameters['idRegion.id'] = $($('#selectRegion')[0]).val();
    }
    if ($($('#selectProvince')[0]).val().length > 0){
        parameters['idProvince.id'] = $($('#selectProvince')[0]).val();
    }
    if ($($('#selectArrondissement')[0]).val().length > 0){
        parameters['idArrondissement.id'] = $($('#selectArrondissement')[0]).val();
    }
    if ($($('#selectCanton')[0]).val().length > 0){
        parameters['idCanton.id'] = $($('#selectCanton')[0]).val();
    }
    if ($($('#selectCommune')[0]).val().length > 0){
        parameters['idCommune.id'] = $($('#selectCommune')[0]).val();
    }

    if ($($('#selectElection')[0]).val().length > 0){
        parameters['idElection.id'] = $($('#selectElection')[0]).val();
    }

    var url = '/api/resultats';
    $.get(url + '?' + $.param(parameters)).then(function (res) {
        let result = res['hydra:member'];
        result.total = res['hydra:totalItems'];
        params.success(result)
    })
}