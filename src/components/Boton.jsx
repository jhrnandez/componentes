import clsx from "clsx";

export default function Boton({
  variant = "filled",
  color = "primary",
  size = "medium",
  disabled = true,
  children,
  onClickEvent = () =>
    alert(
      "No se ha definido un evento clic. Utiliza la propiedad onClickEvent para definirlo."
    ),
}) {
  /* definimos los colores que vamos a usar */
  const bgColors = {
    primary: "bg-indigo-600",
    gray: "bg-gray-600",
    green: "bg-green-600",
    red: "bg-red-600",
  };

  /* definimos los colores para outline */
  const outlineColors = {
    primary: "border-indigo-600 hover:bg-indigo-600",
    gray: "border-gray-600 hover:bg-gray-600",
    green: "border-green-600 hover:bg-green-600",
    red: "border-red-600 hover:bg-red-600",
  };

  /* definimos los tamaños */
  const butonSize = {
    small: `px-2 py-1 text-md`,
    medium: `px-3 py-1.5 text-xl`,
    large: `px-6 py-2 text-2xl`,
  };

  /* definimos las variantes */
  const variants = {
    filled: clsx(
      bgColors[color],
      "text-white",
      "rounded-md",
      "hover:bg-opacity-90",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-offset-2",
      "focus:ring-blue-500",
      "focus:ring-opacity-50",
      "cursor-pointer",
      "transition-all duration-200 ease-in-out",
      butonSize[size]
    ),
    outlined: clsx(
      outlineColors[color],
      "text-zinc-700",
      "hover:text-white",
      "border",
      "rounded-md",
      "hover:bg-opacity-90",
      "transition-all duration-200 ease-in-out",
      "cursor-pointer",
      butonSize[size]
    ),
  };

  let className = variants[variant] || variants.filled;

  /* botón deshabilitado */
  if (!disabled) {
    className = clsx(
      className,
      "opacity-50 cursor-not-allowed pointer-events-none border-gray-300"
    );
  }

  return (
    <button
      type="button"
      className={className}
      disabled={!disabled}
      onClick={onClickEvent}
    >
      {children}
    </button>
  );
}

/*
  El componente Boton recibe las siguientes propiedades:
  - variant: filled | outlined
  - color: primary | gray | green | red (son personalizables)
  - size: small | medium | large (son personalizables)
  - disabled: true | false
  - children: contenido del botón
  - onClickEvent: función que se ejecuta al hacer clic en el botón
*/
