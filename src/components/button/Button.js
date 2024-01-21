import '../../styles/components/Button.css';

export const Button = ({ buttonType, fontSize, onClick, children }) => {
    return (
        <button className={"button button-"+buttonType} style={{fontSize: fontSize + 'px'}} onClick={onClick}>{children}</button>
    )
}