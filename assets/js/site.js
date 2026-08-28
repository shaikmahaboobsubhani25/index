
(function(){
 const btn=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
 if(btn&&links) btn.addEventListener('click',()=>{links.classList.toggle('open');btn.setAttribute('aria-expanded',links.classList.contains('open'))});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
