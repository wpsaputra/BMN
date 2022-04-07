import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <View style={{ width: "100%", height: 170 }}>
        <View style={styles.oval} />
          <View style={{ width: "100%", height: 100, backgroundColor: "#ffab4b", display: "flex", justifyContent: "flex-end", paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
              <View>
                <Text style={{ color: "white", fontSize: 16 }}>Hi</Text>
                <Text style={{ color: "white", fontSize: 16 }}>Selamat Datang!</Text>
              </View>
              <Ionicons name="md-notifications" size={20} color={"white"} />

            </View>
          </View>
        
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#f9f9f9"
  },
  oval: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    backgroundColor: "#ffab4b",
    borderRadius: Dimensions.get('window').width / 2, 
    position: "absolute", 
    left: 0, 
    bottom: 0, 
    transform: [{ scaleX: 2 }]
  },
})