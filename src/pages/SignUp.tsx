import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { useFormik } from "formik";
import { FC } from "react";
import { useState } from "react";

const SignUp: FC = () => {
  const [value, setValue] = useState<any>();

  const formatNumber = (value: any) => {
    const reg = "^[0-9-]+$";
    value.match(reg) ? setValue(value) : setValue("");
    if (value.length === 3) {
      setValue(`${value}-`);
    } else if (value.length === 7) {
      setValue(`${value}-`);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid fixed={true}>
        <form onSubmit={formik.handleSubmit}>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="12" size-md="6" size-lg="4.5">
              <div className="container text-center">
                <IonRow>
                  <IonCol>
                    <h1>Sign Up</h1>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem fill="outline" className="mt-5">
                      <IonLabel position="floating">First Name</IonLabel>
                      <IonInput
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formik.values.firstName}
                        onIonChange={formik.handleChange}
                      ></IonInput>
                    </IonItem>
                    <IonItem fill="outline" className="mt-5">
                      <IonLabel position="floating">Last Name</IonLabel>
                      <IonInput
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formik.values.lastName}
                        onIonChange={formik.handleChange}
                      ></IonInput>
                    </IonItem>
                    <IonItem fill="outline" className="mt-5">
                      <IonLabel position="floating">Phone Number</IonLabel>
                      <IonInput
                        id="phoneNumber"
                        name="phoneNumber"
                        maxlength={12}
                        onIonChange={(e) => {
                          formatNumber(e.detail.value);
                        }}
                        value={value}
                      ></IonInput>
                    </IonItem>
                    <IonItem fill="outline" className="mt-5">
                      <IonLabel position="floating">Password</IonLabel>
                      <IonInput
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onIonChange={formik.handleChange}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton
                      id="click-trigger"
                      expand="block"
                      type="submit"
                      className="mt-5"
                    >
                      Sign Up
                    </IonButton>
                  </IonCol>
                </IonRow>
              </div>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </form>
      </IonGrid>
    </IonPage>
  );
};

export default SignUp;
