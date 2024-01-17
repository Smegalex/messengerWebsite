import '../../../styles/pages/Chat/Dialog.css';

import {MOCK_DIALOGS_ITEM} from "./MOCK_DIALOGS_ITEM";
import {Dialog} from "./Dialog";

export const Dialogs = () => {

	return (
		<div className="dialogs-container">
			{MOCK_DIALOGS_ITEM.map((DIALOG) =>
				<Dialog
					key={DIALOG.dialog_id}
					{...DIALOG}
				/>
			)}
		</div>
	)
}