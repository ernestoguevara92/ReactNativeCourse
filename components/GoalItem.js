import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 3,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#5e00c4'
      },
      goalItemText: {
        color: '#fff',
        fontSize: 16
      }
});