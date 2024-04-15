import React, { useState, useEffect } from "react";
import { transaction103 } from "./utils/transaction103";
import { useAppContext } from "../Data.Provider";

export const Deploy = ({
  handleContractId,
  selectedUserId,
  selectedUserAddress,
  selectedUserPassword,
  sendTransaction,
  contractId,
  reloadData,
}) => {
  const [imageHash, setImageHash] = useState("");
  const [image, setImage] = useState("");
  const { setContractIdContext } = useAppContext();
  // Загрузка последнего contractId из локального хранилища
  useEffect(() => {
    const lastContractId = localStorage.getItem("lastContractId");
    if (lastContractId) {
      handleContractId(lastContractId);
    }
  }, []);

  const handleDeployButton = async () => {
    const transaction = transaction103(
      image,
      imageHash,
      selectedUserAddress,
      selectedUserPassword
    );
    try {
      const result = await sendTransaction(transaction);
      handleContractId(result.id);
      setContractIdContext(result.id);
      // Сохранение последнего contractId в локальное хранилище
      localStorage.setItem("lastContractId", result.id);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  const handleImage = (image) => {
    setImage(image);
  };

  const handleImageHash = (imageHash) => {
    setImageHash(imageHash);
  };

  const handleAuthorizeInContract = () => {
    alert("Вы авторизовались");
    reloadData();
  };

  return (
    <div>
      <h2>Деплой образа контракта</h2>
      <h5>Докер image</h5>
      <input
        onChange={(e) => handleImage(e.target.value)}
        type="text"
        placeholder="Docker Image"
      />
      <h5>Докер imageHash</h5>
      <input
        onChange={(e) => handleImageHash(e.target.value)}
        type="text"
        className="docker-image-input"
        placeholder="Docker Image"
      />
      <div></div>
      <button className="deploy-contract__btn" onClick={handleDeployButton}>
        Задеплоить контракт
      </button>
      <p>Айди контракта {contractId}</p>
      <h4>Авторизироваться в уже созданный контракт</h4>
      <input
        onChange={(e) => handleContractId(e.target.value)}
        type="text"
        placeholder="Айди контракта"
        value={contractId}
      />
      <button onClick={handleAuthorizeInContract}>
        Авторизироваться в этом контракте
      </button>
    </div>
  );
};
