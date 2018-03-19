// Anirudh Kumar Subramanyam
// CSE 154 AI
// This javascript file contains functions defined for my portfolio.

(function() {
       'use strict';
       var $ = function(id) { return document.getElementById(id) };
       var qs = function(sel) { return document.querySelector(sel); };
       var qsa = function(sel) { return document.querySelectorAll(sel); };
        window.onload = function() {
              $("nav_button").onclick = openNav;
              $("close_button").onclick = closeNav;
              
              for(var i = 0; i < qsa(".image_link").length; i++){
                     var img = qsa(".image_link")[i];
                     img.onmouseover = writeDesc;
              }
       }
       function writeDesc() {
              var elem = this.alt + "_desc"
              this.onmouseout = function() {
                     $(elem).innerHTML = null;
              }
              
              var ajaxPromise = new AjaxGetPromise("../php/project.php?project=" + this.alt);
              ajaxPromise
              .then(function(response) {
                     $(elem).innerHTML = response;
              })
              .catch(function(errorMessage){
                     alert(errorMessage);
              })
       }
       
       
       function openNav() {
              var links = qsa(".link");
              // for(var i = 0; i < links.length; i++){
              //        links[i].style.top = ((i%2) + 1)*100 + "px";
              //        links[i].style.left = (i)*30 + "%";
              // //        // links[i].style.transition = (i + 1) + "s cubic-bezier(0.18, 0.89, 0.32, 1.28);";
              // }
              $("mySidenav").style.width = "250px"; 
              // $("mySidenav").style.width = "200px";
              $("my_body").style.marginLeft = "250px";
              // $("my_body").style.opacity = "0.5";
              $("nav_button").style.transition = "0s";
              $("nav_button").style.opacity = "0";
       }
       
       function closeNav() {
              $("mySidenav").style.width = "0";
              $("my_body").style.marginLeft = "0";
              $("my_body").style.opacity = "1";
              $("nav_button").style.opacity = "0.5";
              $("nav_button").style.transition = "0.5s ease";
       }
                  
})();
    

 
