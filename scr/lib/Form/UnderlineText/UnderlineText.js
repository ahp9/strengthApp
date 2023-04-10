import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default function UnderlineText(props) {
    return (
      <View style={styles.under}>
        <Text>{props.sentance}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate(props.navigate)}>
          <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>{props.word}</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  under: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30,
  },
})