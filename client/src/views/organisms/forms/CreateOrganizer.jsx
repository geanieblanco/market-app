import React, { useState } from 'react'
import { Button } from '../../atoms/Atoms'
import { Input } from '../../molecules/Molecules'

export default function CreateVendor() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [phone, setPhone] = useState()
  const [zipcode, setZipcode] = useState()

  const handleInputChange = (input) => {
    if (input.name === 'name') setName(input.value)
    if (input.name === 'email') setEmail(input.value)
    if (input.name === 'address') setAddress(input.value)
    if (input.name === 'phone') setPhone(input.value)
    if (input.name === 'zipcode') setZipcode(input.value)
  }

  return (
    <>
      <p className="text-center">
        Organizer accounts will automatically be linked to your main account.
        You can add additional users later.
      </p>
      <form name="create-vendor">
        <Input
          type="text"
          inputName="name"
          labelName="Organizer Name"
          value={name}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Input
          type="text"
          inputName="email"
          labelName="Organizer Email"
          value={email}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Input
          type="phone"
          inputName="phone"
          labelName="Organizer Phone"
          value={phone}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Input
          type="text"
          inputName="address"
          labelName="Organizer Address"
          value={address}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Input
          type="text"
          inputName="zipcode"
          labelName="Organizer Zipcode"
          value={zipcode}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Button buttonCopy="Create Organizer" class="button--main" />
        <Button buttonCopy="Save for Later" class="button--secondary" />
      </form>
    </>
  )
}
