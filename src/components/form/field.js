import React, { Component } from "react"
import TextField from './textField';
import NumberField from './numberField';
import ListField from './listField';
import { connect } from 'react-redux';
import { setValue } from '../../store/actions';

class Field extends Component {

    componentWillMount() {
        const { id, setValue } = this.props;
        setValue({
            [id]: ''
		});
    }

    handOnChange = (value) => {
		const { id, setValue } = this.props;
        setValue({
            [id]: value
        });
    }

    render() {
        const { type, title, id, values, data } = this.props;
        switch (type) {
            case "TEXT":
                return <TextField title = { title }
                handOnChange = { this.handOnChange }
                value = { data[id]||'' }
                />
            case "NUMERIC":
                return <NumberField title = { title }
                handOnChange = { this.handOnChange }
                value = { data[id]||'' }
                />
            case "LIST":
                return <ListField title = { title }
                values = { values }
                handOnChange = { this.handOnChange }
                value = { data[id]||'' }
                />
            default:
                return <h1> no data </h1>
        }
    }
}

const mapStateToProps = state => ({
    data: state.data,
});

const mapDispatchToProps = { setValue }

export default connect(mapStateToProps, mapDispatchToProps)(Field)