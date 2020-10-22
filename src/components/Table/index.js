import React from "react";
import { useTable } from "react-table";
import { Auto } from "styled-icons/crypto";

function Table({ movies }) {
  const data = React.useMemo(() => [...movies], [movies]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Year",
        accessor: "year",
      },
      {
        Header: "Runtime",
        accessor: "runtime",
      },
      {
        Header: "Revenue",
        accessor: "revenue",
      },
      {
        Header: "Rating",
        accessor: "rating",
      },
      {
        Header: "Genres",
        accessor: "genre",
      },
    ],
    []
  );

  const genres = [
    "All",
    "Action",
    "Adventure",
    "Sci-Fi",
    "Horror",
    "Thriller",
    "Animation",
    "Comedy",
    "Family",
    "Fantasy",
    "Drama",
    "Music",
    "Biography",
    "Romance",
    "History",
    "Crime",
    "War",
  ]

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div style={{maxWidth: "760px", margin: "0 auto"}}>
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        <tr>
          <td style={{padding: "10px", background: "#fff"}}>
            <input type="text" placeholder="search..."/>
          </td>
          <td style={{padding: "10px", background: "#fff"}}></td>
          <td style={{padding: "10px", background: "#fff"}}></td>
          <td style={{padding: "10px", background: "#fff"}}></td>
          <td style={{padding: "10px", background: "#fff"}}></td>
          <td style={{padding: "10px", background: "#fff"}}>
           <select>
              {genres.map((item, index) => <option key={index}>{item}</option>)}
           </select>

          </td>
        </tr>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                      color: "#222",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default Table;
