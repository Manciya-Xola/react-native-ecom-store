import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View, Pressable } from 'react-native'
import style from './style';
const API_URL='http://ergast.com/api/f1/circuits.json';


function CircuitScreen() {
  const [circuits, setCircuits] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [offset, setOffset] = useState(0);
  
  useEffect(()=>{
    fetchData();
  },[offset])

  async function fetchData() {
    setIsLoading(true)
    try {
      const res = await fetch(API_URL+"?offset="+offset);
      const json = await res.json();
      setCircuits(json.MRData.CircuitTable.Circuits);
      setIsLoading(false);
      setIsError(false)
    } catch (error) {
      console.log(error)
      setIsError(true)
    }
    finally{
      setIsLoading(false);
    }
    
  }
  const renderItem = ({ item }) => {
    return (
      <View style={style.itemContainer}>
        <View style={style.dateOfBirth}>
          <Text style={style.content}>{item.circuitName}</Text>
        </View>
        <View style={{ width: 96, }}>
          <Text style={style.content}>{item.Location.locality}</Text>
        </View>
        <View style={{ width: 80, }}>
          <Text style={style.content}>{item.Location.country}</Text>
        </View>
      </View>
    );
  };
  function previousButtonPressed() {
    if (offset >0) {
      setOffset((prevState) =>{return prevState-30})
    }
  }
  function nextButtonPressed() {
    if (offset<860) {
      setOffset((prevState) =>{return prevState+30})
    }
  }
  return (
    <View>
      <Text>
        Circuit
      </Text>
      <View style={style.buttonsContainer}>
        <Pressable style={style.button} onPress={previousButtonPressed} >
          <Text style={style.text}>Previous</Text>
        </Pressable>
        <Pressable style={style.button} onPress={nextButtonPressed}>
          <Text style={style.text}>Next</Text>
        </Pressable>
      </View>
      {isLoading && <ActivityIndicator size='large' color="#000"/>}
      {isError && <Text>An error occurred</Text>}
        {!isError && !isLoading && <FlatList
        data={circuits}
        renderItem={renderItem}
        keyExtractor = {(item) => item.circuitId}
        />
        }
    </View>
  )
}

export default CircuitScreen
