
        
export function getLengthOfStay(inDay, outDay){
    
    let date1 = new Date(inDay.toString());
    let date2 = new Date(outDay.toString());

    console.log(date1)
    console.log(date2)

    let Difference_In_Time = date2.getTime() - date1.getTime();

    let date_diff = Math.round(Difference_In_Time / (1000 * 3600 * 24));
    localStorage.setItem('lengthOfStay', date_diff)
    const quantity = date_diff
 
    console.log(date_diff, ' was calculated')
    return quantity
   
}
