describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("correctly sets selectedUserId state", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleSelectedUserId(123);
    expect(wrapper.state("selectedUserId")).toEqual(123);
  });

  it("correctly sets selectedUserAddress state", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleSelectedUserAddress("example@example.com");
    expect(wrapper.state("selectedUserAddress")).toEqual("example@example.com");
  });

  it("correctly sets contractId state", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleContractId("123abc");
    expect(wrapper.state("contractId")).toEqual("123abc");
  });

  it("reloads data after 10 seconds interval", () => {
    jest.useFakeTimers();
    const wrapper = shallow(<App />);
    const reloadDataSpy = jest.spyOn(wrapper.instance(), "reloadData");
    jest.advanceTimersByTime(10000);
    expect(reloadDataSpy).toHaveBeenCalledTimes(1);
  });
});
