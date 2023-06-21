import { View ,ScrollView} from "react-native";
import React, { useState } from 'react';

import MultiPicker from './MultiPicker';
export default App = ()=>{

const [selectedHorses, setSelectedHorses] = useState([]);

const subjectData = [{ id: "1", name: "pop culture" },
{ id: "2", name: "history" },
{ id: "3", name: "LGBTQ" },
{ id: "4", name: "life" },
{ id: "5", name: "nature" },
{ id: "6", name: "other" },]

const styleData = [
  { id: "1", name: "abstract" },
  { id: "2", name: "impressionism" },
  { id: "3", name: "nouveau" },
  { id: "4", name: "realism" },
  { id: "5", name: "fine art" },
  { id: "6", name: "other" },
];

  return <ScrollView  style={{marginTop:100}}>
    <MultiPicker
        items={subjectData} 
        placeholder='Select Horses'
        //icon={require('./new.jpg')}
        selectedItems={selectedHorses} // 
        onChangeItems={setSelectedHorses}
   />
   <MultiPicker
        items={styleData} // arra => [{id: '1', name: 'Apple'}, ...]
        placeholder='Select Horses'
        //icon={require('../../../Assets/Images/horse-db.png')}
        selectedItems={selectedHorses} // 
        onChangeItems={setSelectedHorses}
   />
   
  </ScrollView>
}