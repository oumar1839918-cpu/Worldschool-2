import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyASgFrSj6dgDVxKNfZEHVpcMkFPJvtzGfI",
  authDomain: "worldschool-3fd49.firebaseapp.com",
  projectId: "worldschool-3fd49",
  storageBucket: "worldschool-3fd49.firebasestorage.app",
  messagingSenderId: "422744114561",
  appId: "1:422744114561:web:ef19e5664f2558ddaed480"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
