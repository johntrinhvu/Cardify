import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as cardsAPI from '../../utilities/cards-api';
import Typography from '@mui/material/Typography';
import './UserTokensPage.css';

export default function UserTokensPage({ user }) {
    const [cards, setCards] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchCardsByUserId = async () => {
            try {
                if (location.pathname === `/cards/personal/${user._id}`) {
                    const fetchedCards = await cardsAPI.fetchCardsByUserId(user._id);
                    const sortedCards = fetchedCards.sort((a, b) => b.createdAt - a.createdAt);
                    setCards(sortedCards);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCardsByUserId();
    }, [location.pathname, user]);

    return (
        <div className="view-cards-page">
            <Typography variant="h4" className="title-viewcards-page">
                User Cards
            </Typography>
            {/* Render user cards here */}
            {cards.map((card) => {
                return (
                    <Link to={`/cards/${card._id}`} key={card._id} className="card-link">
                        <div className="card-page">
                            <div className="card-on-cardpage">
                                <div className="left-column">
                                    <h6 className="card-page-name" style={{ color: card.color }}>{user.name}</h6>
                                    <h6 className="card-page-occupation">{card.occupation}</h6>
                                    <h6 className="card-page-socials">{card.socials}</h6>
                                </div>
                                <div className="middle-column">
                                    <h6 className="card-page-quote">{card.quote}</h6>
                                </div>
                                <div className="right-column">
                                    <h6 className="card-page-email">{card.email}</h6>
                                    <h6 className="card-page-phoneNum">{card.phoneNum}</h6>
                                </div>
                            </div>
                        </div>
                    </Link> 
                );
            })}
        </div>
    );
}