import React, { Component } from 'react';
import {Card, Icon} from 'react-bulma-components'

class Tile extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
                <Card.Content>
                    <Icon icon="far fa-camera" />
                </Card.Content>   
            </Card>

         );
    }
}
 
export default Tile;