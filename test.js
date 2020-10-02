const { sleep } = require("deasync");
var openlife = require("openlife");
var Test = function() {
    this.engine = openlife.Engine.create(this);
    this.engine.client.config = {
        ip: "thinqbator.app"
    };
    this.engine.client.onClose = function()
    {
        console.log("client closed");
    }
    this.engine.relayPort = 8000;
    this.engine.connect(false,true);
    console.log("running");
};
Test.prototype = {
    playerUpdate: function(instances) {
        console.log("instance " + instances);
        if (this.player == null) 
        {
            this.player = instances.pop();
            this.engine.program.setPlayer(this.player);
        }
    },
    playerMoveStart: function(move) {},
    playerOutOfRange: function(list) {},
    playerName: function(id, firstName, lastName) {},
    apocalypse: function() {},
    apocalypseDone: function() {},
    posse: function(killer, target) {},
    following: function(follower, leader, color) {},
    exiled: function(target, id) {},
    cursed: function(id, level, word) {},
    curseToken: function(count) {},
    curseScore: function(excess) {},
    badBiomes: function(id, name) {},
    vogUpdate: function() {},
    photo: function(x, y, signature) {},
    shutdown: function() {},
    global: function(text) {},
    war: function(a, b, status) {},
    learnedTools: function(list) {},
    toolExperts: function(list) {},
    toolSlots: function(total) {},
    babyWiggle: function(list) {},
    saysLocation: function(x, y, text) {},
    dying: function(id, sick) {},
    says: function(id, text, curse) {
        console.log("text: " + text);
        if (text.indexOf("BOT") > -1) {
            console.log("THAT IS ME");
        }
    },
    emot: function(id, index, sec) {},
    mapChunk: function(instance) {},
    mapChange: function(change) {},
    foodChange: function(store, capacity, ateId, fillMax, speed, responsible) {},
    heatChange: function(heat, foodTime, indoorBonus) {},
    frame: function() {},
    lineage: function(list, eve) {},
    healed: function(id) {},
    monument: function(x, y, id) {},
    grave: function(x, y, id) {},
    graveOld: function(x, y, pid, poid, age, name, lineage) {},
    graveMove: function(xs, ys, xd, yd, swapDest) {},
    ownerList: function(x, y, list) {},
    valley: function(spacing, offset) {},
    flight: function(id, x, y) {},
    homeland: function(x, y, name) {},
    craving: function(id, bonus) {},
    flip: function(x, y) {}
};
new Test();