export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '530c466263msh234892333c02bfap1c73ccjsn23b69d8e91a1',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
    const response = await fetch(url, geoApi);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
    }
