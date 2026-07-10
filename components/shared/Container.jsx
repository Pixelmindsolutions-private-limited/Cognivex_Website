export default function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
