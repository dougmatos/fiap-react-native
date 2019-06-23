

export default class FormulaOneService {


    static baseApi = "http://ergast.com/api/f1/";

    static getDriversForSeason(season) {
        /*
            code: "ALG"
            dateOfBirth: "1990-03-23"
            driverId: "alguersuari"
            familyName: "Alguersuari"
            givenName: "Jaime"
            nationality: "Spanish"
        */
        return new Promise((resolve, reject) => {
            fetch(`${this.baseApi}${season}/drivers.json`)
                .then(response => response.json())
                .then(data => resolve(data.MRData.DriverTable.Drivers, season))
                .catch(reject);
        });
    }


    static getRacesForSeason(season) {
        /*
            date: "2010-03-14"
            raceName: "Bahrain Grand Prix"
            round: "1"
            season: "2010"
            time: "12:00:00Z"
        */
        return new Promise((resolve, reject) => {
            fetch(`${this.baseApi}${season}.json`)
                .then(response => response.json())
                .then(data => resolve(data.MRData.RaceTable.Races))
                .catch(reject);
        });
    }

    static getConstructorsForSeason(season) {
        /*
            constructorId: "ferrari"
            name: "Ferrari"
            nationality: "Italian"
        */
        return new Promise((resolve, reject) => {
            fetch(`${this.baseApi}${season}/constructors.json`)
                .then(response => response.json())
                .then(data => resolve(data.MRData.ConstructorTable.Constructors))
                .catch(reject);
        });
    }
    static getRaceDetais(season, round) {
        /*
            "date": "2015-03-29",
            "raceName": "Malaysian Grand Prix",
            "result": [
                {
                "contructor": "Ferrari",
                "driver": "Sebastian Vettel",
                "position": "1",
                "time": "1:41:05.793",
                "laps": 58
                }
            ]
        */
        return new Promise((resolve, reject) => {
            fetch(`${this.baseApi}${season}/${round}/results.json`)
                .then(response => response.json())
                .then(data => {
                    var race = data.MRData.RaceTable.Races[0];
                    var result = {
                        raceName: race.raceName,
                        date: race.date,
                        result: race.Results.map(x => ({
                            position: x.position,
                            driver: `${x.Driver.givenName} ${x.Driver.familyName}`,
                            contructor: x.Constructor.name,
                            time: (x.Time || {}).time || "",
                            laps: x.laps || "0"
                        })).sort((a, b) => a.position - b.position)
                    };
                    resolve(result)
                })
                .catch(reject);
        });
    }

    static getDriveDetails(season, driverId) {

        return new Promise((resolve, reject) => {
            fetch(`${this.baseApi}${season}/drivers/${driverId}/results.json`)
                .then(response => response.json())
                .then(data => {
                    var races = data.MRData.RaceTable.Races.map(x => ({
                        date: x.date,
                        round: x.round,
                        raceName: x.raceName,
                        position: x.Results[0].position,
                        laps: x.Results[0].laps,
                        time: (x.Results[0].Time || {}).time || "",
                        driverName: `${x.Results[0].Driver.givenName} ${x.Results[0].Driver.familyName}`
                    })).sort((a, b) => a.round - b.round);
                    resolve(races);
                })
                .catch(reject);
        });
    }

    static getConstructorDetails(season, constructorId) {

        return new Promise((resolve, reject) => {
            fetch(`${this.baseApi}${season}/constructors/${constructorId}/results.json`)
                .then(response => response.json())
                .then(data => {
                    var races = data.MRData.RaceTable.Races.map(x => ({
                        date: x.date,
                        round: x.round,
                        raceName: x.raceName,
                        constructorName: x.Results[0].Constructor.name,
                        driver1: {
                            position: ('0' + x.Results[0].position).substr(-2, 2),
                            name: `${x.Results[0].Driver.givenName} ${x.Results[0].Driver.familyName}`
                        },
                        driver2: {
                            position: ('0' + x.Results[1].position).substr(-2, 2),
                            name: `${x.Results[1].Driver.givenName} ${x.Results[1].Driver.familyName}`
                        }
                    })).sort((a, b) => a.round - b.round);
                    resolve(races);
                })
                .catch(reject);
        });
    }
}