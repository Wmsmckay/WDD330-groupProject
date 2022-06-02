var v = (e, m, t) =>
  new Promise((r, o) => {
    var a = (c) => {
        try {
          l(t.next(c));
        } catch (n) {
          o(n);
        }
      },
      p = (c) => {
        try {
          l(t.throw(c));
        } catch (n) {
          o(n);
        }
      },
      l = (c) => (c.done ? r(c.value) : Promise.resolve(c.value).then(a, p));
    l((t = t.apply(e, m)).next());
  });
import E from "./externalServices.js";
import {
  loadHeaderFooter as g,
  getParam as k,
  setLocalStorage as d,
} from "./utils.js";
import i from "./SearchResultsList.js";
import w from "./darkmode.js";
function B() {
  return v(this, null, function* () {
    let e = "search ";
    yield g(), new w().init();
    const t = document.getElementById("searchScope1");
    t.addEventListener("click", () => {
      (e = t.value), d("searchScope", e);
    });
    const r = document.getElementById("searchScope2");
    r.addEventListener("click", () => {
      (e = r.value), console.log(e), d("searchScope", e);
    });
    const o = document.getElementById("searchScope3");
    o.addEventListener("click", () => {
      (e = o.value), console.log(e), d("searchScope", e);
    });
    const a = document.getElementById("searchScope4");
    a.addEventListener("click", () => {
      (e = a.value), console.log(e), d("searchScope", e);
    }),
      document.querySelector(".rewinder").addEventListener("click", () => {
        s != 0 && ((s -= 40), new i(e, h, u, S, s).init());
      }),
      document.querySelector(".advancer").addEventListener("click", () => {
        (s += 40), console.log(s), new i(e, h, u, S, s).init();
      }),
      new i(e, h, u, S, s).init();
  });
}
B();
let s = 0;
const h = k("searchInput"),
  u = new E(),
  S = document.querySelector(".searchResults");
