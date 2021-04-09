import React from 'react'
import logo from '../assets/logo.png';
import plus from '../assets/plus.png'
import love from '../assets/Love.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>

            <div class="dashboard">

                <div class="col-1">

                    <div class="logoAndHeader"> {/*display: flex*/}

                        <div class="logo">
                            <img src={logo} />
                        </div>

                        <div class="header">

                            <div id="white-text">
                                Who is
                            </div>
                            <div id="red-text">
                                Imposter ?
                            </div>


                        </div>

                    </div>

                    <div class="side-bar-user-card">

                        <div class="user-card">

                            <div class="user-avatar">
                                <img /> {/*for user's avatar*/}

                            </div>

                            <div class="user-userid">
                                <p>@username</p>  {/*username data */}
                            </div>

                            <div class="logout-button">
                                <button><Link to="/">LOG OUT</Link></button>
                            </div>


                        </div>

                    </div>



                </div>  {/*col-1 ends*/}


                <div class="col-2">

                    <div class="welcome">Welcome Username!</div>

                    <div class="postings">

                        <div class="create-post">

                            <div class="create-post-1"> {/*display:flex*/}
                                <div class="plus-sign">
                                    <img src={plus} />

                                </div>
                                <div class="input-field">
                                    <input type="text" placeholder="Write a post ...." />
                                </div>
                            </div>

                            <div class="post-button">
                                <button>Post</button>
                            </div>

                        </div>

                    </div>
                    <div>
                    
                        <div class="posting">

                            <div class="post1"> {/*display:flex*/}
                                {/*Get the data from backend*/}
                                <div class="avatar">
                                </div>

                                <div class="text">
                                    <p>X platform gives very authentic news. I highly recommend it</p>
                                </div>
                            </div>

                            <div class="second-row">

                            <div class="love-reacts">
                            <div class="love-react">
                                <img src={love} alt="love-react" />
                            </div>

                            <div class="love-reactions">
                                12
                            </div>
                            </div>

                            <div class="show-more-button">
                                <a>Show More...</a>

                            </div>

                            </div>
                            

                        </div>

                    </div>
                        
                        
                   

                </div>


            </div>





        </>
    )
}

export default Dashboard;