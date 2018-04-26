import React from 'react';

const InputForm = (props) => {
  console.log(props);
  return(
    <div className="row">
     <div className=" col-sm-offset-4 col-sm-4">
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <div className="form-group">
            <label>User name: </label>
            <input
            className="form-control"
            name="username"
            type="text"
            value={props.formData.username}
            onChange={props.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Repository name: </label>
            <input
            className="form-control"
            name="respositoryname"
            type="text"
            value={props.formData.respositoryname}
            onChange={props.handleInputChange} />
          </div>
        <button type="submit" className="btn btn-primary">Get all issues</button>
     </form>
    </div>
  </div>
  )
};
export default InputForm;
