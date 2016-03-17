/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    ToolbarAndroid,
    Text,
    View
} from 'react-native';
var TimerMixin = require('react-native-timer-mixin');
var MainScreen = require('./MainScreen');
var StoryScreen = require('./StoryScreen');
var _navigator;
/**
 * 屏蔽物理返回键
 */
BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});

var RCTZhiHuDaily = React.createClass({
    minxins: [TimerMixin],
    componetDidMount: function () {
        this.setTimeout(()=> {
            this.setState({
                    splashed: true
                }
            );
        }), 2000
    },
    RouteMapper: function (route, navigationOperations, onComponentRef) {
        _navigator = navigationOperations;
        if (route.name === 'home') {
            return (
                <View style={Styles.container}>
                    <MainScreen navigator={navigationOperations}/>
                </View>
            );
        } else if (route.name === 'story') {
            return (
                <View style={styles.container}>
                    <StoryScreen
                        style ={{flex:1}}
                        navvigator ={navigationOperations}
                        story= {route.story} />
                </View>
            );
        }
    },
    getInitaState: function () {
        return {
            splashed:false
        };
    },
    onActionSelected:function(position){

    },
    render: function () {
        if (this.state.splashed) {
            var initialRoute = {name:'home'};
            return (
                <Navigator style ={styles.container}
                    initialRoute = {initialRoute}
                    configureScene ={()=> Navigator.SceneConfigs.FadeAndroid }
                    renderScene = {this.RouteMapper}
                    />
            );


    }else{
            return (
                <SplashScrenn />
            );
        }
    }
});
class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    这是测试怎么回事!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.text}>
                    Shake or press menu button for dev menu
                </Text>
                <Text style={styles.text}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}
var styless = StyleSheet.create({
    base: {},
    background: {},
    active: {}
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ddff00',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    text: {
        textAlign: 'left',
        color: '#ddff00',
        marginBottom: 15,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
