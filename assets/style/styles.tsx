import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Dashboard
  dashboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  // End Dashboard

  // Reservasi
  reservasi: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor: '#fff',
  },
  formInput: {
    marginVertical:10,
    borderWidth: 1,
    padding:10,
    borderRadius:3,
    color: 'black'
  },
  submit: {
    marginVertical:10,
    paddingVertical:10,
    backgroundColor: 'purple',
    borderRadius:3
  },
  textSubmit: {
    fontSize:18,
    textAlign:'center',
    color: 'white'
  },
  // End Reservasi

  // History
  history: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor: '#fff',
  },
  cards: {
    marginVertical:5,
    borderWidth: 1,
    padding:10,
    borderRadius:3
    },
  // End History

  // Dropdown
  dropdown1BtnStyle: {
    width: '100%',
    marginTop:10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {
    color: '#444',
    fontSize: 14,
    textAlign: 'left'
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF'
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5'
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left'
  },
  // End Dropdown

  // Slider
  content: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'black',
  },
  logo: {
      width: 250,
      height: 250,
      resizeMode: 'contain',
      marginVertical:20
  },
  slide: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
  },
  image: {
      width: 250,
      height: 250,
      marginVertical: 32,
  },
  text: {
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      paddingVertical: 20,
      fontSize: 20,
  },
  title: {
      fontSize: 34,
      color: 'white',
      textAlign: 'center',
  },
  button: {
      backgroundColor: 'rgba(255, 0, 0, 1)',
      color: '#FFF',
  },
  flex1: {
      flex: 4,
      justifyContent: 'flex-end',
  },
  flex2: {
      flex: 2,
  },
  // End Slider
});

export default styles;