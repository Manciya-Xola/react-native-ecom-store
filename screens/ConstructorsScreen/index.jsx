import React, { useEffect, useState, useCallback } from 'react'
import { ActivityIndicator, FlatList, Text, View, Pressable, Linking, Button } from 'react-native'
import style from './style';
import { MaterialIcons } from '@expo/vector-icons';

const API_URL='http://ergast.com/api/f1/constructors.json';

function ConstructorsScreen() {
  
  const [constructors, setConstructors] = useState({});
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
      setConstructors(json.MRData.ConstructorTable.Constructors);
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
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };
  const renderItem = ({ item }) => {
    return (
      <View style={style.resultsRow}>
        <Text style={style.columnRowTxt}>{item.name}</Text>
        <Text style={style.columnRowTxt}>{item.nationality}</Text>
        <OpenURLButton url={item.url}>click here</OpenURLButton>
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
  const resultsHeader = () => (
    <View style={style.resultsHeader}>
      <View style={style.columnHeader}>
        <Text style={style.columnHeaderTxt}>Name</Text>
      </View>
      <View style={style.columnHeader}>
        <Text style={style.columnHeaderTxt}>Nationality</Text>
      </View>
      <View style={style.columnHeader}>
        <Text style={style.columnHeaderTxt}>Know More</Text>
      </View>
    </View>
  )
  return (
    <View style={style.container}> 
      <View style={style.buttonsContainer}>
        <Pressable style={style.button} onPress={previousButtonPressed} >
          <Text style={style.text}>Previous</Text>
        </Pressable>
        <Pressable style={style.button} onPress={nextButtonPressed}>
          <Text style={style.text}>
            Next 
          </Text>
          
        </Pressable>
      </View>
      {isLoading && <ActivityIndicator size='large' color="#000"/>}
      {isError && <Text>An error occurred</Text>}
        {!isError && !isLoading && <FlatList
        ListHeaderComponent = {resultsHeader}
        data={constructors}
        renderItem={renderItem}
        keyExtractor = {(item) => item.constructorId}
        />
        }
    </View>
  )
}

export default ConstructorsScreen
