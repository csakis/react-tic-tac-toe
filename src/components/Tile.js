import React, { Component } from 'react';
import {Card, Icon} from 'react-bulma-components'
import '../../node_modules/@fortawesome/fontawesome-pro/css/all.css'

class Tile extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <Card.Content>
                    <Icon className="far fa-camera" />
                </Card.Content>   
            </Card>

         );
    }
}
 
export default Tile;