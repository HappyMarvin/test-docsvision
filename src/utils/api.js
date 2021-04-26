import { firebaseConfig } from "./contains";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

class Api {
  constructor() {
    this.config = firebaseConfig;
  }

  getPlaces = () => {
    return firebase.firestore().collection("places").get().then(response => {
      return response.docs.map(x => ({
        id: x.id,
        data: x.data(),
        parts: x.data().parts && x.data().parts.map(part => part.id)
      }));
    });
  }

  getInventory = () => {
    return firebase.firestore().collection("inventory").get().then(response => {
      return response.docs.map(x => ({
        id: x.id,
        data: x.data(),
        placeId: x.data().place.id
      }));
    })
  }

  addThing = (placeId, name, count = 1) => {
    let filestore = firebase.firestore();
    return filestore.collection("inventory").doc().set({
      name,
      count,
      place: filestore.collection("places").doc(placeId)
    })
  }

  delThing = (id) => {
    return firebase.firestore().collection("inventory").doc(id).delete()
  }

  updateThing = (id, name, count) => {
    return firebase.firestore().collection("inventory").doc(id).update({
      count,
      name
    })
  }
}

const api = new Api();

export default api;