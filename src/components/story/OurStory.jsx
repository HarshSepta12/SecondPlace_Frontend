import React from "react";
import styles from "./OurStory.module.css";
import img1 from '../../../public/rec1 (2).png'

const OurStory = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className={styles.parentStory}>
            <div className="row">
            <div className="col-sm-6">
              <img
                src={img1}
                alt="img1"
                className={`img-fluid ${styles.img1Pos}`}
              />
            </div>
            <div className="col-sm-6 mt-auto">
              <h1>Our Story</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, illum tempore officiis in et placeat molestias. Corporis ea aperiam corrupti autem impedit. Non nihil amet doloribus, minima beatae earum natus eos atque a eius quaerat facilis itaque possimus? Ullam saepe culpa non odio ipsum eaque ad placeat atque, numquam blanditiis voluptate excepturi quasi deleniti officiis temporibus distinctio delectus nobis eveniet molestiae voluptatibus repellendus illum nulla. A beatae deleniti rem, at voluptate voluptas laborum ipsa tempore eligendi minus error sed id soluta animi voluptatibus nostrum atque optio qui similique excepturi labore eaque fugiat, iste fuga? Reiciendis quos in provident eaque dolorum.</p>
            </div>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
