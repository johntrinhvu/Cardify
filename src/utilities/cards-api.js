import sendRequest from "./send-request";
const BASE_URL = '/api/cards';

export async function createCard(cardData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', cardData, true);
}

export async function fetchCardById(cardId) {
  return sendRequest(`${BASE_URL}/${cardId}`, 'GET');
}

export async function updateCard(updatedCard) {
  try {
    const updated = sendRequest(`${BASE_URL}/${updatedCard.id}`, 'PUT', updatedCard, true);
    return updated;
    
  } catch (error) {
    throw new Error('Failed to update the card');
  }
}

export async function deleteCard(cardId) {
  return sendRequest(`${BASE_URL}/${cardId}`, 'DELETE');
}

export async function fetchCardsByUserId(userId) {
  try {
    const cards = await sendRequest(`${BASE_URL}/personal/${userId}`, 'GET');
    return cards;
    
  } catch (error) {
    throw new Error('Failed to fetch cards');
  }
}
