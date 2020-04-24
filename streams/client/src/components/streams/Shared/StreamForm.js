
import React from 'react';
import {reduxForm, Field} from 'redux-form';

class StreamForm extends React.Component{

    renderInput =(fieldProps) =>{
        return (
            <div className="field">
                <label>{fieldProps.label}</label>
                <input {...fieldProps.input}/>
                <span style={{color : 'red'}}>{fieldProps.meta.touched && fieldProps.meta.error}</span>
            </div>
        );
    }

    
    // function to validate required field
    required = (value) =>{
        return value === "" || value === undefined ? "This field is required...!!!" : undefined;
    }


    // function to vaidate length (closure)
    validateMinimumLength = (length) => (value) =>{
        return value && value.length < length ? `Length must be more than ${length}` : undefined;
    }
    validateMinimumLength5 = this.validateMinimumLength(5);

    onSubmit = (formData) => {
        this.props.onSubmit(formData);
    }


    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Title" validate={[this.required]}/>
                <Field name="description" component={this.renderInput} label="Description" validate={[this.required, this.validateMinimumLength5]}/>
                <button type="submit" className="ui green button" disabled={this.props.submitting}>Submit</button>
                <button type="button" className="ui red button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Clear Values</button>
            </form>
            
        );
    }
}

export default reduxForm({form : 'streamForm', destroyOnUnmount: true})(StreamForm);
