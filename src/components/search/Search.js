import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Select from 'material-ui/SelectField';
import Axios from 'axios';
import ImageResults from '../image-results/ImageResults';



class Search extends Component {
    state ={
        searchText: '',
        amount: 15,
        apiURL: 'https://pixabay.com/api/',
        apiKey: '10457627-a7a42895ff5837026abd6e2cb',
        images: []
    }

    // allows text to be typed

    onTextChange = (event) => { 

        this.setState({[event.target.name]: event.target.value}, () =>
         {
            Axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err))
        })
    };

    // sets the amount that is displayed from results
    onAmountChange = (event, index, value) => this.setState({amount: value})




    render() {
        console.log(this.state.images)
        return (
            <div>
                <TextField
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                floatingLabelText="type something to search"
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
              <br/>

              {this.state.images.length > 0 ? (<ImageResults images= {this.state.images} /> ): null} 

            </div>
        );
    }
}

export default Search;