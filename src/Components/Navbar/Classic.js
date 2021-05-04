import React, {Component} from "react";
import './Classic.css'

class Classic extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        const show = document.getElementById('navbar')
            if (show.style.display === 'block') {
                show.style.display = 'none';
            } else {
                show.style.display = 'block';
            }
        }


        componentDidMount() {
        const show = document.getElementById('navbar')
            document.addEventListener('mouseup', function (e) {
                if(!show.contains(e.target)){
                    show.style.display = 'none'
                }
            })
        }

    render() {
        return (
            <>
                <header>
                    <div className="logo">
                        <img src="images/svg/logo.svg" alt="hydroponics"/>
                        <h3 className='logo_title'>Green<span>Charba</span></h3>
                    </div>


                    <div className='titles' id='titles'>
                        <ul>
                            <li>
                                About
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Testimonials
                            </li>
                            <li>
                                Help
                            </li>
                        </ul>
                    </div>
                    <div className='header_btns'>
                        <div className='login'>
                            Log in
                        </div>
                        <button className='signUp'>
                            Sign Up
                        </button>
                    </div>
                    <div className='hamburger' id="hamburger">

                        <i className='fa fa-bars fa-2x'
                           onClick={this.toggleMenuHandler}
                        >

                        </i>
                    </div>
                </header>
                <div className='navbar_cls'>
                    <div className='navbar' id='navbar'>
                        <ul>
                            <li>
                                About
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Testimonials
                            </li>
                            <li>
                                Help
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Classic