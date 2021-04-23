import React, { Component } from 'react';
class Repos extends Component {
    render() { 

return ( 
    this.props.items.map(data =>  
          <div key= {data.id} className="card" style={{width: 25 + 'rem', margin: 10 + 'px'}}>
  <img src = {data.owner.avatar_url} alt="User Avatar" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">{data.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Stars:  {data.stargazers_count}</li>
    <li className="list-group-item">Issues:  {data.open_issues}</li>
    <li className="list-group-item"> Name: {data.owner.login}</li>
    <li className="list-group-item">submitted at {data.pushed_at}</li>
  </ul>
  </div>
  
     ))
    }
}

 
export default Repos;

/*
Repository name
Repository description
Number of stars for the repo.
Number of issues for the repo.
Username and avatar of the owner.
*/
