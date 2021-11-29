(()=>{"use strict";function e(){let e=document.querySelector("#content");e.innerHTML="";let t=document.createElement("main");t.classList.add("home"),t.innerHTML='\n        <div>\n            <h3>Welcome to the "Mamma Mia" Pizzeria!</h3>\n            <img src="./img/home.jpg">   \n            <p>Here we serve all of our food with love! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sed molestias nisi assumenda atque!<br><br> Nulla soluta aliquam aliquid ut vero, reiciendis eligendi nihil accusantium delectus, facilis quo illum! Repellendus, sapiente alias minima nemo molestias perferendis consequuntur autem fugiat facere facilis distinctio totam modi nisi aut corporis amet minus magni beatae aliquam eveniet, in cumque earum. </p>\n        </div>            \n    ',e.append(t),document.querySelector("#homeBtn").classList.add("selected-tab"),document.querySelector("#menuBtn").classList.remove("selected-tab"),document.querySelector("#aboutBtn").classList.remove("selected-tab")}function t(e,t,a){let o=document.createElement("div");o.classList.add("menu-item");let i=document.createElement("h3");i.innerText=e;let n=document.createElement("p");n.innerText=t;let c=document.createElement("span");return c.innerText="€ "+a,o.append(i,n,c),o}let a=document.body,o=document.querySelector("#content"),i=document.createElement("header");i.innerHTML='\n<h1 class="header-title">Mamma Mia!</h1>\n<section class="header-tabs">\n    <button id="homeBtn" class="header-tab">Home</button>\n    <button id="menuBtn" class="header-tab">Menu</button>\n    <button id="aboutBtn" class="header-tab">About</button>\n</section>\n',a.insertBefore(i,o),document.querySelector("#homeBtn").addEventListener("click",(()=>e())),document.querySelector("#menuBtn").addEventListener("click",(()=>function(){let e=document.querySelector("#content");e.innerHTML="";let a=document.createElement("main");a.classList.add("menu"),a.append(t("Margherita","Pomodoro San Marzano, Fiordilatte di Agerola, Basilico e Olio extra vergine di oliva","3.50")),a.append(t("Marinara","Pomodoro San Marzano, Aglio, Origano e Basilico","3.50")),a.append(t("Margherita con Bufala","Pomodoro San Marzano, Bocconcini di Bufala, Basilico e Olio extra vergine di oliva","5.50")),a.append(t("Capricciosa","Pomodoro San Marzano, Fiordilatte di Agerola, Prosciutto cotto, Funghi champignon, Carciofi e Basilico","6.00")),a.append(t("Boscaiola","Provola, Funghi porcini e Basilico","6.00")),a.append(t("Salsiccia e Friarelli","Provola, Salsiccia, Friarelli e Basilico","6.00")),a.append(t("Quattro Formaggi","Crema di formaggi, Provola e Basilico","6.00")),a.append(t("Quattro Stagioni","Pomodoro, Funghi, Prosciutto cotto, Fiordilatte di Agerola, Olive e Acciughe","6.00")),a.append(t("Diavola","Pomodoro, Fiordilatte di Agerola, Salame piccante e Basilico","6.00")),a.append(t("Mimosa","Panna, Fiordilatte di Agerola, Prosciutto cotto, Mais e Basilico","6.00")),e.append(a),document.querySelector("#menuBtn").classList.add("selected-tab"),document.querySelector("#homeBtn").classList.remove("selected-tab"),document.querySelector("#aboutBtn").classList.remove("selected-tab")}())),document.querySelector("#aboutBtn").addEventListener("click",(()=>function(){let e=document.querySelector("#content");e.innerHTML="";let t=document.createElement("main");t.classList.add("about"),t.innerHTML='\n        <div>\n            <div class="about-info">\n                <p>📞 123 456 7890</p>\n                <p>📍 Not a Fake Adress 123, Naples, Italy</p>\n            </div>\n            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23463.281798000255!2d14.23880907263062!3d40.83123834997451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09ac26357211%3A0x970c840bd5800ad!2sCastel%20dell&#39;Ovo!5e0!3m2!1sit!2sit!4v1638139059907!5m2!1sit!2sit" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>\n        </div>\n    ',e.append(t),document.querySelector("#aboutBtn").classList.add("selected-tab"),document.querySelector("#homeBtn").classList.remove("selected-tab"),document.querySelector("#menuBtn").classList.remove("selected-tab")}())),e()})();