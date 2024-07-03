const Hello = () => {
  return (
    <h1>Hello dev</h1>
  )
}

const App = () => {
  // parte logica do component
  return (
    // parte visivel para o usuario
    <Hello />
  );
}

export default App;