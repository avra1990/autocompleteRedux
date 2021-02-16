import React, { Component } from 'react';
import {loadData} from '../actions/actionsData';
import {connect} from 'react-redux'
import {onInputChange} from '../actions/actionSearch';

class AutocompleteSearchBar extends Component {

    state = {
        searchValue: '',
        data: []
    }

    componentDidMount() {
        this.props.loadData()
       //this.setState({data: this.props.loadData()})
       console.log(this.props);
    }
    handleInputChange = (event) => {
        this.setState({searchValue: event.target.value}, ()=> {
            console.log();
        })
    }
    render() {
        return (
            <>
                <input type='text' placeholder='type something' onChange={(event) => {
                    
                    this.handleInputChange();
                }}/>
                <span>{this.state.searchValue}</span>
            </>
        )
    }
}
const mapStateToProps= (state) => {
    return {
        data: state.data.data,
        loading: state.data.loading
    }
}

const mapDispatchToProps = () => {
    return {
        loadData: loadData,
        onInputChange: (data, searchValue) => onInputChange(data, searchValue)
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(AutocompleteSearchBar)