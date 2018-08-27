import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
//import  Main from "./components/main";
import  wall from "./components/wall";
import  hi5 from "./components/hi5";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Router>
        <Layout>
            <Header title="" scroll>
            </Header>
            <Drawer title="Hi5">
                <Navigation>
                  <div className="profile">
                    <span><img src="https://vignette.wikia.nocookie.net/vsbattles/images/8/83/Niklaus_Mikaelson.jpg/revision/latest?cb=20180411173549" alt="Blankface"/></span>  
                      <h2><i>John Smith &ensp;<i className="fas fa-hand-paper"></i> 5</i></h2>
                      <p>3x High5s left to give for April</p>
                      <p>You have 12 High5s</p>

                     
                  </div>
                  <hr/>
                  <div className="pages">
                  
                      <Link to = "/wall"><p>High 5 Wall</p></Link>
                     <Link to ="/hi5"> <p>Give a High 5</p></Link>
                  </div>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content"/>
                <Route exact path="/wall" component={wall}/>
                <Route exact path="/hi5" component={hi5}/>
            </Content>
        </Layout>
      </Router>
  </div>


    );
  }
}

export default App;
