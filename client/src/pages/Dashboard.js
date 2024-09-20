import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar">
        <div class="app-header header-shadow">
          <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
              <div>logo</div>
            </div>
          </div>
          <div class="app-header__mobile-menu">
            <div>
              <button
                type="button"
                class="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
          <div class="app-header__menu">
            <span>
              <button
                type="button"
                class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
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
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Type to search"
                  />
                  <button class="search-icon">
                    <span></span>
                  </button>
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
                        <div class="codeSearch mx-3">
                          <input type="text" placeholder="Enter Code.." />
                          <button>Enter Test</button>
                        </div>
                        <div class="createTest">
                          <button>Create Test</button>
                        </div>

                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          class="p-0 btn"
                        >
                          <img
                            width="42"
                            class="rounded-circle"
                            src="assets/images/avatars/1.jpg"
                            alt=""
                          />
                          <i class="fa fa-angle-down ml-2 opacity-8"></i>
                        </a>
                        <div
                          tabindex="-1"
                          role="menu"
                          aria-hidden="true"
                          class="dropdown-menu dropdown-menu-right"
                        >
                          <button
                            type="button"
                            tabindex="0"
                            class="dropdown-item"
                          >
                            User Account
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left  ml-3 header-user-info">
                      <div class="widget-heading">Username</div>
                      <div class="widget-subheading">Organisation</div>
                    </div>
                    <div class="widget-content-right header-user-info ml-3">
                      <button
                        type="button"
                        class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                      >
                        <a href="/profile">
                          <i class="fa text-white fa-user pr-1 pl-1"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
