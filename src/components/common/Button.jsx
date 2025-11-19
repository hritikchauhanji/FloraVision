const Button = ({ children, onClick, className = "" }) => {
  const baseStyles =
    "px-[50px] h-16 border-2 rounded-xl font-inter text-[28px]";

  return (
    <button onClick={onClick} className={`${baseStyles} ${className} `}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
