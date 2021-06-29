<template>
       <div class="limiter">
        <div class="container-login100" style="background-image: url('../images/bg-01.jpg');">
            <div class="wrap-login100">
                <form class="login100-form validate-form" @submit.prevent="onSubmit">
                    <span class="login100-form-logo">
						<i class="zmdi zmdi-account-circle zmdi-hc-1x"></i>
					</span>

                    <span class="login100-form-title p-b-34 p-t-27">
						Se connecter
					</span>
                     <div  v-show="msg_error">
                         <div class="alert alert-danger">
                         {{error}}
                         </div>                   
                     </div>
                    <div class="wrap-input100 validate-input" data-validate="Entrer votre CNE">
                        <input class="input100" type="text" name="username" placeholder="CNE" v-model="cne">
                        <span class="focus-input100" data-placeholder="&#xf207;"></span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Entrer votre date de naissance" >
                        <input class="input100" type="password" name="pass" placeholder="01/01/2000" v-model="date_de_naissance">
                        <span class="focus-input100"  data-placeholder="&#xf191;"></span>
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn" >
							Se connecter
						</button>
                    </div>

                </form>
            </div>
        </div>

    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {  
           cne:"",
           date_de_naissance:"", 
           role:"etudiant",
           error:"",
           msg_error:false
        }},
      
    methods: {
        onSubmit() {
           
            this.postetudiant()
        },
        async postetudiant() {
          
            if(this.$data.cne !='' && this.$data.date_de_naissance !='')
           {
       
       
       
     await axios
      .post( 'http://127.0.0.1:8000/api/login',this.$data)
      .then(response => (
              console.log(response),
              localStorage.setItem("role", response.data.role),
              localStorage.setItem("logged",response.data.logged),
              localStorage.setItem("token",response.data.token),
              localStorage.setItem("id", response.data.id),
              localStorage.setItem("full_name",response.data.full_name),
               localStorage.setItem("counter",response.data.counter),
               console.log(response.data.counter)
          ))     
          if(localStorage.getItem("logged")=="failed"){
              this.msg_error=true;
         this.error="information incorrecte";
          }else{
              this.$router.push('/etudiantHome');
          }           
                    this.email = '';
                    this.date='';  
                  
        }}
        
    },
 
}
</script>
