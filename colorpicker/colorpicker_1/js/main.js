class ColorCard {
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text;

    constructor(newId, newColor, addToList) {
        //setting properties
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;

        //make htmlElement to render
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList = "colors__color";

        this.circle = document.createElement("figure");
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;

        this.text = document.createElement("p");
        this.text.innerText = "Copied";
        this.text.classList = "colors__text";

        this.htmlElement.onclick = this.onHTMLElementClicked;

        this.render();
    }

    onHTMLElementClicked = () => {
        this.circle.classList.add("colors__circle--selected")
    }

    render() {
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
        this.addToList.appendChild(this.htmlElement);
    }
}

const test = new ColorCard(101, "hsl(284,52%,36%)", document.getElementById("js--colors"));

