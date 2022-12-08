<template>
<div class="mb-3">
    <label  class="form-label">Nom</label>
     <input type="text" class="form-control" id="Nom" placeholder="Email">
    <label  class="form-label">Prenom</label>
     <input type="text" class="form-control" id="Prenom" placeholder="Email">
    <label  class="form-label">Email address</label>
     <input type="email" class="form-control" id="Email" placeholder="Email">
    </div>
        <button type="button" class="mini ui orange button" @click="UpdateEtudiant">Modifer</button>
    <div class="mb-3">
   
</div>
</template>
<script>
    import axios from "axios";
import console from "console";


export default {
    name:"EditEtudiant",
    data(){
        return { Nom:'',Prenom:'',Email:'',};
    },
    created(){
            this.getEtudiantByid();
                },
    methods:{
     async getEtudiantByid(){
        try {
               const response = await axios.post('http://127.0.0.1:8000/api/etudiants/$(this.$router.params.id)')
                this.Nom = response.data.Nom;
                this.Prenom = response.data.Prenom;
                this.Email = response.data.Email;
                console.log(response);
            } catch (error) {
                console.log(error);
            }
     },
     async UpdateEtudiant(){
            try {
                await axios.put('http://127.0.0.1:8000/api/etudiants/$(this.$router.params.id)',
                {Nom:this.Nom,Prenom:this.Prenom,Email:this.Email,});
                this.$router.push('/');
            } catch (error) {
                console.log(error);
            }
        },

    },

}
</script>