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
      <span class="mx-2 ">Accueil</span>
    </a>
    <a id="emploi" href="#" style=" text-decoration: none; padding-left:20px;  text-align: left;">
      <i class="bx bxs-file"></i>
      <span class="dropdown mx-2">
        <span class=" dropdown-toggle" type="button" data-toggle="dropdown">Emploi du temps
          <span class="caret"></span></span>
        <ul class="dropdown-menu">
          <li class="ml-1"><input type="radio" name="emploi" class="ml-4 text-center" @click="semestres_p()"> S1 S3 S5
          </li>
          <li class="ml-1"><input type="radio" name="emploi" class="ml-4 text-center" @click="semestres_i()"> S2 S4 
          </li>
          <li @click="show_emploi()" class="text-center">display emploit</li>
          <!--  <li  class="text-center"></li> -->
          <!--  <li class="text-center"></li> -->
        </ul>
      </span>
    </a>

    <a id="note" href="#" @click="show_note()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
     >
      <i class="bx bx-user-check "></i>
      <span class="mx-2 ">Notes etudiants</span>
    </a>
    <a id="reservation" href="#" @click="show_reservation()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
     >
      <i class="fas fa-edit"></i>
      <span class="mx-2 ">Reservation d'une seance</span>
    </a>
     <a id="pfe" href="#" @click="show_pfe()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
      >
     <i class="fas fa-graduation-cap"></i>
      <span class="mx-2 ">Pfe </span>
    </a>
    <a id="notification" href="#" @click="show_notification()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
     >
        <span :class="alert_count" style="position:relative; left:5px;top:9px;font-size:10px;width:13px;height:13px;">{{counter}}</span>
        <i class="bx bx-bell bx-tada-hover"></i>
        <span class="mx-2">Notifications</span>
    </a>

    <a href="#" @click="logout()" id="logout_sidebar_button"
      style=" text-decoration: none; position:relative;bottom:-100px;padding-left:20px;  text-align: left;"
     >

      <i class="bx bx-log-out bx-tada-hover"></i>
      <span class="mx-2">Se déconnecter</span></a>


  </div>
  <div style=" width:900px; float:right; margin:auto;">

    <component v-bind:is="current">
    </component>
    <div style="position:relative;left:-100px;top:70px;margin-bottom:100px; margin-top:100px; " >
        <h3 style="color:#9ea0a0;">{{notification_vide}}</h3>
      </div>
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
  import NoteProf from '@/components/Prof/NoteProf.vue'
  import ReservationSalleProf from '@/components/Prof/ReservationSalleProf.vue'
  import NotificationProf from '@/components/Prof/NotificationProf.vue'
  import ProfGetPfe from '@/components/Prof/ProfGetPfe.vue'
  import axios from "axios"
  import $ from "jquery"

  export default ({
    data() {
      return {
        current: "",
        load_emploi: false,
        load_note: false,
        full_name: "",
        counter:"",
        alert_count:"",
        notification_vide:""
      }
    },
    components: {
      Emploi,
      NoteProf,
      ReservationSalleProf,
      NotificationProf,
      ProfGetPfe
    },
    methods: {
      show_pfe() {
        this.current = "ProfGetPfe";  
        this.notification_vide="";  
        this.setlcolor("pfe"); 
      },
      show_notification() {
        
         if(this.counter !="0"){
        this.current = "NotificationProf";
        this.counter = localStorage.getItem("counter_prof");
        
        
        }else{
        this.notification_vide="Aucune notification n'est prévu";
        this.current="";
        }
        this.setlcolor("notification");
      },
      async show_emploi() {
        this.current = "Emploi";
        this.notification_vide=""; 
           this.setlcolor("emploi");
      },
      show_note() {
        this.current = "NoteProf";
        this.notification_vide=""; 
           this.setlcolor("note");
      },
      show_reservation() {
        this.current = "ReservationSalleProf";
           this.setlcolor("reservation");
      },

      semestres_p() {
        localStorage.setItem("semestres", "1");
        this.current = "";
      },
      semestres_i() {
        localStorage.setItem("semestres", "2");
        this.current = "";
      },
      
      logout() {
        localStorage.setItem("logged", "failed");
        localStorage.setItem("counter", "");
        localStorage.setItem("counter_prof", "");
        this.$router.push('/');
      },
      setlcolor(choix){
$("#emploi").removeClass("link_click");
 $("#pfe").removeClass("link_click");
 $("#notification").removeClass("link_click");
 $("#reservation").removeClass("link_click");
  $("#note").removeClass("link_click");
  $("#"+choix).addClass("link_click");
      }

    },
    created() {
      if (localStorage.getItem("logged") != "success") {
        this.$router.push('/');
      }
      if ((localStorage.getItem("role") != "prof")) {
        this.$router.push('/');
      }
      this.full_name = localStorage.getItem("full_name");
      axios.defaults.headers.common['auth-token'] = localStorage.getItem("token");
       /*  this.current = "NotificationEtudiant"; */
        this.counter = localStorage.getItem("counter_prof");
        
         this.current = "NoteProf";
         this.alert_count="alert-count";         
           this.NotificationProf="";
        
      /* if(localStorage.getItem('show')=="true"){
        this.load_note=true;
      } */
    }
  })
</script>
<style>
  .c {
    width: max-content;
  }

  .show {
    background-color: #d8ecf1
  }
  .link_click{
   background-color: #17a2b8;
  }
</style>