import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_USER } from "../../graphql/query";
import CardTable from "./CardTable";
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
  
class UserTable extends Component {
  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, error, data }) => {
          if (error) {
            return "error while loading data";
          }
          if (loading) {
            return <h1>Loading............</h1>;
          }
          if (data) {
            //    const dataArray= [];
            //    dataArray.push(data);
            console.log("-------data---", data.getUser.data);
            return (
              <div>
                <table style={style.table}>
                  {data.getUser.data.map(item => (
                    <tr>
                      <td style={style.td}>{item.trainee}</td>
                      <td style={style.td}>{item.reviewer}</td>
                    </tr>
                  ))}
                </table>
              </div>
            );
            //    return <CardTable data={data.getUser.data} />
          }
          // return dataArray
          // return data.getUser.data;
        }}
      </Query>
    );
  }
}

export default UserTable;
