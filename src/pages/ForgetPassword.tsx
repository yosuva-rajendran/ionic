import {
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonPage,
} from "@ionic/react";
import "./Login.css";
const ForgetPassword = () => {
  return (
    <IonPage>
      <IonGrid fixed={true}>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size="12" size-md="6" size-lg="4">
            <div className="container">
              <IonRow>
                <IonCol>
                  <h1>Forget Password</h1>
                  <p>
                    Please enter your email address to recover your account.
                  </p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem fill="outline" className="mt-5">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="email"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton expand="block" className="mt-5">
                    Reset password
                  </IonButton>
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

export default ForgetPassword;
