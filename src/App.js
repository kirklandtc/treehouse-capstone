import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Contact from './components/Contact';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Reviews from './components/Reviews';


class App extends Component {

  state={
    treehouses:[]
  }

  async componentDidMount(){
  const data=await fetch('https://treehousecapstoneback.herokuapp.com/treehouses')
  const treehouses=await data.json()
  this.setState({
    treehouses:treehouses
  })
  console.log("hello",treehouses)
}



  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={()=> <Home treehouses={this.state.treehouses}/>} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/Plans" component={Plans} />
          <Route path="/Reviews" component={Reviews} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
