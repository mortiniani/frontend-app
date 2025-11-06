// types.ts
import { IAction, IState } from './state';

export enum EActionTypes {
  SET_COUNT = 'SET_COUNT',
  ADD_COUNT = 'ADD_COUNT',
  SUB_COUNT = 'SUB_COUNT',
}

export interface IActionSetCount extends IAction {
  type: EActionTypes.SET_COUNT;
  payload: number;
}

export interface IActionAddCount extends IAction {
  type: EActionTypes.ADD_COUNT;
  payload: number;
}

export interface IActionSubCount extends IAction {
  type: EActionTypes.SUB_COUNT;
  payload: number;
}

export interface IStateCount extends IState {
  count: number;
}