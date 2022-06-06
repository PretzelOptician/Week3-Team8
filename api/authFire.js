const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
 
const serviceAccount = require("../permissions.json");

const app = initializeApp(serviceAccount);
export const auth=getAuth(app); 