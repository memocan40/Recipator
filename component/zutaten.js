import firebaseConfig from '../components/firebase';
import { getDatabase, ref, child, get } from "firebase/database";
import { async } from '@firebase/util';

const dbRef = ref(getDatabase());
let zutaten = []
const getData = async (array) => {
    for (let i = 1; i < 4; i++) {
        get(child(dbRef, `Zutaten/${i}`)).then((snapshot) => {
            if (snapshot.exists()) {
                array.push({key:snapshot.val(),value:snapshot.val()})

            } else {
                console.log("No data available");
            }
        })
    }
}

getData(zutaten)



export default zutaten;