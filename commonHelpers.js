import{S as m,i as n}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".list");let a;const d=i=>{const r=i.hits.map(s=>`
      <li class="item-list">
        <a href="${s.largeImageURL}" class="item-list-link">
            <img class="item-list-img" src="${s.webformatURL}" alt="${s.tags}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                <p class="item-list-text">${s.likes}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                <p class="item-list-text">${s.views}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                <p class="item-list-text">${s.comments}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${s.downloads}</p>
            </div>
        </div>
      </li>
    `).join("");c.innerHTML=r,a=new m(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),a.refresh()};document.getElementById("search-form").addEventListener("submit",function(i){i.preventDefault();const r=document.getElementById("search-input").value.trim();if(r===""){n.error({title:"Error",message:"Please enter a search term",position:"topCenter"});return}const o=`https://pixabay.com/api/?key=43864009-cebb341532060e679edcf3c4c&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,e=document.getElementById("loader");e.style.display="block",fetch(o).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{e.style.display="none",d(t),c.childElementCount||n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{e.style.display="none",console.error("Error:",t),n.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topCenter"})}),u()});function u(){const i=document.getElementById("search-input");i.value=""}
//# sourceMappingURL=commonHelpers.js.map
