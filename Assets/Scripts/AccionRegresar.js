#pragma strict

var tituloBoton: String;
var rutaDestino: String;
var posX: int;
var posY: int;
var ancho: int;
var largo: int;

function OnGUI () {
	if ( GUI.Button( Rect (Screen.width/2 - posX, Screen.height - posY, ancho, largo), tituloBoton ) ) {
		Application.LoadLevel(rutaDestino);
	}
}