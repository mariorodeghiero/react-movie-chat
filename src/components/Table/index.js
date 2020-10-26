import React from "react";
import { useTable, useFilters } from "react-table";
import { SelectFilter } from "../SelectFilter/index.";
import { ColumnFilter } from "../ColumnFilter/index.";
import * as S from "./styled";

function Table({ movies, handleMovie }) {
  const data = React.useMemo(() => [...movies], [movies]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        Filter: ColumnFilter,
      },
      {
        Header: "Year",
        accessor: "year",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Runtime",
        accessor: "runtime",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Revenue",
        accessor: "revenue",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Rating",
        accessor: "rating",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Genres",
        accessor: "genre",
        Filter: SelectFilter,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useFilters);

  return (
    <S.Wrapper>
      <S.Table {...getTableProps()}>
        <S.Thead>
          {headerGroups.map((headerGroup) => (
            <S.Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <S.Th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <S.Filters>
                    {column.canFilter ? column.render("Filter") : null}
                  </S.Filters>
                </S.Th>
              ))}
            </S.Tr>
          ))}
        </S.Thead>
        <S.Content>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <S.TrContent
                  {...row.getRowProps()}
                  white={index % 2 === 0}
                  onClick={() => handleMovie(row.values.title)}
                >
                  {row.cells.map((cell) => {
                    return (
                      <S.TdContent {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </S.TdContent>
                    );
                  })}
                </S.TrContent>
              );
            })}
          </tbody>
        </S.Content>
      </S.Table>
    </S.Wrapper>
  );
}

export default Table;
