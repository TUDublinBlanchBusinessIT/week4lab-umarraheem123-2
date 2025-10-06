import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 10;
  var totalGradeScores = 0;
  
  function clickMe(){
    alert("this is the click me button"); //alert for web
    Alert.alert("this is the click me button"); //alert for phone
    //get the studnet's gradePointsfor SSWD, multiply it by the credits
    totalGradeScores = totalGradeScores + (gradePoints[sswd] * credits);
    totalGradeScores = totalGradeScores + (gradePoints[ob] * credits);
    gpa = TotalGradeScores / totalPossibleCredits;  

    
    }


return (
    <SafeAreaView>
      <View><Text style={{flexDirection: "row", fontWeight: "bold", fontSize: 24, textAlign:"center", marginTop: "%10"}}>GPA Calculator</Text></View>
      <View>
        <Text>Maths</Text>
        <TextInput  placeholder="Grade" onChangeText={setSswd}/>
      </View>
      <View >
        <Text>Organisational Behaviour</Text>
        <TextInput placeholder="Grade" onChangeText={setOb}/>
      </View>
      <View >
        <Button title="submit" onPress={clickMe}/>
      </View>
    </SafeAreaView>
  );
}