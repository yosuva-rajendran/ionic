import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";

const Home: React.FC = () => {
  const navigation = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton
          onClick={() => {
            navigation.push("/app", "root", "replace");
          }}
          expand="full"
        >
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
