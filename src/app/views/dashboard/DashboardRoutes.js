import React from "react";
import { authRoles } from "../../auth/authRoles";

const dashboardRoutes = [
  {
    path: "/dashboard/home",
    component: React.lazy(() => import("./home")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/criarCurso",
    component: React.lazy(() => import("./criarCurso")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/detalhesCurso",
    component: React.lazy(() => import("./detalhesCurso")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/criarAula",
    component: React.lazy(() => import("./criarAula")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/detalhesAula",
    component: React.lazy(() => import("./detalhesAula")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/criarExercicio",
    component: React.lazy(() => import("./criarExercicio")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/detalhesExercicio",
    component: React.lazy(() => import("./detalhesExercicio")),
    auth: authRoles.admin
  },
  {
    path: "/dashboard/exercicio",
    component: React.lazy(() => import("./exercicio")),
    auth: authRoles.admin
  },
];

export default dashboardRoutes;
