async function e(e){try{let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ&page=${e}&size=20`);if(!t.ok)throw Error("Failed to fetch events");return await t.json()}catch(e){console.error(e)}}async function t(e,t){try{let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ&page=${e}&size=20&keyword=${t}`),n=await a.json();return n&&n._embedded&&n._embedded.events?n._embedded.events:[]}catch(e){console.error(e)}}let a="nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ",n="https://app.ticketmaster.com/discovery/v2/";async function s(e=1,t,i){try{var o;let s;s=i?await fetch(`${n}events.json?apikey=${a}&page=${e}&keyword=${i}`):await fetch(`${n}events.json?apikey=${a}&page=${e}&size=200`);let r=await s.json();console.log(r),o=r._embedded.events??[],t.innerHTML="",t.innerHTML=[...new Set(o.map(e=>e._embedded?.venues?.[0]?.city?.name))].filter(e=>e).map(e=>`<li class="header_item-city">
      <p class="header_text-city">${e}</p>
    </li>`).join("")}catch(e){console.error(e)}}async function i(e){try{let t=await fetch(`${n}events.json?apikey=${a}&id=${e}`);return await t.json()}catch(e){console.error(e)}}let o=document.querySelector("#events-list"),r=document.querySelector(".header_input[data=name]"),c=document.querySelector(".header_input[data=city]"),d=document.querySelector(".header_list-city"),l=document.querySelector(".header_option-button"),u=document.querySelector(".containerModal"),m=1,p=!1;function h(e){o.innerHTML=e.map(e=>{let t=e.images[0].url,a=e.name,n=e.dates.start.localDate;return`
        <li data-id="${e.id}" class="event-card">
          <img src="${t}" alt="${a}" />
          <h2>${a}</h2>
          <p>${n}</p>
        </li>
      `}).join("")}async function v(t){try{let a=await e(t);h(a._embedded.events),function(e){pagination.innerHTML="";let t=document.createElement("button");t.textContent="<",t.dataset.action="first",t.classList.add("pagination-arrow"),pagination.appendChild(t);let a=p?11:1,n=p?20:10;for(let t=a;t<=n;t+=1){let a=document.createElement("button");a.textContent=t,a.dataset.page=t,t===e&&a.classList.add("pagination-button"),pagination.appendChild(a)}let s=document.createElement("button");s.textContent=">",s.dataset.action="last",s.classList.add("pagination-arrow"),pagination.appendChild(s)}(t)}catch(e){console.error(e)}}function g(){let e=c.value.trim();t(m,e).then(e=>{h(e)}).catch(e=>{console.error("error to load the event",e)})}pagination.addEventListener("click",e=>{let t=e.target;if("first"===t.dataset.action){p=!1,v(m=1);return}if("last"===t.dataset.action){m=totalPage,p=!0,v(m);return}let a=Number(t.dataset.page);a&&v(m=a)}),r.addEventListener("input",function(){let e=r.value.trim();t(m,e).then(e=>{h(e)}).catch(e=>{console.error("error to load the event",e)})}),c.addEventListener("input",()=>{l.classList.add("header_svg-rotation"),d.classList.remove("header_list-city-invisibily");let e=c.value.trim();s(m=1,d,e),g()}),l.addEventListener("click",()=>{l.classList.toggle("header_svg-rotation"),d.classList.toggle("header_list-city-invisibily");let e=c.value.trim();s(m=1,d,e)}),d.addEventListener("click",e=>{e.preventDefault(),c.value=e.target.textContent,g()}),v(),o.addEventListener("click",async e=>{let t=e.target.closest("li").dataset.id;await i(t),u.innerHTML=`<div class="backdrop">
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
             </div>`});
//# sourceMappingURL=newgenfront3rd.db231152.js.map
