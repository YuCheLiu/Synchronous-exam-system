import React, { Component } from 'react';
import '../css/signin.css'
import '../css/page.css'
import { auth } from '../auth/auth';
import { useAuth0 } from "@auth0/auth0-react";

export class Exam extends Component {
    render() {
        return(
            <div className='page'>
                <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">Online exam -1 </h2>
                            <p class="lead">Math</p>
                        </div>
                        <div class="bg-light shadow-sm mx-auto block"></div>
                    </div>
                    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 p-3">
                            <h2 class="display-5">Online exam -2</h2>
                            <p class="lead">Secience</p>
                        </div>
                        <div class="bg-dark shadow-sm mx-auto block" ></div>
                    </div>
                    
                </div> 
            </div>
        )
    }
  }