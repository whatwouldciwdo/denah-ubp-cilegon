import"./app-zUzbcTxh.js";const l=30*1e3,v=["videos/COMPRO PLTGU 2025 FINAL.mp4"];let a=null,n=!1,e=null,i=null,r=null;function o(){e=document.createElement("div"),e.id="screensaverOverlay",e.setAttribute("aria-hidden","true"),e.innerHTML=`
        <video id="screensaverVideo" 
               playsinline 
               muted 
               preload="metadata"
               style="display:block;">
            ${v.map(t=>`<source src="${t}" type="video/mp4">`).join(`
            `)}
            Browser tidak mendukung video.
        </video>
        <div id="screensaverHint">
            <span class="hint-icon">👆</span>
            <span class="hint-text">Sentuh layar untuk kembali ke peta</span>
        </div>
        <div id="screensaverLogo">
            <img src="logo/Gema Logo.jpeg" alt="GEMA Logo" onerror="this.style.display='none'">
        </div>
    `,document.body.appendChild(e),i=document.getElementById("screensaverVideo"),r=document.getElementById("screensaverHint"),i.addEventListener("ended",()=>{i.currentTime=0,i.play().catch(()=>{})}),e.addEventListener("click",d),e.addEventListener("touchstart",d,{passive:!0}),s(),m()}function s(){n||(clearTimeout(a),a=setTimeout(u,l))}function u(){n||(n=!0,e.classList.add("active"),e.setAttribute("aria-hidden","false"),i.currentTime=0,i.play().catch(t=>{console.warn("[Screensaver] Gagal memutar video:",t.message),f()}),setTimeout(()=>{r&&r.classList.add("visible")},3e3),console.log("[Screensaver] Aktif — menampilkan video kompro."))}function d(t){n&&(t&&t.stopPropagation(),n=!1,e.classList.add("closing"),r.classList.remove("visible"),setTimeout(()=>{e.classList.remove("active","closing"),e.setAttribute("aria-hidden","true"),i.pause(),s()},600),console.log("[Screensaver] Nonaktif — kembali ke peta."))}function m(){["mousemove","mousedown","keydown","touchstart","wheel","scroll","click"].forEach(c=>{document.addEventListener(c,p,{passive:!0,capture:!0})})}function p(){n||s()}function f(){const t=document.createElement("div");t.id="screensaverError",t.innerHTML=`
        <div style="text-align:center; color:rgba(255,255,255,0.7);">
            <div style="font-size:3rem; margin-bottom:1rem;">🎬</div>
            <p style="font-size:1.2rem; margin:0;">Video Profil PLTGU Cilegon</p>
            <p style="font-size:0.85rem; margin-top:0.5rem; opacity:0.6;">
                File video tidak ditemukan.<br>
                Pastikan file ada di folder <code>public/videos/</code>
            </p>
        </div>
    `,e.appendChild(t)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o();
