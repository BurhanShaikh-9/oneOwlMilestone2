import React from 'react'
import AxiosSettings from '../axiosSettings';
import Base from '../base';

export const PreferenceApi = () => {

    const { baseUrl } = Base();
    const { axiosInstance } = AxiosSettings()

    const getUserNotification = (data) => {
        return axiosInstance.get(`${baseUrl}/user/notification`, data);
    }
    const getUserActivities = (data) => {
        return axiosInstance.get(`${baseUrl}/user/activities`, data);
    }
    const getUserConversations = (data) => {
        return axiosInstance.get(`${baseUrl}/user/conversations?channel=all`, data);
    }
    const getUserContacts = (data) => {
        return axiosInstance.get(`${baseUrl}/user/contacts`, data);
    }


    return { getUserNotification, getUserConversations, getUserActivities, getUserContacts }
}