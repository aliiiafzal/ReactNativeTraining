import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/ImageScreenStyles';
import ImagePicker from 'react-native-image-crop-picker';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../FirebaseConfig';
import {getDatabase} from 'firebase/database';
import {getDownloadURL, getStorage, uploadBytes, ref} from 'firebase/storage';

const ImageScreen = () => {
  const [image, setImage] = useState();
  const [images, setImages] = useState();
  const [imagewithcamera, setImageWithCamera] = useState();
  const [url, setUrl] = useState();
  const [mime, setMime] = useState();
  const app = initializeApp(firebaseConfig);
  const dbref = getDatabase(app);

  //console.log(url);

  const pickSingle = (cropit, circular = false, mediaType) => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
    })
      .then(image => {
        //console.log('received image', image);
        setImage(image.path);
        setMime(image.mime);
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const pickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    })
      .then(images => {
        //console.log(images);
        setImages(
          images.map(i => {
            //console.log('received image', i);
            return {
              uri: i.path,
            };
          }),
        );
      })
      .catch(e => alert(e));
  };

  const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then(image => {
        //console.log(image.path);
        setImageWithCamera(image.path);
      })
      .catch(e => alert(e));
  };

  const UploadPicToFirebase = async () => {
    console.log(image);
    const storage = getStorage();
    const storageRef = ref(storage, 'Images/' + mime);
    const img = await fetch(image);
    const bytes = await img.blob();
    console.log(bytes);
    await uploadBytes(storageRef, bytes).then(x => {
      console.log(uploadBytes);
      getDownloadURL(storageRef).then(x => {
        console.log(x);
        setUrl(x);
      });
    });
    console.log(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {image && (
          <View style={styles.imagebox}>
            <Image source={{uri: image}} style={styles.image} />
          </View>
        )}
        <View style={styles.flexbox1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickSingle(true, true)}>
            <Text style={styles.buttontext}>Browse Single Image</Text>
          </TouchableOpacity>
        </View>

        {images && (
          <View style={styles.imagebox}>
            <ScrollView>
              <FlatList
                horizontal
                data={images}
                renderItem={({item}) => (
                  <View>
                    <TouchableOpacity>
                      <Image source={{uri: item.uri}} style={styles.image} />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </ScrollView>
          </View>
        )}

        <View style={styles.flexbox1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickMultiple()}>
            <Text style={styles.buttontext}>Browse Multiple Image</Text>
          </TouchableOpacity>
        </View>

        {imagewithcamera && (
          <View style={styles.imagebox}>
            <Image source={{uri: imagewithcamera}} style={styles.image} />
          </View>
        )}
        <View style={styles.flexbox1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickSingleWithCamera(false)}>
            <Text style={styles.buttontext}>Pick Single Image With Camera</Text>
          </TouchableOpacity>
        </View>

        {imagewithcamera && (
          <View style={styles.imagebox}>
            <Image source={{uri: imagewithcamera}} style={styles.image} />
          </View>
        )}
        <View style={styles.flexbox1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickSingleWithCamera(false, 'video')}>
            <Text style={styles.buttontext}>Make Video With Camera</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flexbox1}>
          <TouchableOpacity style={styles.button} onPress={UploadPicToFirebase}>
            <Text style={styles.buttontext}>Upload Picture to Firebase</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageScreen;
