var u = (s, m, r) =>
  new Promise((h, d) => {
    var S = (e) => {
        try {
          n(r.next(e));
        } catch (c) {
          d(c);
        }
      },
      w = (e) => {
        try {
          n(r.throw(e));
        } catch (c) {
          d(c);
        }
      },
      n = (e) => (e.done ? h(e.value) : Promise.resolve(e.value).then(S, w));
    n((r = r.apply(s, m)).next());
  });
import R from "./externalServices.js";
import { loadHeaderFooter as v, getParam as f } from "./utils.js";
import a from "./SearchResultsList.js";
import k from "./darkmode.js";
function p() {
  return u(this, null, function* () {
    yield v(), new k().init();
  });
}
p();
const j = document.querySelector(".rewinder");
j.addEventListener("click", () => {
  t != 0 && ((t -= 40), new a(o, i, l, t).init());
});
const y = document.querySelector(".advancer");
y.addEventListener("click", () => {
  (t += 40), new a(o, i, l, t).init();
});
let t = 0;
const o = f("searchInput"),
  i = new R(),
  l = document.querySelector(".searchResults"),
  E = new a(o, i, l, t);
E.init();
