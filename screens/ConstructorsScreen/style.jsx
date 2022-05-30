import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    textAlign: 'center'
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
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});