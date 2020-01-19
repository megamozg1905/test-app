import React, {Component} from "react"
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Button from 'arui-feather/button';
import Spin from 'arui-feather/spin';
import Field from './field'
import { getForm, postData, cancelSend } from '../../store/actions';
import { connect } from 'react-redux';
import axios from 'axios';

class MyForm extends Component {
	componentDidMount() {
		const { getForm } = this.props;
		getForm();
	}

	state = {
		source: null
	};

	isValid = () => {
		let { data } = this.props;
		for (let key in data)
			if (data[key] == "")
				return false;
		return true;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.isValid()) {
			let source = axios.CancelToken.source();
			this.cancel = () => { this.props.cancelSend(source); };
			this.props.postData(this.props.data, source);
		}
		else alert("Заполните все поля");
	}

	formFromState(form)
	{
		switch(form.state){
			case 0: return <h1><Spin size='l' visible={ true } />Loading</h1>;
			case 1: {
				const { image, title, fields } = form;
				let id = -1;
				return <div>
					<img className="img" src={`${image}`} alt="icon" />
					<h1>{title}</h1>
					<Form onSubmit={this.handleSubmit}>
						<FormField>
							{(fields.map(data => {
								id++;
								return (<Field id={id} title={data.title} name={data.name} type={data.type} values={data.values}></Field>)
							}))}
						</FormField>
						<FormField>
							<Button view='extra' type='submit'>Отправить</Button>
						</FormField>
					</Form>
				</div>;
			}
			case 2: return <div><Spin size='l' visible={true} />Sending<div><Button onClick={this.cancel}>Cancel</Button></div></div>
			default: return <h1>Неизвестное состояние формы</h1>
		}
	}
	
	render() {
		return (this.formFromState(this.props.form))
	}
}


const mapStateToProps = state => ({
	form: state.form,
	data: state.data
});

const mapDispatchToProps = { getForm, postData, cancelSend }

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(MyForm)