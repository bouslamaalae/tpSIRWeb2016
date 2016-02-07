
// La cr�ation d'un Dnd requi�re un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au d�part.
function DnD(canvas, interactor) {
	// D�finir ici les attributs de la 'classe'

	this.x1=0;
	this.x2=0;
	this.y1=0;
	this.y2=0;
	this.clic=false;
	
	// Developper les 3 fonctions g�rant les �v�nements
	
	this.fctClick = function(evt) {
		this.clic = true;
		var res = getMousePosition(canvas, evt)
		this.x1 = res.x;
		this.x2 = res.y;
		console.log(this.clic);
		console.log(this.x1);
		console.log(this.x2);
		
	}.bind(this);
	
	this.fctDeplacer = function(evt) {
		this.clic = true;
		var res = getMousePosition(canvas, evt)
		this.y1 = res.x;
		this.y2 = res.y;
		console.log(this.clic);
		console.log(this.y1);
		console.log(this.y2);
		
	}.bind(this);
	
	this.fctRelacher = function(evt){
		this.clic = false;
		console.log(this.clic);
		
	}.bind(this);

	// Associer les fonctions pr�c�dentes aux �v�nements du canvas.
	canvas.addEventListener('mousedown', this.fctClick, false);
	canvas.addEventListener('mousemove', this.fctDeplacer, false);
	canvas.addEventListener('mouseup', this.fctRelacher, false);

};


// Place le point de l'�v�nement evt relativement � la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



