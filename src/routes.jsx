import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Home, Login, Cadastro, Perfil, Usuarios } from "./pages";
import { FullLayout, MinimalLayout } from "./layouts";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token);

  if (token) return <Outlet />;
  return <Navigate to='/login' replace />;
}

function RotasAdmin() {
  const usuario = useAuthStore((state) => state.usuario);

  if (usuario?.permissao) return <Outlet />;
  return <Navigate to='/' replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<FullLayout />}>
        <Route element={<RotasPrivadas />}>
          <Route index element={<Home />} />
          <Route path='perfil' element={<Perfil />} />
          <Route element={<RotasAdmin />}>
            <Route path='usuarios' element={<Usuarios />} />
          </Route>
        </Route>
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
