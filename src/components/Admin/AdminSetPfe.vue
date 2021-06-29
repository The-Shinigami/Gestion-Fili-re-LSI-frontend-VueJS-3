<template>
    <div class="container" style="margin-top:100px;margin-left:45px;">
<div class="row">
<div class="col-8">
    <div>
      <select v-model="selected_etudiant" style="width:400px;height:35px;border-color:black;" class="show btn btn-rounded mb-2">
      <option value="etudiants" disabled>Etudiants</option>
      <option v-for="etudiant in etudiants" :key="etudiant" :value="etudiant.etudiant_id">{{etudiant.etudiant}}</option>
    </select>
    </div>
      <div>
      <select v-model="selected_prof" style="width:400px;height:35px;border-color:black;" class="show btn btn-rounded mb-2">
      <option value="profs" disabled>profs</option>
      <option v-for="prof in profs" :key="prof" :value="prof.prof_id">{{prof.prof}}</option>
    </select>
    </div>
    <div>
      <select v-model="selected_salle" style="width:400px;height:35px;border-color:black;" class="show btn btn-rounded mb-2">
      <option value="salles" disabled>salles</option>
      <option v-for="salle in salles" :key="salle" :value="salle.salle_id">{{salle.salle}}</option>
    </select>
    </div>
    <div><input type="text" style="width:400px;height:35px;border:1px solid black;" placeholder="  ... dete ...(aa/mm/jj h:m:s)" v-model="date" class="show  mb-2"></div>
     <div><input type="text" style="width:400px;height:35px;border:1px solid black;" placeholder="  ... sujet ..." v-model="sujet" class="show  mb-2"></div>
        
     <div>
       <button @click="save()" class="btn btn-outline-info btn-rounded" style="width:400px;">envoyer la reservation</button>
     </div>

</div>
<!-- <div>
  <AdminGetPfe/> 
</div> -->
<div>
  <component :is="current"></component>
</div>
</div>
</div>
</template>
<script>
import axios  from "axios"
import AdminGetPfe from './AdminGetPfe.vue'
export default {
      data(){
        return{
            profs:"",    
            etudiants:"",
            sujet:"",
            date:"",
            salles:"",
            selected_etudiant:"etudiants",
             selected_prof:"profs",
              selected_salle:"salles",
              current:"AdminGetPfe"
        }
    },
    components:{
AdminGetPfe 
    },
    methods:{
 async getdata(){
 await axios
        .get('http://127.0.0.1:8000/api/getallpfe', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
          this.etudiants= response.data.etudiants,
          this.profs= response.data.profs,
          this.salles= response.data.salles

          
        ))  
}  ,
async save(){

      await axios
      .post( 'http://127.0.0.1:8000/api/setpfeadmin',{
            'sujet': this.sujet,
            'date': this.date,
            'salle_id':  this.selected_salle,
            'etudiant_id': this.selected_etudiant,
            'prof_id': this.selected_prof

      })
      .then(response => (
              console.log(response),
              this.getdata(),
              this.current=""
              ))
            this.profs = "";    
            this.etudiants = "";
            this.sujet = "";
            this.date = "";
            this.salles = "";
            this.selected_etudiant = "etudiants";
            this.selected_prof = "profs";
            this.selected_salle = "salles";
            this.current="AdminGetPfe";

}
    },
  async created(){
     this.getdata();
   } 
    

}
</script>
<style scoped>


::placeholder {
    color: rgb(0, 0, 0) !important;
    opacity: 1 !important;
}
</style>