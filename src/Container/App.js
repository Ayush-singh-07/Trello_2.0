import React from 'react'
import './App.css'
import 'tachyons'
import ListItems from '../Components/ListItems'

class App extends React.Component {
  constructor(){
    super() 
    this.state={
      List: [],
      addFeild: ''
    }
  }

addFeildChange=(event)=>{
  this.setState({
    addFeild: event.target.value
  })
}

addtoList=(event)=>{
  if(this.state.addFeild === ''){
    return 
  }else
  this.setState({
    List: this.state.List.concat(this.state.addFeild)
  })
}

deleteItems=(itemtoDel)=>{
const Filtered=this.state.List.filter(item=>{
  return item!==itemtoDel;
})
this.setState({
  List: Filtered
})
}


render(){
  return(
    <div className= "App tc ">
    <div className="bg-light-red  dib br3 pa3 ma2  shadow-6">
  <ListItems deleteItems={this.deleteItems}
             addtoList={this.addtoList}
             List={this.state.List}
             addFeildChange={this.addFeildChange}/>
  <p className='quote'>“ For every minute spent organizing,</p>
  <p className='quote'> an hour is earned.”</p>
 
    </div>
    </div>
    ); 
  }  
}

  
 
export default App;
