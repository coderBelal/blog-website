



import image from "../assets/p.1.jpg"; 
import"./Blog.css"
import image1 from "../assets/p2.jpg";
import image2 from "../assets/p3.jpg";
import image3 from "../assets/p4.jpg";
import b from "../assets/b.jpg";

const Blog = () => {

    
    const commentsData = [
        {
          avatar: b,
          name: 'ahmad',
          date: 'May 21, 2015 at 1:49 pm',
          text: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat...'
        },
        {
          avatar: b,
          name: 'ahmad',
          date: 'May 22, 2015 at 10:52 am',
          text: 'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat...'
        }
      ];
  return (
    <div className="article">
      <h1>Writing.</h1>
      <div className="article-content">
        <img src={image} alt="Cheerful Loving Couple Bakers Drinking Coffee" />
        <div className="text-content">
          <h2>Cheerful Loving Couple Bakers Drinking Coffee</h2>
          <p>
            It’s no secret that the digital industry is booming. From exciting
            startups to global brands, companies are reaching out to digital
            agencies, responding to the new possibilities available. However,
            the industry is fast becoming overcrowded, heaving with agencies
            offering similar services — on the surface, at least. Producing
            creative, fresh projects is the key to standing out. Unique side
            projects are the best place to innovate, but balancing commercially
            and creatively lucrative work is tricky. So, this article looks at
          </p>
          <h2>Why Integrate Side Projects?</h2>
      <p> Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.</p>
        </div>
      </div>
      <div className="content-section">
        <img src={image1} alt="Traveller Visiting Ice Cave With Amazing Eye-catching Scenes" />
        <h2>Traveller Visiting Ice Cave With Amazing Eye-catching Scenes</h2>
      </div>
      <div className="content-section">
        <img src={image2} alt="Cosy Bright Office In Yellow And Grey Colors" />
        <h2>Cosy Bright Office In Yellow And Grey Colors</h2>
      </div>
      <div className="content-section">
        <img src={image3} alt="Nice Workplace For Brainstorming Meetings" />
        <h2>Nice Workplace For Brainstorming Meetings</h2>
      </div>
      <div className="comments">
        {commentsData.map((comment, index) => (
          <div key={index} className="comment">
            <img src={comment.avatar} alt={comment.name} />
            <div>
              <p><strong>{comment.name}</strong> {comment.date}</p>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
     
      </div>
)}
export default Blog;