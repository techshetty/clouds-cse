import Profile from "../Profile"

function Technical() {
  return (
    <div>
      <div>
        <p className="sub-title">Technical Secretary</p>
        <div className="section divide-2">
          <Profile
            img="https://source.unsplash.com/random?laptop"
            name="Ashay H Sooda"
          />
          <Profile img="Profile/Prakyath.jpeg" name="Prakyath H N" />
        </div>
        <p className="sub-title">Joint Technical Secretary</p>
        <div className="section divide-4">
          <Profile img="Profile/PratheekshaS.png" name="Pratheeksha S" />
          <Profile img="Profile/AshwinPB.jpg" name="Ashwin P B" />
          <Profile
            img="https://source.unsplash.com/random?laptop"
            name="Hamshini Shetty"
          />
          <Profile img="Profile/Moksha.jpg" name="Moksha" />
        </div>
      </div>
    </div>
  )
}

export default Technical
