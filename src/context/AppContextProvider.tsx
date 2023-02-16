import { createContext, useContext, useReducer } from "react";

interface IChildrenProps {
  children: JSX.Element;
}

interface IStateType {
  isAuthenticated: boolean;
}

export enum ActionType {
  AUTHENTICATE = "AUTHENTICATE",
}

export interface IAction {
  type: ActionType;
  payload: any;
}

export const AppContext = createContext({});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`Context missing provider`);
  }
  return context;
};

const AppContextProvider = ({ children }: IChildrenProps) => {
  const initialState: IStateType = {
    isAuthenticated: false,
  };

  const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
      case "AUTHENTICATE":
        return { isAuthenticated: !state.isAuthenticated };
    }
  };

  const [appState, appStateDispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ appState, appStateDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
