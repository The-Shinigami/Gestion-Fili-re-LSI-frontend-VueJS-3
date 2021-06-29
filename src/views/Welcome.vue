  <template>

    <div>
      <!-- ======= Header ======= -->
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto " style="color:#51c1dd;">FSTT</h1>


          <nav id="navbar" class="navbar order-last order-lg-0 ">
            <ul>
              <li><a class="active" href="#">Accueil</a></li>
              <li>
                <a href="#about">A propos de nous</a>
              </li>
              <li><a href="#popular-courses">Cours</a></li>
              <li><a href="#events">Evenements</a></li>
              <li class="dropdown"><a href="#"><span>Espace</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                 <!--  <li><a href="etudiantLogin">Espace Etudiants</a></li> -->
                  <li><a class="pointer" @click="espace('EtudiantLogin')">Espace Etudiants</a></li>
                  <li><a class="pointer" @click="espace('ProfLogin')">Espace Enseignants</a></li>

                </ul>
              </li>


              <li><a href="#contact">Contactez-nous</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <!-- .navbar -->


        </div>
      </header>
      <!-- End Header -->
     <!-- start main -->
      <component :is="current">
      </component>
      <!-- end main -->
    <!-- ======= Footer ======= -->
    <footer id="footer">

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
    </div>
  </template>

  <script>
    import Welcome from '@/components/Welcome.vue';
    import EtudiantLogin from '@/components/Login/EtudiantLogin.vue'
    import ProfLogin from '@/components/Login/ProfLogin.vue'

    export default ({
      data() {
        return {
          current: "Welcome"
        };
      },
      name: 'welcome',
      components: {
        Welcome,EtudiantLogin,ProfLogin
      },
      methods:{
        espace(page){
        this.current=page;
        }
      }

    })
  </script>
  <style scoped>
  .pointer{
    cursor: pointer;
  }
  </style>