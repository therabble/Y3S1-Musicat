import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    addbutton: {
        fontWeight: 'bold'
    },
    albumheader:{
        flexDirection: 'row',
        paddingBottom: 20,
        alignItems: 'center'
    },
    albuminfo:{
        paddingLeft: 30,
    },
    albumlist: {
        flex: 10,
    },
    albumpicture: {
        width: 100,
        height: 100, 
        borderRadius: 50
    },
    albumtitle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    artistname:{
        fontSize: 13,
    },
    bar: {
        backgroundColor: '#575757',
        height: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bottombar:{
        flex: 2,       
    },
    break: {
        height: 8,
    },
    currentbar: {
        backgroundColor: '#6cc7e6',
        height: 5
    },  
    logo:{
        width: 100,
        height: 40
    },
    logobox: {
        flex:1.4,
        alignItems:'center'
    },
    mainscreen:{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff'
    },
    navigationbox: {
        alignItems: 'center',
        padding: 20,
    },
    navigationtext:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    playercontrols:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10
    }, 
    progressbarbox: {
        height: 20,
    },
    progresstext: {
        fontSize: 8
    },
    toplogobar: {
        alignItems:'center'
    },
    trackaddbox: {
        flex: 2, 
        padding:10
    },
    trackbox: {
        flex: 10, 
        padding:10
    },
    trackstyle: {
        fontSize: 13
    },
});
    

export default styles;