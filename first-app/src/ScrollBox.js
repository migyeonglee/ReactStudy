import React, { Component } from 'react';

class ScrollBox extends Component {
    button=()=>{
this.box.current.scrollTop = this.box.current.scrollHeight;
    }
    top=()=>{
this.box.current.ScrollBottom = this.box.current.scrollTop = 0;
    }
    constructor(props){
        super(props);
        this.box = React.createRef();
    }
    render() {
        return (
            <>
               
                <div style={{overflowY:"auto",width:"200px", height:"200px",scrollHeight :"100px", scrollTop:"0px"}} ref={this.box}>
                    <div style={{ width:"100%", height:"1000px",background:"linear-gradient(to bottom, #fff,#000"}}></div>
                </div>
                
                <button onClick={this.button}>밑으로</button>
                <button onClick={this.top}>위로</button>
            </>
        );
    }
}

export default ScrollBox;
