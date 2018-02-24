import React, {Component} from 'react';
import XRegExp from 'xregexp';

export default class CherryPick extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            limit: 100,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.processText();
    }

    processText() {
        let sentenceRegex = new RegExp(/[^\s][^.!?]+[.!?]+/g);
        let charRegex = new RegExp(/[\"\(\)…\d]/g);
        let sentences = this.state.text.match(sentenceRegex);
        let shortSentences = [];
        sentences.forEach((item) => {
            if (item.length < 60 && !item.match(charRegex)) {
                shortSentences.push(item);
            }
        });
        let finalSentences = shortSentences.slice(0, this.state.limit);
        console.log(finalSentences);
    }

    render() {
        return(
            <div className="pageContent">
                <form onSubmit={this.handleSubmit}>
                    <textarea rows="10" name="text" placeholder="Text to cherry pick" onChange={(event) => {
                        this.setState({text: event.target.value});
                    }}/>
                    <input type="number" name="limit" placeholder="Sentence limit (default 100)" onChange={(event) => {
                        this.setState({limit: event.target.value});
                    }}/>
                    <input type="submit" value="Cherry pick"/>
                </form>
                <div className="sentences">
                    <div className="sentence">
                        <div className="sentence-status sentence-status-pass">k</div>
                        <div className="sentence-value">Když se to narodilo, bylo to takové bílé nic.</div>
                    </div>
                </div>
            </div>
        );
    }
}