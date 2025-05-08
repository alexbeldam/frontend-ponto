import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Home, Login, Cadastro, Perfil, Usuarios } from "./pages";
import { FullLayout, MinimalLayout } from "./layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<FullLayout />}>
        <Route index element={<Home />} />
        <Route path='perfil' element={<Perfil />} />
        <Route path='usuarios' element={<Usuarios />} />
      </Route>

      <Route path='/' element={<MinimalLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
