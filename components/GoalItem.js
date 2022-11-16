import { StyleSheet, View, Text, Pressable } from 'react-native';
import { NativeBaseProvider } from 'native-base';

function GoalItem(props) {
    return (
        <NativeBaseProvider>
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: 'red'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
        </View>
        </NativeBaseProvider>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 3,
        borderRadius: 8,
        backgroundColor: '#5e00c4'
      },
      pressedItem: {
        opacity: 0.5
      },
      goalItemText: {
        padding: 8,
        color: '#fff',
        fontSize: 16
      }
});