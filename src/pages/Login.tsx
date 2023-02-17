import {
  IonButton,
  IonButtons,
  IonCol,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import "./Login.css";


const Tab1: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { appState, appStateDispatch }: any = useAppContext();

  const handleLogin = () => {
    const loginData = {
      email: email,
      password: password,
    };
    appStateDispatch({
      type: "AUTHENTICATE",
    });
    console.log(loginData);
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="12" size-md="6" size-lg="4.5">
              <div className="container text-center">
                <IonRow>
                  <IonCol>
                    <h1>Login</h1>
                    <b>
                      {appState.isAuthenticated
                        ? "Authenticated"
                        : "No user found"}
                    </b>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem fill="outline" className="mt-5">
                      <IonLabel position="floating"> Email</IonLabel>
                      <IonInput
                        type="email"
                        value={email}
                        onIonChange={(e) => setEmail(e.detail.value!)}
                      ></IonInput>
                    </IonItem>
                    <IonItem fill="outline" className="mt-5">
                      <IonLabel position="floating">Password</IonLabel>
                      <IonInput
                        type="password"
                        value={password}
                        onIonChange={(e) => setPassword(e.detail.value!)}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton
                      id="click-trigger"
                      expand="block"
                      onClick={handleLogin}
                      className="mt-5"
                    >
                      Login
                    </IonButton>
                    <div className="d-flex-between mt-10">
                      <Link to="/app/recover">Forget password ?</Link>
                      <a href="#">Sign up</a>
                    </div>
                  </IonCol>
                </IonRow>
              </div>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonPage>
    </>
  );
};

export default Tab1;
