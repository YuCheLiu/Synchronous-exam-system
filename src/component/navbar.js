import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { About } from '../page/about';
import { Exam } from '../page/exam';
import { Home } from '../page/home';

export class Navbar extends Component {
    render() {
        return(
            <div>
                <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white" >Synctogether</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/exam">Exam</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/about">About</Link>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                </nav>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/exam">
                            <Exam />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
  }