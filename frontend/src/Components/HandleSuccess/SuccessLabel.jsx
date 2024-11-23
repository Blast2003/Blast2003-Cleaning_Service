import "./SuccessLabel.css"

function SuccessLabel({ successMessage }) {
    return (
        <div className="success-label">
            {successMessage}
        </div>
    );
}

export default SuccessLabel;
