import  { Component } from "react";
import PropTypes from "prop-types";
class TextProps extends Component{
    
    render(){
        let {text, button} = this.props;
        // let { name } = this.props;
        return(
            <>
          <div>{text}</div>
          <button onClick={button}>console</button>
            </>
        )
       
    }
    static defaultProps = {
        text : "이건 기본 text props입니다."
    };
    static propTypes = {
        text : PropTypes.string
    };
}
export default TextProps;