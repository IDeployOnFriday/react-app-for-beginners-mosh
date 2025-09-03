

interface Props {
  text: string;
}

function App({ text }: Props) {
  return <div className="alert alert-primary">{text}</div>;
}

export default App;
