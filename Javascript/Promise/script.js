const tatkalBooking = new Promise((reslove,reject) => {
    let bookingSuccess = true
    if(bookingSuccess){
        reslove()
    }
    else{
        reject
    }
})
tatkalBooking.then(() => console.log("Thanks for booking,i'll return the amount"))
.catch(() =>  console.log("No issue I'll book the bus"))
