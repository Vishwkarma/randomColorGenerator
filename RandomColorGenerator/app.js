const getColor = () => {
    //Hex Code :color code in hex form 
    const randomNumber = Math.floor(Math.random() * 167777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber, randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);



}

document.getElementById("btn").addEventListener(
    "click",
    getColor

)

getColor();