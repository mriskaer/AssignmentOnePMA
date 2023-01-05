import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

function get_pic(url) {
  return {uri:url}
}

export default function App() {
  const [text, setText] = useState("");
  const clickForSound = () => {
    alert(`Hi ${text}. Ogres are like onions.`)
  }

  return (
    <View style={styles.bckgrnd}>
      <View style={{flex: 1, backgroundColor: 'orchid'}}>
         <Text style={styles.textstyle}>
           Shrek App
         </Text>
      </View> 
      <View style={{flex: 8, backgroundColor: 'plum', alignItems: 'center'}}>

        <View style={{flex: 2}}>
          <TextInput 
            style={styles.inputField}
            onChangeText={newText=>setText(newText)}
            placeholder=" Write you name here "
          />

        </View>
        <View style={{flex: 10}}>
          <Image
            style={styles.imagestyle}
            source={get_pic("https://www.lifepng.com/wp-content/uploads/2020/11/Shrek-png-hd.png")}
          />
        </View>
        <View style={{flex: 1.5}}>
          <View style={styles.buttonstyle}>
           { <Button
              onPress={clickForSound}
              title="Click me!"
              color="white"
            />}
          </View>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: 'orchid'}}>
        <Text style={styles.bottomtext}>
          Brought to you by Marie Riskær
        </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bckgrnd: {
    flex: 1,
    justifyContent: 'center',
    felxDirection: "column"
  },

  imagestyle: {
    width: 450, 
    height: 450
  }, 

  buttonstyle: {
    borderRadius: 10,
    backgroundColor: 'orchid',
    fontSize: 22
  },

  textstyle: {
    textAlign: 'center',
    zIndex: 2,
    paddingTop: 40,
    fontSize: 32
  },

  inputField: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 3,
    fontSize: 20
  },

  bottomtext: {
    fontSize: 12, 
    textAlign: 'center', 
    marginTop: 20
  }
});

//exp://exp.host/@mriskaer/shrek?release-channel=default
