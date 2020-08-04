import React, {Component} from 'react'

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: 105,
            currentTime: new Date().toLocaleTimeString()
        }

    }

    componentDidMount(){
        if (this.props.start !== undefined){
            this.setState({time: this.props.start})
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: this.state.time - 1
        });
    }


    render(){
        if (this.state.time >= 0){
            return(
                <div>
                    <h1 style={{float:"left"}}>
                        Sekarang Jam: {this.state.currentTime}
                    </h1>
                    <h1 style={{float:"right"}}>
                        Hitung Mundur: {this.state.time}
                    </h1>
                </div>
            )
        }else {
            return (
                <div>

                </div>
            )
        }
    }
}

export default Timer