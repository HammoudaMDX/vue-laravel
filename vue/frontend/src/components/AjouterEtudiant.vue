<template>
<div class="mb-3">
    <label  class="form-label">Nom</label>
     <input type="text" class="form-control" id="Nom" placeholder="Email">
    <label  class="form-label">Prenom</label>
     <input type="text" class="form-control" id="Prenom" placeholder="Email">
    <label  class="form-label">Email address</label>
     <input type="email" class="form-control" id="Email" placeholder="Email">
    </div>
        <button type="button" class="mini ui orange button" @click="saveEtudiant">Ajouter</button>
    <div class="mb-3">
   
</div>
</template>
<script>
    import axios from "axios";


export default {
    name:"AjouterEtudiant",
    data(){
        return { Nom:'',Prenom:'',Email:'',};
    },
 
    methods:{
     async saveEtudiant(){
            try {
                await axios.post('http://127.0.0.1:8000/api/etudiants/',
                {Nom:this.Nom,Prenom:this.Prenom,Email:this.Email,});
                this.Nom ="",this.Prenom="",this.Email="";
                this.$router.push('/');
            } catch (error) {
                console.log(error);
            }
        },

    },

}
</script>