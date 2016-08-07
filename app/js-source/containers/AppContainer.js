import { connect } from "react-redux";
import App from "../components/App.jsx";


const mapStateToProps = (state, ownProps) => {
    // pass all the state
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
