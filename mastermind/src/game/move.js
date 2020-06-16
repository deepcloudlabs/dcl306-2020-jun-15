export default class Move {
    constructor(guess, secret) {
        this.guess = guess;
        this.perfectMatch = 0; // ex: +2
        this.partialMatch = 0; // ex: -1
        this.message = "";
        this.evaluate(guess, secret);
    }

    evaluate = (guess, secret) => {
        const strGuess = guess.toString();
        const strSecret = secret.toString();
        for (let i = 0; i < strGuess.length; ++i) {
            const g = strGuess.charAt(i);
            for (let j = 0; j < strSecret.length; ++j) {
                const s = strSecret.charAt(j);
                if (g === s) {
                    if (i === j) {
                        this.perfectMatch++;
                    } else {
                        this.partialMatch++;
                    }
                }
            }
        }
        if ((this.perfectMatch === 0 && this.partialMatch === 0))
            this.message = "No match!";
        if (this.partialMatch>0)
            this.message = `-${this.partialMatch}`;
        if (this.perfectMatch>0)
            this.message += `+${this.perfectMatch}`;
    }
}