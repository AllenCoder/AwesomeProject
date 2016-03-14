/**
 * Created by allen on 16/3/12.
 */
'use strict'
var React = require('react-native');
var {
    AsyncStorage,
    Platform,
    ListView,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    TouchableHighlight,
    } = React
var DateRepository = require('./DataRepository');

var Themeslist = React.createClass({
    getInitaState: function () {
        var dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) =>row1 !== row2,
        });
        return {
            isLoading: false,
            dataSource: dataSource,
        };
    },
    componentDidMount: function () {
        this.fetchThemes();
    },
    fetchThemes: function () {
        repository.getThemes().then((themes) => {
            this.setState({
                isLoading: false,
                dataSource: this.state.dataSource.cloneWithRows(themes),
            });
        })
            .catch((error)=> {
                this.setState({
                    isLoading: false,
                    dateSource: this.state.dateSource,
                });
            }).done();
    },
    renderHeader: function () {
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }
        return (
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <TouchableElement>
                        <View style={{flexDirection: 'row', alignItems: 'center',padding: 16}}>
                        <Image source={} />

                        </View>
                    </TouchableElement>

                </View>
            </View>
        );
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        background: '#FAFAFA',
    },
    header: {
        flex: 1,
        backgroundColor: '#00a2ed'
    },
    userInfo: {
        flex: 1,
        backgroundColor: "#00a2ed",
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    menuText: {
        fontSize: 14,
        color: 'white',
    },
    themeItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    themeName: {
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },
    themeIndicate: {
        marginRight: 16,
        width: 16,
        height: 16,
    },
    separator: {
        height: 1,
        backgroundColor: '#eeeeee',
    },
    scrollSpinner: {
        marginVertical: 20,
    },
    rowSeparator: {
        backgroundColor: 'rgba(0,0,0,1)',
        height: 1,
        marginLeft: 4,
    },
    rowSeparatorHide: {
        opacity: 0.0,
    },
});
module.exports = Themeslist;