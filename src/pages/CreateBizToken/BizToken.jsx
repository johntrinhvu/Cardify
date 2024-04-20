import { useState } from 'react';
import './BizToken.css';



export default function BizToken() {

    // const UserForm = () => {
    //     const [formData,setFormData] = useState({
    //         name: '',
    //         occupation: '',
    //         email: '',
    //         PhoneNum: '',
    //         socials: '',
    //         color: '',
    //         image: ''
    //     });

    //     const updateChange = (event) =>{                //event = when client updates values in form fields
    //         const{name, value} = event.target;          //setformdata will update formdata with new updated values
    //         setFormData({...UserForm, [name]: value});  // ...userform = spread -> new object, copies old userform
    //     };                                               // [name]: value -> dynamic update values based on what was inputted in field
    // };
    const [formData,setFormData] = useState({
        name: '',
        occupation: '',
        email: '',
        PhoneNum: '',
        socials: '',
        color: '',
        image: ''
    });

    const updateChange = (event) =>{                //event = when client updates values in form fields
        const{name, value} = event.target;          //setformdata will update formdata with new updated values
        setFormData({...formData, [name]: value});  // ...userform = spread -> new object, copies old userform
    };                                               // [name]: value -> dynamic update values based on what was inputted in field

    
    
    const handleSubmission = (event) =>{
        event.preventDefault(); //stop page from reloading

        
                                //can add more stuff here to like send values to backend
        console.log(formData);  //sends formdata to console for debugging

        setFormData({           //reset form
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
        <h2>Your Information</h2>
        <form onSubmit={handleSubmission}>
            <label >
                Name: <input type="text" name="name" value = {formData.name} onChange={updateChange} />
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