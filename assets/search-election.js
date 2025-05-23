$(".election-search").on("change", function (e) {
  //   window.location.href = "election/" + $(this).val();
  const id = e.params.data.id;
  const locale = window.location.pathname.split("/")[1];
  window.location.href = "/" + locale + "/elections/" + id;
});

$(".filterSelect").select2({
  theme: "bootstrap-5",
});

let apiCall = {
  ajax: {
    delay: 200,
    data: function (params) {
      var query = {
        itemsPerPage: 30,
        page: params.page || 1,
        name: params.term,
      };
      return query;
    },
    processResults: function (data) {
      let results = data["hydra:member"].map((item) => {
        return {
          id: item.id,
          text: item.title,
        };
      });
      return {
        results,
        pagination: {
          more: data["hydra:view"]["hydra:last"] !== undefined,
        },
      };
    },
  },
};

let apiElection = apiCall;
console.log(apiElection);
apiElection.ajax.url = "/api/type_elections";
apiElection.placeholder = $("#placeholderSelectElection").html() ?? "Select an election";
$("#selectElection").select2(apiElection);
