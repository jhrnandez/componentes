export default function SimpleFlex({ children, id }) {
  return (
    <div
      id={id}
      className="flex flex-col lg:flex-row justify-between items-center gap-8 my-5"
    >
      {children}
    </div>
  );
}
