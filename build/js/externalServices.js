var l=(r,e,o)=>new Promise((a,t)=>{var c=s=>{try{n(o.next(s))}catch(i){t(i)}},u=s=>{try{n(o.throw(s))}catch(i){t(i)}},n=s=>s.done?a(s.value):Promise.resolve(s.value).then(c,u);n((o=o.apply(r,e)).next())});const f="https://www.googleapis.com/books/v1/volumes/";function k(r){return l(this,null,function*(){const e=r.json();if(r.ok)return e;throw{name:"servicesError",message:e}})}export default class d{constructor(){}getBookData(e,o,a=0){return l(this,null,function*(){const t=yield fetch(f+`?q=${e}${o}
    &printType=books&maxResults=40&startIndex=${a}`),c=yield k(t);return c.items.forEach(n=>{n.PreferredGenre=!1,n.Rating="Unrated"}),c})}findBookById(e,o=!0){return l(this,null,function*(){let a=yield fetch(f+e),t=yield k(a);return o==!0&&(t.volumeInfo.PreferredGenre=!1,t.volumeInfo.Rating="Unrated"),t})}}
