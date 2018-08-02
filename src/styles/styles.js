import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    addalbum:{
        position: 'absolute',
        paddingLeft: 70,
        paddingRight: 5,
        paddingTop: 75,
        paddingBottom: 5,
    },
    addalbumsongslist:{
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        paddingRight: 5,
        paddingBottom: 15,
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
    albumsscroll:{
        paddingLeft: 20,
        paddingRight: 20,
        flex: 9,
    },
    albumpicture:{
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
    bar:{
        backgroundColor: '#575757',
        height: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bottombar:{
        flex: 2.5,
        paddingLeft: 15,
        paddingRight: 15,
        borderTopWidth: .5,
        borderColor: '#D3D3D3',       
    },
    break:{
        height: 6,
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
    collectionscroll:{
        flex: 9,
        paddingLeft: 10,
        paddingRight: 10,
    },
    currentbar:{
        backgroundColor: '#6cc7e6',
        height: 5
    },
    headerimage:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden',
        alignItems: 'center'
    },
    libraryheaderlogo:{
        resizeMode: 'contain',
        width: 140,
        height: 45,
    },
    libraryname:{
        fontSize: 12,
        alignItems:'center'
    },
    mainscreen:{
        flex: 1,
        backgroundColor: '#ffffff'
    },
    musicatcollectionsheaderlogo:{
        resizeMode: 'contain',
        width: 100,
        height: 40,
        alignItems: 'center',
    },
    musicatmainheaderlogo:{
        width: 40,
        height: 40,
    },
    navigationbox:{
        flexDirection: 'row',
        paddingBottom: 15,
        paddingTop: 15,
    },
    navigationheader:{
        fontSize: 16,
        fontWeight: 'bold',
        alignItems:'center'
    },
    navigationheaderbox:{
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
    },
    playercontrols:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10
    }, 
    progressbarbox:{
        height: 20,
    },
    progresstext:{
        fontSize: 11
    },
    progressresetplaylist:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    regionname:{
        fontSize: 12,
        alignItems:'center',
        color: '#808080',
    },
    songadd:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    trackaddbox:{
        flex: 1, 
        paddingTop: 10,
    },
    trackbox:{
        flex: 10, 
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    trackstyle:{
        fontSize: 13
    },
});
    
export default styles;