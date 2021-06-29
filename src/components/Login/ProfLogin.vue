<template>
    <div class="limiter">
        <div class="container-login100" style="background-image: url('images/bg-01.jpg');">
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
                    <div class="wrap-input100 validate-input" data-validate="Entrer votre Email">
                        <input class="input100" type="text" name="username" placeholder="Login" v-model="login">
                        <span class="focus-input100" data-placeholder="&#xf207;"></span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Entrer votre mot de passe">
                        <input class="input100" type="password" name="pass" placeholder="mot de passe" v-model="password">
                        <span class="focus-input100" data-placeholder="&#xf191;"></span>
                    </div>
                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn " >
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
          login:"",
          password:"",
           error:"",
           msg_error:false  
        }},
      
    methods: {
        onSubmit() {
           
            this.postetudiant()
        },
        async postetudiant() {
          
            if(this.$data.login !='' && this.$data.password !='')
           {
              
     await axios
      .post( 'http://127.0.0.1:8000/api/login',this.$data)
      .then(response => (
          console.log(response),
                    localStorage.setItem("logged",response.data.logged), 
                    localStorage.setItem("token",response.data.token),
                    localStorage.setItem("role",response.data.role),
                    localStorage.setItem("full_name",response.data.full_name),
                    localStorage.setItem("id",response.data.id),
                    localStorage.setItem("counter_prof",response.data.counter_prof),

                    axios.defaults.headers.common['auth-token'] = response.data.token

          )) 
                     
                    if(localStorage.getItem("logged")=="failed"){
              this.msg_error=true;
         this.error="information incorrecte"
          }else{
               if( localStorage.getItem("role")=="prof"){
                        this.$router.push('/profHome');}
                   else if( localStorage.getItem("role")=="admin"){
                      this.$router.push('/adminhome');
                   } 
                     
                    this.login = '';
                    this.password=''; 
          }           
                         
        }}
        
    },
 
}
</script>