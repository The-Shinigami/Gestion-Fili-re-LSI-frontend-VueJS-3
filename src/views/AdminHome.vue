<template>
 
    <div id="mySidenav" class="sidenav show">
    
    <div style="position:relative;top:-20px;">
      <img src="https://creatantech.com/demos/codervent/rocker/vertical/assets/images/avatars/avatar-2.png "
        class="user-img " alt="user avatar ">
      <div class="mt-2">
        <h6 style="font-family:Poppins-Regular;"> <strong>M.{{full_name}}</strong> </h6>
      </div>
    </div>

    <a href="/" style=" text-decoration: none; padding-left:20px;  text-align: left;">
      <i class="bx bxs-dashboard "></i>
      <span class="mx-0 ">Accueil</span>
    </a>
    <a id="emploi" href="#" style=" text-decoration: none; padding-left:20px;  text-align: left;" >
      <i class="bx bxs-file"></i>
      
      <span class="dropdown mx-0 ">
        <span class=" dropdown-toggle" type="button" data-toggle="dropdown">Emploi du temps
          <span class="caret"></span></span>
       
        <ul class="dropdown-menu">
          <li class="ml-1"><input type="radio" name="emploi" class="ml-4 text-center" @click="semestres_1()"> S1 
          </li>
          <li class="ml-1"><input type="radio" name="emploi" class="ml-4 text-center" @click="semestres_2()"> S2 
          </li>
          <li class="ml-1"><input type="radio" name="emploi" class="ml-4 text-center" @click="semestres_3()"> S3 
          </li>
          <li class="ml-1"><input type="radio" name="emploi" class="ml-4 text-center" @click="semestres_4()"> S4 
          </li>
          <li class="ml-1"><input type="radio" name="emploi" class="ml-4 text-center" @click="semestres_5()"> S5 
          </li>
          
          <li @click="show_emploi()" class="text-center">display emploit</li>
        </ul>
      </span>
    </a>
    <a id="updateemploi" href="#" @click="show_updateemploi()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
     >
      <i class="fas fa-edit"></i>
      <span class="mx-0 ">Update Emploi</span>
    </a>

    <a id="addetudiant" href="#" @click="show_addetudiant()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
     >
      <i class="bx bx-user-check "></i>
      <span class="mx-0 ">Affectation Etudiants</span>
    </a>
    <a id="setpfe" href="#" @click="show_setpfe()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
     >
      <i class="fas fa-graduation-cap"></i>
      <span class="mx-0 ">Affectation Des Pfe</span>
    </a>
    <a id="reservation" href="#" @click="show_reservation()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
     >
      <i class="fas fa-calendar-alt"></i>
      <span class="mx-0 ">Reservation d'une seance</span>
    </a>
   

    <a href="" @click="logout()" id="logout_sidebar_button"
      style=" text-decoration: none; position:relative;bottom:-100px;padding-left:20px;  text-align: left;"
     >

      <i class="bx bx-log-out bx-tada-hover"></i>
      <span class="mx-2">Se déconnecter</span></a>


  </div>
  <div style=" width:900px; float:right; margin:auto;">

    <component v-bind:is="current">
    </component>
  </div>

  
  <footer id="footer" style="position:relative;bottom:-63px; width:1100px; float:right;">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>FSTT</h3>
            <p>
              Ancienne Route de l’Aéroport, <br>Km 10, Ziaten. BP : 416. <br>Tanger - Maroc <br><br>
              <strong>Télephone:</strong> + 212 (0) 5 39 39 39 54 / 55<br><br>
              <strong>Email:</strong> administration@fstt.ac.ma<br>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Menu</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Accueil</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">A propos de nous</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Conditions d'utilisation</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Politique de confidentialité</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Nos cours</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Developpement</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Big Data</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Mobile Developpement</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Rejoignez notre communauté</h4>
            <p>La communauté des développeurs de FSTT</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          <b>Faculté des Sciences et Techniques de Tanger - Université Abdelmalek Essaâdi - www.fstt.ac.ma</b>
        </div>

      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
    
   
</template>
<script>
import Emploi from '@/components/Emploit.vue'
import ReservationSalleAdmin from '@/components/Admin/ReservationSalleAdmin.vue'
import AdminAddEtudiant from '@/components/Admin/AdminAddEtudiant.vue'
import AdminSetPfe from '@/components/Admin/AdminSetPfe.vue'
import AdminUpdateEmploi from '@/components/Admin/AdminUpdateEmploi.vue'
import axios  from "axios"
import $ from 'jquery'
export default ({
   data() {
        return {  
          load:false ,
          current:"",
          full_name:""
        }}, 
  components: {
    Emploi,ReservationSalleAdmin,AdminAddEtudiant,AdminSetPfe,AdminUpdateEmploi
  },
 methods: {
   show_updateemploi(){
     this.current="AdminUpdateEmploi";
     this.setlcolor("updateemploi");
   }
   ,
    show_setpfe(){
this.current="AdminSetPfe";
 this.setlcolor("setpfe");
   },
   show_addetudiant(){
this.current="AdminAddEtudiant";
this.setlcolor("addetudiant");
   },show_reservation(){
this.current="ReservationSalleAdmin";
this.setlcolor("reservation");
   },
   show_emploi(){
  
    this.current="Emploi";
    this.setlcolor("emploi");
   },
   semestres_1(){
      localStorage.setItem("semestre_id","1");
      this.current="";
   },
   semestres_2(){
      localStorage.setItem("semestre_id","2");
      this.current="";
   },
   semestres_3(){
      localStorage.setItem("semestre_id","3");
      this.current="";
   },
   semestres_4(){
      localStorage.setItem("semestre_id","4");
      this.current="";
   },
   semestres_5(){
      localStorage.setItem("semestre_id","5");
      this.current="";
   },   
      logout() {
        localStorage.setItem("logged", "failed");
        this.$router.push('/');
      },
      setlcolor(choix){
$("#emploi").removeClass("link_click");
 $("#setpfe").removeClass("link_click");
 $("#updateemploi").removeClass("link_click");
 $("#reservation").removeClass("link_click");
  $("#addetudiant").removeClass("link_click");
  $("#"+choix).addClass("link_click");
      }
 },
 created (){
   axios.defaults.headers.common['auth-token'] = localStorage.getItem("token");
    if(localStorage.getItem("logged")!="success"){
     this.$router.push('/');
    }
     if( (localStorage.getItem("role")!="admin")){
     this.$router.push('/');
    }
    this.full_name = localStorage.getItem("full_name");
    this.current="AdminAddEtudiant";
  }
})
</script>
<style >
  .c{
    width: max-content;
  }
  .link_click{
   background-color: #17a2b8;
  }
</style>