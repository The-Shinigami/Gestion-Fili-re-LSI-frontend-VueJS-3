<template>
  <div id="mySidenav" class="sidenav show">
    
    <div  style="position:relative;top:-20px;">
      <img src="https://creatantech.com/demos/codervent/rocker/vertical/assets/images/avatars/avatar-2.png "
        class="user-img " alt="user avatar ">
      <div class="mt-2">
        <h6 style="font-family:Poppins-Regular;"> <strong>M.{{full_name}}</strong> </h6>
      </div>
    </div>

    <a href="/" style=" text-decoration: none; padding-left:20px;  text-align: left;" >
      <i class="bx bxs-dashboard "></i>
      <span class="mx-2 ">Accueil</span>
    </a>
    <a id="emploi" href="#" @click="show_emploi()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
      >
      <i class="bx bxs-file"></i>
      <span class="mx-2">Emploi du temps</span>
    </a>

    <a id="note" href="#" @click="show_note()" style=" text-decoration: none; padding-left:20px;  text-align: left;"
      >
      <i class="bx bx-user-check "></i>
      <span class="mx-2 ">Notes </span>
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
      style=" text-decoration: none; position:relative;bottom:-160px;padding-left:20px;  text-align: left;"
      >

      <i class="bx bx-log-out bx-tada-hover"></i>
      <span class="mx-2">Se déconnecter</span>
      </a>


  </div>
  <div class="home">
    <!--  <button @click="show_emploi()">emploit</button>
     <button @click="show_note()">note</button>
  <button @click="show_notification()">Notification</button> -->
    <div style=" width:900px; float:right; margin:auto;" >
     
      <component v-bind:is="current">   
      </component>
       <div style="position:relative;left:-100px;top:70px;margin-bottom:100px; margin-top:100px;" >
         
        <h3 style="color:#9ea0a0;">{{notification_vide}}</h3>
      </div>

    </div>
    <!--  <div v-show="load_emploi">
      <Emploi/>
    </div>
   
    <div v-show="load_note">
    <Note/>
    </div> -->
  </div>
  <!-- start footer -->
  <footer id="footer" style="margin-top:50px;position:relative;bottom:-63px; width:1100px; float:right;">

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
  // @ is an alias to /src

  import Emploi from '@/components/Emploit.vue'
  import Note from '@/components/Etudiant/NoteEtudiant.vue'
  import NotificationEtudiant from '@/components/Etudiant/NotificationEtudiant.vue'
  import EtudiantGetPfe from '@/components/Etudiant/EtudiantGetPfe.vue'
  import axios from 'axios'
  import $ from 'jquery'
  export default {
    data() {
      return {
        load_emploi: false,
        load_note: false,
        current: "",
        full_name: "",
        counter:"",
        alert_count:"",
        notification_vide:""
      }
    },
    name: 'Home',
    components: {
      Emploi,
      Note,
      NotificationEtudiant,
      EtudiantGetPfe
    },
    methods: {
        show_pfe() {
        this.current = "EtudiantGetPfe";   
        this.notification_vide=""; 
        this.setlcolor('pfe');
      },
      show_notification() {
        if(this.counter !="0"){      
        this.current = "NotificationEtudiant";   
        }else{
        this.notification_vide="Aucune notification n'est prévu";
        this.current="";
        }
        this.setlcolor('notification');  
      },
      show_emploi() {
        this.notification_vide="";
        this.current = "Emploi";
        this.setlcolor('emploi');
        
      },
      show_note() {
        this.notification_vide="";
        this.current = "Note";
       this.setlcolor('note');

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
  $("#note").removeClass("link_click");
  $("#"+choix).addClass("link_click");
      }

    },
    created() {

      if (localStorage.getItem("logged") != "success") {
        this.$router.push('/');
      }
      if ((localStorage.getItem("role") != "etudiant")) {
        this.$router.push('/');
      }
      this.full_name = localStorage.getItem("full_name");
       /*  this.current = "NotificationEtudiant"; */
        this.counter = localStorage.getItem("counter");
         this.current = "Emploi";
          this.alert_count="alert-count";
           this.notification_vide="";
        
      axios.defaults.headers.common['auth-token'] = localStorage.getItem("token");
    }


  }
</script>

<style >

.show{
   background-color: #d8ecf1;
}
.link_click{
   background-color: #17a2b8;
  }
</style>