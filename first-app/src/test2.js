import img from './img/test2.png'
const FunctionTest3 = (props)=>{
    // let {title, author, price, type} = props
let back = {
backgroundColor : "#f5f5dc",
width : "600px",
height : "700px",
textAlign : "center"
}
let h ={
    padding : "20px",
    fontWeight: "bold",
    color : "#FE8050",
}
let m={
    fontWeight: "bold",
    textAlign : "left",
    paddingLeft : "65px"

}
return (
    <>
<div style={back}>
    <h1 style={h}>이번주 베스트 셀러</h1>
    <img src={img} alt="" />
<br />
    <h1>{props.title}</h1>
    <div style={m}>
    <h3>저자 : {props.author}</h3>
    <h3>판매가 : {props.price}</h3>
    <h3>구분 : {props.type}</h3>
    </div>

</div>
    </>

)
}

export default FunctionTest3 ;