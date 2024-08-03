
function App() {
  return (
    <div className="App container-fluid bg-light">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>
     <h1 className="text-center bg-light">Tasks</h1>
     <hr></hr>
     <div className="container bg-light border">
     <h2 className="text-center">Defina suas tarefas</h2>
     <div className="row m-3 container d-flex justify-content-center align-center">
      <div className="col-3 d-flex justify-content-center align-center">
      <input type="text" className="form-control" placeholder="Digite sua tarefa"></input>
      </div>
      </div>
      <div className="row container d-flex justify-content-center align-center">
      <div className="col-3  d-flex justify-content-center align-center">
      <button className="btn btn-primary align-center">Adicionar</button>
      </div>
      </div>
      </div>
      <hr></hr>
    </div>
    
  );
}

export default App;
