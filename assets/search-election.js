$("#selectElection").on("select2:select", function (e) {
  const data = e.params.data;
  const slug = data.slug;
  const date = data.date;

  window.location.href = `/elections/${slug}/${date}`;
});

$(".filterSelect").select2({
  theme: "bootstrap-5",
});

const typeId = $("#selectElection").data("type-id");

const apiCall = {
  ajax: {
    delay: 200,
    data: function (params) {
      const term = params.term?.trim() || "";
      const isNumeric = /^\d+$/.test(term);

      let query = {
        itemsPerPage: 30,
        page: params.page || 1,
      };

      if (typeId) {
        query["idTypeElection.id"] = typeId;
      }

      if (isNumeric) {
        query.date = term;
      } else {
        query.name = term;
      }

      return query;
    },
    processResults: function (data) {
      const results = data["hydra:member"].map((item) => {
        return {
          id: item.id,
          text: item.name + " (" + item.date + ")",
          date: item.date,
          slug: item.slug,
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

const apiElection = apiCall;
apiElection.ajax.url = "/api/elections";
apiElection.placeholder = $("#placeholderSelectElection").html() ?? "Select an election";
$("#selectElection").select2(apiElection);
