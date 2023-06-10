import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const SuggestionBox = () => {
    return (
        <>  
            <div className="container dark-background">
                <h1>Suggestion Box</h1>
                <p>Have an idea for an event? Let us know!</p>
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label for="suggestion">Suggestion</label>
                        <textarea className="form-control" id="suggestion" rows="3" placeholder="Enter your suggestion"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        </>
    )
}

export default SuggestionBox;