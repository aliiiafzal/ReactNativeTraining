import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/QRScanScreenStyles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const QRScanScreen = () => {
  const [scan, setScan] = useState(false);
  const [barScan, setBarScan] = useState(false);
  const [result, setResult] = useState();
  const [barResult, setBarResult] = useState();

  const onSuccess = e => {
    setResult(e.data);
    //console.log(e.data);
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
    setScan(false);
  };

  const startScan = () => {
    setScan(true);
    setResult();
  };

  const onBarSuccess = e => {
    setBarResult(e.data);
    setBarScan(false);
  };

  const startBarScan = () => {
    setBarScan(true);
    setBarResult();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {result && (
          <View style={styles.flexbox1}>
            <Text style={styles.text}>QR Code Result is : {result}</Text>
          </View>
        )}
        {!scan && (
          <View style={styles.flexbox1}>
            <TouchableOpacity onPress={startScan} style={styles.button}>
              <Text style={styles.buttontext}>Scan QR Code</Text>
            </TouchableOpacity>
          </View>
        )}
        {scan && (
          <View style={styles.flexbox2}>
            <QRCodeScanner
              reactivate={true}
              flashMode={RNCamera.Constants.FlashMode.torchoff}
              showMarker={true}
              onRead={onSuccess}
              topContent={<Text style={styles.text}>Scan your QRCode!</Text>}
              bottomContent={
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setScan(false)}>
                  <Text style={styles.buttontext}>Cancel Scan</Text>
                </TouchableOpacity>
              }
            />
          </View>
        )}

        {barResult && (
          <View style={styles.flexbox1}>
            <Text style={styles.text}>Bar Code Result is : {barResult}</Text>
          </View>
        )}
        {!barScan && (
          <View style={styles.flexbox1}>
            <TouchableOpacity onPress={startBarScan} style={styles.button}>
              <Text style={styles.buttontext}>Scan Bar Code</Text>
            </TouchableOpacity>
          </View>
        )}

        {barScan && (
          <View style={styles.flexbox2}>
            <QRCodeScanner
              reactivate={true}
              flashMode={RNCamera.Constants.FlashMode.torchoff}
              showMarker={true}
              onRead={onBarSuccess}
              topContent={<Text style={styles.text}>Scan your BarCode!</Text>}
              bottomContent={
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setBarScan(false)}>
                  <Text style={styles.buttontext}>Cancel Scan</Text>
                </TouchableOpacity>
              }
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default QRScanScreen;
