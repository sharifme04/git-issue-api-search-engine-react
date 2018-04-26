import React from 'react';
import { Link } from 'react-router-dom';

class IssueDetails extends React.Component {
  constructor(props){
    super(props);
    this.postData = this.props.posts.filter(post => post.id == this.props.match.params.postID)
  }
  render() {
    const post = this.postData[0];
    //console.log(post);
    return (
    <div className="row">
    <div className="col-sm-offset-4 col-sm-4">
      <div className="panel panel-primary ">
        <div className="panel-heading ">
           <p className="text-center">UserName:{post.user.login}</p>
        </div>
        <div className="panel-body">
          <img className="userAvatar center-block" src={post.user.avatar_url} alt="user profile"/>
          <div className="text-center">
            <p>issue body:{post.body}</p>
            <p>issue state:{post.state}</p>
            <p>issue comments:{post.comments}</p>
            <p>User Profile url:<a href={post.user.url}>{post.user.url}</a></p>
          </div>
        </div>
       </div>
       <Link to="/"><button type="button" className="btn btn-primary">Back</button></Link>
     </div>
    </div>
    )
  }
}

export default IssueDetails;
