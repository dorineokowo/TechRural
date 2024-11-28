import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2>Our Gallery</h2>
        <p>
          Explore the moments that highlight our mission to empower rural youth.
        </p>

        <div className="gallery-grid">
          {/* Image Cards */}
          <div className="gallery-item">
            <img
              src="https://s7d1.scene7.com/is/image/wbcollab/South-Africa-digital-students?qlt=90&fmt=webp&resMode=sharp2"
              alt="Training session with rural youth"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Training session with rural youth</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
              alt="Youth learning computer skills"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Youth learning computer skills</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://s7d1.scene7.com/is/image/wbcollab/South-Africa-digital-students?qlt=90&fmt=webp&resMode=sharp2"
              alt="Training session with rural youth"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Training session with rural youth</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
              alt="Youth learning computer skills"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Youth learning computer skills</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://s7d1.scene7.com/is/image/wbcollab/South-Africa-digital-students?qlt=90&fmt=webp&resMode=sharp2"
              alt="Training session with rural youth"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Training session with rural youth</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
              alt="Youth learning computer skills"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Youth learning computer skills</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://s7d1.scene7.com/is/image/wbcollab/South-Africa-digital-students?qlt=90&fmt=webp&resMode=sharp2"
              alt="Training session with rural youth"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Training session with rural youth</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
              alt="Youth learning computer skills"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Youth learning computer skills</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://s7d1.scene7.com/is/image/wbcollab/South-Africa-digital-students?qlt=90&fmt=webp&resMode=sharp2"
              alt="Training session with rural youth"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Training session with rural youth</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
              alt="Youth learning computer skills"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Youth learning computer skills</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://s7d1.scene7.com/is/image/wbcollab/South-Africa-digital-students?qlt=90&fmt=webp&resMode=sharp2"
              alt="Training session with rural youth"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Training session with rural youth</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
              alt="Youth learning computer skills"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Youth learning computer skills</p>
            </div>
          </div>
          <div className="gallery-item">
            <img
              src="https://s7d1.scene7.com/is/image/wbcollab/South-Africa-digital-students?qlt=90&fmt=webp&resMode=sharp2"
              alt="Training session with rural youth"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Training session with rural youth</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://www.developafrica.org/files/girls%20with%20computer%20training.JPG"
              alt="Youth learning computer skills"
              className="gallery-img"
            />
            <div className="overlay">
              <p>Youth learning computer skills</p>
            </div>
          </div>

          {/* Video Card */}
          <div className="gallery-item video-item">
            <video controls>
              <source src="path_to_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <p>Watch our success stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
