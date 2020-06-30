import React from "react";

export const Context = React.createContext();

const RootStore = (props) => {
  return <Context.Provider>{props.children}</Context.Provider>;
};

export default RootStore;
