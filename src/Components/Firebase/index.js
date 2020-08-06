import Firebase from './firebase';
 
import React from 'react';

export default function withFirebase(OriginalComponent) {
    return class extends React.Component {
        constructor(props){
            super(props);
        }
        render() {
            return <OriginalComponent {...this.props} firebase={Firebase}/>
        }
    }
}