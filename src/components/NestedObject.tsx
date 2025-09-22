import React from 'react'
import { useState } from 'react'

const Nested = () => {

  const [ customer, setCustomer ] = useState({
    name: "Guy",
    address: {
      city: "San francisico",
      zipCode:"91145"

    }
  });

  const handleClick = () => {
    setCustomer({
        ...customer, 
        address: {...customer.address, zipCode: "ahbal"},
    });
  };

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Update guy</button>
    </div>
  )
}

export default Nested
