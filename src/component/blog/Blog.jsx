import React from 'react'
import BlogCard from './BlogCard';
import blog_1 from "../../assets/blog_1.png";
import blog_2 from "../../assets/blog_2.png";
import blog_3 from "../../assets/blog_3.png";

const blogs = [
  {
    id: 1,
    image: blog_1,
    title: "More productive with an atmosphere of greenery",
    description:
      "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
    date: "January 20, 2023",
  },
  {
    id: 2,
    image: blog_2,
    title: "Top 10 indoor plants for your home",
    description:
      "Indoor plants not only beautify your home but also improve air quality and create a calming environment...",
    date: "February 15, 2023",
  },
  {
    id: 3,
    image: blog_3,
    title: "How to care for your garden plants",
    description:
      "Regular watering, proper sunlight, and nutrient-rich soil are essential for maintaining healthy garden plants...",
    date: "March 10, 2023",
  },
];
const Blog = () => {
  return (
   <section className='py-30'>
    <div className="container mx-auto">
           <div className="flex flex-col pb-9">
          <h2 className="text-[#285A43] text-[36px] text-center font-normal leading-[140%] font-lato tracking-[4%]">
          Interesting blog to read
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog