import { StyleSheet, Text, View, Button } from 'react-native';

export default function Liste(param) {

    if (param.rezepte.length > 0) {

        return (<View>
            {param.rezepte.map((rec) => { return (<Text>{rec}</Text>) })}
        </View>)


    } else { console.log(param.rezepte); return (<View><Text>Noch keine Rezepte ausgewählt!</Text></View>) }

}