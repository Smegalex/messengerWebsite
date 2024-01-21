import "../../../styles/pages/Chat/Messaging.css";

import { useSearchParams } from "react-router-dom";
import { MOCK_DIALOGS_ITEM } from "../Dialogs/MOCK_DIALOGS_ITEM";
import { MOCK_MESSAGING_DATA } from "./MOCK_MESSAGING_DATA";
import { Message } from "../../../components/message/Message";
import React, { useState } from "react";
import $ from "jquery";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}

export const Messaging = () => {
  const forceUpdate = useForceUpdate();

  const [searchParams] = useSearchParams();
  const DIALOG_ID = searchParams.get("dialog_id");
  const CURRENT_DIALOG = MOCK_DIALOGS_ITEM.find(
    (dialog) => dialog.dialog_id === Number(DIALOG_ID)
  );
  let CURRENT_MESSAGES = MOCK_MESSAGING_DATA.find(
    (messages) => messages.dialog_id === Number(DIALOG_ID)
  );
  CURRENT_MESSAGES = CURRENT_MESSAGES ? CURRENT_MESSAGES.messages : null;

  const sendMessageHandler = (event) => {
    const element = document.getElementById("messaging__input");
    $(".messaging__input").on("keyup", function (e) {
      if ((e.key === "Enter" || e.keyCode === 13) && element.value) {
        CURRENT_MESSAGES.push({
          sender_status: "send",
          content: element.value,
        });
        element.value = "";
        console.log(CURRENT_MESSAGES);
        forceUpdate();
      }
    });
  };

  if (!DIALOG_ID) return <></>;

  return (
    <div className="messaging-container">
      <div className="messaging__header">
        <span className="messaging__name">{CURRENT_DIALOG.caption}</span>
        <span className="messaging__status">{CURRENT_DIALOG.time}</span>
      </div>
      <div className="messaging__list">
        {CURRENT_MESSAGES &&
          CURRENT_MESSAGES.map((MESSAGE) => (
            <Message type={MESSAGE.sender_status}>{MESSAGE.content}</Message>
          ))}
      </div>
      <div className="messaging__footer">
        <input
          className="messaging__input"
          id="messaging__input"
          onChange={sendMessageHandler}
        />
      </div>
    </div>
  );
};
