import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from "react-router-dom";
import './App.css';
import TopSearchBar from './components/TopSearchBar';
import * as Actions from './actions/gifAction';
import GifList from './components/GifList';
//import SingleView from './components/SingleView';
import Errorpage from './components/ErrorPage';

class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Route exact path="/" render={()=>(
              <div>
                <div className="navbar navbar-default">
                  <TopSearchBar onTermChange={this.props.actions.fetchGifs} />
                </div>
                <GifList gifs={ this.props.gifs } />
              </div>
            )}/>
          {/*  <Route path="/:postID" render={(props)=> (
             <SingleView gifs={ this.props.gifs } {...props}/>
           )}/> */}
           <Route path="*" component={Errorpage} />
         </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
