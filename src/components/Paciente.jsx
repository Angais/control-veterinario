import Swal from 'sweetalert2';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, eliminar',
            customClass: {
                confirmButton: 'btn btn-danger',
                cancelButton: 'btn btn-secondary'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El paciente ha sido eliminado correctamente.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        });
    }

    return (
        <div className="mx-5 my-7 bg-white shadow-lg px-8 py-10 rounded-xl hover:shadow-xl transition-shadow">
            <div className="space-y-4">
                <InfoField label="Nombre" value={nombre} />
                <InfoField label="Dueño" value={propietario} />
                <InfoField label="Email" value={email} />
                <InfoField label="Fecha de alta" value={fecha} />
                <InfoField label="Síntomas" value={sintomas} />
            </div>

            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-6 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

const InfoField = ({ label, value }) => (
    <p className="font-bold text-gray-700 uppercase">
        {label}: {' '}
        <span className="font-normal normal-case">{value}</span>
    </p>
);

export default Paciente;
