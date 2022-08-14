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
        Vendor accounts will automatically be linked to your main account. You
        can add additional users later.
      </p>
      <form name="create-vendor">
        <Input
          type="text"
          inputName="name"
          labelName="Vendor Name"
          value={name}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Input
          type="text"
          inputName="email"
          labelName="Vendor Email"
          value={email}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Input
          type="phone"
          inputName="phone"
          labelName="Vendor Phone"
          value={phone}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Input
          type="text"
          inputName="address"
          labelName="Vendor Address"
          value={address}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Input
          type="text"
          inputName="zipcode"
          labelName="Vendor Zipcode"
          value={zipcode}
          inputChange={(e) => handleInputChange(e.target)}
        />
        <Button buttonCopy="Create Vendor" class="button--main" />
        <Button buttonCopy="Save for Later" class="button--secondary" />
      </form>
    </>
  )
}
