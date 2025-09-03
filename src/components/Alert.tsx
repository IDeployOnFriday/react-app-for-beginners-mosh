import type { ReactNode } from "react";


interface Props {
  // allows passing html as children
  children: ReactNode;
}

function App({ children }: Props) {
  return <div className="alert alert-primary">{children}</div>;
}

export default App;
