var i = (e, n, a) =>
  new Promise((m, t) => {
    var s = (o) => {
        try {
          d(a.next(o));
        } catch (r) {
          t(r);
        }
      },
      k = (o) => {
        try {
          d(a.throw(o));
        } catch (r) {
          t(r);
        }
      },
      d = (o) => (o.done ? m(o.value) : Promise.resolve(o.value).then(s, k));
    d((a = a.apply(e, n)).next());
  });
import { loadHeaderFooter as c } from "./utils.js";
import f from "./darkmode.js";
function l() {
  return i(this, null, function* () {
    yield c(), new f().init();
  });
}
l();
