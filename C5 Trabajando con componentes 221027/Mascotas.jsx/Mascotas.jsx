export const Mascotas = () => {

  const mascotas = [
    {
      nombre: "roco",
      edad:5,
      sexo: "macho",
      raza: "boxer",
      tamaño:"grande"
    },
    {
      nombre: "toby",
      edad:2,
      sexo: "macho",
      raza: "obejero",
      tamaño:"grande"
    },
    {
      nombre: "alma",
      edad:7,
      sexo: "hembra",
      raza: "salchica",
      tamaño:"pequeña"
    },
    {
      nombre: "logan",
      edad:2,
      sexo: "masculino",
      raza: "pitbull",
      tamaño:"grande"
    }
  ]

  return (
    <div>
      <h1>Cliente canino veterinaria</h1>
      <ul>
        {mascotas.map((item, index) => (
          <li key={index}>
            <h2>NOMBRE: {item.nombre}</h2>
            <p>EDAD: {item.edad}</p>
            <p>RAZA: {item.raza}</p>
            <p>TAMAÑO: {item.tamaño}</p>
            <p>SEXO: {item.sexo}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}