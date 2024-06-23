import Image from "next/image";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import NavBar from "./UI/NavBar/page";
import Dashboard from "./UI/dashboard/page";

export default function Home() {
  return (
    <main className="container">
      <NavBar />
      <Dashboard />
    </main>
  );
}
