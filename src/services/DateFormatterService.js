

export default class DateFormatterService {


    static format(dateString) {
        var date = dateString.split('-');
        return `${date[2]}/${date[1]}/${date[0]}`;
    }
}