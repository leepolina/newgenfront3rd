async function e(e){try{let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ&page=${e}&size=20`);if(!t.ok)throw Error("Failed to fetch events");return await t.json()}catch(e){console.error(e)}}async function t(e,t){try{let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ&page=${e}&size=20&keyword=${t}`),n=await a.json();return n&&n._embedded&&n._embedded.events?n._embedded.events:[]}catch(e){console.error(e)}}let a="nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ",n="https://app.ticketmaster.com/discovery/v2/";async function s(e=1,t,i){try{var o;let s;s=i?await fetch(`${n}events.json?apikey=${a}&page=${e}&keyword=${i}`):await fetch(`${n}events.json?apikey=${a}&page=${e}&size=200`);let r=await s.json();return o=r._embedded.events??[],t.innerHTML="",t.innerHTML=[...new Set(o.map(e=>e._embedded?.venues?.[0]?.city?.name))].filter(e=>e).map(e=>`<li class="header_item-city">
      <p class="header_text-city">${e}</p>
    </li>`).join(""),r}catch(e){console.error(e)}}async function i(e){try{let t=await fetch(`${n}events.json?apikey=${a}&id=${e}`);return await t.json()}catch(e){console.error(e)}}let o=document.querySelector("#events-list"),r=document.querySelector(".header_input[data=name]"),d=document.querySelector(".header_input[data=city]"),c=document.querySelector(".header_list-city"),l=document.querySelector(".header_option-button"),u=document.querySelector(".containerModal"),m=1,p=!1;function h(e){o.innerHTML=e.map(e=>{let t=e.images[0].url,a=e.name,n=e.dates.start.localDate;return`
        <li data-id="${e.id}" class="event-card">
          <img src="${t}" alt="${a}" />
          <h2>${a}</h2>
          <p>${n}</p>
        </li>
      `}).join("")}async function v(t){try{let a=await e(t);h(a._embedded.events),g(t)}catch(e){console.error(e)}}function g(e){pagination.innerHTML="";let t=document.createElement("button");t.textContent="<",t.dataset.action="first",t.classList.add("pagination-arrow"),pagination.appendChild(t);let a=p?11:1,n=p?20:10;for(let t=a;t<=n;t+=1){let a=document.createElement("button");a.textContent=t,a.dataset.page=t,t===e&&a.classList.add("pagination-button"),pagination.appendChild(a)}let s=document.createElement("button");s.textContent=">",s.dataset.action="last",s.classList.add("pagination-arrow"),pagination.appendChild(s)}function y(){let e=d.value.trim();t(m,e).then(e=>{h(e)}).catch(e=>{console.error("error to load the event",e)})}pagination.addEventListener("click",async e=>{let a=e.target,n=Number(a.dataset.page),i=r.value.trim(),o=d.value.trim();if("first"===a.dataset.action){p=!1,v(m=1);return}if("last"===a.dataset.action){p=!0,v(m=20);return}n&&(m=n,""===o&&""===i?v(m):(o?h((await s(m,c,o))._embedded.events??[]):h((await t(m,i))._embedded.events??[]),g(m)))}),r.addEventListener("input",function(){let e=r.value.trim();t(m,e).then(e=>{h(e)}).catch(e=>{console.error("error to load the event",e)})}),d.addEventListener("input",()=>{l.classList.add("header_svg-rotation"),c.classList.remove("header_list-city-invisibily");let e=d.value.trim();s(m=1,c,e),y()}),l.addEventListener("click",()=>{l.classList.toggle("header_svg-rotation"),c.classList.toggle("header_list-city-invisibily");let e=d.value.trim();s(m=1,c,e)}),c.addEventListener("click",e=>{e.preventDefault(),d.value=e.target.textContent,y()}),o.addEventListener("click",async e=>{let t=e.target.closest("li").dataset.id;await i(t),u.innerHTML=`<div class="backdrop">
             <div class="modal">
             <button id="modal-close">X</button>
              <img src="" alt="" class="mod-circle-img"/>

              <img src="" alt="" class="mod-img"/>

              <div>
                <h4 class="mod-heading">info</h4>
                <p class="mod-subheadings"></p>
                <h4 class="mod-heading">when</h4>
                <p class="mod-subheadings"></p>
                <h4 class="mod-heading">where</h4>
                <p class="mod-subheadings"></p>
                <h4 class="mod-heading">who</h4>
                <p class="mod-subheadings"></p>
                <h4 class="mod-heading">prices</h4>
                <p class="mod-subheadings"></p>
                <button class="mod-btn-buy-tickets">BUY TICKETS</button>
                <p class="mod-subheadings"></p>
                <button class="mod-btn-buy-tickets">BUY TICKETS</button>
              </div>
              <button class="mod-btn-more">MORE FROM THIS AUTHOR</button>
            </div>
             </div>`}),v(1);
//# sourceMappingURL=newgenfront3rd.7ccdff73.js.map
