import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserListComponent from "./UserListComponent";

import UserDetailComponent from "./UserDetailCOmponent"
 
function App() {

  return (
<div className="App">
<h2>Axios demo</h2>
 
      <BrowserRouter>
<Routes>
<Route path="/" element={<UserListComponent />} />
<Route path="/user/:id" element={<UserDetailComponent />} />
</Routes>
</BrowserRouter>
</div>

  );

}
 
export default App;

 
