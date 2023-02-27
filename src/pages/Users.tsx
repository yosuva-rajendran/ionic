import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonCard,
} from "@ionic/react";
import { useState } from "react";
import { useGetUsers } from "../hooks/useGetUsers";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const { data, isLoading } = useGetUsers();
  const [input, setInput] = useState<string>("");
  console.log(input);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Users</IonTitle>
            </IonToolbar>
            <IonToolbar></IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonCard className="searchResult">
              <IonSearchbar
                style={{ backgroundColor: "white" }}
                onIonChange={(e: any) => {
                  setInput(e.detail.value);
                }}
              ></IonSearchbar>
              {input && (
                <IonList inset={true}>
                  {data?.data.map((item: any, index: any) => {
                    if (
                      item?.name?.toLowerCase().includes(input?.toLowerCase())
                    ) {
                      return (
                        <IonItem key={index}>
                          <IonLabel>{item.name}</IonLabel>
                        </IonItem>
                      );
                    }
                  })}
                </IonList>
              )}
            </IonCard>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Tab2;
