import "./modalWrapper.scss";

export const ModalWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="modalWrapper">
            <div className="modalWrapper__el">{children}</div>
        </div>
    );
}