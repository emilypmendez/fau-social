import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const SuggestionBox = () => {
    return (
        <>  
            <div className="container dark-background">
                <h1>Suggestion Box</h1>
                <br/>
                <center><p>Have an idea for this website? Let us know!</p></center>
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label for="suggestion">Suggestion</label>
                        <textarea className="form-control" id="suggestion" rows="3" placeholder="Enter your suggestion"></textarea>
                    </div>
                    <br/>
                    <center>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </center>
                </form>
            </div>
            
        </>
    )
}

export default SuggestionBox;