import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "../styles.css";
import Create from "./create/Create";
import Read from "./read/Read";
import Update from "./update/Update";

const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
