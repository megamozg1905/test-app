import React, { Component } from "react"
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';

const TextField = (props) => {
    const { title, value, handOnChange} = props;
	return <div>
        <Label isNoWrap={ true }>{title}</Label>
        <div>
			<Input
				label = 'Строка'
				placeholder = 'Введите строку'
				value = {value}
				error = {value == ""? 'Пустая строка' : null}
				onChange = {value => {handOnChange(value)}}
			/>
		</div>
    </div>
}

export default TextField