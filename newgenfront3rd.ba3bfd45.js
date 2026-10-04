async function e(t=0){try{let e=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=nodlSYDYPs3zawFkRJQUF5HZXVlBWBCZ&page=${t}&size=20`);return(await e.json())._embedded.events}catch(e){console.error(e)}}let t=document.querySelector("#events-list");!function(a=0){e(a).then(e=>{console.log("Your events:",e),t.innerHTML=e.map(e=>{let t=e.images[0].url,a=e.name,n=e.dates.start.localDate;return`
        <li data-id="${e.id}" class="event-card">
          <img src="${t}" alt="${a}" />
          <h2>${a}</h2>
          <p>${n}</p>
        </li>
      `}).join("")}).catch(e=>{console.error(e)})}();
//# sourceMappingURL=newgenfront3rd.ba3bfd45.js.map
