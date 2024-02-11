import React from 'react'
import styled from 'styled-components'
import {Setting} from './Setting/Setting'

type SettingsboardType = {
	idCounter: number
	maxValue: number
	minValue: number
}
export const Settingsboard: React.FC<SettingsboardType> = ({
	                                                           maxValue,
																idCounter,
	                                                           minValue,
                                                           }) => {
	return (
		<SettingsboardStyles>
			<Setting title={'max'} callBack={() => {}} value={maxValue} compareValue={minValue}/>
			<Setting title={'min'} callBack={() => {}} value={minValue} compareValue={maxValue}/>
		</SettingsboardStyles>
	)
}

const SettingsboardStyles = styled.div`
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: black;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    border: 2px cadetblue solid;
`
