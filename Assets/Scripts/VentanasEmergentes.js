#pragma strict

public var cameraActivar :GameObject;
public var cameraDesactivar :GameObject;
var tituloBoton: String;
var posX: int;
var posY: int;
var ancho: int;
var largo: int;


function OnGUI () {
	if ( GUI.Button( Rect (Screen.width/2 - posX, Screen.height - posY, ancho, largo), tituloBoton ) ) {
		cameraActivar.SetActive(true);
		cameraDesactivar.SetActive(false);
	}
}