
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
   
    this.formes = new Array();
};

function Form(couleur, epaisseur) {
    this.epaisseur=epaisseur;
	this.couleur=couleur;
    
};

function Rectangle(x1, x2, largeur , hauteur, couleur, epaisseur) {
    Form.call(this, couleur, epaisseur);
    this.x1=x1;
    this.x2=x2;
    this.largeur=largeur;
    this.hauteur=hauteur;
};
Rectangle.prototype = new Form();

function Line(x1, x2, y1, y2, couleur,epaisseur) {
    Form.call(this, couleur, epaisseur);
    this.x1=x1;
    this.x2=x2;
    this.y1=y1;
    this.y2=y2;
};
Rectangle.prototype = new Form();