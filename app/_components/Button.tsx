export const Button = ({
  text,
  className,
  onClick,
  children,
}: {
  text: string;
  className: string;
  onClick: () => void;
  children?: any;
}) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
      {text}
    </div>
  );
};
