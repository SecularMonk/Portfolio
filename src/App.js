import robot from './robot.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={robot} className="robot" alt="logo" />
        <p>
          Home to a family of trading bots.
        </p>
        </header>
        
      <body>
        <div>
          <div className="dataContainer">
            <div>
              <h1>Centre Results</h1>
                <p>I designed this as a one-stop-shop for all the data available about the centre.</p>
                <h3>
                  All sensitive data has been scrubbed and replaced with placeholder data.
                </h3>
            </div>
            <iframe title="Centre Results" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=ce92cd9d-1cae-43f9-bd83-d0bffd4fc61b&groupId=a89696ba-89c7-4977-813c-356ae775c8c0&autoAuth=true&ctid=30f52344-4663-4c2e-bab3-61bf24ebbed8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLW5vcnRoLWV1cm9wZS1kLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
          </div>
        </div>
      </body>

    </div>
  );
}

export default App;
