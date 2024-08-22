import { json } from 'react-router-dom';
import React, { useState } from 'react';
import { User } from '../model/user';
import { postRequest } from '../utils/commonhttp'
import { errorAlert, successAlert } from './alerts';

var key = "c";

export async function addLoginDeiatails(usernam: string, password: string) {
    try {
        var uso = {
            "username": usernam,
            "password": password
        };
        console.log(uso);
        var ress = await postRequest("usercontroller/login", JSON.stringify(uso));
        var d = {
            "token": ress.data.token,
            "ex": ress.data.expiedin,
            "refresh": ress.data.refreshtoken,
            "lastget": new Date().toISOString()
        }
        sessionStorage.setItem(key, JSON.stringify(d));
        successAlert("Clicked", "Login Success");
        location.href = "/";
    } catch (e) {
        errorAlert("Fail", "Fail")
    }

}
function getoginDeiatails(usernam: string, password: string) {
    return localStorage.getItem(key) != null ? localStorage.getItem(key) : null;
}

export function timeCompar() {
    // Retrieve the stored data from sessionStorage
    const storedData = sessionStorage.getItem(key);

    if (storedData) {
        // Parse the stored JSON data
        const parsedData = JSON.parse(storedData);

        // Extract the lastget timestamp and convert it to a Date object
        const lastGetTime = new Date(parsedData.lastget);
        console.log(lastGetTime);

        // Get the current time
        const currentTime = new Date();

        // Calculate the difference in seconds
        const seconds = Math.abs((currentTime.getTime() - lastGetTime.getTime()) / 1000);

        console.log(`Difference in seconds: ${seconds}`);
        return seconds;
    } else {
        console.log('No stored data found.');
        return null;
    }
}




