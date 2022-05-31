import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  driverContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
  },
  image: {
    flex: 3/4,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  topBackground: {
    top: 0,
    backgroundColor: "#34dbeb",
    width: "100%",
    height: "30%",
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
  },
  bottomContainer:{
    backgroundColor: "#e6eff0",
    height: "75%",
    borderRadius: 50,
    top: -150,
    paddingTop: 40,
  },
  profileContainer:{
    width: 100,
    height: 100,
    backgroundColor: "red",
    top: -130,
    left: 130,
    borderRadius: '50%',
    zIndex: 10,
  },
  labelsContainer:{
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'flex-start'
  },
  label:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});