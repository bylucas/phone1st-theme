function smoothScroll(t){const o=document.getElementById(t);o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('a[href^="#"]').forEach((function(t){t.addEventListener("click",(function(o){o.preventDefault();smoothScroll(t.getAttribute("href").substring(1))}))}))}));