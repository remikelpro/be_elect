//import des fichiers de traduction pour Select2
import "./js/i18n/fr.js";
import "./js/i18n/nl.js";

$("#selectElection").on("select2:select", function (e) {
  const data = e.params.data;
  const slug = data.slug;
  window.location.href = `/election/${slug}`;
});

$(".filterSelect").select2({
  theme: "bootstrap-5",
});

//data-attribut dans le select sur la page Election par type
const typeId = $("#selectElection").data("type-id");

//configuration de l'appel API pour la recherche des élections
const apiCall = {
  ajax: {
    delay: 200,
    data: function (params) {
      //les valeurs saisies par l'utilisateur, on les nettoie et on les transforme en un objet de requête
      const term = params.term?.trim() || "";

      // /\s+/  un ou plusieurs espaces blancs et virgule
      const parts = term.split(/[\s,]+/);

      let nameParts = [];
      let datePart = [];

      parts.forEach((part) => {
        //vérifie que ça contient uniquement des chiffres
        if (/^\d+$/.test(part)) {
          datePart.push(part);
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

      if (nameParts) {
        query.name = nameParts;
      }

      if (datePart) {
        query.date = datePart;
      }

      return query;
    },

    //Réponse de l'API
    processResults: function (data) {
      const results = data["hydra:member"].map((item) => {
        return {
          id: item.id,
          text: item.name + " (" + item.date + ")", // Concaténation nom + date (ce qui est affiché)

          //valeurs à envoyer dans l'événement select2:select
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

//Langue de l'application, on la récupère depuis l'URL
const lang = window.location.pathname.split("/")[1] || "en";
const apiElection = apiCall;
apiElection.ajax.url = "/api/elections";
apiElection.placeholder = $("#placeholderSelectElection").html() ?? "Select an election";
apiElection.language = lang;

//Initialise Select2 avec l'Api call
$("#selectElection").select2(apiElection);
