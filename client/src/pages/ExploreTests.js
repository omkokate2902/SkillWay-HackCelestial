import React from 'react'
import Header from '../components/Header'

export default function ExploreTests() {
    return (
        <>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar">
                <Header />
                <div className="app-main">
                    <div class="app-main__outer">
                        <div class="app-main__inner">
                            <div className="container">
                                <div className="row">
                                    <center><h1>Explore Our test libary</h1>
                                        <p>here you will find most secure and unique way of exams </p>
                                    </center>
                                    <div className="col-lg-12">
                                        <form action="" style={{ display: 'flex' }}>
                                            <input type="text" className='form-control rounded mx-3' placeholder='Search Somthing' />
                                            <button className='btn btn-primary'>Search</button>
                                        </form>
                                    </div>
                                    <br />
                                    <br /><br />
                                    <div className="col-md-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-outline-primary card-link">Card link</a>
                                                <a href="#" class="card-link">Another link</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4"><div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-outline-primary card-link">Card link</a>
                                            <a href="#" class="card-link">Another link</a>
                                        </div>
                                    </div></div>
                                    <div className="col-md-4"><div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-outline-primary card-link">Card link</a>
                                            <a href="#" class="card-link">Another link</a>
                                        </div>
                                    </div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
