import React, { Component } from 'react';
import Profile from '../component/profile';

export class About extends Component {
    render() {
        return(
            <div className='page'>
                <p>Developer: Spencer- YuChe Liu</p>
                <Profile></Profile>
            </div>
        )
    }
  }