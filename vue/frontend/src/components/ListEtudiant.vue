<template>
     <router-link :to="{name:'Create'}"> </router-link>
    <div class="customer-list">
    <div class="data">
       
      <table class="ui celled table">
        <thead>
          <tr>
            <th style="width: 50px; text-align: center;">#</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th style="width: 148px;">Action</th>
          </tr>
        </thead>

        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.Nom}}</td>
                <td>{{item.Prenom}}</td>
                <td>{{(item.Email)}}</td>
                <td>
                    <button class="mini ui blue button" @click="deleteEtudiant(item.id)">Edit</button>
                    <router-link :to="{name:'Edit' , params:{id:item.id}}" class="mini ui red button">Edit</router-link>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
    import axios from "axios";


    export default {
        name:"ListEtudiant",
        data(){
            return { items:[],};
        },
        created(){
            this.getEtudiants();
                },
        methods:{
         async getEtudiants(){
                try {
                    const response = await axios.get('http://127.0.0.1:8000/api/etudiants/');
                    this.items = response.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async DeleteEtudiant(id){
                try {
                    await axios.delete('http://127.0.0.1:8000/api/etudiants/'+id);
                    this.getEtudiants();
                } catch (error) {
                    console.log(error);
                }
            }
        }

    }
</script>