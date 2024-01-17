import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";

export const Dialog = ({ dialog_id, userAvatar, caption, message, time }) => {

	const navigation = useNavigate();
	const [searchParams] = useSearchParams();
	const DIALOG_ID = searchParams.get('dialog_id');

	const chooseDialogHandler = (event) => {
		event.preventDefault();
		navigation(`?dialog_id=${dialog_id}`);
	}

	return (
		<div className={`dialogs__item ${Number(DIALOG_ID) === dialog_id ? 'dialog__item--active' : ''}`} onClick={chooseDialogHandler}>
			<div className="dialog__image-container">
				<img
					className="dialogs__image"
					alt="user avatar"
					src={userAvatar}
				/>
			</div>
			<div className="dialogs__item-text">
				<div className="dialog__caption-container">
					<span className="dialog__caption">{caption}</span>
					<span className="dialog__time">{time}</span>
				</div>
				<span className="dialog__message">{message}</span>
			</div>
		</div>
	)
}