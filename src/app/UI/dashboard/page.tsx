"use client";
import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const data = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    status: "active",
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    age: 25,
    status: "inactive",
  },
  {
    firstname: "Bob",
    lastname: "Smith",
    age: 40,
    status: "active",
  },
  {
    firstname: "Alice",
    lastname: "Johnson",
    age: 35,
    status: "inactive",
  },
  {
    firstname: "Mike",
    lastname: "Davis",
    age: 28,
    status: "active",
  },
];

export default function Dashboard() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstname",
        header: "First Name",
      },
      {
        accessorKey: "lastname",
        header: "Last Name",
      },
      {
        accessorKey: "age",
        header: "Age",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns,
  });

  return <MaterialReactTable table={table} />;
}
