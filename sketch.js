var minVal = -2.5;
var maxVal = 2.5;
var angle = 0;
var minSlider;
var maxSlider;

function setup() 
{
    createCanvas(720,720);
    pixelDensity(1);
    minSlider = createSlider(minVal, maxVal, minVal, 0.01);
    maxSlider = createSlider(minVal, maxVal, maxVal, 0.01);

}
function draw(){
    var maxIterations = 100;
    loadPixels();
    for(var x = 0; x < width; x++)
    {
        for(var y = 0; y < height; y++)
        {
            var a = map(x, 0, width, minSlider.value(), maxSlider.value());
            var b = map(y, 0, height, minSlider.value(), maxSlider.value());

            var ca = map(mouseX, 0, width, -1, 1);
            var cb = map(mouseY, 0, width, -1, 1);

            var n = 0;
            while (n < maxIterations)
            {
                var aa = a*a - b*b;
                var bb = 2 * a * b;
                if (abs(a + b) > 4)
                {
                    break;
                }
                a = aa + ca;
                b = bb + cb;
                n++;
            }
            var bright = map(n, 0, maxIterations, 0, 255);

            if (n == maxIterations)
            {
                bright = 0;
            }

            var pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}

