import React, { useEffect } from "react";
import { UsersItem } from "./UsersItem";
import { useAppContext } from "../Data.Provider";

export const UsersList = () => {
  const {
    dataContext,
    contractIdContext,
    setDataContext,
    setContractIdContext,
  } = useAppContext();

  useEffect(() => {
    console.log(dataContext);
    console.log(contractIdContext);
    console.log("2 выше это usersList");
  }, [dataContext, contractIdContext]);

  return (
    <div>
      <h1>Пользователи</h1>
      {dataContext[contractIdContext] &&
        dataContext[contractIdContext].map((item, key) => {
          let dataValue = item.value;
          let dataObject = JSON.parse(dataValue);
          if (dataObject.addressApplication) {
            return (
              <UsersItem
                addressApplication={dataObject.addressApplication}
                contactDataApplication={dataObject.contactDataApplication}
                fioApplication={dataObject.fioApplication}
                companyNameApplication={dataObject.companyNameApplication}
                companyDescrApplication={dataObject.companyDescrApplication}
                roleApplication={dataObject.roleApplication}
                confirmApplication={dataObject.confirmApplication}
                regionsApplication={dataObject.regionsApplication}
                key={key}
              />
            );
          }
          return null;
        })}
    </div>
  );
};
