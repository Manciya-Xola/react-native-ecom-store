import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Pressable, FlatList, Text, View } from 'react-native'
import style from './style';

const API_URL='http://ergast.com/api/f1/drivers.json';


function DriversScreen({navigation}) {
  const [drivers, setDrivers] = useState({});
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
      setDrivers(json.MRData.DriverTable.Drivers);
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

  function navigateDriver(driverId) {
    navigation.navigate('DriverScreen', { driverId:driverId });
  }
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={()=>navigateDriver(item.driverId)}>
        <View style={style.itemContainer}>
          <View style={style.dateOfBirth}>
            <Text style={style.content}>{item.dateOfBirth}</Text>
          </View>
          <View style={{ width: 96, }}>
            <Text style={style.content}>{item.familyName}</Text>
          </View>
          <View style={{ width: 80, }}>
            <Text style={style.content}>{item.givenName}</Text>
          </View>
          <View style={{ width: 100, }}>
            <Text style={style.content}>{item.nationality}</Text>
          </View>
        </View>
      </Pressable>
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
        Drivers
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
      {!isError && !isLoading && 
        <FlatList
          data={drivers}
          renderItem={renderItem}
          keyExtractor = {(item) => item.driverId}
        />
      }
      
      
    </View>
  )
}

export default DriversScreen