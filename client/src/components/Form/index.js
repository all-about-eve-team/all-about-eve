import React from "react";

function Form(props) {
    return (
        <div className="container">
            <div className="row justify-content-sm-center">
                <div className="col-sm-6">
                    <div className="container">
                        <div class="contact">
                            <h3>Email Us</h3>

                            <form method="POST" action="send">
                                <p>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        value={props.name}
                                        placeholder="name"
                                        onChange={props.handleInputChange}
                                        required
                                    >
                                    </input>
                                </p>
                                <p>
                                    <label>Company</label>
                                    <input
                                        type="text"
                                        value={props.company}
                                        placeholder="company"
                                        onChange={props.handleInputChange}
                                        required
                                    >

                                    </input>
                                </p>
                                <p>
                                    <label> Email Address</label>
                                    <input
                                        type="text"
                                        value={props.email}
                                        placeholder="email"
                                        onChange={props.handleInputChange}
                                        required
                                    >

                                    </input>
                                </p>
                                <p>
                                    <label>Phone Number</label>
                                    <input
                                        type="number"
                                        value={props.phone}
                                        placeholder="phone"
                                        onChange={props.handleInputChange}
                                        required
                                    >

                                    </input>
                                </p>
                                <p class="full">
                                    <label>Message</label>
                                    <textarea 
                                    type="message"
                                    rows="5"
                                    value={props.phone}
                                    placeholder="message"
                                    onChange={props.handleInputChange}
                                    required
                                    >

                                    </textarea>
                                </p>
                                <p class="full">
                                    <button
                                        type="submit"
                                        onClick={props.handleFormSubmit}
                                    >Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Form;