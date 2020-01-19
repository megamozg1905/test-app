import React, { Component } from "react"
import Select from 'arui-feather/select';
import Label from 'arui-feather/label';

const ListField = (props) => {
	const { title, values, value, handOnChange } = props;
	let i = 0;
	const options = [];
	for (let key in values) {
		if (key != "none") {
			i++;
			options.push({ value: '0' + i, text: values[key] });
		}
	}
	return <div>
		<Label isNoWrap={ true }>{title}</Label>
		<div>
			<Select
				mode='radio-check'
				options={options}
				error = {value == ""? values.none : null}
				onChange = {value => {handOnChange(value)}}
			/>
		</div>
	</div>
}

export default ListField