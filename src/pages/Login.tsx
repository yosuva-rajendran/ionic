import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Tab1: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginData = {
      email: email,
      password: password,
    };

    console.log(loginData);
  };
  
  return (
    <IonPage>
      <IonGrid fixed={true}>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size="12" size-md="6" size-lg="4">
            <div className="container text-center">
              <IonRow>
                <IonCol>
                  <h1>Login</h1>
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
                    expand="block"
                    onClick={handleLogin}
                    className="mt-5"
                  >
                    Login
                  </IonButton>
                  <div className="d-flex-between mt-10">
                    <Link to="/recover">Forget password ?</Link>
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
  );
};

export default Tab1;
