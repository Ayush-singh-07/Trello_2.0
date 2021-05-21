import React from 'react'
import './ListItems.css'
import { IoIosAddCircle } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

const ListItems=(props)=>{
	return(
		<div className="stretch">
		
			<h1>Trello</h1> 
			<div className= 'addFeild' >
					<input className=' pa3 ma3 ba b--green bg-lightest-blue'
				  			onChange={props.addFeildChange} 
				  			type='text' placeholder='Add here'/>
				
							<i className="add-btn" 
						    onClick={props.addtoList}><IoIosAddCircle/></i>
			</div>
			<div className='List-div"'>
				
					{props.List.map((item, index)=>{
						return <div className='list' ><p className='list-item' key={index}> {item}
								  <i className="done-btn" type='search' onClick={()=>props.deleteItems(item)}><IoMdTrash/></i>
								</p> </div>
					})} 
				
			</div>
		
		</div>
		);
} 
 
 
export default ListItems