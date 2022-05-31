import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  dateOfBirth:{
    width: 97,
  },
  content:{
    fontSize: 16,
    fontWeight: 'bold', 
    textAlign: 'center',
  },

  buttonsContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#34dbeb',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },




  container: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  row: {
    elevation: 1,
    flex: 1,
    flexDirection: "row", // main axis
    justifyContent: "space-between", // main axis
    alignItems: "center", // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6,
    backgroundColor: "#34dbeb",
    borderRadius: 10,
  },
  row_cell_timeplace: {
    flex: 1,
    flexDirection: "column",
  },
});