import {StyleSheet, Dimensions} from 'react-native';

let width = Dimensions.get('window').width;

const TodoStyles = {
  // main: {
  //   alignItems: 'center',
  //   flex: 1,
  // },
  mainInput: {
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.8,
    height: 40,
    padding:10
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
  },
  removeTodo: {
    backgroundColor: 'cyan',
    borderRadius: 4,
    alignItems: 'center',
    margin: 4,
  },
  centeredView: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // marginTop: 30,
    marginBottom:30,
    backgroundColor:'rgba(52, 52, 52, 0.8)',
    height:'100%',
  },
  button: {
    width:200,
    height:100

  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.85,
    shadowRadius: 4,
    elevation: 5,
    height:300
    
  },
  mainButton: {
    flexDirection:"row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxCreate: {
    borderWidth: 2,
    borderRadius:15,
    borderColor:'#1369b0',
    margin:10,
    alignItems:"center",
    padding:10
    
  },
  // button: {
  //   borderRadius: 15,
  //   padding: 10,
    
  //   elevation: 5,
    
    
  // },
  buttonOpen: {
    backgroundColor: "#1369b0",
  },
  buttonModal: {
    margin:1,
    width:100,
    borderRadius:5,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },
  colorDanger:{
    backgroundColor: '#FC0000'
  },
  colorWarning:{
    backgroundColor:'#FCA100'
  },
  colorSuccess:{
    backgroundColor:'#309501'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding:10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  pd: {
    padding:35
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
};
export const styles = StyleSheet.create(TodoStyles);
