import React, { useState, useEffect, useRef } from 'react';
// import { BiTrash } from 'react-icons/bi';
import * as cardsAPI from '../../utilities/cards-api';
import { useNavigate } from 'react-router-dom';

const EditCardForm = ({ card, updateCard, handleCancel }) => {
  const navigate = useNavigate();
  const [editedCard, setEditedCard] = useState({
    occupation: card.occupation,
    email: card.email,
    phoneNum: card.phoneNum,
    socials: card.socials,
    color: card.color,
    quote: card.quote,
    id: card._id,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCard((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  }
  
  const handleDeleteConfirm = async () => {
    try {
        await cardsAPI.deleteCard(editedCard.id);
        navigate('/cards/new');
    } catch (error) {
        console.error(error);
    }
  }

  const handleDeleteCancel = () => {
    setShowConfirmation(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedCard = await cardsAPI.updateCard(editedCard);
      updateCard(updatedCard);
    } catch(error) {
      console.error(error);
    }
  };

  if (showConfirmation) {
    return (
      <div className="delete-confirmation-overlay">
        <div className="delete-confirmation-dialog">
          <p className="delete-confirmation-paragraph">Are you sure you want to delete?</p>
          <div className="delete-confirmation-buttons">
            <button className="delete-confirm-button" onClick={handleDeleteConfirm}>Yes, Delete</button>
            <button className="delete-cancel-button" onClick={handleDeleteCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
        <div className="edit-card-form-container">
          <form className="edit-card-form" onSubmit={handleSubmit}>
            <div className="edit-occupation-div">
              <div className="edit-field-occupation">
                <label className="edit-occupation">Occupation: </label>
              </div>
              <input 
                style={{ height: 'auto' }} // As per your usage in the code
                type="text" 
                className="edit-occupation-text" 
                name="occupation"
                onChange={handleChange}
                value={editedCard.occupation} 
              />
              
              <button type="button" className="delete-card-button" title="Delete card" onClick={handleDelete}>
                Delete
              </button>
            </div>
      
            <div className="edit-email-div">
              <div className="edit-field-email">
                <label className="edit-email">Email: </label>
              </div>
              <input 
                style={{ height: 'auto' }} // As per your usage in the code
                type="email" 
                className="edit-email-text" 
                name="email" 
                onChange={handleChange}
                value={editedCard.email} 
              />
            </div>

            <div className="edit-phoneNum-div">
              <div className="edit-field-phoneNum">
                <label className="edit-phoneNum">Phone: </label>
              </div>
              <input 
                style={{ height: 'auto' }} // As per your usage in the code
                type="text" 
                className="edit-phoneNum-text" 
                name="phoneNum" 
                onChange={handleChange}
                value={editedCard.phoneNum} 
              />
            </div>

            <div className="edit-socials-div">
              <div className="edit-field-socials">
                <label className="edit-socials">Socials: </label>
              </div>
              <input 
                style={{ height: 'auto' }} // As per your usage in the code
                type="text" 
                className="edit-socials-text" 
                name="socials" 
                onChange={handleChange}
                value={editedCard.socials} 
              />
            </div>

            <div className="edit-color-div">
              <div className="edit-field-color">
                <label className="edit-color">Color: </label>
              </div>
              <input 
                style={{ height: 'auto' }} // As per your usage in the code
                type="text" 
                className="edit-color-text" 
                name="color" 
                onChange={handleChange}
                value={editedCard.color} 
              />
            </div>

            <div className="edit-quote-div">
              <div className="edit-field-quote">
                <label className="edit-quote">Quote: </label>
              </div>
              <input 
                style={{ height: 'auto' }} // As per your usage in the code
                type="text" 
                className="edit-quote-text" 
                name="quote" 
                onChange={handleChange}
                value={editedCard.quote} 
              />
            </div>
      
            <div className="save-button-edit">
              <button type="submit" className="save-changes-button">
                Save Changes
              </button>
              <button type="button" className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
  }
}

export default EditCardForm;