import {BrowserRouter as Router,Route} from "react-router-dom";
import BestResultsCard from "./Component/BestResultsCard";
import TeacherCard from "./Component/TeacherCard";
import './App.css'
import './fonts/fonts.css'

function App(props) {
    return (
        <Router>
            <div>
                <Route path="/page1" component={BestResultsCard}/>
                <Route path="/page2" component={TeacherCard}/>
            </div>
        </Router>
    )
}

export default App;
