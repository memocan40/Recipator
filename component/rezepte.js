import firebaseConfig from '../components/firebase';
import { getDatabase, ref, child, get } from "firebase/database";
import { async } from '@firebase/util';

const dbRef = ref(getDatabase());
var zutaten = [{ key: 'test', value: 'teest' }];
let rezepte = []
const getData = async (array) => {
    for (let i = 1; i < 4; i++) {
        get(child(dbRef, `Zutaten/${i}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot)
                array.push({key:snapshot.val(),value:snapshot.val()})

            } else {
                console.log("No data available");
            }
        })
    }
}

getData(rezepte)



export default rezepte;