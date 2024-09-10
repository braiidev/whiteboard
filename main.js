const today = new Date();
const $ = (html) => document.getElementById(html);
const $title = $("title");
const $date = $("date");
const $darkmode = $("darkmode");
const $editor = $("editor");
const $tools = $("tools");

function write(element, content) {
  element.textContent = content;
}
function monthList(nmb) {
  return nmb == 0
    ? "enero"
    : nmb == 1
    ? "febrero"
    : nmb == 2
    ? "marzo"
    : nmb == 3
    ? "abril"
    : nmb == 4
    ? "mayo"
    : nmb == 5
    ? "junio"
    : nmb == 6
    ? "julio"
    : nmb == 7
    ? "agosto"
    : nmb == 8
    ? "septiembre"
    : nmb == 9
    ? "octubre"
    : nmb == 10
    ? "noviembre"
    : nmb == 11
    ? "diciembre"
    : new Error("Invalid Number");
}

let _date_ = `${today.getDate()} de ${monthList(today.getMonth())}`;
write($date, _date_);

