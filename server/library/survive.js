function survive(request, response) {
    const scenarios = [
        "You made it to the saloon, Congrats.",
        "You died of dysentery.",
        "A snake got you.",
        "Your hourse made it, you didn't.",
        "You made it, your horse didn't.",
        "You found gold.",
        "You found oil.",
        "You found gold.",
        "You didn't even attept to cross the oregon trail.",
    ];
    const randomNum = Math.floor(Math.random() * scenarios.length);
    const outcome = scenarios[randomNum];

    response.json(outcome);
}

module.exports = survive;