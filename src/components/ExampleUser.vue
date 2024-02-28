<template>
  <div class="container">
    <!-- Composant pour afficher l'arbre généalogique -->
    <div class="family-tree">
      <ul>
        <li>
          <span class="person">{{ family.name }}</span>
          <ul v-if="family.children && family.children.length">
            <li v-for="child in family.children" :key="child.id">
              <FamilyTree :family="child" />
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Composant pour afficher le graphique -->
    <div class="chart-container">
      <canvas ref="myChart" class="chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "FamilyTreeChart",
  props: {
    family: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // Création du graphique avec Chart.js
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.myChart.getContext("2d");

      // Exemple de données pour le graphique (à remplacer par vos données)
      const data = {
        labels: ["Hommes", "Femmes"],
        datasets: [
          {
            label: "Genre",
            data: [
              this.countMales(this.family),
              this.countFemales(this.family),
            ],
            backgroundColor: [
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 99, 132, 0.5)",
            ],
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      };

      // Configuration du graphique
      const options = {
        responsive: true,
        maintainAspectRatio: false,
      };

      // Création d'une instance de Chart.js pour afficher le graphique
      new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
      });
    },
    countMales(person) {
      // Fonction pour compter les hommes dans la famille (à adapter selon votre structure)
      let count = person.gender === "male" ? 1 : 0;
      if (person.children) {
        person.children.forEach((child) => {
          count += this.countMales(child);
        });
      }
      return count;
    },
    countFemales(person) {
      // Fonction pour compter les femmes dans la famille (à adapter selon votre structure)
      let count = person.gender === "female" ? 1 : 0;
      if (person.children) {
        person.children.forEach((child) => {
          count += this.countFemales(child);
        });
      }
      return count;
    },
  },
};
</script>

<style scoped>
/* Styles CSS pour la mise en forme de l'arbre généalogique et du graphique */
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}

.family-tree {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 300px;
  max-width: 400px;
  background-color: #f9f9f9;
}

.person {
  font-weight: bold;
}

.chart-container {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 300px;
  max-width: 400px;
  background-color: #f9f9f9;
}

.chart {
  width: 100%;
  height: auto;
}
</style>
