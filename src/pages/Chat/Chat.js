import '../../styles/pages/Chat/Chat.css';

import {MainLayout} from "../../components/layout/MainLayout";
import {Dialogs} from "./Dialogs/Dialogs";
import {Messaging} from "./Messaging/Messaging";

const NAME_OF_PAGE = 'Chat';

export const Chat = () => {

	return (
		<MainLayout currentPage={NAME_OF_PAGE}>
			<div className="chat-container">
				<Dialogs />
				<Messaging />
			</div>
		</MainLayout>
	)
}