import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const items = [
  { name: "Login", url: "/app/login" },
  { name: "Sign Up", url: "/app/signup" },
  { name: "Forget password", url: "/app/recover" },
  { name: "Users", url: "/app/users" },
];

const Home: React.FC = () => {
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
        <IonList inset={true}>
          {items.map((item, index) => {
            return (
              <IonItem key={index} routerLink={item.url}>
                <IonLabel>{item.name}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
