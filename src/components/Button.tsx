import '../styles/button.css';

type ButtonProps = {
    text?: string;
    children?: string;
}

export const Button = (props:ButtonProps)=>{
    return(
        <button>{props.children}</button>
    )
}

