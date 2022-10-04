import firebaseConfig from '../components/firebase';
import { getDatabase, ref, child, get } from "firebase/database";
import { async } from '@firebase/util';
import zutaten from "./zutaten"



console.log(111, zutaten)

const dbRef = ref(getDatabase());

get(child(dbRef, `Rezepte`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(222, snapshot)
        snapshot.forEach((rec) => { rec.forEach(recs => console.log(111111, recs)) })


    } else {
        console.log("No data available");
    }
})