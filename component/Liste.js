import { StyleSheet, Text, View, Button } from 'react-native';

export default function Liste(param) {

    if (param.zutaten.length > 0) {

        return (<View>
            {param.zutaten.map((rec) => { return (<Text>{rec}</Text>) })}
        </View>)


    } else { console.log(param.zutaten); return (<View><Text>Noch keine Rezepte ausgewählt!</Text></View>) }

}