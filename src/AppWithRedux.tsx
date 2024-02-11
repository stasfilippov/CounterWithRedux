import React from 'react';
import { useSelector} from 'react-redux';
import {AppRootStateType} from './store/store';
import {counterType} from './store/counter-reducer';
import {Counter} from './components/Counter/Counter';
import './App.css';
import {Settingsboard} from './components/Settingsboard/Settingsboard';

export const AppWithRedux = () => {

	let counters = useSelector<AppRootStateType, counterType[]>(state => state.counters)

	return (
		<div className={'app_wrapper'}>
			{counters.map(counter => <>
				<Settingsboard key={counter.id} idCounter={counter.id} maxValue={counter.maxValue} minValue={counter.minValue}/>
				<Counter
					key={counter.id}
					idCounter={counter.id}
					maxValue={counter.maxValue}
					minValue={counter.minValue}
				/>
			</>)}
		</div>
	);
};

