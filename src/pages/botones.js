import Toastify from "toastify-js";

import Boton from "@/components/boton";
const colors = ["primary", "gray", "green", "red"];
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
    <div className="space-y-10">
      <div className=" space-y-5">
        {sizes.map((size) => (
          <div key={size}>
            <h3 className="text-2xl font-bold">{size}</h3>
            <div className="space-x-5">
              {colors.map((color) => (
                <Boton
                  key={color}
                  color={color}
                  variant="filled"
                  size={size}
                  onClickEvent={(e) => copyClassToClipboard(e)}
                >
                  {color}
                </Boton>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" space-y-5">
        {sizes.map((size) => (
          <div key={size}>
            <h3 className="text-2xl font-bold">{size}</h3>
            <div className="space-x-5">
              {colors.map((color) => (
                <Boton
                  key={color}
                  color={color}
                  variant="outlined"
                  size={size}
                  onClickEvent={(e) => copyClassToClipboard(e)}
                >
                  {color}
                </Boton>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
