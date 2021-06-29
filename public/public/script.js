 /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
 function openNav() {
     document.getElementById("mySidenav").style.width = "250px";
     document.getElementById("main").style.marginLeft = "255px";

     jQuery(".sidenav a").each(function() {
         $(this).show();

     });
     $("#icon-navbar").hide();
 }

 /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 function closeNav() {
     $("#icon-navbar").show();
     document.getElementById("mySidenav").style.width = "50px";
     document.getElementById("main").style.marginLeft = "50px";
     jQuery(".sidenav a").each(function() {
         $(this).hide();
     });

 }

 function error() {
     $(".error").addClass("alert alert-danger");
 }