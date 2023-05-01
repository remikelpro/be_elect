$('.parti-search').on('change', function (e) {
    window.location.href = 'parti/' + $(this).val();
});

$(".filterSelect").select2({
    theme: "bootstrap-5",
});

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
                    "text": item.acronym
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