import React, { useState, useRef } from "react";
import { transaction104 } from "./utils/transaction104";
const RegisterUserForm = ({
  contractId,
  selectedUserAddress,
  selectedUserPassword,
  sendTransaction,
  reloadData,
}) => {
  const fioRef = useRef();
  const roleRef = useRef();
  const contactDataRef = useRef();
  const regionsRef = useRef();
  const companyNameRef = useRef();
  const companyDescrRef = useRef();

  const handleRegisterUser = () => {
    const params = [
      {
        key: "companyName",
        value: companyNameRef.current.value,
      },
      {
        key: "companyDescr",
        value: companyDescrRef.current.value,
      },
      {
        key: "role",
        value: roleRef.current.value,
      },
      {
        key: "regions",
        value: regionsRef.current.value,
      },
      {
        key: "fio",
        value: fioRef.current.value,
      },
      {
        key: "contactData",
        value: contactDataRef.current.value,
      },
    ];
    sendTransaction(
      transaction104(
        contractId,
        selectedUserAddress,
        selectedUserPassword,
        "registerApplication",
        params
      )
    );
    reloadData();
  };

  return (
    <div>
      <h3>Регистрация пользователей</h3>
      <h5>ФИО</h5>

      <input type="text" placeholder="" ref={fioRef} />
      <input type="text" placeholder="" ref={roleRef} />
      <input type="text" placeholder="" ref={contactDataRef} />
      <input type="text" placeholder="" ref={regionsRef} />
      <input type="text" placeholder="" ref={companyNameRef} />
      <input type="text" placeholder="" ref={companyDescrRef} />
      <div></div>
      <button className="registerUser__btn" onClick={handleRegisterUser}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export default RegisterUserForm;
