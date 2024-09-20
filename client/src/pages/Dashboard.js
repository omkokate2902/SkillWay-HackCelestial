import React from "react";
import "./dashboard.css";
import Header from "../components/Header";

export default function Dashboard() {
    return (
        <>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar">
                <Header />
                <div className="app-main">
                    <div class="app-main__outer">
                        <div class="app-main__inner">
                            <div class="app-page-title">
                                <div class="page-title-wrapper">
                                    <div class="page-title-heading">
                                        <div class="page-title-icon">
                                            <i class="fa fa-user-o" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            Welcome User!
                                            <div class="page-title-subheading">
                                                Let's explore our platfrom
                                            </div>
                                        </div>
                                    </div>
                                    <div class="page-title-actions">
                                        <button
                                            type="button"
                                            data-toggle="tooltip"
                                            title="Example Tooltip"
                                            data-placement="bottom"
                                            class="btn-shadow mr-3 btn btn-dark"
                                        >
                                            <i class="fa fa-star"></i>
                                        </button>
                                        <div class="d-inline-block dropdown">
                                            <button
                                                type="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                class="btn-shadow  btn btn-info"
                                            >
                                                <span class="btn-icon-wrapper pr-2 opacity-7">
                                                    <i
                                                        class="fa fa-question-circle"
                                                        aria-hidden="true"
                                                    ></i>
                                                </span>
                                                Support
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
