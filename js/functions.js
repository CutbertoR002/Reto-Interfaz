//Variables identificadas por id para guardar la info
var lista = document.getElementById("lista");
var	tareaLeer = document.getElementById("tareaAdd");
var	IntegranteLeer = document.getElementById("integranteAdd");
var	registroLeer = document.getElementById("registroAdd");
var	entregaLeer = document.getElementById("entregaAdd");
var	StatusLeer = document.getElementById("statusAdd");
var	agregarNuevaTarea = document.getElementById("buttonAdd");


function agregarTarea(){
	var contador = 0;
	var tarea = tareaLeer.value;
	var	integrante= IntegranteLeer.value;
	var	registro= registroLeer.value;
	var	entrega= entregaLeer.value;
	var	status= StatusLeer.value;
	var	nuevaTarea = document.createElement("TR");
	var	button1 = document.createElement('input'),
	contenido = document.createTextNode(tarea),
	contenido1 = document.createTextNode(integrante),
	contenido2 = document.createTextNode(registro),
	contenido3 = document.createTextNode(entrega),
	contenido4 = document.createTextNode(status);
// creacion del boton para eliminar
	button1.type = 'button'; 
	button1.classList.add("eliminarcont");
	button1.value = 'Borrar';
	//arreglo para contener todos los datos y despues solo recorrerlo
		var contenedorDat = [contenido, contenido1, contenido2,
					contenido3, contenido4, button1];
		// do para manejar el arreglo de registros
		
		do {
			//crea espacios para agregar los registros
			var	enlace = document.createElement("TD");
			enlace.appendChild(contenedorDat[contador]);
			//se prepara para dar el salto a la siguiente columna
			nuevaTarea.appendChild(enlace);
			contador += 1;
		} while ( contador < 6);
		// se agrega a la lista
		lista.appendChild(nuevaTarea);
		

		myApp = new function(){
			const url="http://testingserver.com.mx/tasks/";
			this.addTask = async function(Task, Status, Responsable, DateCompliance, DateRegister){
				const methodSend = "POST";
				const headersSend = {
					'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
				}
				const info = new URLSearchParams({
					Task : tarea,
					Status : status,
					Responsable : integrante,
					DateCompliance : entrega,
					DateRegister : registro
				})
				const response = await fetch(url,{method: methodSend, headers : headersSend, body: info})
				const data = await response.json();
			}
			this.deleteTask = async function(idTask){
				const methodSend = "DELETE";
				deleteUrl = URL + idTask;
				const response = await fetch(deleteUrl,{method: methodSend});
				const data = await response.json();
			}
		}
		var resultado1 = window.confirm('Confirmación para agregar a la API?');
		if (resultado1 === true) {
			myApp.addTask({tarea},{status},{integrante},{entrega},{registro});
		window.alert('Accion completada!.');
		} else { 
		window.alert('Accion cancelada...');
		}
		

		//llamada para el boton eliminar de jQuery
	$('body').on('click', '.eliminarcont', function() {
		var resultado = window.confirm('Confirmación de eliminación?');
		if (resultado === true) {
			$(this).parents("TR").remove(); 
			myApp.deleteTask( idTask,{agregarNuevaTarea} );
		window.alert('Eliminación completa!.');
		} else { 
		window.alert('Operación cancelada...');
		}
	})
}
agregarNuevaTarea.addEventListener("click", agregarTarea);

	//llamada del boton agregar





//tiempo 
showTime();
function showTime(){
	myDate = new Date();
	hours = myDate.getHours();
	minutes = myDate.getMinutes();
	seconds = myDate.getSeconds();
	if (hours < 10) hours = 0 + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
	setTimeout("showTime()", 1000);
}

