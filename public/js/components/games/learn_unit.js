export default (p) => {
  let x = 0;
  let y = 0;
  p.setup = () => {
    p.createCanvas(320, 400);
    // p.drawingContext.shadowOffsetX = 5;
    // p.drawingContext.shadowOffsetY = -5;
    // p.drawingContext.shadowBlur = 10;
    // p.drawingContext.shadowColor = "yellow";
    // p.background(200);
    // p.ellipse(p.width/2, p.height/2, 50, 50);
    let y = 20;
    const gap_h = 70
    p.rect(30, y, 55, 55, 10);
    p.rect(30, y+=gap_h, 55, 55, 10);
    p.rect(30, y+=gap_h, 55, 55, 10);
    p.rect(30, y+=gap_h, 55, 55, 10);
    p.rect(30, y+=gap_h, 55, 55, 10);

    y = 20;
    p.fill('#FFC001');
    p.stroke('#FFC001');
    p.drawingContext.shadowOffsetX = 10;
    p.drawingContext.shadowOffsetY = -10;
    p.drawingContext.shadowBlur = 10;
    p.drawingContext.shadowColor = "black";
    p.rect(230, y, 55, 55, 10);
    p.rect(230, y+=gap_h, 55, 55, 10);
    p.rect(230, y+=gap_h, 55, 55, 10);
    p.rect(230, y+=gap_h, 55, 55, 10);
    p.rect(230, y+=gap_h, 55, 55, 10);
  };
  p.draw = () => {
    // p.ellipse(p.width/2, p.height/2, x % 100, y % 100);
    // x = x + 5;
    // y = y + 5;
  }
}
