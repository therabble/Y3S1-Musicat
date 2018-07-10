import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    addalbum:{
            position: 'absolute',
            paddingLeft: 20,
            paddingRight: 5,
            paddingTop: 15,
            paddingBottom: 5,
    },
    addalbumopenclose:{
        flexDirection: 'row',
    },
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
        width: 180,
    },
    albumlist: {
        flex: 10,
    },
    albumpicture: {
        width: 100,
        height: 100, 
        borderRadius: 50,
        backgroundColor: 'transparent',
    },
    albumtitle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    artistname:{
        fontSize: 13,
    },
    background: {
        backgroundColor: '#ffffff',
        flex: 1,
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
    collectioninfo:{
        paddingLeft: 30,
        paddingTop: 25,
        width: 180,
    },
    collectionlabel:{
        fontSize: 14,
        fontWeight: 'bold',
        alignItems:'center'
    },
    collectionlogo:{
        resizeMode: 'contain',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#CACACA'
        
    },
    currentbar: {
        backgroundColor: '#6cc7e6',
        height: 5
    },  
    libraryname:{
        fontSize: 12,
        alignItems:'center'
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
        flexDirection: 'row',
        paddingBottom: 15,
        paddingTop: 15,
    },
    navigationheader:{
        fontSize: 16,
        fontWeight: 'bold',
        alignItems:'center'
    },
    navigationheaderbox: {
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
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