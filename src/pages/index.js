export default function Home() {
  return (
    <main className="text-xl space-y-3">
      <h1 className="text-4xl font-bold">Componentes con Tailwind CSS</h1>
      <p>
        Esta es una colección de componentes que he ido creando para mis
        proyectos personales. Siéntete libre de utilizarlos en tus proyectos.
        Muchos componentes están en desarrollo o son versiones iniciales, por lo
        que pueden tener errores o no ser del todo funcionales.
      </p>
      <p>
        Si quieres contribuir a este proyecto o realizar un fork, puedes
        encontrar el repositorio en Github{" "}
        <a
          href="https://github.com/jhrnandez/componentes.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          aquí
        </a>
        .
      </p>
    </main>
  );
}
