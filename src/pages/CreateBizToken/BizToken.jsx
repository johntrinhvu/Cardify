import { useState } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import './BizToken.css';
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
console.log(process.env.REACT_APP_API_KEY, 'HEFLSDFOSK');
console.log(genAI);
console.log(process.env.DATABASE_URL);

async function callGeminiAI(userInput) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Give me a one-sentence tagline for the following user input:" + userInput;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
};

export default function BizToken({ user, setUser }) {
    // console.log(user.name, "username")
    // console.log(user, "user")
    const [formData, setFormData] = useState({
        user: user,
        occupation: '',
        email: '',
        phoneNum: '',
        socials: '',
        color: '',
        quote: '',
        error: '',
        createdCard: null
    });

    //small head
    const updateChange = (event) => {                //event = when client updates values in form fields
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            error: ''
        });
    };                                               // [name]: value -> dynamic update values based on what was inputted in field
    
    const handleSubmission = async (event) => {
        console.log('hello')
        event.preventDefault(); //stop page from reloading after submission

        const { user, occupation, email, phoneNum, socials, color } = formData;
        const quote = await callGeminiAI(formData.quote);

        try {
            const cardData = {
                user,
                occupation,
                email,
                phoneNum,
                socials,
                color,
                quote,
            };
            
            const createdCard = await cardsAPI.createCard(cardData);
            console.log('hello')        
            console.log(createdCard); 

            // redirect new card's URL
            window.location.href = `/cards/${createdCard._id}`;

            setFormData({
                ...formData,                                           //reset form
                occupation: '',
                email: '',
                phoneNum: '',
                socials: '',
                color: '',
                quote: '',
                error: ''
            });

        } catch (error) {
            setFormData({ 
                ...formData,
                error: 'Creating card failed - Try Again' 
            });
        }
    };

    return (
      <main>
        <form onSubmit={handleSubmission} className="BizToken-form">
            <h2 className="BizToken-header2">Your Information</h2>
            <label className="BizToken-label">
                <div className='box'><p>Name: {user.name}</p></div>
                
            </label> <br/>
            <label className="BizToken-label">
                 <input type="text" name="occupation" value = {formData.occupation} onChange={updateChange}
                 className="BizToken-input" placeholder='Job...'/>
            </label> <br/>
            <label className="BizToken-label">
                <input type="email" name="email" value = {formData.email} onChange={updateChange} className="BizToken-input"
                placeholder='Email...' />
            </label> <br/>
            <label className="BizToken-label">
                <input type="text" name="phoneNum" value = {formData.phoneNum} onChange={updateChange} 
                className="BizToken-input" placeholder='Phone Number...'/>
            </label> <br/>
            <label className="BizToken-label">
                <input type="text" name="socials" value = {formData.socials} onChange={updateChange}
                 className="BizToken-input" placeholder='Social Media...'/>
            </label> <br/>
            <div>
                <h2 className="BizToken-header2">Color Scheme & Design</h2>
                <label className="BizToken-label">
                     <input type="text" name="color" value = {formData.color} onChange={updateChange} 
                    className="BizToken-input" placeholder='Color Scheme...'/>
                </label> <br/>
                <label className="BizToken-label">
                     <input type="text" name="quote" value = {formData.quote} onChange={updateChange}
                    className="BizToken-input" placeholder='Ask Gemini AI to create a one-sentence tagline' />
                </label> <br/>
            </div>
            <button type='submit' className='BizToken-Submit'>Submit</button>
        </form>

        <div className='B-card'>
            <p className='card-text'>John Doe <br/>
            Example Job</p>
            <br/><p id='ex-social'>Example Social </p>
            <p id='ex-num'>Phone Number</p>
            <p id='ex-email'>example@email.com</p>
            <p id='tagline'>Tagline</p>
        </div>
      </main>
    );
}