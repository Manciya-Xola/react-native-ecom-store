import React,{useState, useEffect} from 'react'
import { Text, View, ActivityIndicator } from 'react-native'


const API_URL='http://ergast.com/api/f1/drivers/';


function DriverScreen({navigation, route}) {
  const [driver, setDriver] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    fetchData();
  },[])

  async function fetchData() {
    setIsLoading(true)
    try {
      const res = await fetch(API_URL+route.params.driverId+".json");
      const json = await res.json();
      setDriver(json.MRData.DriverTable.Drivers);
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
  return (
    <View>
      <Text>
        Driver screen
      </Text>
      {isLoading && <ActivityIndicator size='large' color="#000"/>}
      {isError && <Text>An error occurred</Text>}
    </View>
  )
}

export default DriverScreen