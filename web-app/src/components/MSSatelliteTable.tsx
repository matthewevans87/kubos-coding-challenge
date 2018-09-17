import * as React from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";
import { FlattenedBarrel } from '../models/FlattenedBarrel';
import { StoreState } from '../types/StoreState';
import { connect } from 'react-redux';
// import * as matchSorter from 'match-sorter'
const matchSorter = require('match-sorter')

interface Props {
  flattenedBarrels: Array<FlattenedBarrel>

}

    function MSSatelliteTable ({
      flattenedBarrels
    }: Props) {

      return (
        <div>
          <h2>Barrels</h2>
          <div className="table-responsive">
            <ReactTable
            data={flattenedBarrels}
            filterable
            defaultFilterMethod={(filter: any, row: any) =>
              String(row[filter.id]) === filter.value}
            columns={[
              {
                columns: [
                  {
                    Header: "Satellite Id",
                    id: "satellite_id",
                    accessor: (d: any) => d.satellite_id,
                    filterMethod: (filter: any, rows: any) =>
                      matchSorter(rows, filter.value, { keys: ["satellite_id"] }),
                    filterAll: true
                  },
                  {
                    Header: "Barrel Id",
                    id: "barrel_id",
                    accessor: (d: any) => d.barrel_id,
                    filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value, { keys: ["barrel_id"] }),
                    filterAll: true
                  },
                  {
                    Header: "Flavor",
                    id: "last_flavor_sensor_result",
                    accessor: (d: any) => d.last_flavor_sensor_result,
                    filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value, { keys: ["last_flavor_sensor_result"] }),
                    filterAll: true
                  },
                  {
                    Header: "Status",
                    id: "status",
                    accessor: (d: any) => d.status,
                    filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value, { keys: ["status"] }),
                    filterAll: true
                  },
                  {
                    Header: "Errors",
                    id: "errors",
                    accessor: (d: any) => d.errors,
                    filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value, { keys: ["errors"] }),
                    filterAll: true
                  },
                  {
                    Header: "Update Age",
                    id: "update_age",
                    accessor: (d: any) => d.update_age,
                    filterMethod: (filter: any, rows: any) =>
                    matchSorter(rows, filter.value, { keys: ["update_age"] }),
                    filterAll: true
                  }
                  
                ]
              }
            ]}
            defaultPageSize={20}
            className="-striped -highlight"
          />
          
          </div>
        </div>
      );
  }

  
  function mapStateToProps(state: StoreState){
    return {
      flattenedBarrels: state.flattenedBarrels
    }
  }

  export default connect(mapStateToProps)(MSSatelliteTable);
