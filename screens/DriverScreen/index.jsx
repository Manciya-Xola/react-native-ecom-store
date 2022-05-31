import React,{useState, useEffect, useCallback} from 'react'
import { Text, View, ActivityIndicator, Linking, Button } from 'react-native'
import style from './style';


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
      setDriver(json.MRData.DriverTable.Drivers[0]);
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
  
  return (
    
    <View style={style.driverContainer}>
      
      {isLoading && <ActivityIndicator size='large' color="#000"/>}
      {isError && <Text>An error occurred</Text>}
      {!isLoading && !isError && driver &&
      <View>
        <View style={style.topBackground}></View>
        <View style={style.profileContainer}></View>
        
        <View style={style.bottomContainer}>
          <View style={style.labelsContainer}>
            <Text style={style.label}>Name :</Text>
            <Text style={style.label}>{driver?.givenName}</Text>
          </View>
          <View style={style.labelsContainer}>
            <Text style={style.label}>Family Name :</Text>
            <Text style={style.label}>{driver?.familyName}</Text>
          </View>
          <View style={style.labelsContainer}>
            <Text style={style.label}>Date of birth :</Text>
            <Text style={style.label}>{driver?.dateOfBirth}</Text>
          </View>
          <View style={style.labelsContainer}>
            <Text style={style.label}>Nationality :</Text>
            <Text style={style.label}>{driver?.nationality}</Text>
          </View>
          <OpenURLButton url={driver.url}>Want to know more?</OpenURLButton>
        </View>
      </View>
      }
    </View>
  )
}

export default DriverScreen