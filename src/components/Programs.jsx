import React from "react";
import "./Programs.css"; // Ensure you create and import the CSS file

const Programs = () => {
  const programs = [
    {
      title: "Digital Skills Training",
      description: `To equip rural youths for remote work, TechEmpower Rural offers these in-demand digital skills:
      Data Entry & Management,
        Web Development (HTML, CSS, JavaScript),
        Graphic Design & UX/UI Design,
        Digital Marketing & Social Media Management,
        Content Creation & Copywriting
      `,
      imgSrc:
        "https://fpcnational.com/wp-content/uploads/2020/08/remote-working-scaled-1.jpg",
    },
    {
      title: "Basic Computer Literacy",
      description: `Our Basic Computer Literacy program focuses on equipping rural youth with essential computer skills.
      Participants learn how to navigate the internet, use basic computer software like Word and Excel, and access
      online learning platforms. This program aims to bridge the digital divide and give young people the tools they need 
      to succeed in the modern world.`,
      imgSrc: "https://i.ytimg.com/vi/mybYCf4Mov4/maxresdefault.jpg",
    },
    {
      title: "Computer grants",
      description: `Our Computer Grants program is focused on giving young people the essential tools they need to thrive in the digital age. We provide laptops and desktops to students who show exceptional potential but lack the financial resources to purchase their own devices. With the right equipment, students can fully engage in learning, work on assignments, and participate in online communities.

These computers are either brand new or refurbished to the highest standards, ensuring that every recipient has a reliable machine to support their education or entrepreneurial endeavors.`,
      imgSrc:
        "https://assets.taxassist.co.uk/file-uploads/gcs/1681905401_adobestock-107106407-get-a-grant.jpg",
    },
    {
      title: "Internet Access",
      description: `In today's world, access to the internet is crucial for education, communication, and personal development. Our Internet Access program is designed to equip rural youth with the connectivity they need to participate in the digital economy.

Through partnerships with local ISPs, we provide free or subsidized internet to students in underserved areas. This allows them to access online learning platforms, apply for jobs, and connect with opportunities globally. We believe that internet access is a fundamental right, and we're committed to ensuring that no one is left behind in the digital revolution.`,
      imgSrc: "https://mfwa.org/wp-content/uploads/2019/02/internet.jpg",
    },
    {
      title: "Solar/Electricity supply",
      description: `Many rural communities lack consistent access to electricity, making it difficult for students to power their computers and stay connected to the world. Our Solar and Electricity Installation program addresses this issue by installing solar panels and providing reliable electricity to schools, homes, and community centers.

By harnessing renewable energy, we not only provide sustainable power but also reduce the reliance on costly and unreliable grid electricity. This program ensures that students can study and work on their digital projects without worrying about power interruptions.`,
      imgSrc:
        "https://grant-store.com/wp-content/uploads/2023/09/solar-system.jpg",
    },
    {
      title: "Web Development Bootcamp",
      description: `The Web Development Bootcamp is an immersive program designed to teach young adults HTML, CSS, JavaScript, 
      and modern web development practices. By the end of the bootcamp, participants will have built their own websites and gained 
      hands-on experience with real-world web development projects.`,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mJaxa4ycILahJ1ZNfv48OmZHFhD35iTi2A&s",
    },
    {
      title: "Entrepreneurship Training",
      description: `Entrepreneurship Training provides participants with the skills needed to start and run their own businesses. 
      The program covers key topics such as business planning, marketing, and financial management, helping participants 
      create sustainable businesses in the digital economy.`,
      imgSrc:
        "https://www.score.org/sites/default/files/styles/responsive_16_9_750w/public/d7_migration/20/info-SCORE-entrepreneurial-training-infographic.png?itok=hAIH7n3l",
    },
    {
      title: "Career Mentorship",
      description: `Our Career Mentorship program pairs students with professionals working in the digital field. Through one-on-one 
      mentorship, participants receive guidance on career choices, interview preparation, resume writing, and how to navigate 
      the job market.`,
      imgSrc:
        "https://blog.gocrackit.com/wp-content/uploads/2024/05/Picture1-1.png",
    },
  ];

  return (
    <section className="programs-section">
      <div className="container">
        <h2>Our Programs</h2>
        <p>
          We offer a wide range of programs aimed at empowering rural youth
          through education and digital skills.
        </p>

        {programs.map((program, index) => (
          <div key={index} className="program-section">
            <h3>{program.title}</h3>
            <img
              src={program.imgSrc}
              alt={program.title}
              className="program-image"
            />

            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
