import NetInfo from '@react-native-community/netinfo';
export const  CheckConnected = async()=>{
    return await NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        return state.isConnected;
      });
}
