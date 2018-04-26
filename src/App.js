import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router';
import Tablerow from './components/tablerow';
import InputForm from './components/inputform';
import IssueDetails from './components/issuedetails';

class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       posts:[],
       formData:{
         username:'',
         respositoryname:''
       }
     }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleInputChange(event) {
     const forminput = this.state.formData;
     forminput[event.target.name] = event.target.value;
     this.setState(forminput);
   }

   handleSubmit(event) {
     event.preventDefault();
     axios.get('https://api.github.com/repos/'+this.state.formData.username+'/'+this.state.formData.respositoryname+'/issues')
     .then(response => this.setState({
       posts: response.data
     })).catch((err) => { console.log(err); });
  }

  render() {
   var issues = this.state.posts.map((issue)=>
     <Tablerow key={issue.id} issue={issue}/>
   )

    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" render={()=>(
              <div>
                <InputForm
                  formData={this.state.formData}
                  handleSubmit={this.handleSubmit}
                  handleInputChange={this.handleInputChange}
                />
                <br/>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Issue number</th>
                      <th>Issue id</th>
                      <th>Issue title</th>
                      <th>Issue date</th>
                    </tr>
                  </thead>
                  <tbody>
                   {issues}
                  </tbody>
                </table>
              </div>
               )}/>
            <Route path="/:postID" render={(props)=> (
                <IssueDetails {...this.state} {...props}/>
              )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
