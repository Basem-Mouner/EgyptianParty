export default function dateParty() {
    let dateCrrent = new Date();
    let dateParty = new Date("2024-11-7"); //from api as afuture
    let totalMsec = Math.abs(dateParty - dateCrrent)
    let totalHour = totalMsec / (1000 * 60 * 60)
    let days = (totalHour / 24);
    let hourRemainder = (days - Math.floor(days)) * 24;
    let minutREmander = (hourRemainder - Math.floor(hourRemainder)) * 60;
    let secRemainder = (minutREmander - Math.floor(minutREmander)) * 60;

    // console.log(totalMsec);
    // console.log(totalHour);
    // console.log(days);
    // console.log(Math.floor(days)); // days
    // console.log(Math.floor(hourRemainder)); //hours
    // console.log(Math.floor(minutREmander)); //minute
    // console.log(Math.ceil(secRemainder)); //sec
    $('.days').html(`${Math.floor(days)} D`);
    $('.hours').html(`${Math.floor(hourRemainder)} h`);
    $('.minutes').html(`${Math.floor(minutREmander)} m`);
    $('.secounds').html(`${Math.floor(secRemainder)} s`);
}