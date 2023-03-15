"use strict";
// Array to store all the created shapes
let shapesArr = [];

// Function to create a new shape object and add it to the array
function createShape() {
  const shapeSelect = document.getElementById("shapes");
  const colorSelect = document.getElementById("colors");
  const shapeName = shapeSelect.value;
  const shapeColor = colorSelect.value;

  if (shapesArr.length >= 20) {
    const message = document.querySelector(".message");
    message.textContent = "Maximum number of shapes reached!";
    return;
  }

  let shape;
  if (shapeName === "circle") {
    shape = new Circle(shapeColor);
  } else {
    shape = new Square(shapeColor);
  }

  shapesArr.push(shape);
  addShapeToGrid(shape);
}

// Function to add a shape div to the grid
function addShapeToGrid(shape) {
  const shapesContainer = document.getElementById("shapes-container");
  const shapeDiv = document.createElement("div");
  shapeDiv.className = "shape " + shape.name;
  shapeDiv.style.backgroundColor = shape.color;
  shapeDiv.addEventListener("click", function () {
    showMessage(shape.getInfo());
  });
  shapesContainer.appendChild(shapeDiv);
}

// Function to show message in the message div
function showMessage(message) {
  const messageDiv = document.querySelector(".message");
  messageDiv.innerText = message;
}

// Shape class
class Shape {
  constructor(color) {
    this._color = color;
  }

  get name() {
    return "shape";
  }

  get color() {
    return this._color;
  }

  getInfo() {
    return `This is a ${this.name} with ${this.color} color.`;
  }
}

// Circle class
class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  get name() {
    return "circle";
  }
}

// Square class
class Square extends Shape {
  constructor(color) {
    super(color);
  }

  get name() {
    return "square";
  }
}

// Add event listener to the create button
const createButton = document.getElementById("create");
createButton.addEventListener("click", createShape);
