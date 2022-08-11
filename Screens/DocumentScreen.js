import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from '../Styles/DocumentScreenStyles';
import DocumentPicker from 'react-native-document-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../FirebaseConfig';
import {getDatabase} from 'firebase/database';
import {getDownloadURL, getStorage, uploadBytes, ref} from 'firebase/storage';

const DocumentScreen = () => {
  const [singleFileResponse, setSingleFileResponse] = useState([]);
  const [multipleFileResponse, setMultipleFileResponse] = useState([]);
  const [url, setUrl] = useState();
  const app = initializeApp(firebaseConfig);
  const dbref = getDatabase(app);

  const handleSingleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      //console.log('response : ' + JSON.stringify(response));
      setSingleFileResponse(response);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      }
    }
  }, []);

  const handleMultipleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      //console.log('response : ' + JSON.stringify(response));
      setMultipleFileResponse(response);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from multiple doc picker');
      }
    }
  }, []);

  const UploadDocToFirebase = async () => {
    var uri = null;
    var name = null;
    console.log(singleFileResponse);
    singleFileResponse.map(
      (file, index) => ((uri = file.uri), (name = file.name)),
    );
    //console.log(uri);
    //console.log(name);
    const storage = getStorage();
    const storageRef = ref(storage, 'Documents/' + name);
    const doc = await fetch(uri);
    const bytes = await doc.blob();
    await uploadBytes(storageRef, bytes).then(x => {
      console.log(uploadBytes);
      getDownloadURL(storageRef).then(x => {
        setUrl(x);
      });
    });
    console.log(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexbox1}>
        <TouchableOpacity
          onPress={handleSingleDocumentSelection}
          style={styles.button}>
          <Text style={styles.buttontext}>Pick Single Document 📑 </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flexbox2}>
        <ScrollView>
          {singleFileResponse.map((file, index) => (
            <Text key={index.toString()} style={styles.uri}>
              File URI : {file?.uri}
              {'\n'}
              File Type : {file?.type}
              {'\n'}
              File Name : {file?.name}
              {'\n'}
              File Size : {file?.size}
            </Text>
          ))}
        </ScrollView>
      </View>

      <View style={styles.flexbox1}>
        <TouchableOpacity
          onPress={handleMultipleDocumentSelection}
          style={styles.button}>
          <Text style={styles.buttontext}>Pick Multiple Documents 📑</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flexbox3}>
        <ScrollView>
          {multipleFileResponse.map((file, index) => (
            <Text key={index.toString()} style={styles.uri}>
              File URI : {file?.uri}
              {'\n'}
              File Type : {file?.type}
              {'\n'}
              File Name : {file?.name}
              {'\n'}
              File Size : {file?.size}
              {'\n'}
            </Text>
          ))}
        </ScrollView>
      </View>

      <View style={styles.flexbox1}>
        <TouchableOpacity onPress={UploadDocToFirebase} style={styles.button}>
          <Text style={styles.buttontext}>Upload Document to Firebase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DocumentScreen;
