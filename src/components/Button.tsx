import type { ReactNode } from "react";


interface Props {
  children: ReactNode;
  onClick: () => void;
  // ? means this property is optional
  // 'primary' | 'secondary' means these are the only values accepted 
  color?: 'primary' | 'secondary';
}

function Button({ children, onClick, color='primary' }: Props) {
  return <button className={'btn btn-' +color} onClick={onClick}  >{children}</button>;
}

export default Button;  