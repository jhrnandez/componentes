import clsx from "clsx";
import NextLink from "next/link";

/**
 * This is a React component for a customizable button with different variants, colors, sizes, and
 * disabled state.
 * @returns a button component with customizable properties such as variant, color, size, disabled,
 * children, onClickEvent, bgColors, outlineColors, and butonSize. The button component is styled based
 * on the selected variant and properties passed as props. IT RETURNS A NEXT LINK COMPONENT IF HREF IS PASSED.
 */

/*
  El componente Boton recibe las siguientes propiedades:
  - variant: filled | outlined
  - color: primary | gray | green | blue | red | pink | cyan (son personalizables con la propiedad bgColors)
  - size: small | medium | large (son personalizables son personalizables con la propiedad outlineColors)
  - disabled: true | false
  - children: contenido del botón
  - onClickEvent: función que se ejecuta al hacer clic en el botón
  - bgColors: colores de fondo del botón
  - outlineColors: colores de borde del botón
  - butonSize: tamaños del botón
  - href: ruta a la que se redirige el botón

*/

const defaultColors = {
  primary: "bg-indigo-600",
  gray: "bg-gray-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
  red: "bg-red-600",
  pink: "bg-pink-600",
  cyan: "bg-cyan-600",
};

const defaultOutlineColors = {
  primary: "border-indigo-600 hover:bg-indigo-600",
  gray: "border-gray-600 hover:bg-gray-600",
  blue: "border-blue-600 hover:bg-blue-600",
  green: "border-green-600 hover:bg-green-600",
  red: "border-red-600 hover:bg-red-600",
  pink: "border-pink-600 hover:bg-pink-600",
  cyan: "border-cyan-600 hover:bg-cyan-600",
};

const defaultSizes = {
  small: `px-2 py-1 text-md`,
  medium: `px-3 py-1.5 text-xl`,
  large: `px-6 py-2 text-2xl`,
};

export default function Boton({
  variant = "filled",
  color = "primary",
  size = "medium",
  disabled = true,
  children,
  onClickEvent = () =>
    console.log(
      "No se ha definido un evento clic. Utiliza la propiedad onClickEvent para definirlo."
    ),
  bgColors = defaultColors,
  outlineColors = defaultOutlineColors,
  butonSize = defaultSizes,
  href = null,
}) {
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
    <>
      {href ? (
        <NextLink href={href} className={className}>
          {children}
        </NextLink>
      ) : (
        <button
          type="button"
          className={className}
          disabled={!disabled}
          onClick={onClickEvent}
        >
          {children}
        </button>
      )}
    </>
  );
}
