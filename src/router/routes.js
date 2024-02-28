const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/DashUser",
        component: () => import("pages/UserDashboard.vue"),
      },
      {
        path: "/MyAccount",
        component: () => import("pages/ComptePage.vue"),
      },
      {
        path: "/MyChart",
        component: () => import("pages/ChartsJs.vue"),
      },
      {
        path: "/ParaMetre",
        component: () => import("src/pages/PageParam.vue"),
      },
      {
        path: "/RevieWs",
        component: () => import("src/pages/RapportGlobal.vue"),
      },
      // Coté Création commpte Partenaire
      {
        path: "/PartLog",
        component: () => import("src/pages/LogCnx.vue"),
      },
      {
        path: "/DashPart",
        component: () => import("src/pages/PartenerPage.vue"),
      },
      {
        path: "/RapPart",
        component: () => import("src/pages/PartenaireRapport.vue"),
      },
      {
        path: "/FroMer",
        component: () => import("src/pages/Forms/MyForms.vue"),
      },
      {
        path: "/Da",
        component: () => import("src/pages/FormPages/DashAvenue.vue"),
      },
      {
        path: "/Dq",
        component: () => import("src/pages/FormPages/DashQuartier.vue"),
      },
      {
        path: "/Dc",
        component: () => import("src/pages/FormPages/DashCommune.vue"),
      },
      {
        path: "/Dg",
        component: () => import("src/pages/FormPages/DashGroupe.vue"),
      },
      {
        path: "/Dp",
        component: () => import("src/pages/FormPages/DashPart.vue"),
      },
      {
        path: "/Dpa",
        component: () => import("src/pages/FormPages/DashPays.vue"),
      },
      {
        path: "/Dpr",
        component: () => import("src/pages/FormPages/DashProv.vue"),
      },
      {
        path: "/Dt",
        component: () => import("src/pages/FormPages/DashTerr.vue"),
      },
      {
        path: "/Dv",
        component: () => import("src/pages/FormPages/DashVille.vue"),
      },
      {
        path: "/Dper",
        component: () => import("src/pages/FormPages/DashPersonne.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
