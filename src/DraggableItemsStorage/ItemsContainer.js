import React, { Component } from 'react';
import Item from '../Item';

class ItemContainer extends Component {
    state = { 
        items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
          ]
     }

     deleteItem = id => {
        this.setState(prevState => {
          return {
            items: prevState.items.filter(item => item.id !== id)
          }
        })
      }
    render() { 
        return ( 
            
                this.state.items.map((item, index) => (
                <Item key={item.id} item={item} handleDrop={(item) => {
                    // console.log(content_name +" at " + idPlace +" is "+item.name+stmt)  
                    this.deleteItem(item.id)}} />

              ))
         );
    }
}
 
export default ItemContainer;