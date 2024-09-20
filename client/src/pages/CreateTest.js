import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateTest() {
    const [questions, setQuestions] = useState([
        { q_no: "", question: "", answer: "", marks: "" }
    ]);

    const [codeKey, setCodeKey] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);

    const isPrivateToggle = (e) => {
        setIsPrivate(e.target.checked);
        console.log(isPrivate)
    };

    const addQuestion = () => {
        setQuestions([...questions, { q_no: "", question: "", answer: "", marks: "" }]);
    };

    const handleInputChange = (index, type, value) => {
        const newQuestions = [...questions];
        newQuestions[index][type] = value || "";
        setQuestions(newQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isPrivate && !codeKey) {
            alert("Please enter a secret code for the private test.");
            return;
        }

        const formData = {
            name: document.getElementById('name').value || "",
            description: document.getElementById('desc').value || "",
            code: isPrivate ? codeKey : "",
            visibility: isPrivate ? "private" : "public",
            questions: questions,
        };

        console.log(formData)
        try {
            const response = await axios.post('http://192.168.84.102:8000/api/tests/createTest', formData, {
                headers: { 'Content-Type': 'application/json' }
            });

            alert('Form successfully submitted!');
            console.log('Response from API:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
                alert(`Error: ${error.response.data.message || 'Something went wrong.'}`);
            } else {
                alert('Network error. Please try again later.');
            }
        }
    };

    return (
        <>
            <div className='app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar'>
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        <div className="logo-src"></div>
                        <div className="header__pane ml-auto">
                            <div><a href="/home">logo</a></div>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                            </button>
                        </span>
                    </div>
                    <div class="app-header__menu">
                        <span>
                            <button type="button"
                                class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span class="btn-icon-wrapper">
                                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                            </button>
                        </span>
                    </div>
                    <div class="app-header__content">
                        <div class="app-header-left">
                            <div class="search-wrapper">
                                <div class="input-holder">
                                    <input type="text" class="search-input" placeholder="Type to search" />
                                    <button class="search-icon"><span></span></button>
                                </div>
                                <button class="close"></button>
                            </div>
                            <ul class="header-menu nav">
                                <li class="nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        <i class="nav-link-icon fa fa-book"> </i>
                                        My Tests
                                    </a>
                                </li>


                                <li class="dropdown nav-item">
                                    <a href="javascript:void(0);" class="nav-link">
                                        <i class="nav-link-icon fa fa-archive"></i>
                                        Explore Tests
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="app-header-right">
                            <div class="header-btn-lg pr-0">
                                <div class="widget-content p-0">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="btn-group">


                                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                    class="p-0 btn">
                                                    <img width="42" class="rounded-circle" src="assets/images/avatars/1.jpg"
                                                        alt="" />
                                                    <i class="fa fa-angle-down ml-2 opacity-8"></i>
                                                </a>
                                                <div tabindex="-1" role="menu" aria-hidden="true"
                                                    class="dropdown-menu dropdown-menu-right">
                                                    <button type="button" tabindex="0" class="dropdown-item">User
                                                        Account</button>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget-content-left  ml-3 header-user-info">
                                            <div class="widget-heading">
                                                Username
                                            </div>
                                            <div class="widget-subheading">
                                                Organisation
                                            </div>
                                        </div>
                                        <div class="widget-content-right header-user-info ml-3">
                                            <button type="button"
                                                class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                                <i class="fa text-white fa-user pr-1 pl-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="app-main">
                    <div className="app-main__outer container">
                        <div className="app-main__inner container">
                            <div className="app-page-title">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Test Name" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="desc">Description</label>
                                        <input type="text" className="form-control" id="desc" placeholder="Description and Rules" required />
                                    </div>

                                    <div className="form-group">
                                        <div className="form-row">
                                            <input
                                                type="checkbox"
                                                onChange={isPrivateToggle}
                                                id="private"
                                                className="mx-2"
                                            />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Is private
                                            </label>
                                        </div>
                                        {isPrivate && (
                                            <div className="form-row">
                                                <input
                                                    className="text"
                                                    type="text"
                                                    placeholder="Enter Secret code"
                                                    value={codeKey}
                                                    onChange={(e) => setCodeKey(e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="questionsSegment">
                                        {questions.map((q, qIndex) => (
                                            <div className="form-row" key={qIndex}>
                                                <div className="form-group col-md-1">
                                                    <label htmlFor={`qNo${qIndex}`}>QNo </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id={`qNo${qIndex}`}
                                                        placeholder="Q No"
                                                        onChange={(e) =>
                                                            handleInputChange(qIndex, 'q_no', e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group col-md-5">
                                                    <label htmlFor={`question${qIndex}`}>Question </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id={`question${qIndex}`}
                                                        placeholder="Enter Question"
                                                        onChange={(e) =>
                                                            handleInputChange(qIndex, 'question', e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group col-md-5">
                                                    <label htmlFor={`answer${qIndex}`}>Correct Answer </label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id={`answer${qIndex}`}
                                                        onChange={(e) =>
                                                            handleInputChange(qIndex, 'answer', e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group col-md-1">
                                                    <label htmlFor={`marks${qIndex}`}>Marks </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id={`marks${qIndex}`}
                                                        placeholder="Marks"
                                                        onChange={(e) =>
                                                            handleInputChange(qIndex, 'marks', e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="addQuestion">
                                        <center>
                                            <button type="button" onClick={addQuestion}><h5>+</h5></button>
                                        </center>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
