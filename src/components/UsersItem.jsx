import React, { useEffect } from "react";

export const UsersItem = ({
  addressApplication,
  contactDataApplication,
  fioApplication,
  companyNameApplication,
  companyDescrApplication,
  roleApplication,
  confirmApplication,
  regionsApplication,
  key,
}) => {
  return (
    <div key={key} className="application">
      <h4>Пользователь</h4>
      <p>Адрес - {addressApplication}</p>
      <p>Контактные данные - {contactDataApplication}</p>
      <p>ФИО - {fioApplication}</p>
      <p>Имя компании - {companyNameApplication}</p>
      <p>Описание компании - {companyDescrApplication}</p>
      <p>Роль -{roleApplication}</p>
      <p>Подтверждение - {confirmApplication}</p>
      <p>Регионы - {regionsApplication.join(", ")}</p>
    </div>
  );
};
