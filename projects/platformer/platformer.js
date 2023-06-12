$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
}

      if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    function setup() {
    }
      if (firstTimeSetup) 
    //create walls
     createPlatform(-50, -50, canvas.width + 100, 50); //top
     createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
     createPlatform(-50, -50, 50, canvas.height + 500); //bottom
     createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(175,650,175,10);
createPlatform(525,600,175,10);
createPlatform(875,550,175,10);
createPlatform(1050,475,175,10);
createPlatform(700,400,175,10);
createPlatform(0,350,175,10);
createPlatform(350,300,175,10);
createPlatform(700,200,175,10);
createPlatform(1050,120,175,10);
createPlatform(0,100,550,10);
createCollectable("popcorn",1137,425);
createCollectable("popcorn",10,700);
createCollectable("popcorn",87,50);
createCannon("bottom",150,1000);
createCannon("left",700,1000);
createCannon("top",350,1000);