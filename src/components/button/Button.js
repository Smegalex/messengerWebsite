import '../../styles/components/Button.css';

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

    return (
        <button className={`button ${BUTTON_TYPE[buttonType]} ${BUTTON_SIZE[size]}`} onClick={onClick}>
            {children}
        </button>
    )
}