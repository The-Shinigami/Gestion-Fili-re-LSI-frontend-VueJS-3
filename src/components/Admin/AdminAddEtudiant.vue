<template>
     <div style="margin-top:70px;margin-left:-200px;">
         <form @submit.prevent="onSubmit">
        <span class="help is-danger" ></span>

        <div class="field">
            <div class="control">
                <input class="input border"   placeholder="enter player nom..." v-model="nom"  >
                 <input class="input border" placeholder="enter player prenom..." v-model="prenom">
                 <input class="input border" placeholder="enter player cne..." v-model="cne">
                 <input class="input border" placeholder="enter player date..." v-model="date_de_naissance">
                 <select v-model="semestre" class="input border">
                 <option  selected disabled value="semestre">semestre</option>
                 <option  value="1">S1</option>
                 <option value="2">S2</option>
                 <option value="3">S3</option>
                 <option value="4">S4</option>
                <option  value="5">S5</option>
                <option  value="6">S6</option>

        </select>

            </div>
        </div>

        <button class="btn btn-outline-info btn-rounded mb-4">Ajuoter Etudiant</button>
    </form>
         </div>
         <div style="position:relative;right:140px;">
<component :is="current"></component>
         </div>
   
</template>

<script>
import AdminGetEtudiant from './AdminGetEtudiant.vue' 
import axios from 'axios'

export default {
    components:{
       AdminGetEtudiant
    },
    data() {
        return {  
           nom:"",
           prenom:"",
           cne:"",
           date_de_naissance:"",
           semestre:"semestre", 
           role:"admin",
           state:"",
           current:""
           
        }},
      
    methods: {
        onSubmit() {   
            this.postetudiant();
            console.log(this.semestre);
        },
        async postetudiant() {
          
            if(this.$data.cne !='' && this.$data.date !='' && this.$data.prenom !='' &&this.$data.nom !='')
           {  
     await axios
      .post( 'http://127.0.0.1:8000/api/addetudiant',this.$data)
      .then(response => (
              this.state=response.data.state,
              this.current=""

          ))      
          this.current="AdminGetEtudiant";              
                    this.cne ="";
                    this.date_de_naissance=""; 
                    this.nom="";
                    this.prenom=""; 
                    this.semestre="semestre";
        }}
        
    },
    created(){
        this.current="AdminGetEtudiant";
    }
 
}
</script>
<style scoped>
  .border{
      border:10px solid black ;
      margin:10px;
      height:30px;
      width:150px;
  }  
</style>