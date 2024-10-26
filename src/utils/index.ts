import moment from 'moment'

const getDate = (date:string)=>{
    try {
        
        return moment(date, "DD/MM/YYYY").toDate()
    } catch (error) {
        return null
    }
}


const isValidHttpUrl = (url:string)=>{
    try {
      const newUrl = new URL(url);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
}


export default {getDate, isValidHttpUrl}
