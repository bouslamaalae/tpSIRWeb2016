
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.rect(this.x1, this.x2, this.x1+this.epai, this.x2+this.epai);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
//TODO Manager color

    ctx.beginPath();
    ctx.moveTo(this.x1, this.x2);
    ctx.lineTo(this.y1, this.y2);
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};


