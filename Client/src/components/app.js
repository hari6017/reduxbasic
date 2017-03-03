import React from 'react';
import Userlist from '../containers/Userlist';
import Countries from '../containers/Countries'
var App = ()=>(
  <div>
    <h1>User Details</h1>
    <Userlist />
    <Countries />
    <hr/>
    <h2>Users:</h2>
  </div>
)


export default App;
