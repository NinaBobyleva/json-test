import "./modal.scss";

export const Modal = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="modal">{children}</div>
    );
}