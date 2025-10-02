addLayer("multi", {
    name: "Multiplier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Multiplier", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: Decimal.reciprocate("10^^1e300"), // Prestige currency exponent
    gainMult(){
        let gain = new Decimal(1)
        gain = gain.mul(tmp.rebirth.effect)
        gain = gain.mul(tmp.megamulti.effect)
        return gain
    },
    effect() {
        let eff = new Decimal(1)
        eff = player.multi.points.max(1)
        return eff
    },
    effectDescription() {
        return " which boost Money by x" + tmp.multi.effect
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
})

addLayer("rebirth", {
    name: "Rebirth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Rebirth", // Name of prestige currency
    baseResource: "Multiplier", // Name of resource prestige is based on
    baseAmount() {return player.multi.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: Decimal.reciprocate("10^^1e300"), // Prestige currency exponent
    gainMult(){
        let gain = new Decimal(1)
        gain = gain.mul(tmp.urebirth.effect)
        return gain
    },
    effect() {
        let eff = new Decimal(1)
        eff = player.rebirth.points.mul(2).max(1)
        return eff
    },
    effectDescription() {
        return " which boost Multiplier by x" + tmp.rebirth.effect
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
})

addLayer("urebirth", {
    name: "Ultra Rebirth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "UR", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Ultra Rebirth", // Name of prestige currency
    baseResource: "Rebirth", // Name of resource prestige is based on
    baseAmount() {return player.rebirth.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: Decimal.reciprocate("10^^1e300"), // Prestige currency exponent
    gainMult(){
        let gain = new Decimal(1)
        gain = gain.mul(tmp.prestige.effect)
        return gain
    },
    effect() {
        let eff = new Decimal(1)
        eff = player.urebirth.points.mul(2).max(1)
        return eff
    },
    effectDescription() {
        return " which boost Rebirth by x" + tmp.urebirth.effect
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
})

addLayer("prestige", {
    name: "Prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Prestige", // Name of prestige currency
    baseResource: "Ultra Rebirth", // Name of resource prestige is based on
    baseAmount() {return player.urebirth.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: Decimal.reciprocate("10^^1e300"), // Prestige currency exponent
    gainMult(){
        let gain = new Decimal(1)
        gain = gain.mul(tmp.uprestige.effect)
        return gain
    },
    effect() {
        let eff = new Decimal(1)
        eff = player.prestige.points.mul(2).max(1)
        return eff
    },
    effectDescription() {
        return " which boost Ultra Rebirth by x" + tmp.prestige.effect + " and add +" + tmp.prestige.effect + " to money gain"
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
})

addLayer("uprestige", {
    name: "Ultra Prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "UP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Ultra Prestige", // Name of prestige currency
    baseResource: "Prestige", // Name of resource prestige is based on
    baseAmount() {return player.prestige.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: Decimal.reciprocate("10^^1e300"), // Prestige currency exponent
    gainMult(){
        let gain = new Decimal(1)
        gain = gain.mul(tmp.megamulti.effect)
        return gain
    },
    effect() {
        let eff = new Decimal(1)
        eff = player.uprestige.points.mul(2).max(1)
        return eff
    },
    effectDescription() {
        return " which boost Prestige by x" + tmp.uprestige.effect + " and add +" + tmp.uprestige.effect + " to money gain"
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
})

addLayer("megamulti", {
    name: "Mega Multiplier", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Mega Multiplier", // Name of prestige currency
    baseResource: "Ultra Prestige", // Name of resource prestige is based on
    baseAmount() {return player.uprestige.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: Decimal.reciprocate("10^^1e300"), // Prestige currency exponent
    effect() {
        let eff = new Decimal(1)
        eff = player.megamulti.points.mul(2).max(1)
        return eff
    },
    effectDescription() {
        return " which boost Ultra Prestige and Rebirth by x" + tmp.megamulti.effect
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
})