#pragma strict

public var cameraActivar :GameObject;
public var cameraDesactivar :GameObject;

var posX: int;
var posY: int;
var ancho: int;
var largo: int;
var tituloBoton: String; 

function OnGUI () {
if ( GUI.Button( Rect (Screen.width - posX, Screen.height - posY, ancho, largo), tituloBoton ) ) {
	cameraActivar.SetActive(true);
	cameraDesactivar.SetActive(false);
	}
	
	
}
