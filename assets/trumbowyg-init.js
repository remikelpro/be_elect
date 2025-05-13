
import "trumbowyg";
import "trumbowyg/dist/ui/trumbowyg.min.css";
import "trumbowyg/dist/langs/fr.min.js";
import icons from 'trumbowyg/dist/ui/icons.svg';
import "trumbowyg/dist/plugins/table/trumbowyg.table.min.js";
import "trumbowyg/dist/plugins/table/ui/trumbowyg.table.min.css";

$.trumbowyg.svgPath = icons;

function applyTrumbowyg() {
  $("textarea.use-trumbowyg").trumbowyg({
    lang: "fr",
    autogrow: true,
    btns: [
    ['viewHTML'],
    ['undo', 'redo'],
    ['formatting'],
    ['strong', 'em', 'del'],
    ['superscript', 'subscript'],
    ['link'],
    ['insertImage'],
    ['table'], // ajout du bouton table
    ['tableCellBackgroundColor', 'tableBorderColor'], // options de table
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
    ['unorderedList', 'orderedList'],
    ['horizontalRule'],
    ['removeformat'],
    ['fullscreen']
  ]

  });
}
document.addEventListener("DOMContentLoaded", applyTrumbowyg);
document.addEventListener("ea.collection.item-added", applyTrumbowyg);
