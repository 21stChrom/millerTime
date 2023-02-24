import React from "react";
import "./style.css";
 import React, { useState } from 'react'; 
 import { StyleSheet, View, TextInput, CheckBox, Button, Text } from 'react-native';

 const myChecklist = () => {
   const [inputText, setInputText] = useState('');
     const [checked, setChecked] = useState(false);
       const [alarm, setAlarm] = useState({});

         const handleOnChangeText = (text) => {
             setInputText(text);
               }

                 const handleOnCheckboxChange = () => {
                     setChecked(!checked);
                       }

                         const handleSetAlarm = () => {
                             setAlarm({
                                   name: inputText,
                                         time: new Date(),
                                             });
                                               }

                                                 const handleAlarmNotification = () => {
                                                     if (Object.keys(alarm).length > 0) {
                                                           alert(`Hey, it's time to ${alarm.name}!`);
                                                               }
                                                                 }

                                                                   return (
                                                                       <View style={styles.container}>
                                                                             <TextInput 
                                                                                     style={styles.inputText}
                                                                                             value={inputText} 
                                                                                                     onChangeText={handleOnChangeText} 
                                                                                                           />
                                                                                                                 <CheckBox 
                                                                                                                         value={checked} 
                                                                                                                                 onValueChange={handleOnCheckboxChange} 
                                                                                                                                       />
                                                                                                                                             <Button 
                                                                                                                                                     title="Set Alarm" 
                                                                                                                                                             onPress={handleSetAlarm} />
                                                                                                                                                                   <Text>{alarm.name}</Text>
                                                                                                                                                                         <Button 
                                                                                                                                                                                 title="Alarm Notification" 
                                                                                                                                                                                         onPress={handleAlarmNotification} 
                                                                                                                                                                                               />
                                                                                                                                                                                                   </View>
                                                                                                                                                                                                     );
                                                                                                                                                                                                     };

                                                                                                                                                                                                     const styles = StyleSheet.create({
                                                                                                                                                                                                       container: {
                                                                                                                                                                                                           flex: 1, 
                                                                                                                                                                                                               justifyContent: 'center', 
                                                                                                                                                                                                                   alignItems: 'center'
                                                                                                                                                                                                                     },
                                                                                                                                                                                                                       inputText: {
                                                                                                                                                                                                                           width: 200,
                                                                                                                                                                                                                               height: 40,
                                                                                                                                                                                                                                   borderWidth: 1,
                                                                                                                                                                                                                                       padding: 10,
                                                                                                                                                                                                                                           margin: 10
                                                                                                                                                                                                                                             }
                                                                                                                                                                                                                                             });

                                                                                                                                                                                                                                             export default myChecklist;
