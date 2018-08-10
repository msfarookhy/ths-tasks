function palandrom(racecar)
{
    if (racecar == racecar.split('').reverse().join('')){
        console.log ("Its a palandrom")

    } else {
        console.log ("its not a palandrom")
    }


}
palandrom("racecar")
