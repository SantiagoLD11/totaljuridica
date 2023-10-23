import { addDays, addHours, endOfDay, endOfMonth, startOfDay, subDays } from 'date-fns';

export class CalendarFakeDb
{

    public static data = [
        {
            id  : 'events',
            data: [
                
                /*{
                    start    : startOfDay(new Date()),
                    end      : endOfDay(new Date()),
                    title    : 'An event',
                    allDay   : false,
                    color    : {
                        primary  : '#FF9800',
                        secondary: '#FFE0B2'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'Los Angeles',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                },
                {
                    start    : subDays(endOfMonth(new Date()), 3),
                    end      : addDays(endOfMonth(new Date()), 3),
                    title    : 'A long event that spans 2 months',
                    allDay   : false,
                    color    : {
                        primary  : '#1E90FF',
                        secondary: '#D1E8FF'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'Los Angeles',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                },
                {
                    start    : addHours(new Date(), -8),
                    end      : new Date(),
                    title    : 'Evaluación clínica',
                    allDay   : false,
                    color    : {
                        primary  : '#A8FF33',
                        secondary: '#A8FF33'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'Los Angeles',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    },
                    
                },
                {
                    start    : addHours(new Date(), -6),
                    end      : new Date(),
                    title    : 'Medicina General',
                    allDay   : false,
                    color    : {
                        primary  : '#33FFCA',
                        secondary: '#33FFCA'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: '',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    },
                    
                },
                {
                    start    : addHours(new Date(), -12),
                    end      : addHours(new Date(), -4),
                    title    : 'Evaluación psicologica',
                    allDay   : false,
                    color    : {
                        primary  : '#D1C4E9',
                        secondary: '#D1C4E9'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: '',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    },
                    
                },
                {
                    start    : addHours(new Date(), 5),
                    end      : addHours(new Date(), 7),
                    title    : 'Medicina general',
                    allDay   : false,
                    color    : {
                        primary  : '#336EFF',
                        secondary: '#336EFF'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: '',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    },
                    
                }*/
            ]
        }
    ];
}
