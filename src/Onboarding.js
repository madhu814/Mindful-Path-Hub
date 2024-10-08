import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Onboarding = ({navigation}) => {
  return (


    <View style={styles.container}>
      <Animatable.Image
        animation="zoomIn" // Adding a zoom-in animation
        duration={2000}   // Duration of the animation
        source={require('../assets/images//Mindful_Bckgrd_Img.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
      
      <Animatable.View animation="fadeIn" delay={500} style={styles.textContainer}>
        <Text style={styles.mainText}>
        Welcomes 
        </Text>
       
      </Animatable.View>
      <Animatable.Image
        animation="zoomIn" // Adding a zoom-in animation
        duration={2000}   // Duration of the animation
        source={require('../assets/images//therapy.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
       <Text style={styles.secondaryText}> <Text>You to your safe space.Let's navigate your path to mental clarity together.</Text></Text>
        <Text style={styles.subtitle}>
        
        </Text>
      <View style={styles.buttonContainer}>
        <Animatable.View animation="bounceInUp" delay={1000}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Let's Start healing today</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft:20,
    paddingRight:20,
  },
  image: {
    position: 'relative',
    justifyContent: 'flex-start',
    paddingBottom:3,
    height: 250,
    width: 400,
    opacity: 0.8,
    marginTop: 0,  // Ensure no top margin on the image
    marginBottom: 0,  // Remove bottom margin to allow text to be closer
  },
  textContainer: {
    alignItems:"center",
    marginTop: 0,  // Remove any top margin
    paddingTop: 0,  
  },
  mainText: {
    fontSize: 40,
    color: '#6200EE',
    fontWeight: 'bold',
    fontFamily:'Roboto',
    marginTop: 0, 
    
  },
  secondaryText: {
    fontSize: 20,
    color: '#3700B3',
    textAlign:'center',
    marginTop: 23, 
  },
  subtitle: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 1,  // This makes the container grow and fill available space
    width: '100%',  // Ensure the container spans the width of the screen
    justifyContent: 'flex-end',  // Aligns the button to the bottom
    paddingBottom: 30,  // Adds some padding at the bottom
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginBottom: 5,
    justifyContent:'flex-end',
    boxshadow : 3 , 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Onboarding;
