async function e(e){try{let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ&page=${e}&size=20`);if(!t.ok)throw Error("Failed to fetch events");return await t.json()}catch(e){console.error(e)}}async function t(e,t){try{let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ&page=${e}&size=20&keyword=${t}`),n=await a.json();return n&&n._embedded&&n._embedded.events?n._embedded.events:[]}catch(e){console.error(e)}}var a={};a=import.meta.resolve("KzZD0");let n="nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ",s="https://app.ticketmaster.com/discovery/v2/";async function i(e=1,t,a){try{var o;let i;i=a?await fetch(`${s}events.json?apikey=${n}&page=${e}&keyword=${a}`):await fetch(`${s}events.json?apikey=${n}&page=${e}&size=200`);let d=await i.json();return o=d._embedded.events??[],t.innerHTML="",t.innerHTML=[...new Set(o.map(e=>e._embedded?.venues?.[0]?.city?.name))].filter(e=>e).map(e=>`<li class="header_item-city">
      <p class="header_text-city">${e}</p>
    </li>`).join(""),d}catch(e){console.error(e)}}async function o(e){try{let t=await fetch(`${s}events.json?apikey=${n}&id=${e}`);return await t.json()}catch(e){console.error(e)}}let d=document.querySelector("#events-list"),r=document.querySelector(".header_input[data=name]"),c=document.querySelector(".header_input[data=city]"),l=document.querySelector(".header_list-city"),m=document.querySelector(".header_option-button"),u=document.querySelector(".containerModal"),p=document.querySelector(".modal"),v=1,h=!1;function g(e){d.innerHTML=e.map(e=>{let t=e.images[0].url,a=e.name,n=e.dates.start.localDate;return`
        <li data-id="${e.id}" class="event-card">
          <img src="${t}" alt="${a}" />
          <h2>${a}</h2>
          <p>${n}</p>
        </li>
      `}).join("")}async function b(t){try{let a=await e(t);g(a._embedded.events),y(t)}catch(e){console.error(e)}}function y(e){pagination.innerHTML="";let t=document.createElement("button");t.textContent="<",t.dataset.action="first",t.classList.add("pagination-arrow"),pagination.appendChild(t);let a=h?11:1,n=h?20:10;for(let t=a;t<=n;t+=1){let a=document.createElement("button");a.textContent=t,a.dataset.page=t,t===e&&a.classList.add("pagination-button"),pagination.appendChild(a)}let s=document.createElement("button");s.textContent=">",s.dataset.action="last",s.classList.add("pagination-arrow"),pagination.appendChild(s)}function f(){let e=c.value.trim();t(v,e).then(e=>{g(e)}).catch(e=>{console.error("error to load the event",e)})}pagination.addEventListener("click",async e=>{let a=e.target,n=Number(a.dataset.page),s=r.value.trim(),o=c.value.trim();if("first"===a.dataset.action){h=!1,b(v=1);return}if("last"===a.dataset.action){h=!0,b(v=20);return}n&&(v=n,""===o&&""===s?b(v):(o?g((await i(v,l,o))._embedded.events??[]):g((await t(v,s))._embedded.events??[]),y(v)))}),r.addEventListener("input",function(){let e=r.value.trim();t(v,e).then(e=>{g(e)}).catch(e=>{console.error("error to load the event",e)})}),c.addEventListener("input",()=>{m.classList.add("header_svg-rotation"),l.classList.remove("header_list-city-invisibily");let e=c.value.trim();i(v=1,l,e),f()}),m.addEventListener("click",()=>{m.classList.toggle("header_svg-rotation"),l.classList.toggle("header_list-city-invisibily");let e=c.value.trim();i(v=1,l,e)}),l.addEventListener("click",e=>{e.preventDefault(),c.value=e.target.textContent,f()}),d.addEventListener("click",async e=>{var t,n;let s=e.target.closest("li").dataset.id;function i(){let e=document.querySelector(".backdrop");e?(e.classList.remove("is-open"),e.classList.add("is-closing"),setTimeout(()=>{u.innerHTML=""},250)):u.innerHTML=""}t=await o(s),u.innerHTML=`<div class="backdrop is-open">
  <div class="modal">
    <button id="modal-close">
      <svg class="modal-close-svg">
        <use href="${(n=a)&&n.__esModule?n.default:n}#icon-close"></use>
      </svg>
    </button>

    <img src="${t._embedded.events[0].images[0].url}" alt="" class="mod-circle-img" />

    <div class="modal-content">
      <img src="${t._embedded.events[0].images[0].url}" alt="" class="mod-img" />

      <div class="modal-info">
        <h4 class="mod-heading">info</h4>
                <p class="mod-subheadings">${t._embedded.events[0].promoter.description||"Descrition missing"}</p>
                <h4 class="mod-heading">when</h4>
                <p class="mod-subheadings">${t._embedded.events[0].dates.start.localDate||"Date not found"}</p>
                <h4 class="mod-heading">where</h4>
                <p class="mod-subheadings">${t._embedded.events[0].dates.timezone||"Region not found"}</p>
                <h4 class="mod-heading">who</h4>
                <p class="mod-subheadings">${t._embedded.events[0].name||"Band / singer not found"}</p>
                <h4 class="mod-heading">prices</h4>
                <p class="mod-subheadings">Standart 300-500 UAH</p>
                <button class="mod-btn-buy-tickets">BUY TICKETS</button>
                <p class="mod-subheadings">VIP 1000-1500 UAH</p>
                <button class="mod-btn-buy-tickets">BUY TICKETS</button>
      </div>
    </div>

    <button class="mod-btn-more">MORE FROM THIS AUTHOR</button>
  </div>
</div>`,document.querySelector("#modal-close").addEventListener("click",i),window.addEventListener("click",e=>{e.target===p&&i()})}),b(1);
//# sourceMappingURL=newgenfront3rd.6edae21e.js.map
