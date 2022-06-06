const express = require("express")
const router = express.Router()
const auth = require("./authFire")

const {getDocs, getDoc, collection, setDoc} = require("firebase/firestore");
const { createUserWithEmailAndPassword } = require("firebase/auth");


router.post('/create', async (req, res, next) => {
  console.log(req.body); 
    try{
        const hi = createUserWithEmailAndPassword(auth, req.body.email, req.body.password).then((f) => {
            console.log("account created"); 
            const docRef = doc(collection(db, "users")); 
            setDoc(docRef, {
                
            })
        })
    }catch(error){console.log(error.message)}
});

module.exports = router; 