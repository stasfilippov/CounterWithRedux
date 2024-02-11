// import {useEffect, useState} from 'react'
// import './App.css'
// import {Button} from './components/Button/Button'
// import {Scoreboard} from './components/Scoreboard/Scoreboard'
// import {Settingsboard} from './components/Settingsboard/Settingsboard'
// import {useDispatch, useSelector} from 'react-redux';
// import {AppRootStateType} from './store/store';
// import {countersStateType} from './store/counter-reducer';
//
// export type NameButtonType = 'add' | 'reset'
//
// function App() {
//
//
// 	let [isDisableSetButton, setIsDisableSetButton] = useState(true)
// 	let [isShowText, setIsShowText] = useState(false)
// 	let [isDisabeControlBtns, setIsDisabeControlBtns] = useState(false)
//
// 	const setHandler = () => {
// 		setCount(minValue)
// 		setIsDisableSetButton(true)
// 		setIsShowText(false)
// 		setIsDisabeControlBtns(false)
// 	}
//
// 	const incrementCount = () => {
// 		if (count < maxValue) {
// 			setCount(count + 1)
// 		}
// 	}
// 	const resetCount = () => {
// 		setCount(minValue)
// 	}
// 	const isDisabled = (name: NameButtonType, countValue: number): boolean => {
// 		if (!isDisabeControlBtns) {
// 			return (name === 'add' && countValue >= maxValue) || (name === 'reset' && countValue === minValue)
// 		}
// 		return isDisabeControlBtns
// 	}
// 	const setValueHandler = (value: number, name: 'max' | 'min') => {
// 		setIsDisabeControlBtns(true)
// 		setIsDisableSetButton(false)
// 		setIsShowText(true)
// 		name === 'max' ? setMaxValue(value) : setMinValue(value)
// 	}
//
//
// 	return (
// 		<div className="App">
// 			<div className="wrapper">
// 				<Settingsboard
// 					maxValue={maxValue}
// 					minValue={minValue}
// 					setValue={setValueHandler}
// 				/>
// 				<Button
// 					title={'Set'}
// 					callback={setHandler}
// 					disabled={isDisableSetButton}
// 				/>
// 			</div>
// 		</div>
// 	)
// }

// export default App

import React from 'react';

const App = () => {
	return (
		<div>
			
		</div>
	);
};

export default App;