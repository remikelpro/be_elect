import "trumbowyg";
import "trumbowyg/dist/ui/trumbowyg.min.css";
import "trumbowyg/dist/langs/fr.min.js";
import "trumbowyg/dist/langs/nl.min.js";
import icons from "trumbowyg/dist/ui/icons.svg";
import "trumbowyg/dist/plugins/table/trumbowyg.table.min.js";
import "trumbowyg/dist/plugins/table/ui/trumbowyg.table.min.css";

$.trumbowyg.svgPath = icons;

function getLangFromUrl() {
  const match = window.location.pathname.match(/^\/(fr|en|nl)\b/);
  return match ? match[1] : "en";
}

function missingTranslations(editorLang) {
  if (editorLang === "nl") {
    $.trumbowyg.langs.nl = {
      ...$.trumbowyg.langs.nl,
      table: "Tabel invoegen",
      tableCellBackgroundColor: "Achtergrondkleur van cellen",
      tableBorderColor: "Kleur van de tabelrand",
    };
  }
}

function applyTrumbowyg() {
  const editorLang = getLangFromUrl();

  missingTranslations(editorLang);

  $("textarea.use-trumbowyg").trumbowyg({
    lang: editorLang,
    autogrow: true,
    tagClasses: {
      table: "table",
    },

    btns: [
      ["viewHTML"],
      ["undo", "redo"],
      ["formatting"],
      ["strong", "em", "del"],
      ["superscript", "subscript"],
      ["link"],
      ["insertImage"],
      ["table"],
      ["tableCellBackgroundColor", "tableBorderColor"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
      ["unorderedList", "orderedList"],
      ["horizontalRule"],
      ["removeformat"],
      ["fullscreen"],
    ],
  });
}

document.addEventListener("DOMContentLoaded", applyTrumbowyg);
document.addEventListener("ea.collection.item-added", applyTrumbowyg);
