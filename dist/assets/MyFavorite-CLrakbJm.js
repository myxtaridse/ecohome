import{R as o,C as h,j as e,L as d}from"./index-CMoKTCJ9.js";import{r as f}from"./fetchProducts-nQmjoAxH.js";const m=()=>{const{setPathValue:l,storage:s,pathFavorite:n}=o.useContext(h);o.useEffect(()=>{f().then(t=>{console.log(n,t)}),n==="/"&&l(["Главная","Плита печная цельная"])},[l]);const[a,i]=o.useState(null);return o.useEffect(()=>{s&&JSON.parse(s).length&&f().then(r=>{const c=r.filter(u=>r.filter(g=>g===u.article)?u:null);c&&i(c)}).catch(r=>{console.log(r),a&&i(null)})},[s]),a?e.jsx(e.Fragment,{children:a.map(t=>e.jsx("div",{children:e.jsx("h1",{children:t.titleGood})},t.id))}):e.jsx(d,{})};export{m as default};
