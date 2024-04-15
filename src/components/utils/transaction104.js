// const params = [
//   { key: "productName", value: "Apple" },
//   { key: "quantity", value: "10" },
//   { key: "price", value: "2.5" },
// ];

export const transaction104 = (
  contractId,
  selectedUserAddress,
  selectedUserPassword,
  functionName,
  params
) => {
  let transaction = {
    contractId: contractId,
    fee: 0,
    type: 104,
    params: [
      {
        type: "string",
        value: functionName,
        key: "action",
      },
      ...params.map((param) => ({
        type: "string",
        key: param.key,
        value: param.value,
      })),
    ],
    version: 2,
    sender: selectedUserAddress,
    password: selectedUserPassword,
    contractVersion: 1,
  };
  return transaction;
};
