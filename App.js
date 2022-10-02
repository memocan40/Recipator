import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebaseConfig from './components/firebase';
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";

export default function App() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);


  const onPressLearnMore = () => { console.log(123) }

  const dbRef = ref(getDatabase());
  get(child(dbRef, `Recipe/name`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
