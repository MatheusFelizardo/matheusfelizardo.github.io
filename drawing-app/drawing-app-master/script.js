console.log("starting the app!");

const closePopup = () => {
    var popup = document.querySelector("#onstart-popup");
    var outer = document.querySelector("#outer-popup");
    popup.style.display = "none";
    outer.style.display = "none";
}

// Add class "active" for brushBtn when select the color
const activeBrush = () => {
  const brushBtn = document.getElementById('brush-tool');
  brushBtn.classList.add("active")
}

// creating a canvas
const createCanvas = () =>{
  const canvasDiv = document.querySelector("#canvasDiv");
  const canvas = document.createElement('canvas');

  const clearBtn=document.getElementById('clear');
  const saveBtn = document.getElementById('save');

  // color selection modal
  const blackBtn = document.querySelector('div[data-color="black"]');
  const greenBtn = document.querySelector('div[data-color="green"]');
  const blueBtn = document.querySelector('div[data-color="blue"]');
  const purpleBtn = document.querySelector('div[data-color="purple"]');
  const redBtn = document.querySelector('div[data-color="red"]');

  // tools
  const brushBtn = document.getElementById('brush-tool');
  const eraserBtn = document.getElementById('eraser-tool');
  const toolLineWidth = document.getElementById('tool-line-width');
  const toolColor = document.getElementById('tool-color');

  let canvasHeight = window.innerHeight-100;
  let canvasWidth  = window.innerWidth-100;

  // coordinates arrays
  var clickX = new Array();
  var clickY = new Array();
  var clickDrag = new Array();

  // context variables
  var tool = 'brush';
  var paint;
  var color = '#000000';
  var lineWidth = 5;

  clearBtn.addEventListener('click', () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);  // Clears the canvas
    context.fillStyle = '#fff'; 
    context.fillRect(0,0,context.canvas.width, context.canvas.height);
    
    clickX=[];
    clickY=[];
    clickDrag=[];
    paint=false;
  });

  brushBtn.addEventListener('click', () => {
    tool = 'brush';
    brushBtn.classList.add("active")
    eraserBtn.classList.remove("active")
    canvas.style.cursor="url(assets/pencil.png), auto"

  });

  eraserBtn.addEventListener('click', () => {
    tool = 'eraser';
    eraserBtn.classList.add("active")
    brushBtn.classList.remove("active")
    canvas.style.cursor="url(assets/eraser.png), auto"
  });

  toolLineWidth.addEventListener('change', () => {
    lineWidth = toolLineWidth.value;
  });

  toolColor.addEventListener('change', () => {
    selectColor(toolColor.value);
    toolColor.setAttribute('background-color', color);
  });

  canvas.setAttribute('id','canvas');
  canvas.setAttribute('width',canvasWidth);
  canvas.setAttribute('height',canvasHeight);
  canvas.setAttribute('class','border');
  canvas.setAttribute('background-color','#cb3594');
  canvas.setAttribute('style', 'cursor:url(assets/pencil.png), auto');

  
  canvasDiv.appendChild(canvas);

  if(typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }
  context = canvas.getContext("2d");
  context.fillStyle="#fff";
  context.fillRect(0,0,context.canvas.width, context.canvas.height);

  // changes the color state of the canvas based on box clicked in welcome modal
  function selectColor(newColor) {
    activeBrush();
    switch(newColor) {
      case 'green':
        color = "#baff33";
        toolColor.querySelector("option").setAttribute("selected","selected")
        closePopup();
        break;
      case 'red':
        color = "#ff2b2b";
        closePopup();
        break;
      case 'purple':
        color = "#b700ff";
        closePopup();
        break;
      case 'blue':
        color = "#006eff";
        closePopup();
        break;
      case 'black':
      default:
        color = "#000000";
        closePopup();
        break;
    }
  }

  // add click listener for all color options in welcome modal
  blackBtn.addEventListener('click', (event) => selectColor(event.target.dataset.color));
  blueBtn.addEventListener('click', (event) => selectColor(event.target.dataset.color));
  greenBtn.addEventListener('click', (event) => selectColor(event.target.dataset.color));
  purpleBtn.addEventListener('click', (event) => selectColor(event.target.dataset.color));
  redBtn.addEventListener('click', (event) => selectColor(event.target.dataset.color));

  function addClick(x, y, dragging)
  {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }

  function draw() {
    for(var i=0; i < clickX.length; i++) {
      if (tool === 'eraser') {
        context.strokeStyle = '#fff';
        context.globalCompositeOperation = 'lighten';
      } else {
        context.globalCompositeOperation = 'source-over';
        
      }

      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
      } else{
        context.moveTo(clickX[i]-1, clickY[i]);
      }
      context.lineTo(clickX[i], clickY[i]);
    }
    context.closePath();
    context.stroke();
  }

  function redraw(){
    context.strokeStyle = color;
    context.lineJoin = 'round';
    context.lineWidth = lineWidth;    
    draw();
  }
        
  saveBtn.addEventListener('click', () => {
    var dataURL = canvas.toDataURL('image/jpg');
    let savedImg = document.getElementById('savedImg');
    savedImg.setAttribute('src',dataURL);
    savedImg.style.position="relative"
    savedImg.style.width="auto"
    savedImg.style.right="0"

    // If you wanna open the image in a new tab
    // var win = window.open();
    // win.document.write("<img src='"+canvas.toDataURL('image/png')+"' alt=''/>");
  });

  canvas.addEventListener('mousedown',function(e){
    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop+32);
    
    redraw();
  });

  canvas.addEventListener('mousemove',function(e){
    if(paint) {
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop +32, true);
      redraw();
    }          
  });

  canvas.addEventListener('mouseup',function(e){
    paint = false;
  });


}


createCanvas();


