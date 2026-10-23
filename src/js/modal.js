export function renderModal(event) {
  return `<div class="backdrop">
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
             </div>`;
}
