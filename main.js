let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
const root = document.documentElement;
const themeSelector = document.querySelector("select");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");


function setTheme(theme){
    root.style.setProperty("--bg-color", theme[0]);
    root.style.setProperty("--icon-color", theme[1]);
    root.style.setProperty("--hover-color", theme[2]);
    root.style.setProperty("--border-color", theme[3]);
    root.style.setProperty("--font-color", theme[4]);
}

let themes = {
    default: ["#FFFFFF", "#EEEEEE", "#CFCBCB", "#2C272E", "#000000"],
    justBlack: ["#212529", "#343a40", "#212529", "#495057", "#adb5bd"],
    retro: ["#FAEDF0", "#FABB51", "#FAEDC6", "#3E8E7E", "#121212"],
    nord: ["#4C566A", "#2E3440", "#3B4252", "#434C5E", "#D8DEE9"],

}

let screenValue="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log("BUTTON TEXT IS ",buttonText);
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText =='Clear'){
            screenValue= "";
            screen.value =screenValue ;
        }
        else if(buttonText =='Delete'){
            screenValue= screenValue.slice(0,-1);
            screen.value =screenValue ;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue)
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}


themeSelector.addEventListener("change", () => {
    setTheme(themes[themeSelector.value])
});