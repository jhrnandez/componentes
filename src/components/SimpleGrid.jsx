export default function SimpleGrid({ children, id }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id={id}>
      {children}
    </div>
  );
}
