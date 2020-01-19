import React, { Component } from "react"
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';

const NumberField = (props) => {
    const { title, value, handOnChange } = props;
	return <div>
        <Label isNoWrap={ true }>{title}</Label>
        <div>
            <Input
                label='Число'
                placeholder='Введите число'
                type='number'
                value = {value}
                error = {value == ""? 'Нет числа' : null}
                onChange = {value => {handOnChange(value)}}
            />
        </div>
    </div>
}

export default NumberField