import '../../styles/components/Button.css';

<<<<<<< Updated upstream
export const Button = ({ buttonColor, children }) => {
=======

const BUTTON_TYPE = {
    NEGATIVE: 'button-negative',
    POSITIVE: 'button-positive',
};

const BUTTON_SIZE = {
    SMALL: 'btn-s',
    MEDIUM: 'btn-m',
    LARGE: 'btn-l',
}

export const Button = ({ buttonType, size, onClick, children }) => {

>>>>>>> Stashed changes
    return (
        <button className="button" style={{backgroundColor: buttonColor}}>{children}</button>
    )
}