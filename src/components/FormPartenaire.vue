<template>
  <q-stepper v-model="step" header-nav ref="stepper" color="black" animated>
    <q-step :name="1" icon="child_care" :done="step > 1">
      <ul class="box-info q-pa-sm">
        <li class="aos-item" data-aos="zoom-in-right">
          <!-- FORMULAIRE ABOUT PERE -->
          <q-form @submit="submitForm">
            <p class="text-weight-bold text-center">Informations Père</p>

            <q-input
              dense
              v-model="nom"
              label="nom du Père"
              type="text"
              required
            />
            <q-input
              dense
              v-model="postnom"
              label="Postnom"
              type="text"
              required
            />
            <q-input
              dense
              v-model="prenom"
              label="Prenom"
              type="text"
              required
            />
            <q-input
              dense
              v-model="date_naissance"
              label="Date de Naissance"
              type="date"
              required
            />
            <q-select
              v-model="sexe"
              :options="options"
              label="Genre"
              dense
              required
            />
            <q-input
              dense
              v-model="lieu_naissance"
              label="Lieu de Naissance"
              type="text"
              required
            />
          </q-form>
        </li>
      </ul>
    </q-step>

    <q-step :name="2" icon="pregnant_woman" :done="step > 2">
      <ul class="box-info q-pa-sm">
        <div class="text-grey-9 text-h5 text-weight-bold text-center">
          Informations Personnelles du Père
        </div>

        <li class="aos-item" data-aos="zoom-in-right">
          <!-- FORMULAIRE ABOUT PERE -->
          <q-form @submit="submitForm">
            <q-select
              v-model="id_groupement"
              :options="options"
              label="Groupement"
              dense
              required
            />
            <q-select
              v-model="id_avenue"
              :options="options"
              label="Avenue"
              dense
              required
            />
            <q-input
              dense
              v-model="num_maison"
              label="N° Maison"
              type="text"
              required
            />
          </q-form>
        </li>
      </ul>
    </q-step>
    <q-step :name="3" icon="create_new_folder" :done="step > 3">
      <ul class="box-info q-pa-sm">
        <li class="aos-item" data-aos="zoom-in-right">
          <!-- FORMULAIRE AJOUT ADRESSE PERE -->
          <q-form @submit="submitForm">
            <p class="text-weight-bold text-center">Informations Mère</p>

            <q-input
              dense
              v-model="nom"
              label="nom de la Mère"
              type="text"
              required
            />
            <q-input
              dense
              v-model="postnom"
              label="Postnom"
              type="text"
              required
            />
            <q-input
              dense
              v-model="prenom"
              label="Prenom"
              type="text"
              required
            />
            <q-input
              dense
              v-model="date_naissance"
              label="Date de Naissance"
              type="date"
              required
            />
            <q-select
              v-model="sexe"
              :options="options"
              label="Genre"
              dense
              required
            />
            <q-input
              dense
              v-model="lieu_naissance"
              label="Lieu de Naissance"
              type="text"
              required
            />
          </q-form>
        </li>
      </ul>
    </q-step>

    <q-step :name="4" icon="add_comment">
      <ul class="box-info q-pa-sm">
        <div class="text-grey-9 text-h5 text-weight-bold text-center">
          Informations Personnelles de la Mère
        </div>

        <li class="aos-item" data-aos="zoom-in-right">
          <!-- FORMULAIRE ABOUT PERE -->
          <q-form @submit="submitForm">
            <q-select
              v-model="id_groupement"
              :options="options"
              label="Groupement"
              dense
              required
            />
            <q-select
              v-model="id_avenue"
              :options="options"
              label="Avenue"
              dense
              required
            />
            <q-input
              dense
              v-model="num_maison"
              label="N° Maison"
              type="text"
              required
            />
          </q-form>
        </li>
      </ul>
    </q-step>
    <q-step :name="5" icon="check">
      <ul class="box-info q-pa-sm">
        <!-- <div class="text-grey-9 text-h5 text-weight-bold text-center">
          Parenté| <span>Mère</span>
        </div> -->
        <li class="aos-item" data-aos="zoom-in-right">
          <!-- FORMULAIRE AJOUR ADRESSE MERE -->
          <p class="text-weight-bold text-center">
            Informations Sur le nouveau-né
          </p>
          <q-form @submit="submitForm">
            <q-input
              dense
              v-model="nom"
              label="nom de l'Enfant"
              type="text"
              required
            />
            <q-input
              dense
              v-model="postnom"
              label="Postnom"
              type="text"
              required
            />
            <q-input
              dense
              v-model="prenom"
              label="Prenom"
              type="text"
              required
            />
            <q-input
              dense
              v-model="date_naissance"
              label="Date de Naissance"
              type="date"
              required
            />
            <q-select
              v-model="sexe"
              :options="options"
              label="Genre"
              dense
              required
            />
            <q-input
              dense
              v-model="lieu_naissance"
              label="Lieu de Naissance"
              type="text"
              required
            />
          </q-form>
        </li>
      </ul>
    </q-step>

    <template v-slot:navigation>
      <q-stepper-navigation>
        <q-btn
          @click="$refs.stepper.next()"
          color="black"
          :label="step === 5 ? 'Enregistrer' : 'Continuer'"
        />

        <q-btn
          v-if="step > 1"
          flat
          color="black"
          @click="$refs.stepper.previous()"
          label="retour"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </template>
  </q-stepper>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      step: ref(1),
      model: ref(null),
      modeler: ref(null),
      sexe: ref(null),
      options: ["M", "F"],
      optionss: ["Marron", "Bleu", "Vert", "Gris", "Noir", "Hétérochromie"],
    };
  },
};
</script>
