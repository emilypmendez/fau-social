import React, { useState, useEffect, useMemo } from 'react';
// import { Container, Row, Col } from 'mdb-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css"
import "mdb-ui-kit/css/mdb.min.css"

import { Container } from "reactstrap"
import TableContainer from "../components/TableContainer"
import { SelectColumnFilter } from '../components/Filters';

const Activities = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        const doFetch = async () => {
          const response = await fetch("https://randomuser.me/api/?results=100")
          const body = await response.json()
          const contacts = body.results
          console.log(contacts)
          setData(contacts)
        }
        doFetch()
      }, [])

    const columns = useMemo(
        () => [
          {
            Header: "List Item Number",
            accessor: "id.value",
          },
          {
            Header: "Title",
            accessor: "name.title",
          },
          {
            Header: "First Name",
            accessor: "name.first",
          },
          {
            Header: "Last Name",
            accessor: "name.last",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "City",
            accessor: "location.city",
            disableSortBy: true, // disable sorting for this column
            Filter: SelectColumnFilter,
            filter: 'equals',
          },
          // {
          //   Header: 'Color',
          //   accessor: 'color',
          //    // Cell has access to row values. If you are curious what is inside cellProps, you can  console log it
          //   Cell: (cellProps) => {
          //     return <Authors {...cellProps}/>
          //   }
          // },
          {
            Header: 'Hemisphere',
            accessor: (values) => {
              const { latitude, longitude } = values.location.coordinates;
              const first = Number(latitude) > 0 ? 'N' : 'S';
              const second = Number(longitude) > 0 ? 'E' : 'W';
              return first + '/' + second;
            },
            Filter: SelectColumnFilter,
            filter: 'equals',
            disableSortBy: true, // disable sorting for this column
            Cell: ({ cell }) => {
              const { value } = cell;
    
              const pickEmoji = (value) => {
                let first = value[0]; // N or S
                let second = value[2]; // E or W
                const options = ['⇖', '⇗', '⇙', '⇘'];
                let num = first === 'N' ? 0 : 2;
                num = second === 'E' ? num + 1 : num;
                return options[num];
              };
    
              return (
                <div style={{ textAlign: 'center', fontSize: 18 }}>
                  {pickEmoji(value)}
                </div>
              );
            },
          },
        ],
        []
      )

    return (
        <>
            <Container style={{ marginTop: 50 }}>
              <TableContainer columns={columns} data={data} />
            </Container>
        </>
    )
}

export default Activities;