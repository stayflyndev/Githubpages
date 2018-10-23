import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Select from 'material-ui/SelectField';
import Axios from 'axios';



class Search extends Component {
    state ={
        searchText: '',
        amount: 15,
        apiURL: "",
        apiKey: "",
        images: []
    }

    onTextChange = (event) => { 

        this.setState({[event.target.name]: event.target.value})
    };




    render() {
        return (
            <div>
                <TextField
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                floatingLabelText="search meeeehhh"
                fullWidth={true}
                
                />
              <br />
              <br />
             
              <SelectField
              name='amount'
            floatingLabelText="amount displayed"
            value={this.state.amount}
            onChange={this.onAmountChange}
           
          >
            <MenuItem value={10} primaryText="10" />
            <MenuItem value={20} primaryText="20" />
            <MenuItem value={30} primaryText="30" />
          </SelectField>
              

            </div>
        );
    }
}

export default Search;