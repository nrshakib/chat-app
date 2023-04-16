import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="7f016fff-2043-4631-8ebf-9971caf05b28"
        userName="adminBot"
        userPassword="12345"
      />
    </div>
  );
}

export default App;
