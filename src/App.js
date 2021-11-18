import {BrowserRouter as Router,Route} from "react-router-dom";
import BestResultsCard from "./Component/BestResultsCard";
import './App.css'
import './fonts/fonts.css'

function App(props) {
    return (
        <Router>
            <div>
                <Route path="/" component={BestResultsCard}/>
            </div>
        </Router>
    )
}

export default App;
