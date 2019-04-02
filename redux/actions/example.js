import { ActionTypes } from "../config/constants";

export const getExampleOneAction = () => ({
  type: ActionTypes.EXAMPLE.GET.ONE.SAGA
});

export const newExampleOneAction = payload => ({
  type: ActionTypes.EXAMPLE.NEW.ONE.SAGA,
  payload
});
