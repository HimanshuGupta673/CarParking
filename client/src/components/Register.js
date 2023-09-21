import React from 'react'

function Register() {
    return (
        <div className='register_container'>
        <div class="container">
            <h1 class="form-title">Registration</h1>
            <form action="#">

                <div class="main-user-info">
                    <div class="user-input-box">
                        <label for="Place">Place Name</label>
                        <input type="text" id="Place" name="Place" placeholder="Enter Place Name" />
                    </div>
                    <div class="user-input-box">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter Username" />
                    </div>
                    <div class="user-input-box">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email" />
                    </div>
                    <div class="user-input-box">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" />
                    </div>
                    <div class="user-input-box">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" />
                    </div>
                    <div class="user-input-box">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                    </div>
                    <div class="user-input-box">
                        <label for="TotalSlots ">Total Slots</label>
                        <input type="text" id="TotalSlots" name="TotalSlots" placeholder="Total Slots" />
                    </div>
                    <div class="user-input-box">
                        <label for="Prices">Prices for Slots</label>
                        <input type="Pices" id="prices" name="prices" placeholder="Prices for Slots" />
                    </div>
                </div>
                <div class="form-submit-btn">
                    <input className='cursorPtr' type="submit" value="Register" />
                </div>
            </form>
        </div>
        </div>
  )
}

export default Register
