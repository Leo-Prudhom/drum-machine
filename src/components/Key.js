import React, {Component} from 'react';

const styles = {
    width : 80,
    height : 80,
    backgroundColor : 'black',
    borderRadius : '40%',
}

const letterStyle = {
    color : 'white'
}

class Key extends Component {
    constructor( props ){
        super( props );
        this.displayed = this.displayed.bind(this);
      }

    state = {
        isActive : false,
    }

    displayed() {
        this.setState({isActive : true});
        setTimeout(() => {
            this.setState({isActive: false})
          }, 260);
    }


    render(){

        if(this.props.keyPressed === this.props.keycode){
            console.log('ok')
        }
        
        return(
            <div style={styles} onClick={this.displayed} className='col-md-4 keypad'>
                {this.state.isActive && 
                <div>
                    <audio id={this.props.id} src={this.props.url} autoPlay></audio>
                    <p style={letterStyle}>{this.props.letter}</p>               
                </div> }
            </div>
        );
    }
}

export default Key;