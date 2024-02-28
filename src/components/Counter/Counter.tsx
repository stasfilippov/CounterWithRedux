import React from 'react';
import {Scoreboard} from '../Scoreboard/Scoreboard';
import {Button} from '../Button/Button';
import {useDispatch} from 'react-redux';
import {incrementValueAC, resetValueAC} from '../../store/counter-reducer';

type CounterPropsType = {
	idCounter: number
	maxValue: number
	minValue: number
}
export type NameButtonType = 'add' | 'reset'
export const Counter:React.FC<CounterPropsType> = ({idCounter, maxValue, minValue}) => {

	let dispatch = useDispatch()

	const incrementCount = () => {
		dispatch(incrementValueAC(minValue, maxValue, idCounter))
	}

	const resetCount = () => {
		dispatch(resetValueAC(idCounter))
	}

	const isDisabled = (name: NameButtonType, minValue: number, maxValue: number) => {
		if (name === 'add') {
			return minValue >= maxValue
		}
		if (name === 'reset') {
			return minValue === 0
		}
	}

	return (
		<div className={'wrapper'}>
			<Scoreboard
				maxValue={maxValue}
				minValue={minValue}
			/>
			<div className="battons-wrapper">
				<Button
					title={'Add'}
					callback={incrementCount}
					disabled={isDisabled('add', minValue, maxValue)}
				/>
				<Button
					title={'Reset'}
					callback={resetCount}
					disabled={isDisabled('reset', minValue, maxValue)}
				/>
			</div>
		</div>
	);
};

