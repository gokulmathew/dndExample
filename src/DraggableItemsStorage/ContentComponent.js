import React from 'react';
import { DropTarget } from 'react-dnd';
import App from '../App';


const collect=(connect, monitor) =>{
    return {
       connectDropTarget: connect.dropTarget(),
      hovered: monitor.isOver(),
      item: monitor.getItem(),


    };
  }

const CatchTarget = {

    drop(props, monitor, component) {
        const item = monitor.getItem();   
        // We send the data here and it will abe accepted by AddItem in App.js file and will be set to SsetSTate
        props.handleAdd(item,props.content_name,props.index)    
    }

}
class  Content extends React.Component {
    render(){
         const { connectDropTarget,hovered,monitor,handleAdd} = this.props;

        
    return connectDropTarget(
        
    <div className="box" >
        {this.props.presentItems.name} 
    </div>
    
     )
    }
}

export default DropTarget("item", CatchTarget, collect)(Content);
