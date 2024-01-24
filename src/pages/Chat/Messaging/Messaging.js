import "../../../styles/pages/Chat/Messaging.css";

import { useSearchParams } from "react-router-dom";
import { MOCK_DIALOGS_ITEM } from "../Dialogs/MOCK_DIALOGS_ITEM";
import { MOCK_MESSAGING_DATA } from "./MOCK_MESSAGING_DATA";
import { Message } from "../../../components/message/Message";
import React, {useState} from "react";

export const Messaging = () => {
	const [searchParams] = useSearchParams();
	const DIALOG_ID = searchParams.get("dialog_id");

	const [currentMessages, setCurrentMessages] = useState(MOCK_MESSAGING_DATA.find((MESSAGING) => MESSAGING.dialog_id === Number(DIALOG_ID))?.messages);

	const CURRENT_DIALOG = MOCK_DIALOGS_ITEM.find(
		(dialog) => dialog.dialog_id === Number(DIALOG_ID)
	);

	const sendMessageHandler = (event) => {
		if ((event.key !== 'Enter' && event.charCode !== 13) || event.target.value.trim() === '') return;

		setCurrentMessages([...currentMessages, {
			sender_status: "send",
			content: event.target.value,
		}]);

		event.target.value = '';
	}

	if (!DIALOG_ID) return <></>;

	return (
		<div className="messaging-container">
			<div className="messaging__header">
				<span className="messaging__name">{CURRENT_DIALOG.caption}</span>
				<span className="messaging__status">{CURRENT_DIALOG.time}</span>
			</div>
			<div className="messaging__list">
				{
					currentMessages.map((MESSAGE, index) => (
						<Message key={index} type={MESSAGE.sender_status}>{MESSAGE.content}</Message>
					))
				}
			</div>
			<div className="messaging__footer">
				<input
					className="messaging__input"
					id="messaging__input"
					onKeyPress={sendMessageHandler}
				/>
			</div>
		</div>
	);
};
