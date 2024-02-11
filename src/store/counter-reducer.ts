
export type counterType = {
	id: number
	maxValue: number
	minValue: number
}

const initialState: counterType[] = [
	{
		id: 0,
		maxValue: 5,
		minValue: 0,
	},
	{
		id: 1,
		maxValue: 4,
		minValue: 0,
	}
]

export const counterReducer = (state = initialState, action: UnionACTypeCounterReducer): counterType[] => {
	const {type, payload} = action

	switch (type) {
		case 'SET_MAX_VALUE': {
			const {maxValue, counterId} = payload

			return state.map(e => e.id === counterId ? {...e, maxValue} : e)
		}
		case 'SET_MIN_VALUE': {
			const {minValue, counterId} = payload

			return state.map(e => e.id === counterId ? {...e, minValue} : e)
		}
		case 'INC_VALUE': {
			const {minValue, maxValue, counterId} = payload
			return minValue < maxValue
				? state.map(e => e.id === counterId ? {...e, minValue: minValue + 1} : e)
				: state
		}
		case 'RESET_VALUE': {
			const {counterId} = payload

			return state.map(e => e.id === counterId ? {...e, minValue: 0} : e)
		}

		default:
			return state
	}
}

type UnionACTypeCounterReducer = SetMaxValueACType | SetMinValueACType | IncrementValueACType | ResetValueACType


type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
type SetMinValueACType = ReturnType<typeof setMinValueAC>
type IncrementValueACType = ReturnType<typeof incrementValueAC>
type ResetValueACType = ReturnType<typeof resetValueAC>

export const setMaxValueAC = (maxValue: number, counterId: number) => {
	return {type: 'SET_MAX_VALUE', payload: {maxValue, counterId}} as const
}
export const setMinValueAC = (minValue: number, counterId: number) => {
	return {type: 'SET_MIN_VALUE', payload: {minValue, counterId}} as const
}
export const incrementValueAC = (minValue: number, maxValue: number, counterId: number) => {
	return {type: 'INC_VALUE', payload: {minValue, maxValue, counterId}} as const
}
export const resetValueAC = (counterId: number) => {
	return {type: 'RESET_VALUE', payload: {counterId}} as const
}
