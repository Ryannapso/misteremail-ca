export function SideBar() {
    return (
        
            <div className="sidebar">
                <button className="compose-btn">
                <i className="material-icons">edit</i>Compose</button>
                <ul className="sidebar-options">
                    <li className="sidebar-option">
                        <span className="material-icons">inbox</span> Inbox
                    </li>
                    <li className="sidebar-option">
                        <span className="material-icons">star</span> Starred
                    </li>
                    <li className="sidebar-option">
                        <span className="material-icons">send</span> Sent
                    </li>
                    <li className="sidebar-option">
                        <span className="material-icons">drafts</span> Drafts
                    </li>
                    <li className="sidebar-option">
                        <span className="material-icons">delete</span> Trash
                    </li>
                </ul>
            </div>
        
    )
}
