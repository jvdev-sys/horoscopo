import { useEffect, useState } from 'react';
import api from '../services/api';

const useApi = (dt) => {
    const [apiData, setApiData] = useState();

    useEffect(() => {
        async function loadApiData() {
            const response = await api.get('/api/horoscope/test');
            let responseData = response.data.result.filter(item => item.dt === dt);
            setApiData(responseData);
           // console.log("useApi :: loadApiData :: response :: ", JSON.stringify(responseData));
        }

        loadApiData();
    }, [dt]);

    return [apiData];
}

export default useApi;