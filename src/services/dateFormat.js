import { format } from 'date-fns';


export const formatDateToShow = (dt) =>{
    let date = new Date(dt);
    date.setDate(date.getDate()+1);
    return format(date, 'dd/MM/yyyy');
}

export const formatDateToQuery = (dt) => {
    return format(dt, 'yyyy-MM-dd');
}
