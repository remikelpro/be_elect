
import "trumbowyg";
import "trumbowyg/dist/ui/trumbowyg.min.css";
import "trumbowyg/dist/langs/fr.min.js";
import icons from 'trumbowyg/dist/ui/icons.svg';

$.trumbowyg.svgPath = icons;

function applyTrumbowyg() {
  $("textarea.use-trumbowyg").trumbowyg({
    lang: "fr",
    autogrow: true,
  });
}
document.addEventListener("DOMContentLoaded", applyTrumbowyg);
document.addEventListener("ea.collection.item-added", applyTrumbowyg);
