<template>
<div style="width:500px; position:relative;left:70px;top:50px;">
<table class="table" style="width:500px; margin:auto;  margin-bottom:30px;">

    <thead>
      <tr>
        <th colspan="2" class="show"  @click="show_semestre_click('S1')">Semestre S1</th>
      </tr>
    </thead>


    <tr class="S1" hidden>
      <th colspan="1">Module</th>
      <th colspan="1">Note</th>
    </tr>

    <tbody v-for="note in notes" :key="note.id" class="S1" hidden>

      <tr v-if="(note.module.semestre.semestre =='S1')">
        <td colspan="1">{{note.module.module}}</td>
        <td colspan="1">{{note.note}}</td>
      </tr>

    </tbody>


  </table>
  <table class="table" style="width:500px; margin:auto; margin-bottom:30px;">

    <thead>
      <tr>
        <th colspan="2" class="show" @click="show_semestre_click('S2')">Semestre S2</th>
      </tr>
    </thead>
    <tr class="S2" hidden>
      <th colspan="1">Module</th>
      <th colspan="1">Note</th>
    </tr>

    <tbody v-for="note in notes" :key="note.id" class="S2" hidden>

      <tr v-if="(note.module.semestre.semestre =='S2')">
        <td colspan="1">{{note.module.module}}</td>
        <td colspan="1">{{note.note}}</td>
      </tr>

    </tbody>

  </table>
  <table class="table" style="width:500px; margin:auto; margin-bottom:30px;">

    <thead>
      <tr>
        <th colspan="2" class="show" @click="show_semestre_click('S3')">Semestre S3</th>
      </tr>
    </thead>
    <tr class="S3" hidden>
      <th colspan="1">Module</th>
      <th colspan="1">Note</th>
    </tr>

    <tbody v-for="note in notes" :key="note.id" class="S3" hidden>

      <tr v-if="(note.module.semestre.semestre =='S3')">
        <td colspan="1">{{note.module.module}}</td>
        <td colspan="1">{{note.note}}</td>
      </tr>

    </tbody>

  </table>
  <table class="table" style="width:500px; margin:auto; margin-bottom:30px;">

    <thead>
      <tr>
        <th colspan="2" class="show" style="hight:;" @click="show_semestre_click('S4')">Semestre S4</th>
      </tr>
    </thead>
    <tr class="S4" hidden>
      <th colspan="1">Module</th>
      <th colspan="1">Note</th>
    </tr>

    <tbody v-for="note in notes" :key="note.id" class="S4" hidden>

      <tr v-if="(note.module.semestre.semestre =='S4')">
        <td colspan="1">{{note.module.module}}</td>
        <td colspan="1">{{note.note}}</td>
      </tr>

    </tbody>

  </table>
  <table class="table" style="width:500px; margin:auto; margin-bottom:30px;">

    <thead>
      <tr>
        <th colspan="2" class="show" @click="show_semestre_click('S5')">Semestre S5</th>
      </tr>
    </thead>
    <tr class="S5" hidden>
      <th colspan="1">Module</th>
      <th colspan="1">Note</th>
    </tr>

    <tbody v-for="note in notes" :key="note.id" class="S5" hidden>

      <tr v-if="(note.module.semestre.semestre =='S5')">
        <td colspan="1">{{note.module.module}}</td>
        <td colspan="1">{{note.note}}</td>
      </tr>

    </tbody>

  </table>
</div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        notes: ""
      }
    },
    methods: {
      show_semestre_click(semestre) {
        document.getElementsByClassName(semestre).forEach(element => {
          if (element.hidden == true) {
            element.hidden = false;
          } else {
            element.hidden = true;
          }

        });
      }
    },
    async created() {
      if (localStorage.getItem("logged") != "success") {
        this.$router.push('welcome');
      }
      if ((localStorage.getItem("role") != "etudiant")) {
        this.$router.push('welcome');
      }
      await axios
        .get('http://127.0.0.1:8000/api/note', {
          params: {
            id: localStorage.getItem("id"),
            role: localStorage.getItem("role")
          }
        })
        .then(response => (
          console.log(response.data.notes),
          this.notes = response.data.notes
        ))
    }


  }
</script>
<style scoped>
  .show{
   background-color: #d8ecf1
}
.show:hover {
  background-color: #17a2b8;
  cursor: pointer;}
</style>
