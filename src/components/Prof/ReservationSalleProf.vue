<template>

<div class="container" style="margin-top:100px;margin-left:45px;">
<div class="row">
<div class="col-8">
<div v-if="state == 'success'">
      <div class="alert alert-success">
        {{message}}
      </div>
    </div>
    <div v-if="state == 'failed'">
      <div class="alert alert-danger">
        {{message}}
      </div>
    </div>
    <div>
      <select v-model="selected_module" style="width:400px;height:35px;border-color:black;" class="show btn btn-rounded mb-2">
      <option value="modules" disabled>Modules</option>
      <option v-for="module in modules" :key="module">{{module}}</option>
    </select>
    </div>
    <div>
      <select v-model="selected_salle" style="width:400px;height:35px;border-color:black;" class="show btn btn-rounded mb-2">
      <option value="salles" disabled>salles</option>
      <option v-for="salle in salles" :key="salle">{{salle}}</option>
    </select>
    </div>
    <div>
       <select v-model="selected_jour" style="width:400px;height:35px;border-color:black;" class="show btn btn-rounded mb-2">
      <option value="jours" selected disabled>jours</option>
      <option>lundi</option>
      <option>mardi</option>
      <option>jeudi</option>
      <option>vendredi</option>
      <option>samedi</option>
    </select>
    </div>
    <div>
      <select v-model="selected_heure" style="width:400px;height:35px;border-color:black;" class="show btn btn-rounded mb-2">
      <option value="heures" selected disabled>heurs</option>
      <option>9:00h -> 12:45h</option>
      <option>15:00h -> 18:45h</option>
    </select>
    </div>
     
     <div>
       <button @click="save()" class="btn btn-outline-info btn-rounded" style="width:400px;">envoyer la reservation</button>
     </div>

</div>
</div>
</div>


</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        modules: "",
        salles: "",
        selected_module: "modules",
        selected_salle: "salles",
        selected_jour: "jours",
        selected_heure: "heures",
        message: "",
        state: ""
      }
    },
    methods: {
     async  getdata(){
       this.state = "";
      this.message = "";
      await axios
        .get('http://127.0.0.1:8000/api/reservationprof', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
          this.modules = response.data.modules,
          this.salles = response.data.salles
        ))

       
       
      },
      async save() {
        await axios
          .post('http://127.0.0.1:8000/api/reservationprof', {
            module: this.selected_module,
            salle: this.selected_salle,
            jour: this.selected_jour,
            heure: this.selected_heure

          })
          .then(response => (
            this.message = response.data.message,
            this.state = response.data.state,
            this.getdata()
          ))
      }
    },
    created() {
      this.getdata();
    }
  }
</script>
<style >

.show{
   background-color: #d8ecf1
}
</style>