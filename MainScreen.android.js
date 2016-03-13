/**
 * Created by allen on 16/3/12.
 */
'use strict' //严格模式
var React = require('react-native');
var {
    AsyncStorage,
    Image,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    ToastAndroid,
    BackAndroid,
    TouchableOpacity,
    Dimensions
    } =React;

var Drawer = require('react-native-drawer');//应用抽屉
var StoriesList = require('./St')