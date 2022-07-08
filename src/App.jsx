import { Header } from './components/1_header/header'
import { Starter } from './components/2_starter/starter'
import { Services } from './components/3_services/services'
import { Cases } from './components/4_cases/cases'
import { Happy } from './components/5_happy/happy'
import { Team } from './components/6_team/team'
import { Footer } from './components/7_footer/footer'


const App = () => {

    return (
        <>
            <Header/>
            <Starter/>
            <Services/>
            <Cases/>
            <Happy/>
            <Team/>
            <Footer/>
        </>
    )
}

export { App }