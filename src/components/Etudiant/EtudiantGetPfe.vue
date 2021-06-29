<template>
    
    <div style="margin-top:70px;">
<table class="table" style="width:900px; margin-left:-100px;">
    
  <thead>
   <tr  >
  <th colspan="1"  class="show nopadding">Prof nom et prenom</th>
  <th colspan="1" class="show nopadding">Etudiant nom et prenom</th>
  <th colspan="1" class="show nopadding">sujet</th>
  <th colspan="1" class="show nopadding">date</th>
  <th colspan="2" class="show nopadding">salle</th>
  </tr>
  </thead> 
  <tbody  >
      
      <tr>
       <td class="nopadding">{{prof}}</td>   
       <td class="nopadding">{{etudiant}}</td>
       <td class="nopadding">{{sujet}}</td>
       <td class="nopadding">{{date}}</td>
       <td class="nopadding">{{salle}}</td>
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
            prof:"",    
            etudiant:"",
            sujet:"",
            date:"",
            salle:""
        }
    },
    methods:{
 async getdata(){
 await axios
        .get('http://127.0.0.1:8000/api/getpfeetudiant', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
             this.prof = response.data.prof,    
             this.etudiant = response.data.etudiant,
             this.sujet = response.data.sujet,
             this.date = response.data.date,
             this.salle = response.data.salle
        ))  
}  
    },
  async created(){
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