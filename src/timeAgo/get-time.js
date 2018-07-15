function GetDateFormat(){
    const Time = new Date();
    let dd = Time.getDate();
    let mm = Time.getMonth()+1; //January is 0!
    const hours=Time.getHours();
    const min=Time.getMinutes();
    const sec=Time.getSeconds();

    const yyyy = Time.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
   
    const today = `${yyyy}-${mm}-${dd} ${hours}:${min}:${sec}`;
    return today;

}
export default GetDateFormat;