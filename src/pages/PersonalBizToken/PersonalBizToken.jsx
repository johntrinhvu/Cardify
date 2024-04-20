import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import EditCardForm from '../../components/EditCardForm/EditCardForm';
import * as cardsAPI from '../../utilities/cards-api';
import { Link } from 'react-router-dom';
import './PersonalBizToken.css';

export default function PersonalBizToken() {
    const { cardId } = useParams();
    const [card, setCard] = useState(null);
    const [editing, setEditing] = useState(false);
    const currentUser = getUser()._id;
    const cardUserId = card?.user._id;
    const [originalCard, setOriginalCard] = useState(null);

    useEffect(() => {
        async function fetchCard() {
            try {
                const fetchedCard = await cardsAPI.fetchCardById(cardId);
                setCard(fetchedCard);
                setOriginalCard(fetchedCard);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCard().catch((error) => {
            console.error(error);
        });
    }, [cardId]);

    const handleEdit = () => {
        if (currentUser === cardUserId) {
            setEditing(!editing);
        } else {
            console.log('Not authorized to edit post.')
        }
    };

    const handleCancel = () => {
        setEditing(false);
        setCard(originalCard);
    }

    const updateCard = async (updatedCard) => {
        console.log(updatedCard);
        try {
            setEditing(false);
            setCard({
                ...card,
                occupation: updatedCard.occupation,
                email: updatedCard.email,
                phoneNum: updatedCard.phoneNum,
                socials: updatedCard.socials,
                color: updatedCard.color,
                quote: updatedCard.quote
            });
        } catch (error) {
            console.error(error);
        }
    };

    if (!card) {
        return <h3 className="Loading-card-page">Loading...</h3>;
    }

    return (
        <div className="center-container">
            <div className="card-container">
                <div className="card-content">
                    {editing ? (
                        <EditCardForm card={card} updateCard={updateCard} handleCancel={handleCancel} />
                    ) : (
                        <div className="card-layout">
                            <div className="card-user">
                                <h3 className="user-name-card">{card.user.name}</h3>
                                {currentUser === cardUserId && (
                                    <div className="edit-options">
                                        <button className="edit-button-cardpage" onClick={handleEdit} title="Edit">
                                            Edit Card
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="card-body">
                                <div className="left-column">
                                    <h3 className="occupation-h3">{card.occupation}</h3>
                                    <h3 className="quote-h3">{card.quote}</h3>
                                    <h3 className="socials-h3">{card.socials}</h3>
                                </div>
                                <div className="right-column">
                                    <h3 className="email-h3">{card.email}</h3>
                                    <h3 className="phoneNum-h3">{card.phoneNum}</h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}