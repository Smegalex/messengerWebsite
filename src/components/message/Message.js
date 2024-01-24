import "../../styles/components/Message.css"

export const Message = ({type, children}) =>{
    return (
        <div className="message-wrapper">
            <div className={"message message-"+type}>
                {children}
            </div>
        </div>
    )
}