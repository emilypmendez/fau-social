import React, { useState, useEffect, useMemo } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "mdb-ui-kit/css/mdb.min.css"

import { Container } from "reactstrap"
import TableContainer from "../components/TableContainer"
import { SelectColumnFilter } from '../components/Filters';

const Activities = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
         try {
            const response = await fetch(`./assets/activities.json`) // https://randomuser.me/api/?results=100
            const jsonData = await response.json();
            const list = jsonData.results;
            console.log(list)
            setData(list)
          } catch (error) {
            console.error("Error fetching data:", error)
            }
        }
        fetchData()
      }, [])

      // useEffect(() => {
      //   fetch(`./assets/activities.json`)
      //     .then(res => res.json())
      //     .then(data => { 
      //       console.log(data)
      //       setData(data.results)
      //     }).catch(err => {
      //       console.log(err)
      //     })
      // }, [])

    const columns = useMemo(
        () => [
          {
            Header: "List Number",
            accessor: "id",
            // Cell: (cellProps) => {
            //       return console.log({cellProps});
            // }
          },
          {
            Header: "Name",
            accessor: "name",
            disableSortBy: false, // disable sorting for this column
          },
          {
            Header: "Address",
            accessor: "address",
            disableSortBy: false, // disable sorting for this column
          },
          {
            Header: "Miles",
            accessor: "miles",
            Filter: SelectColumnFilter,
            filter: 'contains',
          },
          {
            Header: "Price",
            accessor: "price",
            Filter: SelectColumnFilter,
            filter: 'equals',
          },
          {
            Header: "Type",
            accessor: "type",
            disableSortBy: false, // disable sorting for this column
            Filter: SelectColumnFilter,
            filter: 'contains',
          },
          // {
          //   Header: 'Color',
          //   accessor: 'color',
          //    // Cell has access to row values. If you are curious what is inside cellProps, you can  console log it
          //   Cell: (cellProps) => {
          //     return <Authors {...cellProps}/>
          //   }
          // },
          // {
          //   Header: 'Hemisphere',
          //   accessor: (values) => {
          //     const { latitude, longitude } = values.location.coordinates;
          //     const first = Number(latitude) > 0 ? 'N' : 'S';
          //     const second = Number(longitude) > 0 ? 'E' : 'W';
          //     return first + '/' + second;
          //   },
          //   Filter: SelectColumnFilter,
          //   filter: 'equals',
          //   disableSortBy: true, // disable sorting for this column
          //   Cell: ({ cell }) => {
          //     const { value } = cell;
    
          //     const pickEmoji = (value) => {
          //       let first = value[0]; // N or S
          //       let second = value[2]; // E or W
          //       const options = ['⇖', '⇗', '⇙', '⇘'];
          //       let num = first === 'N' ? 0 : 2;
          //       num = second === 'E' ? num + 1 : num;
          //       return options[num];
          //     };
    
          //     return (
          //       <div style={{ textAlign: 'center', fontSize: 18 }}>
          //         {pickEmoji(value)}
          //       </div>
          //     );
          //   },
          // },
        ],
        []
      )

    return (
        <>
            <h1 style={{ marginTop: 50 }}>Activities</h1>
            <Container style={{ marginTop: 50 }}>
              <TableContainer columns={columns} data={data} />
            </Container>
        </>
    )
}

export default Activities;