import '../public/css/style.css';

function Team() {
    return ( 
        <section id="blog" className="section-padding">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
        <div className="section-title">
          <h1 className="display-4 fw-semibold">Team Members</h1>
          <div className="line"></div>
          <p>The Dynamic: Meet the Team</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3" data-aos="fade-down" data-aos-delay="150">
        <div className="team-member image-zoom">
          <div className="image-zoom-wrapper">
            <img className='rounded-circle' src="./src/assets/WhatsApp Image 2024-11-13 at 4.22.28 PM (2).jpeg" alt="" />
          </div>
          <h5 className="mt-3">Daniel Mburu</h5>
          <p>jkhgfksdgfjksfguefsdjkfg</p>
          <a href="https://github.com/bravvjr">Github</a>
        </div>
      </div>
      <div className="col-md-3" data-aos="fade-down" data-aos-delay="250">
      <div className="team-member image-zoom">
          <div className="image-zoom-wrapper">
            <img className='rounded-circle' src="./src/assets/jr.jpg" alt="Betty" />
          </div>
          <h5 className="mt-3">Betty Jelagat</h5>
          <p>jkhgfksdgfjksfguefsdjkfg</p>
          <a href="https://github.com/bettyje">Github</a>
        </div>
      </div>
      <div className="col-md-3" data-aos="fade-down" data-aos-delay="350">
      <div className="team-member image-zoom">
          <div className="image-zoom-wrapper">
            <img className='rounded-circle' src="./src/assets/file.jpg" alt="" />
          </div>
          <h5 className="mt-3">Joses Thuo</h5>
          <p>jkhgfksdgfjksfguefsdjkfg</p>
          <a href="https://github.com/bravvjr">Github</a>
        </div>
      </div>
      <div className="col-md-3" data-aos="fade-down" data-aos-delay="350">
      <div className="team-member image-zoom">
          <div className="image-zoom-wrapper">
            <img className='rounded-circle' src="./src/assets/jr.jpg" alt="" />
          </div>
          <h5 className="mt-3">Bravin Murambi</h5>
          <p>jkhgfksdgfjksfguefsdjkfg</p>
          <a href="https://github.com/bravvjr">Github</a>
        </div>
      </div>
    </div>
  </div>
</section>
     );
}

export default Team;