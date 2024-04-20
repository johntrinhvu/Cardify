import { useState } from 'react';
import './BizToken.css';


export default function BizToken() {


    const [formData,setFormData] = useState({
        name: '',
        occupation: '',
        email: '',
        PhoneNum: '',
        socials: '',
        color: '',
        image: ''
    });
    //small head
    const updateChange = (event) =>{                //event = when client updates values in form fields
        const{name, value} = event.target;          //setformdata will update formdata with new updated values
        setFormData({...formData, [name]: value});  // ...userform = spread -> new object, copies old userform
    };                                               // [name]: value -> dynamic update values based on what was inputted in field

    
    
    const handleSubmission = async (event) => {
        event.preventDefault(); //stop page from reloading after submission
        
        // try{
        //     const response = await fetch( 'backend endpoint', {
        //         method: 'POST',                                     //making a POST request to backend
        //         headers: {'Content-Type': 'application/json'},      //defines content type to be JSON
        //         body: JSON.stringify(formData)                      //converts formdata to JSON string
        //     });

        //     console.log(formData);                                  //sends formData to console for debugging

        //     if (!response.ok) {                                     //does not autocheck errors like Axios, need to check if request went through properly
        //         throw new Error('Failed to submit form');
        //     }
        //                                                             //await works similarly to .then
        //     const responseData = await response.json();             //does not auto do it like axios, so need to call, await response.json
        //     console.log('form submitted:', responseData);           //to translate response back to json,

        //     setFormData({                                           //reset form
        //         name: '',
        //         occupation: '',
        //         email: '',
        //         PhoneNum: '',
        //         socials: '',
        //         color: '',
        //         image: ''
        //     });

        // } catch (error) {
        //     console.error('Error submitting form:', error.message);
        // }

        console.log(formData);
        setFormData({                                           //reset form
            name: '',
            occupation: '',
            email: '',
            PhoneNum: '',
            socials: '',
            color: '',
            image: ''
        });
    };
    
    return (
      <main>
        <h2 className="BizToken-header2">Your Information</h2>
        <form onSubmit={handleSubmission} className="BizToken-form">
            <label className="BizToken-label">
                Name: <input type="text" name="name" value = {formData.name} onChange={updateChange} className="BizToken-input" />
            </label> <br/>
            <label >
                Occupation: <input type="text" name="occupation" value = {formData.occupation} onChange={updateChange} />
            </label> <br/>
            <label >
                Email: <input type="text" name="email" value = {formData.email} onChange={updateChange} />
            </label> <br/>
            <label >
                Phone Number: <input type="text" name="phonenum" value = {formData.PhoneNum} onChange={updateChange} />
            </label> <br/>
            <label >
                Social Media(s): <input type="text" name="socials" value = {formData.socials} onChange={updateChange} />
            </label> <br/>

            <div>
                <p>Click to add more social media links</p>
            </div>
            <div>
                <h2>Color Scheme & Design</h2>
                <label >
                    Color: <input type="text" name="color" value = {formData.color} onChange={updateChange} />
                </label> <br/>
                <label >
                    Input Image: <input type="text" name="image" value = {formData.image} onChange={updateChange} />
                </label> <br/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        
      </main>
    );
  }