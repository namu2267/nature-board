import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDxTDFBNdRD1JtwLCvAjOURWXutIbLjQpg",
  authDomain: "nature-board.firebaseapp.com",
  projectId: "nature-board",
  storageBucket: "nature-board.appspot.com",
  messagingSenderId: "750070420507",
  appId: "1:750070420507:web:58d85d2f6a509e3e17d4be",
  measurementId: "G-XDXFQQRYXD",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
