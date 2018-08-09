import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return (
            <div>
                <h1>Create Flight</h1>
                <form>
                    <p>Number:
                    <input required type="number" placeholder="ex. 123456" name="number"/>
                    </p>
                    <p>Origin:
                    <input required type="text" placeholder="ex. SLC" name="origin"/>
                    </p>
                    <p>Destination:
                    <input required type="text" placeholder="ex. CBBA" name="destination"/>
                    </p>
                    <p>Departs:
                    <input required type="text" placeholder="ex. 12:00PM" name="departs"/>
                    </p>
                    <p>Arrives:
                    <input required type="text" placeholder="ex. 18:00PM" name="arrives"/>
                    </p>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default PostForm;