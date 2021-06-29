<template>
  <div style="margin-top:70px;">
 <table class="table" style="width:500px; position:relative;left:100px;">
    <thead>
      <tr>
        <th scope="col">Module</th>
      </tr>
    </thead>
    <tbody v-for=" (module) in  modules" :key="module.id">
      <tr>
        <td class="show" @click="show_module_click(module.module)"> {{module.module}}</td>
      </tr>

      <table style="width:500px; margin:auto;" v-bind:id="module.module" hidden>
        <tr>
          <th scope="col" >Nom</th>
          <th scope="col">Prenom</th>
          <th scope="col">Update Note</th>
          <th scope="col">Note</th>
        </tr>
        <tr v-for=" etudiant in  module.etudiants" :key="etudiant.nom">
          <td>{{etudiant.nom}}</td>
          <td>{{etudiant.prenom}}</td>
          <td><input type="text" style="border: 1px solid rgb(26, 25, 25);width:30px;" v-model="notes[module.module+etudiant.id]"></td>

          <td>
            <div v-for="note_etudiant in notes_etudiant" :key="note_etudiant.id">
             <div v-if="note_etudiant.module_id == module.id && note_etudiant.etudiant_id==etudiant.id ">
                {{note_etudiant.note}}
                  </div>
            </div>
          </td>
        </tr>
        
      </table>
    </tbody>
  </table>
  
  <button class="btn btn-outline-info btn-rounded" style="width:500px; position:relative;left:-100px;" data-mdb-ripple-color="dark" @click="save()">Enregistrer les notes</button>

  </div>
 
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        modules: "",
        notes: [],
        notes_value: [],
        notes_etudiant:[]
      }
    },
    methods: {
     show_module_click(id){
       if(document.getElementById(id).hidden === true){
       document.getElementById(id).removeAttribute("hidden");
       }else{
           document.getElementById(id).hidden=true;
       }
      
     },
     async getdata(){
       await axios
        .get('http://127.0.0.1:8000/api/noteprof', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
          this.modules = response.data.modules,
          this.notes_value = response.data.notes,
          this.notes_etudiant=response.data.notes_etudiant,
          this.notes=[]
        ))
     },
       save() {
        for (var key in this.notes) {
          var value = this.notes[key];
          
           axios
            .post('http://127.0.0.1:8000/api/noteprof/save', {
              module_etudiant: key,
              note: value
            })
            .then(response => (
              console.log(response.data),
                this.getdata(),
                this.notes[key]=""
            
            ))

      
      }}
    },
    async created() {
      
      if (localStorage.getItem("logged") != "success") {
        this.$router.push('welcome');
      }
      if ((localStorage.getItem("role") != "prof")) {
        this.$router.push('welcome');
      }
      this.getdata(); 
    },
    


  }
</script>
<style  scoped>
.show{
   background-color: #d8ecf1;
}
.show:hover {
  background-color: #17a2b8;
  cursor: pointer;}
  
</style>
  
