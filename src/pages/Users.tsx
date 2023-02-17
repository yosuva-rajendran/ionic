import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useGetUsers } from "../hooks/useGetUsers";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const { data } = useGetUsers();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset={true}>
          {data?.data.map((item: any, index: any) => {
            return (
              <IonItem key={index}>
                <IonLabel>{item.name}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
