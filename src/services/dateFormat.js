import { format } from 'date-fns';

//Formata a data para exibição no app
export const formatDateToShow = (dt) =>{
    let date = new Date(dt);
    return format(date, 'dd/MM/yyyy');
}

//Formata a data para filtragem no hook
export const formatDateToQuery = (dt) => {
    return format(dt, 'yyyy-MM-dd');
}
