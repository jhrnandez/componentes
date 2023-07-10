import Boton from "@/components/Boton";
import SimpleFlex from "@/components/SimpleFlex";
import SimpleGrid from "@/components/SimpleGrid";
import Toastify from "toastify-js";
import AppLayout from "@/components/AppLayout";

export default function Layouts() {
  const copyClassToClipboard = (id) => {
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

    //get element and idenfity tag name
    const element = document.getElementById(id);

    //copy the whole element
    const elementString = element.outerHTML;

    //copy to clipboard
    navigator.clipboard.writeText(elementString);
  };

  return (
    <main>
      <div className="my-5">
        <h1 className="text-4xl font-bold">Layouts Tailwind</h1>
        <p className="text-xl">
          Da clic en el layout que quieras utilizar y copiaras el código
          tailwind a tu portapapeles.
        </p>
      </div>

      <div className="space-y-10">
        <div>
          <SimpleFlex className="flex justify-between items-center">
            <h2>Columnas Grid Template</h2>
            <Boton onClickEvent={(e) => copyClassToClipboard("simple-grid")}>
              Copiar al portapapeles
            </Boton>
          </SimpleFlex>
          <SimpleGrid id="simple-grid">
            <div className="h-96 bg-gray-50 border-dashed border"></div>
            <div className="h-96 bg-gray-50 border-dashed border"></div>
            <div className="h-96 bg-gray-50 border-dashed border"></div>
          </SimpleGrid>
        </div>
        <div>
          <SimpleFlex className="flex justify-between items-center">
            <h2>Columnas Flex Template</h2>
            <Boton onClickEvent={(e) => copyClassToClipboard("simple-flex")}>
              Copiar al portapapeles
            </Boton>
          </SimpleFlex>
          <SimpleFlex id="simple-flex">
            <div className="h-96 w-3/12 bg-gray-50 border-dashed border"></div>
            <div className="h-96 flex-1 bg-gray-50 border-dashed border"></div>
          </SimpleFlex>
        </div>
        <div>
          <SimpleFlex className="flex justify-between items-center">
            <h2>App Layout</h2>
            <Boton
              onClickEvent={(e) => copyClassToClipboard("app-layout")}
              color="pink"
            >
              Copiar al portapapeles
            </Boton>
            <Boton href={`/layouts/app-layout`} color="pink">
              Ver ejemplo
            </Boton>
          </SimpleFlex>
          <AppLayout>Main</AppLayout>
        </div>
      </div>
    </main>
  );
}
