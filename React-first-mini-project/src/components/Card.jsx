import React from 'react'

const Card = (User) => {
  return (
   <div className="card">

    <div className="image-box">
        <img src={User.img} alt="Profile"/>
    </div>

    <div className="content">

        <div className="name-row">
            <h2>{User.name}</h2>

            <div className="verified">
                <i className="fa-solid fa-check"></i>
            </div>
        </div>

        <p className="bio">
            {User.bio}
        </p>

        <div className="bottom">

            <div className="stats">

                <div className="stat">
                    <i className="fa-regular fa-user"></i>
                    <span>{User.f_count}</span>
                </div>

                <div className="stat">
                    <i className="fa-regular fa-calendar-check"></i>
                    <span>{User.p_count}</span>
                </div>

            </div>

            <button className="follow-btn">
                Follow
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>

    </div>

</div>
  )
}

export default Card