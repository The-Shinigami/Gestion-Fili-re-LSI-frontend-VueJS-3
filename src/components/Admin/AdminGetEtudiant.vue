<template>
    
    <div style=" width:1000px;" >
<table class="table" style="width:1000px;">
    
  <thead>
   <tr>
  <th   class="show nopadding">nom</th>
  <th   class="show nopadding">prenom</th>
  <th   class="show nopadding">cne</th>
  <th   class="show nopadding">date de naissance</th>
  <th   class="show nopadding">semestre</th>
  <th   class="show nopadding">operation</th>
  </tr>
  </thead> 
  <tbody v-for=" etudiant in  etudiants" :key="etudiant.id" >
      
      <tr>
       <td class="nopadding"  v-bind:id="'nom'+etudiant.id">{{etudiant.nom}}</td>   
       <td class="nopadding" v-bind:id="'prenom'+etudiant.id">{{etudiant.prenom}}</td>
       <td class="nopadding" v-bind:id="'cne'+etudiant.id">{{etudiant.cne}}</td>
       <td class="nopadding" v-bind:id="'date_de_naissance'+etudiant.id">{{etudiant.date_de_naissance}}</td>
       <td class="nopadding" v-bind:id="'semestre_id'+etudiant.id" >{{etudiant.semestre_id}}</td>
        <td class="nopadding" >
           <button @click="editit(etudiant)" class="btn success nopadding" v-bind:id="'edit'+etudiant.id" >edit</button>
            <button @click="deleteit(etudiant)" class="btn danger nopadding"  >delete</button>
           <button @click="updateit(etudiant)" class="btn primary nopadding" v-bind:id="'update'+etudiant.id" style="display: none;">update</button>
       </td>
      </tr>
  </tbody>
  
</table>
        
        
    </div>
     
</template>
<script>
import axios from 'axios'
import $ from  'jquery'
export default {
    data(){
        return{
            etudiants:"",
                
        }
    },
    methods:{  
      deleteit(etudiant
      
      ){
 axios
      .delete( 'http://127.0.0.1:8000/api/deleteetudiant',{
         params :{
         role:"admin",
          id:etudiant.id
         } 
      })
      .then(response => (
              console.log(response),
              this.getdata()
          ))   
      },
       editit(etudiant){
$("#nom"+etudiant.id).html("<input class='border' style='width:80px;' value="+etudiant.nom+">");
$("#prenom"+etudiant.id).html("<input class='border' style='width:80px;' value="+etudiant.prenom+">");
$("#cne"+etudiant.id).html("<input class='border' style='width:80px;' value="+etudiant.cne+">");
$("#date_de_naissance"+etudiant.id).html("<input class='border' style='width:80px;' value="+etudiant.date_de_naissance+">");
$("#semestre_id"+etudiant.id).html("<input class='border' style='width:80px;' value="+etudiant.semestre_id+">");
$("#update"+etudiant.id).show();
$("#edit"+etudiant.id).hide();
        },  
        updateit(etudiant){
      $("#nom"+etudiant.id).html($("#nom"+etudiant.id).children().val()); 
      $("#prenom"+etudiant.id).html($("#prenom"+etudiant.id).children().val()); 
      $("#cne"+etudiant.id).html($("#cne"+etudiant.id).children().val()); 
      $("#date_de_naissance"+etudiant.id).html($("#date_de_naissance"+etudiant.id).children().val());  
      $("#semestre_id"+etudiant.id).html($("#semestre_id"+etudiant.id).children().val());    
      $("#update"+etudiant.id).hide();
      $("#edit"+etudiant.id).show();

      axios
      .put( 'http://127.0.0.1:8000/api/updateetudiant',{
          role:"admin",
          id:etudiant.id,
          nom:$("#nom"+etudiant.id).html(),
          prenom:$("#prenom"+etudiant.id).html(),
          cne:$("#cne"+etudiant.id).html(),
          date_de_naissance:$("#date_de_naissance"+etudiant.id).html(),
          semestre_id:$("#semestre_id"+etudiant.id).html()
      })
      .then(response => (
              console.log(response)
          ))   

      
   this.getdata();
        },
 async getdata(){
 await axios
        .get('http://127.0.0.1:8000/api/getalletudiant', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
          this.etudiants= response.data.etudiants
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
.border{
      border:10px solid black ;
      margin:10px;
      height:30px;
      width:150px;
  } 
</style>