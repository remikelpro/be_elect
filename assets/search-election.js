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
      const parts = term.split(/\s+/);

      let nameParts = [];
      let datePart = "";

      parts.forEach((part) => {
        if (/^\d+$/.test(part)) {
          datePart = part;
        } else {
          nameParts.push(part);
        }
      });

      let query = {
        itemsPerPage: 30,
        page: params.page || 1,
      };

      if (typeId) {
        query["idTypeElection.id"] = typeId;
      }

      if (nameParts.length > 0) {
        query.name = nameParts.join(" ");
      }

      if (datePart) {
        query.date = datePart;
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
