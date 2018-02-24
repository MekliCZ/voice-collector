import React, {Component} from 'react';

export default class Submit extends Component {


    render() {
        return (
            <div className="pageContent">
                <form>
                    <textarea rows="10" name="sentences" placeholder="Sentences, one per line" onChange={(event) => {
                        this.setState({sentences: event.target.value});
                    }}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}