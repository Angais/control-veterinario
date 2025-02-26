import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre,setNombre] = useState(''); 
    const [propietario,setPropietario] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [fecha,setFecha] = useState(''); 
    const [sintomas,setSintomas] = useState('');    

    const [error, setError] = useState(false)

    useEffect(() => {
        if( Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }           
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return;
        } 
        setError(false)

        // Objeto de paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id) {
            // Editando el registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => 
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState
            )
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            // Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])
        }

        // Reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            
            <p className="text-lg mt-5 text-center mb-10">
                Añadir Pacientes y {''}
                <span className="text-green-500 font-bold">Administrarlos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <Error><p>Rellena todos los campos</p></Error>}
                
                <div className="mb-5">
                    <label htmlFor="paciente" className="block text-gray-800 uppercase font-bold">
                        Nombre del Paciente
                    </label>
                    <input
                        id="paciente" 
                        type="text" 
                        placeholder="Nombre del paciente" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-800 uppercase font-bold">
                        Nombre del Dueño
                    </label>
                    <input
                        id="propietario" 
                        type="text" 
                        placeholder="Nombre del dueño" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e)=> setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-800 uppercase font-bold">
                        Email de Contacto
                    </label>
                    <input
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-800 uppercase font-bold">
                        Alta del paciente
                    </label>
                    <input
                        id="alta" 
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e)=> setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-800 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Sintomas del paciente"
                        value={sintomas}
                        onChange={(e)=> setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    className="bg-green-500 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-all"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    );
}

export default Formulario;