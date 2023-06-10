// TableContainer.js
import React from "react"
import { useTable, useSortBy, useFilters, usePagination } from "react-table"
import { Table, Row, Col, Button, Input } from 'reactstrap';
import { Filter, DefaultColumnFilter } from './Filters';

const TableContainer = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows, -> replaced by page
    page,
    prepareRow,
    // below new props related to 'usePagination' hook
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable({
    columns,
    data,
    defaultColumn: { Filter: DefaultColumnFilter },
    initialState: { pageIndex: 0, pageSize: 10 }
  },
  useFilters,
  useSortBy,
  usePagination
  )

  // pagination UI - helper function #1
  const onChangeInSelect = event => {
    setPageSize(Number(event.target.value))
  }
  // pagination UI - helper function #2
  const onChangeInInput = event => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0
    gotoPage(page)
  }

  // helper function to generate sorting indicators based on sorting state (ascending, descending, none)
  const generateSortingIndicator = column => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
  }

  // render UI for table
  // passed as a default filter for columns to the useTable hook, 
  // which means that each of the columns uses this filter until it is turned off or another filter is attached.
  useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter }
    }
  );

  return (
    // If you're curious what props we get as a result of calling our getter functions (getTableProps(), getRowProps())
    // Feel free to use console.log()  This will help you better understand how react table works underhood.
    <>
    <Table bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
              <div {...column.getSortByToggleProps()}>
                {column.render("Header")}
                {generateSortingIndicator(column)}
              </div>
              <Filter column={column} />
            </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
    
    <Row style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
    <Col md={3}>
    <Button
        color="primary"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
    >
        {"<<"}
    </Button>
    <Button
        color="primary"
        onClick={previousPage}
        disabled={!canPreviousPage}
    >
        {"<"}
    </Button>
    </Col>
    <Col md={2} style={{ marginTop: 7 }}>
    Page{" "}
    <strong>
        {pageIndex + 1} of {pageOptions.length}
    </strong>
    </Col>
    <Col md={2}>
    <Input
        type="number"
        min={1}
        style={{ width: 70 }}
        max={pageOptions.length}
        defaultValue={pageIndex + 1}
        onChange={onChangeInInput}
    />
    </Col>
    <Col md={2}>
    <Input type="select" value={pageSize} onChange={onChangeInSelect}>
        {/* > */}
        {[10, 20, 30, 40, 50].map(pageSize => (
        <option key={pageSize} value={pageSize}>
            Show {pageSize}
        </option>
        ))}
    </Input>
    </Col>
    <Col md={3}>
    <Button color="primary" onClick={nextPage} disabled={!canNextPage}>
        {">"}
    </Button>
    <Button
        color="primary"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
    >
        {">>"}
    </Button>
    </Col>
    </Row>
    </>
  )
}

export default TableContainer