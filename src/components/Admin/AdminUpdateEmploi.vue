<template>
    
    <div style=" width:900px;margin-left:-100px;margin-top:100px;" >
      <div  v-show="msg_error">
                         <div class="alert alert-danger">
                         {{error}}
                         </div>                   
                     </div>
<table class="table" style="width:900px;">
     
  <thead>
   <tr>
  <th   class="show nopadding">module</th>
  <th   class="show nopadding">jour</th>
  <th   class="show nopadding">heure</th>
  <th   class="show nopadding">salle</th>
  <th   class="show nopadding">operation</th>
  </tr>
  </thead> 
  <tbody v-for=" emploi in  emplois" :key="emploi.id" >
      
      <tr>
       <td class="nopadding" >{{emploi.module}}</td>   
       <td class="nopadding" v-bind:id="'jour'+emploi.id">{{emploi.jour}}</td>
       <td class="nopadding" v-bind:id="'heure'+emploi.id">{{emploi.heure}}</td>
       <td class="nopadding" v-bind:id="'salle'+emploi.id" >{{emploi.salle}}</td>
        <td class="nopadding" >
           <button @click="editit(emploi)" class="btn success nopadding" v-bind:id="'edit'+emploi.id" >edit</button>
           <button @click="updateit(emploi)" class="btn primary nopadding" v-bind:id="'update'+emploi.id" style="display: none;">update</button>
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
            emplois:"",
            selected_jour:"",
            selected_heure:"",
            current_jour:"",
             current_heure:"",
            new_jour:"",
            new_heure:"",
            msg_error:false,
            
            error:""
                
        }
    },
    methods:{  
       editit(emploi){
         this.msg_error=false;
         this.error="";
         this.current_jour= $("#jour"+emploi.id).html();
         this.current_heure = $("#heure"+emploi.id).html();
$("#jour"+emploi.id).html('<select style="width:120px;height:35px;border-color:black;" class="show btn btn-rounded mb-2"><option value="jours" selected disabled>jours</option><option>lundi</option><option>mardi</option><option>mercredi</option><option>jeudi</option><option>vendredi</option><option>samedi</option></select>');
$("#heure"+emploi.id).html('<select  style="width:170px;height:35px;border-color:black;" class="show btn btn-rounded mb-2"> <option value="heures" selected disabled>heurs</option><option>9:00h -> 12:45h</option><option>15:00h -> 18:45h</option></select>');
$("#jour"+emploi.id).children().val(emploi.jour)
$("#heure"+emploi.id).children().val(emploi.heure)
$("#update"+emploi.id).show();
$("#edit"+emploi.id).hide();
        },  
        updateit(emploi){
       console.log(this.new_jour );     
      $("#update"+emploi.id).hide();
      $("#edit"+emploi.id).show();
      this.new_jour = $("#jour"+emploi.id).children().val();
      this.new_heure = $("#heure"+emploi.id).children().val();

      axios
      .put( 'http://127.0.0.1:8000/api/updateemploi',{
          role:"admin",
          id:emploi.id,
          jour:this.new_jour,
          heure:this.new_heure,
          salle:$("#salle"+emploi.id).text()
      })
      .then(response => (
              console.log(response.data),
               this.geterror(response.data.state ,emploi.id) ,    
         this.getdata()
        
          ))    
 
        },
      geterror(state,id){
 if(state == "occupé"){
    this.msg_error=true;
    this.error="La seance est occupé , choisissez une autre seance";
     $("#jour"+id).html(this.current_jour);
     $("#heure"+id).html(this.current_heure);
  }
  if(state == "failed"){
    this.msg_error=true;
    this.error="information incorrect";
     $("#jour"+id).html(this.current_jour);
     $("#heure"+id).html(this.current_heure);
  }
  if(state == "success"){
  $("#jour"+id).html(this.new_jour);
$("#heure"+id).html(this.new_heure);
  }



      },
 async getdata(){
 await axios
        .get('http://127.0.0.1:8000/api/getemploi', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
          this.emplois= response.data.emplois,
          console.log(response.data.emplois)
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