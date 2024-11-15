import{R as r,u as L,j as e,L as w,C as p,i as l}from"./index-B3M6Bnp3.js";const C=[{idUser:"user1",firstName:"Какой-то",lastName:"Пришелец",photoUser:"http://localhost:5173/ecohome/src/assets/image-2.png"}],u=[{id:"1",article:"161616",url:"http://localhost:5173/ecohome#/goods/article",titleGood:"Плита печная цельная",photoGood:["http://localhost:5173/ecohome/src/assets/image.png","http://localhost:5173/ecohome/src/assets/image-2.png","http://localhost:5173/ecohome/src/assets/image-3.png"],categoryRelative:"Товары для банни и ванной",categoryChildren:"Аксессуары для бани",price:1413,count:80,description:"Колосник - это элемент гарнитуры топки, необходимая составляющая любой печи. Решетка для печи выполнена из жаропрочного литейного чугуна и предназначена для поддержания слоя твердого горящего топлива в топке и подвода воздуха в слой топлива через отверстия - прозоры. Колосник также выполняет функцию отвода золы из топочной камеры в зольник. Материал устойчив к повреждениям, деформации, не окисляется при взаимодействии с воздухом.",parameter:[{titleParameter:"Артикул",valueParameter:"80164116",isShowArticle:!0},{titleParameter:"Количество предметов в упаковке",valueParameter:"1",isShowArticle:!0},{titleParameter:"Материал изделия",valueParameter:"чугун",isShowArticle:!0},{titleParameter:"Страна производства",valueParameter:"Россия",isShowArticle:!0},{titleParameter:"Комплектация",valueParameter:"Колосник чугунный - 1 шт.",isShowArticle:!0},{titleParameter:"Высота предмета",valueParameter:"2 см",isShowArticle:!0},{titleParameter:"Ширина предмета",valueParameter:"30 см",isShowArticle:!0},{titleParameter:"Глубина предмета",valueParameter:"20 см",isShowArticle:!0},{titleParameter:"Вес с упаковкой (кг)",valueParameter:"5.5 кг",isShowArticle:!0}],reviews:[{id:"rev-1",idUser:"user",url:"http://localhost:5173/ecohome#/goods/article",textReviews:"Какой размер данного изделия?",photoReviews:"http://localhost:5173/ecohome/src/assets/image-2.png",statusRev:"5",answers:[{id:"rev-ans-1",idUser:"user1",url:"http://localhost:5173/ecohome#/goods/article/#",textAnswer:"Высота - 2 см, Ширина - 30 см, Глубина - 20 см"}]}]},{id:"2",article:"75832797",url:"http://localhost:5173/ecohome#/goods/article",titleGood:"Дверка прочистная ДПР (150х112)",photoGood:["http://localhost:5173/ecohome/src/assets/image.png","http://localhost:5173/ecohome/src/assets/image-2.png","http://localhost:5173/ecohome/src/assets/image-3.png"],categoryRelative:"Товары для банни и ванной",categoryChildren:"Аксессуары для бани",price:1413,count:80,description:"Колосник - это элемент гарнитуры топки, необходимая составляющая любой печи. Решетка для печи выполнена из жаропрочного литейного чугуна и предназначена для поддержания слоя твердого горящего топлива в топке и подвода воздуха в слой топлива через отверстия - прозоры. Колосник также выполняет функцию отвода золы из топочной камеры в зольник. Материал устойчив к повреждениям, деформации, не окисляется при взаимодействии с воздухом.",parameter:[{titleParameter:"Артикул",valueParameter:"80164116",isShowArticle:!0},{titleParameter:"Количество предметов в упаковке",valueParameter:"1",isShowArticle:!0},{titleParameter:"Материал изделия",valueParameter:"чугун",isShowArticle:!0},{titleParameter:"Страна производства",valueParameter:"Россия",isShowArticle:!0},{titleParameter:"Комплектация",valueParameter:"Колосник чугунный - 1 шт.",isShowArticle:!0},{titleParameter:"Высота предмета",valueParameter:"2 см",isShowArticle:!0},{titleParameter:"Ширина предмета",valueParameter:"30 см",isShowArticle:!0},{titleParameter:"Глубина предмета",valueParameter:"20 см",isShowArticle:!0},{titleParameter:"Вес с упаковкой (кг)",valueParameter:"5.5 кг",isShowArticle:!0}],reviews:[{id:"rev-1",idUser:"user",url:"http://localhost:5173/ecohome#/goods/article",textReviews:"Какой размер данного изделия?",photoReviews:"http://localhost:5173/ecohome/src/assets/image-2.png",statusRev:"5",answers:[{id:"rev-ans-1",idUser:"user1",url:"http://localhost:5173/ecohome#/goods/article/#",textAnswer:"Высота - 2 см, Ширина - 30 см, Глубина - 20 см"}]}]}],I={users:C,goods:u},N=async()=>(await fetch("http://localhost:300/goods")).json(),x=r.createContext(null),f=({children:s})=>{const i=I.goods,[t,o]=r.useState(null),a=L().pathname.split("/goods/").join("");return r.useEffect(()=>{N().then(g=>{const h=g.filter(c=>c.article===a);console.log(h,"api")}).catch(g=>{if(console.log(g),i){const h=i.filter(c=>c.article===a);console.log(h,"local"),o(i)}})},[i,a]),e.jsx(x.Provider,{value:t,children:s})},V=({setIsActive:s})=>{const i=r.useContext(x);return i.length?e.jsxs("div",{className:"goodItem-main",children:[e.jsxs("div",{className:"goodItem-main-article-reviews goodItem-main-reviews-show",children:[e.jsxs("p",{className:"goodItem-main-article",children:["Код товара: ",i[0].article]}),e.jsx("a",{href:"#reviews",onClick:()=>s(1),children:e.jsxs("div",{className:"goodItem-main-reviews",children:[e.jsx("div",{className:"goodItem-main-stars",children:Array(5).fill("").map(()=>e.jsx("div",{className:"goodItem-main-starItem",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"})})},Math.random()))}),e.jsxs("p",{children:[i[0].reviews.length," отзывов"]})]})})]}),e.jsxs("div",{className:"goodItem-main-image-block",children:[e.jsxs("div",{className:"goodItem-main-image-gallery",children:[e.jsx("div",{className:"goodItem-main-image-gallery-arrow",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z"})})}),e.jsx("img",{src:i[0].photoGood[0],alt:"goodItem"}),e.jsx("img",{src:i[0].photoGood[1],alt:"goodItem"}),e.jsx("img",{src:i[0].photoGood[2],alt:"goodItem"}),e.jsx("div",{className:"goodItem-main-image-gallery-arrow",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"})})})]}),e.jsx("img",{src:i[0].photoGood[0],alt:"goodItem",className:"goodItem-main-image"})]})]}):e.jsx(w,{})},M=()=>{const s=r.useContext(x),{storageFavorite:i,setStorageFavorite:t}=r.useContext(p),[o,d]=r.useState(!1),a=s[0].article,g=()=>{if(a)if(d(!o),!o)i&&(i.includes(a)||t(c=>[...c,a]));else{const h=i.filter(c=>c.article==a);t(h)}};return e.jsxs("div",{className:"goodItem-add",children:[e.jsxs("div",{className:"goodItem-main-article-reviews goodItem-add-reviews-show",children:[e.jsxs("p",{className:"goodItem-main-article",children:["Код товара: ",s[0].article]}),e.jsxs("div",{className:"goodItem-main-reviews",children:[e.jsx("div",{className:"goodItem-main-stars",children:Array(5).fill("").map(()=>e.jsx("div",{className:"goodItem-main-starItem",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"})})},Math.random()))}),e.jsxs("p",{children:[s[0].reviews.length," отзывов"]})]})]}),e.jsxs("div",{className:"goodItem-add-block",children:[e.jsxs("div",{className:"goodItem-add-block-item",onClick:g,children:[e.jsx("div",{style:{transform:o?"scale(0)":"scale(1)",opacity:o?"0":"1"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"rgba(151,131,121,1)",children:e.jsx("path",{d:"M19.2426 4.75736C20.705 6.2228 21.2547 8.25005 20.8924 10.1368C21.4614 10.2972 21.9987 10.6002 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L13.978 18.5L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736ZM12.962 12.4646C12.346 13.0761 12.346 14.0615 12.962 14.673L17 18.6818L21.038 14.673C21.654 14.0615 21.654 13.0761 21.038 12.4646C20.414 11.8451 19.3962 11.8451 18.77 12.4668L16.9979 14.2206L15.591 12.825L15.2278 12.4646C14.6038 11.8451 13.586 11.8451 12.962 12.4646ZM4.17157 6.17157C2.68183 7.66131 2.60704 10.0473 3.97993 11.6232L10.9999 18.6543L12.559 17.092L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453C17.7877 10.6238 18.2921 10.3297 18.828 10.1632C19.2436 8.79577 18.9058 7.25122 17.827 6.1701C16.3279 4.66794 13.9076 4.60701 12.337 6.01687L11.0019 7.21524L9.66605 6.01781C8.09098 4.60597 5.67506 4.66808 4.17157 6.17157Z"})})}),e.jsx("div",{className:"goodItem-add-block-item-like-animation",style:{transform:o?"scale(1)":"scale(0)",opacity:o?"1":"0"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"rgba(207,78,50,1)",children:e.jsx("path",{d:"M17.3631 11.0453C18.767 9.65157 21.0432 9.65157 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453ZM19.2426 4.75736C20.1831 5.69977 20.7461 6.87453 20.9318 8.09485C19.5993 7.84749 18.1932 8.08543 17.0001 8.808C14.8491 7.50516 12.0056 7.7777 10.1439 9.62594C8.01293 11.7414 7.95374 15.1405 9.96628 17.3273L10.1439 17.5117L12.565 19.916L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736Z"})})}),e.jsx("p",{children:o?"В избранном":"В избранное"})]}),e.jsxs("div",{className:"goodItem-add-block-item",children:[e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"rgba(151,131,121,1)",children:e.jsx("path",{d:"M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"})})}),e.jsx("p",{children:"Сравнить"})]})]}),e.jsxs("div",{className:"goodItem-add-price-btns-block",children:[e.jsxs("div",{className:"goodItem-add-price",children:[e.jsxs("h1",{children:[s[0].price," ₽"]}),e.jsx("p",{children:"Розничная цена"})]}),e.jsxs("div",{className:"goodItem-add-btns",children:[e.jsx("button",{children:"В корзину"}),e.jsx("button",{children:"Купить сейчас"})]}),e.jsx("hr",{}),e.jsx("button",{className:"goodItem-add-opt-price",children:"Узнать оптовую цену"}),e.jsx("div",{className:"goodItem-add-info-price",children:"Нашли дешевле? Сообщите!"})]}),e.jsxs("div",{className:"goodItem-add-info",children:[e.jsxs("div",{className:"goodItem-add-info-item",children:[e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"rgba(25,163,49,1)",children:e.jsx("path",{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"})})}),e.jsxs("p",{children:["В наличие: ",s[0].count," штук"]})]}),e.jsxs("div",{className:"goodItem-add-info-item",children:[e.jsx("div",{children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",e.jsx("path",{d:"M22 22H2",stroke:"#cf4e32",strokeWidth:"1.5",strokeLinecap:"round"})," ",e.jsx("path",{d:"M20 22V11",stroke:"#cf4e32",strokeWidth:"1.5",strokeLinecap:"round"})," ",e.jsx("path",{d:"M4 22V11",stroke:"#cf4e32",strokeWidth:"1.5",strokeLinecap:"round"})," ",e.jsx("path",{d:"M16.5278 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2Z",stroke:"#cf4e32",strokeWidth:"1.5",strokeLinejoin:"round"})," ",e.jsx("path",{d:"M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5",stroke:"#cf4e32",strokeWidth:"1.5",strokeLinecap:"round"})," "]})]})}),e.jsx("p",{children:"Самовывоз: сегодня"})]}),e.jsxs("div",{className:"goodItem-add-info-item",children:[e.jsx("div",{children:e.jsxs("svg",{fill:"#cf4e32",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",stroke:"#cf4e32",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",e.jsxs("g",{"data-name":"31 delivery box",id:"_31_delivery_box",children:[" ",e.jsx("path",{d:"M32,3.5A19.7,19.7,0,0,0,12.32,23.18c0,.03.02.06.02.09a1.18,1.18,0,0,0,.04.2,1.336,1.336,0,0,0,.07.18,1.3,1.3,0,0,0,.1.15,1,1,0,0,0,.15.14.234.234,0,0,0,.07.07L28.7,34.63H17.43a2.006,2.006,0,0,0-2,2V58.5a2.006,2.006,0,0,0,2,2H46.57a2.006,2.006,0,0,0,2-2V36.63a2.006,2.006,0,0,0-2-2H35.3L51.23,24.01a.234.234,0,0,0,.07-.07,1,1,0,0,0,.15-.14,1.3,1.3,0,0,0,.1-.15,1.336,1.336,0,0,0,.07-.18,1.18,1.18,0,0,0,.04-.2c0-.03.02-.06.02-.09A19.7,19.7,0,0,0,32,3.5Zm0,2a17.694,17.694,0,0,1,15.68,9.52,10.243,10.243,0,0,0-6.34-2.18A10.347,10.347,0,0,0,32,18.75a10.347,10.347,0,0,0-9.34-5.91,10.243,10.243,0,0,0-6.34,2.18A17.694,17.694,0,0,1,32,5.5ZM14.35,22.66A8.333,8.333,0,0,1,31,23.18V33.76ZM34.11,36.63v8.55l-1.56-1.04a.975.975,0,0,0-1.1,0l-1.56,1.04V36.63Zm1.47,11.3a1,1,0,0,0,.53-.88V36.63H46.57V58.5H17.43V36.63H27.89V47.05a1,1,0,0,0,.53.88,1.009,1.009,0,0,0,1.02-.05L32,46.17l2.56,1.71a1.016,1.016,0,0,0,.55.17A.939.939,0,0,0,35.58,47.93ZM33,33.76V23.18a8.333,8.333,0,0,1,16.65-.52Z"})," ",e.jsx("path",{d:"M43.42,50.2H37.19a1,1,0,0,0-1,1v4.15a1,1,0,0,0,1,1h6.23a1,1,0,0,0,1-1V51.2A1,1,0,0,0,43.42,50.2Zm-1,4.15H38.19V52.2h4.23Z"})," "]})," "]})]})}),e.jsx("p",{children:" Доставка: от 1 часа"})]})]})]})},j=()=>{const s=r.useContext(x);if(s)return e.jsxs("div",{className:"goodItem-parameter",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"goodItem-main-article-reviews goodItem-parameter-reviews-show",children:[e.jsxs("p",{className:"goodItem-main-article",children:["Код товара: ",s[0].article]}),e.jsxs("div",{className:"goodItem-main-reviews",children:[e.jsx("div",{className:"goodItem-main-stars",children:Array(5).fill("").map(()=>e.jsx("div",{className:"goodItem-main-starItem",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"})})},Math.random()))}),e.jsxs("p",{children:[s[0].reviews.length," отзывов"]})]})]}),e.jsxs("div",{className:"goodItem-parameter-exchange",children:[e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM15.0049 7.00275L18.5049 10.0027L15.0049 13.0027V11.0027H11.0049V9.00275H15.0049V7.00275ZM9.00488 17.0027L5.50488 14.0027L9.00488 11.0027V13.0027H13.0049V15.0027H9.00488V17.0027Z"})})}),e.jsx("p",{children:"Обмен и возврат 10 дней"})]})]}),e.jsx("h2",{children:"Характеристики:"}),e.jsxs("div",{className:"goodItem-parameter-block",children:[s[0].parameter.map((i,t)=>e.jsxs("div",{className:"goodItem-parameter-item",children:[e.jsx("p",{children:i.titleParameter}),e.jsx("div",{className:"goodItem-parameter-item-line"}),e.jsx("p",{children:i.valueParameter})]},t)),e.jsxs("div",{className:"goodItem-parameter-link",children:[e.jsx("p",{children:"Все характеристики"}),e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"})})})]})]})]})},k=()=>{const s=r.useContext(x);return e.jsxs("div",{className:"goodItem-description",children:[e.jsx("h2",{children:"Описание"}),e.jsx("div",{className:"goodItem-description-text",children:s[0].description})]})},H=()=>e.jsxs("div",{className:"goodItem-questions",children:[e.jsxs("div",{className:"goodItem-questions-title",children:[e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14H13V16H11V14ZM8.56731 8.81346C8.88637 7.20919 10.302 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13H11V11H12C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.2723 8 10.6656 8.51823 10.5288 9.20577L8.56731 8.81346Z"})})}),e.jsx("h1",{children:"Задайте вопрос по товару Плита печная цельная:"})]}),e.jsx("p",{className:"goodItem-questions-subtitle",children:"Вопрос-ответ - среда для общения, обмена опытом и знаниями касательно товаров между пользователями сайта. Здесь можно обсудить продукцию, задать по ней вопрос, решить проблему с выбором и использованием, а также помочь другим участникам."}),e.jsxs("form",{action:"",children:[e.jsx("input",{type:"text",placeholder:"Имя*"}),e.jsx("input",{type:"text",placeholder:"Телефон*"}),e.jsx("textarea",{placeholder:"Комментарий*"}),e.jsxs("button",{children:["Отправить ",e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"})})})]})]})]}),Z=()=>e.jsxs("div",{className:"goodItem-reviews-item-answer",children:[e.jsxs("div",{className:"goodItem-reviews-item-user",children:[e.jsx("div",{className:"goodItem-reviews-item-user-avatar"}),e.jsxs("div",{className:"goodItem-reviews-item-user-name",children:[e.jsx("h3",{children:"Какой-то Пришелец"}),e.jsx("p",{children:"30 минут назад"})]}),e.jsx("div",{className:"goodItem-reviews-item-link",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"})})})]}),e.jsx("p",{className:"goodItem-reviews-item-text",children:"Высота - 2 см, Ширина - 30 см, Глубина - 20 см"}),e.jsxs("div",{className:"goodItem-reviews-item-answer-actions",children:[e.jsxs("div",{className:"goodItem-reviews-item-answer-mark",children:[e.jsxs("div",{className:"goodItem-reviews-item-answer-mark-plus",children:[e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"})})}),e.jsx("p",{children:"22"})]}),e.jsxs("div",{className:"goodItem-reviews-item-answer-mark-minus",children:[e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15H18.5182C18.1932 15 17.8886 15.1579 17.7012 15.4233L12.2478 23.149C12.1053 23.3508 11.8367 23.4184 11.6157 23.3078L9.80163 22.4008C8.74998 21.875 8.20687 20.6874 8.49694 19.548L9.40017 16ZM17 13.4125V5H5.83939L3 11.8957V14H9.40017C10.7049 14 11.6602 15.229 11.3384 16.4934L10.4351 20.0414C10.3771 20.2693 10.4857 20.5068 10.6961 20.612L11.3572 20.9425L16.0673 14.27C16.3172 13.9159 16.6366 13.6257 17 13.4125ZM19 13H21V5H19V13Z"})})}),e.jsx("p",{children:"5"})]})]}),e.jsx("div",{className:"goodItem-reviews-item-answer-answ",children:"Ответить"}),e.jsxs("div",{className:"goodItem-reviews-item-answer-complain",children:[e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z"})})}),e.jsx("p",{children:"Пожаловаться"})]})]})]}),P=({isreviews:s})=>e.jsx("div",{children:e.jsx("div",{className:"goodItem-reviews-item-reviews",children:e.jsxs("div",{className:["goodItem-reviews-reviews-list",s?"goodItem-reviews-reviews-list-show":""].join(" "),children:[e.jsxs("div",{className:"goodItem-answers-item-myAnswer",children:[e.jsx("textarea",{placeholder:"Вы можете оставить свой ответ на вопрос пользователя"}),e.jsx("button",{children:"Ответить"})]}),Array(5).fill("").map(()=>e.jsx(Z,{},Math.random()))]})})}),v=()=>{const[s,i]=r.useState(!1);return e.jsxs("div",{className:"goodItem-review",children:[e.jsxs("div",{className:"goodItem-most-popular-review-title",children:[e.jsx("div",{children:e.jsxs("svg",{fill:"#000000",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",transform:"rotate(0)",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsxs("g",{id:"SVGRepo_iconCarrier",children:[" ",e.jsxs("g",{children:[" ",e.jsxs("g",{children:[" ",e.jsx("path",{d:"M496.872,161.345L350.666,15.141C340.903,5.377,327.922,0,314.116,0c-13.807,0-26.789,5.377-36.55,15.141 c-20.155,20.154-20.155,52.948,0,73.103l3.402,3.402l-136.8,123.119l-4.685-4.687c-16.272-16.271-37.907-25.233-60.919-25.233 c-23.011,0-44.646,8.962-60.917,25.233L5.462,222.264l108.084,108.084L0.013,512l181.653-113.532L289.75,506.552l12.184-12.184 c33.59-33.591,33.59-88.246,0-121.837l-4.686-4.686l123.12-136.8l3.402,3.402c9.763,9.764,22.744,15.141,36.551,15.141 c13.807,0,26.788-5.377,36.55-15.14C517.026,214.293,517.026,181.499,496.872,161.345z M108.379,403.631l30.174-48.275 l18.103,18.103L108.379,403.631z M287.661,455.729L56.266,224.334c6.873-3.291,14.451-5.027,22.296-5.027 c13.808,0,26.788,5.377,36.551,15.14l162.452,162.45C293.45,412.783,296.815,436.517,287.661,455.729z M272.844,343.442 L168.57,239.166l136.799-123.119l90.596,90.596L272.844,343.442z M472.505,210.08c-3.254,3.254-7.581,5.047-12.183,5.047 c-4.603,0-8.929-1.793-12.183-5.047L301.933,63.875c-6.719-6.718-6.719-17.65,0-24.368c3.254-3.254,7.58-5.046,12.183-5.046 c4.602,0,8.929,1.792,12.183,5.047l146.204,146.205C479.222,192.43,479.222,203.362,472.505,210.08z"})," "]})," "]})," "]})]})}),e.jsx("p",{children:"Самый популярный отзыв"})]}),e.jsxs("div",{className:"goodItem-reviews-item-user",children:[e.jsx("div",{className:"goodItem-reviews-item-user-avatar"}),e.jsxs("div",{className:"goodItem-reviews-item-user-name",children:[e.jsx("h3",{children:"Длинное Имя"}),e.jsx("p",{children:"5 ноября 2024 "})]}),e.jsx("div",{className:"goodItem-reviews-item-link",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"})})})]}),e.jsx("p",{className:"goodItem-reviews-item-text",children:"Какой размер данного изделия?"}),e.jsxs("div",{className:"goodItem-reviews-item-status-answers",children:[e.jsxs("div",{className:"goodItem-reviews-item-status",children:[e.jsx("div",{className:"goodItem-reviews-item-status-arrow",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z"})})}),e.jsx("h2",{children:"5"}),e.jsx("div",{className:"goodItem-reviews-item-status-arrow",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"})})})]}),e.jsxs("div",{className:"goodItem-reviews-reviews-title",children:[e.jsx("h3",{children:"Ответы 8"}),e.jsx("div",{onClick:()=>i(!s),className:["goodItem-reviews-reviews-title-svg",s?"goodItem-reviews-reviews-title-svg-down":""].join(" "),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"})})})]})]}),e.jsx("div",{className:"goodItem-reviews-reviews",children:e.jsx(P,{isreviews:s})})]})},n="/ecohome/assets/image-2-Cr9UL3vg.png",m="/ecohome/assets/image-3-CylGz2wq.png",G=[{id:"1",image:l},{id:"2",image:n},{id:"3",image:m},{id:"4",image:l},{id:"5",image:n},{id:"6",image:m},{id:"7",image:l},{id:"8",image:n},{id:"9",image:m},{id:"10",image:l},{id:"11",image:n},{id:"12",image:m},{id:"13",image:l},{id:"14",image:n},{id:"15",image:m},{id:"16",image:l},{id:"17",image:n},{id:"18",image:m},{id:"19",image:l},{id:"20",image:n},{id:"21",image:m},{id:"22",image:l}],A=()=>{const s=r.useRef(null),i=t=>{if(s.current&&typeof s.current.style.translate=="string"){const o=s.current.style.translate.slice(0,-2),d=Number(o),a=s.current.scrollWidth-s.current.clientWidth+80;t==="incr"&&d>-a?(s.current.style.translate=`${d-160}px`,console.log(s)):t==="decr"&&d<70&&(s.current.style.translate=`${d+160}px`,console.log(s))}};return e.jsxs("div",{className:"goodItem-reviews-imagesBlock",children:[e.jsx("div",{className:"goodItem-reviews-imagesBlock-arrow goodItem-reviews-imagesBlock-arrow-left",onClick:()=>i("decr"),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M11.8284 12.0005L14.6569 14.8289L13.2426 16.2431L9 12.0005L13.2426 7.75781L14.6569 9.17203L11.8284 12.0005Z"})})}),e.jsx("div",{ref:s,className:"goodItem-reviews-imagesBlock-gallery",style:{translate:"70px"},children:G.map(t=>e.jsx("img",{src:t.image},t.id))}),e.jsx("div",{className:"goodItem-reviews-imagesBlock-arrow goodItem-reviews-imagesBlock-arrow-right",onClick:()=>i("incr"),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"})})})]})},y=()=>e.jsxs("div",{className:"goodItem-reviews-block",id:"reviews",children:[e.jsx("h1",{children:"Отзывы о Плита печная цельная:"}),e.jsx("button",{className:"goodItem-reviews-addMy",children:"Добавить отзыв"}),e.jsxs("div",{className:"goodItem-reviews-item",children:[e.jsx(A,{}),e.jsxs("div",{children:[e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{})]})]})]}),B=()=>{const[s,i]=r.useState(0),t=r.useContext(x),{setPathValue:o}=r.useContext(p);return r.useEffect(()=>{t&&o(["Главная","Каталог продукции",t[0].categoryRelative,t[0].categoryChildren])},[t,o]),!t||t.length===0?e.jsx(w,{}):e.jsxs("div",{className:"goodItem",children:[e.jsxs("div",{className:"goodItem-main-title",children:[e.jsx("h1",{children:t[0].titleGood}),e.jsx("button",{className:"goodItem-add-review",children:"Добавить отзыв"})]}),e.jsxs("div",{className:"goodItem-flex",children:[e.jsx(V,{setIsActive:i}),e.jsx(j,{}),e.jsx(M,{})]}),e.jsxs("div",{className:"goodItem-allDescription",children:[e.jsxs("div",{className:"goodItem-allDescription-item",children:[e.jsx("h1",{onClick:()=>{i(s!==0?0:null)},className:["goodItem-allDescription-title goodItem-allDescription-title-description",s===0?"activeTitle":""].join(" "),children:"ОПИСАНИЕ И ХАРАКТЕРИСТИКИ"}),e.jsxs("div",{className:["goodItem-allDescription-block scale-1",s===0?"activeBlock":""].join(" "),children:[e.jsx(k,{}),e.jsx(j,{})]})]}),e.jsxs("div",{className:"goodItem-allDescription-item",children:[e.jsx("h1",{onClick:()=>{i(s!==1?1:null)},className:["goodItem-allDescription-title goodItem-allDescription-title-reviews",s===1?"activeTitle":""].join(" "),children:"ОТЗЫВЫ"}),e.jsx("div",{className:["goodItem-allDescription-block scale-2",s===1?"activeBlock":""].join(" "),children:e.jsx(y,{})})]}),e.jsxs("div",{className:"goodItem-allDescription-item",children:[e.jsx("h1",{onClick:()=>{i(s!==2?2:null)},className:["goodItem-allDescription-title goodItem-allDescription-title-questions",s===2?"activeTitle":""].join(" "),children:"ЗАДАТЬ ВОПРОС"}),e.jsx("div",{className:["goodItem-allDescription-block scale-3",s===2?"activeBlock":""].join(" "),children:e.jsx(H,{})})]})]})]})},S=()=>e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsx(B,{})})});export{S as default};