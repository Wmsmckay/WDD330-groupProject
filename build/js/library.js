var d = (e, m, a) =>
  new Promise((u, o) => {
    var v = (t) => {
        try {
          n(a.next(t));
        } catch (r) {
          o(r);
        }
      },
      f = (t) => {
        try {
          n(a.throw(t));
        } catch (r) {
          o(r);
        }
      },
      n = (t) => (t.done ? u(t.value) : Promise.resolve(t.value).then(v, f));
    n((a = a.apply(e, m)).next());
  });
import { loadHeaderFooter as h } from "./utils.js";
import s from "./libraryActions.js";
import g from "./darkmode.js";
function k() {
  return d(this, null, function* () {
    yield h(), new g().init();
  });
}
k();
let y = document.querySelector("#read_bttn");
y.addEventListener("click", () => {
  new s("read-shelf").getShelvedBooks();
});
let c = document.querySelector("#reading_bttn");
c.addEventListener("click", () => {
  let e = new s("reading-shelf");
  c.setAttribute("class", ".active"), e.getShelvedBooks();
});
let B = document.querySelector("#want_bttn");
B.addEventListener("click", () => {
  new s("want-read-shelf").getShelvedBooks();
});
for (
  var b = document.getElementById("MyLIB"),
    i = b.getElementsByClassName("btn"),
    l = 0;
  l < i.length;
  l++
)
  i[l].addEventListener("click", function () {
    var e = document.getElementsByClassName("active");
    (e[0].className = e[0].className.replace(" active", "")),
      (this.className += " active");
  });
