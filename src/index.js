const squares = (number) =>{
    let counter = 0;

    for(let i=0; counter < number; i++){

    counter = (i * i);

    if(counter == number)
        return true;
    }
    return false;
}

module.exports = {
    squares
}