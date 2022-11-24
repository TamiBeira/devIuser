/*Folha de estilo */
import '../../styles/header.css';

/*Imagens */
import logotipo from '../../assets/logotipo.png';

export const Header = ()=>{
    return(
        <div className='container header'>
            <div className='logotipo'>
                <img src={logotipo}  alt={'Logotipo Dev-Iuser'}/>
            </div>
            <div className='menu'>
                <ul>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Loja</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
