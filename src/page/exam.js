import React, { Component } from 'react';
import '../css/signin.css'
import '../css/page.css'

export class Exam extends Component {
    render() {
        return(
            <div className='page'>
                <body class="text-center">
                    <main class="form-signin">
                        <form>
                            <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="72" height="57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                            <h1 class="h3  fw-normal mb-3">Please sign in</h1>
                            
                            <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                            </div>

                            <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                            </div>
                            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        </form>
                    </main>
                </body>            
            </div>
        )
    }
  }