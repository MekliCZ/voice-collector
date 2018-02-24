import React, {Component} from 'react';

export default class Sentence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submit: true,
            value: props.value,
        }

        this.changeSubmit = this.changeSubmit.bind(this);
    }

    changeSubmit() {
        this.setState({
            submit: !this.state.submit,
        });
    }

    render() {
        return(
            <div className="sentence">
                <div onClick={() => {
                    this.props.change(this.props.objectKey, {submit: !this.state.submit, value: this.state.value});
                    this.changeSubmit();
                }} className={'sentence-status ' + ((this.state.submit === true) ? 'sentence-status-checked' : 'sentence-status-unchecked')}>{(this.state.submit === true) ? <span>ok</span> : <span>no</span>}</div>
                <input className="sentence-value" value={this.state.value} onChange={(event) => {
                    this.setState({value: event.target.value});
                    this.props.change(this.props.objectKey, {submit: this.state.submit, value: event.target.value});
                }} />
            </div>
        );
    }
}