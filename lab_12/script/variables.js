const LEFT = 37;
const RIGHT = 39;
const UP = 38;
const DOWN = 40;

const SPACE = 32;
const PROBABILITY = 0.005;
const MOVE = 20;

const playerMove = {
    left: -MOVE,
    right: MOVE,
    up: -MOVE,
    down: MOVE
};

var accelerometer = {left: -2, right: 2, speedUp: 7, speedDown: 4};
var INTERVAL_TIME = 0.005;
var timer;

const colors = ['red', 'orange', 'green', 'yellow', 'blue'];

var sizeX = window.innerWidth / 100;
var sizeY = (window.innerHeight - 45) / 100;

var numberOfPartsX = Math.floor(sizeX * 100);
var numberOfPartsY = Math.floor(sizeY * 100);

var ball = { 
    radius: sizeY, 
    bounce: 1, 
    positionX: numberOfPartsX * 0.05, 
    positionY: numberOfPartsY * 0.02, 
    velX: 0.8, 
    velY: -1 
};