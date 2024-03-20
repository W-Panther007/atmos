import { IoIosAdd } from "react-icons/io";
import '../styles/addCard.css';

function AddCard({ onAddClick }) {
    
    return(
        <>
            <div className="add-card-container">
                <div className="heading">ADD CITY</div>
                <div className="add-btn-container" onClick={onAddClick}>
                    <IoIosAdd className="plus-icon"/>
                </div>
            </div>

        </>
    );

}

export default AddCard;