

export default class FormulaOneService{


    static baseApi = "http://ergast.com/api/f1/";

    static getDriversForSeason(season){
        /*
            code: "ALG"
            dateOfBirth: "1990-03-23"
            driverId: "alguersuari"
            familyName: "Alguersuari"
            givenName: "Jaime"
            nationality: "Spanish"
        */
        return new Promise((resolve, reject) =>{
            fetch(`${this.baseApi}${season}/drivers.json`)
                .then(response => response.json())
                .then(data => resolve(data.MRData.DriverTable.Drivers))
                .catch(reject);
        });
    }


    static getRacesForSeason(season){
        /*
            date: "2010-03-14"
            raceName: "Bahrain Grand Prix"
            round: "1"
            season: "2010"
            time: "12:00:00Z"
        */
        return new Promise((resolve, reject)=>{
            fetch(`${this.baseApi}${season}.json`)
                .then(response => response.json())
                .then(data => resolve(data.MRData.RaceTable.Races))
                .catch(reject);
        });
    }

    static getConstructorsForSeason(season){
        /*
            constructorId: "ferrari"
            name: "Ferrari"
            nationality: "Italian"
        */
        return new Promise((resolve, reject)=>{
            fetch(`${this.baseApi}${season}/constructors.json`)
                .then(response => response.json())
                .then(data => resolve(data.MRData.ConstructorTable.Constructors))
                .catch(reject);
        });
    }
}