import '../../../styles/pages/Chat/Messaging.css'

import {useSearchParams} from "react-router-dom";
import {MOCK_DIALOGS_ITEM} from "../Dialogs/MOCK_DIALOGS_ITEM";
import {useRef} from "react";

export const Messaging = () => {

	const messageRef = useRef();

	const [searchParams] = useSearchParams();
	const DIALOG_ID = searchParams.get('dialog_id');
	const CURRENT_DIALOG = MOCK_DIALOGS_ITEM.find((dialog) => dialog.dialog_id === Number(DIALOG_ID));

	const sendMessageHandler = (event) => {
		messageRef.current.innerText = event.target.value;
	}

	if (!DIALOG_ID) return <></>;

	return (
		<div className="messaging-container">
			<div className="messaging__header">
				<span className="messaging__name">{CURRENT_DIALOG.caption}</span>
				<span className="messaging__status">{CURRENT_DIALOG.time}</span>
			</div>
			<div className="messaging__list">
				<div ref={messageRef} className="message">
					text
				</div>
			</div>
			<div className="messaging__footer">
				<input
					className="messaging__input"
					onChange={sendMessageHandler}
				/>
			</div>
		</div>
	)
}