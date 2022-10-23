import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div id="blog">
      <div className="text-center mt-6 mb-20 text-4xl">
        Inside Story & <span className="text-orange-800 ">Blog</span>
      </div>
      <div className="blogs">
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/bBzXwS3/poutine.jpg"
              alt="Foods"
            />
          </figure>
          <div className="card-body mt-5 mb-10">
            <p className="text-lg">Delicious & Healthy Foods</p>
            <h2 className="text-md">
              A vast number of foods are both healthy and tasty. By filling your
              plate with fruits, vegetables, quality protein sources, and other
              whole foods, you’ll have meals that are colorful, versatile, and
              good for you.
            </h2>
            <h4 className="text-right text-md font-bold text-orange-500 pt-3">
              Smith
            </h4>
          </div>
        </div>
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/kBVC8hy/blueberry-grunt.jpg"
              alt="Foods"
            />
          </figure>
          <div className="card-body mt-5 mb-3">
            <p className="text-lg">Made By Fresh Ingredients</p>
            <h2 className="text-md">
              I had a really good time with Martha Stewart, who also is somebody
              I really admire a lot. I've learned a lot from her and I think all
              of America has, about attention to detail and using fresh
              ingredients and making things beautiful and special. Read more at
            </h2>
            <h4 className="text-right text-md font-bold text-orange-500 pt-3">
              Kelly
            </h4>
          </div>
        </div>
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure>
            <img
              className="w-full"
              src="https://i.ibb.co/hyHv35x/Tourtiere-viande.jpg"
              alt="Foods"
            />
          </figure>
          <div className="card-body mt-5 mb-10">
            <p className="text-lg">Spacific Family & Kids Zone</p>
            <h2 className="text-md">
              Each space offers unique play-based programming and activities
              that can help children cope by providing a distraction and an
              outlet for their anxiety and other challenging feelings. Giving
              children the choice to choose an activity or game can also help
              them gain a sense of control.
            </h2>
            <h4 className="text-right text-md font-bold text-orange-500 pt-3">
              Joki
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
