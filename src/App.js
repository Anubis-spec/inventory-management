import React from 'react'
import './App.css'

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         stock: [
            { id: 1, Item: '', number: 21 },
            { id: 2, Item: '', number: 19 },
            { id: 3, Item: '', number: 16 },
            { id: 4, Item: '', number: 25 }
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.stock[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.stock.map((info, index) => {
         const { id, Item, number } = info 
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{Item}</td>
               <td>{number}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Inventory</h1>
            <table id='stock'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table;