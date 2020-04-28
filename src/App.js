import React from 'react'
import './App.css'
import 'list.js'
import EditOutlined from '@ant-design/icons/EditOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         stock: [
            { id: 1, item: 'Computer', quantity: 21 },
            { id: 2, item: 'Phone', quantity: 19 },
            { id: 3, item: 'Monitor', quantity: 16 },
            { id: 4, item: 'Phone', quantity: 25 }
         ]
      }
   }
   deleteItem(index) {
      const { stock } = this.state;
      stock.splice(index, 1);
      this.setState({ index });
    }
   renderTableHeader() {
      let header = Object.keys(this.state.stock[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   renderTableData() {
      return this.state.stock.map((info, index) => {
         const { id, item, quantity} = info 
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{item}</td>
               <td>{quantity}</td>
               <td>
               <EditOutlined />
               </td> 
                  <td>
                  <DeleteOutlined onClick={this.deleteItem.bind(this, index)}/>
               </td>
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