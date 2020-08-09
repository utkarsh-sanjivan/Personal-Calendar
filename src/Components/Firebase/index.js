import firebase from './firebase';
 
import React from 'react';

export default function withFirebase(OriginalComponent) {
    return class extends React.Component {
        render() {
            return <OriginalComponent {...this.props} firebase={firebase}/>
        }
    }
}