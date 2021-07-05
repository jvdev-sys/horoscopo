import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';
import NetInfo from "@react-native-community/netinfo";

const useApi = (dt) => {
    const [apiData, setApiData] = useState();
    const [isOffline, setOfflineStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
        });
        loadApiData();
        //useEffect fica atento à mudança de data para modificar 
        //e consumir novamente os dados caso necessário
        return () => removeNetInfoSubscription();
    }, []);

    const loadApiData = useCallback(async () => {
        setIsLoading(true);
        console.log(isLoading);
        //Consome os dados da API fornecida
        try {
            const response = await api.get('/api/horoscope/test');
            //Filtra os dados obtidos por data fornecida
            let responseData = response.data.result.filter(item => item.dt === dt);
            setApiData(responseData);
            setIsLoading(false);
            // console.log(isLoading);
        } catch (error) {
            console.log(error);
        }
    }, [isOffline]);

    return [apiData, isLoading, isOffline, loadApiData];
}

export default useApi;