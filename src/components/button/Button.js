import '../../styles/components/Button.css';

export const Button = ({buttonColor, children}) => {
    return (
        <button className="button" style={{backgroundColor: buttonColor}} >{children}</button>
    )
}