import React, { useState } from "react";

export const Authorization = ({
  handleSelectedUserId,
  handleSelectedUserAddress,
  handleSelectedUserPassword,
  selectedUserAddress,
}) => {
  const [passwordInput, setPasswordInput] = useState("");
  const addresses = [
    "3NiTMccwYA16PU6zpiqZuvNeP2JWNtfVAck",
    "3NkKDkwFDKmAu5U2arRM55Y3VVWA4fJeAoy",
    "3NjN4KroAYf5mkV2NAQZpS3TqH8AQ5GDmsX",
  ];
  const ids = [6862, 6872, 6882];

  const handleAddressSelect = (address) => {
    if (address != "none") {
      console.log(address);
      addresses.forEach((addr, key) => {
        if (addr == address) {
          console.log(ids[key]);
          handleSelectedUserId(ids[key]);
        }
      });
      alert("Введите пароль");
      handleSelectedUserAddress(address);
    } else {
      handleSelectedUserAddress("");
    }
  };

  const handleButtonAuthorize = () => {
    console.log(passwordInput);
    alert("Вы авторизовались");
    handleSelectedUserPassword(passwordInput);
  };

  return (
    <div>
      <h1>Конфидент</h1>
      <h3>Авторизация</h3>
      <span>Вы авторизованы под адресом {selectedUserAddress}</span>
      <h4>Выберите адрес</h4>
      <select
        onChange={(e) => handleAddressSelect(e.target.value)}
        name="Выберите аккаунт"
        id="address-select"
      >
        <option value="none">Выбрать</option>
        {addresses.map((address, key) => (
          <option key={key} className="address-option" value={address}>
            {address}
          </option>
        ))}
      </select>
      <h4>Введите пароль</h4>
      <input
        type="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
        placeholder="Пароль"
      />
      <button onClick={handleButtonAuthorize}>Авторизироваться</button>
    </div>
  );
};

export default Authorization;
