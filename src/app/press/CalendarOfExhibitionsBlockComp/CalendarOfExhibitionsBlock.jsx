import scss from './CalendarOfExhibitionsBlock.module.scss'
function CalendarOfExhibitionsBlock() {
    const ArrayList = [
        {
            period: 'Май-июнь',
            date: '31.05-02.06.2022',
            location: 'Новосибирск',
            name: '21 Международная научно-практическая конференция "Ветеринария в АПК - 2022"'
        },
        {
            period: 'Май-июнь',
            date: '31.05-02.06.2022',
            location: 'Новосибирск',
            name: '21 Международная научно-практическая конференция "Ветеринария в АПК - 2022"'
        }, {
            period: 'Май-июнь',
            date: '31.05-02.06.2022',
            location: 'Новосибирск',
            name: '21 Международная научно-практическая конференция "Ветеринария в АПК - 2022"'
        }, {
            period: 'Май-июнь',
            date: '31.05-02.06.2022',
            location: 'Новосибирск',
            name: '21 Международная научно-практическая конференция "Ветеринария в АПК - 2022"'
        }, {
            period: 'Май-июнь',
            date: '31.05-02.06.2022',
            location: 'Новосибирск',
            name: '21 Международная научно-практическая конференция "Ветеринария в АПК - 2022"'
        }, {
            period: 'Май-июнь',
            date: '31.05-02.06.2022',
            location: 'Новосибирск',
            name: '21 Международная научно-практическая конференция "Ветеринария в АПК - 2022"'
        },
    ]
    return (
        <div>
            <div className={scss.wrapper}>
                <h1>Календарь выставок</h1>
                <div>
                    <div className={scss.box}>
                        <div>
                            <div>
                                <b>Период</b>
                            </div>
                            <div>
                                <b>Дата участия</b>
                            </div>
                            <div>
                                <b>Место проведения выставки</b>
                            </div>
                            <div>
                                <b>Название выставки</b>
                            </div>
                        </div>
                        {
                            ArrayList.map((el, index) => (
                                <div key={index}>
                                    <div>
                                        <p>{el.period}</p>
                                    </div>
                                    <div>
                                        <p>{el.date}</p>
                                    </div>
                                    <div>
                                        <p>{el.location}</p>
                                    </div>
                                    <div>
                                        <p>{el.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarOfExhibitionsBlock