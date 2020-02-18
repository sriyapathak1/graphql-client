// import React, { Component } from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// class TableData extends Component {
//     render() {
//         return (
//             <div>
//                 <TableContainer >
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell></TableCell>
//             <TableCell align="right"></TableCell>
//             <TableCell align="right"></TableCell>
//             <TableCell align="right"> </TableCell>
//             <TableCell align="right"> </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {/* {rows.map(row => ( */}
//             <TableRow >
//               <TableCell >

//               </TableCell>
//               <TableCell align="right"> </TableCell>
//               {/* <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell> */}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//             </div>
//         );
//     }
// }

// export default TableData;
import React from "react";
import UserTable from "./UserTable";

const style = {
  td: {
    color: "#000000",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "14px",
    textAlign: "left",
    padding: "3px",
    margin: "11px 0 25px",
    border: "1px solid #CCCCCC"
  },
  table: {
    width: "50%",
    marginBottom: "25px"
  }
};

const CardTable = props => (
  // <div>
  //   <table style={style.table}>
  //     {/* {props.data.map((i) => ( */}
  //       <tr>
  //         <td style={style.td}>
  //           {/* {i} */}
  <UserTable />
  //       </td>
  //     </tr>
  //   {/* ))} */}
  // </table>

  // </div>
);

export default CardTable;
