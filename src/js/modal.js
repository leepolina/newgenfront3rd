import iconSprite from "url:../img/symbol-defs.svg";

export function renderModal(event) {
  return `<div class="backdrop is-open">
  <div class="modal">
    <button id="modal-close">
      <svg class="modal-close-svg">
        <use href="${iconSprite}#icon-close"></use>
      </svg>
    </button>

    <img src="${
      event._embedded.events[0].images[0].url
    }" alt="" class="mod-circle-img" />

    <div class="modal-content">
      <img src="${
        event._embedded.events[0].images[0].url
      }" alt="" class="mod-img" />

      <div class="modal-info">
        <h4 class="mod-heading">info</h4>
                <p class="mod-subheadings">${
                  event._embedded.events[0].promoter.description ||
                  "Descrition missing"
                }</p>
                <h4 class="mod-heading">when</h4>
                <p class="mod-subheadings">${
                  event._embedded.events[0].dates.start.localDate ||
                  "Date not found"
                }</p>
                <h4 class="mod-heading">where</h4>
                <p class="mod-subheadings">${
                  event._embedded.events[0].dates.timezone || "Region not found"
                }</p>
                <h4 class="mod-heading">who</h4>
                <p class="mod-subheadings">${
                  event._embedded.events[0].name || "Band / singer not found"
                }</p>
                <h4 class="mod-heading">prices</h4>
                <p class="mod-subheadings">Standart 300-500 UAH</p>
                <button class="mod-btn-buy-tickets">BUY TICKETS</button>
                <p class="mod-subheadings">VIP 1000-1500 UAH</p>
                <button class="mod-btn-buy-tickets">BUY TICKETS</button>
      </div>
    </div>

    <button class="mod-btn-more">MORE FROM THIS AUTHOR</button>
  </div>
</div>`;
}
/*  */
