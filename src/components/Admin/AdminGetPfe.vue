<template>
    
    <div style="margin-top:70px;">
<table class="table" style="width:900px; margin-left:-100px;">
    
  <thead>
   <tr  >
  <th colspan="1"  class="show nopadding">Prof nom et prenom</th>
  <th colspan="1" class="show nopadding">Etudiant nom et prenom</th>
  <th colspan="1" class="show nopadding">sujet</th>
  <th colspan="1"  class="show nopadding">date</th>
  <th colspan="1"  class="show nopadding">salle</th>
  <th  colspan="1" class="show nopadding">operation</th>
  
  
  
  </tr>
  </thead> 
  <tbody  >
      
      <tr v-for="pfe in pfes" :key="pfe.prof">
       <td class="nopadding" v-bind:id="'prof'+pfe.id">{{pfe.prof}}</td>   
       <td class="nopadding"  v-bind:id="'etudiant'+pfe.id">{{pfe.etudiant}}</td>
       <td class="nopadding" v-bind:id="'sujet'+pfe.id" >{{pfe.sujet}}</td>
       <td class="nopadding" v-bind:id="'date'+pfe.id">{{pfe.date}}</td>
       <td class="nopadding" v-bind:id="'salle'+pfe.id">{{pfe.salle}}</td>
       <td class="nopadding" >
           <button @click="editit(pfe)" class="btn success nopadding" v-bind:id="'edit'+pfe.id" >edit</button>
            <button @click="deleteit(pfe)" class="btn danger nopadding"  >delete</button>
           <button @click="updateit(pfe)" class="btn primary nopadding" v-bind:id="'update'+pfe.id" style="display: none;">update</button>
       </td>
      </tr>
  </tbody>
  
</table>
        
        
    </div>
     
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
export default {
    data(){
        return{
            prof:"",    
            etudiant:"",
            sujet:"",
            date:"",
            salle:"",
            pfes:"",
            selected_etudiant:"etudiants",
             selected_prof:"profs",
              selected_salle:"salles"
        }
    },
    methods:{
      deleteit(pfe){
 axios
      .delete( 'http://127.0.0.1:8000/api/deletepfe',{
         params :{
         role:"admin",
          id:pfe.id
         } 
      })
      .then(response => (
              console.log(response),
              this.getdata()
          ))   
      },
         editit(pfe){
$("#sujet"+pfe.id).html("<input class='border' style='width:80px;' value='"+pfe.sujet+"'>");
$("#date"+pfe.id).html("<input class='border' style='width:80px;' value='"+pfe.date+"'>");
           
$("#update"+pfe.id).show();
$("#edit"+pfe.id).hide();
        },
         updateit(pfe){
      $("#sujet"+pfe.id).html($("#sujet"+pfe.id).children().val()); 
      $("#date"+pfe.id).html($("#date"+pfe.id).children().val());    
      $("#update"+pfe.id).hide();
      $("#edit"+pfe.id).show();

      axios
      .put( 'http://127.0.0.1:8000/api/updatepfe',{
          role:"admin",
          id:pfe.id,
          sujet:$("#sujet"+pfe.id).html(),
          date:$("#date"+pfe.id).html()
      })
      .then(response => (
              console.log(response),
                 this.getdata()
          ))    

        },
 async getdata(){
 await axios
        .get('http://127.0.0.1:8000/api/getpfeadmin', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
          this.pfes= response.data.pfes
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
.primary{
  background-color: #c9c8fa;
}
.danger{
   background-color: #facac8;
}
.nopadding{
padding:1px 1px;
}
</style>