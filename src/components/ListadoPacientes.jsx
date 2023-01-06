import Pacientes from "./Pacientes"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className="w-1/2 h-screen">


      {pacientes && pacientes.length ? (
        <> 

<h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

<p className="text-lg mt-5 text-center mb-10 text-indigo-600 font-bold">

 Administra tus {''}
 <span className=" text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
</p>

{pacientes.map ( paciente => (
 <Pacientes
        key={paciente.id}
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
 />
  
 ))}

</>


      )
       : (
        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

<p className="text-lg mt-5 text-center mb-10 text-indigo-600 font-bold">

 Comienza agregando pacientes {''}
 <span className=" text-indigo-600 font-bold text-xl"> y apareceran en este lugar</span>
</p>
        
        
        
        </>
       )}




 
    </div>

   
  )
}

export default ListadoPacientes
