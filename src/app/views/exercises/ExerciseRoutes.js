import React from "react";

const exerciseRoutes = [
  {
    path: "/exercicio/adicionar/:id_class",
    exact: true,
    component: React.lazy(() => import("./exerciseStore"))
  },
  {
    path: "/exercicio/estudante/:id_exercise",
    exact: true,
    component: React.lazy(() => import("./exerciseStudent"))  
  }, 
  {
    path: "/exercicio/:id_exercise",
    exact: true,
    component: React.lazy(() => import("./exerciseDetails"))
  },  
];

export default exerciseRoutes;
