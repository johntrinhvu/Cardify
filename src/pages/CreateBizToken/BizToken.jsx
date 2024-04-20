import { useState } from 'react';
import * as cardsAPI from '../../utilities/cards-api';
import './BizToken.css';


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
        const { user, occupation, email, phoneNum, socials, color, quote } = formData;

        console.log(user, occupation, email, phoneNum, socials, color, quote)
        try {
            const cardData = {
                user,
                occupation,
                email,
                phoneNum,
                socials,
                color,
                quote
            };

            console.log(cardData)
            
            const createdCard = await cardsAPI.createCard(cardData);
            console.log('hello')        //does not auto do it like axios, so need to call, await response.json
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
        <h2>Your Information</h2>
        <form onSubmit={handleSubmission}>
            <label>
                Name: {user.name}
            </label> <br/>
            <label >
                Occupation: <input type="text" name="occupation" value={formData.occupation} onChange={updateChange} />
            </label> <br/>
            <label >
                Email: <input type="email" name="email" value={formData.email} onChange={updateChange} />
            </label> <br/>
            <label >
                Phone Number: <input type="text" name="phoneNum" value={formData.phoneNum} onChange={updateChange} />
            </label> <br/>
            <label >
                Social Media(s): <input type="text" name="socials" value={formData.socials} onChange={updateChange} />
            </label> <br/>
            <div>
                <h2>Color Scheme & Design</h2>
                <label >
                    Color: <input type="text" name="color" value={formData.color} onChange={updateChange} />
                </label> <br/>
                <label >
                    Input quote: <input type="text" name="quote" value={formData.quote} onChange={updateChange} />
                </label> <br/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        
        </main>
    );
}