import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveUsers, deleteUser, createUser,updateUser} from '../actions/todoAction/usersActions';
import {styles} from './TodoStyles';
import {
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  Modal
} from 'react-native';
// import { retrieveUsers} from "../actions/todoAction/usersActions";
// import { createUser } from "../actions/todoAction/usersActions";
// import { updateUser } from "../actions/todoAction/usersActions";
const Todo = () => {
  // ------------------------ state ----------------------------
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData,setModalData]= useState({})

  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.userReducer);
  console.log('data-----2',dataUser)
    // -------------------- useEffect --------------------------
  useEffect(()=>{
    dispatch(retrieveUsers()).then(() => {
      console.log('dispatch')
      // console.log('success',dataUser)
    });
    
 
  },[dispatch])
  // console.log('dataCreate-----',dataCreate)
// ------------------------ FNC ALL ----------------------------
const fncCreateUser = () => {
  // console.log('dataCreate---2',dataCreate)
  dispatch(
    createUser(
      name,
      email
    )
  )
    .then((data) => {
      // console.log('data---res',data)
    })
    .catch((err) => {
      console.log("err---x",err.response);
    });
};

  const renderTodoList = () => {
    return (
     <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
          <View style={styles.mainButton}>
            <Pressable
              style={[ styles.buttonModal,styles.colorSuccess]}
              onPress={() => {
                const id = modalData.id
                const data = {
                  name: name,
                  email: email
                }
                dispatch(updateUser(id, data))
                setModalVisible(!modalVisible)
                setModalData({})
                setName('')
                setEmail('')
                dispatch(retrieveUsers())
              }}
            >
              <Text style={styles.textStyle}>Update</Text>
            </Pressable>
            <Pressable
              style={[ styles.buttonModal,styles.colorWarning]}
              onPress={() => {
                console.log('datadelete',modalData,'++++',modalData.id)
                dispatch(deleteUser(modalData.id))
                setModalVisible(!modalVisible)
                setModalData({})
                setName('')
                setEmail('')
                // console.log(modalData)
              }}
            >
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            <Pressable
              style={[ styles.buttonModal,styles.colorDanger]}
              onPress={() => {
                setModalVisible(!modalVisible)
                setModalData({})
                setName('')
                setEmail('')
                // 
                // console.log(modalData)
              }}
            >
                <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
            
          </View>
        </View>
      </Modal>
      {
        dataUser.length ? (
          dataUser.map((data,index)=>{
            return(
              <View key={data.id} style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
                <Button color="#FF3D00" 
                  onPress={() => {
                    setModalVisible(true)
                    setModalData(data),
                    setName(data.name),
                    setEmail(data.email)
                  }} 
                title={data.name}/>
              </View> 
            )
          })
     
        ) : <></>
      }
     </>
    );
  };

  return (
    <View style={styles.main}>
      {/* <View style={{backgroundColor:"#000",display:"flex"}}>
        <ActivityIndicator size="large"/>
      </View> */}
      <ScrollView>
        <View style={styles.boxCreate}>
          <TextInput
            style={styles.mainInput}
            onChangeText={setName}
            placeholder={'Add your Name here'}
            value={name}
          />
          <TextInput
            style={styles.mainInput}
            onChangeText={setEmail}
            placeholder={'Add your Email here'}
            value={email}
          />
          <Pressable
              style={[ styles.buttonModal,styles.colorSuccess]}
              onPress={() => {
                fncCreateUser({name,email});
              }} 
          >
            <Text style={styles.textStyle}>Create</Text>
          </Pressable>      
        </View>
        <Text style={{alignSelf: 'stretch', paddingLeft: 20}}>
          List of Users :
        </Text>
        {renderTodoList()}
      </ScrollView>
    </View>
  );
};

export default Todo;
