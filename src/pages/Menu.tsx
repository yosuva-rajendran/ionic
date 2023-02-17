import {
  IonContent,
  IonHeader,
  IonItem,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import ForgetPassword from "./ForgetPassword";
import Login from "./Login";

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonSplitPane contentId="menu">
        <IonMenu contentId="menu" swipeGesture={false}>
          <IonHeader>
            <IonToolbar color="tertiary">
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem routerLink="/app/recover" routerDirection="forward">
              Forget Password
            </IonItem>
            <IonItem>Login</IonItem>
            <IonItem>Register</IonItem>
            <IonItem>Settings</IonItem>
            <IonItem>Messages</IonItem>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="menu">
          <Route exact path="/app/login" component={Login} />
          <Route exact path="/app/recover" component={ForgetPassword} />
          <Route exact path="/app">
            <Redirect to="/app/login" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
