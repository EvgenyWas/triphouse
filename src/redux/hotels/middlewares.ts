import ApiService from "../../API/ApiService";
import { TAvailableHotelsParams } from "../../types/types";
import { actionSetSearch } from "../searchBar/actions";
import {
    actionGetAvailableHotelsFailed,
    actionGetAvailableHotelsRequested,
    actionGetAvailableHotelsSucceed,
    actionGetPopularHotelsFailed,
    actionGetPopularHotelsRequested,
    actionGetPopularHotelsSucceed
} from "./actions";

export const getPopularHotels = () => async (dispatch: any) => {
    dispatch(actionGetPopularHotelsRequested());

    try {
        const response = await ApiService.getPopularHotels();
        dispatch(actionGetPopularHotelsSucceed(response.data));
    } catch (error: any) {
        dispatch(actionGetPopularHotelsFailed(error));
    }
};

export const getAvailableHotels = (search?: string, params?: TAvailableHotelsParams) => async (dispatch: any) => {
    dispatch(actionSetSearch(search));
    dispatch(actionGetAvailableHotelsRequested());

    try {
        const response = await ApiService.getAvailableHotels(params);
        dispatch(actionGetAvailableHotelsSucceed(response.data));
    } catch (error: any) {
        dispatch(actionGetAvailableHotelsFailed(error));
    }
};