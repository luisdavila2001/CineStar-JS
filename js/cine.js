const getCine = async () => {

	const id = (new URLSearchParams(window.location.search)).get(`id`)
	//const data = await fetch(`http://localhost/cinestar_sweb_php/cines`); //localhost

	const data = await fetch(`https://webcinestar001.000webhostapp.com/cinestar_sweb_php/cines/${id}`)  //00webhost
	const data2 = await fetch(`https://webcinestar001.000webhostapp.com/cinestar_sweb_php/cines/${id}/tarifas`)
	const data3 = await fetch(`https://webcinestar001.000webhostapp.com/cinestar_sweb_php/cines/${id}/peliculas`)

	if (data.status == 200) {
		const cine = await data.json()
		const cine2 = await data2.json()
		const cine3 = await data3.json()

		let html = `<h2>${cine.RazonSocial}</h2>
				<div class="cine-info">
					<div class="cine-info datos">
						<p>${cine.Direccion} - ${cine.Detalle}</p>
						<p>Teléfono: ${cine.Telefonos}</p>
						<br/>
				`
		cine2.forEach(cine2 => {
			html += `
				<div class="tabla-cine">	
					<div class="fila">
						<div class="celda-titulo">${cine2.DiasSemana}</div>
							<div class="celda">${cine2.Precio}</div>
					</div>	
				</div>
				
		`});
		html +=
			`
			<div class="aviso">
				<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
			</div>
			</div>
			<img src="img/cine/${cine.id}.2.jpg"/>
			
			<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
			<div class="cine-info peliculas">
				<div class="tabla">
					<div class="fila">
						<div class="celda-cabecera">Películas</div>
						<div class="celda-cabecera">Horarios</div>
					</div>
				</div>
		`
		cine3.forEach(cine3 => {
			html += `
				<div class="fila-cine">
					<div class="celda-titulo">${cine3.Titulo}</div>
					<div class="celda">${cine3.Horarios}</div>
				</div>
		`});
		html +=
			`
		</div>
			</div>
				</div>
					<div>
						<img class="img-2" style="float:left;" src="img/cine/${cine.id}.3.jpg" alt="Imagen del cine"/>
						<br><span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
							Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
							<br/><br/>
							Visitános y diviértete con nosotros. 
							<br/><br/>
							<b>CINESTAR</b>, siempre pensando en tí. 
						</span>		
					</div>
			
        `



		document.getElementById('contenido-interno').innerHTML = html
	}
}



getCine();