var u = (t, n, e) =>
  new Promise((o, l) => {
    var i = (c) => {
        try {
          a(e.next(c));
        } catch (r) {
          l(r);
        }
      },
      s = (c) => {
        try {
          a(e.throw(c));
        } catch (r) {
          l(r);
        }
      },
      a = (c) => (c.done ? o(c.value) : Promise.resolve(c.value).then(i, s));
    a((e = e.apply(t, n)).next());
  });
function b(t) {
  try {
    if (t.ok) return t.text();
    throw new Error("Bad Response");
  } catch (n) {}
}
export function loadTemplate(t) {
  return u(this, null, function* () {
    const n = yield fetch(t).then(b),
      e = document.createElement("template");
    return (e.innerHTML = n), e;
  });
}
export function renderListWithTemplate(t, n, e, o, l) {
  e.forEach((i) => {
    const s = t.content.cloneNode(!0),
      a = o(s, i);
    n.appendChild(a);
  });
}
export function renderWithTemplate(t, n, e, o) {
  let l = t.content.cloneNode(!0);
  o && (l = o(l, e)), n.appendChild(l);
}
export function loadHeaderFooter() {
  return u(this, null, function* () {
    let t, n;
    (t = yield loadTemplate("./partials/header.html")),
      (n = yield loadTemplate("./partials/footer.html"));
    const e = document.querySelector("header"),
      o = document.querySelector("footer");
    renderWithTemplate(t, e), renderWithTemplate(n, o);
  });
}
export function getLocalStorage(t) {
  return JSON.parse(localStorage.getItem(t));
}
export function setLocalStorage(t, n) {
  localStorage.setItem(t, JSON.stringify(n));
}
export function getParam(t) {
  const n = window.location.search;
  return new URLSearchParams(n).get(t);
}
export function alertMessage(t, n, e = !0) {
  const o = document.createElement("p");
  (o.className = "alert"),
    (o.innerHTML = t + "<span class='x-out' id=" + n + ">X</span>"),
    o.addEventListener("click", () => {
      l.removeChild(o);
    });
  const l = document.querySelector("main");
  l.prepend(o), e && window.scrollTo(0, 0);
}
export function removeAllInserts(t, n) {
  document
    .querySelectorAll("." + t)
    .forEach((o) => document.querySelector(`.${n}`).removeChild(o));
}
export function insertTitle(t, n) {
  const e = document.querySelectorAll(".shelf_title");
  (e.className = "delete_me"),
    e.className === "delete_me" && e.forEach((l) => t.removeChild(l));
  let o = document.createElement("h1");
  (o.className = "shelf_title"),
    (o.innerHTML = `Welcome to Your ${n}!`),
    t.prepend(o);
}
export function insertBookCount(t) {
  removeAllInserts("count_message", "opening");
  const n = document.createElement("p");
  (n.className = "count_message"),
    (n.innerHTML = `You have &nbsp;- <span class="count">${t}</span> -&nbsp; total books on this shelf.`),
    console.log(n.innerHTML);
  const e = document.querySelector("main");
  console.log(e.firstChild.nextSibling),
    e.insertBefore(n, e.firstChild.nextSibling);
}
export function runModal(t, n, e = !1) {
  let o,
    l = document.querySelectorAll(".modal"),
    i = 0;
  l.forEach((r) => {
    r.setAttribute("data-id", "match" + i), i++;
  });
  let s = document.querySelectorAll(".details_bttn"),
    a = 0;
  s.forEach((r) => {
    (r.id = "details_bttn" + a), r.setAttribute("data-id", "match" + a);
    let d = document.getElementById("details_bttn" + a);
    (d.onclick = function () {
      l.forEach((m) => {
        if (m.getAttribute("data-id") == d.getAttribute("data-id")) {
          if (e == !0) {
            let p =
              d.previousElementSibling.lastElementChild.previousElementSibling
                .previousElementSibling.firstElementChild;
            console.log(p);
            let f = p.getAttribute("data-id");
            console.log(f);
            let h = d.nextElementSibling;
            console.log(h);
            let g = t(f);
            n(g, h);
          }
          o = m;
        }
      }),
        (o.style.display = "block");
    }),
      a++;
  }),
    document.querySelectorAll(".close").forEach((r) => {
      r.onclick = function () {
        o.style.display = "none";
      };
    }),
    (window.onclick = function (r) {
      r.target == o && (o.style.display = "none");
    });
}
export function getStars(t) {
  let n = Math.round(t * 2) / 2,
    e = [];
  for (var o = n; o >= 1; o--)
    e.push(
      "<i class='fa fa-star' aria-hidden='true' style='color: gold;'></i>&nbsp;"
    );
  o == 0.5 &&
    e.push(
      "<i class='fa fa-star-half-o' aria-hidden='true' style='color: gold;'></i>&nbsp;"
    );
  for (let l = 5 - n; l >= 1; l--)
    e.push(
      "<i class='fa fa-star-o' aria-hidden='true' style='color: gold;'></i>&nbsp;"
    );
  return e.join("");
}
export function doubleNumberInsert(t, n) {
  let e = n,
    o = 0;
  t.forEach((l) => {
    o % 2 == 0 && e++, (l.innerHTML = e), o++;
  });
}
