import { StatusBar } from 'expo-status-bar';
import SelectList from 'react-native-dropdown-select-list'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from "react";
import firebaseConfig from './components/firebase';
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import zutaten from "./component/zutaten"
import rezepte from "./component/rezepte"
import Liste from './component/Liste'

export default function App() {
  const [selected, setSelected] = useState("");
  let [listezutaten, setlistezutaten] = useState([])


  const onPressLearnMore = () => {
    console.log(999, zutaten)

  }


  return (
    <View style={styles.container}>
      <SelectList setSelected={setSelected} data={zutaten} onSelect={() => setlistezutaten([...listezutaten, selected])} />
      <Liste zutaten={listezutaten} />
      <Button
        onPress={onPressLearnMore}
        title="Click Me"
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
