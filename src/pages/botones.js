import Toastify from "toastify-js";

import Boton from "@/components/Boton";
const colors = ["primary", "gray", "blue", "cyan", "pink", "green", "red"];
const sizes = ["small", "medium", "large"];

export default function Botones() {
  const copyClassToClipboard = (e) => {
    Toastify({
      text: "Copiado al portapapeles",
      duration: 1500,
      gravity: "top", // `top` or `bottom`
      style: {
        background: "#4CAF50",
        color: "#fff",
        fontSize: "1.5rem",
      },
    }).showToast();
    const classToCopy = e.target.className;
    let button = `<button class="${classToCopy}">Boton</button>`;
    navigator.clipboard.writeText(button);
  };

  return (
    <main>
      <div className="my-5">
        <h1 className="text-4xl font-bold">Botones Tailwind</h1>
        <p className="text-xl">
          Da clic en el botón que quieras utilizar y copiaras el código tailwind
          a tu portapapeles.
        </p>
      </div>

      <div className="space-y-10">
        <div className=" space-y-5">
          {sizes.map((size) => (
            <div key={size}>
              <h3 className="text-2xl font-bold capitalize pb-2">{size}</h3>
              <div className="flex flex-col lg:flex-row gap-5">
                {colors.map((color) => (
                  <Boton
                    key={color}
                    color={color}
                    variant="filled"
                    size={size}
                    onClickEvent={(e) => copyClassToClipboard(e)}
                  >
                    Hola
                  </Boton>
                ))}
              </div>
              <div className="bg-gray-100 p-5 mt-5 space-y-2">
                {colors.map((color) => (
                  <p className="text-blue-700 child:text-orange-700">
                    {`<Button `} key=
                    <span>"{color}"</span> color=
                    <span>"{color}"</span> variant=
                    <span>"filled"</span> size=
                    <span>"{size}"</span> {`>`}
                    Hola
                    {`</Button>`}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" space-y-5">
          {sizes.map((size) => (
            <div key={size}>
              <h3 className="text-2xl font-bold capitalize pb-2">{size}</h3>
              <div className="flex flex-col lg:flex-row gap-5">
                {colors.map((color) => (
                  <Boton
                    key={color}
                    color={color}
                    variant="outlined"
                    size={size}
                    onClickEvent={(e) => copyClassToClipboard(e)}
                  >
                    Hola
                  </Boton>
                ))}
              </div>
              <div className="bg-gray-100 p-5 mt-5 space-y-2">
                {colors.map((color) => (
                  <p className="text-blue-700 child:text-orange-700">
                    {`<Button `} key=
                    <span>"{color}"</span> color=
                    <span>"{color}"</span> variant=
                    <span>"outlined"</span> size=
                    <span>"{size}"</span> {`>`}
                    Hola
                    {`</Button>`}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
