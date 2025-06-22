import React from 'react'
import {FormBuilderPage} from "../../commonComponent/common-Form";

export const Login = ({open,close}) => {
  const fields = [
    { name: "username", placeholder: "Enter user name", type: "text" },
    { name: "password", placeholder: "Enter password", type: "password" },
  
  ];
  return (
    <>
    <FormBuilderPage
                open={open}
                handleAdd={close}
                // perSetData={setCreateData}
                fields={fields}
              />
    </>
  )
}
