 //geef class id's aan om te gebruiken in code hier onder
class ColorCard {
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text;

    constructor(newId, newColor, addToList) { //id's die je in de constructor kan gebruiken om iets aan te roepen
        //setting properties
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;

        //make htmlElement to render
        //genereert de li
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList = "colors__color";

        //genereert de figure
        this.circle = document.createElement("figure");
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;

        //genereert de tekst
        this.text = document.createElement("p");
        this.text.innerText = "Copied";
        this.text.classList = "colors__text";

        this.htmlElement.onclick = this.onHTMLElementClicked;

        this.render();
    }

    //het onclick effect (coppied tekst verschijnt en de animatie speelt af)
    onHTMLElementClicked = () => {
        this.circle.classList.add("colors__circle--selected")
        document.title = this.color;
        window.navigator.clipboard.writeText(this.color)
    }

    //alles bij elkaar word gerendered 
    render() {
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
        this.addToList.appendChild(this.htmlElement);
    }
}

 //geef class id's aan om te gebruiken in code hier onder
class ColorList {
    id;
    htmlElement;


    constructor(newID){ //id's die je in de constructor kan gebruiken om iets aan te roepen
        this.id = newId;
        this.htmlElement = document.createElement("ul")
        this.htmlElement.id = this.id;
        document.querySelector("body").appendChild(this.htmlElement);
    }
}

for(let i = 1; i < 101; i++){ //herhaalt 100x wat hier onder staat


    let randomHue = Math.floor(Math.random() * (360 - 1) + 1); //maakt een random hue aan voor de kleur
    let randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%"; //maakt de saturation aan voor de kleur hierboven
    let randomLightness = Math.floor(Math.random () * (100- 11) + 11) + "%"; //maakt de lightness aan om te bepalen hoe donker de kleur is 

    //voegt de 3 dingen hierboven aan elkaar toe 
    let hsl = `hsl(${randomHue}, ${randomSaturation}, ${randomLightness})`
    
    //verbind de js bestanden in de for loop aan "js--colors" in de scss/html
    new ColorCard(i, hsl, document.getElementById("js--colors"));

}




