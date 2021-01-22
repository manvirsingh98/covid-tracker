import axios from 'axios';

// const url = ' https://coronavirus-19-api.herokuapp.com/all';

const url = 'https://corona-api.com';

export const fetchData = async (country) => {
    try {

        let changeableUrl = `${url}/timeline`;

        if (country) {
            changeableUrl = `${url}/countries/${country}`
        }
        // const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        // const modifiedData = { confirmed, recovered,deaths,lastUpdate }

        // return modifiedData;

        const response = await axios.get(changeableUrl);

        

        if (country) {
            let modifiedData = response.data.data;
            let modifiedDaily = response.data.data.timeline;

            const fetcheddata = {
                confirmed: modifiedData.latest_data.confirmed,
                deaths: modifiedData.latest_data.deaths,
                recovered: modifiedData.latest_data.recovered,
                critical: modifiedData.latest_data.critical,
                updated_at: modifiedData.updated_at,
                todayDeath:modifiedData.today.deaths,
                todayConfirmed:modifiedData.today.confirmed,
                timeline: modifiedDaily       
            }
            return fetcheddata;

        }

        let modifiedData = response.data.data[0];
    const fetcheddata = {
        confirmed: modifiedData.confirmed,
        deaths: modifiedData.deaths,
        recovered: modifiedData.recovered,
        active: modifiedData.active,
        updated_at: modifiedData.updated_at 
    }

    return fetcheddata;
        

    } catch (error) {
        console.log(error);

    }
}

export const fetchDailyData = async () => {
    try {

        const {
            data: {
                data
            }
        } = await axios.get(`${url}/timeline`);

        return data.sort(function compare(a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA - dateB;
        });

    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {

        const {
            data: {
                data
            }
        } = await axios.get(`${url}/countries`);

        return data.map((country) => country);

    } catch (error) {
        console.log(error);
    }
}
