import React from 'react'

function Profile(props) {
  return (
    <div>
      <h3>Name: Sachin</h3>
      <h3>Age: 40</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ys9w3CAvICMMwC4-iNUS_6yjIfmUsyZDVQ&s" alt="" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consectetur excepturi odio placeat temporibus maxime aperiam, repellendus ipsam modi quibusdam quaerat explicabo exercitationem magnam distinctio laborum voluptas expedita magni. Vel iure quis excepturi ipsum. Laborum impedit quos nemo, aspernatur, autem veritatis accusamus eligendi voluptatem minima amet itaque animi et recusandae magni laudantium consequatur incidunt porro vero dolorem ad perferendis maiores iusto optio mollitia. Aspernatur veniam sequi et provident, iure alias odio cumque perferendis in, esse reprehenderit quia labore amet aut officia. Perspiciatis recusandae laudantium hic voluptatem! Quo est eligendi, voluptatum sequi voluptas quidem temporibus laborum magnam id in molestias molestiae.</p>
      <button onClick={()=>props.setIsLogin(false)}>logout</button>
    </div>
  )
}

export default Profile