import Links from "../components/Links";

const Socials = () => {
  return (
    <main>
      <div className="container">
        <div className="my-info">
          <img
            src="./assets/images/avatar-hrishi.jpg"
            alt="my-image"
            id="my-avatar"
          />
          <h1 id="myName">Hrishikesh Kalita</h1>
          <h2 id="myLocation">Guwahati, India</h2>
          <p id="myBio">&quot;Full-stack developer and avid learner.&quot;</p>
        </div>
        <div className="links-container">
            <Links 
            href="https://github.com/HrishiD89"
            className="link"
            id="Github"
            />
            <Links 
            href="https://www.frontendmentor.io/profile/HrishiD89"
            className="link"
            id="Frontend Mentor"

            />
            <Links 
            href="https://www.linkedin.com/in/hrishikesh-kalita-854000207/"
            className="link"
            id="LinkedIn"

            />
            <Links 
            href=" https://twitter.com/hrishiiiii__"
            className="link"
            id="Twitter"
            />
            <Links 
            href=" https://www.instagram.com/hrishiiiii__/"
            className="link"
            id="Instagram"
            />
        </div>
      </div>
    </main>
  );
};

export default Socials;
