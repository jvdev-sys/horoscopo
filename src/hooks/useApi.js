import { useEffect, useState } from 'react';
import api from '../services/api';

const useApi = (dt) => {
    const [apiData, setApiData] = useState();

    useEffect(() => {
        async function loadApiData() {
            //Consome os dados da API fornecida
            const response = await api.get('/api/horoscope/test');
            //Filtra os dados obtidos por data fornecida
            let responseData = response.data.result.filter(item => item.dt === dt);
            setApiData(responseData);
        }

        loadApiData();
        //useEffect fica atento à mudança de data para modificar 
        //e consumir novamente os dados caso necessário
    }, [dt]);

    return [apiData];
}

export default useApi;