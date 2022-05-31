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
      <View style={style.resultsRow}>
        <Text style={style.columnRowTxt}>{item.position}</Text>
        <Text style={style.columnRowTxt}>{item.Driver.givenName}</Text>
        <Text style={style.columnRowTxt}>{item?.Time?.time}</Text>
        <Text style={style.columnRowTxt}>{item.points}</Text>
      </View>
    );
  };
  const resultsHeader = () => (
    <View style={style.resultsHeader}>
      <View style={style.columnHeader}>
        <Text style={style.columnHeaderTxt}>Position</Text>
      </View>
      <View style={style.columnHeader}>
        <Text style={style.columnHeaderTxt}>Driver</Text>
      </View>
      <View style={style.columnHeader}>
        <Text style={style.columnHeaderTxt}>Time</Text>
      </View>
      <View style={style.columnHeader}>
        <Text style={style.columnHeaderTxt}>Points</Text>
      </View>
    </View>
  )
  return (
    <View style={style.container}>
      {isLoading && <ActivityIndicator size='large' color="#000"/>}
      {isError && <Text>An error occurred</Text>}
        {!isError && !isLoading && <FlatList
        ListHeaderComponent = {resultsHeader}
        data={results}
        renderItem={renderItem}
        keyExtractor = {(item) => item.Driver.driverId}
        />
        }
    </View>
  )
}

export default ResultsScreen

