import React from "react";

const tabelasRoutes = [
  {
    path: "/tabelas/professor",
    component: React.lazy(() => import("./Professor"))
  },
  {
    path: "/tabelas/aluno",
    component: React.lazy(() => import("./Aluno"))
  }
];

export default tabelasRoutes;
