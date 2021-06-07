//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import pic from "./pic.jpg"
import LifeCycle from "./components/LifeCycle";



class App extends Component{

     constructor(props){
       super(props);
       this.change = this.change.bind(this);
     }
  state = {
    person: {
      fullName: "hager",
       bio: "about me",
       imgSrc: <img style={{maxWidth: '10vw'}} src={pic} alt ='pic' />,
       profession: "banker" ,
       }
      }

    change() {
      this.setState.person({
      fullName: "mohamed",
      bio: "about him",
      });
    }

  
  render() {
    return (
      <div className="App">
              <button onClick={this.change}>show profile</button>
              
        <p>{this.state.person.imgSrc}</p>
        <p>{this.state.person.fullName} </p>
        <p>{this.state.person.bio} </p>
        <p>{this.state.person.profession}</p>
        
        <LifeCycle/>
      </div>
    );

  }

}

export default App;