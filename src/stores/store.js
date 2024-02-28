import { defineStore } from "pinia";
// import axios from "src/boot/axios";
import axios from "axios";
export const useStore= defineStore("store",{
  state:()=>({
  users:[],
  personnes:[],
  naissances:[],
  dernierePersonneAjoutee:[],
  // message,
  }),
  getters:{
    nombreUser(state){
        return state.users.length;
    },
    getNaissances(state){
      return state.naissances;
    },

  },
  actions:{
    async afficherUsers(){
      try{
        const url='https://sigp2023.hibaigle.net/user_person/get/?user=hibaigle&mdp=mdp';
        const headers={
          "Content-Type":"application/json"
        };
        const rest=await axios.get(url,headers,{
          params:{
            user:"hibaigle",
            mdp:"mdp"
          },
          validateStatus: function(status){
            return status<500;
          },
        });
          this.users=rest.data.response;
          console.log(this.users)
      }catch (err){
console.log(err);
      }
    },
    async afficherPersonnes(){
      try{
        const url='';
        const headers={
          "Content-Type":"application/json"
        };
        const rest=await axios.get(url,headers,{
          validateStatus: function(status){
            return status<500;
          },});
          //this.users=rest.data;
      }catch (err){
console.log(err);
      }
    },
    async afficherNaissance(){
      try{
        const url='https://sigp2023.hibaigle.net/naissance/get/?user=hibaigle&mdp=mdp';
        const headers={
          "Content-Type":"application/json"
        };
        const rest=await axios.get(url,headers,{
          params:{
            user:"hibaigle",
            mdp:"mdp"
          },
          // validateStatus: function(status){
          //   return status<500;
          // },
        });
          this.naissances=rest.data.response;
          console.log(this.naissances)
      }catch (err){
console.log(err);
      }
    },
    //ajout de la naissance
    async ajoutNaisaance(){
      try{
        const datas=this.getNaissances;
        const url='https://sigp2023.hibaigle.net/naissance/get/?user=hibaigle&mdp=mdp';
        const headers={
          "Content-Type":"application/json"
        };
        const rest=await axios.post(url,headers,datas,{
          params:{
            user:"hibaigle",
            mdp:"mdp"
          },
          // validateStatus: function(status){
          //   return status<500;
          // },
        }); this.message=rest.data.response;
           console.log(this.message)
      }catch (err){
console.log(err);
      }
    },
   async ajouterUser(id_personne, email, mdp, user={}){
      try{
        const datas= new FormData();
        datas.append('id_personne', id_personne)
        datas.append('email', email)
        datas.append('mdp', mdp)
        const url='https://sigp2023.hibaigle.net/user_person/save/?user=hibaigle&mdp=mdp';
        const headers={
          "Content-Type":"multipart/form-data"
        };
        const rest=await axios({
          method: 'post',
          url: url,
          params:{
            user:"hibaigle",
            mdp:"mdp"
          },
          headers: {
            "Content-Type":"multipart/form-data"
          },
          data: datas

          
          // validateStatus: function(status){
          //   return status<500;
          // },
        });
          this.message=rest.data.response;
          console.log(this.message)
          this.users.push(user)
      }catch (err){
console.log(err);
      }
    },
    async ajouterPersonne(nom,postnom,prenom,date_naissance,sexe,lieu_naissance,id_partenaire,id_groupement,id_avenue,num_maison){
      try{
        const datas=new FormData();
        datas.append('nom',nom);
        datas.append('postnom',postnom);
        datas.append('prenom',prenom);
        datas.append('date_naissance',date_naissance);
        datas.append('sexe',sexe);
        datas.append('lieu_naissance',lieu_naissance);
        datas.append('id_partenaire',id_partenaire);
        datas.append('id_groupement',id_groupement);
        datas.append('id_avenue',id_avenue);
        datas.append('num_maison',num_maison);
         const url='https://sigp2023.hibaigle.net/personne/post/?user=hibaigle&mdp=mdp';
          const rest=await axios({
          method: 'post',
          url: url,
          params:{
            user:"hibaigle",
            mdp:"mdp"
          },
          headers: {
            "Content-Type":"multipart/form-data"
          },
          data: datas
        });
          this.message=rest.data.response;
          console.log(this.message)
      }catch(err){
        console.log(err)
      }
    }
  }
})
