import { Header } from "./partials/Header";
import { Button } from "../components/Button";

/*Folha de estilo */
import '../styles/home.css';

/*Images */
import ux from '../assets/ux.png';
import ui from '../assets/ui.png';
import dev from '../assets/dev.png';
import digital from '../assets/digital.png';
import motion from '../assets/motion.png';
import store from '../assets/store.png';
import background from '../assets/background_01.png';


export const Home = ()=>{
    return(
        <div>        
            <Header />
        <div className="container home">
            <main>
                <div className="right">
                    <p>Desenvolvimento focado na Experiência</p>
                    <h4>Entendendo as suas necessidades 
                        e criando a solução.
                    </h4>
                    <h2>
                        Aceleramos o desenvolvimento
                        digital da sua 
                        <strong> Startup</strong>
                    </h2>
                    <h4>
                        Tenha um time de Ux com o poder de 
                        revolucionar a sua ideia ou projeto.
                    </h4>
                    <Button text="Saiba Mais">Saiba mais</Button>
                </div>
            </main>
            <section>
                <div className="w33">
                    <div className="card">
                        <img src={ux} />
                        <h2>UX</h2>
                    </div>
                    <div className="card">
                        <img src={ui} alt={''}/>
                        <h2>UI</h2>
                    </div>
                    <div className="card">
                        <img src={dev} alt={''}/>
                        <h2>Dev</h2>
                    </div>
                    <div className="card">
                        <img src={digital} alt={''}/>
                        <h2>Digital</h2>
                    </div>
                    <div className="card">
                        <img src={motion} alt={''}/>
                        <h2>Motion</h2>
                    </div>
                    <div className="card">
                        <img src={store} alt={''}/>
                        <h2>Store</h2>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}