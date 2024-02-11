import React from 'react';
import styled from 'styled-components';

type ScoreboardPropsType = {
	maxValue: number
	minValue: number
}
export const Scoreboard: React.FC<ScoreboardPropsType> = ({maxValue, minValue}) => {


	return (
		<ScoreboardStyle minValue={minValue} maxValue={maxValue}>
			{minValue}
		</ScoreboardStyle>
	);
};

const ScoreboardStyle = styled.div<{ minValue: number, maxValue: number }>`
    width: 200px;
    height: 100px;
    display: flex;
    color: ${props => props.minValue >= props.maxValue ? 'red' : 'black'};
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    border-radius: 10px;
    border: 2px cadetblue solid;
`
//
// const ScoreboardText = styled.div`
//     font-size: 15px;
//     color: #518586;
// `
// const ErrorMessage = styled.div`
//     font-size: 15px;
//     color: red;
// `