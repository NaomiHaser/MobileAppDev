
import React, { useState } from "react";
import ValueProvider from './ValueContext';
import Profile from './Profile'

const App = () => {
  const data = {name:"no one", email:"non@none.com"}

  return (
    <ValueProvider value={data}>
        <Profile />
    </ValueProvider>
  )
}

export default App