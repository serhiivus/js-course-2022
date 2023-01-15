const tamagotchi = {
    health: 3,
    happiness: 3,
    satiety: 3,
    timeOfLife: 0,
    isDead() {
        return this.health === 0 ? true : this.happiness === 0;
    },
    play() {
        if (!this.isDead()) {
            if (this.happiness === 3) {
                console.log('I don\'t wanna play i\'m happy!');
                this.happiness--;
                this.satiety--;
                this.health--;
            } else {
                this.satiety--;
                this.health--;
                this.happiness++;
                console.log('Yeah, I wanna play with ya!!!');
            }
        } else {
            if (this.health === 0) {
                console.log('Ur tamagotchi was too hungry, so he is dead. R.I.P.');
            }
            if (this.happiness === 0) {
                console.log('Ur tamagotchi died been too fat and in depression. R.I.P.');
            }
        }
    },
    feed() {
        if (!this.isDead()) {
            if (this.satiety === 3) {
                console.log('Ohhh, I\'m so full!');
                this.satiety--;
                this.health--;
                this.happiness--;
            } else {
                this.health++;
                this.satiety++;
                this.happiness--;
                console.log('MMMMMM, so yummy!!!');
            }
        } else {
            if (this.health === 0) {
                console.log('Ur tamagotchi was too hungry, so he is dead. R.I.P.');
            }
            if (this.happiness === 0) {
                console.log('Ur tamagotchi died been too fat and in depression. R.I.P.');
            }
        }
    },
};

function getRandomAction() {
    let randomInt = Math.floor(Math.random() * 2);
    randomInt === 0 ? tamagotchi.play() : tamagotchi.feed();
}

function actionsWithTamagotchi() {
    if (tamagotchi.isDead()) {
        console.log(`Your tamagotchi is dead, his lifetime is ${tamagotchi.timeOfLife}`);
        return;
    }
    tamagotchi.timeOfLife += 0.5;
    getRandomAction();
    return setTimeout(() => {
        actionsWithTamagotchi();
    }, 500);
}

actionsWithTamagotchi();
