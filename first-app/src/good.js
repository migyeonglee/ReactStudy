import PropTypes from "prop-types";
const Good = (props) => {
    let {food} = props;
    let color = {
        color : "red"
    }
    return (
            <>
            <div>좋아하는 음식?</div>
                <div style={color}>{food}</div>
             </>
              )
};
              
// Good.propTypes = {
//     name : PropTypes.string
// };

Good.defaultProps = {
    food : "그런거 잘없고 커피만 좋아해요 :)",
}

export default Good ;