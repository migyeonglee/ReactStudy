import { Component } from "react";
import PropTypes from "prop-types";
class ClassComponent extends Component{
    static defaultProps = {
        name : "기본이름"
    };
    static propTypes = {
        name : PropTypes.string
    };
    render(){
        // let { name } = this.props;
        return(
            <>
            <hr />
            <div>안녕!!</div>
            <div>classcomponent</div>
            <div>{this.props.title}</div>
            <div>{this.props.name}</div>

            {/* <div>{this.name}</div> */}
            </>
        )
    }
}
export default ClassComponent;