import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import style from './style';

const API_URL='https://ergast.com/api/f1/current/last/results.json';


function ResultsScreen() {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    fetchData();
  },[])

  async function fetchData() {
    setIsLoading(true)
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setResults(json.MRData.RaceTable.Races[0].Results);
      // console.log("hello", results)
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
          <Text style={style.content}>{item.position}</Text>
        </View>
        <View style={{ width: 96, }}>
          <Text style={style.content}>{item.Driver.givenName}</Text>
        </View>
        {/* <View style={{ width: 80, }}>
          <Text style={style.content}>{item.Time.time}</Text>
        </View> */}
        <View style={{ width: 100, }}>
          <Text style={style.content}>{item.points}</Text>
        </View>
      </View>
    );
  };
  
  return (
    <View>
      <Text>
        Results
      </Text>
      {isLoading && <ActivityIndicator size='large' color="#000"/>}
      {isError && <Text>An error occurred</Text>}
        {!isError && !isLoading && <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor = {(item) => item.Driver.driverId}
        />
        }
    </View>
  )
}

export default ResultsScreen

