import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const cartStyle = StyleSheet.create({
    styleContainer: {
        flex: 1,
        backgroundColor: '#dbdbdb',
    },
    styleAccomodateItem: {
        backgroundColor: '#fff',
        marginVertical: hp('2%'),
        marginHorizontal: wp('2%'),
        padding: wp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    styleImageItemAndPrice: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    styleImageItem: {
        width: wp('20%'),
        height: hp('10%'),
        marginRight: wp('3%'),
    },
    stylePrice: {
        alignItems: 'center',
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('3%'),
        backgroundColor: '#4cb050',
        alignSelf: 'flex-end',
        borderRadius: wp('1.2%'),
    },
    textPrice: {
        fontSize: wp('4%'),
        color: '#fff',
    },
    styleAccomodateButtonAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp('40%'),
    },
    styleContainerButton: {
        padding: wp('3%'),
        borderRadius: wp('2%'),
        alignItems: 'center'
    },
    styleButton: {
        fontSize: wp('4%'),
        color: '#fff',
    },
    textQuantity: {
        fontSize: wp('4%'),
        color: '#000',
    },
    styleAccomodateTotalAddAndCheckout: {
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: '#dbdbdb',
    },
    styleAccommodateAddItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp('2%'),
        marginVertical: hp('2%'),
        backgroundColor: 'transparent',
    },
    textAddItem: {
        fontSize: wp('4%'),
        color: '#000',
    },
    styleAccomodateCartTotal: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingVertical: hp('5%'),
        paddingHorizontal: wp('2%'),
    },
    styleCartTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('3%'),
        marginHorizontal: wp('5%'),
    },
    styleCartAndTextQuantity: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    styleTextCartTotal: {
        fontSize: wp('4%'),
        color: '#000',
        marginLeft: wp('2%'),
    },
    styleTextCartTotalPrice: {
        fontSize: wp('4%'),
        color: '#000',
    },
    styleAccomodateCheckoutAndClose: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),

    }
});


export default cartStyle;