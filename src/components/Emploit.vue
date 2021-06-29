<template>
 
   


<div style="position:relative;
left:-100px;
  width: 100%;
  padding: 10px;
">
  <h2 style="margin-bottom:20px; margin-left:10px;">Emploi Du Temps : {{emplois.semestre}} </h2>
    <table border="5" style="table-layout:fixed;width:900px;height:500px;"  cellspacing="0" align="center" class="table-bordered  " v-show="load">

        <tr>
            <td align="center" height="50" width="100" class="color"><br>
                <b>Day/Period</b><br>
            </td>
            <td align="center" height="50" width="100" class="color">
                <b>I<br>9:00-10:45</b>
            </td>
            <td align="center" height="50" width="100" class="color">
                <b>II<br>11:00-12:45</b>
            </td>
         
            <td align="center" height="50" width="100" class="color">
                <b>13:00-14:45</b>
            </td>
            <td align="center" height="50" width="100" class="color">
                <b>III<br>15:00-16:45</b>
            </td>
            <td align="center" height="50" width="100" class="color">
                <b>IV<br>17:30-18:45</b>
            </td>
     
        </tr>

        <tr>
            <td align="center" height="50" class="color">
                <b>Lundi</b>
            </td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleLundiMatin}}</b></td>
            <td colspan="1" align="center" height="50" class="row-border"></td>
        
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleLundiSoire}}</b></td>
        </tr>
        <tr>
            <td align="center" height="50" class="color">
                <b>Mardi</b>
            </td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleMardiMatin}}</b>
            </td>
            <td colspan="1" align="center" height="50" class="row-border"></td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleMardiSoire}}</b></td>
        </tr>
        <tr>
            <td align="center" height="50" class="color">
                <b>Mercredi</b>
            </td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleMercrediMatin}}</b></td>
            <td colspan="1" align="center" height="50" class="row-border"></td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleMercrediSoire}}</b></td>
        </tr>
        <tr>
            <td align="center" height="50" class="color">
                <b>Jeudi</b>
            </td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleJeudiMatin}}</b></td>
            <td colspan="1" align="center" height="50" class="row-border"></td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleJeudiSoire}}</b></td>

        </tr>
        <tr>
            <td align="center" height="50" class="color">
                <b>Vendredi</b>
            </td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleVendrediMatin}}</b></td>
            <td colspan="1" align="center" height="50" class="row-border"></td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleVendrediSoire}}</b></td>
        </tr>
        <tr>
            <td align="center" height="50" class="color">
                <b>Samedi</b>
            </td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleSamediMatin}}</b></td>
            <td colspan="1" align="center" height="50" class="row-border"></td>
            <td colspan="2" align="center" height="50" class="row-border"><b>{{emplois.ModuleSamediSoire}}</b></td>
        </tr>

    </table>

</div>
  
</template>

<script>
   import axios from 'axios'
export default {
 
    data() {
        return {
           emplois:"",
           load:false,
      

        }
    },
      
    async  created () { 
        var URL=""; 
        if(localStorage.getItem("logged")!="success"){
     this.$router.push('welcome');
    }
    if(localStorage.getItem("role")=="admin"){
        URL= 'http://127.0.0.1:8000/api/emploi/admin';
    }else if(localStorage.getItem("role")=="prof"){
       URL= 'http://127.0.0.1:8000/api/emploi/prof';
    }else if(localStorage.getItem("role")=="etudiant"){
      URL= 'http://127.0.0.1:8000/api/emploi/etudiant';
    }
     
            await axios
      .get( URL,{
          params : {
           id : localStorage.getItem("id"),
           role:localStorage.getItem("role"),
           semestres:localStorage.getItem("semestres"),
           semestre_id:localStorage.getItem("semestre_id")   
           }})
      .then(response => (
          console.log(response.data),
         this.emplois= response.data,
         this.load=true 
          )) 
        },
       
  
}
</script>
<style >
.color{
    background-color:#d8ecf1;
}
    
</style>