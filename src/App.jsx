import { useState } from "react";
import Home from "./pages/Home/Home";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Ministerios from "./pages/Ministerios/Ministerios";
import Assembleias from "./pages/Assembleias/Assembleias";
import Tribunais from "./pages/Tribunais/Tribunais";
import { Footer } from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import DetailPage from "./pages/DetailPage/DetailPage";
import Layout from "./Router/Layout";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ministerios" element={<Ministerios />} />
        {/* <Route path="/ministerios/detail/:id" element={<MinisterioDetail />} /> */}
        <Route path="assembleias" element={<Assembleias />} />
        <Route path="tribunais" element={<Tribunais />} />
        <Route path=":orgType/:orgName" element={<DetailPage />} />
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
