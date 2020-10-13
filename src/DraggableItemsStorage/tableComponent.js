import React from 'react';
import Content from './ContentComponent';


const TableComponent = ({content_name,values, handleAdd}) =>{

    return ( 
        <div >
        {values.map((item,index)=>(
            <Content children="target" key={item.id} content_name={content_name} presentItems={item} handleAdd={handleAdd} index={index}/>
        ))}
        </div>
        
     )
}
export default TableComponent;

 
