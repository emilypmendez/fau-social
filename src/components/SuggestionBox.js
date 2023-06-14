import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const SuggestionBox = () => {
    return (
        <>  
            <div className="container dark-background">
                <h1>Suggestion Box</h1>
                <br/>
                <center><p>Have an idea for this website? Let us know!</p></center>
                <form name="contact" method="POST" id="contact-form" data-netlify="true" onSubmit="submit" >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" />
                        <p>
                            <br/>
                        <label>Your Role: 
                            <select name="role[]" multiple>
                                <option value="student" className="form-control" name="student" >Student</option>
                                <option value="faculty" className="form-control" name="faculty" >Faculty</option>
                                <option value="other" className="form-control" name="other" >Other</option>
                            </select>
                        </label>
                        </p>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="suggestion">Suggestion</label>
                        <textarea 
                            className="form-control" 
                            id="suggestion" 
                            rows="3" 
                            placeholder="Enter your suggestion. Please be as descriptive as possible." 
                            name="message"
                        >
                        </textarea>
                    </div>
                    <br/>
                    <center>
                    <button type="submit" className="btn btn-primary">Send</button>
                    </center>
                </form>
            </div>
            
        </>
    )
}

export default SuggestionBox;