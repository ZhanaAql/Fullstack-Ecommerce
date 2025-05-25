import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px] "
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid
            numquam molestiae aperiam libero voluptatem, tempore quam ipsa
            incidunt tenetur mollitia voluptatibus sequi provident temporibus
            eaque dignissimos ducimus quis sapiente?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nostrum, molestiae impedit blanditiis rerum animi praesentium
            officiis. Voluptas facere eius molestiae harum nostrum, et, adipisci
            eligendi consectetur ipsam delectus quaerat?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            blanditiis est praesentium assumenda quaerat rem hic eveniet
            voluptatum fugiat totam. Officia iure nihil facere error, nisi
            delectus accusamus veniam nulla!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dolorem sit neque. Fugiat, voluptates sequi vitae sit distinctio
            maxime eligendi deleniti, corrupti officiis iure, pariatur accusamus
            laudantium asperiores modi expedita.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dolorem sit neque. Fugiat, voluptates sequi vitae sit distinctio
            maxime eligendi deleniti, corrupti officiis iure, pariatur accusamus
            laudantium asperiores modi expedita.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dolorem sit neque. Fugiat, voluptates sequi vitae sit distinctio
            maxime eligendi deleniti, corrupti officiis iure, pariatur accusamus
            laudantium asperiores modi expedita.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
