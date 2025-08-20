function ComponentX ({datos}){
	const handleDeleteDato = (id) =>{

	}
	return (
		<div>
			<h1>Estos son mis datos</h1>
			{
				datos.map(dato => {
					return (
						<div>
							<h2>{dato.nombre}</h2>
							<button>eliminar</button>
						</div>
					)
				})
			}
		</div>
	)
}