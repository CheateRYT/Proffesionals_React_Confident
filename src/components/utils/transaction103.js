export const transaction103 = (
  image,
  imageHash,
  selectedUserAddress,
  selectedUserPassword
) => {
  let transaction = {
    image: image,
    fee: 0,
    imageHash: imageHash,
    type: 103,
    params: [
      {
        type: "string",
        value: "initRent",
        key: "action",
      },
    ],
    version: 2,
    sender: selectedUserAddress,
    password: selectedUserPassword,
    contractName: "confident",
  };
  return transaction;
};
