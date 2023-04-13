class Cookie{
    name = "";
    htmlElement = undefined;
    score = undefined;
    factor = 1;
    
    constructor(newName, newHTMLElement,newScore){
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.onclick = this.onCookieClicked;
        this.score = newScore;
    }

    onCookieClicked = () => {
        this.score.onCookieClicked(this.factor);
    }

    onStyleChange() {
        this.htmlElement.classList.add("cookie--chocolate");
    }

    onStyleChange2() {
        this.htmlElement.classList.add("cookie--valvet");
    }
}



class Score{
    score;
    name = "";
    htmlElement = undefined;

    constructor(newScore, newName, newHTMLElement) {
        this.score = newScore;
        this.name = newName;
        this.htmlElement = newHTMLElement;
        this.htmlElement.innerText = newScore;
    }

    onCookieClicked(factorFromCookie) {
        this.score = this.score + factorFromCookie; 
        this.htmlElement.innerText = this.score;
    }
 
    subtractScore() {
        this.score = this.score - 100; 
        this.htmlElement.innerText = this.score;
    }

    onAutoScoreClicked() {
        setInterval( () => {
            this.score = this.score + 500;
            this.htmlElement.innerText = this.score;
        }, 10000)
    }

    addPoints() {
        this.score = this.score + 10000;
        this.htmlElement.innerText = this.score;
    }
    
}

class Multiplier{
    factor = 100;
    htmlElement = undefined;
    cookie = undefined;
    bought = false;
    
    constructor(htmlElement, cookie) {
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onMultiplierClicked;
    }

    onMultiplierClicked = () => {
        if (this.bought === false) {
            this.bought = true;

            this.cookie.score.subtractScore();
            this.cookie.factor = this.factor; 
        }
    }
}

class AutoScore{
    htmlElement = undefined;
    score = undefined;
    bought = false;

    constructor(htmlElement, score) {
        this.htmlElement = htmlElement;
        this.score = score;
        this.htmlElement.onclick = this.onAutoScoreClicked;
    }

    onAutoScoreClicked = () => {
        if (this.bought === false) {
            this.bought = true;
            this.score.subtractScore();
            this.score.onAutoScoreClicked();
        }      
    }
}

class ChocolateCookie{
    htmlElement = undefined;
    bought = false;
    cookie = undefined;

    constructor(htmlElement,cookie){
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onChocolateCookieClicked;
    }

    onChocolateCookieClicked = () => {
        if (this.bought === false){
            this.bought = true;  
            this.cookie.onStyleChange();
            this.cookie.score.addPoints();
        }
    }

}

class ValvetCookie{
    htmlElement = undefined;
    bought = false;
    cookie = undefined;

    constructor(htmlElement,cookie){
        this.htmlElement = htmlElement;
        this.cookie = cookie;
        this.htmlElement.onclick = this.onValvetCookieClicked;
    }

    onValvetCookieClicked = () => {
        if (this.bought === false){
            this.bought = true;  
            this.cookie.onStyleChange2();
            this.cookie.score.addPoints();
        }
    }

}

const score = new Score(0, "Default Score", document.getElementById("js--score"));
const cookie = new Cookie("Default Cookie", document.getElementById("js--cookie"), score);
const multi = new Multiplier(document.getElementById("js--multiplier"), cookie);
const auto = new AutoScore(document.getElementById("js--autoScore"), score);
const chocolate = new ChocolateCookie(document.getElementById("js--chocolate"), cookie);
const valvet = new ValvetCookie(document.getElementById("js--red--valvet"), cookie);
const multiplierMobile = new Multiplier(document.getElementById("js--multiplier--mobile"),cookie);
const autoMobile = new AutoScore(document.getElementById("js--autoScore--mobile"), score);
const chocolateMobile = new ChocolateCookie(document.getElementById("js--chocolate--mobile"), cookie);
const valvetMobile = new ValvetCookie(document.getElementById("js--red--valvet--mobile"), cookie);