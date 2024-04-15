import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterUserForm from "./components/RegisterUserForm";
import { ConfirmUser } from "./components/ConfirmUser";
import { CreateProduct } from "./components/CreateProduct";
import { ConfirmProduct } from "./components/ConfirmProduct";
import { CreateOrder } from "./components/CreateOrder";
import { ConfirmOrder } from "./components/ConfirmOrder";
import { Authorization } from "./components/Authorization";
import { useContext, useEffect, useState, useCallback } from "react";
import { Deploy } from "./components/Deploy";
import { UsersList } from "./components/UsersList";
import { ProductsList } from "./components/ProductsList";
import { OrdersList } from "./components/OrdersList";
import { DataContext } from "./Data.Provider";
import { useAppContext } from "./Data.Provider";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [selectedUserAddress, setSelectedUserAddress] = useState("");
  const [selectedUserPassword, setSelectedUserPassword] = useState("");
  const [contractId, setContractId] = useState("");
  const [reloads, setReloads] = useState(0);
  const [data, setData] = useState("");

  const handleSelectedUserId = useCallback((userId) => {
    setSelectedUserId(userId);
  }, []);

  const handleSelectedUserAddress = useCallback((userAddress) => {
    setSelectedUserAddress(userAddress);
  }, []);

  const handleSelectedUserPassword = useCallback((userPassword) => {
    setSelectedUserPassword(userPassword);
  }, []);

  const handleContractId = useCallback((contractId) => {
    setContractId(contractId);
  }, []);

  const reloadData = useCallback(() => {
    let newReload = reloads + 1;
    setReloads(newReload);
  }, [reloads]);

  useEffect(() => {
    if (selectedUserAddress && selectedUserPassword && contractId) {
      setInterval(() => {
        reloadData();
      }, 10000);
      let requestedData = {
        contracts: [contractId],
      };
      fetch(`http://localhost:${selectedUserId}/contracts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestedData),
      }).then((response) => {
        response
          .json()
          .then((datas) => {
            setData(datas);
            console.log(datas);
            console.log(contractId);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }, [
    contractId,
    reloads,
    selectedUserId,
    selectedUserAddress,
    selectedUserPassword,
  ]);

  const sendTransaction = useCallback(
    async (transaction) => {
      try {
        const response = await fetch(
          `http://localhost:${selectedUserId}/transactions/signAndBroadcast`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(transaction),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to send transaction");
        }
        const data = await response.json();
        console.log("Transaction successfully sent:", data);
        return data;
      } catch (error) {
        console.error("Error sending transaction:", error);
        throw error;
      }
    },
    [selectedUserId]
  );
  return (
    <div className="App">
      <Authorization
        handleSelectedUserId={handleSelectedUserId}
        handleSelectedUserAddress={handleSelectedUserAddress}
        handleSelectedUserPassword={handleSelectedUserPassword}
        selectedUserAddress={selectedUserAddress}
      />
      <Deploy
        handleContractId={handleContractId}
        selectedUserId={selectedUserId}
        selectedUserAddress={selectedUserAddress}
        selectedUserPassword={selectedUserPassword}
        sendTransaction={sendTransaction}
        contractId={contractId}
        reloadData={reloadData}
      />
      <RegisterUserForm
        contractId={contractId}
        selectedUserAddress={selectedUserAddress}
        selectedUserPassword={selectedUserPassword}
        sendTransaction={sendTransaction}
        reloadData={reloadData}
      />
      <ConfirmUser
        contractId={contractId}
        selectedUserAddress={selectedUserAddress}
        selectedUserPassword={selectedUserPassword}
        sendTransaction={sendTransaction}
        reloadData={reloadData}
      />
      <CreateProduct
        contractId={contractId}
        selectedUserAddress={selectedUserAddress}
        selectedUserPassword={selectedUserPassword}
        sendTransaction={sendTransaction}
        reloadData={reloadData}
      />
      <ConfirmProduct
        contractId={contractId}
        selectedUserAddress={selectedUserAddress}
        selectedUserPassword={selectedUserPassword}
        sendTransaction={sendTransaction}
        reloadData={reloadData}
      />
      <CreateOrder
        contractId={contractId}
        selectedUserAddress={selectedUserAddress}
        selectedUserPassword={selectedUserPassword}
        sendTransaction={sendTransaction}
        reloadData={reloadData}
      />
      <ConfirmOrder
        contractId={contractId}
        selectedUserAddress={selectedUserAddress}
        selectedUserPassword={selectedUserPassword}
        sendTransaction={sendTransaction}
        reloadData={reloadData}
      />
      <Link to="/users">Пользователи</Link>
    </div>
  );
}

export default App;
