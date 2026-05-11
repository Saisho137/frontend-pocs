import React, { useEffect, useState } from "react"

const User = ({ name, bornDate, currentDate }) => {
  const [age, setAge] = useState(21)

  const calculateAge = () => setAge(currentDate - bornDate)

  useEffect(() => {
    calculateAge()
  }, [])

  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
    </>
  )
}

export default User
