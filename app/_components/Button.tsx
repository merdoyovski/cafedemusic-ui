export const Button = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className: string;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className={className}>
      {text}
    </div>
  );
};
