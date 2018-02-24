import React, {Component} from 'react';

export default class Communicator extends Component {
    setData(data) {
        console.log('setdata', data);
        this.setState({
            data: data,
        });
    }

    sendData(callback) {
        fetch('http://localhost:4878/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.props.data),
        }).then(response => response.json()).then((response) => {
            response = JSON.parse(response);
            if (response.status === 'written') {
                callback('success');
            } else {
                callback('error');
            }
        })
    }
}