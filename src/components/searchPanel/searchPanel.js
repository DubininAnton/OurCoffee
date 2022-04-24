import { Component } from 'react';
import './searchPanel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
            this.state ={
                term:'',
                filter:''
            }
    }
    

    onChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onChange(term);
    }

    changeCard = (e) => {
        const filter = e.target.value;
        this.setState({filter});
        this.props.changeCard(filter);
    }
   render () {
        return (
            <div className="searchPanel">
                <label forid="search">Lookiinng for</label>
                <input type="text" id='search' placeholder='start typing here...' onChange={this.onChange} value={this.state.term}/>
                <div className="filter">
                    <div value="none" className="label" onClick={this.changeCard}>Our filter</div>
                    <button value ="Brazil" className='filter__brazil' onClick={this.changeCard}>Brazil</button>
                    <button value ="Kenya" className='filter__kenya' onClick={this.changeCard}>Kenya</button>
                    <button value ="Columbia" className='filter__columbia' onClick={this.changeCard}>Columbia</button>
                </div>
            </div>
        )
   }
}

export {SearchPanel};