#pragma strict
public var cameraAyuda :GameObject;
public var cameraMain :GameObject;

function Start () {

}

function Update () {

}

function OnGUI() {
	GUI.Label ( Rect (Screen.width / 2- 50, 10, 100, 30), "Menu Principal" );
	
	if ( GUI.Button ( Rect (Screen.width / 2 - 40, 30, 80, 30), "Aprender" ) ) {
		Application.LoadLevel("MenuAprender");
	}
	
	if ( GUI.Button ( Rect (Screen.width / 2 - 40, 70, 80, 30), "Jugar" ) ) {
		Application.LoadLevel("MenuJugar");
	}
	
	if ( GUI.Button ( Rect (Screen.width / 2 - 40, 110, 80, 30), "Ayuda" ) ) {
		cameraAyuda.SetActive(true);
		cameraMain.SetActive(false); 
	}
	
	if ( GUI.Button ( Rect (Screen.width / 2 - 40, 150, 80, 30), "Salir" ) ) {
		Application.Quit();
	}
}