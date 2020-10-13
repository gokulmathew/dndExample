import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log('dragging '+props.item.name );
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    
    console.log(monitor.content_name +" sd")
  
    return props.handleDrop(props.item);
  },
} 

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class Item extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="item" style={{ opacity }}>
        <span>{item.name}</span>
      </div>
    );
  }
}

export default DragSource('item', itemSource, collect)(Item);
