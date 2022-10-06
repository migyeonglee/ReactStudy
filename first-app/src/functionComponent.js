
import PropTypes from "prop-types";
const FunctionComponent = (props) => {
    let {children} = props;
    return (
            <>
                <div>제목 : {props.title}</div>
                <div>이름 : {props.name}</div>
                <div>안녕</div>
                <div>{children}</div>
             </>
              )
};
export default FunctionComponent ;
              
              FunctionComponent.propTypes = {
    name : PropTypes.string
};

FunctionComponent.defaultProps = {
    title : "기본 제목",
    name : "기본이름"
}
