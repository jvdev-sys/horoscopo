import { format } from 'date-fns';


export const formatDateToShow = (dt) =>{
    let date = new Date(dt);
    return format(date, 'dd/MM/yyyy');
}

export const formatDateToQuery = (dt) => {
    return format(dt, 'yyyy-MM-dd');
}
