<template>
    
    <div style="margin-top:70px;">
<table class="table" style="width:900px; margin-left:-100px;">
    
  <thead>
   <tr  >
  <th colspan="1"  class="show nopadding">Prof</th>
  <th colspan="1" class="show nopadding">Module</th>
  <th colspan="1" class="show nopadding">Salle</th>
  <th colspan="1" class="show nopadding">date</th>
  <th colspan="2" class="show nopadding">etat de la seance</th>
  <th colspan="1" class="show nopadding">decision</th>
  </tr>
  </thead> 
  <tbody v-for="reservation_demande in reservation_demandes" :key="reservation_demande.module" >
      
      <tr>
       <td class="nopadding">{{reservation_demande.prof.nom}}</td>   
       <td class="nopadding">{{reservation_demande.module.module}}</td>
       <td class="nopadding">{{reservation_demande.seance.salle.numero}}</td>
       <td class="nopadding">{{reservation_demande.seance.jour}} {{reservation_demande.seance.heure}}</td>
       <td class="nopadding" colspan="2">{{reservation_demande.state}}</td>
        <td class="nopadding">
           <button @click="save('accepter',reservation_demande.id)" class="btn success nopadding">accepter</button>
            <button @click="save('refuser',reservation_demande.id)" class="btn danger nopadding">refuser</button>
       </td>
      </tr>
  </tbody>
  
</table>
        
        
    </div>
     
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            reservation_demandes:"",    
        }
    },
    methods:{
 async getdata(){
 await axios
        .get('http://127.0.0.1:8000/api/reservationadmin', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
          this.reservation_demandes = response.data.reservation_demandes
        ))  
}    ,
     async save(decision,id){
         await axios
        .post('http://127.0.0.1:8000/api/reservationadmin', {
          decision:decision  ,
          id :id
        })
        .then(response => (
          console.log(response.data),
          this.getdata()
        ))  
      }
    },
  async created(){
    this.state="";
    this.message="";
     this.getdata();
   } 
}
</script>
<style scoped>

.show{
   background-color: #d8ecf1;
   
}
.success{
   background-color: #d2fac8;
}
.danger{
   background-color: #facac8;
}
.nopadding{
padding:1px 1px;
}
</style>