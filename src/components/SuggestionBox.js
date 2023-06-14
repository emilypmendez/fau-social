import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const SuggestionBox = () => {
    return (
        <>  
            <div className="container dark-background">
                <h1>Suggestion Box</h1>
                <br/>
                <center><p>Have an idea for this website? Let us know!</p></center>
                <form name="contact" method="post" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        <p>
                            <br/>
                        <label>Your Role: 
                            <select name="role[]" multiple>
                                <option value="student">Student</option>
                                <option value="faculty">Faculty</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        </p>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="suggestion">Suggestion</label>
                        <textarea className="form-control" id="suggestion" rows="3" placeholder="Enter your suggestion. Please be as descriptive as possible."></textarea>
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