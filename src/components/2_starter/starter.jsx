import './starter.scss'

const Starter = () => {

    return (
        <section className="starter">
            <div className="starter__decorated">
                <div className="container starter__container">
                    <h1 className="starter__title">
                        <span className="starter__title--1">Самый важный человек компании -</span>
                        <span className="starter__title--2">
                        тот, которого не <br/>хватает
                        <span className="test"/>
                    </span>
                        <span className="starter__title--3">Возможно, не хватает Вас</span>
                        <span className="starter__title--4">Возможно - Вам</span>
                    </h1>
                </div>
                <div className="decorated__logo">
                    <div className="decorated__line">
                        <div className="decorated__line--img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Starter }