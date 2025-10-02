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
    effect() {
        let eff = new Decimal(1)
        eff = player.multi.points.pow_base(2)
        return eff
    },
    effectDescription() {
        return " which boost Money by x" + tmp.multi.effect
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    doReset(resettingLayer) {
        let keep = [];
        if (layers[resettingLayer].row > this.row) layerDataReset("multi", keep)
    },
})