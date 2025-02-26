function Header() {
    return(
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Control {''}
                <span className="text-green-500">Veterinario</span>
            </h1>
            <p className="text-xl mt-5 text-center">
                Administra tus {''}
                <span className="text-green-500 font-bold">Pacientes y Citas</span>
            </p>
        </>
    );
}

export default Header;