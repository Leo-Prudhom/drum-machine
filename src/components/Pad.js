import React, {Component} from 'react';
import Key from './Key';

const padStyle = {
    backgroundColor : 'grey'     
}

class Pad extends Component {

    state={
        pressed : '',
    }

    componentWillReceiveProps(nextProps) {
       
        if (nextProps.keyPressed !== this.state.pressed) {
          this.setState({ pressed: nextProps.keyPressed });
        }
      }
    
    render() {
        

       const keys = this.props.data.map(
        (data, key) => (<Key 
                        key={key} 
                        letter={data.letter} 
                        keycode = {data.keycode} 
                        id={data.id} 
                        url={data.url}
                        keyPressed={this.state.pressed}/>)
       );

        return(
            <div className='col-md-4 pad' style={padStyle}>
                <div className='row'>
                    {keys}
                </div>
                
            </div>
        );
    }
}

export default Pad;