const Card = require('../../models/card');

module.exports = {
    create,
    getCardById,
    fetchCardsByUserId,
    updateCard,
    deleteCard
};

async function create(req, res) {
    const { email, occupation, phoneNum, socials, color, quote } = req.body;
    const { name, _id } = req.user;

    try {
      const newCard = await Card.create({ 
        user: { name, _id },
        email: email,
        occupation: occupation,
        phoneNum: phoneNum,
        socials: socials,
        color: color,
        quote: quote
      });

      res.json(newCard);
      console.log(newCard);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating business card' });
    }
}

async function getCardById(req, res) {
    try {
        const cardId = req.params.cardId;
        const card = await Card.findById(cardId).populate('user').exec();

        // if there is no card with that id
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.json(card);

        console.log(card);

    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving card' });
    }

}

async function fetchCardsByUserId(req, res) {
    try {
        // Fetch all cards from the database
        const userId = req.params.userId;
        const cards = await Card.find({ user: userId }).sort({ createdAt: -1 }).exec();

        if (!cards || cards.length === 0) {
          return res.status(404).json({ error: 'No cards found for the user' });
        }
    
        // Send the cards data in the response
        res.json(cards);

      } catch (error) {
        // Handle any errors that occur during the process
        console.error('Failed to fetch cards:', error);
        res.status(500).json({ error: 'Failed to fetch cards' });
      }
}

async function updateCard(req, res) {
    try {
        const { cardId } = req.params;
        const { occupation, email, phoneNum, socials, color, quote } = req.body;
    
        // Find the card by ID
        const card = await Card.findById(cardId);
    
        if (!card) {
          return res.status(404).json({ error: 'Card not found' });
        }
    
        // Update the card fields
        card.occupation = occupation;
        card.email = email;
        card.phoneNum = phoneNum;
        card.socials = socials;
        card.color = color;
        card.quote = quote;
    
        // Save the updated card
        await card.save();
    
        res.json(card);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update the card' });
      }
}

async function deleteCard(req, res) {
    const cardId = req.params.cardId;
    
    try {
        const card = await Card.findById(cardId);

        // if card not exist, send 404
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }

        // now, delete the card
        await Card.findByIdAndDelete(cardId);
        
        // indicate successful delete
        res.status(200).json({ message: 'Card has been deleted' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete the card' });
    }
}
