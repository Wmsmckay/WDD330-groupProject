var u = (r, t, e) =>
  new Promise((o, i) => {
    var a = (s) => {
        try {
          c(e.next(s));
        } catch (l) {
          i(l);
        }
      },
      n = (s) => {
        try {
          c(e.throw(s));
        } catch (l) {
          i(l);
        }
      },
      c = (s) => (s.done ? o(s.value) : Promise.resolve(s.value).then(a, n));
    c((e = e.apply(r, t)).next());
  });
import {
  loadTemplate as h,
  renderListWithTemplate as f,
  getLocalStorage as m,
  setLocalStorage as b,
  runModal as S,
  getStars as y,
  doubleNumberInsert as T,
} from "./utils.js";
import L from "./externalServices.js";
let g = new L();
export default class p {
  constructor(t, e, o, i) {
    (this.searchTerm = t),
      (this.dataSource = e),
      (this.listElement = o),
      (this.searchBatchStart = i);
  }
  init() {
    return u(this, null, function* () {
      const t = yield this.dataSource.getBookData(
        this.searchTerm,
        this.searchBatchStart
      );
      let e = document.querySelectorAll(".result-div");
      e.length > 0 &&
        e.forEach((o) => {
          o.parentNode.removeChild(o);
        }),
        this.searchBatchStart != 0
          ? document.querySelector(".rewinder").classList.remove("hide")
          : document.querySelector(".rewinder").classList.add("hide"),
        this.renderList(t.items);
    });
  }
  renderList(t) {
    return u(this, null, function* () {
      const e = yield h("./partials/searchResults.html");
      f(e, this.listElement, t, this.prepareTemplate);
      let o = document.querySelector(".back_to_top");
      o != null && o.parentNode.removeChild(o), S(_, k, !0);
      let i = document.querySelectorAll(".specialCount");
      T(i, this.searchBatchStart);
      let a = document.querySelector(".search_results_header");
      a.innerHTML =
        "(" +
        (this.searchBatchStart + 1) +
        "-" +
        (this.searchBatchStart + 40) +
        ")";
      let n = document.createElement("button");
      (n.type = "button"),
        (n.className = "back_to_top"),
        (n.innerHTML = "Back to the Top"),
        this.listElement.appendChild(n),
        n.addEventListener("click", () => {
          window.scrollTo(0, 0);
        });
    });
  }
  prepareTemplate(t, e) {
    try {
      t.querySelector("img").src = e.volumeInfo.imageLinks.smallThumbnail;
    } catch (l) {
      t.querySelector("img").src = "./images/bookCoverPlaceholder.gif";
    }
    (t.querySelector("img").alt = e.volumeInfo.title),
      (t.querySelector(".bookTitle").innerHTML = e.volumeInfo.title);
    let o = t.querySelector(".authors");
    try {
      e.volumeInfo.authors.forEach((l) => {
        o.innerHTML += `${l}, `;
      });
    } catch (l) {
      o.innerHTML += "No Author Listed, ";
    }
    (o.innerHTML = o.innerHTML.slice(0, -2)),
      e.volumeInfo.publisher
        ? (t.querySelector(".publisher").innerHTML += e.volumeInfo.publisher)
        : (t.querySelector(".publisher").innerHTML = "No Publisher Listed");
    const i = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let a = new Date(e.volumeInfo.publishedDate);
    (t.querySelector(".publishDate").innerHTML += a.toLocaleDateString(
      "en-US",
      i
    )),
      (t.querySelector(".addToShelfButtons").innerHTML = v(e.id));
    let n = t.querySelector(".addToReading");
    n.addEventListener("click", () =>
      u(this, null, function* () {
        let l = n.getAttribute("data-id");
        d(l, "reading-shelf");
      })
    );
    let c = t.querySelector(".addToRead");
    c.addEventListener("click", () =>
      u(this, null, function* () {
        let l = c.getAttribute("data-id");
        d(l, "read-shelf");
      })
    );
    let s = t.querySelector(".addToWantToRead");
    return (
      s.addEventListener("click", () =>
        u(this, null, function* () {
          let l = s.getAttribute("data-id");
          d(l, "want-read-shelf");
        })
      ),
      t
    );
  }
}
function d(r, t) {
  let e = m(t);
  e == null && (e = []);
  let o = new Date(),
    i = { id: r, now: o },
    a = !1;
  e.forEach((n) => {
    r == n.id && ((n.now = o), (a = !0));
  }),
    a == !1 && e.push(i),
    b(t, e);
}
function v(r) {
  return `<button class="addToReading" data-id="${r}">Reading</button>
    <button class="addToRead" data-id="${r}">Read</button>
    <button class="addToWantToRead" data-id="${r}">Want to Read</button>`;
}
function _(r) {
  return u(this, null, function* () {
    return (
      document.querySelectorAll(".addToReading").forEach((o) => {
        let i = o.getAttribute("data-id");
      }),
      yield g.findBookById(r, !1)
    );
  });
}
function k(r, t) {
  return u(this, null, function* () {
    let e = yield r;
    try {
      t.querySelector(".book_modal_img").src =
        e.volumeInfo.imageLinks.smallThumbnail;
    } catch (o) {
      t.querySelector(".book_modal_img").src =
        "./images/bookCoverPlaceholder.gif";
    }
    if (
      ((t.querySelector(".book_modal_img").alt = e.volumeInfo.title),
      (t.querySelector(".books_modal_title").innerHTML = e.volumeInfo.title),
      e.volumeInfo.subtitle
        ? (t.querySelector(".books_modal_title").innerHTML +=
            ": " + e.volumeInfo.subtitle)
        : (t.querySelector(".books_modal_title").innerHTML += ""),
      e.volumeInfo.authors
        ? (t.querySelector(".books_modal_authors").innerHTML +=
            e.volumeInfo.authors.join(", "))
        : (this.author = "No Author Listed"),
      e.volumeInfo.publishedDate
        ? (t.querySelector(".books_modal_publish_date").innerHTML += new Date(
            e.volumeInfo.publishedDate
          ).toDateString("en-US"))
        : (t.querySelector(".books_modal_publish_date").innerHTML +=
            "No Publish Date Listed"),
      e.volumeInfo.publisher
        ? (t.querySelector(".books_modal_publisher").innerHTML +=
            e.volumeInfo.publisher)
        : (t.querySelector(".books_modal_publisher").innerHTML +=
            "No Publisher Listed"),
      e.volumeInfo.printedPageCount
        ? (t.querySelector(".books_modal_page_count").innerHTML =
            e.volumeInfo.printedPageCount + " Pages")
        : (t.querySelector(".books_modal_page_count").innerHTML =
            "Book Length Not Given"),
      e.volumeInfo.categories
        ? (t.querySelector(".books_modal_genre").innerHTML =
            "Category: " + e.volumeInfo.categories)
        : (t.querySelector(".books_modal_genre").innerHTML =
            "Genre Not Listed"),
      e.volumeInfo.ratingsCount)
    ) {
      let o;
      e.volumeInfo.ratingsCount == 1 ? (o = " Review") : (o = " Reviews");
      let i = y(e.volumeInfo.averageRating);
      t.querySelector(".books_modal_ratings").innerHTML =
        e.volumeInfo.ratingsCount + o + " &nbsp; " + i;
    } else t.querySelector(".books_modal_ratings").innerHTML = "No Reviews";
    (t.querySelector(".books_modal_infoLink").href = e.volumeInfo.infoLink),
      (t.querySelector(".books_modal_previewLink").href =
        e.volumeInfo.previewLink),
      e.volumeInfo.previewLink
        ? (t.querySelector(".books_modal_summary").innerHTML =
            e.volumeInfo.description)
        : (t.querySelector(".books_modal_summary").innerHTML =
            "There is no summary given for this book.");
  });
}
