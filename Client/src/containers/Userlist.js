import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export  class Userlist extends React.Component{
  createusers(){
    console.log(this.props.Users[0]);
    var x=this.props.Users.map((user)=>{

    return  <li key = {user.id}>{user.first} {user.last} {}</li>
  }
);
  var y=this.props.Countries.map((user)=>{
  return  <li key = {user.id}>{user.state} {user.city} {}</li>
}
)
    return(
      <div>{x}
      {y}</div>






    );
  }
  render(){

    return(
    <div>
      {this.createusers()}
    </div>
    );
  }
}

function mapStateToProps(state)
{
  console.log("h"+state.Users[0].first);
  return{
    Countries : state.Country,
    Users : state.Users,

};
}

export default connect(mapStateToProps)(Userlist);
